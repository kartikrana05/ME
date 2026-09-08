"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let initial: Theme = "dark";
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "dark" || stored === "light") {
        initial = stored;
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        initial = "light";
      }
    } catch {
      /* storage unavailable — fall back to dark */
    }
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.documentElement.classList.remove("light-pending");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button
        type="button"
        className={`theme-btn${theme === "dark" ? " active" : ""}`}
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
      >
        ●
      </button>
      <button
        type="button"
        className={`theme-btn${theme === "light" ? " active" : ""}`}
        onClick={() => setTheme("light")}
        aria-label="Light theme"
        aria-pressed={theme === "light"}
      >
        ○
      </button>
    </div>
  );
}
