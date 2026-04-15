"use client";

import { motion } from "framer-motion";

const SERVICES = [
  "Social Media Management",
  "Content Production",
  "Brand Identity",
  "Ads Strategy",
  "E-Commerce Setup",
  "Web Development",
  "Event Activation",
];

const METRICS = [
  { value: "50+", label: "Brands" },
  { value: "200+", label: "Campaigns" },
  { value: "10M+", label: "Reach" },
  { value: "4.2x", label: "Avg ROAS" },
];

// Duplicate for seamless loop
const servicesLoop = [...SERVICES, ...SERVICES];
const metricsLoop = [...METRICS, ...METRICS, ...METRICS];

export default function HeroMarquee() {
  return (
    <div className="bg-theme-muted border-y border-theme-md overflow-hidden select-none no-theme-transition">

      {/* ── Row 1: Services — scrolls left ── */}
      <div className="relative flex overflow-hidden border-b border-theme-md">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {servicesLoop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-8 py-4"
            >
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.35em] text-theme-marquee">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E8976]/40 flex-none" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Row 2: Metrics + Brand — scrolls right ── */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {metricsLoop.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 py-4"
            >
              <span className="text-[13px] font-freight font-black text-[#9E8976] tracking-tight">
                {item.value}
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-theme-marquee-2">
                {item.label}
              </span>
              <span className="w-px h-3 bg-theme-md ml-4 flex-none" />
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
