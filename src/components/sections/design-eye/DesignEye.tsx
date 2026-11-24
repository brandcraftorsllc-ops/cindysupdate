"use client";

import { useState } from "react";
import { IMAGES } from "@/lib/content";
import { ArrowButton } from "../../ui/ArrowButton";
import { HomesDialog } from "../../ui/LeadDialogs";
import { AnimatedHeading, Reveal } from "../../ui/Motion";
import { Picture } from "../../ui/Picture";

const INTERIORS = [
  { src: IMAGES.interiorBiltmoreLiving, alt: "Bright living room opening to a screened porch at 116 Biltmore", caption: "116 Biltmore · Sold" },
  { src: IMAGES.interiorCoastCottage, alt: "Light-filled coastal living room with tall windows at 17 Coast Cottage Lane", caption: "17 Coast Cottage Ln · Sold" },
  { src: IMAGES.interiorBiltmoreKitchen, alt: "White kitchen with an island and dining area at 116 Biltmore", caption: "116 Biltmore · Sold" },
];

/** Cindy's design story, shown with real interiors from homes she has sold. */
export function DesignEye() {
  const [open, setOpen] = useState(false);
  return (
    <section className="sec bg-foam">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <div className="card p-7 sm:p-9">
              <p className="eyebrow text-teal">My eye for design</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12] text-teal"
                parts={[{ t: "Some homes need " }, { t: "a little imagination.", italic: true }]}
              />
              <p className="mt-5 text-[1.02rem] leading-relaxed text-ink">
                Before St. Simons, I lived overseas and in several states, renovating every home I lived in. When I moved
                to the island, I drew out the home I wanted and had it built.
              </p>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink/85">
                I&apos;m often told I have an uncanny eye for design — and I use it to help you see what a home could become,
                or show yours at its very best.
              </p>
              <ArrowButton onClick={() => setOpen(true)} variant="primary" className="mt-7">
                Find My Home with Cindy
              </ArrowButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {INTERIORS.map((img, i) => (
                <figure
                  key={img.alt}
                  className={
                    i === 0
                      ? "group relative col-span-2 overflow-hidden rounded-[28px] border-4 border-white shadow-[0_30px_70px_-45px_rgb(24_103_109/0.6)]"
                      : "group relative overflow-hidden rounded-[24px] border-4 border-white shadow-[0_24px_50px_-40px_rgb(24_103_109/0.6)]"
                  }
                >
                  <Picture
                    src={img.src}
                    alt={img.alt}
                    sizes={i === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"}
                    className={
                      i === 0
                        ? "aspect-[16/9] w-full transition-transform duration-700 group-hover:scale-[1.04]"
                        : "aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    }
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-teal shadow-sm">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <HomesDialog open={open} onOpenChange={setOpen} area="Anywhere in the Golden Isles" mode="Buy" />
    </section>
  );
}
