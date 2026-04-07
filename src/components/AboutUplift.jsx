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
    <section ref={ref} id="about" className="relative bg-neutral-950 overflow-hidden py-32 md:py-40">

      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden pb-2">
        <motion.span
          style={{ x: smoothX }}
          className="text-[15vw] font-black tracking-tighter text-white/[0.025] whitespace-nowrap leading-none font-freight uppercase"
        >
          omnichannel growth&nbsp;&nbsp;omnichannel growth
        </motion.span>
      </div>

      {/* Glow accent */}
      <div className="absolute top-1/3 left-0 w-[40vw] h-[40vw] rounded-full bg-[#9E8976]/5 blur-[120px] pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 items-start">

          {/* Left: Headline + Stats */}
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[3.8rem] font-black text-white leading-[0.9] tracking-tighter font-freight uppercase"
            >
              Your Omnichannel{" "}
              <span className="text-[#9E8976]">Growth Partner</span>{" "}
              in Medan
            </motion.h2>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black text-white font-freight leading-none">{s.value}</p>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-neutral-500 mt-2 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-sm font-sans font-bold text-white/60 hover:text-white transition-colors"
              >
                Mulai Konsultasi
                <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Copy */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6 md:pt-4">
            {[
              {
                text: "UPLIFT adalah omnichannel marketing agency yang berbasis di Medan, dibangun untuk membantu brand tumbuh dari hulu ke hilir.",
                large: true,
              },
              {
                text: "Kami tidak hanya mengelola konten. Kami merancang sistem yang terhubung — dari awareness, konversi, fulfillment, hingga loyalitas jangka panjang.",
                large: false,
              },
              {
                text: "Dari social media dan dokumentasi hingga e-commerce, website, dan aktivasi brand offline, setiap channel bekerja bersama dengan satu tujuan — pertumbuhan yang nyata.",
                large: false,
              },
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={p.large
                  ? "text-xl md:text-2xl font-semibold text-white leading-relaxed font-sans"
                  : "text-base md:text-lg text-neutral-400 leading-relaxed font-sans"
                }
              >
                {p.text}
              </motion.p>
            ))}

            {/* Brand chips */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {["Medan", "Social Media", "Website", "E-Commerce", "Produksi", "Event", "Omnichannel"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-neutral-600 border border-neutral-800 rounded-full px-3 py-1"
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
