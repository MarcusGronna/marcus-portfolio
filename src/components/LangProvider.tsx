"use client";
import { createContext, useContext, useState } from "react";

type LangContextType = {
  lang: "en" | "sv";
  setLang: (lang: "en" | "sv") => void;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "sv">("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}