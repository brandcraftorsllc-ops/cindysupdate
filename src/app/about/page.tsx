import type { Metadata } from "next";
import { AboutHero, AboutStory } from "@/components/about/AboutIntro";
import { AboutIslandLife, AboutProfessional } from "@/components/about/AboutLife";
import { HomeSweetHomeCta, TestimonialCard } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/ui/Motion";
import { TESTIMONIALS } from "@/data/testimonials";

const description =
  "Meet Cindy Baird, REALTOR® with Keller Williams Realty Golden Isles. Born in Georgia, raised in a military family and living on St. Simons Island since 2000 — with an eye for design and a heart for her community.";

export const metadata: Metadata = {
  title: "About Cindy",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cindy Baird, REALTOR® | St. Simons Island",
    description,
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutIslandLife />
      <AboutProfessional />

      <section aria-labelledby="about-testimonials-title" className="sec bg-foam">
        <div className="shell">
          <div className="text-center">
            <p className="eyebrow text-teal">Kind words</p>
            <h2 id="about-testimonials-title" className="mx-auto mt-4 max-w-[640px] font-heading text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] text-navy">
              What my clients <span className="italic text-teal">say.</span>
            </h2>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
          <div id="about-contact" className="mt-14 scroll-mt-28">
            <HomeSweetHomeCta />
          </div>
        </div>
      </section>
    </>
  );
}
