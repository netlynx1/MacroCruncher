import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        Losing weight comes down to one rule that never changes: you have to eat
        fewer calories than you burn. But &ldquo;eat less&rdquo; on its own is a
        recipe for low energy, lost muscle, and constant hunger. The way you
        split those calories across protein, carbs, and fat decides whether your
        diet feels sustainable or miserable. Here is how to set macros for weight
        loss that actually hold up over weeks and months.
      </P>

      <H2>Start with a sensible deficit</H2>
      <P>
        Find your maintenance calories first, then subtract. For most people a
        deficit of <Strong>250 to 750 calories per day</Strong> is the sweet
        spot. The bigger the deficit, the faster the scale moves — but also the
        harder the diet is to stick to and the greater the risk of losing
        muscle. A moderate 500-calorie deficit, producing roughly a pound of fat
        loss per week, is a reliable default. You can find your numbers in
        seconds with the <CalcLink>macro calculator</CalcLink>.
      </P>

      <H2>Protein is your most important macro on a cut</H2>
      <P>
        When you are in a deficit, protein does double duty. It protects the
        muscle you already have so your body burns fat instead, and it is the
        most filling nutrient gram for gram, which keeps hunger manageable. Aim
        for the higher end of the range — around <Strong>1.0 gram per pound of
        bodyweight</Strong> — while dieting. Someone at 160 lb would target about
        160g of protein per day.
      </P>

      <H2>Don't fear carbs or fat</H2>
      <P>
        A common myth is that cutting carbs is what causes weight loss. It is
        not; the deficit is. Carbs fuel your training and your daily energy, so
        slashing them often just leaves you flat and cranky. Keep fat at roughly
        25% of your calories to support hormones, then let carbs fill the
        remainder. Plenty of people lose fat comfortably eating a generous amount
        of carbohydrate.
      </P>

      <Example title="Sample fat-loss day at 1,800 calories">
        <UL>
          <LI><Strong>Protein:</Strong> ~150g (eggs, chicken, Greek yogurt, fish)</LI>
          <LI><Strong>Carbs:</Strong> ~160g (oats, rice, potatoes, fruit, vegetables)</LI>
          <LI><Strong>Fat:</Strong> ~50g (olive oil, nuts, whole eggs)</LI>
        </UL>
        Built around lean proteins and high-volume, fiber-rich foods so you feel
        full on fewer calories.
      </Example>

      <H2>Why high-volume foods make dieting easier</H2>
      <P>
        Two meals can have the same calories but feel completely different. A
        plate piled with vegetables, lean protein, and potatoes is enormous
        compared to the same calories in a candy bar. Leaning on{" "}
        <Strong>high-volume, high-fiber foods</Strong> lets you eat more actual
        food while staying in your deficit — one of the simplest tricks for
        making weight loss feel less like deprivation.
      </P>

      <H3>Mistakes that stall weight loss</H3>
      <UL>
        <LI>Underestimating liquid calories — juice, lattes, soda, and alcohol add up fast.</LI>
        <LI>Forgetting to count cooking oils and dressings, which are easy to pour heavily.</LI>
        <LI>Weekend overeating that erases a careful weekday deficit.</LI>
        <LI>Cutting calories so hard that you binge a few days later.</LI>
      </UL>

      <H2>Track the trend, not the day</H2>
      <P>
        Your weight will bounce around daily because of water, food in your gut,
        and sodium. None of that is fat. Judge progress over <Strong>two to
        three weeks</Strong> by the overall direction, not a single morning. If
        the trend has not moved after a few weeks of consistency, trim another
        100–200 calories and continue.
      </P>

      <P>
        Set your protein, keep fat moderate, fill the rest with carbs, and stay
        patient. To get exact targets for your body and goal, run the numbers
        through the <CalcLink>free calculator</CalcLink>.
      </P>
    </>
  );
}
