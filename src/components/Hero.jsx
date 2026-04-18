"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";

/* ─── Magnetic Button ─────────────────────────────────────────────── */
export const MagneticButton = ({ children, href, className = "", onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        setPosition({
            x: (clientX - (left + width / 2)) * 0.25,
            y: (clientY - (top + height / 2)) * 0.25,
        });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => setPosition({ x: 0, y: 0 })}
            animate={position}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="flex-shrink-0"
        >
            <Link
                href={href}
                onClick={onClick}
                className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[11px] tracking-[0.2em] font-black uppercase bg-[#9E8976] text-white hover:bg-[#7a6a5b] transition-colors duration-300 shadow-lg shadow-[#9E8976]/20 ${className}`}
            >
                {children}
                <svg viewBox="0 0 16 6" className="h-[5px] w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="currentColor">
                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
            </Link>
        </motion.div>
    );
};

/* ─── Hero Section ────────────────────────────────────────────────── */
export default function Hero() {

    /* stagger from bottom */
    const fadeUp = {
        hidden: { opacity: 0, y: 32 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }
        })
    };

    /* char-by-char reveal for headline words */
    const wordReveal = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } }
    };
    const word = {
        hidden: { opacity: 0, y: "100%", skewY: 4 },
        visible: { opacity: 1, y: "0%", skewY: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
    };

    const words1 = ["Build,", "Scale,", "and"];
    const words2 = ["Systemize", "Your", "Brand."];

    return (
        <section className="relative w-full min-h-[100svh] bg-theme flex flex-col justify-center overflow-hidden">

            {/* ── Background ── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
                {/* Center glow */}
                <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-[#9E8976] blur-[160px]"
                    style={{ willChange: "transform, opacity" }}
                />

                {/* Morphing blob 1 — top right */}
                <motion.div
                    animate={{
                        rotate: [0, 90, 180, 270, 360],
                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "70% 30% 50% 50% / 50% 20% 80% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[12%] w-[380px] h-[380px] border-[2px] border-[#9E8976]/50 opacity-70"
                    style={{ willChange: "transform, border-radius" }}
                />

                {/* Morphing blob 2 — bottom left */}
                <motion.div
                    animate={{
                        rotate: [360, 270, 180, 90, 0],
                        borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 50% 60% 30% 60%", "30% 70% 50% 50% / 70% 30% 50% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[8%] left-[8%] w-[460px] h-[460px] border-[2px] border-[#9E8976]/35 opacity-60"
                    style={{ willChange: "transform, border-radius" }}
                />

                {/* Orbiting rings */}
                <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-[#9E8976]/25"
                    style={{ willChange: "transform" }}
                />
                <motion.div
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[480px] h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-[#9E8976]/20 border-dashed"
                    style={{ willChange: "transform" }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            style={{
                                left: `${10 + (i * 7.5) % 80}%`,
                                top: `${15 + (i * 11) % 70}%`,
                            }}
                            animate={{ y: [-12, 12, -12], opacity: [0.25, 0.6, 0.25] }}
                            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                            className="absolute w-1.5 h-1.5 rounded-full bg-[#9E8976]"
                        />
                    ))}
                </div>
                {/* ── Floating Hero Images ── */}
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.8, x: 0, y: [0, -20, 0] }}
                    transition={{ 
                        opacity: { duration: 1.5, delay: 0.5 },
                        x: { duration: 1.5, delay: 0.5, ease: "easeOut" },
                        y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute hidden xl:block left-[5%] top-[25%] w-64 h-64 z-10 pointer-events-none"
                    style={{ willChange: "transform" }}
                >
                    <img 
                        src="/images/cta/hero-left.png" 
                        alt="Build Concept" 
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                    />
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.8, x: 0, y: [0, 25, 0] }}
                    transition={{ 
                        opacity: { duration: 1.5, delay: 0.7 },
                        x: { duration: 1.5, delay: 0.7, ease: "easeOut" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute hidden xl:block right-[5%] bottom-[20%] w-72 h-72 z-10 pointer-events-none"
                    style={{ willChange: "transform" }}
                >
                    <img 
                        src="/images/cta/hero-right.png" 
                        alt="Connectivity Concept" 
                        className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                    />
                </motion.div>
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 w-full py-30 md:py-30">
                <Container>
                    <div className="max-w-4xl mx-auto">

                        {/* Label Badge */}
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-4 mb-8 justify-center"
                        >
                            <div className="flex items-center px-5 py-2 rounded-full border bg-[#505F62] backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#9E8976] animate-pulse mr-3" />
                                <span className="text-[10px] md:text-[11px] font-sans font-black uppercase tracking-[0.4em] text-white">
                                    Omnichannel Marketing Agency
                                </span>
                            </div>
                        </motion.div>

                        {/* ╔══════════════════════════════╗
                            ║   HEADLINE — Editorial Style  ║
                            ╚══════════════════════════════╝ */}
                        <div className="text-center mb-8 overflow-hidden">
                            {/* Line 1 — Light weight, large */}
                            <motion.div
                                variants={wordReveal}
                                initial="hidden"
                                animate="visible"
                                className="overflow-hidden flex items-baseline justify-center flex-wrap gap-x-4"
                            >
                                {words1.map((w, i) => (
                                    <motion.span
                                        key={i}
                                        variants={word}
                                        className="inline-block font-freight font-thin text-[clamp(2.8rem,7vw,5.5rem)] leading-[1] tracking-[-0.03em] text-theme"
                                    >
                                        {w}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Line 2 — Bold + brand color, larger + italic accent on last word */}
                            <motion.div
                                variants={wordReveal}
                                initial="hidden"
                                animate="visible"
                                transition={{ delayChildren: 0.25 }}
                                className="overflow-hidden flex items-baseline justify-center flex-wrap gap-x-4"
                            >
                                {words2.map((w, i) => (
                                    <motion.span
                                        key={i}
                                        variants={word}
                                        className={`inline-block font-freight leading-[1] tracking-[-0.03em] text-[clamp(2.8rem,7vw,5.5rem)] ${
                                            i < 2
                                                ? "font-black text-[#9E8976]"
                                                : "font-black italic text-theme"
                                        }`}
                                    >
                                        {w}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Decorative rule under headline */}
                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center justify-center gap-4 mb-10"
                        >
                            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#9E8976]/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#9E8976]" />
                            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#9E8976]/40" />
                        </motion.div>

                        {/* Subheading */}
                        <motion.p
                            custom={4}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-center text-[15px] md:text-[16px] text-theme-2 max-w-xl mx-auto leading-[1.8] font-sans font-medium"
                        >
                            Strategy, content, e-commerce, and activation —{" "}
                            <span className="text-theme font-semibold">connected into one ecosystem</span>{" "}
                            that grows your brand in Medan and across Indonesia.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            custom={5}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <MagneticButton href="/contact">
                                Free Consultation
                            </MagneticButton>

                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-sans font-black text-theme-2 uppercase tracking-[0.2em] rounded-full border border-theme-md hover:border-[#9E8976] hover:text-[#9E8976] transition-all duration-300"
                            >
                                Explore Work
                                <svg viewBox="0 0 16 6" className="h-[5px] w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="currentColor">
                                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Trust metrics strip */}
                        <motion.div
                            custom={6}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
                        >
                            {[
                                { value: "50+", label: "Brands Grown" },
                                { value: "200+", label: "Campaigns" },
                                { value: "4.2×", label: "Avg. ROAS" },
                                { value: "2021", label: "Since" },
                            ].map((m, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    {i > 0 && <span className="w-px h-6 bg-theme-md hidden sm:block" />}
                                    <div className="text-center">
                                        <p className="text-lg font-freight font-black text-[#9E8976] leading-none">{m.value}</p>
                                        <p className="text-[9px] font-sans font-black uppercase tracking-[0.35em] text-theme-3 mt-0.5">{m.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </Container>
            </div>
        </section>
    );
}


