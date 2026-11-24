"use client";

import { useRef, type ReactNode } from "react";
import type { Listing } from "@/data/listings";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "../ui/Icons";
import { ListingCard } from "../ui/ListingCard";
import { AnimatedHeading, Reveal, type HeadingPart } from "../ui/Motion";

const ARROW =
  "grid h-12 w-12 place-items-center rounded-full border border-teal/20 bg-white text-teal transition-colors hover:border-teal hover:bg-teal hover:text-white";

/**
 * Horizontally scrolling showcase of listing cards with prev/next controls.
 * Shared by "Featured listings" and "Sold" so both look identical.
 */
export function ListingCarousel({
  id,
  eyebrow,
  heading,
  intro,
  listings,
  footnote,
  hideSoldStatus = false,
  className,
}: {
  id: string;
  eyebrow: string;
  heading: HeadingPart[];
  intro?: ReactNode;
  listings: Listing[];
  footnote?: ReactNode;
  hideSoldStatus?: boolean;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 680), behavior: "smooth" });
  };

  return (
    <section id={id} aria-label={eyebrow} className={cn("relative scroll-mt-4 overflow-hidden py-20 sm:py-24 lg:py-28", className)}>
      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-teal">{eyebrow}</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-teal"
              parts={heading}
              accent="text-teal"
            />
            {intro ? <p className="mt-4 max-w-[480px] text-[1rem] leading-relaxed text-ink">{intro}</p> : null}
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label={`Scroll ${eyebrow.toLowerCase()} left`} className={ARROW}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label={`Scroll ${eyebrow.toLowerCase()} right`} className={ARROW}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          role="region"
          aria-label={`${eyebrow} carousel`}
          tabIndex={0}
          className="no-scrollbar -mx-1 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-6 focus-visible:outline-offset-4"
        >
          {listings.map((l, i) => (
            <Reveal key={l.id} delay={Math.min(i, 3) * 0.06} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
              <ListingCard listing={l} sizes="320px" hideSoldStatus={hideSoldStatus} />
            </Reveal>
          ))}
        </div>

        {footnote ? <p className="mt-4 max-w-[640px] text-[0.85rem] leading-relaxed text-ink">{footnote}</p> : null}
      </div>
    </section>
  );
}
