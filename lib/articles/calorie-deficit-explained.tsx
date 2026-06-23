import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        &ldquo;You need a calorie deficit&rdquo; is the most repeated piece of
        diet advice on the internet, and also one of the least explained. If you
        have ever nodded along without being totally sure what it means, this is
        for you. A calorie deficit is the entire engine of fat loss — understand
        it well and you will stop falling for gimmicks.
      </P>

      <H2>What a calorie deficit actually is</H2>
      <P>
        Your body burns a certain number of calories every day to keep you alive
        and moving — that is your maintenance level, or TDEE. A{" "}
        <Strong>calorie deficit</Strong> simply means eating fewer calories than
        that number. When you do, your body makes up the difference by tapping
        into stored energy, and over time that stored energy — including body fat
        — goes down. That is fat loss, start to finish.
      </P>
      <P>
        Everything else you have heard — low carb, keto, fasting, &ldquo;clean
        eating&rdquo; — only works to the extent that it puts you in a deficit.
        None of them are magic. They are just different routes to the same place.
      </P>

      <H2>How big should your deficit be?</H2>
      <P>
        Bigger is not better. A deficit that is too aggressive leaves you
        exhausted, hungry, and likely to quit, and it raises the risk of losing
        muscle along with fat. A practical range is{" "}
        <Strong>250 to 750 calories per day below maintenance</Strong>:
      </P>
      <UL>
        <LI><Strong>Conservative (~250/day):</Strong> slow, gentle, easy to sustain.</LI>
        <LI><Strong>Moderate (~500/day):</Strong> the popular default — about a pound a week.</LI>
        <LI><Strong>Aggressive (~750/day):</Strong> faster, but harder to maintain.</LI>
      </UL>
      <P>
        The <CalcLink>macro calculator</CalcLink> builds your deficit for you
        once you pick a goal and pace.
      </P>

      <Example title="What 500 calories looks like">
        If your maintenance is 2,300 calories, a 500-calorie deficit means eating
        about 1,800 per day. That is one fewer large snack, a smaller portion at
        dinner, and skipping the sugary drink — not starvation.
      </Example>

      <H2>Why the scale lies to you day to day</H2>
      <P>
        Here is where people panic and give up. Even in a perfect deficit, your
        weight can jump up several pounds overnight from water, sodium, carbs, or
        simply having food in your system. None of that is fat gain. Fat loss is
        slow and steady underneath all that noise. Weigh yourself regularly,
        ignore the daily swings, and judge the <Strong>multi-week trend</Strong>.
      </P>

      <H2>Protein and training make a deficit work</H2>
      <P>
        A deficit makes you lose weight, but two things decide whether that
        weight is fat or muscle. Eating enough <Strong>protein</Strong> signals
        your body to hold onto muscle, and <Strong>resistance training</Strong>
        gives it a reason to. Skip both and you can end up smaller but soft.
        Combine all three — deficit, high protein, lifting — and you lose fat
        while keeping the muscle that gives you shape.
      </P>

      <H3>Why crash diets backfire</H3>
      <UL>
        <LI>Extreme deficits are miserable and rarely last more than a few weeks.</LI>
        <LI>They tend to end in binges that wipe out the progress.</LI>
        <LI>Very low intake makes it harder to get enough protein and nutrients.</LI>
        <LI>The all-or-nothing mindset crushes the consistency that actually matters.</LI>
      </UL>

      <H2>The bottom line</H2>
      <P>
        A calorie deficit is not a diet brand or a trick — it is the underlying
        cause of every successful fat-loss plan. Set a moderate deficit, keep
        protein high, lift, and give it weeks rather than days. Find the exact
        deficit for your body with the{" "}
        <CalcLink>free macro calculator</CalcLink>.
      </P>
    </>
  );
}
