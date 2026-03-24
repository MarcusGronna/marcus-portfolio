import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import HomeContent from "./HomeContent";

type Params = Promise<{ lang: string }>;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return <HomeContent lang={lang} />;
}
