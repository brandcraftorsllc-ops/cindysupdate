import Image from "next/image";
import { AGENT, IMAGES } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { Mail, Phone } from "../ui/Icons";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/*
 * Biography sources: cindybairdrealtor.com/about and the "Meet Cindy" block on
 * cindybairdrealtor.com. Lightly rewritten into first person; no facts added.
 */

export function AboutHero() {
  return (
    <section aria-label="About Cindy" className="relative overflow-hidden bg-gradient-to-b from-foam to-salt pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, hsl(var(--sky) / 0.7) 0%, transparent 70%)" }}
      />
      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="font-script text-[1.15rem] text-teal sm:text-[1.3rem]">Home Sweet Agent</p>
          <AnimatedHeading
            as="h1"
            className="mt-4 font-heading text-[clamp(2.5rem,5.4vw,4.2rem)] leading-[1.05] text-teal"
            parts={[{ t: "Hello, I'm " }, { t: "Cindy Baird.", italic: true }]}
            accent="text-teal"
          />
          <p className="mt-6 max-w-[560px] text-[1.1rem] leading-relaxed text-ink">
            I&apos;m a REALTOR® with Keller Williams Realty Golden Isles, and St. Simons Island has been my home since 2000.
            My promise is simple: to guide you home with care, creativity and coastal insight.
          </p>
          <ul className="mt-7 flex flex-wrap gap-3 text-[0.95rem]">
            <li>
              <a href={AGENT.phoneHref} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-teal/15 bg-white px-4 font-semibold text-teal hover:border-teal hover:underline underline-offset-4">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {AGENT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${AGENT.email}`} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-teal/15 bg-white px-4 font-semibold text-teal hover:border-teal hover:underline underline-offset-4">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {AGENT.email}
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowButton href="#about-contact" variant="primary">
              Let&apos;s Connect
            </ArrowButton>
            <ArrowButton href="/#home-value" variant="light">
              What&apos;s My Home Worth?
            </ArrowButton>
          </div>
        </div>
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[460px]">
          <div className="overflow-hidden rounded-[36px] border-4 border-white shadow-[0_40px_90px_-50px_rgb(24_103_109/0.7)]">
            <Image
              src={IMAGES.cindyPortrait}
              alt="Cindy Baird, REALTOR®, smiling outdoors in a navy top"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 460px, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover object-[50%_30%]"
            />
          </div>
          <div className="glass-sm absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 px-5 py-4 text-center">
            <p className="font-body text-[0.8rem] font-semibold text-teal">{AGENT.office}</p>
            <p className="mt-1 font-body text-[0.76rem] text-ink/85">{AGENT.license}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section aria-labelledby="story-title" className="sec bg-salt">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <figure className="relative">
            <div className="overflow-hidden rounded-[32px] border-4 border-white shadow-[0_30px_70px_-45px_rgb(24_103_109/0.6)]">
              <Picture
                src={IMAGES.fortFrederica}
                alt="Historic stone fort wall and cannon beside a calm waterway at Fort Frederica, St. Simons Island"
                sizes="(min-width: 1024px) 520px, 100vw"
                className="aspect-[4/5] w-full"
              />
            </div>
            <blockquote className="card relative z-10 -mt-16 ml-6 mr-[-0.5rem] max-w-[380px] p-6 sm:ml-10">
              <p className="font-heading text-[1.35rem] italic leading-snug text-teal">
                “This area is one of the most beautiful places on earth.”
              </p>
              <footer className="mt-3 font-script text-[1.2rem] text-teal">Cindy</footer>
            </blockquote>
          </figure>
        </Reveal>
        <div>
          <p className="eyebrow text-teal">My story</p>
          <h2 id="story-title" className="mt-4 font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal">
            From a military family to <span className="italic text-teal">my island home.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[1.04rem] leading-relaxed text-ink">
            <p>
              I was born in Columbus, Georgia, and moved to Maryland with my military family when I was very young. I earned
              my degree at the University of Maryland and built a career in marketing.
            </p>
            <p>
              Before landing on St. Simons, I had the pleasure of living overseas and in several states — and I renovated
              every home I lived in along the way. When I moved to the island, I drew out the kind of home I wanted and set
              about having it built.
            </p>
            <p>
              I came home to Georgia in 2000 and couldn&apos;t imagine living anywhere else. I still remember my first morning
              waking up on St. Simons Island, racing out to the beach and literally feeling my good fortune. I&apos;m so
              grateful to be living my dream of life by the ocean in an outstanding community — and my children and their
              families have made the Golden Isles home too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
