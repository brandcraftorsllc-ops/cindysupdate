"use client";

import { useEffect } from "react";
import { BEST_TIMES, FEATURED_LISTING, HELP_TYPES, TIMELINES } from "@/lib/content";
import { useLeadForm } from "@/lib/useLeadForm";
import { ArrowButton } from "./ArrowButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./Dialog";
import { Field, SelectOptions } from "./Field";
import { PreviewNotice } from "./PreviewNotice";

type DialogProps = { open: boolean; onOpenChange: (open: boolean) => void };

const CONTENT = "max-h-[92svh] overflow-y-auto rounded-[28px] border-white/70 bg-white/88 p-6 backdrop-blur-2xl sm:p-8";
const TITLE = "mt-2 font-heading text-[1.7rem] leading-tight text-marsh";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.62rem] font-semibold uppercase text-golden" style={{ letterSpacing: "0.22em" }}>
      {children}
    </p>
  );
}

type ContactFieldsProps = {
  prefix: string;
  values: { name: string; phone: string; email: string };
  errors: Record<string, string | undefined>;
  bind: (key: "name" | "phone" | "email") => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ContactFields({ prefix, values, errors, bind }: ContactFieldsProps) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor={`${prefix}-name`} error={errors.name}>
          <input id={`${prefix}-name`} className="field-input" placeholder="Your name" value={values.name} onChange={bind("name")} aria-invalid={!!errors.name} />
        </Field>
        <Field label="Phone" htmlFor={`${prefix}-phone`} error={errors.phone}>
          <input id={`${prefix}-phone`} type="tel" className="field-input" placeholder="(912) 000-0000" value={values.phone} onChange={bind("phone")} aria-invalid={!!errors.phone} />
        </Field>
      </div>
      <Field label="Email" htmlFor={`${prefix}-email`} error={errors.email}>
        <input id={`${prefix}-email`} type="email" className="field-input" placeholder="you@email.com" value={values.email} onChange={bind("email")} aria-invalid={!!errors.email} />
      </Field>
    </>
  );
}

/** "Let's Talk" — general contact dialog. */
export function TalkDialog({ open, onOpenChange }: DialogProps) {
  const f = useLeadForm({ name: "", phone: "", email: "", help: HELP_TYPES[0], bestTime: BEST_TIMES[0], message: "" });
  const { reset } = f;
  useEffect(() => {
    if (!open) reset();
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${CONTENT} max-w-[540px]`}>
        <DialogHeader className="text-left">
          <Eyebrow>Home Sweet Agent</Eyebrow>
          <DialogTitle className={TITLE}>Let&apos;s talk about your move.</DialogTitle>
        </DialogHeader>
        <form onSubmit={f.onSubmit} className="mt-5 space-y-4" noValidate>
          <ContactFields prefix="talk" values={f.values} errors={f.errors} bind={f.bind} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="How can I help?" htmlFor="talk-help">
              <select id="talk-help" className="field-input cursor-pointer" value={f.values.help} onChange={f.bind("help")}>
                <SelectOptions options={HELP_TYPES} />
              </select>
            </Field>
            <Field label="Best time to reach you" htmlFor="talk-time">
              <select id="talk-time" className="field-input cursor-pointer" value={f.values.bestTime} onChange={f.bind("bestTime")}>
                <SelectOptions options={BEST_TIMES} />
              </select>
            </Field>
          </div>
          <Field label="Message" htmlFor="talk-message">
            <textarea id="talk-message" rows={3} className="field-input resize-none" placeholder="Tell me a little about your plans." value={f.values.message} onChange={f.bind("message")} />
          </Field>
          {f.submitted ? <PreviewNotice /> : null}
          <ArrowButton type="submit" variant="golden" className="mt-2 w-full justify-between">
            Send to Cindy
          </ArrowButton>
        </form>
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
  const f = useLeadForm({ name: "", phone: "", email: "", help: "Buying", timeline: TIMELINES[0], message: "" });
  const { reset, setValues } = f;
  useEffect(() => {
    if (open) setValues((v) => ({ ...v, help: mode === "Sell" ? "Selling" : "Buying" }));
    else reset();
  }, [open, mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const label = mode === "Sell" ? "Selling" : "Buying";
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${CONTENT} max-w-[520px]`}>
        <DialogHeader className="text-left">
          <Eyebrow>
            {label} · {area || "Golden Isles"}
          </Eyebrow>
          <DialogTitle className={TITLE}>{mode === "Sell" ? "Let's talk about your home." : "Let's find your home."}</DialogTitle>
        </DialogHeader>
        <p className="mt-2 text-[0.9rem] text-driftwood/70">
          {[area, homeType].filter(Boolean).join(" · ") || "A few details and Cindy will take it from here."}
        </p>
        <form onSubmit={f.onSubmit} className="mt-5 space-y-4" noValidate>
          <ContactFields prefix="homes" values={f.values} errors={f.errors} bind={f.bind} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="How can I help?" htmlFor="homes-help">
              <select id="homes-help" className="field-input cursor-pointer" value={f.values.help} onChange={f.bind("help")}>
                <SelectOptions options={HELP_TYPES} />
              </select>
            </Field>
            <Field label="Timeline" htmlFor="homes-timeline">
              <select id="homes-timeline" className="field-input cursor-pointer" value={f.values.timeline} onChange={f.bind("timeline")}>
                <SelectOptions options={TIMELINES} />
              </select>
            </Field>
          </div>
          <Field label="Anything else I should know?" htmlFor="homes-message">
            <textarea id="homes-message" rows={3} className="field-input resize-none" placeholder="Must-haves, neighborhoods you love, anything at all." value={f.values.message} onChange={f.bind("message")} />
          </Field>
          {f.submitted ? <PreviewNotice /> : null}
          <ArrowButton type="submit" variant="golden" className="mt-2 w-full justify-between">
            Send Me Homes
          </ArrowButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/** Featured-listing dialog: schedule a showing or ask a question. */
export function ShowingDialog({ open, onOpenChange, mode = "showing" }: DialogProps & { mode?: "showing" | "ask" }) {
  const f = useLeadForm({ name: "", phone: "", email: "", help: "Buying", when: "", message: "" });
  const { reset } = f;
  useEffect(() => {
    if (!open) reset();
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const d = FEATURED_LISTING;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${CONTENT} max-w-[520px]`}>
        <DialogHeader className="text-left">
          <Eyebrow>Featured listing · {d.city}</Eyebrow>
          <DialogTitle className={TITLE}>{mode === "ask" ? "Ask Cindy about this home." : "Let's schedule a showing."}</DialogTitle>
        </DialogHeader>
        <p className="mt-2 text-[0.9rem] text-driftwood/70">
          {d.address} · {d.price}
        </p>
        <form onSubmit={f.onSubmit} className="mt-5 space-y-4" noValidate>
          <ContactFields prefix="showing" values={f.values} errors={f.errors} bind={f.bind} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="How can I help?" htmlFor="showing-help">
              <select id="showing-help" className="field-input cursor-pointer" value={f.values.help} onChange={f.bind("help")}>
                <SelectOptions options={HELP_TYPES} />
              </select>
            </Field>
            <Field label="Preferred date & time" htmlFor="showing-when">
              <input id="showing-when" type="datetime-local" className="field-input" value={f.values.when} onChange={f.bind("when")} />
            </Field>
          </div>
          <Field label="Message" htmlFor="showing-message">
            <textarea id="showing-message" rows={3} className="field-input resize-none" placeholder="Anything I should know before we meet?" value={f.values.message} onChange={f.bind("message")} />
          </Field>
          {f.submitted ? <PreviewNotice /> : null}
          <ArrowButton type="submit" variant="golden" className="mt-2 w-full justify-between">
            {mode === "ask" ? "Send My Question" : "Request This Showing"}
          </ArrowButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
