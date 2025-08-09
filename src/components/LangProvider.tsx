// src/components/LangProvider.tsx
"use client";
import { createContext, useContext, useState } from "react";

type Lang = "en" | "sv";
type LangContextType = { lang: Lang; setLang: (lang: Lang) => void };

const LangContext = createContext<LangContextType>({ lang: "sv", setLang: () => {} }); // sv som default

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("sv"); // sv som default
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
