import { FEATURED_LISTINGS } from "@/data/listings";
import { ListingCarousel } from "./ListingCarousel";

/** Featured showcase — same carousel design as the Sold section. */
export function FeaturedListings() {
  return (
    <ListingCarousel
      id="listings"
      eyebrow="Featured listings"
      heading={[{ t: "Homes I'm " }, { t: "proud to show.", italic: true }]}
      intro="A few of the standout island homes I've had the joy of helping buy and sell."
      listings={FEATURED_LISTINGS}
      hideSoldStatus
      className="bg-foam"
    />
  );
}
