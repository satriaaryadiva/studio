"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
        body: "Kami membangun ekosistem di mana setiap touchpoint saling memperkuat — dari konten hingga commerce.",
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
        body: "Lahir di Medan, dirancang untuk brand Indonesia. Kami paham konteks lokal tapi membangun sistem yang siap scale.",
    },
    {
        num: "03",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "End-to-End Execution",
        body: "Dari riset awal hingga laporan hasil akhir — satu tim, tanpa celah. Tidak ada koordinasi lintas vendor.",
    },
    {
        num: "04",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
            </svg>
        ),
        title: "Data-Informed, Human-Led",
        body: "Setiap keputusan kami pijaki dengan data, tapi digerakkan oleh kreativitas dan empati terhadap audiens.",
    },
    {
        num: "05",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: "Systematic Growth",
        body: "Build, Scale, Systemize — metode kerja kami yang memastikan pertumbuhan bisa diulang dan ditingkatkan.",
    },
    {
        num: "06",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" />
            </svg>
        ),
        title: "Transparent & Accountable",
        body: "Kami tidak hanya mengeksekusi — kami melaporkan. Setiap kampanye dilengkapi laporan terukur.",
    },
];

// ─── Parallax Reason Card ────────────────────────────────────────────
function ReasonCard({ r, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [30, -15]);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative p-8 md:p-10 hover:bg-theme-muted transition-colors duration-500 border-b border-theme-md
              ${index % 3 !== 2 ? "lg:border-r" : ""} 
              ${index % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""}`}
        >
            <motion.div style={{ y }}>
                {/* Icon & Title */}
                <div className="mb-6 flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-full border border-theme-md bg-theme flex items-center justify-center text-theme-2 group-hover:text-[#9E8976] group-hover:border-[#9E8976] transition-all duration-300">
                        {r.icon}
                    </div>
                    <h3 className="text-xl font-black font-sans uppercase tracking-tight text-theme leading-tight">
                        {r.title}
                    </h3>
                </div>

                {/* Body */}
                <p className="text-sm font-sans text-theme-3 leading-relaxed">
                    {r.body}
                </p>
            </motion.div>

            {/* Number */}
            <div className="absolute top-8 right-8 text-[9px] font-sans font-black text-theme-3/30 group-hover:text-theme tracking-[0.2em] transition-colors duration-300">
                {r.num}
            </div>
        </motion.div>
    );
}

export default function WhyUplift() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const headingY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={sectionRef} id="why-uplift" className="bg-theme-surface py-24 md:py-36 border-b border-theme-md overflow-hidden">
            <Container>

                {/* Centered Header with parallax */}
                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    className="text-center mb-20 md:mb-28 max-w-3xl mx-auto"
                >
                    <span className="inline-block text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976] mb-6">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-[3.6rem] font-black font-freight uppercase tracking-tighter leading-[0.9] text-theme mb-6">
                        Kenapa Brand Memilih{" "}
                        <span className="text-[#9E8976]">UPLIFT</span>
                    </h2>

                    <p className="text-base md:text-lg text-theme-2 font-sans leading-relaxed">
                        Satu ekosistem yang menghubungkan strategi, eksekusi, dan pertumbuhan — secara{" "}
                        <span className="text-theme font-semibold">repeatable & scalable</span>.
                    </p>
                </motion.div>

                {/* Grid of Cards with individual parallax */}
                <div className="border-t border-theme-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {reasons.map((r, i) => (
                            <ReasonCard key={r.num} r={r} index={i} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-28 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
                >
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 py-5 rounded-full text-[11px] font-sans font-black uppercase tracking-[0.3em] hover:bg-theme-surface hover:text-[#9E8976] transition-all duration-500 shadow-xl shadow-[#9E8976]/20 border border-transparent hover:border-theme-md"
                    >
                        Mulai Konsultasi Gratis
                        <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-1.5" fill="currentColor">
                            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                        </svg>
                    </a>
                    <span className="text-[11px] font-sans text-theme-3 uppercase tracking-widest">
                        Tanpa kontrak awal · Respon 1–2 hari kerja
                    </span>
                </motion.div>

            </Container>
        </section>
    );
}
