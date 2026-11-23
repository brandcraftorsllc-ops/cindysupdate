"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { AGENT, IMAGES } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { Quote } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col justify-between p-6 sm:p-7">
      <Quote className="h-6 w-6 text-tide" aria-hidden="true" />
      <blockquote className="mt-4 font-body text-[1rem] leading-relaxed text-ink">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4">
        <span className="font-heading text-[1.1rem] text-navy">{t.name}</span>
        {t.kind ? (
          <span
            className="rounded-full bg-foam px-2.5 py-1 font-body text-[0.6rem] font-semibold uppercase text-teal"
            style={{ letterSpacing: "0.18em" }}
          >
            {t.kind}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

/** Final call to action — reused on the About page. */
export function HomeSweetHomeCta() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-br from-seaglass via-foam to-sky shadow-[0_30px_70px_-45px_rgb(20_51_74/0.55)]">
        {/* St. Simons pier fades in on the right; text always sits on the light side. */}
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <Picture src={IMAGES.stSimonsPier} alt="" sizes="560px" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-foam via-foam/40 to-transparent" />
        </div>
        <div className="relative flex flex-col items-start gap-7 p-8 sm:p-12 lg:max-w-[64%] lg:p-14">
          <div className="flex items-center gap-4">
            <Image
              src={IMAGES.cindyPortrait}
              alt="Cindy Baird"
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full border-[3px] border-white object-cover shadow-md"
            />
            <p className="font-body text-[0.95rem] font-medium leading-snug text-navy">
              I&apos;d love to hear
              <br />
              what you&apos;re dreaming of.
            </p>
          </div>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.08] text-navy">
            Let&apos;s find your <span className="font-script text-[0.82em] leading-none text-teal">home sweet home.</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ArrowButton variant="primary" onClick={() => setOpen(true)}>
              Let&apos;s Talk
            </ArrowButton>
            <ArrowButton variant="light" href={AGENT.phoneHref}>
              Call {AGENT.phone}
            </ArrowButton>
          </div>
        </div>
      </div>
      <TalkDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

/** "Kind words" from real clients, then the home-sweet-home CTA. */
export function Testimonials() {
  return (
    <section id="testimonials" className="sec scroll-mt-24 bg-foam">
      <div className="shell">
        <div className="flex flex-col items-center text-center">
          <Image
            src={IMAGES.cindyPortrait}
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md"
          />
          <p className="eyebrow mt-4 text-teal">Kind words</p>
          <AnimatedHeading
            as="h2"
            className="mx-auto mt-3 max-w-[640px] font-heading text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] text-navy"
            parts={[{ t: "What it's like " }, { t: "to work with me.", italic: true }]}
            accent="text-teal"
          />
          <p className="mx-auto mt-3 max-w-[460px] text-[1rem] leading-relaxed text-ink/85">
            In my clients&apos; own words. Thank you to every family who has trusted me with their move.
          </p>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.09} className="h-full">
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <HomeSweetHomeCta />
        </Reveal>
      </div>
    </section>
  );
}
