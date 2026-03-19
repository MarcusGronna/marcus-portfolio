"use client";
import { projects } from "@/content/projects";
import ProjectShelf from "@/components/ProjectShelf";
import ProjectFrame from "@/components/ProjectFrame";
import { useLang } from "@/components/LangProvider";
import Link from "next/link";

const texts = {
  title: { en: "Portfolio", sv: "Portfolio" },
  flagship: { en: "Flagship Project", sv: "Flaggskeppsprojekt" },
  backHome: { en: "← Back to homepage", sv: "← Tillbaka till startsidan" },
};

export default function PortfolioPage() {
  const { lang } = useLang();

  const flagship = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const projectsByYear = rest.reduce<Record<string, typeof projects>>((acc, project) => {
    const year = String(project.year || (lang === "sv" ? "Okänt år" : "Unknown year"));
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <section className="max-w-5xl mx-auto py-8 px-2 sm:px-4 flex flex-col">
      <h1 className="mb-8">{texts.title[lang]}</h1>

      {/* Flagship */}
      {flagship && (
        <div className="mb-14 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-700 mb-2">
            {texts.flagship[lang]}
          </p>
          <ProjectFrame project={flagship} priority featured />
        </div>
      )}

      {/* Rest by year */}
      {Object.entries(projectsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearProjects]) => (
          <div key={year} className="mb-12 w-full">
            <h2 className="text-2xl font-semibold mb-5">{year}</h2>
            <ProjectShelf projects={yearProjects} />
          </div>
        ))}

      <div className="mt-6">
        <Link
          href="/#portfolio"
          className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
        >
          {texts.backHome[lang]}
        </Link>
      </div>
    </section>
  );
}
