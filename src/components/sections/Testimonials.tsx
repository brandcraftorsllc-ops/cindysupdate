"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { AGENT, IMAGES, TESTIMONIALS } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { Quote } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/** "Kind words" testimonials plus the lighthouse call-to-action band. */
export function Testimonials() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sec bg-seaoat">
      <div className="shell">
        <div className="text-center">
          <p className="eyebrow text-marsh/60">Kind words</p>
          <AnimatedHeading
            as="h2"
            className="mx-auto mt-4 max-w-[620px] font-heading text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] text-marsh"
            parts={[{ t: "What it's like " }, { t: "to work with me.", italic: true }]}
          />
          <p className="mx-auto mt-4 max-w-[440px] text-[0.86rem] leading-relaxed text-driftwood/60">
            Sample testimonials, shown while Cindy gathers her clients&apos; own words and permission.
          </p>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09} className={cn("h-full", t.offset)}>
              <figure className="glass flex h-full flex-col justify-between p-6 sm:p-7">
                <Quote className="h-6 w-6 text-golden/70" aria-hidden="true" />
                <blockquote className="mt-4 font-body text-[0.96rem] leading-relaxed text-driftwood/80">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-marsh/10 pt-4">
                  <span className="font-heading text-[1.05rem] text-marsh">{t.name}</span>
                  <span
                    className="rounded-full border border-marsh/20 px-2.5 py-1 font-body text-[0.55rem] font-semibold uppercase text-marsh/70"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    {t.kind}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[28px] border border-white/40">
            <Picture
              src={IMAGES.lighthouse}
              alt="The St. Simons Island lighthouse on a clear blue-sky morning"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 1240px) 1144px, 100vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-marsh/92 via-marsh/70 to-marsh/35" />
            <div className="relative flex flex-col items-start gap-6 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-14">
              <AnimatedHeading
                as="h2"
                className="max-w-[520px] font-heading text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] text-oyster"
                parts={[{ t: "Let's find your " }, { t: "home sweet home.", italic: true }]}
                accent="text-golden"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <ArrowButton variant="cream" onClick={() => setOpen(true)}>
                  Let&apos;s Talk
                </ArrowButton>
                <ArrowButton variant="ghostLight" href={AGENT.phoneHref}>
                  Call {AGENT.phone}
                </ArrowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <TalkDialog open={open} onOpenChange={setOpen} />
    </section>
  );
}
