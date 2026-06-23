"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-bold text-ink">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/30 font-mono text-sm transition-transform ${
            open ? "rotate-45 bg-ink text-paper" : "text-ink"
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <div className="mb-8 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          FAQ
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="mb-8 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
        Questions, answered
      </h2>
      <div>
        {FAQS.map((f) => (
          <Item key={f.q} {...f} />
        ))}
      </div>
    </section>
  );
}
