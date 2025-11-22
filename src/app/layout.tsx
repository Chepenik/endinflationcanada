import type { Metadata } from "next";
import "./globals.css";

import { Great_Vibes, Press_Start_2P } from "next/font/google";


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

export const metadata: Metadata = {
  title: "End Inflation Canada",
  description: "A project by the Canadian Orange Party",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${pressStart2P.variable}`}>
      <body className="font-press">{children}</body>
    </html>
  );
}
