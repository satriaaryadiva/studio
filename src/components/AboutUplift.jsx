"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Brand Dilayani" },
  { value: "6", label: "Core Services" },
  { value: "3+", label: "Tahun di Medan" },
];

export default function AboutUplift() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const smoothX = useSpring(bgX, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} id="about" className="relative bg-theme overflow-hidden py-32 md:py-20">

      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden pb-2">
        <motion.span
          style={{ x: smoothX, color: "var(--theme-watermark)" }}
          className="text-[15vw] font-black tracking-tighter whitespace-nowrap leading-none font-freight uppercase no-theme-transition"
        >
          omnichannel growth&nbsp;&nbsp;omnichannel growth
        </motion.span>
      </div>

      {/* Glow accent */}
      <div className="absolute top-1/3 left-0 w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: "var(--theme-glow)" }} />

      <Container className="relative z-10">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-20"
        >
          <div className="h-px w-10 bg-[#9E8976]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
            About UPLIFT
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left: Interactive Media */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-neutral-900 border border-theme shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e5141b2b1?auto=format&fit=crop&q=80&w=1200" 
                alt="UPLIFT Strategy"
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-3xl font-black text-white font-freight leading-none">2021</p>
                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/50 mt-2">Established in Medan</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Headline + Copy + Stats */}
          <div className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-theme leading-[0.9] tracking-tighter font-freight uppercase"
              >
                Your Omnichannel<br />
                <span className="text-[#9E8976]">Growth Partner</span><br />
                in Medan
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="mt-8 text-xl md:text-2xl font-semibold text-theme leading-relaxed font-sans max-w-2xl"
              >
                UPLIFT adalah omnichannel marketing agency yang membantu brand tumbuh melalui sistem, bukan sekadar konten.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="mt-4 text-base md:text-lg text-theme-2 leading-relaxed font-sans max-w-xl"
              >
                Kami merancang ekosistem yang terhubung — dari awareness, konversi, fulfillment, hingga loyalitas jangka panjang.
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-10 border-y border-theme-md">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black text-theme font-freight leading-none">{s.value}</p>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-theme-2 mt-2 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Brand chips */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["Social Media", "Website", "E-Commerce", "Produksi", "Omnichannel"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-sans font-black uppercase tracking-[0.35em] text-theme-chip bg-theme-chip border border-theme-chip rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
