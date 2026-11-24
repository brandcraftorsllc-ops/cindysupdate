import { cn } from "@/lib/cn";
import { listingFacts, type Listing } from "@/data/listings";
import { Picture } from "./Picture";

const STATUS_STYLES: Record<Listing["status"], string> = {
  Active: "bg-teal text-white",
  New: "bg-gold text-ink",
  "Coming Soon": "bg-sky text-teal",
  Pending: "bg-white text-teal",
  "Under Contract": "bg-white text-teal",
  Sold: "bg-teal text-white",
};

/** Property card used by Featured Listings and Recently Sold. */
export function ListingCard({
  listing,
  sizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw",
  children,
  className,
}: {
  listing: Listing;
  sizes?: string;
  /** Actions rendered at the bottom of the card. */
  children?: React.ReactNode;
  className?: string;
}) {
  const img = listing.images[0];
  const facts = listingFacts(listing);
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[28px] border border-teal/10 bg-white shadow-[0_24px_60px_-42px_rgb(24_103_109/0.55)]",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        {img ? (
          <Picture
            src={img.src}
            alt={img.alt}
            sizes={sizes}
            className="aspect-[3/2] w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : null}
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1.5 font-body text-[0.72rem] font-semibold uppercase shadow-sm",
            STATUS_STYLES[listing.status],
          )}
          style={{ letterSpacing: "0.18em" }}
        >
          {listing.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-body text-[1.15rem] font-semibold text-teal" style={{ letterSpacing: "0.02em" }}>
          {listing.price}
        </p>
        <h3 className="mt-1 font-heading text-[1.3rem] leading-tight text-teal">{listing.address}</h3>
        <p className="mt-1 text-[0.82rem] uppercase tracking-[0.12em] text-ink/80">{listing.city}</p>
        {facts ? (
          <p className="mt-3 border-t border-teal/10 pt-3 font-body text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-teal">
            {facts}
          </p>
        ) : null}
        {listing.description ? <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/90">{listing.description}</p> : null}
        {children ? <div className="mt-auto pt-5">{children}</div> : null}
      </div>
    </article>
  );
}
