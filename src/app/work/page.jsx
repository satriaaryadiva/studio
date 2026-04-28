"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import Container from "@/components/Container";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import Clients from "@/components/Clients";
import PageHero from "@/components/PageHero";

import { projects, categories } from "@/data/projects";

// ─── Helpers ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Video Modal Component ──────────────────────────────────────────
function VideoModal({ project, onClose }) {
  const lenis = useLenis();
  
  useEffect(() => {
    if (project) {
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };
  }, [project, lenis]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-1000000 flex items-center justify-center bg-black/95 sm:p-6 lg:p-12 overflow-hidden"
    >
      {/* Immersive Backdrop — Global Tap-to-Close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-theme/80 backdrop-blur-3xl z-0"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-dvh-auto max-w-[1600px] sm:max-h-[min(90vh,900px)] flex flex-col md:flex-row bg-theme-surface shadow-2xl sm:rounded-3xl overflow-y-auto sm:overflow-hidden z-10 custom-scrollbar"
        data-lenis-prevent="true"
      >
        {/* UNIFIED CLOSE BUTTON — High Visibility */}
        <button
          onClick={onClose}
          className="fixed sm:absolute top-6 right-6 z-1000000 w-12 h-12 rounded-full bg-theme-surface/40 backdrop-blur-xl border border-theme flex items-center justify-center text-theme shadow-2xl hover:bg-theme hover:text-theme-surface transition-all duration-300 group"
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 group-hover:rotate-90 transition-transform">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* MOBILE HEADER (Info Only) */}
        <div className="flex md:hidden items-center px-6 py-5 bg-theme-surface border-b border-theme sticky top-0 z-9999">
          <div className="flex flex-col">
             <span className="text-[9px] font-sans font-black uppercase tracking-[0.2em] text-[#9E8976]">Viewing Project</span>
             <span className="text-4xl text-center font-freight font-black text-theme uppercase tracking-tight">{project.brand}</span>
          </div>
        </div>

        {/* 1. VIDEO SECTOR */}
        <div className="relative flex-none md:grow h-[35vh] md:h-auto bg-black flex items-center justify-center">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              controls
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={project.image}
              alt={project.brand}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* 2. INFO SECTOR */}
        <div 
          className="grow md:flex-none w-full md:w-[400px] lg:w-[480px] p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-theme-surface border-t md:border-t-0 md:border-l border-theme sm:overflow-y-auto custom-scrollbar"
        >
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-6 bg-[#9E8976]" />
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976]">
                  {project.category}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-freight font-black text-theme uppercase tracking-tighter leading-[0.9] mb-8">
                {project.brand}
              </h2>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-theme-3 uppercase tracking-[0.2em] mb-3">Tantangan & Solusi</h4>
                  <p className="text-theme-2 font-sans text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-theme">
                  <h4 className="text-[10px] font-sans font-bold text-theme-3 uppercase tracking-[0.2em] mb-4">Hasil Terukur</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-freight font-black text-[#9E8976] uppercase italic tracking-tighter">
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 pt-12 border-t border-theme flex flex-col gap-6"
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] flex items-center justify-center hover:bg-[#9E8976] hover:text-white transition-all duration-500 shadow-xl"
              style={{ backgroundColor: 'var(--theme-text)', color: 'var(--theme-bg)' }}
            >
              Ajukan Brief Serupa
            </Link>
            
            <button
              onClick={onClose}
              className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-theme-3 hover:text-theme transition-colors text-center hidden md:block"
            >
              Kembali ke Galeri [ESC]
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}


// ─── Project Card — parallax + staggered sizes ───────────────────────
function ProjectCard({ project, index, size = "default", onClick }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax: reduced movement to keep content visible
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Aspect ratio based on size
  const aspectClass = size === "large"
    ? "aspect-[3/4]"
    : size === "wide"
      ? "aspect-[16/9]"
      : "aspect-[4/3]";

  return (
    <div 
      onClick={() => onClick(project)} 
      className="block group cursor-pointer will-change-transform"
    >
      <motion.div
        ref={cardRef}
        layout
        style={{ scale, opacity }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: index * 0.04, ease: [0.1, 1, 0.5, 1] }}
      >
        {/* Media Container */}
        <div className={`${aspectClass} transition-all overflow-hidden relative bg-theme-muted rounded-sm  `}>
          {possibleVideo(project) ? (
            <motion.video
              ref={videoRef}
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-700  group-hover:brightness-90 dark:group-hover:brightness-75"
              style={{ y: imageY }}
            />
          ) : (
            <motion.img
              src={project.image}
              alt={project.brand}
              className="w-full h-full object-cover transition-all 
              duration-700 dark:group-hover:brightness-75"
              style={{ y: imageY }}
              loading="lazy"
            />
          )}

          {/* Hover Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-13 h-13 rounded-full bg-theme border border-theme flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-theme ml-1 ">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Result badge — Premium glassmorphic style */}
          <div className="absolute top-4 right-4 bg-theme-surface/60 backdrop-blur-md rounded-full px-4 py-2 z-10 border border-theme shadow-lg pointer-events-none transition-transform duration-500 group-hover:scale-105">
            <span className="text-[10px] md:text-xs font-sans font-black text-theme uppercase tracking-[0.2em] whitespace-nowrap">
              {project.result}
            </span>
          </div>
        </div>

        {/* Info block */}
        <div className="mt-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976] block mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl font-freight font-black text-theme uppercase tracking-tight leading-tight mb-3">
            {project.brand}
          </h3>
          <p className="text-[13px] md:text-sm font-sans text-theme-2 leading-relaxed max-w-md line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// Helper to check if project has video
function possibleVideo(p) {
  return p && p.video && p.video.length > 0;
}

// ─── Staggered Layout Helper ─────────────────────────────────────────
const layoutPattern = [
  { size: "wide", colSpan: "md:col-span-7", offset: "" },
  { size: "default", colSpan: "md:col-span-5", offset: "md:mt-24" },
  { size: "default", colSpan: "md:col-span-5", offset: "" },
  { size: "wide", colSpan: "md:col-span-7", offset: "md:mt-16" },
  { size: "wide", colSpan: "md:col-span-6", offset: "md:mt-10" },
  { size: "default", colSpan: "md:col-span-6", offset: "md:mt-32" },
  { size: "wide", colSpan: "md:col-span-7", offset: "" },
  { size: "default", colSpan: "md:col-span-5", offset: "md:mt-20" },
];

// ─── Main Page ──────────────────────────────────────────────────────────
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <main className={`bg-theme text-theme ${selectedProject ? "relative z-10000" : ""}`} style={{ overflowX: "clip" }}>
      
      {/* 1. HERO */}
      <PageHero
        label="Portfolio"
        title={<>Karya<br /><span className="text-[#9E8976]">Kami</span></>}
        description="Solusi terukur untuk pertumbuhan brand nyata. Setiap proyek kami dirancang untuk memberikan dampak yang bisa dibuktikan."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Portfolio Showcase"
        badge={{ value: "200+", label: "Kampanye Selesai" }}
        watermark="PORTFOLIO"
      />

      {/* 2. GRID SECTION */}
      <section className="py-20 border-b border-theme-md">
        <Container>
          <div className="max-w-2xl mb-16 md:mb-20">
            <FadeUp>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-8 bg-[#9E8976]" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-[#9E8976]">
                  All Projects
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-freight font-black uppercase tracking-tighter text-theme leading-[0.95] mb-5">
                Proyek yang<br />
                <span className="text-theme-2">Bicara Hasil</span>
              </h2>
              <p className="text-sm md:text-base font-sans text-theme-2 leading-relaxed max-w-lg">
                Klik proyek untuk melihat kampanye lengkap secara mendalam.
              </p>
            </FadeUp>
          </div>

          {/* Filter bar */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 mb-14 md:mb-20">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] font-sans font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full border transition-all duration-300
                    ${activeFilter === cat
                      ? "bg-[#9E8976] text-white border-[#9E8976]"
                      : "bg-transparent text-theme-3    hover:text-[#9E8976]"}`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-[10px] font-sans font-bold text-theme-3 tracking-wider hidden md:block">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""}
              </span>
            </div>
          </FadeUp>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const pattern = layoutPattern[i % layoutPattern.length];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    className={`${pattern.colSpan} ${pattern.offset}`}
                  >
                    <ProjectCard 
                      project={project} 
                      index={i} 
                      size={pattern.size} 
                      onClick={setSelectedProject}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-theme-3 font-sans text-sm mb-4">Belum ada proyek untuk kategori ini.</p>
              <button
                onClick={() => setActiveFilter("All")}
                className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#9E8976] hover:underline"
              >
                Tampilkan Semua →
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* 3. STATS */}
      <section className="bg-theme-muted py-20 border-b border-theme-md">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-theme-md">
            {[
              { value: "50+", label: "Brand Dikelola" },
              { value: "200+", label: "Kampanye Diluncurkan" },
              { value: "10M+", label: "Total Reach" },
              { value: "4.2x", label: "Avg. ROAS" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.07} className="md:px-8 py-4 text-center">
                <p className="text-4xl md:text-6xl font-black font-freight text-theme tracking-tighter leading-none">{s.value}</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-theme-3 mt-3">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <Clients />

      {/* 4. CTA */}
      <section className="bg-theme py-20 border-t border-theme-md">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] block mb-8">Next Project</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-freight uppercase tracking-tighter leading-[0.85] text-theme mb-10">
                Brand Anda<br />Bisa Jadi<br /><span className="text-[#9E8976]">Yang Berikutnya</span>
              </h2>
              <p className="text-base md:text-lg text-theme-2 font-sans leading-relaxed max-w-2xl mx-auto mb-14">
                Setiap proyek dimulai dari satu percakapan. Ceritakan tantangan Anda dan kami akan merancang solusi yang tepat.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-theme-surface hover:text-[#9E8976] transition-all duration-500 shadow-xl shadow-[#9E8976]/20 border border-transparent hover:border-theme-md"
              >
                Mulai Konsultasi
                <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 group-hover:translate-x-1.5 transition-transform"><path d="M16 3 10 .5v2H0v1h10v2L16 3Z" /></svg>
              </Link>
              <Link href="/services" className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-theme-3 hover:text-theme transition-colors">
                Lihat Layanan →
              </Link>
            </FadeUp>
          </div>
        </Container>
      </section>

      <ConsultationForm />

      {/* Video Modal Overlay */}
      <AnimatePresence >
        {selectedProject && (
          <VideoModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}
