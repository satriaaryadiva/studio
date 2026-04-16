"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const faqs = [
  { q: "Industri apa saja yang UPLIFT layani?", a: "UPLIFT melayani berbagai industri, mulai dari F&B, fashion, otomotif, beauty, edukasi, hingga solusi industrial. Pendekatan omnichannel kami memungkinkan strategi yang adaptif berdasarkan model bisnis dan target market Anda." },
  { q: "Apakah UPLIFT hanya mengelola media sosial?", a: "Tidak. Media sosial hanyalah salah satu bagian dari ekosistem. Kami membantu brand tumbuh melalui channel yang saling terhubung, termasuk website, produksi konten, setup e-commerce, aktivasi event, hingga kelas pembelajaran internal." },
  { q: "Bisakah UPLIFT membangun website dari nol?", a: "Ya. Kami menangani seluruh proses pengembangan website, mulai dari perencanaan layout, copywriting, UI direction, SEO, hingga dukungan teknis. Tujuannya bukan sekadar terlihat bagus, tapi berfungsi sebagai mesin konversi." },
  { q: "Apakah Anda menyediakan jasa produksi foto dan video?", a: "Tentu. Tim produksi kami menangani photoshoot, reels, iklan komersial, hingga konten BTS yang dirancang sesuai identitas brand dan tujuan channel Anda." },
  { q: "Bagaimana cara mulai bekerja sama dengan UPLIFT?", a: "Sederhana. Isi formulir konsultasi, ceritakan tantangan Anda, dan tim kami akan membantu memetakan alur layanan yang tepat. Tujuannya adalah membuat proses pertumbuhan Anda lebih terukur dan terkoneksi." },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      viewport={{ once: true }}
      style={{ borderTopColor: "var(--theme-faq-border)" }}
      className="border-t"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-8 text-left group"
        aria-expanded={open}
      >
        <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-theme-3 pt-1.5 flex-none w-8 group-hover:text-[#9E8976] transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 text-base md:text-lg font-bold font-sans tracking-tight leading-tight transition-colors duration-300 ${open ? "text-[#9E8976]" : "text-theme group-hover:text-theme"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-none mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open
              ? "border-[#9E8976] text-[#9E8976]"
              : "border-theme-md text-theme-3 group-hover:border-theme-pill group-hover:text-theme-2"
            }`}
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12">
              <p className="text-sm md:text-base text-theme-2 leading-relaxed max-w-3xl font-sans">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-theme-surface py-28 md:py-44 border-t border-theme">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-10 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
                FAQ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-theme leading-[0.9] tracking-tighter font-freight uppercase"
            >
              Frequently Asked <br />
              <span className="text-[#9E8976]">Questions</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-theme-2 leading-relaxed font-sans"
            >
              Segala hal yang perlu Anda ketahui sebelum membangun ekosistem brand bersama UPLIFT, partner kreatif omnichannel Anda di Medan.
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          <div style={{ borderTopColor: "var(--theme-faq-border)" }} className="border-t" />
        </div>
      </Container>
    </section>
  );
}
