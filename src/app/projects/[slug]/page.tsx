import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/content/projects";
import { site, projectJsonLd } from "@/lib/seo";
import CaseStudyContent from "./CaseStudyContent";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.caseStudy);
  if (!project) return {};

  const title = `${project.title.en} – Case Study | Marcus Grönnå`;
  const description = project.summary.en;
  const url = `${site.url}/projects/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: site.name,
      images: project.image
        ? [{ url: `${site.url}${project.image}`, alt: project.title.en }]
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
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.caseStudy);

  if (!project) notFound();

  const jsonLd = projectJsonLd({
    name: project.title.en,
    url: project.url,
    about: project.summary.en,
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
