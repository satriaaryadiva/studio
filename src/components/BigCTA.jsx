"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { motion } from "framer-motion";
import Noise from "./Noise";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function BigCTA() {
  return (
    <section className="relative w-full py-24 bg-theme overflow-hidden">
      <Container>
        <div className="relative group overflow-hidden bg-theme-surface rounded-[2.5rem] border border-theme-md shadow-2xl transition-all duration-700 hover:shadow-theme-card">
          
          {/* Subtle Noise Texture */}
          <Noise opacity={0.6} />

          {/* Decorative Corner Light Gradient */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-linear-to-br from-[#9E8976]/10 to-transparent blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-linear-to-tr from-[#9E8976]/5 to-transparent blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-20 flex flex-col items-center text-center">
            
            {/* Minimal Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#9E8976]/20 bg-theme-muted/50 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E8976] animate-pulse" />
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976]">
                  Elevate Your Business
                </span>
              </div>
            </motion.div>

            {/* Clean Editorial Headline */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-freight text-4xl md:text-6xl lg:text-7xl font-black text-theme leading-[1.1] mb-8 max-w-4xl tracking-tight"
            >
              Ready to <span className="italic font-thin">Uplift</span> your brand's digital presence?
            </motion.h2>

            {/* Informative Subheading */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm md:text-lg text-theme-2 font-sans mb-12 max-w-2xl leading-relaxed"
            >
              Bergabunglah dengan <span className="text-theme font-semibold">50+ brand</span> lainnya di Medan dan Indonesia yang telah membangun ekosistem digital terukur bersama kami.
            </motion.p>

            {/* Structured CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-5 mb-20"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#9E8976] text-white text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#8a7866] hover:translate-y-[-4px] shadow-lg shadow-[#9E8976]/20"
              >
                Konsultasi Gratis
                <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 transition-transform group-hover:translate-x-1.5">
                  <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
              </Link>
              <a
                href="https://wa.me/6282165101085"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-theme-md bg-theme text-theme text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] hover:translate-y-[-4px]"
              >
                Hubungi via WhatsApp
              </a>
            </motion.div>

            {/* Informative Grid Bottom */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-theme-md pt-12 text-left"
            >
              {[
                { label: "Our Office", value: "Jl. Gatot Subroto No. 19, Medan Petisah" },
                { label: "New Business", value: "upliftcrtv@gmail.com", href: "mailto:upliftcrtv@gmail.com" },
                { label: "Quick Chat", value: "0821 6510 1085", href: "https://wa.me/6282165101085" },
                { label: "Follow Us", value: "@upliftcreative.co", href: "https://instagram.com/upliftcreative.co" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9E8976]">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs md:text-sm font-medium text-theme-2 hover:text-theme transition-colors leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs md:text-sm font-medium text-theme-2 leading-snug">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
