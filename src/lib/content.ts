import type { StaticImageData } from "next/image";

import after from "@/assets/images/after.webp";
import before from "@/assets/images/before.webp";
import brunswick from "@/assets/images/brunswick.webp";
import commercial from "@/assets/images/commercial.webp";
import countryClub from "@/assets/images/country-club.webp";
import darien from "@/assets/images/darien.webp";
import familyBeach from "@/assets/images/family-beach.webp";
import featured from "@/assets/images/featured.webp";
import hamptonPoint from "@/assets/images/hampton-point.webp";
import hero from "@/assets/images/hero.webp";
import jekyll from "@/assets/images/jekyll.webp";
import lighthouse from "@/assets/images/lighthouse.webp";
import livingRoom from "@/assets/images/living-room.webp";
import marsh from "@/assets/images/marsh.webp";
import oakRoad from "@/assets/images/oak-road.webp";
import oakTexture from "@/assets/images/oak-texture.webp";
import portrait from "@/assets/images/portrait.webp";
import restaurant from "@/assets/images/restaurant.webp";
import seaIsland from "@/assets/images/sea-island.webp";
import soldColony from "@/assets/images/sold-colony.webp";
import soldCommons from "@/assets/images/sold-commons.webp";
import soldGrandOaks from "@/assets/images/sold-grand-oaks.webp";
import soldPeachtree from "@/assets/images/sold-peachtree.webp";
import soldRedfern from "@/assets/images/sold-redfern.webp";
import soldShadyBrook from "@/assets/images/sold-shady-brook.webp";
import stSimons from "@/assets/images/st-simons.webp";

export const IMAGES = {
  hero,
  marsh,
  lighthouse,
  livingRoom,
  familyBeach,
  oakRoad,
  before,
  after,
  oakTexture,
  portrait,
  stSimons,
  brunswick,
  countryClub,
  hamptonPoint,
  darien,
  seaIsland,
  jekyll,
  featured,
} satisfies Record<string, StaticImageData>;

export const AGENT = {
  name: "Cindy Baird",
  title: "REALTOR®",
  email: "cindybaird@kw.com",
  phone: "(912) 996-3195",
  phoneHref: "tel:+19129963195",
  license: "Georgia License #404370",
  office: "Keller Williams Realty Golden Isles",
  address: "122 Island Professional Park, St. Simons Island, GA 31522",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Buy", href: "#buying" },
  { label: "Sell", href: "#selling" },
  { label: "Communities", href: "#island-life" },
  { label: "Contact", href: "#contact" },
];

export type Community = {
  id: string;
  name: string;
  pinLabel: string;
  blurb: string;
  image: StaticImageData;
  x: number;
  y: number;
};

export const COMMUNITIES: Community[] = [
  { id: "st-simons", name: "St. Simons Island", pinLabel: "St. Simons", blurb: "Village charm, beaches and live-oak streets.", image: stSimons, x: 64, y: 72.7 },
  { id: "sea-island", name: "Sea Island", pinLabel: "Sea Island", blurb: "Quiet, private and tucked behind the dunes.", image: seaIsland, x: 74.2, y: 62.7 },
  { id: "jekyll-island", name: "Jekyll Island", pinLabel: "Jekyll Island", blurb: "Beaches, bike trails and a slower pace.", image: jekyll, x: 64.8, y: 89.5 },
  { id: "hampton-point", name: "Hampton Point", pinLabel: "Hampton Point (St. Simons)", blurb: "North end of St. Simons. Marsh views and a quieter island feel.", image: hamptonPoint, x: 62.5, y: 27.7 },
  { id: "brunswick", name: "Brunswick", pinLabel: "Brunswick", blurb: "Historic squares, value and easy island access.", image: brunswick, x: 29.6, y: 57.3 },
  { id: "country-club", name: "Country Club Estates", pinLabel: "Country Club Estates", blurb: "Established neighborhoods close to everything.", image: countryClub, x: 30.2, y: 44.1 },
  { id: "darien", name: "Darien", pinLabel: "Darien", blurb: "Small-town waterfront living.", image: darien, x: 24.2, y: 11.8 },
];

export type SoldHome = {
  address: string;
  city: string;
  price: string;
  image: StaticImageData;
  category: string;
  size?: "large";
};

export const SOLD_HOMES: SoldHome[] = [
  { address: "104 Colony Place", city: "St. Simons Island", price: "$1,332,000", image: soldColony, size: "large", category: "Luxury" },
  { address: "227 Peachtree St", city: "St. Simons Island", price: "$1,252,000", image: soldPeachtree, category: "Luxury" },
  { address: "202 Grand Oaks Cir", city: "St. Simons Island", price: "$758,000", image: soldGrandOaks, category: "Residential" },
  { address: "104 E Commons Dr", city: "St. Simons Island", price: "$650,000", image: soldCommons, category: "Residential" },
  { address: "112 Redfern Dr", city: "St. Simons Island", price: "$504,000", image: soldRedfern, category: "Residential" },
  { address: "120 Shady Brook Cir", city: "St. Simons Island", price: "$422,000", image: soldShadyBrook, category: "Residential" },
  { address: "Restaurant", city: "St. Simons Island", price: "[Sold price]", image: restaurant, category: "Commercial" },
  { address: "Commercial Property", city: "Golden Isles", price: "[Sold price]", image: commercial, category: "Commercial" },
];

export const FEATURED_LISTING = {
  active: true,
  image: featured,
  address: "[Listing address]",
  city: "St. Simons Island, GA",
  price: "[Price]",
  beds: "[Beds]",
  baths: "[Baths]",
  sqft: "[Sq Ft]",
  description: [
    "A quiet street under the live oaks, minutes from the village and the beach.",
    "Room to make it your own, with the marsh just beyond the back porch.",
  ],
};

export const AREAS = [
  "St. Simons Island",
  "Sea Island",
  "Jekyll Island",
  "Brunswick",
  "Country Club Estates",
  "Darien",
  "Anywhere in the Golden Isles",
];

export const HOME_TYPES = ["House", "Condo or Townhouse", "New Construction", "Lot or Land", "Senior Community"];
export const TIMELINES = ["As soon as possible", "3–6 months", "6–12 months", "Just curious"];
export const HELP_TYPES = ["Buying", "Selling", "Both", "Just curious about my home's value", "Commercial"];
export const BEST_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"];
export const CONDITIONS = ["Move-in ready", "Some updates", "Needs work"];
export const BEDROOMS = ["1", "2", "3", "4", "5+"];
export const BATHROOMS = ["1", "1.5", "2", "2.5", "3", "3.5", "4+"];

export const TESTIMONIALS = [
  {
    name: "Margaret",
    kind: "Sold",
    quote:
      "Cindy listened more than she talked. She walked our house room by room and showed us what to change before we listed. We sold for more than we imagined.",
    offset: "lg:mt-0",
  },
  {
    name: "Tom & Ellen",
    kind: "Bought",
    quote:
      "We were downsizing and nervous about it. Cindy knew every senior community on the island and never once made us feel rushed.",
    offset: "lg:mt-10",
  },
  {
    name: "James",
    kind: "Bought",
    quote:
      "She walked us through our VA loan step by step and found us a home near the water. It felt like working with a friend who happens to know everything about the island.",
    offset: "lg:mt-4",
  },
];
