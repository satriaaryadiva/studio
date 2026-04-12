"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className={`relative flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 group ${
        isLight
          ? "bg-[#1A1612]/8 hover:bg-[#1A1612]/12 border border-[#9E8976]/20"
          : "bg-white/8 hover:bg-white/12 border border-white/10"
      } ${className}`}
    >
      {/* Track */}
      <div
        className={`relative w-9 h-5 rounded-full transition-colors duration-400 flex-none ${
          isLight ? "bg-[#9E8976]" : "bg-white/15"
        }`}
      >
        {/* Knob */}
        <motion.div
          animate={{ x: isLight ? 16 : 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className={`absolute top-0.5 w-4 h-4 rounded-full shadow-sm flex items-center justify-center ${
            isLight ? "bg-white" : "bg-white"
          }`}
        >
          <AnimatePresence mode="wait">
            {isLight ? (
              <motion.svg
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9E8976"
                strokeWidth="2.5"
                className="w-2.5 h-2.5"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9E8976"
                strokeWidth="2.5"
                className="w-2.5 h-2.5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Label */}
      <span
        className={`text-[9px] font-bold uppercase tracking-[0.3em] hidden sm:block ${
          isLight ? "text-[#505F62]" : "text-white/40"
        }`}
      >
        {isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}
