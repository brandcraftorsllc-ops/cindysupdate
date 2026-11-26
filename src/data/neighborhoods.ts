import type { StaticImageData } from "next/image";
import { COMMUNITIES, NEIGHBORHOOD_GUIDES } from "@/lib/content";

/**
 * Neighborhood guide pages (/neighborhoods/[slug]) — the six areas from
 * cindybairdrealtor.com/neighborhoods. Photos and short descriptions reuse the
 * ones already on the site; St. Marys has no description on either site.
 */
export type Neighborhood = {
  slug: string;
  name: string;
  /** Area name as used in the property data. */
  area: string;
  blurb?: string;
  image?: StaticImageData;
  alt?: string;
};

const SLUGS: Record<string, string> = {
  "St. Simons Island": "st-simons-island",
  "Sea Island": "sea-island",
  "Jekyll Island": "jekyll-island",
  Brunswick: "brunswick",
  Darien: "darien",
  "St. Marys": "st-marys",
};

export const NEIGHBORHOODS: Neighborhood[] = NEIGHBORHOOD_GUIDES.map((g) => ({
  slug: SLUGS[g.name],
  name: g.name,
  area: g.name,
  blurb: COMMUNITIES.find((c) => c.name === g.name)?.blurb,
  image: g.image,
  alt: g.alt,
}));

export const neighborhoodHref = (n: Pick<Neighborhood, "slug">) => `/neighborhoods/${n.slug}`;
export const getNeighborhood = (slug: string) => NEIGHBORHOODS.find((n) => n.slug === slug);
