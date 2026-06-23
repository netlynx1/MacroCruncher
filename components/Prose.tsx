import React from "react";
import Link from "next/link";

// Shared typographic building blocks for article bodies. Keeping these
// here means every guide has identical spacing, color, and rhythm.

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 font-display text-lg font-bold text-ink">{children}</h3>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-deep" />
      <span>{children}</span>
    </li>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

// Inline link to the calculator, used throughout articles.
export function CalcLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/#calculator"
      className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-2 hover:decoration-ink"
    >
      {children}
    </Link>
  );
}

// A pull-out example box for worked examples.
export function Example({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper-2 p-5">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime-deep">
        {title}
      </span>
      <div className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">
        {children}
      </div>
    </div>
  );
}

// Small inline disclaimer used at the end of articles.
export function MiniDisclaimer() {
  return (
    <div className="mt-10 rounded-2xl border border-line bg-paper p-5">
      <p className="text-sm leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">A quick note:</span> this guide
        is educational and not medical advice. Calorie and macro figures are
        estimates. Talk to your doctor or a registered dietitian before making
        big changes to your diet, training, or health routine. See our{" "}
        <Link
          href="/disclaimer"
          className="underline decoration-lime-deep underline-offset-2"
        >
          full disclaimer
        </Link>
        .
      </p>
    </div>
  );
}

// Strong call-to-action block pointing back to the calculator.
export function CalcCTA() {
  return (
    <div className="mt-10 rounded-3xl border-2 border-ink bg-ink p-6 text-paper sm:p-8">
      <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-lime sm:text-2xl">
        Get your own numbers
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-paper/70">
        Skip the math. Enter your stats and goal, and the free calculator gives
        you calories, protein, carbs, and fat in seconds.
      </p>
      <Link
        href="/#calculator"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-lime px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:translate-x-0.5"
      >
        Open the calculator →
      </Link>
    </div>
  );
}
