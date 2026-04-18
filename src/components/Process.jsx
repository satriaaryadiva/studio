"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BigCTA from "./BigCTA";

const steps = [
  {
    id: "01",
    title: "Diagnosa & Strategi",
    description: "Menganalisis brand, audiens, dan performa saat ini untuk menyusun arah pemasaran yang jelas, relevan, dan terukur.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e5141b2b1?auto=format&fit=crop&q=80&w=1200",
    tags: ["Research", "Discovery", "Foundation"],
  },
  {
    id: "02",
    title: "Eksekusi Kreatif",
    description: "Produksi konten visual, copywriting, dan kampanye yang terarah sesuai identitas brand dan channel tujuan.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    tags: ["Design", "Content", "Production"],
  },
  {
    id: "03",
    title: "Analisa & Optimasi",
    description: "Mengolah data secara berkala dan menyempurnakan performa setiap channel untuk efisiensi budget dan konversi maksimal.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Analytics", "Strategy", "A/B Testing"],
  },
  {
    id: "04",
    title: "Scale & Growth",
    description: "Mengembangkan strategi yang terbukti berhasil menjadi sistem yang stabil untuk pertumbuhan brand jangka panjang.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    tags: ["Execution", "Stability", "Expansion"],
  },
];

function StepRow({ s, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row gap-12  items-center mb-32  ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Image Panel */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="w-full lg:col-span-6 overflow-hidden aspect-[16/10] bg-theme-surface border border-theme-md relative group"
      >
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-full object-cover    transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity" />
        
        {/* Caption watermark */}
        <div className="absolute bottom-8 left-8 right-8 pointer-events-none select-none">
          <span className="text-[6rem] md:text-[8rem] font-black font-freight text-theme opacity-[0.05] leading-none transition-opacity group-hover:opacity-10">
            {s.id}
          </span>
        </div>
      </motion.div>

      {/* Content Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="w-full lg:col-span-6 flex flex-col gap-6"
      >
        <div className="flex items-center gap-4 mb-2">
            <span className="text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976]">Phase {s.id}</span>
            <div className="h-px flex-1 bg-theme-md" />
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-freight text-theme uppercase tracking-tighter leading-[0.9]">
          {s.title}
        </h3>
        
        <p className="text-base md:text-lg text-theme-2 font-sans leading-relaxed max-w-xl">
          {s.description}
        </p>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {s.tags.map(t => (
            <span key={t} className="px-3 py-1 bg-theme-chip rounded-full border border-theme-md text-[9px] font-bold uppercase tracking-widest text-theme-3">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
      
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="bg-theme py-28 md:py-40 border-t border-theme-md">
      <Container>
        
        {/* Header */}
        <div className="max-w-4xl mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-[#9E8976]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
              Workflow Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-theme leading-[0.9] tracking-tighter font-freight uppercase"
          >
            How UPLIFT <br />
            <span className="text-[#9E8976]">Constructs Growth.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-base md:text-lg text-theme-2 leading-relaxed font-sans max-w-xl"
          >
            Proses kerja kami yang terstruktur dirancang untuk memastikan brand Anda mencapai target audiens yang tepat dengan dampak yang terukur.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-10">
          {steps.map((s, i) => (
            <StepRow key={s.id} s={s} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <BigCTA />
        </div>

      </Container>
    </section>
  );
}
