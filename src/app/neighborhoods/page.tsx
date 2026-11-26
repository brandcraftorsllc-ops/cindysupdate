import type { Metadata } from "next";
import { NeighborhoodCards } from "@/components/page/NeighborhoodCards";
import { PageHero } from "@/components/page/PageHero";
import { HomeSweetHomeCta } from "@/components/sections/Testimonials";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { IMAGES } from "@/lib/content";

const description =
  "Neighborhood guides to St. Simons Island, Sea Island, Jekyll Island, Brunswick, Darien and St. Marys from Cindy Baird, REALTOR® — and the homes she has sold in each.";

export const metadata: Metadata = {
  title: "Neighborhood Guides",
  description,
  alternates: { canonical: "/neighborhoods" },
  openGraph: { title: "Golden Isles Neighborhood Guides | Cindy Baird", description, url: "/neighborhoods" },
};

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        eyebrow="Neighborhoods"
        title={[{ t: "My areas of " }, { t: "expertise.", italic: true }]}
        intro={
          <p>
            From village streets on St. Simons to small-town waterfront in Darien, every corner of the Golden Isles has its
            own character. Explore each area — and the homes I&apos;ve sold there.
          </p>
        }
        image={IMAGES.stSimonsPier}
        imageAlt="The St. Simons Island pier stretching over calm water beside a rock-lined beach"
      >
        <ArrowButton href="/#search" variant="primary">
          Start Your Property Search
        </ArrowButton>
      </PageHero>

      <section aria-label="Neighborhood guides" className="bg-salt pb-20 sm:pb-24 lg:pb-28">
        <div className="shell">
          <NeighborhoodCards items={NEIGHBORHOODS} />
          <div className="mt-14">
            <HomeSweetHomeCta />
          </div>
        </div>
      </section>
    </>
  );
}
