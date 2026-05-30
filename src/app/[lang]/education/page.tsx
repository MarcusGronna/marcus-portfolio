import type { Metadata } from "next";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import { site } from "@/lib/seo";
import EducationPageContent from "./EducationPageContent";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;

  const isSv = lang === "sv";
  const title = isSv
    ? "Utbildning & Erfarenhet – Marcus Grönnå"
    : "Education & Experience – Marcus Grönnå";
  const description = isSv
    ? "Utbildning och yrkesbakgrund för Marcus Grönnå. Fullstack .NET-utvecklare. Studier vid School of Applied Technology, fjorton år som lokförare och körlärare."
    : "Education and professional background of Marcus Grönnå. Fullstack .NET developer. Study at School of Applied Technology, fourteen years as a train driver and instructor.";
  const url = `${site.url}/${lang}/education`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        sv: `${site.url}/sv/education`,
        en: `${site.url}/en/education`,
        "x-default": `${site.url}/sv/education`,
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

export default async function EducationPage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return <EducationPageContent lang={lang} />;
}
