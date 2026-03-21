import type { Metadata } from "next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import { site } from "@/lib/seo";
import ContactPageContent from "./ContactPageContent";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;

  const isSv = lang === "sv";
  const title = isSv
    ? "Kontakta Marcus Grönnå – Fullstack .NET-utvecklare"
    : "Contact Marcus Grönnå – Fullstack .NET Developer";
  const description = isSv
    ? "Kontakta Marcus Grönnå — fullstack .NET-utvecklare i Stockholm. Tillgänglig för .NET-konsulting, fullstack-produktarbete och roller som bryr sig om kvalitet."
    : "Get in touch with Marcus Grönnå — fullstack .NET developer in Stockholm. Available for .NET consulting, fullstack product work, and roles that care about quality.";
  const url = `${site.url}/${lang}/contact`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        sv: `${site.url}/sv/contact`,
        en: `${site.url}/en/contact`,
        "x-default": `${site.url}/sv/contact`,
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

export default function ContactPage() {
  return <ContactPageContent />;
}
