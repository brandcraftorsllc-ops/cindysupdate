import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// All variants meet WCAG AA for their label text, including hover states.
const VARIANTS = {
  primary: "border-teal bg-teal text-white hover:brightness-[0.82]",
  gold: "border-gold bg-gold text-ink hover:brightness-[0.9]",
  light: "border-teal/15 bg-white text-teal hover:border-teal hover:bg-foam",
  ghost: "border-white/70 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-teal",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

type Props = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Pill button with divider + animated arrow — the site's signature CTA. */
export function ArrowButton({ children, href, variant = "primary", className, type = "button", ...rest }: Props) {
  const classes = cn(
    "group inline-flex h-[52px] items-stretch overflow-hidden rounded-full border transition-colors duration-300 [text-shadow:none] disabled:cursor-wait disabled:opacity-70",
    VARIANTS[variant],
    className,
  );

  const inner = (
    <>
      <span className="flex items-center px-5 font-body text-[0.78rem] font-semibold uppercase leading-tight tracking-[0.14em] sm:whitespace-nowrap sm:px-6">
        {children}
      </span>
      <span aria-hidden="true" className="w-px self-stretch bg-current opacity-25" />
      <span aria-hidden="true" className="flex w-11 items-center justify-center sm:w-12">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17.4 17.4"
          fill="none"
          className="transition-transform duration-500 group-hover:translate-x-1"
        >
          <path
            d="M11.3517 1.52148L14.1053 4.6806C15.9753 6.82906 15.9753 10.3126 14.1053 12.4611L11.3517 15.6202"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
          <path d="M15.5039 8.62988L1.07414 8.62988" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeMiterlimit="10" />
        </svg>
      </span>
    </>
  );

  if (href) {
    // Internal routes use client-side navigation; hashes, tel: and external URLs are plain links.
    if (href.startsWith("/") && !href.startsWith("//")) {
      return (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      );
    }
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {inner}
    </button>
  );
}
