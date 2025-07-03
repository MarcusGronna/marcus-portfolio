"use client";
import React from "react";
import { education } from "@/content/education";
import TimelineItem from "@/components/TimelineItem";
import type { EducationItem } from "@/content/education";
import { useLang } from "@/components/LangProvider";

const texts = {
  title: { en: "Education", sv: "Utbildning" },
};

export default function EducationPage() {
  const { lang } = useLang();
  return (
    <section className="max-w-2xl mx-auto py-8 px-2 sm:px-4 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold leading-tight mb-8">{texts.title[lang]}</h2>
      <ul className="space-y-6 mb-8 text-left w-full">
        {education.map((item: EducationItem) => (
          <li key={item.id || `${item.year}-${item.school}`}>
            <TimelineItem {...item} lang={lang} />
            <div className="text-sm text-brand-700 font-semibold mt-1">{item.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
