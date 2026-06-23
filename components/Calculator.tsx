"use client";

import { useRef, useState } from "react";
import {
  calculateMacros,
  validate,
  type Activity,
  type Goal,
  type Pace,
  type Sex,
  type MacroResult,
} from "@/lib/calculator";
import { Field, TextInput, Segmented } from "./FormControls";
import Results from "./Results";

interface FormState {
  sex: Sex;
  age: string;
  heightFeet: string;
  heightInches: string;
  weightLbs: string;
  activity: Activity;
  goal: Goal;
  pace: Pace;
}

const INITIAL: FormState = {
  sex: "male",
  age: "",
  heightFeet: "",
  heightInches: "",
  weightLbs: "",
  activity: "moderately",
  goal: "maintain",
  pace: "moderate",
};

const ACTIVITY_OPTS: { value: Activity; label: string; sub: string }[] = [
  { value: "sedentary", label: "Sedentary", sub: "Desk job, little exercise" },
  { value: "lightly", label: "Lightly active", sub: "1–3 days / week" },
  { value: "moderately", label: "Moderately active", sub: "3–5 days / week" },
  { value: "very", label: "Very active", sub: "6–7 days / week" },
  { value: "athlete", label: "Athlete", sub: "Training twice a day" },
];

export default function Calculator() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<MacroResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate({
      age: form.age,
      heightFeet: form.heightFeet,
      heightInches: form.heightInches,
      weightLbs: form.weightLbs,
    });
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setResult(null);
      return;
    }
    const res = calculateMacros({
      sex: form.sex,
      age: Number(form.age),
      heightFeet: Number(form.heightFeet),
      heightInches: Number(form.heightInches),
      weightLbs: Number(form.weightLbs),
      activity: form.activity,
      goal: form.goal,
      pace: form.pace,
    });
    setResult(res);
    // Scroll to results on the next paint
    requestAnimationFrame(() =>
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  const handleReset = () => {
    setForm(INITIAL);
    setErrors({});
    setResult(null);
  };

  const showPace = form.goal !== "maintain";

  return (
    <section id="calculator" className="scroll-mt-6">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-3xl border border-line bg-paper p-5 shadow-[0_1px_0_0_var(--color-line)] sm:p-8"
      >
        <div className="space-y-6">
          {/* Sex */}
          <Field label="Sex">
            <Segmented<Sex>
              value={form.sex}
              onChange={(v) => set("sex", v)}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          </Field>

          {/* Age + Weight */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Age" htmlFor="age" error={errors.age}>
              <TextInput
                id="age"
                type="number"
                inputMode="numeric"
                placeholder="e.g. 28"
                value={form.age}
                error={!!errors.age}
                onChange={(e) => set("age", e.target.value)}
              />
            </Field>
            <Field
              label="Weight (lbs)"
              htmlFor="weight"
              error={errors.weightLbs}
            >
              <TextInput
                id="weight"
                type="number"
                inputMode="decimal"
                placeholder="e.g. 175"
                value={form.weightLbs}
                error={!!errors.weightLbs}
                onChange={(e) => set("weightLbs", e.target.value)}
              />
            </Field>
          </div>

          {/* Height */}
          <Field
            label="Height"
            error={errors.heightFeet || errors.heightInches}
            hint="Feet and inches"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <TextInput
                  aria-label="Height feet"
                  type="number"
                  inputMode="numeric"
                  placeholder="5"
                  value={form.heightFeet}
                  error={!!errors.heightFeet}
                  onChange={(e) => set("heightFeet", e.target.value)}
                  className="pr-10"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-ink-soft">
                  ft
                </span>
              </div>
              <div className="relative">
                <TextInput
                  aria-label="Height inches"
                  type="number"
                  inputMode="numeric"
                  placeholder="10"
                  value={form.heightInches}
                  error={!!errors.heightInches}
                  onChange={(e) => set("heightInches", e.target.value)}
                  className="pr-10"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-ink-soft">
                  in
                </span>
              </div>
            </div>
          </Field>

          {/* Activity */}
          <Field label="Activity level">
            <Segmented<Activity>
              value={form.activity}
              onChange={(v) => set("activity", v)}
              options={ACTIVITY_OPTS}
              columns={1}
            />
          </Field>

          {/* Goal */}
          <Field label="Goal">
            <Segmented<Goal>
              value={form.goal}
              onChange={(v) => set("goal", v)}
              columns={3}
              options={[
                { value: "lose", label: "Lose weight" },
                { value: "maintain", label: "Maintain" },
                { value: "build", label: "Build muscle" },
              ]}
            />
          </Field>

          {/* Pace (conditional) */}
          {showPace && (
            <Field label="Pace" hint="How fast you want to move">
              <Segmented<Pace>
                value={form.pace}
                onChange={(v) => set("pace", v)}
                columns={3}
                options={[
                  { value: "conservative", label: "Conservative" },
                  { value: "moderate", label: "Moderate" },
                  { value: "aggressive", label: "Aggressive" },
                ]}
              />
            </Field>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-ink px-6 py-3.5 font-display text-base font-bold uppercase tracking-wide text-paper shadow-[4px_4px_0_0_var(--color-lime)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-lime)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Calculate macros
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-xl border border-ink/20 px-6 py-3.5 font-display text-base font-bold uppercase tracking-wide text-ink transition-colors hover:bg-paper-2"
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      <div ref={resultsRef} className="scroll-mt-6">
        {result && <Results result={result} />}
      </div>
    </section>
  );
}
