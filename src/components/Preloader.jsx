"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./ThemeContext";
import clsx from "clsx";

/* ── Kinetic Typography Config ── */
const wordReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // cinematic quint ease
    },
  }),
};

const taglineWords = ["Build", "Scale", "Systemize"];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const DURATION = 1400; // Fast, clean duration

  useEffect(() => {
    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);

      // Advanced eased progress (quintic ease out)
      const eased = 1 - Math.pow(1 - pct, 4);

      setProgress(Math.round(eased * 100));

      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Faster exit hold
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
          className={clsx(
            "fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden bg-theme"
          )}
        >
          {/* ── Background Architecture ── */}
          <div className="absolute inset-0 z-0">
             {/* Subtle Ambient Blobs */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 opacity: [0.05, 0.08, 0.05],
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#9E8976] blur-[140px]" 
             />
             <motion.div 
               animate={{ 
                 scale: [1.1, 1, 1.1],
                 opacity: [0.04, 0.08, 0.04],
               }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#9E8976] blur-[160px]" 
             />
          </div>

          {/* ── Metadata Rails (Museum Style) ── */}
          <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#9E8976]">
                EST. 2021
              </span>
              <span className="text-[9px] font-sans font-medium uppercase tracking-[0.3em] text-theme-3">
                Omnichannel Marketing
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="flex flex-col items-end gap-2 text-right"
            >
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#9E8976]">
                MEDAN / INDO
              </span>
              <span className="text-[9px] font-sans font-medium uppercase tracking-[0.3em] text-theme-3">
                UPLIFT Creative.co
              </span>
            </motion.div>
          </div>

          {/* ── MAIN LOGO (Kinetic Typography) ── */}
          <div className="relative z-10 flex flex-col items-start gap-4">
            <div className="overflow-hidden">
               <motion.span
                 variants={wordReveal}
                 initial="hidden"
                 animate="visible"
                 custom={0}
                 className="block text-[15vw] md:text-[10vw] font-freight font-black uppercase leading-[0.85] tracking-tighter text-theme"
               >
                 UPLIFT
               </motion.span>
            </div>
            
            <div className="flex gap-4 overflow-hidden">
              {taglineWords.map((word, i) => (
                <motion.span
                  key={word}
                  variants={wordReveal}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
                  className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.5em] text-[#9E8976]"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── ADVANCED PROGRESS (Large Numerical) ── */}
          <div className="absolute bottom-12 left-0 w-full p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8 z-10">
            {/* Minimalist Bar */}
            <div className="flex-1 max-w-[400px] w-full flex flex-col gap-3">
               <div className="w-full h-[1px] bg-theme-border relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-[#9E8976] origin-left"
                    style={{ scaleX: progress / 100 }}
                  />
               </div>
               <div className="flex justify-between items-center text-[8px] font-sans font-bold uppercase tracking-[0.4em] text-theme-3">
                  <span>Optimizing Experience</span>
                  <span>{progress === 100 ? "Ready" : "In Progress"}</span>
               </div>
            </div>

            {/* Giant Number */}
            <div className="flex items-baseline overflow-hidden">
              <motion.span 
                className="text-[18vw] md:text-[12vw] font-freight font-black tabular-nums leading-[0.8] tracking-tighter text-theme-watermark opacity-40 py-2"
              >
                {progress.toString().padStart(2, '0')}
              </motion.span>
              <span className="text-2xl md:text-4xl font-freight font-black text-[#9E8976]">
                %
              </span>
            </div>
          </div>

          {/* ── Bottom Disclaimer ── */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
          >
             <p className="text-[7px] font-sans font-bold uppercase tracking-[0.6em] text-theme-3 whitespace-nowrap">
                Creative Momentum Since 2021
             </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}