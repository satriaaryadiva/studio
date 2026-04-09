"use client";

import { motion } from "framer-motion";

export function StatList({ children, ...props }) {
  return (
    <div {...props} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 border-y border-white/5 py-24 md:py-32">
      {children}
    </div>
  );
}

export function StatListItem({ label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 text-center md:text-left"
    >
      <div className="flex items-center justify-center md:justify-start gap-4">
        <div className="h-px w-8 bg-[#9E8976]/40" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976]">UPLIFT STATS</span>
      </div>
      <div>
        <dd className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none font-freight uppercase">
          {value}
        </dd>
        <dt className="mt-4 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-white/40 leading-relaxed">
          {label}
        </dt>
      </div>
    </motion.div>
  );
}
