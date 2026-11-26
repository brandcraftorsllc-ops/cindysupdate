import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PortfolioGrid } from "@/components/page/PortfolioGrid";
import { HomeSweetHomeCta } from "@/components/sections/Testimonials";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { PROPERTIES_BY_DATE } from "@/lib/properties";
import { STATS } from "@/lib/content";

const description =
  "Cindy Baird's portfolio of closed sales across St. Simons Island, Jekyll Island, Brunswick and Darien — from cottages and condos to island estates and land.";

export const metadata: Metadata = {
  title: "Portfolio — Closed Sales",
  description,
  alternates: { canonical: "/properties" },
  openGraph: { title: "Portfolio of Closed Sales | Cindy Baird, REALTOR®", description, url: "/properties" },
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={[{ t: "Live a life you've " }, { t: "always dreamed of.", italic: true }]}
        intro={
          <p>
            Every home here is one I&apos;ve helped a family buy or sell — from cottages and condos to island estates and
            land. Select any home to see its photos and details.
          </p>
        }
      >
        <ArrowButton href="/contact" variant="primary">
          Let&apos;s Connect
        </ArrowButton>
        <ArrowButton href="/home-valuation" variant="light">
          What&apos;s My Home Worth?
        </ArrowButton>
      </PageHero>

      <section aria-label="Portfolio stats" className="bg-salt">
        <div className="shell">
          <dl className="grid grid-cols-3 gap-3 sm:gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="card flex min-w-0 flex-col px-2 py-5 text-center sm:px-4">
                <dt className="order-2 mt-1 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink">{s.label}</dt>
                <dd className="whitespace-nowrap font-heading text-[clamp(1.1rem,3vw,2rem)] leading-tight text-teal">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Closed sales" className="sec bg-salt">
        <div className="shell">
          <PortfolioGrid properties={PROPERTIES_BY_DATE} />
          <p className="mt-10 max-w-[720px] text-[0.85rem] leading-relaxed text-ink">
            Sales shown for reference. No representation is made about which brokerage represented which party in any
            transaction.
          </p>
          <div className="mt-14">
            <HomeSweetHomeCta />
          </div>
        </div>
      </section>
    </>
  );
}
