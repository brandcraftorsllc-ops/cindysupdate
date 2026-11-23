"use client";

import { useState } from "react";
import { FEATURED_LISTINGS, type Listing } from "@/data/listings";
import { AGENT } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { House } from "../ui/Icons";
import { HomesDialog, ShowingDialog } from "../ui/LeadDialogs";
import { ListingCard } from "../ui/ListingCard";
import { AnimatedHeading, Reveal } from "../ui/Motion";

/**
 * Featured Listings — renders every listing in FEATURED_LISTINGS (src/data/listings.ts)
 * as a responsive grid (1 / 2 / 3 columns). When there are none, it shows a
 * personal "tell me what you're looking for" panel instead of placeholder homes.
 */
export function FeaturedListings() {
  const [showing, setShowing] = useState<{ listing: Listing; mode: "showing" | "ask" } | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const listings = FEATURED_LISTINGS;

  return (
    <section id="listings" className="sec scroll-mt-24 bg-foam">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-teal">Featured listings</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 max-w-[560px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-navy"
              parts={[{ t: "Homes I'm " }, { t: "proud to show.", italic: true }]}
              accent="text-teal"
            />
          </div>
          <ArrowButton href={AGENT.homeSearchUrl} variant="light">
            Search All Homes
          </ArrowButton>
        </div>

        {listings.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 0.08} className="h-full">
                <ListingCard listing={l}>
                  <div className="flex flex-col gap-2">
                    <ArrowButton variant="primary" className="w-full justify-between" onClick={() => setShowing({ listing: l, mode: "showing" })}>
                      Schedule a Showing
                    </ArrowButton>
                    <div className="flex items-center justify-between gap-3 px-1">
                      <button
                        type="button"
                        onClick={() => setShowing({ listing: l, mode: "ask" })}
                        className="min-h-[44px] font-body text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-teal hover:text-navy"
                      >
                        Ask Cindy
                      </button>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] content-center font-body text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy/85 hover:text-teal"
                      >
                        Full details <span aria-hidden="true">↗</span>
                        <span className="sr-only">(opens cindybairdrealtor.com in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </ListingCard>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10">
            <div className="card grid items-center gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr_auto] md:gap-10">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-seaglass text-teal">
                <House className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight text-navy">
                  My next listings are on the way.
                </h3>
                <p className="mt-2 max-w-[560px] text-[1rem] leading-relaxed text-ink/90">
                  I don&apos;t have a home on the market to feature right this moment. Tell me what you&apos;re dreaming of and
                  I&apos;ll reach out personally as soon as the right one comes up anywhere in the Golden Isles.
                </p>
              </div>
              <ArrowButton variant="primary" onClick={() => setSearchOpen(true)}>
                Tell Me What You Want
              </ArrowButton>
            </div>
          </Reveal>
        )}
      </div>

      <ShowingDialog
        open={!!showing}
        mode={showing?.mode ?? "showing"}
        listing={showing?.listing}
        onOpenChange={(o) => (o ? null : setShowing(null))}
      />
      <HomesDialog open={searchOpen} onOpenChange={setSearchOpen} area="Anywhere in the Golden Isles" mode="Buy" />
    </section>
  );
}
