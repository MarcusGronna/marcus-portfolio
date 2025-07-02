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
    <section className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{texts.title[lang]}</h2>
      <PortraitFrame small />
      <div className="prose prose-neutral mt-8">
        <p>{texts.intro[lang]}</p>
      </div>
    </section>
  );
}
