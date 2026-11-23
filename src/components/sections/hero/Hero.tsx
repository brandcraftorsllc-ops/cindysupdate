"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/content";
import { ArrowButton } from "../../ui/ArrowButton";
import { AnimatedHeading } from "../../ui/Motion";
import { Picture } from "../../ui/Picture";
import { HeroLineArt } from "./HeroLineArt";
import { HomeSearch } from "./HomeSearch";

const OYSTER = "244,240,232";

export function Hero() {
  const reduced = useReducedMotion();
  const [sketchDone, setSketchDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setSketchDone(true);
      return;
    }
    const t = setTimeout(() => setSketchDone(true), 2200);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <section id="top" aria-label="Cindy Baird, St. Simons Island real estate" className="relative isolate overflow-hidden bg-oyster">
      <div className="absolute inset-0">
        <Picture
          src={IMAGES.hero}
          alt="A classic coastal home with a deep wraparound porch beneath live oaks draped in Spanish moss at golden hour"
          className="h-full w-full animate-hero-zoom object-cover"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block"
          style={{
            background: `linear-gradient(90deg, rgba(${OYSTER},0.97) 0%, rgba(${OYSTER},0.92) 28%, rgba(${OYSTER},0.6) 56%, rgba(${OYSTER},0.12) 76%, rgba(${OYSTER},0) 92%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 sm:hidden"
          style={{
            background: `linear-gradient(180deg, rgba(${OYSTER},0.86) 0%, rgba(${OYSTER},0.82) 45%, rgba(${OYSTER},0.95) 100%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{
            background: `linear-gradient(0deg, rgba(${OYSTER},0.92) 0%, rgba(${OYSTER},0.3) 55%, rgba(${OYSTER},0) 100%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[15%] top-[-10%] h-[70%] w-[70%] animate-golden-drift rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,154,75,0.42) 0%, rgba(201,154,75,0) 65%)" }}
        />
      </div>

      <HeroLineArt done={sketchDone} />

      <div className="relative flex min-h-[100svh] flex-col">
        <div className="shell flex flex-1 flex-col justify-center pb-8 pt-32 sm:pt-36">
          <div className="max-w-[640px]">
            <p className="font-script text-[1.05rem] leading-relaxed text-tidewater sm:text-[1.2rem]">Home Sweet Agent</p>
            <AnimatedHeading
              as="h1"
              className="mt-4 font-heading text-[clamp(2.45rem,5.6vw,4.25rem)] leading-[1.06] text-marsh"
              parts={[{ t: "I'll help you find " }, { t: "the home you've been imagining.", italic: true }]}
              accent="text-tidewater"
              delay={0.15}
            />
            <p className="mt-6 max-w-[470px] text-[1rem] leading-relaxed text-driftwood/85 sm:text-[1.06rem]">
              I&apos;m Cindy Baird, REALTOR® — St. Simons Island and the Golden Isles, with a designer&apos;s eye and a
              neighbor&apos;s heart. I&apos;ll help you find the right home, or get yours ready for its next chapter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ArrowButton href="#search" variant="golden">
                Start My Home Search
              </ArrowButton>
              <ArrowButton href="#home-value" variant="glass">
                What&apos;s My Home Worth?
              </ArrowButton>
            </div>
            <p className="mt-7 font-script text-[1.4rem] leading-none text-tidewater">Cindy</p>
            <p className="mt-3 max-w-[520px] text-[0.74rem] leading-relaxed text-driftwood/65">
              Cindy Baird, REALTOR® · Keller Williams Realty Golden Isles · 122 Island Professional Park, St. Simons Island, GA
              31522
            </p>
          </div>
        </div>
        <div id="search" className="shell mb-[84px] scroll-mt-24 pb-8 sm:pb-10 md:mb-0">
          <HomeSearch />
        </div>
      </div>
    </section>
  );
}
