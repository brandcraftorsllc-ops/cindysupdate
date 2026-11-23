"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { TalkDialog } from "../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

const VALUES = ["Repeat & referral clients", "Your interests first", "A designer's eye"];

export function About() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Picture
          src={IMAGES.oakRoad}
          alt="A canopy of live oaks draped with Spanish moss over a quiet island road"
          className="h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-marsh/50 via-oyster/68 to-oyster/95" />
      </div>
      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/60 shadow-[0_40px_90px_-50px_rgba(46,42,38,0.8)]">
                <Picture
                  src={IMAGES.portrait}
                  alt="Cindy Baird on the porch of her St. Simons Island home"
                  className="aspect-[3/4] w-full object-cover"
                  sizes="380px"
                />
                <span
                  className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/60 bg-white/55 px-3 py-1 font-body text-[0.5rem] font-semibold uppercase text-marsh/70 backdrop-blur-md"
                  style={{ letterSpacing: "0.16em" }}
                >
                  Placeholder · Cindy&apos;s portrait
                </span>
              </div>
              <div className="glass-sm absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 px-4 py-3 text-center">
                <p className="font-body text-[0.72rem] font-medium text-marsh">Living on St. Simons since 2000</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass p-7 sm:p-9 lg:p-10">
              <p className="eyebrow text-golden">Your agent</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 font-heading text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] text-marsh"
                parts={[{ t: "Hello, I'm " }, { t: "Cindy.", italic: true }]}
              />
              <p className="mt-5 text-[1rem] leading-relaxed text-driftwood/80">
                I grew up in a military family, lived overseas, and came home to Georgia in 2000. My children and their families
                live here too. I&apos;m not here to sell you the most expensive house. I&apos;m here to find the right one, whether
                it&apos;s move-in ready or a home you&apos;ll make your own. Many of my clients come back to me again and again, and
                that means everything to me.
              </p>
              <p className="mt-5 font-script text-[1.5rem] leading-relaxed text-tidewater sm:text-[1.7rem]">Cindy Baird</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {VALUES.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-marsh/20 bg-white/55 px-3 py-1.5 font-body text-[0.62rem] font-semibold uppercase text-marsh/75"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {v}
                  </li>
                ))}
              </ul>
              <ArrowButton variant="golden" className="mt-6" onClick={() => setOpen(true)}>
                Let&apos;s Talk
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
      <TalkDialog open={open} onOpenChange={setOpen} />
    </section>
  );
}
