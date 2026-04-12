"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

import { servicesData } from "@/constants";
import { 
  HiOutlineHashtag, 
  HiOutlineVideoCamera, 
  HiOutlineSparkles, 
  HiOutlineChartBar, 
  HiOutlineTicket, 
  HiOutlineRocketLaunch, 
  HiOutlineCodeBracket 
} from "react-icons/hi2";

const serviceIcons = {
  "social-media": <HiOutlineHashtag className="w-5 h-5" />,
  "content-production": <HiOutlineVideoCamera className="w-5 h-5" />,
  "branding": <HiOutlineSparkles className="w-5 h-5" />,
  "ads-strategy": <HiOutlineChartBar className="w-5 h-5" />,
  "offline-campaign": <HiOutlineTicket className="w-5 h-5" />,
  "digital-optimization": <HiOutlineRocketLaunch className="w-5 h-5" />,
  "web-development": <HiOutlineCodeBracket className="w-5 h-5" />,
};

// ── Desktop: hover-reveal image panel ──────────────────────────────
function ServiceListItem({ s, index, isActive, onHover }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => onHover(index)}
      className="group relative border-t border-theme cursor-default overflow-hidden"
    >
      {/* Background Hover Glow */}
      <motion.div
        animate={{ opacity: isActive ? 0.06 : 0 }}
        className="absolute inset-0 bg-[#9E8976] pointer-events-none"
      />

      <div className={`
        flex items-center gap-10 py-8 transition-all duration-700 relative z-10
        ${isActive ? "pl-6" : "pl-0"}
      `}>
        {/* Number + Icon */}
        <div className="flex flex-col items-center gap-4 flex-none w-10">
          <span className={`text-[11px] font-sans font-black tracking-[0.4em] transition-colors duration-500 ${isActive ? "text-[#9E8976]" : "text-theme-3"}`}>
            0{index + 1}
          </span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-[#9E8976] text-white" : "bg-theme-chip text-[#9E8976] group-hover:bg-[#9E8976]/10"}`}>
            {serviceIcons[s.id]}
          </div>
        </div>

        {/* Title + Short */}
        <div className="flex-1 min-w-0">
          <h3 className={`
            text-3xl lg:text-4xl font-black font-freight uppercase tracking-tighter leading-none transition-all duration-500
            ${isActive ? "text-theme translate-x-2" : ""}
          `}
          style={{ color: isActive ? "var(--theme-text)" : "var(--theme-service-inactive)" }}
          >
            {s.title}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-sm text-theme-2 leading-relaxed font-sans max-w-lg translate-x-2">
                  {s.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tag pill */}
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
          className={`
            hidden lg:inline text-[10px] font-sans font-bold uppercase tracking-[0.4em] rounded-full px-5 py-2 flex-none transition-all duration-500
            ${isActive
              ? "bg-[#9E8976] text-white"
              : "bg-theme-pill border border-theme-pill text-theme-pill"}
          `}
        >
          {s.id.replace("-", " ")}
        </motion.span>

        {/* Arrow */}
        <motion.span
          animate={{ x: isActive ? 10 : 0, opacity: isActive ? 1 : 0.15 }}
          transition={{ duration: 0.4 }}
          className="text-[#9E8976] flex-none pr-4"
        >
          <svg viewBox="0 0 16 6" className="h-3 w-6" fill="currentColor">
            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
          </svg>
        </motion.span>
      </div>
    </motion.div>
  );
}

// ── Mobile: card grid ───────────────────────────────────────────────
function MobileServiceCard({ s, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="rounded-[2rem] overflow-hidden border border-theme bg-theme-surface"
      style={{ boxShadow: "var(--theme-card-shadow)" }}
    >
      {/* Image */}
      <div className="aspect-[16/8] overflow-hidden relative group">
        <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70">
          {serviceIcons[s.id]}
        </div>

        <div className="absolute bottom-4 left-5 flex flex-col gap-1">
          <span className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976]">
            {s.id.replace("-", " ")}
          </span>
          <h3 className="text-xl font-black font-freight uppercase tracking-tight text-white leading-none">
            {s.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[14px] text-theme-2 leading-relaxed font-sans">{s.description}</p>

        <button
          onClick={() => setOpen(!open)}
          className="mt-6 flex items-center gap-3 text-[11px] font-sans font-bold uppercase tracking-widest text-theme-2 hover:text-[#9E8976] transition-colors"
        >
          {open ? 'Close Details' : 'View Details'}
          <motion.span animate={{ rotate: open ? 180 : 0 }}>
            <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4l5 5 5-5" />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-6 border-t border-theme">
                <p className="text-[14px] text-theme-2 leading-relaxed font-sans mb-6 italic">
                  {s.details}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {s.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#9E8976] mt-1.5 flex-none" />
                      <span className="text-[12px] text-theme-2 leading-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Main Section ────────────────────────────────────────────────────
export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-theme-surface py-28 md:py-44 border-t border-theme" style={{ overflowX: "clip" }}>
      <Container>

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-20 md:mb-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-10 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-theme tracking-tighter leading-[0.85] font-freight uppercase"
            >
              One Ecosystem.<br />
              <span className="text-[#9E8976]">Every Channel.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end gap-6"
          >
            <p className="text-base text-theme-2 max-w-xs leading-relaxed font-sans md:text-right">
              UPLIFT memberikan solusi omnichannel yang memastikan setiap titik sentuh konsumen Anda terhubung secara strategis.
            </p>
          </motion.div>
        </div>

        {/* ── DESKTOP: hover-reveal layout ── */}
        <div className="hidden md:grid md:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Service list */}
          <div className="md:col-span-7" onMouseLeave={() => setActiveIndex(0)}>
            {servicesData.map((s, i) => (
              <ServiceListItem
                key={s.id}
                s={s}
                index={i}
                isActive={activeIndex === i}
                onHover={setActiveIndex}
              />
            ))}
            <div className="border-t border-theme" />
          </div>

          {/* Right: Image panel — sticky, always visible while scrolling left list */}
          <div className="md:col-span-5 sticky top-28 self-start">
            <div className="relative rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl" style={{ aspectRatio: "10/12", maxHeight: "calc(100vh - 9rem)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={servicesData[activeIndex].image}
                    alt={servicesData[activeIndex].title}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(0.2) brightness(0.75)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                </motion.div>
              </AnimatePresence>

              {/* Float Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#9E8976] block mb-4">
                      {servicesData[activeIndex].id.replace("-", " ")}
                    </span>
                    <h3 className="text-3xl font-black font-freight uppercase text-white tracking-tight leading-none mb-6">
                      {servicesData[activeIndex].title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-sans line-clamp-4">
                      {servicesData[activeIndex].details}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Ghost number watermark */}
              <div className="absolute top-8 right-10 select-none pointer-events-none overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20, rotate: 12 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -10, rotate: -12 }}
                    transition={{ duration: 0.6 }}
                    className="text-[8rem] font-black font-freight text-white opacity-5 leading-none block"
                  >
                    0{activeIndex + 1}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: card grid ── */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {servicesData.map((s, i) => (
            <MobileServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>

        {/* ── CTA Footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 md:mt-40 relative overflow-hidden bg-theme-muted border border-theme p-12 md:p-16 rounded-[4rem] text-center flex flex-col items-center gap-10"
          style={{ boxShadow: "var(--theme-card-shadow)" }}
        >
          {/* Background graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
               </pattern>
               <rect width="100" height="100" fill="url(#grid)" />
             </svg>
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black font-freight text-theme uppercase tracking-tighter leading-tight mb-6">
              Butuh strategi khusus untuk <br />
              <span className="text-[#9E8976]">percepatan brand Anda?</span>
            </h3>
            <p className="text-sm md:text-base text-theme-2 leading-relaxed font-sans">
              Kami merancang setiap layanan untuk bekerja secara harmonis dalam satu ekosistem digital. Mari bicarakan langkah besar berikutnya untuk brand Anda.
            </p>
          </div>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 bg-[#9E8976] px-12 py-6 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] text-white hover:bg-[#1A1612] hover:text-white transition-all duration-500 shadow-2xl shadow-[#9E8976]/20"
          >
            Mulai Sesi Strategi
            <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-2" fill="currentColor">
              <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
            </svg>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}
