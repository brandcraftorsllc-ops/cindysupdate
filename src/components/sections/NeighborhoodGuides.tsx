import Link from "next/link";
import { NEIGHBORHOOD_GUIDES } from "@/lib/content";
import { MapIcon } from "../ui/Icons";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/**
 * "Neighborhood Guides" from Cindy's original site, redesigned as a card grid.
 * Each card opens that area's guide page (/neighborhoods/[slug]).
 */
export function NeighborhoodGuides() {
  return (
    <section id="neighborhoods" aria-label="Neighborhood guides" className="sec scroll-mt-4 bg-foam">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-teal">Neighborhood guides</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 max-w-[600px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-teal"
              parts={[{ t: "Get to know " }, { t: "the neighborhoods.", italic: true }]}
            />
          </div>
          <p className="max-w-[380px] text-[1rem] leading-relaxed text-ink">
            A closer look at each corner of the Golden Isles I serve — and the homes I&apos;ve sold there.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NEIGHBORHOOD_GUIDES.map((g, i) => (
            <li key={g.name}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Link
                  href={g.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-teal/10 bg-white shadow-[0_24px_60px_-42px_rgb(24_103_109/0.55)] transition-transform duration-500 hover:-translate-y-1.5"
                >
                  {g.image ? (
                    <div className="overflow-hidden">
                      <Picture
                        src={g.image}
                        alt={g.alt ?? ""}
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                  ) : (
                    // St. Marys: no suitable photo on Cindy's site, so a designed panel instead.
                    <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-seaglass via-foam to-sky">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-teal shadow-sm">
                        <MapIcon className="h-7 w-7" aria-hidden="true" />
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 items-center justify-between gap-3 p-5 sm:p-6">
                    <span className="font-heading text-[1.4rem] leading-tight text-teal">{g.name}</span>
                    <span className="shrink-0 font-body text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal group-hover:underline group-hover:underline-offset-4">
                      Explore <span aria-hidden="true">→</span>
                      <span className="sr-only"> the {g.name} neighborhood guide</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
