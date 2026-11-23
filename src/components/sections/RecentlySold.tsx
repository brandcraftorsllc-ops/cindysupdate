"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { SOLD_LISTINGS } from "@/data/listings";
import { AGENT } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "../ui/Icons";
import { ListingCard } from "../ui/ListingCard";
import { AnimatedHeading, Reveal } from "../ui/Motion";

const ARROW =
  "grid h-12 w-12 place-items-center rounded-full border border-navy/20 bg-white text-navy transition-colors hover:border-teal hover:bg-teal hover:text-white";

/** Horizontally scrolling carousel of real closed sales from Cindy's portfolio. */
export function RecentlySold() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 680), behavior: "smooth" });
  };

  return (
    <section id="sold" aria-label="Recently sold" className="relative scroll-mt-24 overflow-hidden bg-salt py-20 sm:py-24 lg:py-28">
      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-teal">Recently sold</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-navy"
              parts={[{ t: "From cottages to " }, { t: "island estates.", italic: true }]}
              accent="text-teal"
            />
            <p className="mt-4 max-w-[460px] text-[1rem] leading-relaxed text-ink/85">
              Every sale gets the same care, whatever the price — from a Brunswick lot to a $2.15M home on St. Simons.
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

        <div
          ref={track}
          role="region"
          aria-label="Sold homes carousel"
          tabIndex={0}
          className="no-scrollbar -mx-1 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-6 focus-visible:outline-offset-4"
        >
          {SOLD_LISTINGS.map((l, i) => (
            <Reveal key={l.id} delay={Math.min(i, 3) * 0.06} className={cn("w-[280px] shrink-0 snap-start sm:w-[320px]")}>
              <ListingCard listing={l} sizes="320px">
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-teal hover:text-navy"
                >
                  View sale details <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens cindybairdrealtor.com in a new tab)</span>
                </a>
              </ListingCard>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 max-w-[640px] text-[0.8rem] leading-relaxed text-ink/80">
          A selection of closed sales from my portfolio — see all of them on{" "}
          <a href={`${AGENT.existingSite}/properties`} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal underline underline-offset-2">
            cindybairdrealtor.com
          </a>
          . No representation is made about which brokerage represented which party in any transaction.
        </p>
      </div>
    </section>
  );
}
