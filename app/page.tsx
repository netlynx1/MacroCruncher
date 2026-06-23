import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import Educational from "@/components/Educational";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import {
  HowItWorks,
  WhoFor,
  PopularGuides,
  ComingSoon,
} from "@/components/HomeSections";
import { FAQS } from "@/lib/faqs";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, absoluteUrl } from "@/lib/site";

// WebSite schema for the homepage
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/guides?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// FAQPage schema mirrors the visible FAQ section
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Macro Calculator",
  url: absoluteUrl("/#calculator"),
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={webAppSchema} />
      <Navbar />

      <main className="paper-grain">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 pb-10 pt-12 sm:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full border border-ink/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Free · No sign-up
              </span>
              <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-tight text-ink sm:text-7xl">
                Free Macro
                <br />
                Calculator
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
                Calculate your daily calories, protein, carbs, and fats — built
                from your body stats, activity level, and the goal you&apos;re
                chasing.
              </p>
              <a
                href="#calculator"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-4 font-display text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--color-lime)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-lime)]"
              >
                Get my numbers
              </a>
            </div>

            {/* Hero scoreboard panel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-ink bg-ink p-7 text-paper">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                  A sample plate
                </span>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { l: "Protein", v: "175", c: "text-clay" },
                    { l: "Carbs", v: "210", c: "text-lime" },
                    { l: "Fat", v: "62", c: "text-paper" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div
                        className={`font-display text-3xl font-black leading-none ${s.c}`}
                      >
                        {s.v}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-paper/50">
                        {s.l} g
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-paper/15 pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
                      Daily total
                    </span>
                    <span className="font-display text-2xl font-black text-lime">
                      2,360 <span className="text-sm text-paper/50">kcal</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="mx-auto max-w-2xl px-5 py-10 sm:py-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Your stats
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <Calculator />
        </section>

        <HowItWorks />
        <WhoFor />
        <Educational />
        <PopularGuides />
        <ComingSoon />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
