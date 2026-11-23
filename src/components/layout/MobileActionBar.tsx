"use client";

import { useState } from "react";
import { AGENT } from "@/lib/content";
import { Phone } from "../ui/Icons";
import { TalkDialog } from "../ui/LeadDialogs";

/** Sticky "Call Cindy / Let's Talk" bar on phones (hidden from md up). */
export function MobileActionBar() {
  const [talkOpen, setTalkOpen] = useState(false);
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="glass flex items-stretch gap-2 p-2">
          <a
            href={AGENT.phoneHref}
            className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 bg-white font-body text-[0.78rem] font-semibold uppercase text-navy"
            style={{ letterSpacing: "0.12em" }}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Cindy
          </a>
          <button
            type="button"
            onClick={() => setTalkOpen(true)}
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-teal bg-teal font-body text-[0.78rem] font-semibold uppercase text-white transition-colors hover:bg-navy"
            style={{ letterSpacing: "0.12em" }}
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
      <TalkDialog open={talkOpen} onOpenChange={setTalkOpen} />
    </>
  );
}
