const TOPICS = [
  {
    n: "01",
    title: "What are macros?",
    body: "Macros — short for macronutrients — are the three nutrients that supply your calories: protein, carbohydrates, and fat. Protein rebuilds muscle, carbs fuel hard training, and fat keeps your hormones and joints running. Counting macros means hitting target amounts of each instead of only watching total calories.",
  },
  {
    n: "02",
    title: "How many calories do I need?",
    body: "Start with your maintenance number — the calories that keep your weight steady given your body and activity. To lose fat, eat below it. To build muscle, eat slightly above it. This calculator estimates maintenance from your stats, then adjusts based on the goal and pace you pick.",
  },
  {
    n: "03",
    title: "How much protein should I eat?",
    body: "A practical range is roughly 0.8 to 1.0 grams per pound of bodyweight. Lean toward the higher end when you're cutting, since protein protects muscle in a deficit and keeps you full. This tool sets your protein automatically based on your goal.",
  },
  {
    n: "04",
    title: "Weight loss or muscle gain?",
    body: "Both work with the same framework — only the calorie target changes. A deficit drives fat loss; a small surplus supports muscle growth. Trying to do both at once is hard for most people, so pick one focus, give it 8–12 weeks, then reassess.",
  },
];

export default function Educational() {
  return (
    <section id="learn" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            The basics
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <h2 className="mb-12 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
          Know the numbers before you chase them
        </h2>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {TOPICS.map((t) => (
            <article key={t.n} className="flex gap-5">
              <span className="font-mono text-sm font-bold text-lime-deep">
                {t.n}
              </span>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-ink">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
