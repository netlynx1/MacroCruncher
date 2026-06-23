import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        BMR, TDEE, maintenance calories — fitness writing throws these acronyms
        around as if everyone already knows them. They are actually simple, and
        understanding the difference clears up a lot of confusion about how many
        calories you really need. Let us untangle them once and for all.
      </P>

      <H2>BMR: what your body burns at rest</H2>
      <P>
        Your <Strong>basal metabolic rate (BMR)</Strong> is the energy your body
        uses just to keep you alive while completely at rest — breathing,
        circulating blood, repairing cells, keeping your brain running. If you
        stayed in bed all day and did nothing, you would still burn roughly your
        BMR. For most adults it accounts for the majority of daily calorie burn,
        often 60–70%.
      </P>
      <P>
        BMR is estimated from your weight, height, age, and sex. The Mifflin-St
        Jeor equation — the one our <CalcLink>calculator</CalcLink> uses — is the
        most trusted formula for it.
      </P>

      <H2>TDEE: what your body burns in real life</H2>
      <P>
        You do not actually spend the day lying still, so BMR alone undercounts
        your needs. <Strong>Total daily energy expenditure (TDEE)</Strong> is the
        full picture: your BMR plus everything else you do. TDEE is what people
        usually mean when they say <Strong>maintenance calories</Strong> — the
        number that keeps your weight stable.
      </P>
      <P>TDEE is made up of four parts:</P>
      <UL>
        <LI><Strong>BMR</Strong> — resting energy, the biggest slice.</LI>
        <LI><Strong>Exercise activity</Strong> — your workouts and training.</LI>
        <LI><Strong>NEAT</Strong> — all the incidental movement: walking, fidgeting, chores, taking the stairs.</LI>
        <LI><Strong>Thermic effect of food</Strong> — the energy used to digest what you eat.</LI>
      </UL>

      <H2>How they connect</H2>
      <P>
        The relationship is just multiplication. You take BMR and multiply by an{" "}
        <Strong>activity factor</Strong> that reflects how active you are:
      </P>
      <UL>
        <LI>Sedentary (desk job, little exercise): ×1.2</LI>
        <LI>Lightly active (1–3 days/week): ×1.375</LI>
        <LI>Moderately active (3–5 days/week): ×1.55</LI>
        <LI>Very active (6–7 days/week): ×1.725</LI>
        <LI>Athlete (training twice a day): ×1.9</LI>
      </UL>

      <Example title="Putting it together">
        Suppose your BMR is 1,600 calories. If you are moderately active, your
        TDEE is 1,600 × 1.55 = about <Strong>2,480 calories</Strong>. That is your
        maintenance. To lose fat you would eat below it; to build muscle, a little
        above.
      </Example>

      <H2>Which number should you use?</H2>
      <P>
        Almost always <Strong>TDEE</Strong>. BMR is a building block, not a target
        — eating at your BMR would mean ignoring all the energy you burn moving
        around, leaving you in an unintentionally large deficit. Set your calorie
        goal relative to TDEE: that is the number that reflects your real life.
      </P>

      <H3>A caveat about activity multipliers</H3>
      <P>
        The activity factor is the fuzziest part of the calculation because
        people misjudge how active they are. A few intense gym sessions do not
        make an otherwise sedentary week &ldquo;very active.&rdquo; If your
        results stall, the multiplier is often the culprit. When in doubt, pick
        the more conservative level and adjust based on real-world results over a
        couple of weeks.
      </P>

      <H2>The short version</H2>
      <UL>
        <LI><Strong>BMR</Strong> = calories burned at complete rest.</LI>
        <LI><Strong>TDEE</Strong> = BMR plus all your daily movement and digestion.</LI>
        <LI><Strong>Maintenance</Strong> = your TDEE.</LI>
        <LI>Set fat-loss or muscle-gain calories relative to TDEE, not BMR.</LI>
      </UL>

      <P>
        The <CalcLink>free macro calculator</CalcLink> works out both numbers from
        your stats and turns them into finished calorie and macro targets.
      </P>
    </>
  );
}
