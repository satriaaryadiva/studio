"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Brand Dilayani" },
  { value: "6", label: "Core Services" },
  { value: "3+", label: "Tahun di Medan" },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
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

export default function AboutUplift() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  // Text block slides slightly
  const textY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section ref={sectionRef} id="about" className="relative bg-theme overflow-hidden py-28 md:py-40 border-b border-theme-md">
      <Container className="relative z-10">

        {/* Section label */}
        <FadeUp className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="h-px w-10 bg-[#9E8976]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
            About UPLIFT
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left: Image with parallax */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-theme-surface border border-theme-md group">
              <motion.img
                src="https://images.unsplash.com/photo-1542744173-8e7e5141b2b1?auto=format&fit=crop&q=80&w=1200"
                alt="UPLIFT Strategy"
                className="w-full h-full object-cover transition-[filter] duration-700 group-hover:brightness-90"
                style={{ y: imageY, scale: 1.2 }}
              />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 p-5 bg-theme-surface/80 backdrop-blur-md border border-theme-md">
                <p className="text-3xl font-black text-theme font-freight leading-none">2021</p>
                <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976] mt-2">Established in Medan</p>
              </div>
            </div>
          </div>

          {/* Right: Headline + Copy + Stats with parallax */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 flex flex-col gap-10 order-1 lg:order-2"
          >
            <div>
              <FadeUp>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-theme leading-tight tracking-tighter font-freight uppercase">
                  Your Omnichannel<br />
                  <span className="text-[#9E8976]">Growth Partner</span><br />
                  in Medan
                </h2>
              </FadeUp>

              <FadeUp delay={0.08}>
                <p className="mt-8 text-lg md:text-xl font-semibold text-theme leading-relaxed font-sans max-w-2xl">
                  UPLIFT adalah omnichannel marketing agency yang membantu brand tumbuh melalui sistem, bukan sekadar konten.
                </p>
              </FadeUp>

              <FadeUp delay={0.14}>
                <p className="mt-4 text-base text-theme-2 leading-relaxed font-sans max-w-xl">
                  Kami merancang ekosistem yang terhubung — dari awareness, konversi, fulfillment, hingga loyalitas jangka panjang.
                </p>
              </FadeUp>
            </div>

            {/* Stats */}
            <FadeUp delay={0.2} className="grid grid-cols-3 gap-8 py-8 border-y border-theme-md">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-black text-theme font-freight leading-none">{s.value}</p>
                  <p className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#9E8976] mt-2 leading-tight">{s.label}</p>
                </div>
              ))}
            </FadeUp>

            {/* Tags */}
            <FadeUp delay={0.26} className="flex flex-wrap gap-2">
              {["Social Media", "Website", "E-Commerce", "Produksi", "Omnichannel"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-theme-md bg-theme-surface text-[10px] font-sans font-bold uppercase tracking-widest text-theme-2"
                >
                  {tag}
                </span>
              ))}
            </FadeUp>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
