"use client";
import PortraitFrame from "@/components/PortraitFrame";
import { useLang } from "@/components/LangProvider";

const texts = {
  title: { en: "About Me", sv: "Om mig" },
  intro: {
    en: "Hey there! I'm a passionate IT enthusiast from Stockholm, Sweden, with a love for web development and full-stack technologies.",
    sv: "Hej! Jag är en passionerad IT-entusiast från Stockholm med ett stort intresse för webbutveckling och fullstack-teknologier.",
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <section className="max-w-2xl py-8 px-2 sm:px-4 mb-12">
      <h2 className="text-2xl font-bold mb-6">{texts.title[lang]}</h2>
      <PortraitFrame small flipped={false} onToggle={() => {}} />
      <div className="mt-8">
        <p className="text-base sm:text-lg">{texts.intro[lang]}</p>
      </div>
    </section>
  );
}
