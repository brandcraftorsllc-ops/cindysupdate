import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

/** "Cindy Baird / REALTOR®" wordmark. */
export function Wordmark({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const name = tone === "light" ? "text-oyster" : "text-marsh";
  const sub = tone === "light" ? "text-oyster/75" : "text-marsh/65";
  return (
    <a
      href="#top"
      aria-label="Cindy Baird, REALTOR® — back to top"
      className={cn("inline-flex flex-col items-center leading-none", className)}
    >
      <span className={cn("font-heading text-[1.42rem] leading-none sm:text-[1.6rem]", name)}>Cindy Baird</span>
      <span
        className={cn("mt-2 font-body text-[0.52rem] font-semibold uppercase sm:text-[0.56rem]", sub)}
        style={{ letterSpacing: "0.4em", paddingLeft: "0.4em" }}
      >
        REALTOR®
      </span>
    </a>
  );
}

/** Keller Williams Realty Golden Isles brokerage slot. */
export function BrokerageBadge({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const border = tone === "light" ? "border-white/25" : "border-marsh/15";
  const top = tone === "light" ? "text-oyster/50" : "text-marsh/45";
  const bottom = tone === "light" ? "text-oyster/80" : "text-marsh/75";
  return (
    <div className={cn("flex flex-col justify-center rounded-[14px] border px-3 py-1.5", border, className)}>
      <span className={cn("font-body text-[0.48rem] font-semibold uppercase", top)} style={{ letterSpacing: "0.22em" }}>
        Keller Williams Realty
      </span>
      <span className={cn("font-heading text-[0.94rem] leading-tight", bottom)}>Golden Isles</span>
    </div>
  );
}

export function EqualHousing() {
  return (
    <div className="flex items-center gap-3 text-oyster/70">
      <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 15.5L19 6l12 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.5V26h18V15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.5h8M15 22.5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="font-body text-[0.58rem] font-semibold uppercase leading-tight" style={{ letterSpacing: "0.16em" }}>
        Equal Housing
        <br />
        Opportunity
      </span>
    </div>
  );
}
