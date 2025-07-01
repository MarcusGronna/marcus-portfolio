"use client";
import { motion } from "framer-motion";
import WallLayout from "@/components/WallLayout";
import PortraitFrame from "@/components/PortraitFrame";
import ProjectShelf from "@/components/ProjectShelf";
import { fadeUp } from "@/lib/framer-variants";
import { projects } from "@/content/projects";
import { education } from "@/content/education";

export default function Home() {
  const projectsByYear = projects.reduce<Record<string, typeof projects>>((acc, project) => {
    const year = project.year || "Okänt år";
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  return (
    <WallLayout>
      {/* HOME */}
      <section
        id="home"
        className="lg:col-span-12 flex flex-col lg:flex-row items-center justify-center min-h-[60vh] gap-16 mb-16"
      >
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-brand-700 text-center lg:text-left">
            Hej, jag är Marcus
          </h1>
          <PortraitFrame className="lg:sticky lg:top-36 w-48 md:w-80 xl:w-100 h-48 md:h-80 xl:h-100" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose prose-neutral text-lg">
            {/* TODO: Lägg in din riktiga presentationstext här */}
            <p>
              Hey there! I&#39;m a passionate IT enthusiast from Stockholm, Sweden, with a love for
              web development and full-stack technologies.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="lg:col-span-12 flex flex-col items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Portfolio</h2>
          {Object.entries(projectsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearProjects]) => (
              <div key={year} className="mb-12">
                <h3 className="text-xl font-semibold mb-4 text-center">{year}</h3>
                <ProjectShelf projects={yearProjects} />
              </div>
            ))}
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="lg:col-span-7 flex flex-col items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
          <ul className="space-y-6">
            {education.map((item) => (
              <li key={item.id || `${item.year}-${item.school}`}>
                {/* TODO: Lägg till TimelineItem-komponent */}
                <div>
                  <div className="text-sm text-brand-700 font-semibold">{item.year}</div>
                  <div className="text-lg font-bold">{item.school}</div>
                  <div className="text-base text-brand-800">{item.program}</div>
                  {item.description && (
                    <div className="text-sm text-brand-700 mt-1">{item.description}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="lg:col-span-5 flex flex-col justify-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          {/* TODO: Lägg in riktiga kontaktuppgifter */}
          <p className="mb-4">
            <a
              href="mailto:hi@marcusgronna.com"
              className="text-accent-700 underline hover:text-accent-800"
            >
              hi@marcusgronna.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-2xl mt-6">
            <a
              href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MarcusGronna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-700"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </WallLayout>
  );
}
