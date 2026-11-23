"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => v.replace(/\D/g, "").length >= 10;

type Contact = { name: string; phone: string; email: string };
export type Errors = Partial<Record<string, string>>;

/** Standard contact-field validation shared by every lead form. */
export function validateContact(v: Contact, extra: Errors = {}): Errors {
  const e: Errors = { ...extra };
  if (!v.name.trim()) e.name = "Please share your name.";
  if (!isPhone(v.phone)) e.phone = "Please add a phone number with 10 digits.";
  if (!isEmail(v.email)) e.email = "Please add a valid email address.";
  return e;
}

/**
 * Form state + validation. Phase 1 is a front-end mockup with no backend, so a
 * valid submission does not send anything — it surfaces `submitted` so the UI
 * can say so plainly instead of pretending the message was delivered.
 */
export function useLeadForm<T extends Contact>(initial: T, extraValidation?: (v: T) => Errors) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const bind =
    (key: keyof T) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateContact(values, extraValidation?.(values));
    setErrors(errs);
    setSubmitted(Object.keys(errs).length === 0);
  };

  const reset = () => {
    setErrors({});
    setSubmitted(false);
  };

  return { values, setValues, errors, submitted, bind, onSubmit, reset };
}
