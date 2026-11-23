"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { Check } from "../ui/Icons";
import { HomesDialog } from "../ui/LeadDialogs";
import { AnimatedHeading, Reveal, type HeadingPart } from "../ui/Motion";
import { Picture } from "../ui/Picture";

const CARDS: {
  id: "buying" | "selling";
  label: string;
  heading: HeadingPart[];
  image: typeof IMAGES.familyBeach;
  alt: string;
  points: string[];
  cta: string;
  span: string;
  minHeight: string;
}[] = [
  {
    id: "buying",
    label: "Buying",
    heading: [{ t: "From first look to " }, { t: "keys in hand.", italic: true }],
    image: IMAGES.familyBeach,
    alt: "A young family walking East Beach at sunrise on St. Simons Island",
    points: ["Homes matched to your lifestyle", "New construction guidance", "Veterans' program help", "First-time buyer support"],
    cta: "Start Buying",
    span: "lg:col-span-7",
    minHeight: "min-h-[440px] sm:min-h-[500px]",
  },
  {
    id: "selling",
    label: "Selling",
    heading: [{ t: "Show your home " }, { t: "at its best.", italic: true }],
    image: IMAGES.livingRoom,
    alt: "A bright coastal living room with white oak floors and windows to the marsh",
    points: ["Pricing that fits the market", "Design advice before listing", "Marketing that shows the lifestyle", "Downsizing support"],
    cta: "Start Selling",
    span: "lg:col-span-5",
    minHeight: "min-h-[420px] sm:min-h-[460px]",
  },
];

export function BuySell() {
  const [dialog, setDialog] = useState<{ open: boolean; mode: "Buy" | "Sell" }>({ open: false, mode: "Buy" });
  return (
    <section className="sec bg-oyster">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <AnimatedHeading
            as="h2"
            className="max-w-[520px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-marsh"
            parts={[{ t: "Buying and selling, " }, { t: "the thoughtful way.", italic: true }]}
          />
          <p className="max-w-[320px] text-[0.95rem] leading-relaxed text-driftwood/70">
            Whether it&apos;s your first home or your next chapter, the process should feel calm — and a little bit joyful.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {CARDS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className={`group ${c.span}`}>
              <article id={c.id} className={`relative scroll-mt-28 overflow-hidden rounded-[28px] border border-white/40 ${c.minHeight}`}>
                <Picture
                  src={c.image}
                  alt={c.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 660px, 100vw"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-marsh/92 via-marsh/65 to-marsh/25" />
                <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                  <p className="eyebrow text-golden">{c.label}</p>
                  <AnimatedHeading
                    as="h3"
                    className="mt-3 max-w-[420px] font-heading text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.12] text-oyster"
                    parts={c.heading}
                    accent="text-golden"
                  />
                  <ul className="mt-5 grid gap-2 sm:max-w-[420px] sm:grid-cols-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-body text-[0.86rem] leading-snug text-oyster/80">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-golden" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ArrowButton
                    variant="cream"
                    className="mt-7 self-start"
                    onClick={() => setDialog({ open: true, mode: c.id === "selling" ? "Sell" : "Buy" })}
                  >
                    {c.cta}
                  </ArrowButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <HomesDialog
        open={dialog.open}
        onOpenChange={(open) => setDialog((d) => ({ ...d, open }))}
        mode={dialog.mode}
        area="Anywhere in the Golden Isles"
      />
    </section>
  );
}
