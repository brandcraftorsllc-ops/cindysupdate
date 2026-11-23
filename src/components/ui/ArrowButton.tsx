import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const VARIANTS = {
  golden: "border-marsh/25 bg-golden text-driftwood hover:border-marsh hover:bg-marsh hover:text-oyster",
  glass: "border-white/80 bg-white/40 text-marsh backdrop-blur-xl hover:bg-white/80 hover:text-marsh",
  marsh: "border-marsh bg-marsh text-oyster hover:border-golden hover:bg-golden hover:text-driftwood",
  cream: "border-oyster/70 bg-oyster text-marsh hover:border-oyster hover:bg-white",
  ghostLight: "border-white/45 bg-white/10 text-oyster backdrop-blur-xl hover:bg-white/25 hover:text-white",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

type Props = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Pill button with divider + animated arrow — the site's signature CTA. */
export function ArrowButton({ children, href, variant = "golden", className, type = "button", ...rest }: Props) {
  const classes = cn(
    "group inline-flex h-[52px] items-stretch overflow-hidden rounded-full border transition-all duration-500",
    VARIANTS[variant],
    className,
  );

  const inner = (
    <>
      <span className="flex items-center px-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.16em] sm:px-6">
        {children}
      </span>
      <span aria-hidden="true" className="w-px self-stretch bg-current opacity-20" />
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
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            opacity="0.97"
          />
          <path
            d="M15.5039 8.62988L1.07414 8.62988"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
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
