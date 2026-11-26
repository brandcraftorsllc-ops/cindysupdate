import Link from "next/link";
import { neighborhoodHref, type Neighborhood } from "@/data/neighborhoods";
import { Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/** Neighborhood guide cards (same card design as the homepage Neighborhood Guides). */
export function NeighborhoodCards({ items }: { items: Neighborhood[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((n, i) => (
        <li key={n.slug}>
          <Reveal delay={(i % 3) * 0.07} className="h-full">
            <Link
              href={neighborhoodHref(n)}
              className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-teal/10 bg-white shadow-[0_24px_60px_-42px_rgb(24_103_109/0.55)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              {n.image ? (
                <div className="overflow-hidden">
                  <Picture
                    src={n.image}
                    alt={n.alt ?? ""}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading text-[1.4rem] leading-tight text-teal">{n.name}</span>
                  <span className="shrink-0 font-body text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal group-hover:underline group-hover:underline-offset-4">
                    Explore <span aria-hidden="true">→</span>
                    <span className="sr-only"> the {n.name} neighborhood guide</span>
                  </span>
                </div>
                {n.blurb ? <p className="text-[0.95rem] leading-relaxed text-ink">{n.blurb}</p> : null}
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
