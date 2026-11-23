"use client";

import { useState } from "react";
import { FEATURED_LISTING } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { ShowingDialog } from "../ui/LeadDialogs";
import { Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

export function FeaturedListing() {
  const [mode, setMode] = useState<"showing" | "ask" | null>(null);
  const l = FEATURED_LISTING;
  if (!l.active) return null;

  return (
    <section id="featured-listing" className="sec scroll-mt-24 bg-seaoat">
      <div className="shell">
        <Reveal>
          <div className="rounded-[34px] border border-white/60 bg-oyster/70 p-3 shadow-[0_40px_90px_-60px_rgba(46,42,38,0.7)] sm:p-4">
            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative overflow-hidden rounded-[26px] bg-marsh/10">
                <Picture
                  src={l.image}
                  alt={`${l.address}, ${l.city}`}
                  className="h-full min-h-[280px] w-full object-cover sm:min-h-[380px] lg:min-h-[500px]"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
                <span
                  className="absolute left-4 top-4 rounded-full bg-golden px-3.5 py-1.5 font-body text-[0.58rem] font-semibold uppercase text-driftwood shadow-sm"
                  style={{ letterSpacing: "0.22em" }}
                >
                  New Listing
                </span>
                <span
                  className="absolute inset-x-4 bottom-4 truncate rounded-full bg-marsh/55 px-3 py-1.5 text-center font-body text-[0.52rem] font-semibold uppercase text-oyster/85 backdrop-blur-sm"
                  style={{ letterSpacing: "0.16em" }}
                >
                  Placeholder photo · featured listing
                </span>
              </div>

              <div className="glass flex flex-col justify-center p-6 sm:p-8 lg:p-9">
                <p className="eyebrow text-golden">Featured listing</p>
                <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.3rem)] leading-tight text-marsh">{l.address}</h2>
                <p className="mt-1 font-body text-[0.78rem] uppercase text-driftwood/60" style={{ letterSpacing: "0.16em" }}>
                  {l.city}
                </p>
                <p className="mt-4 font-heading text-[1.45rem] text-tidewater">{l.price}</p>
                <p className="mt-3 font-body text-[0.72rem] font-semibold uppercase text-marsh/70" style={{ letterSpacing: "0.16em" }}>
                  {l.beds} BD · {l.baths} BA · {l.sqft} SF
                </p>
                <div className="mt-5 space-y-1 text-[0.95rem] leading-relaxed text-driftwood/80">
                  {l.description.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3">
                  <ArrowButton variant="golden" onClick={() => setMode("showing")} className="w-full justify-between">
                    Schedule a Showing
                  </ArrowButton>
                  <ArrowButton variant="glass" onClick={() => setMode("ask")} className="w-full justify-between">
                    Ask Cindy About This Home
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <ShowingDialog open={!!mode} mode={mode ?? "showing"} onOpenChange={(o) => (o ? null : setMode(null))} />
    </section>
  );
}
