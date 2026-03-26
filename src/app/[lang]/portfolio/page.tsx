import type { Metadata } from "next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import { site } from "@/lib/seo";
import PortfolioPageContent from "./PortfolioPageContent";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;

  const isSv = lang === "sv";
  const title = isSv
    ? "Portfolio – Marcus Grönnå | Fullstack .NET-utvecklare"
    : "Portfolio – Marcus Grönnå | Fullstack .NET Developer";
  const description = isSv
    ? "Projekt och fallstudier av Marcus Grönnå — C# / .NET / React / Azure. Inkluderar AI-integrerade appar, fullstack-webprodukter och molninfrastrukturarbete."
    : "Projects and case studies by Marcus Grönnå — C# / .NET / React / Azure. Includes AI-integrated apps, fullstack web products, and cloud infrastructure work.";
  const url = `${site.url}/${lang}/portfolio`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        sv: `${site.url}/sv/portfolio`,
        en: `${site.url}/en/portfolio`,
        "x-default": `${site.url}/sv/portfolio`,
      },
    },
    openGraph: {
      type: "website",
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

export default async function PortfolioPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return <PortfolioPageContent lang={lang} />;
}
