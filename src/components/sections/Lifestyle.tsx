import { LIFESTYLE } from "@/lib/content";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/**
 * "Lifestyle and Community" from Cindy's original site, redesigned as a bento
 * photo grid. Captions sit on solid white pills so they stay readable on any photo.
 */
export function Lifestyle() {
  return (
    <section
      id="lifestyle"
      aria-label="Lifestyle and community"
      className="sec scroll-mt-4 bg-salt"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-teal">Lifestyle and community</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 max-w-[620px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-teal"
              parts={[
                { t: "Living the dream " },
                { t: "on the Golden Isles.", italic: true },
              ]}
            />
          </div>
          <p className="max-w-[380px] text-[1rem] leading-relaxed text-ink">
            Life here is about more than the house — it&apos;s the golf, the
            festivals, the beach walks and the people who make this place home.
          </p>
        </div>

        {/* 4×2 bento on desktop: the first and last tiles are double-width, so six tiles fill two full rows. */}
        {/* Titles sit below each photo (not on it). */}
        <ul className="mt-10 grid auto-rows-[300px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[340px] lg:grid-cols-4">
          {LIFESTYLE.map((item, i) => {
            const wide = i === 0 || i === LIFESTYLE.length - 1;
            return (
              <li key={item.title} className={wide ? "sm:col-span-2" : undefined}>
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-teal/10 bg-white shadow-[0_24px_50px_-38px_rgb(24_103_109/0.6)]">
                    <div className="relative min-h-0 flex-1 overflow-hidden">
                      <Picture
                        src={item.image}
                        alt={item.alt}
                        sizes={
                          wide
                            ? "(min-width: 1024px) 570px, (min-width: 640px) 100vw, 100vw"
                            : "(min-width: 1024px) 285px, (min-width: 640px) 50vw, 100vw"
                        }
                        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <figcaption className="px-5 py-4 font-heading text-[1.25rem] leading-snug text-teal sm:text-[1.3rem]">
                      {item.title}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
