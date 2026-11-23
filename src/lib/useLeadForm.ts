"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { validateContact, type FieldErrors } from "./leads";

type Contact = { name: string; phone: string; email: string };
export type LeadStatus = "idle" | "sending" | "sent" | "error";

/**
 * Form state, validation and submission to /api/leads.
 * Every non-contact field is forwarded as `details`.
 */
export function useLeadForm<T extends Contact>(
  source: string,
  initial: T,
  extraValidation?: (v: T) => FieldErrors,
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<LeadStatus>("idle");

  const bind =
    (key: keyof T) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      // Clear a field's error as soon as the visitor edits it.
      setErrors((er) => (er[key as string] ? { ...er, [key as string]: undefined } : er));
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = { ...validateContact(values), ...extraValidation?.(values) };
    const has = Object.values(errs).some(Boolean);
    setErrors(errs);
    if (has) {
      // Focus the first invalid field in on-screen order (inputs carry name = field key).
      const first = Array.from(e.currentTarget.elements).find(
        (el): el is HTMLElement => el instanceof HTMLElement && !!errs[(el as HTMLInputElement).name],
      );
      first?.focus();
      return;
    }
    const { name, phone, email, ...rest } = values;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          phone,
          email,
          details: Object.fromEntries(Object.entries(rest).map(([k, v]) => [k, String(v ?? "")])),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = (nextInitial: T = initial) => {
    setValues(nextInitial);
    setErrors({});
    setStatus("idle");
  };

  return { values, setValues, errors, status, bind, onSubmit, reset };
}
