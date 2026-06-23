// Shared FAQ content. Used by the visual FAQ accordion and by the
// FAQPage JSON-LD on the homepage so the two never drift apart.

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "How accurate is this macro calculator?",
    a: "It uses the Mifflin-St Jeor equation, one of the most reliable formulas for estimating energy needs. Treat the numbers as a smart starting point, not gospel — your real maintenance depends on factors a formula can't see, like NEAT, sleep, and stress. Track your weight for two to three weeks and adjust from there.",
  },
  {
    q: "Should I eat the same macros every day?",
    a: "You don't have to. What matters most is hitting your weekly average. Eating slightly more on training days and less on rest days is fine, as long as protein stays high and your week balances out near your target.",
  },
  {
    q: "How often should I recalculate my macros?",
    a: "Recalculate when your weight changes by about 8–10 lbs, when your activity level shifts meaningfully, or roughly every 4–6 weeks during an active cut or bulk. Progress changes your numbers, so your targets should move with you.",
  },
  {
    q: "Is this good for losing fat?",
    a: "Yes. Pick the 'Lose weight' goal and a pace that fits your life. The calculator builds a calorie deficit while keeping protein high, which helps you hold onto muscle while the fat comes off.",
  },
  {
    q: "Is this good for building muscle?",
    a: "Yes. Choose 'Build muscle' for a modest surplus that fuels training without excessive fat gain. Pair it with progressive resistance training and enough protein, and lean mass follows.",
  },
];
