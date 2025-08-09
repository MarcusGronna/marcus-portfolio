import type { Metadata } from "next";
import { Abel, Dosis } from "next/font/google";
import "./globals.css";
import LangProvider from "../components/LangProvider";
import ChalkNav from "../components/ChalkNav";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { personJsonLd } from "@/lib/seo";

const abel = Abel({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const dosis = Dosis({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcusgronna.com"),
  title: "Marcus Grönnå – Fullstackutvecklare",
  description: "Portfölj för rekryterare och kunder. React/Angular/Node/.NET.",
  alternates: {
    canonical: "/",
    languages: { "sv-SE": "/", "en-US": "/?lang=en" }, // enkel variant utan routes
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://marcusgronna.com/",
    title: "Marcus Grönnå – Fullstackutvecklare",
    description: "Portfölj för rekryterare och kunder.",
    siteName: "marcusgronna.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <Script
          id="jsonld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
      </head>
      <body className={`${abel.variable} ${dosis.variable} antialiased min-h-screen flex flex-col`}>
        {/* Skip link för A11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white/90 px-3 py-2 rounded"
        >
          Hoppa till innehåll
        </a>
        <LangProvider>
          <ChalkNav />
          <main id="main" className="container mx-auto px-6 lg:px-8 flex flex-col house-bg">
            {children}
          </main>
          <Footer />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
