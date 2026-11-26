"use client";

import Link from "next/link";
import { useLeadForm } from "@/lib/useLeadForm";
import { ArrowButton } from "../ui/ArrowButton";
import { Field } from "../ui/Field";
import { FormError, ThankYou } from "../ui/FormStatus";
import { ContactFields } from "../ui/LeadDialogs";

/**
 * "Let's Connect" form from cindybairdrealtor.com/contact (full name, phone,
 * email, message + SMS consent notice). Submits through the same /api/leads
 * pipeline as every other form on the site.
 */
export function ContactForm() {
  const f = useLeadForm("Contact page", { name: "", phone: "", email: "", message: "" });

  if (f.status === "sent") {
    return (
      <div className="card p-6 sm:p-9">
        <ThankYou name={f.values.name}>
          <ArrowButton variant="light" onClick={() => f.reset()}>
            Send Another Message
          </ArrowButton>
        </ThankYou>
      </div>
    );
  }

  return (
    <form onSubmit={f.onSubmit} noValidate className="card space-y-5 p-6 sm:p-9">
      <div>
        <h2 className="font-heading text-[clamp(1.6rem,3vw,2.1rem)] leading-tight text-teal">Submit a message</h2>
        <p className="mt-2 text-[0.95rem] text-ink/85">
          Fields marked <span className="font-semibold text-teal">*</span> are required.
        </p>
      </div>
      <ContactFields prefix="contact" values={f.values} errors={f.errors} bind={f.bind} />
      <Field label="Message" htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="field-input resize-y"
          placeholder="How can I help?"
          value={f.values.message}
          onChange={f.bind("message")}
        />
      </Field>
      <p className="text-[0.85rem] leading-relaxed text-ink/85">
        By submitting, you agree to be contacted by Cindy Baird via call, email, and text for real estate services. To opt
        out, you can reply &lsquo;stop&rsquo; at any time or reply &lsquo;help&rsquo; for assistance. You can also click the
        unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.{" "}
        <Link href="/terms-and-conditions" className="font-semibold text-teal underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <FormError status={f.status} />
      <ArrowButton
        type="submit"
        variant="primary"
        disabled={f.status === "sending"}
        aria-busy={f.status === "sending"}
        className="w-full justify-between sm:w-auto"
      >
        {f.status === "sending" ? "Sending…" : "Submit"}
      </ArrowButton>
    </form>
  );
}
