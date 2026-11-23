import { AGENT } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Shown after a valid submit: Phase 1 forms are not wired to a backend yet. */
export function PreviewNotice({ className }: { className?: string }) {
  return (
    <p role="status" className={cn("text-[0.85rem] leading-relaxed text-marsh", className)}>
      Thank you! Online requests are being connected in the next phase of the site — for now, please call Cindy at{" "}
      <a href={AGENT.phoneHref} className="font-semibold underline underline-offset-2">
        {AGENT.phone}
      </a>
      .
    </p>
  );
}
