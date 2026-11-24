"use client";

import { useState } from "react";
import { ArrowButton } from "../../ui/ArrowButton";
import { HomesDialog } from "../../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

/** Cindy's design story with the before/after kitchen comparison slider. */
export function DesignEye() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sec bg-foam">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="card p-7 sm:p-9">
              <p className="eyebrow text-teal">My eye for design</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12] text-teal"
                parts={[{ t: "Some homes need " }, { t: "a little imagination.", italic: true }]}
              />
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink">
                Before St. Simons, I lived overseas and in several states, renovating every home I lived in. When I moved
                to the island, I drew out the home I wanted and had it built.
              </p>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink/85">
                I&apos;m often told I have an uncanny eye for design — and I use it to help you see what a home could become,
                or show yours at its very best.
              </p>
              <ArrowButton onClick={() => setOpen(true)} variant="primary" className="mt-7">
                Find My Home with Cindy
              </ArrowButton>
              <p className="mt-4 text-[0.9rem] text-ink/85">
                Drag the slider to see a dated kitchen become the room it wanted to be.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </div>
      <HomesDialog open={open} onOpenChange={setOpen} area="Anywhere in the Golden Isles" mode="Buy" />
    </section>
  );
}
