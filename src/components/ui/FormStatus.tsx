import { AGENT } from "@/lib/content";
import type { LeadStatus } from "@/lib/useLeadForm";
import { cn } from "@/lib/cn";

/** Error message for a failed submission (announced to screen readers). */
export function FormError({ status, className }: { status: LeadStatus; className?: string }) {
  if (status !== "error") return null;
  return (
    <p role="alert" className={cn("rounded-2xl bg-destructive/10 px-4 py-3 text-[0.9rem] leading-relaxed text-destructive", className)}>
      I&apos;m sorry — that didn&apos;t go through. Please try again, or call me directly at{" "}
      <a href={AGENT.phoneHref} className="font-semibold underline underline-offset-2">
        {AGENT.phone}
      </a>
      .
    </p>
  );
}

/** Success panel shown in place of a form once the lead is delivered. */
export function ThankYou({ name, children }: { name: string; children?: React.ReactNode }) {
  const first = name.trim().split(/\s+/)[0];
  return (
    <div role="status" className="py-6 text-center">
      <p className="font-script text-[1.3rem] text-teal">Home Sweet Agent</p>
      <h3 className="mt-3 font-heading text-[clamp(1.6rem,4vw,2.1rem)] leading-tight text-navy">Thank you, {first}!</h3>
      <p className="mx-auto mt-3 max-w-[380px] text-[0.98rem] leading-relaxed text-ink/80">
        I&apos;ve got your note and I&apos;ll be in touch personally — usually the same day.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>
    </div>
  );
}
