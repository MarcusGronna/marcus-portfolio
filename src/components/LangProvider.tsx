// src/components/LangProvider.tsx
"use client";
import { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "sv";
type LangContextType = { lang: Lang; setLang: (lang: Lang) => void };

const LangContext = createContext<LangContextType>({ lang: "sv", setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "sv";
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "sv") return stored;
  return "sv";
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
