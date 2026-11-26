"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { Property } from "@/data/properties.generated";
import { propertyHref, toListing } from "@/lib/properties";
import { ListingCard } from "../ui/ListingCard";
import { Reveal } from "../ui/Motion";

/** Filterable grid of portfolio properties; each card opens its detail page. */
export function PortfolioGrid({ properties }: { properties: Property[] }) {
  const areas = useMemo(() => {
    const counts = new Map<string, number>();
    properties.forEach((p) => counts.set(p.area, (counts.get(p.area) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [properties]);
  const [area, setArea] = useState<string | null>(null);
  const shown = area ? properties.filter((p) => p.area === area) : properties;

  return (
    <>
      <div role="group" aria-label="Filter by area" className="no-scrollbar -mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1">
        {[["All areas", properties.length] as const, ...areas].map(([name, count]) => {
          const value = name === "All areas" ? null : name;
          const active = area === value;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setArea(value)}
              aria-pressed={active}
              className={cn(
                "min-h-[44px] shrink-0 snap-start rounded-full border px-4 font-body text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                active ? "border-teal bg-teal text-white" : "border-teal/20 bg-white text-teal hover:border-teal",
              )}
            >
              {name} <span className={active ? "text-white/85" : "text-ink/70"}>({count})</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-[0.95rem] text-ink" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "home" : "homes"}
        {area ? ` in ${area}` : ""}.
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={(i % 3) * 0.05} className="h-full">
              <Link
                href={propertyHref(p)}
                aria-label={`${p.title}, ${p.area} — sold for ${p.price}`}
                className="block h-full rounded-[28px] transition-transform duration-500 hover:-translate-y-1.5 focus-visible:outline-offset-4"
              >
                <ListingCard listing={toListing(p)} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
