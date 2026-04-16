"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Initialize with "light" as server default.
  // The inline script in layout.jsx sets data-theme on <html> before React
  // hydrates, so the CSS variables are already correct. We sync state here.
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Read the currently-active theme from the <html> attribute
    // (set by the anti-flash inline script or a previous session).
    const current =
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("uplift-theme") ||
      "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("uplift-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Always render children — never block SSR output.
  // CSS variables are already correct because of the anti-flash script.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
