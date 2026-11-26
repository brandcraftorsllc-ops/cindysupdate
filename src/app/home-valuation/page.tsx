import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { HomeValue } from "@/components/sections/HomeValue";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { AnimatedHeading, Reveal } from "@/components/ui/Motion";

const description =
  "Discover what your Golden Isles home is worth with a personalized valuation from Cindy Baird, REALTOR®. Learn how home valuations, comparative market analyses and appraisals work.";

export const metadata: Metadata = {
  title: "Home Valuation",
  description,
  alternates: { canonical: "/home-valuation" },
  openGraph: { title: "Personalized Georgia Home Valuation | Cindy Baird", description, url: "/home-valuation" },
};

/* Content from cindybairdrealtor.com/home-valuation. */

const BASICS = [
  {
    title: "What is a home valuation?",
    text: "A home valuation determines the current market value of a residential property. It is crucial for real estate transactions, preventing excessive borrowing and financial losses. When getting a mortgage, the home acts as collateral. If the borrower defaults, the lender may sell the property to recover funds. A thorough home valuation safeguards the lender's ability to recover costs if the mortgage is not fully repaid.",
  },
  {
    title: "How is the valuation of my home calculated?",
    text: "The value of your home is calculated using a combination of factors including its location, age, size, condition, any improvements or renovations made, and recent sale prices of comparable homes in the neighborhood. It also factors in current market trends and local market conditions, and can be influenced by data such as inventory trends, interest rates, and current buyer sentiment.",
  },
  {
    title: "How accurate is an online home valuation?",
    text: "Online home valuations provide a good starting point and offer a general estimate of your property's worth. However, they may not factor in recent renovations, unique features, historical value, architectural significance, and subjective market perception that could impact your home's actual market value. For the most accurate assessment, consider scheduling an in-person appraisal.",
  },
];

const METHODS = [
  {
    label: "Market analysis",
    title: "Comparative Market Analysis",
    text: "A Comparative Market Analysis (CMA) is a tool used by real estate agents to value a home. It evaluates similar homes that have recently sold in the same area. Agents find comparable sales and use them to conduct a sales comparison. In most cases, an agent will find three homes that have recently sold and are as similar to and located as close to the home being valued as possible. Each one is then analyzed to pinpoint differences between it and the home being valued. Once these differences are priced out, the price of each comp is adjusted to see what it would cost if it was identical to the home being valued were it to be sold in the current market.",
  },
  {
    label: "Based on a professional's opinion",
    title: "Appraisals",
    text: "An appraisal is an unbiased valuation of a home based on a professional's opinion. They are usually what mortgage companies use for home purchases and refinances. A lender usually orders a home appraisal and the cost of the appraisal, sometimes up to $500, is paid by the homeowner. An appraiser does a complete visual inspection of the interior and exterior of the home as well as taking into consideration recent sales of similar properties and market trends. The appraiser then compiles a detailed report on the home, including an exterior building sketch, a street map showing the home and any comparable sales, photos of the home and street, an explanation of how the square footage was calculated, and any other relevant information.",
  },
];

const REASONS = [
  {
    title: "Refinancing",
    text: "Lenders base the amount of their loans on the value of your property and usually allow you to borrow a maximum of 75% to 96.5% against your property. Knowing what your home is worth allows lenders to calculate your equity in the home. The more equity you have, the better terms you will receive on your refinance.",
  },
  {
    title: "Home improvements",
    text: "If you're doing home improvement projects to increase the resale value, you want to make sure you're not pricing it out of the market. If your home is already priced on the high-end for your neighborhood, making too many improvements could make it more difficult to sell. When you get a valuation, you can see how your home compares with others in the neighborhood and let this guide your home improvement decisions.",
  },
  {
    title: "Qualifying for credit",
    text: "If you want to borrow cash against your home, getting a Home Equity Line of Credit (HELOC) could be a good option. To qualify, you must have a certain level of equity in your home. Most lenders require at least 20%. Getting a home valuation will help you determine if you qualify and will be used by the lender to make a decision on your loan.",
  },
  {
    title: "Planning",
    text: "Though it's not a necessity, simply knowing the value of your home is good information to have. It will help you plan for the future and deal with unforeseen circumstances when you might be in a position that requires extra money or a quick relocation. Knowing how much equity you have in your home and how much you may be able to borrow against it or sell it for will help you respond to any financial curveballs that life throws at you.",
  },
];

export default function HomeValuationPage() {
  return (
    <>
      <PageHero
        eyebrow="Home valuation"
        title={[{ t: "How much is your " }, { t: "home worth?", italic: true }]}
        intro={
          <p>
            Home valuations give you valuable knowledge that can help you plan for the future and make smart decisions.
            It&apos;s good practice to stay informed about how much equity you have in your home and how much you may be able
            to borrow against it or sell it for. For the most precise valuation, reach out to discuss a customized
            Comparative Market Analysis or an appraisal.
          </p>
        }
      >
        <ArrowButton href="#home-value" variant="primary">
          Get a Free Home Valuation
        </ArrowButton>
        <ArrowButton href="/contact" variant="light">
          Talk to Cindy
        </ArrowButton>
      </PageHero>

      <section aria-label="Home valuation basics" className="sec bg-salt">
        <div className="shell">
          <p className="eyebrow text-teal">What&apos;s your property worth?</p>
          <AnimatedHeading
            as="h2"
            className="mt-4 max-w-[640px] font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal"
            parts={[{ t: "Understanding your " }, { t: "home's value.", italic: true }]}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {BASICS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="h-full">
                <article className="card h-full p-6 sm:p-7">
                  <h3 className="font-heading text-[1.45rem] leading-snug text-teal">{b.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="How a valuation is performed" className="sec bg-foam">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-teal">How is a valuation performed?</p>
              <AnimatedHeading
                as="h2"
                className="mt-4 max-w-[640px] font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal"
                parts={[{ t: "Two accurate ways to " }, { t: "value a home.", italic: true }]}
              />
            </div>
            <ArrowButton href="/#search" variant="light">
              Start Your Property Search
            </ArrowButton>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {METHODS.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08} className="h-full">
                <article className="card h-full p-6 sm:p-9">
                  <p className="eyebrow text-teal">{m.label}</p>
                  <h3 className="mt-3 font-heading text-[1.7rem] leading-snug text-teal">{m.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Why a valuation is important" className="sec bg-salt">
        <div className="shell">
          <p className="eyebrow text-teal">Why is a valuation important?</p>
          <AnimatedHeading
            as="h2"
            className="mt-4 max-w-[680px] font-heading text-[clamp(1.95rem,4vw,3rem)] leading-[1.1] text-teal"
            parts={[{ t: "When a home valuation " }, { t: "may be necessary.", italic: true }]}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08} className="h-full">
                <article className="card h-full p-6 sm:p-7">
                  <h3 className="font-heading text-[1.45rem] leading-snug text-teal">{r.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The site's existing valuation form section (id="home-value"), reused unchanged. */}
      <HomeValue />
    </>
  );
}
