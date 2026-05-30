import type { Metadata } from "next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import { site } from "@/lib/seo";
import AboutPageContent from "./AboutPageContent";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;

  const isSv = lang === "sv";
  const title = isSv
    ? "Om Marcus Grönnå – Fullstack .NET-utvecklare"
    : "About Marcus Grönnå – Fullstack .NET Developer";
  const description = isSv
    ? "Lär känna Marcus Grönnå. Fullstack .NET-utvecklare i Stockholm. C#, .NET, React, Azure, med 14 år i säkerhetskritisk verksamhet."
    : "Learn about Marcus Grönnå. Fullstack .NET developer in Stockholm. C#, .NET, React, Azure, with 14 years in safety-critical operations.";
  const url = `${site.url}/${lang}/about`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        sv: `${site.url}/sv/about`,
        en: `${site.url}/en/about`,
        "x-default": `${site.url}/sv/about`,
      },
    },
    openGraph: {
      type: "profile",
      url,
      title,
      description,
      siteName: site.name,
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function AboutPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return <AboutPageContent lang={lang} />;
}
