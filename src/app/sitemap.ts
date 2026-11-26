import type { MetadataRoute } from "next";
import { NEIGHBORHOODS, neighborhoodHref } from "@/data/neighborhoods";
import { PROPERTIES, propertyHref } from "@/lib/properties";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cindysupdate-nine.vercel.app";

/** /sitemap.xml — every public page on the site. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/properties", "/neighborhoods", "/home-valuation", "/testimonials", "/contact", "/terms-and-conditions"];
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}`, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...NEIGHBORHOODS.map((n) => ({ url: `${BASE}${neighborhoodHref(n)}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...PROPERTIES.map((p) => ({ url: `${BASE}${propertyHref(p)}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
