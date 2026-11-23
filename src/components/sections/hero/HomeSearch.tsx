"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { AREAS, HOME_TYPES } from "@/lib/content";
import { ArrowButton } from "../../ui/ArrowButton";
import { ChevronDown } from "../../ui/Icons";
import { HomesDialog } from "../../ui/LeadDialogs";

const MIN = 0;
const MAX = 3_000_000;
const STEP = 50_000;

const formatPrice = (v: number) => {
  if (v >= MAX) return "$3M+";
  if (v <= MIN) return "$0";
  if (v >= 1e6) {
    const m = v / 1e6;
    return `$${Number.isInteger(m) ? m : m.toFixed(1)}M`;
  }
  return `$${Math.round(v / 1e3)}K`;
};

const LABEL = "mb-1.5 block font-body text-[0.6rem] font-semibold uppercase text-marsh/60";

function SearchSelect({
  label,
  id,
  value,
  onChange,
  options,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label htmlFor={id} className="block">
      <span className={LABEL} style={{ letterSpacing: "0.2em" }}>
        {label}
      </span>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="field-input cursor-pointer appearance-none pr-9"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-marsh/45"
        />
      </div>
    </label>
  );
}

/** Glass search bar at the foot of the hero. */
export function HomeSearch() {
  const [mode, setMode] = useState<"Buy" | "Sell">("Buy");
  const [area, setArea] = useState(AREAS[0]);
  const [homeType, setHomeType] = useState(HOME_TYPES[0]);
  const [[lo, hi], setRange] = useState<[number, number]>([400_000, 1_500_000]);
  const [open, setOpen] = useState(false);

  const left = (lo / MAX) * 100;
  const right = 100 - (hi / MAX) * 100;

  return (
    <>
      <div className="glass p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_auto] lg:items-end">
          <div>
            <span className={LABEL} style={{ letterSpacing: "0.2em" }}>
              I want to
            </span>
            <div className="flex rounded-full border border-white/70 bg-white/55 p-1" role="group" aria-label="I want to">
              {(["Buy", "Sell"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  aria-pressed={mode === m}
                  className={cn(
                    "min-h-[42px] flex-1 rounded-full font-body text-[0.74rem] font-semibold uppercase transition-colors",
                    mode === m ? "bg-marsh text-oyster" : "text-marsh/70 hover:text-marsh",
                  )}
                  style={{ letterSpacing: "0.14em" }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <SearchSelect label="Area" id="search-area" value={area} onChange={setArea} options={AREAS} />
          <SearchSelect label="Home type" id="search-type" value={homeType} onChange={setHomeType} options={HOME_TYPES} />

          <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-2">
              <span className="font-body text-[0.6rem] font-semibold uppercase text-marsh/60" style={{ letterSpacing: "0.2em" }}>
                Price range
              </span>
              <span className="font-body text-[0.78rem] font-semibold text-marsh">
                {formatPrice(lo)} – {formatPrice(hi)}
              </span>
            </div>
            <div className="relative h-10">
              <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-marsh/15" />
              <div
                className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-golden"
                style={{ left: `${left}%`, right: `${right}%` }}
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={lo}
                onChange={(e) => setRange([Math.min(Number(e.target.value), hi - STEP), hi])}
                aria-label="Minimum price"
                className="range-input"
              />
              <input
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={hi}
                onChange={(e) => setRange([lo, Math.max(Number(e.target.value), lo + STEP)])}
                aria-label="Maximum price"
                className="range-input"
              />
            </div>
          </div>

          <ArrowButton variant="golden" onClick={() => setOpen(true)} className="w-full justify-between lg:w-auto">
            Send Me Homes
          </ArrowButton>
        </div>
      </div>
      <HomesDialog open={open} onOpenChange={setOpen} area={area} mode={mode} homeType={homeType} />
    </>
  );
}
