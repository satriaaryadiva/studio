"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const values = [
  {
    title: "Strategi yang jelas",
    description: "Setiap tindakan pemasaran didasarkan pada strategi yang terstruktur dan tujuan yang jelas."
  },
  {
    title: "Brand Presence Konsisten",
    description: "Memastikan bahwa suara dan visual brand Anda terus hadir dan relevan di semua saluran."
  },
  {
    title: "Visual & Storytelling Kuat",
    description: "Menceritakan kisah brand Anda dengan cara yang menarik secara visual dan emosional."
  },
  {
    title: "Berbasis Data",
    description: "Setiap keputusan strategis tidak hanya dari asumsi, melainkan didukung oleh analisis data yang komprehensif."
  },
  {
    title: "Partner Kreatif Andalan",
    description: "Lebih dari sekadar agensi, kami adalah ekstensi dari tim Anda yang berdedikasi untuk kesuksesan."
  }
];

export default function Values() {
  return (
    <section id="values" className="bg-neutral-900/40 py-28 md:py-40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#9E8976]/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Sticky Headline */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                Our Values
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[0.9] tracking-tighter font-freight uppercase mb-12 lg:mb-20"
            >
              Lebih sedikit beban, <br />
              <span className="text-[#9E8976]">lebih fokus ke bisnis.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-y-20">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-5 border-l border-white/10 pl-8 group"
                >
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976]/40 group-hover:text-[#9E8976] transition-colors">
                    Value {i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase font-freight">
                    {v.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/30 font-sans leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
