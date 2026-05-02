import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Megan LeClair",
    template: "%s — Megan LeClair",
  },
  description:
    "Product designer and engineer based in Nashville—full-stack, shipped, and working at the intersection of design and code.",
  openGraph: {
    title: "Megan LeClair",
    description:
      "Product designer and engineer—full-stack, shipped, design through build.",
    siteName: "Megan LeClair",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Megan LeClair",
    description:
      "Product designer and engineer—full-stack, shipped, design through build.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} dark h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
