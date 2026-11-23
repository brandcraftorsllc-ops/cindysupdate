import Image from "next/image";
import { IMAGES, STATS } from "@/lib/content";
import { ArrowButton } from "../../ui/ArrowButton";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { HeroVideo } from "./HeroVideo";
import { HomeSearch } from "./HomeSearch";

export function Hero() {
  return (
    <section id="top" aria-label="Cindy Baird, St. Simons Island REALTOR®" className="relative isolate overflow-hidden bg-foam">
      <HeroVideo />
      {/* Light sea-salt wash keeps navy text well above WCAG AA over the bright beach video. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(248_251_251/0.92)_0%,rgb(248_251_251/0.86)_55%,rgb(248_251_251/0.95)_100%)] lg:bg-[linear-gradient(90deg,rgb(248_251_251/0.96)_0%,rgb(248_251_251/0.9)_38%,rgb(248_251_251/0.45)_62%,rgb(248_251_251/0.05)_85%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-salt via-salt/60 to-transparent" />

      <div className="relative flex min-h-[100svh] flex-col">
        <div className="shell grid flex-1 items-center gap-10 pb-10 pt-32 sm:pt-36 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-[640px]">
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
              className="mt-4 font-heading text-[clamp(2.5rem,5.6vw,4.4rem)] leading-[1.05] text-navy"
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
            <dl className="mt-9 grid max-w-[520px] grid-cols-3 gap-4 border-t border-navy/15 pt-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="order-2 mt-1 font-body text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/80">
                    {s.label}
                  </dt>
                  <dd className="whitespace-nowrap font-heading text-[clamp(1.15rem,4.6vw,1.9rem)] leading-none text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Cindy, front and centre on larger screens */}
          <Reveal delay={0.2} className="relative mx-auto hidden w-full max-w-[420px] lg:block">
            <div className="relative overflow-hidden rounded-[32px] border-4 border-white shadow-[0_40px_80px_-40px_rgb(20_51_74/0.55)]">
              <Image
                src={IMAGES.cindyPortrait}
                alt="Cindy Baird, REALTOR®, smiling outdoors in a navy top"
                priority
                sizes="420px"
                placeholder="blur"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_30%]"
              />
            </div>
            <div className="glass-sm absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 px-5 py-4 text-center">
              <p className="font-script text-[1.3rem] leading-none text-teal">Cindy</p>
              <p className="mt-2 font-body text-[0.78rem] font-medium text-navy">Living on St. Simons Island since 2000</p>
            </div>
          </Reveal>
        </div>
        <div id="search" className="shell mb-[84px] scroll-mt-24 pb-8 pt-4 sm:pb-10 md:mb-0">
          <HomeSearch />
        </div>
      </div>
    </section>
  );
}
