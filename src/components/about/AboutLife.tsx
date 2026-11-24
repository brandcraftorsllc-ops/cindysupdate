import type { StaticImageData } from "next/image";
import { AGENT, AREAS_SERVED, IMAGES, STATS } from "@/lib/content";
import { HeartHandshake, Sparkles, ShieldCheck } from "../ui/Icons";
import { Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/*
 * "Lifestyle and Community" topics come from Cindy's home page: golfing, local
 * restaurants, community feel and festivals, biking and beach walks, the art
 * center, and kayaking & paddle boarding. Her site has no kayaking photo, so
 * that one appears in the copy only (no placeholder image).
 */
const LIFE: { title: string; image: StaticImageData; alt: string }[] = [
  {
    title: "Beach walks",
    image: IMAGES.beachSandcastle,
    alt: "A large sandcastle on the beach beside calm water, with beachgoers in the distance",
  },
  { title: "Golf", image: IMAGES.golfCourse, alt: "A golf course at sunset with a sand bunker, pond and clubhouse" },
  {
    title: "Community festivals",
    image: IMAGES.communityFestival,
    alt: "An outdoor arts market under live oaks with colorful vendor tents",
  },
  { title: "Local restaurants", image: IMAGES.southernSoul, alt: "The Southern Soul Barbeque sign against a colorful sunset sky" },
  { title: "The art center", image: IMAGES.glynnVisualArts, alt: "The Glynn Visual Arts gallery building and landscaped entrance" },
  {
    title: "Dogs on the beach",
    image: IMAGES.beachDogSplash,
    alt: "A brown-and-white dog splashing through shallow beach water with coastal homes beyond",
  },
];

export function AboutIslandLife() {
  return (
    <section aria-labelledby="island-life-title" className="sec bg-foam">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-teal">What I love about home</p>
            <h2 id="island-life-title" className="mt-4 font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal">
              The sea, the oaks, <span className="italic text-teal">and the people.</span>
            </h2>
          </div>
          <div className="space-y-3 text-[1.02rem] leading-relaxed text-ink">
            <p>
              There&apos;s so much beauty in southeast Georgia — the sea, the beaches, the massive oak trees with hanging moss,
              and the magnificent sunsets.
            </p>
            <p>
              But what makes the Golden Isles spectacular is that the people here honestly care about one another. Old-timers
              and newcomers alike share a unique sense of community — whether it&apos;s on the golf course, at a festival, out
              kayaking and paddle boarding the creeks, or walking the beach.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]">
          {LIFE.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <figure className="group relative h-full overflow-hidden rounded-[24px] border-4 border-white shadow-[0_24px_50px_-38px_rgb(24_103_109/0.6)]">
                  <Picture
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 font-body text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-teal shadow-sm">
                    {item.title}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: HeartHandshake,
    title: "Heart",
    text: "I care, I listen, and I find absolute joy in serving my clients — whether you're a first-time buyer, a couple downsizing or searching for a luxury home.",
  },
  {
    icon: Sparkles,
    title: "Vision",
    text: "My eye for design helps you imagine what a home could become, and helps sellers show their home at its very best.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "I'll tell you everything you need to know to get a good outcome — honestly, and never pushy. Your goals come first.",
  },
];

export function AboutProfessional() {
  return (
    <section aria-labelledby="pro-title" className="sec bg-salt">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="eyebrow text-teal">Experience</p>
          <h2 id="pro-title" className="mt-4 font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal">
            Local knowledge, <span className="italic text-teal">real results.</span>
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink">
            I bring a background in marketing and a lifetime of renovating homes to every listing and every search — with the
            backing of {AGENT.office}.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="card flex min-w-0 flex-col px-2 py-4 text-center sm:px-3 sm:py-5">
                <dt className="order-2 mt-1 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink/85">{s.label}</dt>
                <dd className="whitespace-nowrap font-heading text-[clamp(1rem,1.7vw,1.4rem)] leading-tight text-teal">{s.value}</dd>
              </div>
            ))}
          </dl>

          <dl className="mt-8 divide-y divide-teal/10 border-y border-teal/10 text-[0.98rem]">
            {[
              ["Brokerage", AGENT.office],
              ["License", AGENT.license],
              ["Education", "University of Maryland"],
              ["Office", AGENT.address],
              ["Areas I serve", AREAS_SERVED.join(" · ")],
              // TODO(Cindy): add years in real estate, professional designations and any awards — not stated on cindybairdrealtor.com.
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
                <dt className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-teal">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="eyebrow text-teal">Working with me</p>
          <h2 className="mt-4 font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal">
            Heart, vision <span className="italic text-teal">and integrity.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {PILLARS.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.08}>
                  <div className="card flex gap-5 p-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-seaglass text-teal">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-[1.35rem] leading-snug text-teal">{title}</h3>
                      <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/90">{text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
