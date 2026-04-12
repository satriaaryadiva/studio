"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const reasons = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101" />
        <path d="M10.172 13.828a4 4 0 0 0 5.656 0l4-4a4 4 0 1 0-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Omnichannel by Design",
    body: "Kami membangun ekosistem di mana setiap touchpoint saling memperkuat — dari konten hingga commerce, dari awareness hingga loyalitas.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    title: "Local Expertise, National Ambition",
    body: "Lahir di Medan, dirancang untuk brand Indonesia. Kami paham konteks lokal tapi membangun sistem yang siap scale ke seluruh Indonesia.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "End-to-End Execution",
    body: "Dari riset awal hingga laporan hasil akhir — satu tim, tanpa celah. Tidak ada koordinasi lintas vendor, tidak ada pesan yang hilang di tengah jalan.",
  },
  {
    num: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
    title: "Data-Informed, Human-Led",
    body: "Setiap keputusan kami pijaki dengan data, tapi digerakkan oleh kreativitas. Karena angka memberi arah — tapi cerita yang membuat orang berhenti dan mendengarkan.",
  },
  {
    num: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Systematic Growth Framework",
    body: "Build, Scale, Systemize — metode kerja kami yang memastikan pertumbuhan brand Anda bisa diulang, diukur, dan ditingkatkan secara konsisten.",
  },
  {
    num: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" />
      </svg>
    ),
    title: "Transparent & Accountable",
    body: "Kami tidak hanya mengeksekusi — kami melaporkan. Setiap kampanye dilengkapi dengan laporan terukur yang menunjukkan dampak nyata dari setiap rupiah yang diinvestasikan.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyUplift() {
  return (
    <section id="why-uplift" className="bg-theme py-28   border-t border-theme overflow-hidden">
      <Container>

        {/* ── Centered Header ── */}
        <div className="text-center mb-20 md:mb-28 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] mb-6"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[3.6rem] font-black font-freight uppercase tracking-tighter leading-[0.9] text-theme mb-6"
          >
            Kenapa Brand Memilih{" "}
            <em className="not-italic text-[#9E8976]">UPLIFT</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-theme-2 font-sans leading-relaxed"
          >
            Satu ekosistem yang menghubungkan strategi, eksekusi, dan pertumbuhan — secara{" "}
            <span className="text-theme font-semibold">repeatable & scalable</span>.
          </motion.p>
        </div>

        {/* ── Grid of Cards ── */}
        <div className="border-t border-theme">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5% 0px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-theme sm:divide-y-0 lg:divide-y-0"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                variants={itemVariants}
                className={`group relative p-8 md:p-10 hover:bg-[#9E8976]/[0.04] transition-colors duration-500 border-b border-theme
                  ${i % 3 === 0 || i % 3 === 1 ? "lg:border-r" : ""} border-theme
                  ${i % 2 === 0 ? "sm:border-r" : ""} border-theme
                `}
              >
              {/* Number + Icon row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl md:text-5xl font-black font-freight tracking-tighter leading-none text-theme-3 group-hover:text-[#9E8976]/30 transition-colors duration-500">
                  {r.num}
                </span>
                <div className="w-10 h-10 rounded-xl border border-theme-md flex items-center justify-center text-theme-2 group-hover:border-[#9E8976]/30 group-hover:text-[#9E8976] transition-all duration-500">
                  {r.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-black font-freight uppercase tracking-tight text-theme leading-snug mb-4 group-hover:text-[#9E8976] transition-colors duration-400">
                {r.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-theme-2 leading-relaxed font-sans">
                {r.body}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-[#9E8976] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-[#1A1612] transition-all duration-500 shadow-xl shadow-[#9E8976]/20"
          >
            Mulai Konsultasi Gratis
            <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-1.5" fill="currentColor">
              <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
            </svg>
          </a>
          <span className="text-[11px] font-sans text-theme-2 uppercase tracking-widest">
            Tanpa kontrak awal · Respon 1–2 hari kerja
          </span>
        </motion.div>

      </Container>
    </section>
  );
}
