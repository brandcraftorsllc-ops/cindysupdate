import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Labelled form field with optional inline error. */
export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-body text-[0.66rem] font-semibold uppercase text-marsh/65"
        style={{ letterSpacing: "0.2em" }}
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 font-body text-[0.78rem] text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectOptions({ options }: { options: string[] }) {
  return (
    <>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </>
  );
}
