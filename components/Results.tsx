"use client";

import { useState } from "react";
import type { MacroResult, Goal } from "@/lib/calculator";

const GOAL_COPY: Record<Goal, string> = {
  lose: "a calorie deficit to lose fat while protein stays high to protect muscle",
  maintain: "calories matched to your output to hold your current weight",
  build: "a modest surplus to fuel training and add lean muscle",
};

// A single macronutrient column in the split bar
function MacroBar({
  label,
  grams,
  pct,
  cals,
  color,
}: {
  label: string;
  grams: number;
  pct: number;
  cals: number;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          {label}
        </span>
        <span className="font-mono text-[11px] text-ink-soft/70">{cals} kcal</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-extrabold leading-none text-ink">
          {grams}
        </span>
        <span className="font-mono text-sm text-ink-soft">g</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-paper-2">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="font-mono text-[11px] text-ink-soft/70">{pct}% of plate</span>
    </div>
  );
}

export default function Results({ result }: { result: MacroResult; }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = [
      "MY DAILY TARGETS",
      `Maintenance: ${result.maintenance} kcal`,
      `Goal calories: ${result.goalCalories} kcal`,
      `Protein: ${result.protein} g`,
      `Carbs: ${result.carbs} g`,
      `Fat: ${result.fat} g`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const delta = result.goalCalories - result.maintenance;

  return (
    <div className="animate-in mt-8 space-y-4">
      {/* Headline number card */}
      <div className="grid gap-4 sm:grid-cols-5">
        <div className="rounded-3xl border border-line bg-paper-2 p-6 sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            Maintenance
          </span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-display text-5xl font-extrabold leading-none text-ink tabular-nums">
              {result.maintenance.toLocaleString()}
            </span>
            <span className="font-mono text-sm text-ink-soft">kcal</span>
          </div>
          <p className="mt-2 font-mono text-[11px] text-ink-soft/70">
            What holds your weight steady
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink p-6 text-paper sm:col-span-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime">
            Your daily goal
          </span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-6xl font-black leading-none text-lime tabular-nums">
              {result.goalCalories.toLocaleString()}
            </span>
            <span className="font-mono text-sm text-paper/60">kcal</span>
          </div>
          <p className="mt-2 font-mono text-[11px] text-paper/60">
            {delta === 0
              ? "Right at maintenance"
              : `${delta > 0 ? "+" : ""}${delta} kcal vs. maintenance`}
          </p>
        </div>
      </div>

      {/* Macro split */}
      <div className="rounded-3xl border border-line bg-paper-2 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
            Macro split
          </h3>
          <button
            onClick={handleCopy}
            className="rounded-lg border border-ink/20 bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {copied ? "Copied ✓" : "Copy results"}
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <MacroBar
            label="Protein"
            grams={result.protein}
            pct={result.proteinPct}
            cals={result.protein * 4}
            color="var(--color-clay)"
          />
          <MacroBar
            label="Carbs"
            grams={result.carbs}
            pct={result.carbsPct}
            cals={result.carbs * 4}
            color="var(--color-ink)"
          />
          <MacroBar
            label="Fat"
            grams={result.fat}
            pct={result.fatPct}
            cals={result.fat * 9}
            color="var(--color-lime-deep)"
          />
        </div>
      </div>

      {/* Explanation */}
      <div className="rounded-3xl border border-line bg-paper p-6">
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
          What this means
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Your goal sits at {GOAL_COPY[result.goal]}. Aim for{" "}
          <strong className="text-ink">{result.protein}g protein</strong>,{" "}
          <strong className="text-ink">{result.carbs}g carbs</strong>, and{" "}
          <strong className="text-ink">{result.fat}g fat</strong> across the day.
          Protein and carbs each carry 4 calories per gram; fat carries 9. Hit
          your protein first, fill the rest with carbs and fat in whatever ratio
          keeps you full and training hard, and check your weight trend over 2–3
          weeks before adjusting.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-paper-2 p-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              Maintenance calories
            </span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              The calories that keep your weight steady. Eat here and, on
              average, you neither gain nor lose.
            </p>
          </div>
          <div className="rounded-2xl bg-paper-2 p-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              Goal calories
            </span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              Your maintenance adjusted for your goal — a deficit to lose fat or
              a surplus to build muscle. This is your daily target.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer under results */}
      <div className="rounded-2xl border border-line bg-paper-2 p-5">
        <p className="text-xs leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">Estimates only.</span> These
          numbers are calculated from formulas and are a starting point, not
          medical or nutritional advice. Your real needs depend on factors a
          formula can&apos;t see. Consult a doctor or registered dietitian before
          making major changes to your diet, training, or health.
        </p>
      </div>
    </div>
  );
}
