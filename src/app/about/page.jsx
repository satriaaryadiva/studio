"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import ConsultationForm from "@/components/ConsultationForm";
import PageHero from "@/components/PageHero";

// ─── Data ────────────────────────────────────────────────────────────
const stats = [
  { value: "50+", label: "Brand Dikelola" },
  { value: "200+", label: "Kampanye Diluncurkan" },
  { value: "10M+", label: "Total Reach" },
  { value: "3+", label: "Tahun Berpengalaman" },
];

const values = [
  {
    num: "01",
    title: "Ecosystem Thinking",
    body: "Kami tidak melihat setiap channel secara terpisah. Setiap strategi dirancang agar saling memperkuat — dari konten hingga commerce, dari awareness hingga loyalitas.",
  },
  {
    num: "02",
    title: "Human-Led, Data-Driven",
    body: "Data memberi arah, kreativitas memberi nyawa. Setiap keputusan kami pijaki dengan angka, tapi digerakkan oleh intuisi dan empati manusia.",
  },
  {
    num: "03",
    title: "Radical Ownership",
    body: "Kami tidak hanya mengeksekusi perintah. Kami mengambil tanggung jawab penuh atas setiap karya, mulai dari strategi hingga laporan hasil.",
  },
  {
    num: "04",
    title: "Growth by System",
    body: "Pertumbuhan yang sustainable bukan dari kerja keras sesaat, tapi dari sistem yang bisa diulang, diukur, dan ditingkatkan secara konsisten.",
  },
];

const team = [
  {
    name: "Rizky Pratama",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Sari Dewi",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Andi Wijaya",
    role: "Lead Content Producer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Maya Lestari",
    role: "Digital Marketing Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
  },
];

const cultureItems = [
  {
    title: "Strategi Terukur",
    description: "Kami tidak hanya berkreasi, kami memastikan setiap langkah didukung oleh data dan tujuan yang jelas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    title: "Kreativitas Tanpa Batas",
    description: "Mendorong batas-batas visual dan storytelling untuk membuat brand Anda menonjol di pasar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Inovasi & Teknologi",
    description: "Memanfaatkan teknologi terbaru untuk memberikan insight yang mendalam dan hasil yang optimal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px w-8 bg-[#9E8976]" />
      <span className="text-[11px] font-sans font-black uppercase tracking-[0.55em] text-[#9E8976]">
        {children}
      </span>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-theme text-theme" style={{ overflowX: "clip" }}>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <PageHero
        label="About Us"
        title={<>Kekuatan Kami<br />adalah <em className="not-italic text-[#9E8976]">Kolaborasi</em></>}
        description="UPLIFT adalah omnichannel marketing agency yang lahir di Medan — dibangun di atas keyakinan bahwa pertumbuhan brand yang nyata membutuhkan sistem, bukan sekadar konten."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT team collaboration"
        badge={{ value: "50+", label: "Brand Dikelola" }}
        watermark="UPLIFT"
      />

      {/* ══════════════════════════════════════════════
          2. STORY
      ══════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 border-b border-theme">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <FadeUp>
                <SectionLabel>Our Story</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-black font-freight uppercase tracking-tighter leading-[0.9] text-theme">
                  Bermula dari<br />Satu Keyakinan
                </h2>
              </FadeUp>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
              <FadeUp delay={0.08}>
                <p className="text-base md:text-lg text-theme leading-relaxed font-sans font-semibold">
                  Kami lahir dari frustrasi terhadap agency yang menjual channel tapi tidak membangun sistem.
                </p>
              </FadeUp>
              <FadeUp delay={0.13}>
                <p className="text-base text-theme-2 leading-relaxed font-sans">
                  Tahun 2021, tim kami memulai dengan satu klien pertama — sebuah brand kuliner lokal di Medan yang ingin tumbuh tapi tidak tahu caranya. Kami tidak hanya membantu konten. Kami merancang ekosistem — dari strategi media sosial hingga pengukuran ROI iklan. Hasilnya: revenue brand tersebut naik 3× dalam 6 bulan.
                </p>
              </FadeUp>
              <FadeUp delay={0.18}>
                <p className="text-base text-theme-2 leading-relaxed font-sans">
                  Dari sana, UPLIFT berkembang. Bukan karena kami mengejar kuantitas klien, tapi karena kami fokus pada hasil yang bisa dibuktikan. Hari ini, kami dipercaya oleh 50+ brand dan filosofi kami tetap sama: <strong className="text-theme font-semibold">Build, Scale, Systemize.</strong>
                </p>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          3. STATS — always dark
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-20 md:py-28 border-b border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/8">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.07} className="px-8 py-6 text-center first:pl-0 last:pr-0">
                <p className="text-4xl md:text-6xl font-black font-freight text-white tracking-tighter leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-white/40 mt-3">
                  {s.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          4. VALUES
      ══════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 border-b border-theme bg-theme-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
            <FadeUp className="lg:col-span-6">
              <SectionLabel>Our Values</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-freight uppercase tracking-tighter leading-[0.9] text-theme">
                Yang Kami<br />Percayai
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-base md:text-lg text-theme-2 leading-relaxed font-sans">
                Nilai-nilai ini bukan slogan. Ini adalah prinsip yang menentukan setiap keputusan strategis dan kreatif yang kami buat bersama klien.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-x-24 lg:gap-y-24">
            {values.map((v, i) => (
              <FadeUp key={v.num} delay={i * 0.08}>
                <div className="flex flex-col gap-8 group">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-sans font-black tracking-[0.4em] text-[#9E8976]">{v.num}</span>
                    <div className="h-px flex-1 bg-theme-border group-hover:bg-[#9E8976]/30 transition-colors duration-500" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-black font-freight uppercase tracking-tight text-theme leading-tight group-hover:text-[#9E8976] transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-base text-theme-2 leading-relaxed font-sans">
                      {v.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          5. TEAM
      ══════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 border-b border-theme bg-theme">
        <Container>
          <div className="mb-16 md:mb-24">
            <FadeUp>
              <SectionLabel>The Team</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black font-freight uppercase tracking-tighter leading-[0.9] text-theme">
                Orang-Orang<br />di Balik UPLIFT
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976] mb-1">{member.role}</p>
                    <h3 className="text-base md:text-lg font-black font-freight uppercase text-white tracking-tight leading-tight">{member.name}</h3>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          6. CULTURE — always dark
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 md:py-44 border-b border-white/5">
        <Container>
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <FadeUp>
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] block mb-6">Our Culture</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center leading-[0.9] tracking-tighter font-freight uppercase">
                Menyeimbangkan kreativitas<br /><span className="text-[#9E8976]">dengan hasil nyata.</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cultureItems.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div className="bg-white/[0.03] border border-white/8 p-10 rounded-[2rem] hover:border-[#9E8976]/30 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#9E8976] group-hover:border-[#9E8976]/30 transition-all duration-500 mb-6">
                    {c.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase font-freight mb-5 group-hover:text-[#9E8976] transition-colors">{c.title}</h3>
                  <p className="text-sm md:text-base text-white/40 font-sans leading-relaxed">{c.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          7. CLIENTS
      ══════════════════════════════════════════════ */}
      <Clients />

      {/* ══════════════════════════════════════════════
          8. FAQ
      ══════════════════════════════════════════════ */}
      <FAQ />

      {/* ══════════════════════════════════════════════
          9. VISION CTA — always dark
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 md:py-44">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] block mb-8">Our Vision</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-freight uppercase tracking-tighter leading-[0.85] text-white mb-10">
                Menjadi Growth Partner<br /><span className="text-[#9E8976]">Pilihan Pertama</span><br />Brand Indonesia
              </h2>
              <p className="text-base md:text-lg text-white/50 font-sans leading-relaxed max-w-2xl mx-auto mb-14">
                Bukan sekadar vendor. Kami ingin menjadi bagian dari perjalanan pertumbuhan jangka panjang setiap brand yang kami dampingi.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-[#9E8976]/20"
              >
                Mulai Bersama Kami
                <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 group-hover:translate-x-1.5 transition-transform"><path d="M16 3 10 .5v2H0v1h10v2L16 3Z" /></svg>
              </Link>
              <Link href="/services" className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                Lihat Layanan →
              </Link>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          10. CONSULTATION FORM
      ══════════════════════════════════════════════ */}
      <ConsultationForm />

    </main>
  );
}
