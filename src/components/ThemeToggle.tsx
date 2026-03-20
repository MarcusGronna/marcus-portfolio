"use client";
// Dark-mode toggle – not currently wired into the nav, kept for future use.
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
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-full hover:bg-brand-600/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
    >
      {dark ? <RiSunFill aria-hidden="true" /> : <RiMoonFill aria-hidden="true" />}
    </button>
  );
}
