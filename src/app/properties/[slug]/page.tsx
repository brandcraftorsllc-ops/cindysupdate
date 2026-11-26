import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AskAboutHome } from "@/components/page/AskAboutHome";
import { PhotoGallery } from "@/components/page/PhotoGallery";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Mail, Phone } from "@/components/ui/Icons";
import { ListingCard } from "@/components/ui/ListingCard";
import { Reveal } from "@/components/ui/Motion";
import { NEIGHBORHOODS, neighborhoodHref } from "@/data/neighborhoods";
import { AGENT, IMAGES } from "@/lib/content";
import { PROPERTIES, getProperty, propertiesInArea, propertyHref, toListing } from "@/lib/properties";

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProperty((await params).slug);
  if (!p) return {};
  const facts = [p.beds && `${p.beds} bed`, p.baths && `${p.baths} bath`, p.livingArea].filter(Boolean).join(", ");
  const description = `${p.title}, ${p.area} — sold for ${p.price}${facts ? ` (${facts})` : ""}. A closed sale by Cindy Baird, REALTOR®, Keller Williams Realty Golden Isles.`;
  return {
    title: `${p.title}, ${p.area}`,
    description,
    alternates: { canonical: propertyHref(p) },
    openGraph: {
      title: `${p.title} | Sold by Cindy Baird`,
      description,
      url: propertyHref(p),
      images: p.photos[0] ? [{ url: p.photos[0].src, alt: p.title }] : undefined,
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProperty((await params).slug);
  if (!p) notFound();

  const keyFacts = [
    p.beds != null && { value: String(p.beds), label: p.beds === 1 ? "Bed" : "Beds" },
    p.baths != null && { value: String(p.baths), label: p.baths === 1 ? "Bath" : "Baths" },
    p.livingArea && /sq/i.test(p.livingArea) && !/land/i.test(p.type ?? "") && { value: p.livingArea.replace(/\s*Sq\.?Ft\.?/i, ""), label: "Sq. ft. living" },
    p.lotArea && { value: p.lotArea.replace(/\s*Sq\.?Ft\.?/i, " sq. ft."), label: "Lot" },
  ].filter(Boolean) as { value: string; label: string }[];

  const features: [string, string | number | undefined][] = [
    ["Status", p.status],
    ["Date sold", p.dateSold],
    ["Sales price", p.price],
    ["Type", p.type],
    ["Total bedrooms", p.beds],
    ["Total bathrooms", p.baths],
    ["Full bathrooms", p.fullBaths],
    ["Half bathrooms", p.halfBaths],
    ["Living area", p.livingArea],
    ["Lot area", p.lotArea],
    ["Year built", p.yearBuilt],
    ["Garage spaces", p.garage],
    ["MLS® ID", p.mlsId],
  ];

  const neighborhood = NEIGHBORHOODS.find((n) => n.area === p.area);
  const related = propertiesInArea(p.area).filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-foam to-salt pb-10 pt-32 sm:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, hsl(var(--sky) / 0.7) 0%, transparent 70%)" }}
        />
        <div className="shell relative">
          <nav aria-label="Breadcrumb" className="text-[0.88rem] text-ink">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/properties" className="font-semibold text-teal hover:underline">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{p.title}</li>
            </ol>
          </nav>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span
                className="inline-block rounded-full bg-teal px-3 py-1.5 font-body text-[0.72rem] font-semibold uppercase text-white"
                style={{ letterSpacing: "0.18em" }}
              >
                {p.status}
              </span>
              <h1 className="mt-4 font-heading text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06] text-teal">{p.title}</h1>
              <p className="mt-2 text-[1.02rem] uppercase tracking-[0.1em] text-ink">{p.fullAddress}</p>
            </div>
            <div className="lg:text-right">
              <p className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink">Sold for</p>
              <p className="font-heading text-[clamp(2rem,4vw,2.8rem)] leading-none text-teal">{p.price}</p>
            </div>
          </div>
          {keyFacts.length ? (
            <dl className="mt-7 flex flex-wrap gap-3">
              {keyFacts.map((f) => (
                <div key={f.label} className="card flex flex-col px-5 py-3">
                  <dt className="order-2 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink">{f.label}</dt>
                  <dd className="font-heading text-[1.5rem] leading-tight text-teal">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </section>

      <section aria-label="Photos" className="bg-salt pb-10">
        <div className="shell">
          {p.photos.length ? (
            <PhotoGallery photos={p.photos} title={p.title} />
          ) : (
            <p className="card p-6 text-ink">Photos for this sale aren&apos;t available.</p>
          )}
        </div>
      </section>

      <section aria-label="Property details" className="bg-salt pb-20 sm:pb-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <div className="space-y-8">
            {p.description ? (
              <Reveal>
                <article className="card p-6 sm:p-9">
                  <h2 className="font-heading text-[1.9rem] leading-tight text-teal">About this home</h2>
                  <p className="mt-4 whitespace-pre-line text-[1.02rem] leading-relaxed text-ink">{p.description}</p>
                </article>
              </Reveal>
            ) : null}
            <Reveal>
              <article className="card p-6 sm:p-9">
                <h2 className="font-heading text-[1.9rem] leading-tight text-teal">Features &amp; amenities</h2>
                <dl className="mt-5 grid gap-x-8 sm:grid-cols-2">
                  {features
                    .filter(([, v]) => v !== undefined && v !== "")
                    .map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4 border-b border-teal/10 py-3">
                        <dt className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-teal">{k}</dt>
                        <dd className="text-right text-[1rem] text-ink">{v}</dd>
                      </div>
                    ))}
                </dl>
              </article>
            </Reveal>
          </div>

          <aside aria-label="Your agent" className="lg:sticky lg:top-6 lg:self-start">
            <Reveal delay={0.1}>
              <div className="card p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <Image
                    src={IMAGES.cindyPortrait}
                    alt="Cindy Baird, REALTOR®"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full border-2 border-white object-cover shadow-md"
                  />
                  <div>
                    <p className="font-heading text-[1.35rem] leading-tight text-teal">{AGENT.name}</p>
                    <p className="text-[0.88rem] text-ink">Real Estate Agent · {AGENT.license}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-[0.98rem]">
                  <li>
                    <a href={AGENT.phoneHref} className="inline-flex items-center gap-2 text-ink hover:text-teal">
                      <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                      {AGENT.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${AGENT.email}`} className="inline-flex items-center gap-2 break-all text-ink hover:text-teal">
                      <Mail className="h-4 w-4 text-teal" aria-hidden="true" />
                      {AGENT.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-6 space-y-3">
                  <AskAboutHome area={p.area} />
                  <ArrowButton href="/home-valuation" variant="light" className="w-full justify-between">
                    What&apos;s My Home Worth?
                  </ArrowButton>
                </div>
                {neighborhood ? (
                  <p className="mt-5 text-[0.95rem] text-ink">
                    Explore{" "}
                    <Link href={neighborhoodHref(neighborhood)} className="font-semibold text-teal underline underline-offset-2">
                      the {neighborhood.name} guide
                    </Link>
                    .
                  </p>
                ) : null}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section aria-label={`More homes sold in ${p.area}`} className="sec bg-foam">
          <div className="shell">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-teal">Sold</p>
                <h2 className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.1] text-teal">
                  More homes sold in <span className="italic">{p.area}.</span>
                </h2>
              </div>
              <ArrowButton href="/properties" variant="light">
                Full Portfolio
              </ArrowButton>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={propertyHref(r)} className="block h-full rounded-[28px] transition-transform duration-500 hover:-translate-y-1.5">
                    <ListingCard listing={toListing(r)} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-salt py-10">
        <p className="shell text-[0.85rem] leading-relaxed text-ink">
          Sales shown for reference. No representation is made about which brokerage represented which party in any
          transaction.
        </p>
      </section>
    </>
  );
}
