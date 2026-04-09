"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

const industries = [
  "F&B",
  "Fashion & Lifestyle",
  "Automotive",
  "Houseware & Home Living",
  "High-End Furniture & Appliance",
  "Education",
  "Beauty & Wellness",
  "Industrial Equipment & Packaging",
  "Animal Shelter & Non-Profit",
];

const loop = [...industries, ...industries];

export default function Industries() {
  return (
    <section id="industries" className="bg-neutral-950 py-28 md:py-44 overflow-hidden border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Text + Pills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                Expertise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[0.9] tracking-tighter font-freight uppercase mb-12"
            >
              Trusted Across<br />
              <span className="text-[#9E8976]">Diverse Industries</span>
            </motion.h2>

            <div className="mt-12 flex flex-wrap gap-3 font-sans">
              {industries.map((ind, i) => (
                <motion.span
                  key={ind}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 border border-white/10 rounded-full px-5 py-2.5 hover:border-[#9E8976] hover:text-white hover:bg-[#9E8976]/10 transition-all duration-300 cursor-default"
                >
                  {ind}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right: QR Card / Social Proof */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E8976]/10 blur-[64px] rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight font-freight uppercase leading-tight mb-6">
                See the Systems We've Built for Brands in Medan & Indonesia
              </h3>
              
              <p className="text-sm text-white/40 leading-relaxed font-sans mb-10">
                UPLIFT membantu brand tumbuh melalui ekosistem digital yang terintegrasi. Jelajahi portofolio kami untuk melihat hasil nyata.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                {/* QR Code */}
                <div className="relative group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#9E8976]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-28 h-28 rounded-2xl bg-white p-3 shadow-2xl">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                      <rect x="10" y="10" width="28" height="28" rx="4" fill="#111" />
                      <rect x="15" y="15" width="18" height="18" rx="2" fill="white" />
                      <rect x="20" y="20" width="8" height="8" fill="#111" />
                      <rect x="62" y="10" width="28" height="28" rx="4" fill="#111" />
                      <rect x="67" y="15" width="18" height="18" rx="2" fill="white" />
                      <rect x="72" y="20" width="8" height="8" fill="#111" />
                      <rect x="10" y="62" width="28" height="28" rx="4" fill="#111" />
                      <rect x="15" y="67" width="18" height="18" rx="2" fill="white" />
                      <rect x="20" y="72" width="8" height="8" fill="#111" />
                      <rect x="48" y="48" width="8" height="8" fill="#111" />
                      <rect x="60" y="48" width="8" height="8" fill="#111" />
                      <rect x="72" y="48" width="18" height="8" fill="#111" />
                      <rect x="48" y="60" width="18" height="8" fill="#111" />
                      <rect x="70" y="60" width="8" height="8" fill="#111" />
                      <rect x="48" y="72" width="8" height="18" fill="#111" />
                      <rect x="62" y="72" width="28" height="8" fill="#111" />
                      <rect x="82" y="72" width="8" height="18" fill="#111" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="block text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976] mb-3">
                    Portfolio Access
                  </span>
                  <Link
                    href="/work"
                    className="group/btn inline-flex items-center gap-3 text-sm font-sans font-bold text-white hover:text-[#9E8976] transition-colors"
                  >
                    Explore Our Work
                    <span className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-[#9E8976] transition-all duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Marquee Background */}
      <div className="mt-24 md:mt-32 border-y border-white/5 py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {loop.map((item, i) => (
            <span key={i} className="flex items-center text-[10px] md:text-[12px] font-sans font-bold uppercase tracking-[0.5em] text-white/10 mx-8">
              {item} <span className="ml-16 text-[#9E8976]/30">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
