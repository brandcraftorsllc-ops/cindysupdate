import type { StaticImageData } from "next/image";

import beachDogSplash from "@/assets/images/beach-dog-splash.jpg";
import beachFamilySunset from "@/assets/images/beach-family-sunset.jpg";
import beachSandcastle from "@/assets/images/beach-sandcastle.jpg";
import brunswickMarina from "@/assets/images/brunswick-marina.jpg";
import cindyPortrait from "@/assets/images/cindy-portrait-01.jpg";
import coastalLivingRoom from "@/assets/images/coastal-living-room.jpg";
import communityFestival from "@/assets/images/community-festival-live-oaks.jpg";
import darienWaterfront from "@/assets/images/darien-historic-waterfront.jpg";
import fortFrederica from "@/assets/images/fort-frederica-waterway.jpg";
import glynnVisualArts from "@/assets/images/glynn-visual-arts.jpg";
import heroPoster from "@/assets/images/hero-video-poster-st-simons-beach.jpg";
import homeValuePoster from "@/assets/images/home-value-grass-poster.jpg";
import golfCourse from "@/assets/images/island-golf-course.jpg";
import jekyllBeach from "@/assets/images/jekyll-island-beach-aerial.jpg";
import liveOakAvenue from "@/assets/images/live-oak-avenue.jpg";
import marshCannon from "@/assets/images/marsh-cannon-sunset.jpg";
import seaIslandOaks from "@/assets/images/sea-island-live-oak-lane.jpg";
import southernSoul from "@/assets/images/southern-soul-barbeque.jpg";
import stSimonsPier from "@/assets/images/st-simons-pier.jpg";
import stMarysGolf from "@/assets/images/st-marys-golf-course.jpg";
import stSimonsSign from "@/assets/images/st-simons-welcome-sign.jpg";

/** Every photo is a real image downloaded from cindybairdrealtor.com. */
export const IMAGES = {
  cindyPortrait,
  heroPoster,
  homeValuePoster,
  stSimonsPier,
  liveOakAvenue,
  marshCannon,
  stSimonsSign,
  beachFamilySunset,
  coastalLivingRoom,
  golfCourse,
  southernSoul,
  communityFestival,
  beachSandcastle,
  glynnVisualArts,
  beachDogSplash,
  fortFrederica,
} satisfies Record<string, StaticImageData>;

export const HERO_VIDEO = {
  mp4: "/videos/hero-video.mp4",
  webm: "/videos/hero-video.webm",
};

/** Marsh grass swaying in the wind — background of the home-value section. */
export const HOME_VALUE_VIDEO = {
  mp4: "/videos/home-value-grass.mp4",
  webm: "/videos/home-value-grass.webm",
};

export const AGENT = {
  name: "Cindy Baird",
  title: "REALTOR®",
  email: "cindybaird@kw.com",
  phone: "(912) 996-3195",
  phoneHref: "tel:+19129963195",
  officePhone: "(912) 434-6477",
  officePhoneHref: "tel:+19124346477",
  license: "Georgia License #404370",
  office: "Keller Williams Realty Golden Isles",
  street: "122 Island Professional Park",
  cityLine: "St. Simons Island, GA 31522",
  address: "122 Island Professional Park, St. Simons Island, GA 31522",
  existingSite: "https://cindybairdrealtor.com",
  homeSearchUrl: "https://cindybairdrealtor.com/home-search/listings",
};

/** Career figures as published on cindybairdrealtor.com (home page). */
export const STATS = [
  { value: "50+", label: "Closed sales" },
  { value: "$31.6M", label: "Total sales value" },
  { value: "$240K–$2M", label: "Price range" },
];

/** Areas Cindy lists in her neighborhood guides. */
export const AREAS_SERVED = ["St. Simons Island", "Sea Island", "Jekyll Island", "Brunswick", "Darien", "St. Marys"];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Buy", href: "/#buying" },
  { label: "Sell", href: "/#selling" },
  { label: "Listings", href: "/#listings" },
  { label: "Communities", href: "/#island-life" },
  { label: "Contact", href: "#contact" },
];

export type Community = {
  id: string;
  name: string;
  pinLabel: string;
  blurb: string;
  image: StaticImageData;
  alt: string;
  x: number;
  y: number;
};

/**
 * Neighborhoods from Cindy's guides. Photos are the ones her site uses for
 * each area, except St. Simons (her card photo is only 640px wide, so the
 * St. Simons pier photo from her home page is used instead). St. Marys is
 * omitted from the map: the only photo her site uses for it is of a golf
 * community in Arizona, so there is no suitable local image.
 */
export const COMMUNITIES: Community[] = [
  {
    id: "st-simons",
    name: "St. Simons Island",
    pinLabel: "St. Simons",
    blurb: "My home since 2000 — the village, the pier, live-oak streets and miles of beach.",
    image: stSimonsPier,
    alt: "The St. Simons Island pier stretching over calm water beside a rock-lined beach",
    x: 64,
    y: 72.7,
  },
  {
    id: "sea-island",
    name: "Sea Island",
    pinLabel: "Sea Island",
    blurb: "Quiet, private and tucked behind the dunes.",
    image: seaIslandOaks,
    alt: "A grassy lane beneath Spanish moss-draped live oaks",
    x: 74.2,
    y: 62.7,
  },
  {
    id: "jekyll-island",
    name: "Jekyll Island",
    pinLabel: "Jekyll Island",
    blurb: "Beaches, bike trails and a slower pace.",
    image: jekyllBeach,
    alt: "Aerial view of a wide Jekyll Island beach with a coastal path and palm trees",
    x: 64.8,
    y: 89.5,
  },
  {
    id: "brunswick",
    name: "Brunswick",
    pinLabel: "Brunswick",
    blurb: "Historic squares, the marina, value and easy island access.",
    image: brunswickMarina,
    alt: "Sailboats lining the Brunswick marina beneath a wide blue sky",
    x: 29.6,
    y: 57.3,
  },
  {
    id: "darien",
    name: "Darien",
    pinLabel: "Darien",
    blurb: "Small-town waterfront living along the marsh.",
    image: darienWaterfront,
    alt: "Historic wooden buildings beside winding waterways and coastal marshland near Darien",
    x: 24.2,
    y: 11.8,
  },
];

/**
 * "Lifestyle and Community" — the six topics (and photos) from the home page of
 * cindybairdrealtor.com. Two photo swaps: the festival photo replaces her 640px
 * carved-tree image, and the beach-walk photo replaces the pier (used elsewhere).
 */
export const LIFESTYLE: { title: string; image: StaticImageData; alt: string }[] = [
  { title: "Golfing", image: golfCourse, alt: "A golf course at sunset with a sand bunker, pond and clubhouse" },
  { title: "Fantastic Local Restaurants", image: southernSoul, alt: "The Southern Soul Barbeque sign against a colorful sunset sky" },
  {
    title: "Community Feel and Festivals",
    image: communityFestival,
    alt: "An outdoor arts market under live oaks with colorful vendor tents",
  },
  {
    title: "Biking and Beach Walks",
    image: beachDogSplash,
    alt: "A dog splashing through shallow water on the beach with coastal homes beyond",
  },
  { title: "The Art Center", image: glynnVisualArts, alt: "The Glynn Visual Arts gallery building and landscaped entrance" },
  {
    title: "Kayaking and Paddle Boarding",
    image: marshCannon,
    alt: "Calm marsh waters at sunset beside a historic cannon",
  },
];

/**
 * "Neighborhood Guides" — the six guides on cindybairdrealtor.com, linking to
 * her full guide pages. St. Marys uses the golf-course photo from her St. Marys
 * guide card (supplied by the client).
 */
export const NEIGHBORHOOD_GUIDES: { name: string; href: string; image?: StaticImageData; alt?: string }[] = [
  {
    name: "St. Simons Island",
    href: "https://cindybairdrealtor.com/neighborhoods/st-simons-island",
    image: stSimonsSign,
    alt: "The Welcome to St. Simons Island, Georgia sign surrounded by trees",
  },
  {
    name: "Sea Island",
    href: "https://cindybairdrealtor.com/neighborhoods/sea-island",
    image: seaIslandOaks,
    alt: "A grassy lane beneath Spanish moss-draped live oaks",
  },
  {
    name: "Jekyll Island",
    href: "https://cindybairdrealtor.com/neighborhoods/jekyll-island",
    image: jekyllBeach,
    alt: "Aerial view of a wide Jekyll Island beach with a coastal path",
  },
  {
    name: "Brunswick",
    href: "https://cindybairdrealtor.com/neighborhoods/brunswick",
    image: brunswickMarina,
    alt: "Sailboats lining the Brunswick marina",
  },
  {
    name: "Darien",
    href: "https://cindybairdrealtor.com/neighborhoods/darien",
    image: darienWaterfront,
    alt: "Historic wooden buildings beside the marsh near Darien",
  },
  {
    name: "St. Marys",
    href: "https://cindybairdrealtor.com/neighborhoods/st-marys",
    image: stMarysGolf,
    alt: "A golf green with a red flag, marsh grasses and live oaks under a bright sky",
  },
];

/** Options for the home-search bar and lead forms. */
export const AREAS = [...AREAS_SERVED, "Anywhere in the Golden Isles"];
export const HOME_TYPES = ["Single Family", "Condo/Townhome", "Land", "Commercial", "Multi-Family", "Other"];
export const HELP_TYPES = ["Buying", "Selling", "Buying & selling", "Home valuation", "Commercial property", "Something else"];
export const BEST_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"];
export const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "6+ months", "Just curious"];

/** "Curious what your home could sell for?" form options (Task 6). */
export const VALUATION = {
  propertyTypes: HOME_TYPES,
  bedrooms: ["Studio", "1", "2", "3", "4", "5", "6+"],
  bathrooms: ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"],
  conditions: ["Move-in ready", "Needs minor updates", "Needs major work", "Not sure"],
  timelines: TIMELINES,
  assistance: ["Home valuation", "List my home", "Sell and buy", "Downsize", "Investment/Commercial", "Other"],
};
