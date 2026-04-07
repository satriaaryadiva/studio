"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const cultureItems = [
  {
    title: "Strategi Terukur",
    description: "Kami tidak hanya berkreasi, kami memastikan setiap langkah didukung oleh data dan tujuan yang jelas."
  },
  {
    title: "Kreativitas Tanpa Batas",
    description: "Mendorong batas-batas visual dan storytelling untuk membuat brand Anda menonjol di pasar."
  },
  {
    title: "Inovasi & Teknologi",
    description: "Memanfaatkan teknologi terbaru untuk memberikan insight yang mendalam dan hasil yang optimal."
  }
];

export default function Cultures() {
  return (
    <section id="culture" className="bg-neutral-950 py-28 md:py-40 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-12">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <div className="h-px w-10 bg-[#9E8976]" />
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                        Our Culture
                    </span>
                    <div className="h-px w-10 bg-[#9E8976]" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center leading-[0.9] tracking-tighter font-freight uppercase mb-12 lg:mb-20"
                >
                    Menyeimbangkan kreativitas <br />
                    <span className="text-[#9E8976]">dengan hasil nyata.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {cultureItems.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:border-[#9E8976]/30 transition-all duration-500 group"
                        >
                            <h3 className="text-2xl font-black text-white tracking-tight uppercase font-freight mb-5 group-hover:text-[#9E8976] transition-colors">
                                {c.title}
                            </h3>
                            <p className="text-sm md:text-base text-white/30 font-sans leading-relaxed">
                                {c.description}
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
