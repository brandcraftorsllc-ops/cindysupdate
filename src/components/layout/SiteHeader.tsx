"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { AGENT, NAV_LINKS } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { BrokerageBadge, Wordmark } from "../ui/Brand";
import { Menu, Phone, X } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <span aria-hidden="true" className="hidden h-9 w-px bg-marsh/15 lg:block" />
              <BrokerageBadge className="hidden xl:flex" />
            </div>

            <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="link-underline whitespace-nowrap font-body text-[0.74rem] font-medium uppercase text-marsh/80 transition-colors hover:text-marsh"
                  style={{ letterSpacing: "0.13em" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={AGENT.phoneHref}
                className="hidden items-center gap-2 font-body text-[0.82rem] font-medium text-marsh transition-colors hover:text-tidewater xl:flex"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {AGENT.phone}
              </a>
              <ArrowButton variant="golden" onClick={() => setTalkOpen(true)} className="hidden sm:inline-flex">
                Let&apos;s Talk
              </ArrowButton>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="grid h-12 w-12 place-items-center rounded-full border border-marsh/20 text-marsh transition-colors hover:bg-white/60 lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div id="mobile-nav" className="glass mt-2 overflow-hidden p-5 lg:hidden">
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-[48px] items-center border-b border-marsh/10 font-body text-[0.85rem] font-medium uppercase text-marsh last:border-0"
                    style={{ letterSpacing: "0.13em" }}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-5 flex flex-col gap-3">
                <ArrowButton
                  variant="golden"
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
                  className="flex min-h-[48px] items-center justify-center gap-2 font-body text-[0.9rem] font-medium text-marsh"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {AGENT.phone}
                </a>
                <BrokerageBadge className="mt-2 w-full" />
                <p className="text-[0.72rem] leading-relaxed text-driftwood/65">{AGENT.address}</p>
              </div>
            </div>
          ) : null}
        </div>
      </header>
      <TalkDialog open={talkOpen} onOpenChange={setTalkOpen} />
    </>
  );
}
