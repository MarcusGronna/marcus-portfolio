"use client";
import { useLang } from "@/components/LangProvider";
import JourneyTimeline from "@/components/JourneyTimeline";
import { dict } from "@/content/i18n";
import Link from "next/link";

export default function EducationPageContent() {
  const { lang } = useLang();
  return (
    <section className="max-w-4xl mx-auto py-8 px-2 sm:px-4 flex flex-col">
      <h1 className="mb-2">{dict[lang].educationPageTitle}</h1>
      <p className="text-brand-800 text-base leading-relaxed mb-8 max-w-xl">
        {dict[lang].educationPageSubtitle}
      </p>
      <JourneyTimeline />
      <div className="mt-10">
        <Link
          href={`/${lang}#journey`}
          className="text-brand-700 hover:text-accent-700 underline text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
        >
          {dict[lang].backToHome}
        </Link>
      </div>
    </section>
  );
}
