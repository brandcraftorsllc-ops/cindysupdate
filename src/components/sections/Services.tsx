import { cn } from "@/lib/cn";
import { Building2, HardHat, HeartHandshake, KeyRound, ShieldCheck, Sparkles, Store } from "../ui/Icons";
import { AnimatedHeading, Reveal } from "../ui/Motion";

const SERVICES = [
  { icon: KeyRound, title: "First-Time Buyers", line: "Clear steps, no pressure." },
  { icon: HeartHandshake, title: "Downsizing & Senior Communities", line: "A simpler, lovely next chapter." },
  { icon: ShieldCheck, title: "Veterans", line: "Guidance on veterans' home programs." },
  { icon: Sparkles, title: "Luxury Homes", line: "Island estates and waterfront living." },
  { icon: HardHat, title: "New Construction", line: "From lot to finished home." },
  { icon: Building2, title: "Condos, Land & Tiny Homes", line: "Every kind of island home." },
  { icon: Store, title: "Commercial & Restaurants", line: "Storefronts, restaurants and investment property." },
];

// Staggered vertical offsets that give the grid its loose, collage-like rhythm on desktop.
const OFFSETS = ["lg:mt-0", "lg:mt-12", "lg:mt-4", "lg:mt-16", "lg:mt-2", "lg:mt-10", "lg:mt-6"];

export function Services() {
  return (
    <section id="help" className="sec scroll-mt-24 bg-oyster">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <AnimatedHeading
            as="h2"
            className="max-w-[560px] font-heading text-[clamp(1.95rem,4vw,3.1rem)] leading-[1.1] text-marsh"
            parts={[{ t: "Every move " }, { t: "matters.", italic: true }]}
          />
          <p className="max-w-[330px] text-[0.95rem] leading-relaxed text-driftwood/70">
            Different seasons call for different guidance. Tell me where you are, and I&apos;ll meet you there.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, line }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className={cn("h-full", OFFSETS[i])}>
              <div className="glass group flex h-full min-h-[172px] flex-col justify-between p-6 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-golden/40 bg-golden/15 text-marsh">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="mt-6">
                  <h3 className="font-heading text-[1.18rem] leading-snug text-marsh">{title}</h3>
                  <p className="mt-1.5 font-body text-[0.88rem] leading-snug text-driftwood/70">{line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
