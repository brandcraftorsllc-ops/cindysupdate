"use client";

import { useState } from "react";
import { AGENT, IMAGES, NAV_LINKS } from "@/lib/content";
import { ArrowButton } from "../ui/ArrowButton";
import { BrokerageBadge, EqualHousing, Wordmark } from "../ui/Brand";
import { Facebook, Instagram, Mail, MapPin, Phone } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";
import { Picture } from "../ui/Picture";

const SOCIAL =
  "grid h-11 w-11 place-items-center rounded-full border border-oyster/25 text-oyster/80 transition-colors hover:border-golden hover:text-golden";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-[0.62rem] font-semibold uppercase text-golden" style={{ letterSpacing: "0.24em" }}>
      {children}
    </p>
  );
}

export function SiteFooter() {
  const [talkOpen, setTalkOpen] = useState(false);
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-marsh text-oyster">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-golden/70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <Picture src={IMAGES.oakTexture} alt="" className="h-full w-full animate-moss-sway object-cover" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-marsh/80 via-marsh/90 to-marsh"
      />
      <div className="shell relative py-16 pb-32 sm:py-20 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_0.8fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-5 max-w-[280px] text-[0.95rem] leading-relaxed text-oyster/70">
              I help buyers and sellers across St. Simons Island and the Golden Isles — with a designer&apos;s eye and a
              neighbor&apos;s heart.
            </p>
            <p className="mt-3 font-script text-[1.25rem] leading-none text-golden">Home Sweet Agent</p>
            <div className="mt-6 flex items-center gap-3">
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
            <p className="mt-4 flex items-start gap-2 text-[0.9rem] leading-relaxed text-oyster/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {AGENT.office}
                <br />
                122 Island Professional Park
                <br />
                St. Simons Island, GA 31522
              </span>
            </p>
          </div>

          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-underline font-body text-[0.9rem] text-oyster/75 transition-colors hover:text-oyster">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={AGENT.phoneHref} className="flex items-center gap-2 font-body text-[0.9rem] text-oyster/80 transition-colors hover:text-golden">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {AGENT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${AGENT.email}`} className="flex items-center gap-2 break-all font-body text-[0.9rem] text-oyster/80 transition-colors hover:text-golden">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {AGENT.email}
                </a>
              </li>
            </ul>
            <ArrowButton variant="golden" className="mt-5" onClick={() => setTalkOpen(true)}>
              Let&apos;s Talk
            </ArrowButton>
          </div>
        </div>

        <div className="mt-14 border-t border-oyster/15 pt-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <EqualHousing />
            <p className="max-w-[640px] text-[0.76rem] leading-relaxed text-oyster/55">
              Cindy Baird, REALTOR® · {AGENT.license} · {AGENT.office}, 122 Island Professional Park, St. Simons Island, GA
              31522 · Each office is independently owned and operated.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.76rem] text-oyster/55">
              <span>© {new Date().getFullYear()} Cindy Baird</span>
              <a href="#contact" className="link-underline hover:text-oyster">
                Privacy
              </a>
              <a href="#contact" className="link-underline hover:text-oyster">
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
