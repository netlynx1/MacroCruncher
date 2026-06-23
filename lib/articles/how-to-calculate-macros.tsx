import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        Macros sound technical, but the idea is simple: your daily calories come
        from three nutrients — protein, carbohydrates, and fat — and
        &ldquo;calculating your macros&rdquo; just means deciding how many grams
        of each to eat. Get those targets right and almost everything else about
        your diet gets easier. Here is the whole process, one step at a time,
        with a real example you can follow along with.
      </P>

      <H2>Step 1: Estimate your maintenance calories</H2>
      <P>
        Everything starts with maintenance — the number of calories that keeps
        your weight steady. To find it, you first estimate your{" "}
        <Strong>basal metabolic rate (BMR)</Strong>, the energy your body burns
        at rest, then multiply by an activity factor to account for movement and
        exercise. The result is your <Strong>total daily energy expenditure</Strong>,
        or TDEE.
      </P>
      <P>
        The most widely used formula for BMR is Mifflin-St Jeor. You do not have
        to memorize it — our <CalcLink>macro calculator</CalcLink> runs it for
        you — but it helps to know what feeds into it: your weight, height, age,
        and sex. From there, an activity multiplier between 1.2 (desk job, little
        exercise) and 1.9 (training hard most days) turns BMR into your real
        daily burn.
      </P>

      <H2>Step 2: Adjust for your goal</H2>
      <P>
        Once you know maintenance, your goal decides which direction to nudge it:
      </P>
      <UL>
        <LI>
          <Strong>Fat loss:</Strong> eat below maintenance. A deficit of roughly
          250–750 calories per day is a sensible range for most people.
        </LI>
        <LI>
          <Strong>Maintenance:</Strong> eat right around your TDEE to hold steady.
        </LI>
        <LI>
          <Strong>Muscle gain:</Strong> eat slightly above maintenance — a
          surplus of about 150–500 calories supports growth without excess fat.
        </LI>
      </UL>

      <H2>Step 3: Set your protein</H2>
      <P>
        Protein comes first because it does the most work: it preserves muscle,
        keeps you full, and has the biggest impact on body composition. A
        practical target is roughly <Strong>0.8 to 1.0 grams per pound of
        bodyweight</Strong>, leaning higher when you are losing fat. Protein
        provides 4 calories per gram.
      </P>

      <H2>Step 4: Set your fat</H2>
      <P>
        Fat supports hormones, joints, and the absorption of certain vitamins, so
        it should never drop too low. A simple starting point is{" "}
        <Strong>about 25% of your total calories</Strong> from fat. Fat is the
        most calorie-dense nutrient at 9 calories per gram, which is why small
        changes here move your totals quickly.
      </P>

      <H2>Step 5: Fill the rest with carbs</H2>
      <P>
        Carbohydrates get whatever calories are left after protein and fat are
        set. They are your main training fuel, so most active people feel and
        perform best with carbs making up a healthy share of the plate. Like
        protein, carbs supply 4 calories per gram.
      </P>

      <Example title="Worked example">
        Say your TDEE is 2,400 calories and you want to lose fat, so you set a
        goal of 1,900 calories. At 170 lb you aim for about 170g protein (680
        calories). Fat at 25% of 1,900 is roughly 53g (475 calories). That
        leaves about 745 calories for carbs, or around 186g. Final targets:{" "}
        <Strong>170g protein, 186g carbs, 53g fat</Strong>.
      </Example>

      <H2>Step 6: Track, then adjust</H2>
      <P>
        Your first set of numbers is an educated starting point, not a verdict.
        Eat close to them for two to three weeks and watch the trend on the
        scale and in the mirror. If nothing is changing in the direction you
        want, adjust calories by 100–200 and reassess. Bodies are individual, and
        the formula cannot see your sleep, stress, or step count.
      </P>

      <H3>Common beginner mistakes</H3>
      <UL>
        <LI>Setting protein too low and feeling hungry all day.</LI>
        <LI>Cutting fat to almost zero, which often backfires on energy and mood.</LI>
        <LI>Changing the plan every few days instead of giving it time to work.</LI>
        <LI>Forgetting that drinks, oils, and sauces all carry calories too.</LI>
      </UL>

      <P>
        That is the entire method. If you would rather not do the arithmetic, the{" "}
        <CalcLink>free macro calculator</CalcLink> handles every step above and
        hands you finished targets in a few seconds.
      </P>
    </>
  );
}
