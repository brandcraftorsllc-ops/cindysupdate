"use client";

import { useState } from "react";
import { ArrowButton } from "../../ui/ArrowButton";
import { HomesDialog } from "../../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function DesignEye() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sec bg-seaoat">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <Reveal>
            <div className="glass p-7 sm:p-9">
              <p className="eyebrow text-golden">Cindy&apos;s eye for design</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12] text-marsh"
                parts={[{ t: "Some homes need " }, { t: "a little imagination.", italic: true }]}
              />
              <p className="mt-5 text-[1rem] leading-relaxed text-driftwood/80">
                I&apos;ve renovated homes in several states and overseas, and designed my own on St. Simons. I&apos;ll help you
                see past paint colors and dated kitchens to what a home can become.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-driftwood/70">
                Move-in ready or ready for your touch, I&apos;ll help you see the value in both.
              </p>
              <ArrowButton onClick={() => setOpen(true)} variant="golden" className="mt-7">
                Find My Home with Cindy
              </ArrowButton>
              <p className="mt-4 text-[0.78rem] text-driftwood/55">
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
