"use client";

import { useEffect, type ChangeEvent } from "react";
import { BEST_TIMES, HELP_TYPES, TIMELINES } from "@/lib/content";
import type { FieldErrors } from "@/lib/leads";
import { useLeadForm } from "@/lib/useLeadForm";
import { ArrowButton } from "./ArrowButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Dialog";
import { errorProps, Field, SelectOptions } from "./Field";
import { FormError, ThankYou } from "./FormStatus";

type DialogProps = { open: boolean; onOpenChange: (open: boolean) => void };

const CONTENT = "max-h-[92svh] overflow-y-auto rounded-[28px] border-white bg-white p-6 sm:p-8";
const TITLE = "mt-2 font-heading text-[1.75rem] leading-tight text-teal";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.72rem] font-semibold uppercase text-teal" style={{ letterSpacing: "0.2em" }}>
      {children}
    </p>
  );
}

type ContactFieldsProps = {
  prefix: string;
  values: { name: string; phone: string; email: string };
  errors: FieldErrors;
  bind: (key: "name" | "phone" | "email") => (e: ChangeEvent<HTMLInputElement>) => void;
};

/** Name / phone / email trio shared by every lead form. */
export function ContactFields({ prefix, values, errors, bind, columns = 2 }: ContactFieldsProps & { columns?: 2 | 3 }) {
  const fields = (
    <>
      <Field label="Name" htmlFor={`${prefix}-name`} error={errors.name} required>
        <input
          {...errorProps(`${prefix}-name`, errors.name, true)}
          name="name"
          autoComplete="name"
          className="field-input"
          placeholder="Your name"
          value={values.name}
          onChange={bind("name")}
        />
      </Field>
      <Field label="Phone" htmlFor={`${prefix}-phone`} error={errors.phone} required>
        <input
          {...errorProps(`${prefix}-phone`, errors.phone, true)}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className="field-input"
          placeholder="(912) 555-0123"
          value={values.phone}
          onChange={bind("phone")}
        />
      </Field>
      <Field
        label="Email"
        htmlFor={`${prefix}-email`}
        error={errors.email}
        required
        className={columns === 2 ? "sm:col-span-2" : undefined}
      >
        <input
          {...errorProps(`${prefix}-email`, errors.email, true)}
          name="email"
          type="email"
          autoComplete="email"
          className="field-input"
          placeholder="you@example.com"
          value={values.email}
          onChange={bind("email")}
        />
      </Field>
    </>
  );
  return <div className={columns === 3 ? "grid gap-4 sm:grid-cols-3" : "grid gap-4 sm:grid-cols-2"}>{fields}</div>;
}

function SubmitRow({ sending, label }: { sending: boolean; label: string }) {
  return (
    <ArrowButton type="submit" variant="primary" disabled={sending} aria-busy={sending} className="mt-2 w-full justify-between">
      {sending ? "Sending…" : label}
    </ArrowButton>
  );
}

/** "Let's Talk" — general contact dialog. */
export function TalkDialog({ open, onOpenChange }: DialogProps) {
  const f = useLeadForm("Let's Talk", { name: "", phone: "", email: "", help: HELP_TYPES[0], bestTime: BEST_TIMES[0], message: "" });
  const { reset } = f;
  useEffect(() => {
    if (!open) reset();
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${CONTENT} max-w-[540px]`}>
        {f.status === "sent" ? (
          <ThankYou name={f.values.name} />
        ) : (
          <>
            <DialogHeader className="text-left">
              <Eyebrow>Home Sweet Agent</Eyebrow>
              <DialogTitle className={TITLE}>Let&apos;s talk about your move.</DialogTitle>
            </DialogHeader>
            <form onSubmit={f.onSubmit} className="mt-5 space-y-4" noValidate>
              <ContactFields prefix="talk" values={f.values} errors={f.errors} bind={f.bind} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="How can I help?" htmlFor="talk-help">
                  <select id="talk-help" name="help" className="field-input cursor-pointer" value={f.values.help} onChange={f.bind("help")}>
                    <SelectOptions options={HELP_TYPES} />
                  </select>
                </Field>
                <Field label="Best time to reach you" htmlFor="talk-time">
                  <select id="talk-time" name="bestTime" className="field-input cursor-pointer" value={f.values.bestTime} onChange={f.bind("bestTime")}>
                    <SelectOptions options={BEST_TIMES} />
                  </select>
                </Field>
              </div>
              <Field label="Message" htmlFor="talk-message">
                <textarea id="talk-message" name="message" rows={3} className="field-input resize-none" placeholder="Tell me a little about your plans." value={f.values.message} onChange={f.bind("message")} />
              </Field>
              <FormError status={f.status} />
              <SubmitRow sending={f.status === "sending"} label="Send to Cindy" />
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Home-search dialog opened from "Send Me Homes", community cards and Buy/Sell CTAs. */
export function HomesDialog({
  open,
  onOpenChange,
  area,
  mode = "Buy",
  homeType,
}: DialogProps & { area?: string; mode?: "Buy" | "Sell"; homeType?: string }) {
  const f = useLeadForm(`Home search · ${area || "Golden Isles"}`, {
    name: "",
    phone: "",
    email: "",
    help: "Buying",
    timeline: TIMELINES[0],
    area: area ?? "",
    homeType: homeType ?? "",
    message: "",
  });
  const { reset, setValues } = f;
  useEffect(() => {
    if (open) setValues((v) => ({ ...v, help: mode === "Sell" ? "Selling" : "Buying", area: area ?? "", homeType: homeType ?? "" }));
    else reset();
  }, [open, mode, area, homeType]); // eslint-disable-line react-hooks/exhaustive-deps

  const label = mode === "Sell" ? "Selling" : "Buying";
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${CONTENT} max-w-[540px]`}>
        {f.status === "sent" ? (
          <ThankYou name={f.values.name} />
        ) : (
          <>
            <DialogHeader className="text-left">
              <Eyebrow>
                {label} · {area || "Golden Isles"}
              </Eyebrow>
              <DialogTitle className={TITLE}>{mode === "Sell" ? "Let's talk about your home." : "Let's find your home."}</DialogTitle>
            </DialogHeader>
            <p className="mt-2 text-[0.92rem] text-ink/80">
              {[area, homeType].filter(Boolean).join(" · ") || "A few details and I'll take it from here."}
            </p>
            <form onSubmit={f.onSubmit} className="mt-5 space-y-4" noValidate>
              <ContactFields prefix="homes" values={f.values} errors={f.errors} bind={f.bind} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="How can I help?" htmlFor="homes-help">
                  <select id="homes-help" name="help" className="field-input cursor-pointer" value={f.values.help} onChange={f.bind("help")}>
                    <SelectOptions options={HELP_TYPES} />
                  </select>
                </Field>
                <Field label="Timeline" htmlFor="homes-timeline">
                  <select id="homes-timeline" name="timeline" className="field-input cursor-pointer" value={f.values.timeline} onChange={f.bind("timeline")}>
                    <SelectOptions options={TIMELINES} />
                  </select>
                </Field>
              </div>
              <Field label="Anything else I should know?" htmlFor="homes-message">
                <textarea id="homes-message" name="message" rows={3} className="field-input resize-none" placeholder="Must-haves, neighborhoods you love, anything at all." value={f.values.message} onChange={f.bind("message")} />
              </Field>
              <FormError status={f.status} />
              <SubmitRow sending={f.status === "sending"} label={mode === "Sell" ? "Talk to Cindy" : "Send Me Homes"} />
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
