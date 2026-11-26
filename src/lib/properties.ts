import type { Listing } from "@/data/listings";
import { PROPERTIES, type Property } from "@/data/properties.generated";

export { PROPERTIES, type Property };

/** "4,056 Sq.Ft." → 4056 ; "21.23 Acres" → undefined */
const sqftOf = (s?: string) => (s && /sq/i.test(s) ? Number(s.replace(/[^0-9.]/g, "")) || undefined : undefined);
const acresOf = (s?: string) => (s && /acre/i.test(s) ? Number(s.replace(/[^0-9.]/g, "")) || undefined : undefined);

export const propertyHref = (p: Property) => `/properties/${p.slug}`;

/** Adapter so portfolio cards reuse the site's existing ListingCard design unchanged. */
export function toListing(p: Property): Listing {
  const isLand = /land/i.test(p.type ?? "") && !p.beds;
  return {
    id: p.slug,
    address: p.title,
    city: p.area,
    price: p.price,
    beds: p.beds,
    baths: p.baths,
    sqft: isLand ? undefined : sqftOf(p.livingArea),
    acres: isLand ? acresOf(p.lotArea) : undefined,
    status: "Sold",
    images: p.photos[0] ? [{ src: p.photos[0], alt: `${p.title}, ${p.area}` }] : [],
    url: propertyHref(p),
  };
}

export const getProperty = (slug: string) => PROPERTIES.find((p) => p.slug === slug);

/** Most recent sales first (by date sold, falling back to the portfolio order). */
export const PROPERTIES_BY_DATE = [...PROPERTIES].sort((a, b) => {
  const ta = a.dateSold ? Date.parse(a.dateSold) : 0;
  const tb = b.dateSold ? Date.parse(b.dateSold) : 0;
  return tb - ta;
});

export const propertiesInArea = (area: string) => PROPERTIES_BY_DATE.filter((p) => p.area === area);
