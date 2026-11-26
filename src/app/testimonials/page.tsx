import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { HomeSweetHomeCta, TestimonialCard } from "@/components/sections/Testimonials";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/ui/Motion";
import { TESTIMONIALS } from "@/data/testimonials";

const description =
  "Client testimonials and success stories from buyers and sellers who worked with Cindy Baird, REALTOR®, on St. Simons Island and across the Golden Isles.";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: { title: "Client Testimonials & Success Stories | Cindy Baird", description, url: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title={[{ t: "In my clients' " }, { t: "own words.", italic: true }]}
        intro={
          <p>
            Every move is personal. Here&apos;s what buyers and sellers across the Golden Isles have shared about working
            together.
          </p>
        }
      >
        <ArrowButton href="/contact" variant="primary">
          Let&apos;s Connect
        </ArrowButton>
        <ArrowButton href="/properties" variant="light">
          View My Portfolio
        </ArrowButton>
      </PageHero>

      <section aria-label="Client testimonials" className="bg-salt pb-20 sm:pb-24 lg:pb-28">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <HomeSweetHomeCta />
          </div>
        </div>
      </section>
    </>
  );
}
