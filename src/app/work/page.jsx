"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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

// ─── Project Card ────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.brand}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#9E8976]/20 flex items-center justify-center"
        >
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Result badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
          <span className="text-[10px] font-sans font-black text-[#9E8976] uppercase tracking-wider">{project.result}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 bg-theme-surface border-t border-theme">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[8px] font-sans font-black uppercase tracking-[0.3em] px-2 py-1 rounded-md bg-theme-chip border border-theme-md text-theme-2">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-black font-freight uppercase text-theme tracking-tight leading-tight mb-2">
          {project.brand}
        </h3>
        <p className="text-xs text-theme-2 leading-relaxed font-sans line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

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
          2. FILTER TABS + GRID
      ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 border-b border-theme">
        <Container>
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-14 md:mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] font-sans font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full border transition-all duration-400
                  ${activeFilter === cat
                    ? "bg-[#9E8976] text-white border-[#9E8976]"
                    : "bg-transparent text-theme-2 border-theme-md hover:border-[#9E8976] hover:text-[#9E8976]"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-theme-3 font-sans text-sm">Belum ada proyek untuk kategori ini.</p>
            </div>
          )}
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          3. STATS — always dark
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-20 md:py-28 border-b border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/8">
            {[
              { value: "50+", label: "Brand Dikelola" },
              { value: "200+", label: "Kampanye Diluncurkan" },
              { value: "10M+", label: "Total Reach" },
              { value: "4.2x", label: "Avg. ROAS" },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.07} className="px-8 py-6 text-center">
                <p className="text-4xl md:text-6xl font-black font-freight text-white tracking-tighter leading-none">{s.value}</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-white/40 mt-3">{s.label}</p>
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
          5. CTA — always dark
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 md:py-40">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] block mb-8">Next Project</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-freight uppercase tracking-tighter leading-[0.85] text-white mb-10">
                Brand Anda<br />Bisa Jadi<br /><span className="text-[#9E8976]">Yang Berikutnya</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-sans leading-relaxed max-w-2xl mx-auto mb-14">
                Setiap proyek dimulai dari satu percakapan. Ceritakan tantangan Anda dan kami akan merancang solusi yang tepat.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-[#9E8976]/20"
              >
                Mulai Konsultasi
                <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 group-hover:translate-x-1.5 transition-transform"><path d="M16 3 10 .5v2H0v1h10v2L16 3Z" /></svg>
              </Link>
              <Link href="/services" className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
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
