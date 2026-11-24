import type { StaticImageData } from "next/image";

import sold104Colony from "@/assets/images/sold/sold-104-colony-place.jpg";
import sold104ECommons from "@/assets/images/sold/sold-104-e-commons-drive.jpg";
import sold112Redfern from "@/assets/images/sold/sold-112-redfern-drive.jpg";
import sold116Biltmore from "@/assets/images/sold/sold-116-biltmore.jpg";
import sold120ShadyBrook from "@/assets/images/sold/sold-120-shady-brook-circle.jpg";
import sold17CoastCottage from "@/assets/images/sold/sold-17-coast-cottage-ln.jpg";
import sold202GrandOaks from "@/assets/images/sold/sold-202-grand-oaks-circle.jpg";
import sold227Peachtree from "@/assets/images/sold/sold-227-peachtree-street.jpg";
import sold323Dunbarton from "@/assets/images/sold/sold-323-dunbarton-drive.jpg";
import sold3Stewart from "@/assets/images/sold/sold-3-stewart-ln.jpg";
import sold4323NinthSt from "@/assets/images/sold/sold-4323-9th-st.jpg";
import sold455Belmont from "@/assets/images/sold/sold-455-belmont-circle.jpg";
import sold1009Brockinton from "@/assets/images/sold/sold-1009-brockinton-dr.jpg";
import sold131Biltmore from "@/assets/images/sold/sold-131-biltmore.jpg";
import sold183HamptonPoint from "@/assets/images/sold/sold-183-hampton-point-drive.jpg";
import sold267Harrington from "@/assets/images/sold/sold-267-n-harrington-rd.jpg";
import sold305Mulberry from "@/assets/images/sold/sold-305-mulberry-way.jpg";

/**
 * Listing data. All entries are taken from cindybairdrealtor.com/properties.
 * Fields that her site does not publish are left undefined (never guessed).
 */
export type ListingStatus = "Active" | "New" | "Coming Soon" | "Pending" | "Under Contract" | "Sold";

export type Listing = {
  id: string;
  address: string;
  city: string;
  /** Display price, e.g. "$1,332,000" */
  price: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  /** For land listings that publish acreage instead of beds/baths. */
  acres?: number;
  status: ListingStatus;
  description?: string;
  images: { src: StaticImageData; alt: string }[];
  /** Listing detail page on Cindy's current site. */
  url: string;
};

const CB = "https://cindybairdrealtor.com/properties";

/** Real closed sales from Cindy's portfolio (cindybairdrealtor.com/properties). */
const PORTFOLIO: Listing[] = [
  {
    id: "4323-9th-st",
    address: "4323 9th Street",
    city: "St. Simons Island",
    price: "$2,150,000",
    beds: 5,
    baths: 4,
    sqft: 4056,
    status: "Sold",
    images: [{ src: sold4323NinthSt, alt: "Two-story coastal home with double front porches at 4323 9th Street, St. Simons Island" }],
    url: `${CB}/4323-9th-st`,
  },
  {
    id: "116-biltmore",
    address: "116 Biltmore",
    city: "St. Simons Island",
    price: "$1,950,000",
    beds: 4,
    baths: 4,
    sqft: 4871,
    status: "Sold",
    images: [{ src: sold116Biltmore, alt: "White coastal home with a long lawn and driveway at 116 Biltmore, St. Simons Island" }],
    url: `${CB}/116-biltmore`,
  },
  {
    id: "17-coast-cottage-ln",
    address: "17 Coast Cottage Lane",
    city: "St. Simons Island",
    price: "$1,650,000",
    beds: 4,
    baths: 4,
    sqft: 3265,
    status: "Sold",
    images: [{ src: sold17CoastCottage, alt: "Three-story coastal cottage with palm trees at dusk, 17 Coast Cottage Lane" }],
    url: `${CB}/17-coast-cottage-ln`,
  },
  {
    id: "323-dunbarton-drive",
    address: "323 Dunbarton Drive",
    city: "St. Simons Island",
    price: "$1,425,000",
    beds: 4,
    baths: 4,
    sqft: 3442,
    status: "Sold",
    images: [{ src: sold323Dunbarton, alt: "White home with a circular drive and fountain at 323 Dunbarton Drive" }],
    url: `${CB}/323-dunbarton-drive-st-simons-island-ga-31522-1646094`,
  },
  {
    id: "104-colony-place",
    address: "104 Colony Place",
    city: "St. Simons Island",
    price: "$1,332,000",
    beds: 4,
    baths: 4,
    sqft: 4095,
    status: "Sold",
    images: [{ src: sold104Colony, alt: "Brick home with landscaped front steps at 104 Colony Place" }],
    url: `${CB}/104-colony-place-st-simons-island-ga-31522-1652515`,
  },
  {
    id: "227-peachtree-street",
    address: "227 Peachtree Street",
    city: "St. Simons Island",
    price: "$1,252,000",
    beds: 4,
    baths: 3,
    sqft: 2294,
    status: "Sold",
    images: [{ src: sold227Peachtree, alt: "Shingled coastal home with a covered porch at 227 Peachtree Street" }],
    url: `${CB}/227-peachtree-street-st-simons-island-ga-31522-1651667`,
  },
  {
    id: "3-stewart-ln",
    address: "3 Stewart Lane",
    city: "Jekyll Island",
    price: "$847,000",
    beds: 4,
    baths: 4,
    sqft: 2848,
    status: "Sold",
    images: [{ src: sold3Stewart, alt: "Raised coastal home with a pool at 3 Stewart Lane, Jekyll Island" }],
    url: `${CB}/3-stewart-ln`,
  },
  {
    id: "202-grand-oaks-circle",
    address: "202 Grand Oaks Circle",
    city: "St. Simons Island",
    price: "$758,000",
    beds: 3,
    baths: 3,
    sqft: 1821,
    status: "Sold",
    images: [{ src: sold202GrandOaks, alt: "Shingled home with a front porch under live oaks at 202 Grand Oaks Circle" }],
    url: `${CB}/202-grand-oaks-circle-st-simons-island-ga-31522-1645301`,
  },
  {
    id: "104-e-commons-drive",
    address: "104 E Commons Drive",
    city: "St. Simons Island",
    price: "$650,000",
    beds: 4,
    baths: 3,
    sqft: 2590,
    status: "Sold",
    images: [{ src: sold104ECommons, alt: "White home with a wide front porch beneath oaks at 104 E Commons Drive" }],
    url: `${CB}/104-e-commons-drive-st-simons-island-ga-31522-1646743`,
  },
  {
    id: "112-redfern-drive",
    address: "112 Redfern Drive",
    city: "St. Simons Island",
    price: "$504,000",
    beds: 2,
    baths: 2,
    sqft: 1006,
    status: "Sold",
    images: [{ src: sold112Redfern, alt: "Cottage with a garden fence and metal roof at 112 Redfern Drive" }],
    url: `${CB}/112-redfern-drive-st-simons-island-ga-31522-1650341`,
  },
  {
    id: "120-shady-brook-circle-301",
    address: "120 Shady Brook Circle #301",
    city: "St. Simons Island",
    price: "$422,000",
    beds: 3,
    baths: 2,
    sqft: 1440,
    status: "Sold",
    images: [{ src: sold120ShadyBrook, alt: "Condominium buildings beside a pond with a fountain at 120 Shady Brook Circle" }],
    url: `${CB}/120-shady-brook-circle-301-st-simons-island-ga-us-31522-1661987`,
  },
  {
    id: "455-belmont-circle",
    address: "455 Belmont Circle",
    city: "Brunswick",
    price: "$55,000",
    acres: 0.4,
    status: "Sold",
    images: [{ src: sold455Belmont, alt: "Landscaped community entrance near the 455 Belmont Circle lot in Brunswick" }],
    url: `${CB}/455-belmont-circle-brunswick-ga-31525-1641322`,
  },
  {
    id: "131-biltmore",
    address: "131 Biltmore",
    city: "St. Simons Island",
    price: "$1,690,000",
    beds: 4,
    baths: 5,
    sqft: 4044,
    status: "Sold",
    images: [{ src: sold131Biltmore, alt: "Aerial view of 131 Biltmore with its pool and landscaped grounds, St. Simons Island" }],
    url: `${CB}/131-biltmore`,
  },
  {
    id: "183-hampton-point-drive",
    address: "183 Hampton Point Drive",
    city: "St. Simons Island",
    price: "$1,200,000",
    beds: 4,
    baths: 4,
    sqft: 3344,
    status: "Sold",
    images: [{ src: sold183HamptonPoint, alt: "Home at 183 Hampton Point Drive, St. Simons Island" }],
    url: `${CB}/183-hampton-point-drive-st-simons-island-ga-31522-1653191`,
  },
  {
    id: "267-n-harrington-rd",
    address: "267 N Harrington Road",
    city: "St. Simons Island",
    price: "$1,060,000",
    beds: 4,
    baths: 4,
    sqft: 3480,
    status: "Sold",
    images: [{ src: sold267Harrington, alt: "Home at 267 North Harrington Road, St. Simons Island" }],
    url: `${CB}/267-n-harrington-rd`,
  },
  {
    id: "1009-brockinton-dr",
    address: "1009 Brockinton Drive",
    city: "St. Simons Island",
    price: "$820,000",
    beds: 5,
    baths: 4,
    sqft: 3431,
    status: "Sold",
    images: [{ src: sold1009Brockinton, alt: "Home at 1009 Brockinton Drive, St. Simons Island" }],
    url: `${CB}/1009-brockinton-dr`,
  },
  {
    id: "305-mulberry-way",
    address: "305 Mulberry Way",
    city: "St. Simons Island",
    price: "$765,000",
    beds: 3,
    baths: 3,
    sqft: 2202,
    status: "Sold",
    images: [{ src: sold305Mulberry, alt: "Home at 305 Mulberry Way, St. Simons Island" }],
    url: `${CB}/305-mulberry-way-st-simons-island-ga-31522-1652921`,
  },
];

const byId = (ids: string[]) =>
  ids.map((id) => {
    const l = PORTFOLIO.find((p) => p.id === id);
    if (!l) throw new Error(`Unknown listing id: ${id}`);
    return l;
  });

/**
 * "Featured listings" showcase. Cindy's site currently has no active listings,
 * so this shows standout homes from her portfolio (they keep their "Sold" badge).
 * To feature a live listing, add it to PORTFOLIO with status "Active" (or "New",
 * "Coming Soon", …) and put its id first in this list.
 */
export const FEATURED_LISTINGS: Listing[] = byId([
  "4323-9th-st",
  "116-biltmore",
  "131-biltmore",
  "17-coast-cottage-ln",
  "323-dunbarton-drive",
  "183-hampton-point-drive",
]);

/** "Sold" section: every other closed sale in the portfolio. */
export const SOLD_LISTINGS: Listing[] = PORTFOLIO.filter((l) => !FEATURED_LISTINGS.includes(l));


/** "4 BD · 4 BA · 4,095 SQ FT" / "0.4 ACRES" — only the facts that exist. */
export function listingFacts(l: Listing) {
  const parts: string[] = [];
  if (l.beds != null) parts.push(`${l.beds} BD`);
  if (l.baths != null) parts.push(`${l.baths} BA`);
  if (l.sqft != null) parts.push(`${l.sqft.toLocaleString("en-US")} SQ FT`);
  if (l.acres != null) parts.push(`${l.acres} ACRES`);
  return parts.join(" · ");
}
