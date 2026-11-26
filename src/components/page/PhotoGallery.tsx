"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "../ui/Icons";

/**
 * Property photo gallery: a lead photo + thumbnails; any photo opens a
 * full-screen viewer with previous/next buttons and arrow-key navigation.
 */
export function PhotoGallery({ photos, title }: { photos: StaticImageData[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const count = photos.length;
  const go = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + count) % count)), [count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  if (!count) return null;
  const thumbs = photos.slice(1, 5);
  const alt = (i: number) => `${title} — photo ${i + 1} of ${count}`;

  return (
    <>
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.6fr_1fr]">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="group relative overflow-hidden rounded-[28px] border-4 border-white shadow-[0_30px_70px_-45px_rgb(24_103_109/0.6)]"
          aria-label={`Open photo 1 of ${count}`}
        >
          <Image
            src={photos[0]}
            alt={alt(0)}
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 700px, 100vw"
            className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </button>
        {thumbs.length ? (
          <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-2">
            {thumbs.map((p, i) => {
              const last = i === thumbs.length - 1 && count > 5;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i + 1)}
                  className="group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_20px_40px_-30px_rgb(24_103_109/0.6)] lg:rounded-[22px]"
                  aria-label={last ? `View all ${count} photos` : `Open photo ${i + 2} of ${count}`}
                >
                  <Image
                    src={p}
                    alt={alt(i + 1)}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 230px, 25vw"
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {last ? (
                    <span className="absolute inset-0 grid place-items-center bg-teal/70 font-body text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white">
                      +{count - 5} photos
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm" />
          <DialogPrimitive.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none sm:p-10"
          >
            <DialogPrimitive.Title className="sr-only">{title} photos</DialogPrimitive.Title>
            {index !== null ? (
              <figure className="relative w-full max-w-[1200px]">
                <Image
                  src={photos[index]}
                  alt={alt(index)}
                  sizes="100vw"
                  className="mx-auto max-h-[78svh] w-auto rounded-2xl object-contain"
                />
                <figcaption className="mt-3 text-center font-body text-[0.9rem] text-white">
                  {index + 1} / {count}
                </figcaption>
              </figure>
            ) : null}
            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-teal shadow-lg hover:bg-foam sm:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-teal shadow-lg hover:bg-foam sm:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
            <DialogPrimitive.Close
              aria-label="Close photos"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-teal shadow-lg hover:bg-foam"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
