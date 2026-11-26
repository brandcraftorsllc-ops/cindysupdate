import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/page/ContactForm";
import { PageHero } from "@/components/page/PageHero";
import { Mail, MapPin, Phone } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Motion";
import { AGENT, AREAS_SERVED, IMAGES } from "@/lib/content";

const description =
  "Contact Cindy Baird, REALTOR® with Keller Williams Realty Golden Isles. Call (912) 996-3195, email cindybaird@kw.com, or send a message about buying or selling on St. Simons Island and the Golden Isles.";

export const metadata: Metadata = {
  title: "Contact Cindy",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Cindy Baird, REALTOR®", description, url: "/contact" },
};

const QUICK_LINKS = [
  { label: "Home Search", href: "/#search" },
  { label: "Home Valuation", href: "/home-valuation" },
  { label: "About Cindy", href: "/about" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's connect"
        title={[{ t: "I'd love to " }, { t: "hear from you.", italic: true }]}
        intro={
          <p>
            Whether you&apos;re buying, selling, or simply exploring the Golden Isles lifestyle, reach out any time — by
            phone, email, or the form below.
          </p>
        }
      />

      <section className="bg-salt pb-20 sm:pb-24 lg:pb-28">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <aside aria-label="Contact details" className="card h-full p-6 sm:p-9">
              <div className="flex items-center gap-4">
                <Image
                  src={IMAGES.cindyPortrait}
                  alt="Cindy Baird, REALTOR®"
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] rounded-full border-[3px] border-white object-cover shadow-md"
                />
                <div>
                  <p className="font-heading text-[1.5rem] leading-tight text-teal">{AGENT.name}</p>
                  <p className="text-[0.92rem] text-ink">Real Estate Agent · {AGENT.office}</p>
                </div>
              </div>

              <h2 className="eyebrow mt-8 text-teal">Get in touch</h2>
              <ul className="mt-4 space-y-4 text-[1rem]">
                <li>
                  <a href={AGENT.phoneHref} className="flex items-center gap-3 text-ink hover:text-teal">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seaglass text-teal">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal">Mobile</span>
                      {AGENT.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={AGENT.officePhoneHref} className="flex items-center gap-3 text-ink hover:text-teal">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seaglass text-teal">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal">Office</span>
                      {AGENT.officePhone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${AGENT.email}`} className="flex items-center gap-3 break-all text-ink hover:text-teal">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seaglass text-teal">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal">Email</span>
                      {AGENT.email}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-ink">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seaglass text-teal">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-teal">Office</span>
                    {AGENT.office}
                    <br />
                    {AGENT.street}
                    <br />
                    {AGENT.cityLine}
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-[0.88rem] text-ink/85">
                {AGENT.license} · Each office is independently owned and operated.
              </p>

              <h2 className="eyebrow mt-8 text-teal">Areas I serve</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink">{AREAS_SERVED.join(" · ")}</p>

              <nav aria-label="Helpful links" className="mt-8 flex flex-wrap gap-2">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="rounded-full border border-teal/20 bg-foam px-4 py-2 font-body text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-teal hover:border-teal hover:bg-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </aside>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
