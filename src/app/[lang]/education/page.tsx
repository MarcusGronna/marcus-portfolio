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
    ? "Utbildning och professionell resa för Marcus Grönnå — fullstack .NET-utvecklare. Studier vid School of Applied Technology, tidigare karriär som lokförare och körlärare."
    : "Education and professional journey of Marcus Grönnå — fullstack .NET developer. Study at School of Applied Technology, prior career as a train driver and instructor.";
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

export default function EducationPage() {
  return <EducationPageContent />;
}
