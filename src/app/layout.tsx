import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
// Self-hosted Dosis via @fontsource – avoids runtime fetch from Google Fonts
import "@fontsource/dosis/400.css";
import "@fontsource/dosis/500.css";
import "@fontsource/dosis/600.css";
import "@fontsource/dosis/700.css";
import "@fontsource/dosis/800.css";
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
    canonical: "https://marcusgronna.com/sv",
    languages: {
      sv: "https://marcusgronna.com/sv",
      en: "https://marcusgronna.com/en",
      "x-default": "https://marcusgronna.com/sv",
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    alternateLocale: "en_US",
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

// The root layout reads the current locale from the x-lang header injected by
// middleware so that <html lang> is always server-rendered correctly without
// having direct access to the [lang] route parameter.
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const lang = (headersList.get("x-lang") as "en" | "sv") ?? "sv";

  return (
    <html lang={lang}>
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
        {children}
      </body>
    </html>
  );
}
