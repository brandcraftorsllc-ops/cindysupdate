import Image from "next/image";
import { IMAGES } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { AnimatedHeading, Reveal } from "../ui/Motion";
import { Picture } from "../ui/Picture";

// Phrases from cindybairdrealtor.com ("real estate with heart, vision, and integrity").
const VALUES = ["Living here since 2000", "A designer's eye", "Heart, vision & integrity"];

/** Home-page teaser for the About page. */
export function MeetCindy() {
  return (
    <section id="meet-cindy" aria-label="Meet Cindy" className="relative scroll-mt-4 overflow-hidden">
      <div className="absolute inset-0">
        <Picture src={IMAGES.liveOakAvenue} alt="" className="h-full w-full" />
      </div>
      <div className="shell relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="overflow-hidden rounded-[32px] border-4 border-white shadow-[0_40px_90px_-50px_rgb(24_103_109/0.7)]">
                <Image
                  src={IMAGES.cindyPortraitPorch}
                  alt="Cindy Baird, REALTOR®, in a white linen blazer on a porch beneath live oaks"
                  sizes="380px"
                  placeholder="blur"
                  className="aspect-[3/4] h-auto w-full object-cover object-top"
                />
              </div>
              <div className="glass-sm absolute -bottom-5 left-1/2 w-[86%] -translate-x-1/2 px-4 py-3 text-center">
                <p className="font-body text-[0.8rem] font-semibold text-teal">Born in Georgia · Home on St. Simons</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-7 sm:p-9 lg:p-10">
              <p className="eyebrow text-teal">Meet Cindy</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 font-heading text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] text-teal"
                parts={[{ t: "Hello, I'm " }, { t: "Cindy.", italic: true }]}
                accent="text-teal"
              />
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink">
                I was born in Columbus, Georgia, and grew up in a military family. I came home to Georgia in 2000 and still
                remember my first morning on St. Simons — racing out to the beach, literally feeling my good fortune. My
                children and their families live in the Golden Isles too.
              </p>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink/85">
                Whether you&apos;re buying, selling, downsizing or looking for something special, I find absolute joy in
                helping you find the right home. I care, I listen — and I&apos;ll be with you every step of your journey.
              </p>
              <p className="mt-5 font-script text-[1.6rem] leading-relaxed text-teal sm:text-[1.8rem]">Cindy Baird</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {VALUES.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-teal/25 bg-foam px-3 py-1.5 font-body text-[0.72rem] font-semibold uppercase text-teal"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {v}
                  </li>
                ))}
              </ul>
              <ArrowButton href="/about" variant="primary" className="mt-7">
                Read My Story
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
