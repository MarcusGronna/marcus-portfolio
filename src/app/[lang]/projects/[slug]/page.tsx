import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/content/projects";
import { site, projectJsonLd } from "@/lib/seo";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import CaseStudyContent from "./CaseStudyContent";

type Params = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
  // Generate all combinations of lang × slug for SSG
  return LOCALES.flatMap((lang) =>
    projects
      .filter((p) => p.caseStudy)
      .map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  const project = projects.find((p) => p.slug === slug && p.caseStudy);
  if (!project) return {};

  const title = `${project.title[lang]} – ${lang === "sv" ? "Fallstudie" : "Case Study"} | Marcus Grönnå`;
  const description = project.summary[lang];
  const url = `${site.url}/${lang}/projects/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        sv: `${site.url}/sv/projects/${slug}`,
        en: `${site.url}/en/projects/${slug}`,
        "x-default": `${site.url}/sv/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: site.name,
      images: project.image
        ? [{ url: `${site.url}${project.image}`, alt: project.title[lang] }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: { params: Params }) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  const project = projects.find((p) => p.slug === slug && p.caseStudy);

  if (!project) notFound();

  const jsonLd = projectJsonLd({
    name: project.title[lang],
    ...(project.url ? { url: project.url } : {}),
    about: project.summary[lang],
  });

  return (
    <>
      <Script
        id={`jsonld-project-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyContent project={project} />
    </>
  );
}
