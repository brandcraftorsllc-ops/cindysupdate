"use client";

import { useState } from "react";
import { ArrowButton } from "../ui/ArrowButton";
import { HomesDialog } from "../ui/LeadDialogs";

/** "Find a home like this" CTA — opens the site's existing home-search dialog for an area. */
export function AskAboutHome({ area, label = "Find a Home Like This" }: { area: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ArrowButton variant="primary" onClick={() => setOpen(true)} className="w-full justify-between">
        {label}
      </ArrowButton>
      <HomesDialog open={open} onOpenChange={setOpen} area={area} mode="Buy" />
    </>
  );
}
