// src/app/[lang]/layout.tsx
// Locale-aware sub-layout: provides nav and footer for all
// language-prefixed routes (/sv/... and /en/...).
import type { Metadata } from "next";
import ChalkNav from "@/components/ChalkNav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return {
    alternates: {
      languages: {
        sv: lang === "sv" ? undefined : "https://marcusgronna.com/sv",
        en: lang === "en" ? undefined : "https://marcusgronna.com/en",
        "x-default": "https://marcusgronna.com/sv",
      },
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;

  return (
    <>
      <ChalkNav lang={lang} />
      <main id="main" className="container mx-auto px-6 lg:px-8 flex flex-col house-bg">
        {children}
      </main>
      <Footer lang={lang} />
      <Analytics />
    </>
  );
}
