"use client";

import Image from "next/image";
import { IMAGES, VALUATION } from "@/lib/content";
import type { FieldErrors } from "@/lib/leads";
import { useLeadForm } from "@/lib/useLeadForm";
import { ArrowButton } from "../ui/ArrowButton";
import { errorProps, Field, SelectOptions } from "../ui/Field";
import { FormError, ThankYou } from "../ui/FormStatus";
import { ContactFields } from "../ui/LeadDialogs";
import { AnimatedHeading } from "../ui/Motion";
import { Picture } from "../ui/Picture";

const INITIAL = {
  address: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  condition: "",
  timeline: "",
  assistance: "",
  name: "",
  phone: "",
  email: "",
};

type Values = typeof INITIAL;

const REQUIRED: { key: keyof Values; message: string }[] = [
  { key: "address", message: "Please add the property address." },
  { key: "propertyType", message: "Please choose a property type." },
  { key: "condition", message: "Please choose the property's condition." },
  { key: "timeline", message: "Please choose a selling timeline." },
  { key: "assistance", message: "Please tell me how I can help." },
];

function validate(v: Values): FieldErrors {
  const e: FieldErrors = {};
  for (const r of REQUIRED) if (!v[r.key].trim()) e[r.key] = r.message;
  return e;
}

export function HomeValue() {
  const f = useLeadForm("Home value request", INITIAL, validate);
  const { values: v, errors: e, bind } = f;

  const select = (key: keyof Values, label: string, options: string[], required = false, placeholder = "Select…") => (
    <Field label={label} htmlFor={`value-${key}`} error={e[key]} required={required}>
      <select
        {...errorProps(`value-${key}`, e[key], required)}
        name={key}
        className="field-input cursor-pointer"
        value={v[key]}
        onChange={bind(key)}
      >
        <SelectOptions options={options} placeholder={placeholder} />
      </select>
    </Field>
  );

  return (
    <section id="home-value" className="relative scroll-mt-4 overflow-hidden">
      <div className="absolute inset-0">
        <Picture src={IMAGES.marshSunset} alt="" className="h-full w-full" />
      </div>
      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[880px]">
          <div className="card p-6 sm:p-9 lg:p-11">
            {f.status === "sent" ? (
              <ThankYou name={v.name}>
                <ArrowButton variant="light" onClick={() => f.reset()}>
                  Value Another Home
                </ArrowButton>
              </ThankYou>
            ) : (
              <>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={IMAGES.cindyPortrait}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <p className="eyebrow mt-4 text-teal">For sellers</p>
                  <AnimatedHeading
                    as="h2"
                    className="mx-auto mt-3 max-w-[640px] font-heading text-[clamp(1.85rem,4vw,2.8rem)] leading-[1.1] text-teal"
                    parts={[{ t: "Curious what your home " }, { t: "could sell for?", italic: true }]}
                    accent="text-teal"
                  />
                  <p className="mx-auto mt-3 max-w-[520px] text-[1rem] leading-relaxed text-ink/90">
                    Share a few details and I&apos;ll prepare a thoughtful, personal read on your home&apos;s value.
                  </p>
                </div>

                <form onSubmit={f.onSubmit} className="mt-8 space-y-5" noValidate aria-describedby="value-required-note">
                  <p id="value-required-note" className="text-[0.82rem] text-ink/80">
                    Fields marked <span className="font-semibold text-teal">*</span> are required.
                  </p>
                  <Field label="Property address" htmlFor="value-address" error={e.address} required>
                    <input
                      {...errorProps("value-address", e.address, true)}
                      name="address"
                      autoComplete="street-address"
                      className="field-input"
                      placeholder="Street address, city"
                      value={v.address}
                      onChange={bind("address")}
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {select("propertyType", "Property type", VALUATION.propertyTypes, true)}
                    {select("bedrooms", "Bedrooms", VALUATION.bedrooms)}
                    {select("bathrooms", "Bathrooms", VALUATION.bathrooms)}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {select("condition", "Property condition", VALUATION.conditions, true)}
                    {select("timeline", "Selling timeline", VALUATION.timelines, true)}
                  </div>

                  {select("assistance", "Type of assistance needed", VALUATION.assistance, true)}

                  <ContactFields prefix="value" values={v} errors={e} bind={bind} columns={3} />

                  <FormError status={f.status} className="text-center" />

                  <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-between">
                    <ArrowButton
                      type="submit"
                      variant="primary"
                      disabled={f.status === "sending"}
                      aria-busy={f.status === "sending"}
                      className="w-full justify-between sm:w-auto"
                    >
                      {f.status === "sending" ? "Sending…" : "Get My Home Value"}
                    </ArrowButton>
                    <p className="text-[0.86rem] leading-relaxed text-ink/85 sm:text-right">
                      No pressure, no obligation — just a thoughtful read on your home.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
