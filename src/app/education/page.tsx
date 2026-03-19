"use client";
import { useLang } from "@/components/LangProvider";
import JourneyTimeline from "@/components/JourneyTimeline";
import Link from "next/link";

const texts = {
  title: { en: "Education & Experience", sv: "Utbildning & Erfarenhet" },
  subtitle: {
    en: "A combined timeline showing education and work experience — including overlapping periods.",
    sv: "En gemensam tidslinje med utbildning och arbetslivserfarenhet — inklusive parallella perioder.",
  },
  backHome: { en: "← Back to homepage", sv: "← Tillbaka till startsidan" },
};

export default function EducationPage() {
  const { lang } = useLang();
  return (
    <section className="max-w-4xl mx-auto py-8 px-2 sm:px-4 flex flex-col">
      <h1 className="mb-2">{texts.title[lang]}</h1>
      <p className="text-brand-800 text-base leading-relaxed mb-8 max-w-xl">
        {texts.subtitle[lang]}
      </p>
      <JourneyTimeline />
      <div className="mt-10">
        <Link
          href="/#journey"
          className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
        >
          {texts.backHome[lang]}
        </Link>
      </div>
    </section>
  );
}
