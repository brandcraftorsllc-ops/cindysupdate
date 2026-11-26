import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AskAboutHome } from "@/components/page/AskAboutHome";
import { NeighborhoodCards } from "@/components/page/NeighborhoodCards";
import { PageHero } from "@/components/page/PageHero";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ListingCard } from "@/components/ui/ListingCard";
import { Reveal } from "@/components/ui/Motion";
import { NEIGHBORHOODS, getNeighborhood, neighborhoodHref } from "@/data/neighborhoods";
import { propertiesInArea, propertyHref, toListing } from "@/lib/properties";

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const n = getNeighborhood((await params).slug);
  if (!n) return {};
  const sold = propertiesInArea(n.area).length;
  const description = `${n.name}, Georgia neighborhood guide from Cindy Baird, REALTOR® with Keller Williams Realty Golden Isles${
    sold ? ` — including ${sold} ${sold === 1 ? "home" : "homes"} she has sold in ${n.name}` : ""
  }.`;
  return {
    title: `${n.name} Neighborhood Guide`,
    description,
    alternates: { canonical: neighborhoodHref(n) },
    openGraph: { title: `${n.name}, GA | Cindy Baird, REALTOR®`, description, url: neighborhoodHref(n) },
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const n = getNeighborhood((await params).slug);
  if (!n) notFound();
  const sold = propertiesInArea(n.area);
  const others = NEIGHBORHOODS.filter((x) => x.slug !== n.slug);

  return (
    <>
      <PageHero
        eyebrow="Neighborhood guide"
        title={[{ t: `${n.name}, ` }, { t: "Georgia.", italic: true }]}
        intro={
          <p>
            {n.blurb ? `${n.blurb} ` : ""}I help buyers and sellers across {n.name} and the Golden Isles — tell me what
            you&apos;re looking for and I&apos;ll help you find the right home here.
          </p>
        }
        image={n.image}
        imageAlt={n.alt}
      >
        <ArrowButton href="#find-a-home" variant="primary">
          Find a Home Here
        </ArrowButton>
        <ArrowButton href="/home-valuation" variant="light">
          What&apos;s My Home Worth?
        </ArrowButton>
      </PageHero>

      {sold.length ? (
        <section aria-label={`Homes sold in ${n.name}`} className="sec bg-salt">
          <div className="shell">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-teal">Sold in {n.name}</p>
                <h2 className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] text-teal">
                  Homes I&apos;ve sold <span className="italic">here.</span>
                </h2>
              </div>
              <ArrowButton href="/properties" variant="light">
                Full Portfolio
              </ArrowButton>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sold.map((p, i) => (
                <li key={p.slug}>
                  <Reveal delay={(i % 3) * 0.05} className="h-full">
                    <Link href={propertyHref(p)} className="block h-full rounded-[28px] transition-transform duration-500 hover:-translate-y-1.5">
                      <ListingCard listing={toListing(p)} />
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="find-a-home" aria-label={`Find a home in ${n.name}`} className="scroll-mt-4 bg-foam py-16 sm:py-20">
        <div className="shell">
          <div className="card grid items-center gap-6 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] leading-tight text-teal">
                Looking for a home in {n.name}?
              </h2>
              <p className="mt-2 max-w-[560px] text-[1rem] leading-relaxed text-ink">
                Share a few details about what you&apos;re dreaming of and I&apos;ll reach out personally.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <AskAboutHome area={n.name} label={`Search ${n.name}`} />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Other neighborhoods" className="sec bg-salt">
        <div className="shell">
          <p className="eyebrow text-teal">More neighborhoods</p>
          <h2 className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] text-teal">
            Explore the <span className="italic">Golden Isles.</span>
          </h2>
          <div className="mt-10">
            <NeighborhoodCards items={others} />
          </div>
        </div>
      </section>
    </>
  );
}
