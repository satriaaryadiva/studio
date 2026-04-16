"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import { servicesData } from "@/constants";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ConsultationForm from "@/components/ConsultationForm";
import PageHero from "@/components/PageHero";
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

// ─── Helpers ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-8 bg-[#9E8976]" />
      <span className="text-[11px] font-sans font-black uppercase tracking-[0.55em] text-[#9E8976]">{children}</span>
    </div>
  );
}

// ─── Card for each service ───────────────────────────────────────────
function ServiceCard({ service, index, isActive, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`group relative cursor-pointer border-t border-theme py-8 md:py-10 transition-colors duration-700
        ${isActive ? "bg-[#9E8976]/[0.04]" : "hover:bg-[#9E8976]/[0.02]"}`}
    >
      {/* Left accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#9E8976] transition-transform duration-700 origin-top ${isActive ? "scale-y-100" : "scale-y-0"}`} />

      <div className="flex items-start gap-6 md:gap-10 pl-6 md:pl-8">
        {/* Number + Icon */}
        <div className="flex flex-col items-center gap-4 flex-none w-10">
          <span className={`text-[11px] font-sans font-black tracking-[0.4em] transition-colors duration-500 ${isActive ? "text-[#9E8976]" : "text-theme-3"}`}>
            0{index + 1}
          </span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-[#9E8976] text-white" : "bg-theme-chip text-[#9E8976] group-hover:bg-[#9E8976]/10"}`}>
            {serviceIcons[service.id]}
          </div>
        </div>

        {/* Title/Content */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black font-freight uppercase tracking-tighter leading-none transition-colors duration-500 ${isActive ? "text-[#9E8976]" : "text-theme"}`}>
            {service.title}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-5 text-sm md:text-base text-theme-2 leading-relaxed font-sans max-w-2xl">
                  {service.details}
                </p>

                {/* Features */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.features.slice(0, 6).map((f, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9E8976] mt-2 flex-none group-hover/item:scale-150 transition-transform" />
                      <span className="text-[13px] text-theme-2 leading-tight font-sans group-hover/item:text-theme transition-colors">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tag + Link */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-[9px] font-sans font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border border-theme-md text-theme-2">
                    {service.id.replace("-", " ")}
                  </span>
                  <Link href="/contact" className="text-[10px] font-sans font-black uppercase tracking-widest text-[#9E8976] hover:underline">
                    Konsultasi →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Arrow */}
        <div className={`flex-none pt-2 transition-transform duration-500 ${isActive ? "rotate-90" : ""}`}>
          <svg viewBox="0 0 16 6" className="h-3 w-5 text-theme-3" fill="currentColor">
            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [activeId, setActiveId] = useState(servicesData[0].id);

  return (
    <main className="bg-theme text-theme" style={{ overflowX: "clip" }}>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <PageHero
        label="Our Services"
        title={<>Apa yang UPLIFT<br /><span className="text-[#9E8976]">bisa bantu</span> untuk<br />Brand Anda?</>}
        description="Kami mengintegrasikan strategi, kreativitas, dan teknologi menjadi satu ekosistem — agar setiap Rupiah yang Anda investasikan memberikan dampak nyata."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Strategy and Services"
        badge={{ value: "7+", label: "Layanan Core" }}
        watermark="SERVICES"
      />

      {/* ══════════════════════════════════════════════
          2. ALL SERVICES — full accordion list
      ══════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 border-b border-theme bg-theme-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Left: list */}
            <div className="lg:col-span-7">
              <div className="mb-12">
                <SectionLabel>Layanan Kami</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-black font-freight uppercase tracking-tighter text-theme leading-tight">
                  One Ecosystem.<br /><span className="text-[#9E8976]">Every Channel.</span>
                </h2>
              </div>

              {servicesData.map((s, i) => (
                <ServiceCard
                  key={s.id}
                  service={s}
                  index={i}
                  isActive={activeId === s.id}
                  onClick={() => setActiveId(activeId === s.id ? null : s.id)}
                />
              ))}
              <div className="border-t border-theme" />
            </div>

            {/* Right: sticky image panel */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start">
              <div className="relative overflow-hidden bg-neutral-900 border border-theme shadow-2xl" style={{ aspectRatio: "10/13", maxHeight: "calc(100vh - 9rem)" }}>
                <AnimatePresence mode="wait">
                  {activeId && (
                    <motion.div
                      key={activeId}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={servicesData.find(s => s.id === activeId)?.image}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ filter: "grayscale(0.2) brightness(0.7)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <AnimatePresence mode="wait">
                    {activeId && (
                      <motion.div
                        key={activeId}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-[#9E8976] block mb-3">
                          {activeId?.replace("-", " ")}
                        </span>
                        <h3 className="text-2xl font-black font-freight uppercase text-white tracking-tight leading-none">
                          {servicesData.find(s => s.id === activeId)?.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          3. PROCESS / WORKFLOW — always dark
      ══════════════════════════════════════════════ */}
      <Process />

      {/* ══════════════════════════════════════════════
          4. PRICING — always dark
      ══════════════════════════════════════════════ */}
      <Pricing />

      {/* ══════════════════════════════════════════════
          5. FAQ
      ══════════════════════════════════════════════ */}
      <FAQ />

      {/* ══════════════════════════════════════════════
          6. CTA & CONSULTATION
      ══════════════════════════════════════════════ */}
      <ConsultationForm />

    </main>
  );
}
