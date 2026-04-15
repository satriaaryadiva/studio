"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeContext";
import clsx from "clsx";

/* ── Letter-by-letter stagger config ── */
const letterAnim = {
  hidden: { y: "100%", opacity: 0, rotateX: 90 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const taglineWords = ["Build", "·", "Scale", "·", "Systemize"];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const DURATION = 2800; // total loader duration in ms

  useEffect(() => {
    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);

      // Eased progress curve (ease-in-out cubic)
      const eased = pct < 0.5
        ? 4 * pct * pct * pct
        : 1 - Math.pow(-2 * pct + 2, 3) / 2;

      setProgress(Math.round(eased * 100));

      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const letters = "UPLIFT".split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className={clsx(
            "fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-auto select-none",
            isLight ? "bg-[#F9F2E7]" : "bg-[#0a0a0a]"
          )}
        >
          {/* ── Ambient glow ── */}
          <div
            className={clsx(
              "absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] pointer-events-none",
              isLight ? "bg-[#9E8976]/10" : "bg-[#9E8976]/5"
            )}
          />

          {/* ── Top-left corner mark ── */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className={clsx(
              "absolute top-8 left-8 text-[9px] font-sans font-bold uppercase tracking-[0.5em]",
              isLight ? "text-[#9E8976]/60" : "text-white/20"
            )}
          >
            Uplift Agency
          </motion.span>

          {/* ── Top-right year ── */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={clsx(
              "absolute top-8 right-8 text-[9px] font-sans font-bold tracking-[0.3em]",
              isLight ? "text-[#9E8976]/40" : "text-white/15"
            )}
          >
            © 2025
          </motion.span>

          {/* ── Main UPLIFT letters ── */}
          <div className="flex items-center justify-center overflow-hidden perspective-[800px]">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnim}
                initial="hidden"
                animate="visible"
                className={clsx(
                  "inline-block text-[14vw] md:text-[10vw] lg:text-[8vw] font-freight font-black uppercase leading-none tracking-tighter",
                  isLight ? "text-[#1a1612]" : "text-white"
                )}
                style={{ transformStyle: "preserve-3d" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* ── Tagline words ── */}
          <div className="flex items-center gap-3 mt-6 overflow-hidden">
            {taglineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.0 + i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={clsx(
                  "text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.35em]",
                  word === "·"
                    ? isLight ? "text-[#9E8976]" : "text-[#9E8976]"
                    : isLight ? "text-[#9E8976]/70" : "text-white/40"
                )}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* ── Progress bar + counter ── */}
          <div className="absolute bottom-16 md:bottom-20 w-full flex flex-col items-center gap-4 px-8">
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-baseline gap-1"
            >
              <span
                className={clsx(
                  "text-4xl md:text-5xl font-freight font-black tabular-nums leading-none",
                  isLight ? "text-[#1a1612]" : "text-white"
                )}
              >
                {progress}
              </span>
              <span
                className={clsx(
                  "text-sm font-sans font-bold",
                  isLight ? "text-[#9E8976]" : "text-[#9E8976]"
                )}
              >
                %
              </span>
            </motion.div>

            {/* Bar track */}
            <div
              className={clsx(
                "w-full max-w-xs h-[1px] overflow-hidden",
                isLight ? "bg-[#9E8976]/20" : "bg-white/10"
              )}
            >
              <motion.div
                className="h-full bg-[#9E8976] origin-left"
                style={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>

          {/* ── Bottom-center descriptor ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={clsx(
              "absolute bottom-6 text-[8px] md:text-[9px] font-sans font-bold uppercase tracking-[0.5em]",
              isLight ? "text-[#9E8976]/40" : "text-white/15"
            )}
          >
            Omnichannel Marketing Agency — Medan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}