import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

// Small reusable section header (eyebrow + rule).
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        {children}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Enter your stats",
    body: "Add your sex, age, height, weight, and how active you are. It takes about thirty seconds.",
  },
  {
    n: "02",
    title: "Pick your goal",
    body: "Choose to lose fat, maintain, or build muscle — and set the pace that fits your life.",
  },
  {
    n: "03",
    title: "Get your numbers",
    body: "See your calories and a protein, carb, and fat target you can start using today.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <SectionLabel>How it works</SectionLabel>
      <h2 className="mb-10 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
        Three steps to your daily targets
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="rounded-3xl border border-line bg-paper p-6">
            <span className="font-mono text-sm font-bold text-lime-deep">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-xl font-bold text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const AUDIENCE = [
  {
    title: "Total beginners",
    body: "Never counted a macro in your life? Start here. The calculator does the math and the guides explain the why.",
  },
  {
    title: "People losing fat",
    body: "Get a sensible calorie deficit with protein set high enough to protect your muscle while you lean out.",
  },
  {
    title: "Lifters building muscle",
    body: "Dial in a lean surplus and a protein target that supports growth without unnecessary fat gain.",
  },
  {
    title: "Anyone maintaining",
    body: "Want to hold your weight and just eat better? Find your maintenance calories and a balanced split.",
  },
];

export function WhoFor() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <SectionLabel>Who it&apos;s for</SectionLabel>
        <h2 className="mb-10 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
          Built for wherever you&apos;re starting
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {AUDIENCE.map((a) => (
            <div key={a.title} className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime-deep" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularGuides() {
  return (
    <section id="guides" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <SectionLabel>Popular fitness guides</SectionLabel>
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
          Learn the basics, skip the bro-science
        </h2>
        <Link
          href="/guides"
          className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft hover:text-ink sm:block"
        >
          View all →
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            href={`/${a.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-ink"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime-deep">
              {a.category}
            </span>
            <h3 className="mt-2 font-display text-base font-bold leading-tight text-ink">
              {a.heading}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
              {a.description}
            </p>
            <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft group-hover:text-ink">
              Read →
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 sm:hidden">
        <Link
          href="/guides"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft hover:text-ink"
        >
          View all guides →
        </Link>
      </div>
    </section>
  );
}

const COMING = [
  "TDEE Calculator",
  "Calorie Calculator",
  "Protein Intake Calculator",
  "BMI Calculator",
  "One-Rep Max Calculator",
  "Body Fat Estimator",
];

export function ComingSoon() {
  return (
    <section className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <SectionLabel>More calculators coming soon</SectionLabel>
        <h2 className="mb-3 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-4xl">
          We&apos;re just getting started
        </h2>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-ink-soft">
          The macro calculator is the first of several free tools. Here&apos;s
          what we&apos;re building next.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COMING.map((c) => (
            <div
              key={c}
              className="flex items-center justify-between rounded-xl border border-dashed border-line bg-paper px-5 py-4"
            >
              <span className="font-display text-sm font-bold text-ink">
                {c}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/60">
                Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
