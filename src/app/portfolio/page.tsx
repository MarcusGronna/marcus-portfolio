"use client";
import { projects } from "@/content/projects";
import ProjectShelf from "@/components/ProjectShelf";
import { useLang } from "@/components/LangProvider";

const texts = {
  title: { en: "Portfolio", sv: "Portfolio" },
};

export default function PortfolioPage() {
  const { lang } = useLang();
  const projectsByYear = projects.reduce<Record<string, typeof projects>>((acc, project) => {
    const year = project.year || (lang === "sv" ? "Okänt år" : "Unknown year");
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-8">{texts.title[lang]}</h2>
      {Object.entries(projectsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearProjects]) => (
          <div key={year} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{year}</h3>
            <ProjectShelf projects={yearProjects} />
          </div>
        ))}
    </section>
  );
}
