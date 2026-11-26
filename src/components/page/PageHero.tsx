import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { AnimatedHeading, Reveal, type HeadingPart } from "../ui/Motion";
import { Picture } from "../ui/Picture";

/**
 * Hero for inner pages — the same treatment as the About page hero
 * (foam→salt gradient, soft sky glow, eyebrow + animated h1), with an optional photo.
 * The header is absolutely positioned, so the hero carries the top padding.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: HeadingPart[];
  intro?: ReactNode;
  /** Buttons / extra content under the intro. */
  children?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-foam to-salt pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, hsl(var(--sky) / 0.7) 0%, transparent 70%)" }}
      />
      <div
        className={
          image
            ? "shell relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"
            : "shell relative"
        }
      >
        <div className="max-w-[720px]">
          <p className="eyebrow text-teal">{eyebrow}</p>
          <AnimatedHeading
            as="h1"
            className="mt-4 font-heading text-[clamp(2.4rem,5vw,4rem)] leading-[1.06] text-teal"
            parts={title}
            accent="text-teal"
          />
          {intro ? <div className="mt-6 max-w-[600px] text-[1.08rem] leading-relaxed text-ink">{intro}</div> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[32px] border-4 border-white shadow-[0_40px_90px_-50px_rgb(24_103_109/0.7)]">
              <Picture src={image} alt={imageAlt} priority sizes="(min-width: 1024px) 520px, 100vw" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
