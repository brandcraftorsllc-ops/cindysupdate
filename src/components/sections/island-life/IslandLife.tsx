"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { COMMUNITIES } from "@/lib/content";
import { ArrowButton } from "../../ui/ArrowButton";
import { HomesDialog } from "../../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { Picture } from "../../ui/Picture";
import { IslandMapArt } from "./IslandMapArt";

export function IslandLife() {
  const [activeId, setActiveId] = useState(COMMUNITIES[0].id);
  const [dialogOpen, setDialogOpen] = useState(false);
  const reduced = useReducedMotion();
  const active = COMMUNITIES.find((c) => c.id === activeId) ?? COMMUNITIES[0];

  const card = (
    <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-marsh shadow-[0_30px_70px_-40px_rgba(46,42,38,0.6)] sm:min-h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={!reduced && { opacity: 0, filter: "blur(14px)", scale: 1.04 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Picture
            src={active.image}
            alt={`${active.name}, Golden Isles`}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-marsh/90 via-marsh/25 to-marsh/5" />
      <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
        <div className="glass p-5 sm:p-6">
          <p className="font-body text-[0.6rem] font-semibold uppercase text-golden" style={{ letterSpacing: "0.24em" }}>
            Golden Isles Living
          </p>
          <h3 className="mt-2 font-heading text-[1.5rem] leading-tight text-marsh sm:text-[1.75rem]">{active.name}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-driftwood/80">{active.blurb}</p>
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="mt-4 inline-flex min-h-[48px] items-center gap-2 font-body text-[0.72rem] font-semibold uppercase text-marsh transition-colors hover:text-tidewater"
            style={{ letterSpacing: "0.18em" }}
          >
            See homes here
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="island-life" className="sec scroll-mt-24 bg-oyster">
      <div className="shell">
        <div className="max-w-[640px]">
          <p className="eyebrow text-golden">Find your island life</p>
          <AnimatedHeading
            as="h2"
            className="mt-4 font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-marsh"
            parts={[{ t: "Every corner of the Golden Isles " }, { t: "feels different.", italic: true }]}
          />
        </div>

        {/* Mobile / tablet community chips */}
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 lg:hidden">
          {COMMUNITIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              aria-pressed={activeId === c.id}
              className={cn(
                "min-h-[48px] shrink-0 snap-start rounded-full border px-4 font-body text-[0.72rem] font-semibold uppercase transition-colors",
                activeId === c.id ? "border-marsh bg-marsh text-oyster" : "border-marsh/20 bg-white/50 text-marsh/75",
              )}
              style={{ letterSpacing: "0.1em" }}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[1.02fr_1fr] lg:gap-8">
          <Reveal className="lg:block">
            <div className="relative mx-auto aspect-[12/11] w-full max-w-[440px] overflow-hidden rounded-[28px] border border-marsh/10 bg-seaoat/45 lg:max-w-none">
              <div aria-hidden="true" className="absolute inset-0 animate-moss-sway">
                <IslandMapArt />
              </div>
              {COMMUNITIES.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    aria-pressed={isActive}
                    aria-label={c.name}
                    className={cn(
                      "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border transition-all duration-300",
                      isActive
                        ? "border-marsh bg-marsh text-oyster shadow-lg"
                        : "border-white/70 bg-white/60 text-marsh backdrop-blur-md hover:bg-white/85",
                      "min-h-[32px] min-w-[32px] justify-center p-1.5 lg:px-3 lg:py-2",
                    )}
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  >
                    <span aria-hidden="true" className="block h-2 w-2 shrink-0 animate-dot rounded-full bg-golden" />
                    <span className="hidden whitespace-nowrap font-body text-[0.7rem] font-medium lg:inline">{c.pinLabel}</span>
                  </button>
                );
              })}
              <span
                className="pointer-events-none absolute bottom-4 left-5 hidden font-body text-[0.58rem] font-semibold uppercase text-marsh/40 lg:block"
                style={{ letterSpacing: "0.24em" }}
              >
                St. Simons · Sea Island · Jekyll · Brunswick · Darien
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>{card}</Reveal>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ArrowButton href="#home-value" variant="marsh">
            What&apos;s My Home Worth?
          </ArrowButton>
          <p className="text-[0.86rem] text-driftwood/65">Not sure which corner fits? That&apos;s my favorite conversation.</p>
        </div>
      </div>
      <HomesDialog open={dialogOpen} onOpenChange={setDialogOpen} area={active.name} mode="Buy" />
    </section>
  );
}
