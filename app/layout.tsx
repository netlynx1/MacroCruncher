import type { Metadata } from "next";
import { Archivo, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { AdSense, Analytics } from "@/components/ThirdParty";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
} from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-space",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TAGLINE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TAGLINE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TAGLINE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console site verification */}
        <meta
          name="google-site-verification"
          content="FkBGGwSfnhLjqFlhT391LdEQR7U5t2b_2WzwVGqXyno"
        />
        {/* Third-party scripts load only when their env vars are set */}
        <AdSense />
        <Analytics />
      </head>
      <body
        className={`${archivo.variable} ${inter.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
