/** Shared lead types + validation, used by both the forms and the /api/leads route. */

export type LeadPayload = {
  /** Which form sent it, e.g. "Home value request". */
  source: string;
  name: string;
  phone: string;
  email: string;
  /** Any additional form fields (address, timeline, …). */
  details?: Record<string, string>;
};

export type FieldErrors = Partial<Record<string, string>>;

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
/** US numbers: 10 digits, optionally with a leading 1. */
export const isPhone = (v: string) => {
  const d = v.replace(/\D/g, "");
  return d.length === 10 || (d.length === 11 && d.startsWith("1"));
};

export function validateContact(v: { name: string; phone: string; email: string }): FieldErrors {
  const e: FieldErrors = {};
  if (!v.name.trim()) e.name = "Please share your name.";
  if (!v.phone.trim()) e.phone = "Please add your phone number.";
  else if (!isPhone(v.phone)) e.phone = "Please enter a 10-digit phone number, e.g. (912) 555-0123.";
  if (!v.email.trim()) e.email = "Please add your email address.";
  else if (!isEmail(v.email)) e.email = "Please enter a valid email address, e.g. you@example.com.";
  return e;
}
