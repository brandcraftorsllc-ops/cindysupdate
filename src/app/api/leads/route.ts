import { NextResponse } from "next/server";
import { validateContact, type LeadPayload } from "@/lib/leads";

/**
 * Receives every website lead (contact, home search, showing, valuation).
 *
 * Delivery: set LEAD_WEBHOOK_URL in the Vercel project's environment variables
 * to any endpoint that accepts a JSON POST — e.g. a Zapier / Make webhook that
 * emails Cindy, or a CRM's inbound-lead webhook (Follow Up Boss, kvCORE, …).
 * Optional LEAD_WEBHOOK_SECRET is sent as a Bearer token.
 *
 * Without LEAD_WEBHOOK_URL the route answers 503 so the form tells the visitor
 * to call instead — a lead is never silently dropped or faked as "sent".
 */
export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const lead: LeadPayload = {
    source: clean(body?.source, 120) || "Website",
    name: clean(body?.name, 200),
    phone: clean(body?.phone, 40),
    email: clean(body?.email, 320),
    details: Object.fromEntries(
      Object.entries(body?.details ?? {})
        .slice(0, 30)
        .map(([k, v]) => [clean(k, 60), clean(v)]),
    ),
  };

  const errors = validateContact(lead);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 422 });
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString(), site: "cindybaird" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead delivery failed", err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
