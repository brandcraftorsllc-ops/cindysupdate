"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { AGENT, NAV_LINKS } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { BrokerageBadge, Wordmark } from "../ui/Brand";
import { Menu, Phone, X } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";

/** Route links ("/", "/about") use Next navigation; hash links stay plain anchors. */
function NavLink({ href, className, onClick, children, current }: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  current?: boolean;
}) {
  const props = { className, onClick, "aria-current": current ? ("page" as const) : undefined };
  return href.includes("#") ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The menu is open "for" a path, so it closes automatically when the route changes.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const setMenuOpen = (next: boolean | ((open: boolean) => boolean)) =>
    setMenuPath((p) => ((typeof next === "function" ? next(p === pathname) : next) ? pathname : null));
  const [talkOpen, setTalkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCurrent = (href: string) => (href === "/" || href === "/about") && href === pathname;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="shell pt-3 sm:pt-4">
          <div
            className={cn(
              "glass flex items-center justify-between gap-3 px-3 transition-all duration-500 sm:px-5",
              scrolled ? "h-[66px]" : "h-[76px]",
            )}
          >
            <div className="flex min-w-0 items-center gap-4">
              <Wordmark />
              <span aria-hidden="true" className="hidden h-9 w-px bg-navy/15 xl:block" />
              <BrokerageBadge className="hidden xl:flex" />
            </div>

            <nav aria-label="Main" className="hidden items-center gap-4 lg:flex xl:gap-5">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.label}
                  href={l.href}
                  current={isCurrent(l.href)}
                  className={cn(
                    "link-underline whitespace-nowrap py-1 font-body text-[0.74rem] font-semibold uppercase text-navy/85 transition-colors hover:text-teal",
                    isCurrent(l.href) && "bg-[length:100%_1px] text-teal",
                  )}
                >
                  <span style={{ letterSpacing: "0.12em" }}>{l.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={AGENT.phoneHref}
                className="hidden items-center gap-2 whitespace-nowrap font-body text-[0.82rem] font-semibold text-navy transition-colors hover:text-teal 2xl:flex"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {AGENT.phone}
              </a>
              <ArrowButton variant="primary" onClick={() => setTalkOpen(true)} className="hidden sm:inline-flex">
                Let&apos;s Talk
              </ArrowButton>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="grid h-12 w-12 place-items-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-foam lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div id="mobile-nav" className="glass mt-2 max-h-[calc(100svh-110px)] overflow-y-auto p-5 lg:hidden">
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.label}
                    href={l.href}
                    current={isCurrent(l.href)}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex min-h-[48px] items-center border-b border-navy/10 font-body text-[0.85rem] font-semibold uppercase text-navy last:border-0",
                      isCurrent(l.href) && "text-teal",
                    )}
                  >
                    <span style={{ letterSpacing: "0.12em" }}>{l.label}</span>
                  </NavLink>
                ))}
              </nav>
              <div className="mt-5 flex flex-col gap-3">
                <ArrowButton
                  variant="primary"
                  onClick={() => {
                    setMenuOpen(false);
                    setTalkOpen(true);
                  }}
                  className="w-full justify-between"
                >
                  Let&apos;s Talk
                </ArrowButton>
                <a
                  href={AGENT.phoneHref}
                  className="flex min-h-[48px] items-center justify-center gap-2 font-body text-[0.95rem] font-semibold text-navy"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {AGENT.phone}
                </a>
                <BrokerageBadge className="mt-2 w-full" />
                <p className="text-[0.78rem] leading-relaxed text-ink/80">{AGENT.address}</p>
              </div>
            </div>
          ) : null}
        </div>
      </header>
      <TalkDialog open={talkOpen} onOpenChange={setTalkOpen} />
    </>
  );
}
