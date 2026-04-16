"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import Clients from "@/components/Clients";
import PageHero from "@/components/PageHero";

// ─── Portfolio Data ──────────────────────────────────────────────────
const categories = ["All", "Social Media", "Branding", "Content", "Ads", "E-Commerce", "Web"];

const projects = [
  {
    id: 1,
    brand: "Kedai Bumi Nusantara",
    category: "Social Media",
    tags: ["Social Media", "Content"],
    description: "Membangun ekosistem digital F&B dari nol — konten, community management, dan ads strategy terintegrasi.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800&h=600",
    result: "+320% Engagement",
  },
  {
    id: 2,
    brand: "Medan Craft Co.",
    category: "Branding",
    tags: ["Branding", "Content"],
    description: "Re-branding total untuk brand kerajinan lokal — identitas visual, packaging, dan brand guidelines.",
    image: "https://images.unsplash.com/photo-1558655146-9f4f7b6b5d5a?auto=format&fit=crop&q=80&w=800&h=600",
    result: "Brand Recall +65%",
  },
  {
    id: 3,
    brand: "Elevate Skincare",
    category: "Content",
    tags: ["Content", "Social Media"],
    description: "Produksi konten premium untuk brand skincare — foto produk, video reels, dan storytelling visual.",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=800&h=600",
    result: "2M+ Video Views",
  },
  {
    id: 4,
    brand: "Sumatera Fresh",
    category: "Ads",
    tags: ["Ads", "E-Commerce"],
    description: "Kampanye iklan Meta & Google untuk brand makanan sehat — ROAS 4.2x dalam 3 bulan pertama.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800&h=600",
    result: "ROAS 4.2x",
  },
  {
    id: 5,
    brand: "Rumah Mode ID",
    category: "Social Media",
    tags: ["Social Media", "Branding"],
    description: "Manajemen media sosial fashion brand — membangun komunitas 100K+ followers organik.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800&h=600",
    result: "100K+ Followers",
  },
  {
    id: 6,
    brand: "Akar Kopi",
    category: "E-Commerce",
    tags: ["E-Commerce", "Ads"],
    description: "Optimalisasi Shopee & Tokopedia — dari setup toko hingga ads management dengan conversion tracking.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600",
    result: "+180% Revenue",
  },
  {
    id: 7,
    brand: "Tekad Digital",
    category: "Web",
    tags: ["Web", "Branding"],
    description: "Website company profile dengan CMS — desain modern, performa tinggi, SEO-ready.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    result: "PageSpeed 98",
  },
  {
    id: 8,
    brand: "Warung Nusantara",
    category: "Content",
    tags: ["Content", "Social Media"],
    description: "Produksi video storytelling brand kuliner — narasi emosional yang membangun koneksi dengan audiens.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800&h=600",
    result: "5M+ Impressions",
  },
];

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

// ─── Project Card — parallax + staggered sizes ───────────────────────
function ProjectCard({ project, index, size = "default" }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  // Scale reveal
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Aspect ratio based on size — compact proportions
  const aspectClass = size === "large"
    ? "aspect-[3/5]"
    : size === "wide"
      ? "aspect-[16/9]"
      : "aspect-[3/2]";

  return (
    <motion.div
      ref={cardRef}
      layout
      style={{ scale, opacity }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer will-change-transform"
    >
      {/* Image with parallax */}
      <div className={`${aspectClass} overflow-hidden relative`}>
        <motion.img
          src={project.image}
          alt={project.brand}
          className="w-full h-full object-cover transition-[filter] duration-700 group-hover:brightness-90"
          style={{ y: imageY, scale: 1.15 }}
          loading="lazy"
        />

        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-5 h-5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Result badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
          <span className="text-[9px] font-sans font-bold text-white uppercase tracking-wider">{project.result}</span>
        </div>
      </div>

      {/* Info block — title, category, description */}
      <div className="mt-5 md:mt-6">
        {/* Category */}
        <span className="text-[9px] md:text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976] block mb-2">
          {project.category}
        </span>

        {/* Brand name — large Arinoe */}
        <h3 className="text-xl md:text-2xl font-freight font-black text-theme uppercase tracking-tight leading-tight mb-2">
          {project.brand}
        </h3>

        {/* Description */}
        <p className="text-[13px] md:text-sm font-sans text-theme-2 leading-relaxed max-w-md">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Staggered Layout Helper — assigns size and column offset ─────────
// Creates a scattered, organic layout like electranetwork.id
// Pattern: large-left + small-right, then small-left + large-right, etc.
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

// ─── Page ────────────────────────────────────────────────────────────
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <main className="bg-theme text-theme" style={{ overflowX: "clip" }}>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <PageHero
        label="Portfolio"
        title={<>Karya<br /><span className="text-[#9E8976]">Kami</span></>}
        description="Solusi terukur untuk pertumbuhan brand nyata. Setiap proyek kami dirancang untuk memberikan dampak yang bisa dibuktikan."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Portfolio Showcase"
        badge={{ value: "200+", label: "Kampanye Selesai" }}
        watermark="PORTFOLIO"
      />

      {/* ══════════════════════════════════════════════
          2. SECTION HEADER + FILTER + GRID
      ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 border-b border-theme-md">
        <Container>
          {/* Section header */}
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
                Dari strategi hingga eksekusi — setiap proyek dirancang untuk dampak nyata. Filter berdasarkan layanan untuk menemukan karya yang relevan.
              </p>
            </FadeUp>
          </div>

          {/* Filter bar — pill style */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 mb-14 md:mb-20">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[10px] font-sans font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full border transition-all duration-300
                    ${activeFilter === cat
                      ? "bg-[#9E8976] text-white border-[#9E8976]"
                      : "bg-transparent text-theme-3 border-theme-md hover:border-[#9E8976] hover:text-[#9E8976]"}`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-[10px] font-sans font-bold text-theme-3 tracking-wider hidden md:block">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""}
              </span>
            </div>
          </FadeUp>

          {/* Grid — staggered masonry layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-x-6 md:gap-x-10 gap-y-14 md:gap-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const pattern = layoutPattern[i % layoutPattern.length];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    className={`${pattern.colSpan} ${pattern.offset}`}
                  >
                    <ProjectCard project={project} index={i} size={pattern.size} />
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

      {/* ══════════════════════════════════════════════
          3. STATS
      ══════════════════════════════════════════════ */}
      <section className="bg-theme-muted py-20 md:py-28 border-b border-theme-md">
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

      {/* ══════════════════════════════════════════════
          4. CLIENTS
      ══════════════════════════════════════════════ */}
      <Clients />

      {/* ══════════════════════════════════════════════
          5. CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-theme py-28 md:py-40 border-t border-theme-md">
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

      {/* ══════════════════════════════════════════════
          6. CONSULTATION FORM
      ══════════════════════════════════════════════ */}
      <ConsultationForm />

    </main>
  );
}
