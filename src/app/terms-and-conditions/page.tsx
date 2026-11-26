import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { LEGAL_HTML, LEGAL_LAST_UPDATED } from "@/data/legal/privacy-policy";
import { AGENT } from "@/lib/content";
import styles from "./legal.module.css";

const description = "Privacy Policy and Terms of Use for the Cindy Baird, REALTOR® website.";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use",
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title: "Privacy Policy & Terms of Use | Cindy Baird", description, url: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title={[{ t: "Privacy Policy & " }, { t: "Terms of Use.", italic: true }]}
        intro={<p>Last updated: {LEGAL_LAST_UPDATED}</p>}
      />
      <section className="bg-salt pb-20 sm:pb-24 lg:pb-28">
        <div className="shell">
          <article className="card mx-auto max-w-[880px] p-6 sm:p-10 lg:p-12">
            {/* Verbatim policy text from the client's existing site (static, allow-listed HTML). */}
            <div className={styles.doc} dangerouslySetInnerHTML={{ __html: LEGAL_HTML }} />

            <h2 className="mt-12 font-heading text-[1.75rem] leading-tight text-teal">Contact details</h2>
            <address className="mt-4 not-italic leading-relaxed text-ink">
              {AGENT.name}
              <br />
              Phone:{" "}
              <a href={AGENT.phoneHref} className="font-semibold text-teal underline underline-offset-2">
                {AGENT.phone}
              </a>{" "}
              (mobile) ·{" "}
              <a href={AGENT.officePhoneHref} className="font-semibold text-teal underline underline-offset-2">
                {AGENT.officePhone}
              </a>{" "}
              (office)
              <br />
              Email:{" "}
              <a href={`mailto:${AGENT.email}`} className="font-semibold text-teal underline underline-offset-2">
                {AGENT.email}
              </a>
              <br />
              {AGENT.address}
            </address>
          </article>
        </div>
      </section>
    </>
  );
}
