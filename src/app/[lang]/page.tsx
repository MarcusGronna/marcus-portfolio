import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/middleware";
import HomeContent from "./HomeContent";

type Params = Promise<{ lang: string }>;

export default async function HomePage({ params }: { params: Params }) {
  const { lang: rawLang } = await params;
  const lang: Locale = LOCALES.includes(rawLang as Locale) ? (rawLang as Locale) : DEFAULT_LOCALE;
  return <HomeContent lang={lang} />;
}
