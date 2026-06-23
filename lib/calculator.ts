// Pure calculation logic for the macro calculator.
// Kept free of React so it can be unit-tested and reused anywhere.

export type Sex = "male" | "female";
export type Activity =
  | "sedentary"
  | "lightly"
  | "moderately"
  | "very"
  | "athlete";
export type Goal = "lose" | "maintain" | "build";
export type Pace = "conservative" | "moderate" | "aggressive";

export interface MacroInput {
  sex: Sex;
  age: number;
  heightFeet: number;
  heightInches: number;
  weightLbs: number;
  activity: Activity;
  goal: Goal;
  pace: Pace;
}

export interface MacroResult {
  goal: Goal;
  maintenance: number; // TDEE, rounded
  goalCalories: number;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  proteinPct: number;
  carbsPct: number;
  fatPct: number;
}

export const ACTIVITY_FACTORS: Record<Activity, number> = {
  sedentary: 1.2,
  lightly: 1.375,
  moderately: 1.55,
  very: 1.725,
  athlete: 1.9,
};

// Calorie adjustment per goal + pace.
const GOAL_ADJUSTMENTS: Record<Goal, Record<Pace, number>> = {
  lose: { conservative: -250, moderate: -500, aggressive: -750 },
  maintain: { conservative: 0, moderate: 0, aggressive: 0 },
  build: { conservative: 150, moderate: 300, aggressive: 500 },
};

// Protein per lb of bodyweight, varies by goal.
const PROTEIN_PER_LB: Record<Goal, number> = {
  lose: 1.0,
  maintain: 0.8,
  build: 0.9,
};

const LBS_TO_KG = 0.45359237;
const INCH_TO_CM = 2.54;

export function calculateMacros(input: MacroInput): MacroResult {
  const { sex, age, heightFeet, heightInches, weightLbs, activity, goal, pace } =
    input;

  const weightKg = weightLbs * LBS_TO_KG;
  const heightCm = (heightFeet * 12 + heightInches) * INCH_TO_CM;

  // Mifflin-St Jeor BMR
  const baseBmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = sex === "male" ? baseBmr + 5 : baseBmr - 161;

  // Total daily energy expenditure (maintenance)
  const maintenance = bmr * ACTIVITY_FACTORS[activity];

  // Apply goal adjustment
  const goalCalories = maintenance + GOAL_ADJUSTMENTS[goal][pace];

  // Protein: grams per lb bodyweight
  const protein = PROTEIN_PER_LB[goal] * weightLbs;
  const proteinCals = protein * 4;

  // Fat: 25% of total goal calories
  const fatCals = goalCalories * 0.25;
  const fat = fatCals / 9;

  // Carbs: whatever calories remain
  const carbCals = Math.max(goalCalories - proteinCals - fatCals, 0);
  const carbs = carbCals / 4;

  const total = proteinCals + fatCals + carbCals || 1;

  return {
    goal,
    maintenance: Math.round(maintenance),
    goalCalories: Math.round(goalCalories),
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fat: Math.round(fat),
    proteinPct: Math.round((proteinCals / total) * 100),
    carbsPct: Math.round((carbCals / total) * 100),
    fatPct: Math.round((fatCals / total) * 100),
  };
}

// Validation -> returns a map of field -> message. Empty object means valid.
export function validate(
  input: Partial<Record<keyof MacroInput, string>>
): Record<string, string> {
  const errors: Record<string, string> = {};

  const age = Number(input.age);
  if (!input.age) errors.age = "Enter your age.";
  else if (!Number.isFinite(age) || age < 14 || age > 100)
    errors.age = "Age should be between 14 and 100.";

  const ft = Number(input.heightFeet);
  if (input.heightFeet === undefined || input.heightFeet === "")
    errors.heightFeet = "Enter feet.";
  else if (!Number.isFinite(ft) || ft < 3 || ft > 8)
    errors.heightFeet = "Feet should be 3–8.";

  const inch = Number(input.heightInches);
  if (input.heightInches === undefined || input.heightInches === "")
    errors.heightInches = "Enter inches.";
  else if (!Number.isFinite(inch) || inch < 0 || inch > 11)
    errors.heightInches = "Inches should be 0–11.";

  const w = Number(input.weightLbs);
  if (!input.weightLbs) errors.weightLbs = "Enter your weight.";
  else if (!Number.isFinite(w) || w < 60 || w > 700)
    errors.weightLbs = "Weight should be 60–700 lbs.";

  return errors;
}
