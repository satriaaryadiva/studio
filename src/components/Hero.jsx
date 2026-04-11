"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";

export const MagneticButton = ({ children, href, invert = false, className = "", onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });
    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <Link
                href={href}
                onClick={onClick}
                className={`group flex items-center gap-3 rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold transition-all shadow-lg ${
                    invert
                        ? "bg-white text-black hover:bg-neutral-200 border border-neutral-200"
                        : "bg-[#1A1612] text-white hover:bg-[#9E8976] border border-[#1A1612]"
                } ${className}`}
            >
                {children}
                <svg viewBox="0 0 16 6" className="h-2 w-4 transition-transform group-hover:translate-x-1" fill="currentColor">
                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
            </Link>
        </motion.div>
    );
};

const WordReveal = ({ text, className, delay = 0 }) => {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: delay + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const bgX = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen bg-neutral-900 overflow-hidden"
        >
            {/* ── Background Image ── */}
            <motion.div
                initial={{ scale: 1.06, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920"
                    alt="UPLIFT Agency — Creative & Digital Marketing Medan"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* ── Layered overlays for readability ── */}
            {/* Dark base */}
            <div className="absolute inset-0 z-[1] bg-black/60" />
            {/* Brand color vignette from bottom */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#3a2c22]/80 via-transparent to-transparent" />
            {/* Subtle left-side fade for text contrast */}
            <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            {/* Noise texture */}
            <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.04] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Glow blobs */}
            <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-8%] w-40 h-40 md:w-72 md:h-72 rounded-full bg-[#b38b6d]/20 blur-3xl" />
                <div className="absolute bottom-[15%] left-[-8%] w-56 h-56 md:w-[28rem] md:h-[28rem] rounded-full bg-[#b38b6d]/10 blur-3xl" />
            </div>

            {/* =========================================
                DESKTOP ONLY: Sticky bg text layer
            ========================================= */}
            <div className="hidden md:block">
                <div className="sticky top-0 h-dvh w-full overflow-hidden pointer-events-none">
                    <motion.div
                        style={{ x: bgX, opacity: bgOpacity }}
                        className="absolute inset-0 flex items-center"
                    >
                        <span
                            className="whitespace-nowrap text-[13vw] uppercase font-black tracking-tighter select-none"
                            style={{ color: "rgba(179,139,109,0.18)" }}
                        >
                            uplift your brand&nbsp;&nbsp;uplift your brand
                        </span>
                    </motion.div>
                </div>

                {/* Desktop foreground (absolute over sticky) */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center pt-28">
                    <Container>
                        <div className="flex flex-col max-w-5xl">
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-white mb-2 block"
                            >
                                Omnichannel Marketing Agency in Medan
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3rem,6.5vw,5.5rem)] font-black text-white leading-[0.88] tracking-tighter font-freight uppercase"
                            >
                                Build, Scale, and<br />
                                <span className="text-[#9E8976]">Systemize Your Brand</span><br />
                                with UPLIFT
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="mt-4 text-base md:text-lg text-white/90 max-w-xl leading-relaxed font-sans"
                            >
                                From strategy, content, and e-commerce to website systems and offline activation,
                                UPLIFT helps brands in Medan and across Indonesia grow through one connected omnichannel ecosystem.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="mt-8 flex items-center gap-8"
                            >
                                <MagneticButton href="/contact">Start Consultation</MagneticButton>
                                <Link
                                    href="/work"
                                    className="group relative text-xs font-sans font-bold uppercase tracking-widest text-white  border-b border-white  hover:text-white transition-all"
                                >
                                    Explore Our Work
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        </div>
                    </Container>
                    <div className="absolute left-8 bottom-10 flex flex-col items-center gap-3">
                        <span className="[writing-mode:vertical-lr] text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Scroll</span>
                        <div className="w-px h-16 bg-white/20 relative overflow-hidden rounded-full">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-1/2"
                                style={{ background: "#9E8976" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
                MOBILE ONLY: Premium editorial layout
            ========================================= */}
            <div className="md:hidden relative min-h-dvh flex flex-col">

                {/* Extra mobile bottom gradient — ensures text is always readable */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/70 to-transparent z-[5] pointer-events-none" />
                {/* Top gradient for safe navbar area */}
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent z-[5] pointer-events-none" />

                {/* ── Content: anchored to the bottom ── */}
                <div className="relative z-10 mt-auto pb-12 px-6">

                    {/* Eyebrow */}
                    <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-[9px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976] mb-5 block"
                    >
                        Omnichannel Marketing Agency · Medan
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2.8rem,12vw,4.5rem)] font-black text-white leading-[0.88] tracking-tighter font-freight uppercase"
                    >
                        Build, Scale,<br />
                        and{" "}
                        <span className="text-[#9E8976]">Systemize<br />Your Brand</span>
                    </motion.h1>

                    {/* Divider line */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-5 h-px w-16 bg-[#9E8976] origin-left"
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.7 }}
                        className="mt-4 text-sm text-white/75 leading-relaxed font-sans max-w-[300px]"
                    >
                        Dari strategi, konten, dan e-commerce hingga website dan aktivasi offline — satu ekosistem terhubung untuk brand Anda.
                    </motion.p>

                    {/* Stat badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="mt-6 flex items-center gap-5"
                    >
                        {[
                            { value: "50+", label: "Brands" },
                            { value: "6", label: "Services" },
                            { value: "Medan", label: "Based" },
                        ].map((s) => (
                            <div key={s.label} className="flex flex-col">
                                <span className="text-xl font-black text-white font-freight leading-none">{s.value}</span>
                                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-white/40 mt-0.5">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-8 flex items-center gap-6"
                    >
                        {/* Primary CTA */}
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-sans font-bold uppercase tracking-widest text-black hover:bg-[#9E8976] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Konsultasi Gratis
                            <svg viewBox="0 0 16 6" className="h-2 w-4" fill="currentColor">
                                <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                            </svg>
                        </Link>
                        {/* Ghost CTA */}
                        <Link
                            href="/work"
                            className="group relative text-[10px] font-sans font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                        >
                            Our Work
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#9E8976] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </motion.div>
                </div>

                {/* Decorative marquee text at the very bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="relative z-10 overflow-hidden pb-2 mt-4"
                >
                    <motion.div
                        style={{ x: bgX }}
                        className="whitespace-nowrap"
                    >
                        <span
                            className="text-[18vw] uppercase font-black tracking-tighter select-none block leading-none font-freight"
                            style={{ color: "rgba(155,122,96,0.22)" }}
                        >
                            uplift&nbsp;&nbsp;uplift&nbsp;&nbsp;uplift
                        </span>
                    </motion.div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-4 right-6 z-10 flex flex-col items-center gap-1.5"
                >
                    <span className="[writing-mode:vertical-lr] text-[8px] font-sans font-bold uppercase tracking-[0.4em] text-white/25">Scroll</span>
                    <div className="w-px h-10 bg-white/15 relative overflow-hidden rounded-full">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-1/2"
                            style={{ background: "#9E8976" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
