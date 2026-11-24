"use client";

import type { StaticImageData } from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { Picture } from "./Picture";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/** True when the visitor prefers reduced motion or is on a slow / data-saver connection. */
function shouldSkipVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return !!conn && (conn.saveData === true || /(^|-)(2g|3g)$/.test(conn.effectiveType ?? ""));
}

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Decorative full-bleed background video (muted, looping, inline).
 * The poster image always renders — it is what reduced-motion and
 * slow-connection visitors see — and the video fades in over it once playing.
 * With `lazy`, the video is only mounted when the section nears the viewport.
 */
export function BackgroundVideo({
  poster,
  mp4,
  webm,
  priority,
  lazy,
}: {
  poster: StaticImageData;
  mp4: string;
  webm?: string;
  priority?: boolean;
  lazy?: boolean;
}) {
  // Server render (and first paint) shows only the poster; the video is opt-in on the client.
  const allowed = useSyncExternalStore(subscribe, () => !shouldSkipVideo(), () => false);
  const [near, setNear] = useState(!lazy);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (near || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [near]);

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      <Picture src={poster} alt="" className="h-full w-full" priority={priority} />
      {allowed && near ? (
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
          poster={poster.src}
          onPlaying={() => setPlaying(true)}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          <source src={mp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
