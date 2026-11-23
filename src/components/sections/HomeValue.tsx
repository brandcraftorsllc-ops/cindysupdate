"use client";

import { BATHROOMS, BEDROOMS, CONDITIONS, HELP_TYPES, HOME_TYPES, IMAGES, TIMELINES } from "@/lib/content";
import { useLeadForm } from "@/lib/useLeadForm";
import { ArrowButton } from "../ui/ArrowButton";
import { Field, SelectOptions } from "../ui/Field";
import { AnimatedHeading } from "../ui/Motion";
import { Picture } from "../ui/Picture";
import { PreviewNotice } from "../ui/PreviewNotice";

const INITIAL = {
  address: "",
  homeType: HOME_TYPES[0],
  beds: BEDROOMS[2],
  baths: BATHROOMS[2],
  condition: CONDITIONS[0],
  timeline: TIMELINES[0],
  name: "",
  phone: "",
  email: "",
  help: HELP_TYPES[3],
};

export function HomeValue() {
  const f = useLeadForm(INITIAL, (v) => (v.address.trim() ? {} : { address: "Please add the property address." }));
  const { values: v, errors: e, bind } = f;

  return (
    <section id="home-value" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Picture
          src={IMAGES.marsh}
          alt="Golden marsh at sunset with a long wooden dock leading toward the horizon"
          className="h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-marsh/78" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-45"
          style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(201,154,75,0.7) 0%, rgba(201,154,75,0) 70%)" }}
        />
      </div>
      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[860px]">
          <div className="glass p-6 sm:p-9 lg:p-11">
            <div className="text-center">
              <p className="eyebrow text-golden">For sellers</p>
              <AnimatedHeading
                as="h2"
                className="mx-auto mt-4 max-w-[620px] font-heading text-[clamp(1.85rem,4vw,2.8rem)] leading-[1.1] text-marsh"
                parts={[{ t: "Curious what your home " }, { t: "could sell for?", italic: true }]}
              />
            </div>
            <form onSubmit={f.onSubmit} className="mt-8 space-y-4" noValidate>
              <Field label="Property address" htmlFor="value-address" error={e.address}>
                <input id="value-address" className="field-input" placeholder="Street address, city" value={v.address} onChange={bind("address")} aria-invalid={!!e.address} />
              </Field>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Home type" htmlFor="value-type">
                  <select id="value-type" className="field-input cursor-pointer" value={v.homeType} onChange={bind("homeType")}>
                    <SelectOptions options={HOME_TYPES} />
                  </select>
                </Field>
                <Field label="Bedrooms" htmlFor="value-beds">
                  <select id="value-beds" className="field-input cursor-pointer" value={v.beds} onChange={bind("beds")}>
                    <SelectOptions options={BEDROOMS} />
                  </select>
                </Field>
                <Field label="Bathrooms" htmlFor="value-baths">
                  <select id="value-baths" className="field-input cursor-pointer" value={v.baths} onChange={bind("baths")}>
                    <SelectOptions options={BATHROOMS} />
                  </select>
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Condition" htmlFor="value-condition">
                  <select id="value-condition" className="field-input cursor-pointer" value={v.condition} onChange={bind("condition")}>
                    <SelectOptions options={CONDITIONS} />
                  </select>
                </Field>
                <Field label="Timeline" htmlFor="value-timeline">
                  <select id="value-timeline" className="field-input cursor-pointer" value={v.timeline} onChange={bind("timeline")}>
                    <SelectOptions options={TIMELINES} />
                  </select>
                </Field>
              </div>
              <Field label="How can I help?" htmlFor="value-help">
                <select id="value-help" className="field-input cursor-pointer" value={v.help} onChange={bind("help")}>
                  <SelectOptions options={HELP_TYPES} />
                </select>
              </Field>
              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Name" htmlFor="value-name" error={e.name}>
                  <input id="value-name" className="field-input" placeholder="Your name" value={v.name} onChange={bind("name")} aria-invalid={!!e.name} />
                </Field>
                <Field label="Phone" htmlFor="value-phone" error={e.phone}>
                  <input id="value-phone" className="field-input" placeholder="(912) 000-0000" value={v.phone} onChange={bind("phone")} aria-invalid={!!e.phone} />
                </Field>
                <Field label="Email" htmlFor="value-email" error={e.email}>
                  <input id="value-email" className="field-input" placeholder="you@email.com" value={v.email} onChange={bind("email")} aria-invalid={!!e.email} />
                </Field>
              </div>
              {f.submitted ? <PreviewNotice className="text-center" /> : null}
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
                <ArrowButton type="submit" variant="golden" className="w-full justify-between sm:w-auto">
                  Get My Home Value
                </ArrowButton>
                <p className="text-[0.78rem] leading-relaxed text-driftwood/60 sm:text-right">
                  No pressure, no obligation. Just a thoughtful read on your home.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
