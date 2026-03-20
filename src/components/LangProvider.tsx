// src/components/LangProvider.tsx
// Language context — initialised from the URL route param (passed as `initialLang`
// by the [lang]/layout.tsx server component). No localStorage needed; the URL
// is the single source of truth for the selected language.
"use client";
import { createContext, useContext, useState, useCallback } from "react";

export type Lang = "en" | "sv";
type LangContextType = { lang: Lang; setLang: (lang: Lang) => void };

const LangContext = createContext<LangContextType>({ lang: "sv", setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({
  children,
  initialLang = "sv",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
