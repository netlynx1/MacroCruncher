import type { ComponentType } from "react";

// Static map of slug -> body component. Keeping it explicit (rather than
// dynamic import by string) means everything is type-checked and bundled
// correctly at build time.
import HowToCalculate from "./how-to-calculate-macros";
import WeightLoss from "./macros-for-weight-loss";
import MuscleGain from "./macros-for-muscle-gain";
import Protein from "./how-much-protein-per-day";
import Deficit from "./calorie-deficit-explained";
import TdeeBmr from "./tdee-vs-bmr";
import Cutting from "./best-macros-for-cutting";
import Bulking from "./best-macros-for-bulking";

export const ARTICLE_BODIES: Record<string, ComponentType> = {
  "how-to-calculate-macros": HowToCalculate,
  "macros-for-weight-loss": WeightLoss,
  "macros-for-muscle-gain": MuscleGain,
  "how-much-protein-per-day": Protein,
  "calorie-deficit-explained": Deficit,
  "tdee-vs-bmr": TdeeBmr,
  "best-macros-for-cutting": Cutting,
  "best-macros-for-bulking": Bulking,
};
