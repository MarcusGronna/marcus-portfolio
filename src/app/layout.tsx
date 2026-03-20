import type { Metadata } from "next";
import "./globals.css";
// Self-hosted Dosis via @fontsource – avoids runtime fetch from Google Fonts
import "@fontsource/dosis/400.css";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import "@fontsource/dosis/700.css";
import "@fontsource/dosis/800.css";
import LangProvider from "../components/LangProvider";
import ChalkNav from "../components/ChalkNav";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { personJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcusgronna.com"),
  title: {
    default: "Marcus Grönnå – Fullstack .NET Developer",
    template: "%s | Marcus Grönnå",
  },
  description:
    "Portfolio of Marcus Grönnå — fullstack .NET developer in Stockholm. C# / .NET / React / Azure. Building backends, frontends, and AI-integrated systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://marcusgronna.com/",
    title: "Marcus Grönnå – Fullstack .NET Developer",
    description:
      "Portfolio of Marcus Grönnå — fullstack .NET developer in Stockholm. C# / .NET / React / Azure.",
    siteName: "marcusgronna.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Grönnå – Fullstack .NET Developer",
    description:
      "Portfolio of Marcus Grönnå — fullstack .NET developer in Stockholm. C# / .NET / React / Azure.",
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
      <body className="antialiased min-h-screen flex flex-col">
        {/* Skip-to-content link – visible on focus for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-ink-900 text-surface-50 font-semibold px-4 py-2 rounded shadow-lg transition-all"
        >
          Skip to content
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
