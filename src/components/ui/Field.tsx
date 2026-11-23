import type { ReactNode } from "react";

/** Labelled form field; the error is linked to the control via `errorProps`. */
export function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase text-navy/80"
        style={{ letterSpacing: "0.16em" }}
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-teal">
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-1.5 font-body text-[0.8rem] font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** a11y attributes for a control whose Field may show an error. */
export function errorProps(id: string, error?: string, required?: boolean) {
  return {
    id,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    "aria-required": required || undefined,
  };
}

export function SelectOptions({ options, placeholder }: { options: string[]; placeholder?: string }) {
  return (
    <>
      {placeholder ? (
        <option value="" disabled>
          {placeholder}
        </option>
      ) : null}
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </>
  );
}
