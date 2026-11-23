import { ArrowUpDown, Building2, HeartHandshake, KeyRound, MapIcon, ShieldCheck, Sparkles, Store } from "../ui/Icons";
import { AnimatedHeading, Reveal } from "../ui/Motion";

/** Service categories — exactly these eight, in this order. */
const SERVICES = [
  {
    icon: Sparkles,
    title: "Luxury Homes",
    line: "Island estates and waterfront homes, presented and negotiated with the care they deserve.",
  },
  {
    icon: KeyRound,
    title: "Buying & Selling",
    line: "From the first showing to the closing table, I'm with you at every step.",
  },
  {
    icon: ArrowUpDown,
    title: "Upsizing & Downsizing",
    line: "More room for a growing family, or a simpler, lovely next chapter — I'll help you right-size.",
  },
  {
    icon: HeartHandshake,
    title: "Senior Communities",
    line: "I'll help you compare senior communities around the Golden Isles and never rush the decision.",
  },
  {
    icon: ShieldCheck,
    title: "Veterans",
    line: "I grew up in a military family — I'll guide you through VA loans and veterans' home programs.",
  },
  {
    icon: Building2,
    title: "Condos",
    line: "Lock-and-leave condos and townhomes near the village, the beach and the marsh.",
  },
  {
    icon: MapIcon,
    title: "Land",
    line: "Lots and acreage for building the home you've imagined — I drew out and built my own.",
  },
  {
    icon: Store,
    title: "Commercial Property",
    line: "Retail storefronts, restaurants and hospitality, office and investment properties.",
  },
];

export function Services() {
  return (
    <section id="services" className="sec scroll-mt-24 bg-salt">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-teal">How I can help</p>
            <AnimatedHeading
              as="h2"
              className="mt-4 max-w-[560px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-navy"
              parts={[{ t: "Every move " }, { t: "matters.", italic: true }]}
              accent="text-teal"
            />
          </div>
          <p className="max-w-[360px] text-[1rem] leading-relaxed text-ink/85">
            Different seasons call for different guidance. Tell me where you are, and I&apos;ll meet you there.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, line }, i) => (
            <li key={title} className="h-full">
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <div className="card group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_28px_60px_-36px_rgb(26_113_118/0.55)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-seaglass text-teal transition-colors duration-500 group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-[1.3rem] leading-snug text-navy">{title}</h3>
                  <p className="mt-2 font-body text-[0.94rem] leading-relaxed text-ink/90">{line}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
