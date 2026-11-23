"use client";

import { useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { HERO_VIDEO, IMAGES } from "@/lib/content";
import { Picture } from "../../ui/Picture";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/** True when the visitor prefers reduced motion or is on a slow / data-saver connection. */
function shouldSkipVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return !!conn && (conn.saveData === true || /(^|-)(2g|3g)$/.test(conn.effectiveType ?? ""));
}

/**
 * Aerial St. Simons beach video from Cindy's current site. The poster image is
 * always rendered (and is what reduced-motion / slow-connection visitors see);
 * the video fades in over it once it can play.
 */
function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function HeroVideo() {
  // Server render (and first paint) shows only the poster; the video is opt-in on the client.
  const enabled = useSyncExternalStore(subscribe, () => !shouldSkipVideo(), () => false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Picture src={IMAGES.heroPoster} alt="" className="h-full w-full" priority />
      {enabled ? (
        <video
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMAGES.heroPoster.src}
          onPlaying={() => setPlaying(true)}
        >
          <source src={HERO_VIDEO.webm} type="video/webm" />
          <source src={HERO_VIDEO.mp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
