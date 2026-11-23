"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/** Fade-and-rise on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export type HeadingPart = { t: string; italic?: boolean };

/** Heading whose words rise in one by one; italic parts take the accent colour. */
export function AnimatedHeading({
  parts,
  as: Tag = "h2",
  className,
  accent = "text-tidewater",
  delay = 0,
}: {
  parts: HeadingPart[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  accent?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words: { word: string; italic: boolean }[] = [];
  parts.forEach((p) =>
    p.t
      .trim()
      .split(/\s+/)
      .forEach((w) => w && words.push({ word: w, italic: !!p.italic })),
  );

  if (reduced) {
    return (
      <Tag className={className}>
        {parts.map((p, i) => (
          <span key={i} className={p.italic ? cn("italic", accent) : undefined}>
            {p.t}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-70px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
      >
        {words.map((w, i) => (
          <motion.span
            key={`${w.word}-${i}`}
            variants={{
              hidden: { opacity: 0, y: "0.45em" },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
            className={cn("inline-block", w.italic && cn("italic", accent))}
          >
            {w.word}
            {" "}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
