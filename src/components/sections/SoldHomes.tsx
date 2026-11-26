import Link from "next/link";
import { SOLD_LISTINGS } from "@/data/listings";
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
          A selection of closed sales —{" "}
          <Link href="/properties" className="font-semibold text-teal underline underline-offset-2">
            see my full portfolio
          </Link>
          . No representation is made about which brokerage represented which party in any transaction.
        </>
      }
    />
  );
}
