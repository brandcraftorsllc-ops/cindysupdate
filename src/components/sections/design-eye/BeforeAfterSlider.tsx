"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "../../ui/Icons";
import { Picture } from "../../ui/Picture";

const CALLOUTS = [
  { text: "Open the wall for marsh views", className: "left-[8%] top-[12%]" },
  { text: "Warm white oak floors", className: "right-[6%] bottom-[32%]" },
  { text: "Quartzite island, brass details", className: "left-[14%] bottom-[12%]" },
];

/** Draggable before/after kitchen comparison with a one-time "peek" sweep when it scrolls into view. */
export function BeforeAfterSlider() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const played = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played.current) return;
          played.current = true;
          let start: number | null = null;
          const step = (t: number) => {
            if (start === null) start = t;
            const p = Math.min(1, (t - start) / 2400);
            setPos(50 + Math.sin(p * Math.PI) * 24);
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const moveTo = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison of a renovated kitchen"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      // Stop the browser's native image drag, which would cancel the pointer stream mid-drag.
      onDragStart={(e) => e.preventDefault()}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
      }}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-[28px] border border-white/50 bg-marsh shadow-[0_34px_80px_-46px_rgba(46,42,38,0.75)] sm:aspect-[16/11]"
    >
      <Picture
        src={IMAGES.after}
        alt="The same kitchen after redesign: warm white cabinetry, white oak floors and a quartzite island open to the marsh view"
        className="absolute inset-0 h-full w-full object-cover"
        sizes="(min-width: 1024px) 660px, 100vw"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Picture
          src={IMAGES.before}
          alt="A dated kitchen with honey oak cabinets, laminate counters and flat lighting before renovation"
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 660px, 100vw"
        />
      </div>
      <span
        className="pointer-events-none absolute left-4 top-4 rounded-full bg-marsh/70 px-3 py-1.5 font-body text-[0.58rem] font-semibold uppercase text-oyster backdrop-blur-sm"
        style={{ letterSpacing: "0.2em" }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/75 px-3 py-1.5 font-body text-[0.58rem] font-semibold uppercase text-marsh backdrop-blur-sm"
        style={{ letterSpacing: "0.2em" }}
      >
        After
      </span>
      <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden="true">
        <div className="absolute inset-y-0 -left-px w-[2px] bg-white/90" />
        <div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/75 text-marsh shadow-lg backdrop-blur-md">
          <ChevronLeft className="h-4 w-4" />
          <ChevronRight className="-ml-1 h-4 w-4" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {CALLOUTS.map((c) => (
          <span
            key={c.text}
            className={`absolute hidden max-w-[190px] rounded-2xl border border-white/70 bg-white/70 px-3 py-2 font-body text-[0.72rem] leading-snug text-marsh backdrop-blur-md transition-all duration-700 sm:block ${c.className} ${pos > 42 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            {c.text}
          </span>
        ))}
      </div>
    </div>
  );
}
