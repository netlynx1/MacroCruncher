import Script from "next/script";

// Loads Google AdSense Auto Ads ONLY if NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT
// is set. The client ID looks like "ca-pub-XXXXXXXXXXXXXXXX".
export function AdSense() {
  const client = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT;
  if (!client) return null;

  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}

// Loads Google Analytics (GA4) ONLY if NEXT_PUBLIC_GA_ID is set.
// The app works fine with this absent — nothing breaks.
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
