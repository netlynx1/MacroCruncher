import React from "react";

// Shared field label + error wrapper
export function Field({
  label,
  htmlFor,
  error,
  children,
  hint,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="font-mono text-[11px] text-clay">{error}</p>
      ) : hint ? (
        <p className="font-mono text-[11px] text-ink-soft/70">{hint}</p>
      ) : null}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border bg-paper px-4 py-3 text-ink font-medium " +
  "placeholder:text-ink-soft/40 transition-colors focus:outline-none " +
  "focus:border-ink focus:ring-0";

export function TextInput({
  error,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  return (
    <input
      {...props}
      className={`${inputBase} ${
        error ? "border-clay" : "border-line"
      } ${className}`}
    />
  );
}

// Segmented control — used for sex, goal, etc. Reads like a set of chips.
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: { value: T; label: string; sub?: string }[];
  value: T;
  onChange: (v: T) => void;
  columns?: number;
}) {
  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}
      role="radiogroup"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={`rounded-xl border px-3 py-2.5 text-left transition-all ${
              active
                ? "border-ink bg-ink text-paper shadow-[3px_3px_0_0_var(--color-lime)]"
                : "border-line bg-paper text-ink hover:border-ink/40"
            }`}
          >
            <span className="block text-sm font-semibold leading-tight">
              {opt.label}
            </span>
            {opt.sub && (
              <span
                className={`mt-0.5 block font-mono text-[10px] uppercase tracking-wider ${
                  active ? "text-paper/60" : "text-ink-soft/60"
                }`}
              >
                {opt.sub}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
