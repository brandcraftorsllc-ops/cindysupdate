"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { SOLD_HOMES } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "../ui/Icons";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

const ARROW =
  "grid h-12 w-12 place-items-center rounded-full border border-oyster/30 text-oyster transition-colors hover:border-golden hover:text-golden";

/** Horizontally scrolling carousel of sold homes with prev/next controls. */
export function RecentlySold() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <section id="sold" className="relative scroll-mt-24 overflow-hidden bg-marsh py-20 text-oyster sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(201,154,75,0.55) 0%, rgba(201,154,75,0) 70%)" }}
      />
      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-golden">Recently sold</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-oyster"
              parts={[{ t: "From cottages to estates " }, { t: "to Main Street.", italic: true }]}
              accent="text-golden"
            />
            <p className="mt-4 max-w-[440px] text-[0.95rem] leading-relaxed text-oyster/60">
              Every sale gets the same care, whatever the price.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll sold homes left" className={ARROW}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll sold homes right" className={ARROW}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={track} className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {SOLD_HOMES.map((h, i) => {
            const large = h.size === "large";
            return (
              <Reveal
                key={h.address}
                delay={Math.min(i, 3) * 0.06}
                className={cn("shrink-0 snap-start", large ? "w-[300px] sm:w-[420px]" : "w-[262px] sm:w-[300px]")}
              >
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-oyster/15 bg-marsh/60">
                  <div className={cn("relative overflow-hidden", large ? "h-[280px] sm:h-[340px]" : "h-[220px] sm:h-[250px]")}>
                    <Picture
                      src={h.image}
                      alt={`${h.address}, ${h.city}`}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                      sizes={large ? "420px" : "300px"}
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full bg-golden px-3 py-1.5 font-body text-[0.58rem] font-semibold uppercase text-driftwood shadow-sm"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      Sold
                    </span>
                    <span
                      className="absolute right-4 top-4 rounded-full border border-oyster/40 bg-marsh/45 px-3 py-1.5 font-body text-[0.55rem] font-semibold uppercase text-oyster backdrop-blur-sm"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {h.category}
                    </span>
                    <span
                      className="absolute inset-x-3 bottom-3 truncate rounded-full bg-marsh/50 px-3 py-1 text-center font-body text-[0.5rem] font-semibold uppercase text-oyster/70 backdrop-blur-sm"
                      style={{ letterSpacing: "0.14em" }}
                    >
                      Placeholder photo · {h.address}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-[1.15rem] leading-tight text-oyster">{h.address}</h3>
                    <p className="mt-1 text-[0.8rem] uppercase tracking-[0.14em] text-oyster/55">{h.city}</p>
                    <p className="mt-3 font-body text-[0.95rem] font-semibold text-golden" style={{ letterSpacing: "0.06em" }}>
                      {h.price}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 max-w-[560px] text-[0.76rem] leading-relaxed text-oyster/45">
          Sales shown for reference. No representation is made about which brokerage represented which party in any
          transaction.
        </p>
      </div>
    </section>
  );
}
