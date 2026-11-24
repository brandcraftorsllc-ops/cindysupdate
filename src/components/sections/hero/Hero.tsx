import Image from "next/image";
import { HERO_VIDEO, IMAGES, STATS } from "@/lib/content";
import { BackgroundVideo } from "../../ui/BackgroundVideo";
import { ArrowButton } from "../../ui/ArrowButton";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { HomeSearch } from "./HomeSearch";

export function Hero() {
  return (
    <section id="top" aria-label="Cindy Baird, St. Simons Island REALTOR®" className="relative isolate overflow-hidden bg-foam">
      <BackgroundVideo poster={IMAGES.heroPoster} mp4={HERO_VIDEO.mp4} webm={HERO_VIDEO.webm} priority />
      {/* Light sea-salt wash behind the copy only — enough for comfortable reading, video stays visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-salt/55 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgb(248_251_251/0.48)_0%,rgb(248_251_251/0.32)_30%,rgb(248_251_251/0.08)_43%,rgb(248_251_251/0)_50%)]"
      />

      <div className="relative flex min-h-[100svh] flex-col">
        <div className="shell grid flex-1 items-center gap-10 pb-10 pt-32 sm:pt-36 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* Soft white halo keeps hero text legible directly over the video (no overlay layer). */}
          <div className="max-w-[640px] [text-shadow:0_1px_2px_rgb(255_255_255/0.95),0_0_14px_rgb(255_255_255/0.95),0_0_32px_rgb(255_255_255/0.9)]">
            <div className="flex items-center gap-3">
              <Image
                src={IMAGES.cindyPortrait}
                alt=""
                width={56}
                height={56}
                priority
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md lg:hidden"
              />
              <p className="font-script text-[1.1rem] leading-relaxed text-teal sm:text-[1.25rem]">Home Sweet Agent</p>
            </div>
            <AnimatedHeading
              as="h1"
              className="mt-4 font-heading text-[clamp(2.5rem,5.6vw,4.4rem)] leading-[1.05] text-teal"
              parts={[{ t: "I'll help you find " }, { t: "the home you've been imagining.", italic: true }]}
              accent="text-teal"
              delay={0.15}
            />
            <p className="mt-6 max-w-[500px] text-[1.05rem] leading-relaxed text-ink sm:text-[1.1rem]">
              I&apos;m Cindy Baird, your St. Simons Island REALTOR® with Keller Williams Realty Golden Isles. This island has
              been my home since 2000 — and I&apos;d love to help it become yours, with a designer&apos;s eye and a
              neighbor&apos;s heart.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ArrowButton href="#search" variant="primary">
                Start My Home Search
              </ArrowButton>
              <ArrowButton href="#home-value" variant="light">
                What&apos;s My Home Worth?
              </ArrowButton>
            </div>
            <dl className="mt-9 grid max-w-[520px] grid-cols-3 gap-4 border-t border-teal/15 pt-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="order-2 mt-1 font-body text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/80">
                    {s.label}
                  </dt>
                  <dd className="whitespace-nowrap font-heading text-[clamp(1.15rem,4.6vw,1.9rem)] leading-none text-teal">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Beach sandcastle photo from Cindy's site, on larger screens */}
          <Reveal delay={0.2} className="relative mx-auto hidden w-full max-w-[420px] lg:block">
            <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_40px_80px_-40px_rgb(24_103_109/0.55)]">
              <Image
                src={IMAGES.beachSandcastle}
                alt="A towering, detailed sandcastle on the beach beside calm water under a cloudy sky"
                priority
                sizes="420px"
                placeholder="blur"
                className="aspect-[4/5] h-auto w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
        <div id="search" className="shell mb-[84px] scroll-mt-4 pb-8 pt-4 sm:pb-10 md:mb-0">
          <HomeSearch />
        </div>
      </div>
    </section>
  );
}
