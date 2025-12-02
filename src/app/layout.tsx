import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Great_Vibes, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; 

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-greatvibes",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pressstart2p",
});

// --- META IMAGE USED ON THE COP SITE ---
const OG_IMAGE = "https://i.nostr.build/mt5lXdK20ge85YW9.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.EndInflationCanada.com"),
  title: {
    default: "End Inflation Canada",
    template: "%s · End Inflation Canada",
  },
  description:
    "End Inflation Canada — Fix the money. Fix the nation. A project by the Canadian Orange Party.",
  keywords: [
    "End Inflation Canada",
    "Inflation Canada",
    "Fix Inflation",
    "Canadian Orange Party",
    "Bitcoin Canada",
    "Sound Money Canada",
    "Stop inflation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "End Inflation Canada",
    locale: "en_CA",
    title: "End Inflation Canada",
    description:
      "Fix the money. Fix Canada. A project by the Canadian Orange Party.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "End Inflation Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End Inflation Canada",
    description:
      "Fix the money. Fix Canada. Bitcoin is sound money. Inflation is theft.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${pressStart2P.variable}`}
    >
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "End Inflation Canada",
              url: "https://www.EndInflationCanada.com/",
              sameAs: [
                "https://www.CanadianOrangeParty.com",
              ],
              image: OG_IMAGE,
            }),
          }}
        />
        
        {/* JSON-LD: Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "End Inflation Canada",
              url: "https://www.EndInflationCanada.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.EndInflationCanada.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className="font-press antialiased">
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}
