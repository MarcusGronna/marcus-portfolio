// Knapp som togglar 'dark' class på <html>. Använd useEffect + document.documentElement.classList. Ikon från react-icons/ri (RiMoonFill vs RiSunFill).
import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-full hover:bg-brand-600/10 transition"
    >
      {dark ? <RiSunFill /> : <RiMoonFill />}
    </button>
  );
}
