"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Honors prefers-reduced-motion site-wide: Framer skips movement (transforms)
 * for those visitors while keeping markup identical between server and client,
 * which avoids hydration mismatches.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

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
  accent = "text-teal",
  delay = 0,
}: {
  parts: HeadingPart[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  accent?: string;
  delay?: number;
}) {
  const words: { word: string; italic: boolean }[] = [];
  parts.forEach((p) =>
    p.t
      .trim()
      .split(/\s+/)
      .forEach((w) => w && words.push({ word: w, italic: !!p.italic })),
  );

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
