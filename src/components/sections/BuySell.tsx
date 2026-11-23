"use client";

import type { StaticImageData } from "next/image";
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
  intro: string;
  image: StaticImageData;
  alt: string;
  points: string[];
  cta: string;
  span: string;
  imagePosition?: string;
}[] = [
  {
    id: "buying",
    label: "Buying",
    heading: [{ t: "From first look to " }, { t: "keys in hand.", italic: true }],
    intro: "I'll learn how you want to live, then find the home and neighborhood that fit.",
    image: IMAGES.beachFamilySunset,
    alt: "A family walking hand in hand along the beach at sunset",
    points: ["Homes matched to your lifestyle", "Neighborhood insight", "Veterans' program help", "First-time buyer support"],
    cta: "Start Buying",
    span: "lg:col-span-7",
    imagePosition: "object-[50%_80%]",
  },
  {
    id: "selling",
    label: "Selling",
    heading: [{ t: "Show your home " }, { t: "at its best.", italic: true }],
    intro: "Design-minded advice before you list, and marketing that shows off the lifestyle.",
    image: IMAGES.coastalLivingRoom,
    alt: "A bright coastal living room with teal accents and an open kitchen",
    points: ["Pricing that fits the market", "Design advice before listing", "Marketing that shows the lifestyle", "Downsizing support"],
    cta: "Start Selling",
    span: "lg:col-span-5",
  },
];

export function BuySell() {
  const [dialog, setDialog] = useState<{ open: boolean; mode: "Buy" | "Sell" }>({ open: false, mode: "Buy" });
  return (
    <section className="sec bg-salt">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <AnimatedHeading
            as="h2"
            className="max-w-[540px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-navy"
            parts={[{ t: "Buying and selling, " }, { t: "the thoughtful way.", italic: true }]}
            accent="text-teal"
          />
          <p className="max-w-[340px] text-[1rem] leading-relaxed text-ink/85">
            Whether it&apos;s your first home or your next chapter, I&apos;ll make the process feel calm — and a little bit
            joyful.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {CARDS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className={`group ${c.span}`}>
              <article
                id={c.id}
                className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[28px] bg-navy shadow-[0_30px_70px_-45px_rgb(20_51_74/0.7)]"
              >
                <div className="overflow-hidden">
                  <Picture
                    src={c.image}
                    alt={c.alt}
                    imgClassName={c.imagePosition}
                    className="aspect-[16/10] w-full transition-transform [transition-duration:1400ms] ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 660px, 100vw"
                  />
                </div>
                {/* Solid navy text panel — white text ≈ 13:1, gold accents ≈ 6:1. */}
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="eyebrow text-gold">{c.label}</p>
                  <AnimatedHeading
                    as="h3"
                    className="mt-3 max-w-[440px] font-heading text-[clamp(1.9rem,3.2vw,2.5rem)] leading-[1.1] text-white"
                    parts={c.heading}
                    accent="text-sky"
                  />
                  <p className="mt-3 max-w-[460px] text-[1rem] leading-relaxed text-white/90">{c.intro}</p>
                  <ul className="mt-5 grid gap-2.5 sm:max-w-[460px] sm:grid-cols-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-body text-[0.92rem] font-medium leading-snug text-white">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <ArrowButton
                      variant="gold"
                      onClick={() => setDialog({ open: true, mode: c.id === "selling" ? "Sell" : "Buy" })}
                    >
                      {c.cta}
                    </ArrowButton>
                  </div>
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
