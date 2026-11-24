import { LIFESTYLE } from "@/lib/content";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

type Item = (typeof LIFESTYLE)[number];

function Tile({ item, large, delay }: { item: Item; large: boolean; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-teal/10 bg-white shadow-[0_24px_50px_-38px_rgb(24_103_109/0.6)]">
        <div className={`relative overflow-hidden ${large ? "h-[240px] sm:h-[300px]" : "h-[200px]"}`}>
          <Picture
            src={item.image}
            alt={item.alt}
            sizes={large ? "(min-width: 1024px) 570px, 100vw" : "(min-width: 1024px) 285px, (min-width: 640px) 50vw, 100vw"}
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
        {/* Title sits below the photo, not on it. */}
        <figcaption className="flex flex-1 items-center px-5 py-4 font-heading text-[1.25rem] leading-snug text-teal sm:text-[1.3rem]">
          {item.title}
        </figcaption>
      </figure>
    </Reveal>
  );
}

/**
 * "Lifestyle and Community" from Cindy's original site, laid out the same way:
 * left half — Golfing (large), then Restaurants + Community;
 * right half — Beach Walks + Art Center, then Kayaking (large).
 */
export function Lifestyle() {
  const halves = [
    { items: LIFESTYLE.slice(0, 3), largeIndex: 0 },
    { items: LIFESTYLE.slice(3, 6), largeIndex: 2 },
  ];
  return (
    <section id="lifestyle" aria-label="Lifestyle and community" className="sec scroll-mt-4 bg-salt">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-teal">Lifestyle and community</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 max-w-[620px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-teal"
              parts={[{ t: "Living the dream " }, { t: "on the Golden Isles.", italic: true }]}
            />
          </div>
          <p className="max-w-[380px] text-[1rem] leading-relaxed text-ink">
            Life here is about more than the house — it&apos;s the golf, the festivals, the beach walks and the people who
            make this place home.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {halves.map((half, h) => (
            <ul key={h} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {half.items.map((item, j) => {
                const large = j === half.largeIndex;
                return (
                  <li key={item.title} className={large ? "sm:col-span-2" : undefined}>
                    <Tile item={item} large={large} delay={(h * 3 + j) * 0.05} />
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
