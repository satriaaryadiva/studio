"use client";

import { motion } from "framer-motion";

const TOP_ITEMS = [
  "UPLIFT Agency",
  "Social Media",
  "Website Development",
  "UPLIFT Agency",
  "E-Commerce",
  "Dokumentasi & Produksi",
  "UPLIFT Agency",
  "Event Activation",
  "Learning Class",
  "UPLIFT Agency",
  "Omnichannel Medan",
  "Digital Marketing",
];

const BOTTOM_ITEMS = [
  "Build · Scale · Systemize",
  "UPLIFT",
  "Creative Agency Medan",
  "UPLIFT",
  "Grow Your Brand",
  "UPLIFT",
  "Strategi · Konten · Konversi",
  "UPLIFT",
  "Medan · Indonesia",
  "UPLIFT",
  "One Ecosystem",
  "UPLIFT",
];

// Duplicate for seamless loop
const topLoop = [...TOP_ITEMS, ...TOP_ITEMS];
const bottomLoop = [...BOTTOM_ITEMS, ...BOTTOM_ITEMS];

export default function HeroMarquee() {
  return (
    <div className="bg-theme-muted border-y border-theme overflow-hidden py-0 select-none no-theme-transition">

      {/* ── Row 1: scrolls left ── */}
      <div className="relative flex overflow-hidden border-b border-theme">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {topLoop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-6 py-4"
            >
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-theme-marquee">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full flex-none" style={{ backgroundColor: "rgba(158,137,118,0.60)" }} />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Row 2: scrolls right ── */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {bottomLoop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-6 py-4"
            >
              {item === "UPLIFT" ? (
                <span className="text-[13px] font-freight font-black uppercase tracking-[0.15em] text-[#9E8976]">
                  UPLIFT
                </span>
              ) : (
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-theme-marquee-2">
                  {item}
                </span>
              )}
              <span className="w-px h-3 flex-none border-theme-md opacity-50" />
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
