"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import { useRef } from "react";

const clientLogos = [
  { name: "Pupuk Kaltim", src: "https://images.unsplash.com/photo-1606011387228-4ce9a6b107e?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Hufa", src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Mayapada Hospital", src: "https://images.unsplash.com/photo-1558591710-4b4fb24eac0e?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Mandiri Tunas Finance", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "PLN Nusantara Power", src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "GranDhika", src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Petrosida Gresik", src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Tresno Joyo", src: "https://images.unsplash.com/photo-1518818419601-12c8b8b0eec8?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "SpanSet", src: "https://images.unsplash.com/photo-1533158307587-828f0a72fc6e?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Visalux", src: "https://images.unsplash.com/photo-1550859492-45b1cdcdcece?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Luwak", src: "https://images.unsplash.com/photo-1493134365851-933e49818ae3?auto=format&fit=crop&q=80&w=400&h=160" },
  { name: "Delovery", src: "https://images.unsplash.com/photo-1509343256512-d803980a03d6?auto=format&fit=crop&q=80&w=400&h=160" },
];

function LogoMarquee({ logos, reverse = false, duration = 40 }) {
  const doubledLogos = [...logos, ...logos, ...logos]; // Triple for safety in wide screens
  
  return (
    <div className="relative flex overflow-hidden py-10 select-none group">
      <motion.div
        animate={{
          x: reverse ? [0, -1035] : [-1035, 0], // Approximate width calculation, will adjust to % later or just large enough
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap min-w-full gap-10 items-center pr-20"
        style={{ width: "fit-content" }}
      >
        {doubledLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-none w-32 md:w-40 lg:w-48 transition-all duration-500 hover:scale-110"
            style={{ opacity: 0.5 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-full h-auto object-contain brightness-0 invert theme-invert-0 theme-brightness-100" // Adaptive via global CSS / data-theme
              style={{ filter: "var(--logo-filter)" }}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const row1 = clientLogos.slice(0, 6);
  const row2 = clientLogos.slice(6);

  return (
    <section id="clients" className="bg-theme py-20 border-t border-theme-md overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-8 bg-[#9E8976]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
              Trusted Partnerships
            </span>
            <div className="h-px w-8 bg-[#9E8976]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-theme tracking-tighter leading-[0.9] font-freight uppercase"
          >
            Driving Growth for<br />
            <span className="text-[#9E8976]">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-base md:text-lg text-theme-2 font-sans max-w-xl mx-auto"
          >
            Kami telah membantu lebih dari 50+ brand membangun sistem pertumbuhan yang stabil dan terukur.
          </motion.p>
        </div>
      </Container>

      {/* Marquee Rows — Advance Design */}
      <div className="relative mt-8 md:mt-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <LogoMarquee logos={row1} duration={35} />
          <LogoMarquee logos={row2} reverse duration={45} />
          
          {/* Gradient Edges for "Gallery" feel */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-theme to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-theme to-transparent z-10 pointer-events-none" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-theme-surface hover:text-[#9E8976] transition-all duration-500 shadow-xl shadow-[#9E8976]/20 border border-transparent hover:border-theme-md"
          >
            Explore Case Studies
            <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-1.5" fill="currentColor">
              <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
