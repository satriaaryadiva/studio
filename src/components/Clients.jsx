"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

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

export default function Clients() {
  return (
    <section id="clients" className="bg-theme-muted py-24 md:py-40">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="block text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976] mb-6"
          >
            Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-theme tracking-tighter leading-[0.9] font-freight uppercase"
          >
            We've also proudly<br />
            <span className="text-[#9E8976]">partnered with</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-x-16 md:gap-y-20 items-center justify-items-center">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="w-full max-w-[140px] flex items-center justify-center group"
              style={{ opacity: 0.45 }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.45}
            >
              {/* Filter adapts via CSS variable: dark=invert, light=grayscale */}
              <img
                src={client.src}
                alt={client.name}
                className="max-h-12 md:max-h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                style={{ filter: "var(--logo-filter)" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="hidden text-[10px] font-sans font-bold uppercase tracking-widest text-[#9E8976]/60 text-center select-none">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-28 md:mt-40 text-center"
        >
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#9E8976] rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white hover:bg-[#1A1612] transition-all duration-500 shadow-2xl shadow-[#9E8976]/20"
          >
            See What Works
            <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-1.5" fill="currentColor">
              <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
