"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

// Placeholder for client logos - in a real scenario, use actual assets
const clientLogos = [
  { name: "Pupuk Kaltim", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_Pupuk_Kaltim.svg/1200px-Logo_Pupuk_Kaltim.svg.png" },
  { name: "Hufa", src: "https://www.hufa.co.id/wp-content/uploads/2018/01/logo-hufa.png" },
  { name: "Mayapada Hospital", src: "https://mayapadahospital.com/assets/img/logo-mayapada.png" },
  { name: "Mandiri Tunas Finance", src: "https://www.mtf.co.id/assets/images/logo_mtf.png" },
  { name: "PLN Nusantara Power", src: "https://plnnusantarapower.co.id/wp-content/uploads/2022/10/logo-pln-nusantara-power.png" },
  { name: "GranDhika", src: "https://grandhika-hotel.com/wp-content/uploads/2021/04/Logo-Hotel-GranDhika-2021.png" },
  { name: "Petrosida Gresik", src: "https://petrosida-gresik.com/assets/img/logo-petrosida.png" },
  { name: "Tresno Joyo", src: "https://www.tresnojoyo.id/wp-content/uploads/2021/04/logo-tresnojoyo.png" },
  { name: "SpanSet", src: "https://www.spanset.com/themes/custom/spanset/logo.svg" },
  { name: "Visalux", src: "https://visalux-lighting.com/wp-content/uploads/2020/07/VISALUX-LOGO.png" },
  { name: "Luwak", src: "https://kopiluwak.id/wp-content/uploads/2020/09/cropped-logo-kopi-luwak-1.png" },
  { name: "Delovery", src: "https://www.delovery.com/wp-content/uploads/2022/01/logo-delovery.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-neutral-950 py-24 md:py-40">
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
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] font-freight uppercase"
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
              className="w-full max-w-[140px] flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 group"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-12 md:max-h-14 w-auto object-contain filter invert brightness-200 group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
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
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#9E8976] rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#9E8976] transition-all duration-500 shadow-2xl shadow-[#9E8976]/20"
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
