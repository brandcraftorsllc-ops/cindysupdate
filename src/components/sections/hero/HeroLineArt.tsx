"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const STROKE = "hsl(38 54% 58%)";

// Golden house sketch that draws itself over the hero on load, then fades out.
const PATHS =
  "M60 660 L1140 660.M360 352 L600 214 L840 352.M398 352 L600 240 L802 352.M420 352 L420 600 L780 600 L780 352.M582 300 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0.M330 470 L870 470.M362 470 L362 636.M530 470 L530 636.M670 470 L670 636.M838 470 L838 636.M362 556 L838 556.M452 392 h104 v118 h-104 z.M504 392 v118.M644 392 h104 v118 h-104 z.M696 392 v118.M560 486 v114 h80 v-114.M600 486 v114.M330 636 L870 636.M300 662 L900 662.M120 660 C130 540 150 470 210 420.M210 420 C120 400 70 440 40 500.M210 420 C260 360 330 340 400 360.M150 470 C110 430 80 400 46 396.M1050 660 C1040 560 1010 500 960 460.M960 460 C1030 430 1090 450 1120 500.M960 460 C900 420 860 400 830 392".split(
    ".",
  );

export function HeroLineArt({ done }: { done: boolean }) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] transition-opacity duration-[1600ms] ease-out",
        done ? "opacity-0" : "opacity-100",
      )}
    >
      <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
        {PATHS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke={STROKE}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.92 }}
            transition={{
              pathLength: { duration: 1.5, delay: i * 0.045, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: i * 0.045 },
            }}
          />
        ))}
      </svg>
    </div>
  );
}
