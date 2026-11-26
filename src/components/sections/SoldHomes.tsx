import { SOLD_LISTINGS } from "@/data/listings";
import { AGENT } from "@/lib/content";
import { ListingCarousel } from "./ListingCarousel";

/** Closed sales from Cindy's portfolio. */
export function SoldHomes() {
  return (
    <ListingCarousel
      id="sold"
      eyebrow="Sold"
      heading={[{ t: "From cottages to " }, { t: "island estates.", italic: true }]}
      intro="Every sale gets the same care, whatever the price — from a Brunswick lot to a family home on St. Simons."
      listings={SOLD_LISTINGS}
      className="bg-salt"
      footnote={
        <>
          A selection of closed sales from my portfolio — see all of them on{" "}
          <a
            href={`${AGENT.existingSite}/properties`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal underline underline-offset-2"
          >
            cindybairdrealtor.com
          </a>
          . No representation is made about which brokerage represented which party in any transaction.
        </>
      }
    />
  );
}
