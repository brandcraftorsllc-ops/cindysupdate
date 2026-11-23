"use client";

import Link from "next/link";
import { useState } from "react";
import { AGENT, NAV_LINKS } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { BrokerageBadge, EqualHousing, Wordmark } from "../ui/Brand";
import { Facebook, Instagram, Mail, MapPin, Phone } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";

const SOCIAL =
  "grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white/90 transition-colors hover:border-gold hover:text-gold";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.66rem] font-semibold uppercase text-gold" style={{ letterSpacing: "0.22em" }}>
      {children}
    </p>
  );
}

/** Deep navy footer — the one dark band on the site, used for contrast. */
export function SiteFooter() {
  const [talkOpen, setTalkOpen] = useState(false);
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-sky to-gold" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, hsl(var(--tide) / 0.6) 0%, transparent 70%)" }}
      />
      <div className="shell relative py-16 pb-32 sm:py-20 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_0.8fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-5 max-w-[290px] text-[0.95rem] leading-relaxed text-white/85">
              Guiding you home with care, creativity and coastal insight — across St. Simons Island and the Golden Isles.
            </p>
            <p className="mt-3 font-script text-[1.25rem] leading-none text-gold">Home Sweet Agent</p>
            <div className="mt-6 flex items-center gap-3">
              {/* TODO: replace with Cindy's own Facebook / Instagram profile URLs (not listed on her current site). */}
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" aria-label="Cindy Baird on Facebook" className={SOCIAL}>
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label="Cindy Baird on Instagram" className={SOCIAL}>
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <ColumnTitle>Brokerage</ColumnTitle>
            <BrokerageBadge tone="light" className="mt-4 w-full max-w-[240px]" />
            <p className="mt-4 flex items-start gap-2 text-[0.92rem] leading-relaxed text-white/85">
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {AGENT.office}
                <br />
                {AGENT.street}
                <br />
                {AGENT.cityLine}
              </span>
            </p>
          </div>

          <nav aria-label="Footer">
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  {l.href.includes("#") ? (
                    <a href={l.href} className="link-underline font-body text-[0.92rem] text-white/85 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="link-underline font-body text-[0.92rem] text-white/85 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={AGENT.phoneHref} className="flex items-center gap-2 font-body text-[0.92rem] text-white/90 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>
                    {AGENT.phone} <span className="text-white/70">(mobile)</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={AGENT.officePhoneHref} className="flex items-center gap-2 font-body text-[0.92rem] text-white/90 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>
                    {AGENT.officePhone} <span className="text-white/70">(office)</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${AGENT.email}`} className="flex items-center gap-2 break-all font-body text-[0.92rem] text-white/90 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {AGENT.email}
                </a>
              </li>
            </ul>
            <ArrowButton variant="gold" className="mt-5" onClick={() => setTalkOpen(true)}>
              Let&apos;s Talk
            </ArrowButton>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <EqualHousing />
            <p className="max-w-[640px] text-[0.8rem] leading-relaxed text-white/75">
              Cindy Baird, REALTOR® · {AGENT.license} · {AGENT.office}, {AGENT.address} · Each office is independently owned and
              operated.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem] text-white/75">
              <span>© {new Date().getFullYear()} Cindy Baird</span>
              {/* TODO: link to real Privacy / Terms pages when they exist. */}
              <a href="#contact" className="link-underline hover:text-white">
                Privacy
              </a>
              <a href="#contact" className="link-underline hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
      <TalkDialog open={talkOpen} onOpenChange={setTalkOpen} />
    </footer>
  );
}
