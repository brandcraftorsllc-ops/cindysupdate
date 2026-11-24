import Link from "next/link";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

/** "Cindy Baird / REALTOR®" wordmark with the Home Sweet Agent script. */
export function Wordmark({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const name = tone === "light" ? "text-white" : "text-teal";
  const sub = tone === "light" ? "text-white" : "text-teal";
  return (
    <Link
      href="/"
      aria-label="Cindy Baird, REALTOR® — home"
      className={cn("inline-flex flex-col items-center leading-none", className)}
    >
      <span className={cn("whitespace-nowrap font-heading text-[1.42rem] leading-none sm:text-[1.6rem]", name)}>Cindy Baird</span>
      <span
        className={cn("mt-2 font-body text-[0.55rem] font-semibold uppercase sm:text-[0.58rem]", sub)}
        style={{ letterSpacing: "0.4em", paddingLeft: "0.4em" }}
      >
        REALTOR®
      </span>
    </Link>
  );
}

/** Keller Williams Realty Golden Isles brokerage slot. */
export function BrokerageBadge({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  const border = tone === "light" ? "border-white/30" : "border-teal/15";
  const top = tone === "light" ? "text-white" : "text-teal";
  const bottom = tone === "light" ? "text-white" : "text-teal";
  return (
    <div className={cn("flex flex-col justify-center whitespace-nowrap rounded-[14px] border px-3 py-1.5", border, className)}>
      <span className={cn("font-body text-[0.5rem] font-semibold uppercase", top)} style={{ letterSpacing: "0.22em" }}>
        Keller Williams Realty
      </span>
      <span className={cn("font-heading text-[0.94rem] leading-tight", bottom)}>Golden Isles</span>
    </div>
  );
}

export function EqualHousing() {
  return (
    <div className="flex items-center gap-3 text-white">
      <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 15.5L19 6l12 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.5V26h18V15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19.5h8M15 22.5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="font-body text-[0.6rem] font-semibold uppercase leading-tight" style={{ letterSpacing: "0.16em" }}>
        Equal Housing
        <br />
        Opportunity
      </span>
    </div>
  );
}
