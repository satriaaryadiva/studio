"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { HiLightningBolt } from "react-icons/hi";

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
                className={`group flex items-center justify-center gap-3 rounded-full px-6 py-3.5 md:px-8 md:py-4 text-[13px] tracking-widest md:text-sm font-bold uppercase transition-all shadow-lg ${invert
                        ? "bg-white text-black hover:bg-neutral-200 border border-neutral-200"
                        : "bg-[#9E8976] text-white hover:bg-[#857262] border border-[#9E8976]"
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
            className="relative w-full min-h-screen bg-neutral-900 overflow-hidden flex flex-col justify-center"
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
            <div className="absolute inset-0 z-[1] bg-black/70" />
            <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#201813]/90 via-transparent to-transparent" />

            {/* Noise texture */}
            <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.04] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Glow blobs */}
            <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none flex items-center justify-center">
                <div className="w-[30rem] h-[30rem] rounded-full bg-[#b38b6d]/15 blur-[120px]" />
            </div>

            {/* =========================================
                DESKTOP & MOBILE CONTENT LAYER (Centered)
            ========================================= */}
            <div className="relative z-20 w-full pt-20 pb-12">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-white bg-white/5 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2 mb-4 max-w-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block h-3 w-3 md:h-4 md:w-4 text-[#9E8976] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-[8px] sm:text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.1em] sm:tracking-[0.25em] text-[#E5D5C5] truncate md:whitespace-normal">
                                OMNICHANNEL MARKETING AGENCY
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight font-sans text-white mb-6 md:mb-8 flex flex-col"
                        >
                            <span className="font-light block" style={{ letterSpacing: "-0.04em" }}>Build, Scale, and</span>
                            <span className="font-black italic text-[#9E8976] block pr-4 md:pr-6" style={{ letterSpacing: "-0.02em" }}>Systemize Your Brand.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-sm md:text-[1.1rem] text-white  max-w-2xl leading-relaxed font-sans mx-auto font-medium"
                        >
                            From strategy, content, and e-commerce to website systems and offline activation,
                            UPLIFT helps brands in Medan and across Indonesia grow through one connected omnichannel ecosystem.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
                        >
                            <MagneticButton href="/contact" className="w-full sm:w-auto">
                                Start Consultation
                            </MagneticButton>

                            <Link
                                href="/work"
                                className="group w-full sm:w-auto flex items-center justify-center px-8 py-3.5 md:py-4 rounded-full border border-white/30 text-white font-bold text-[13px] md:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                Explore Our Work
                            </Link>
                        </motion.div>

                    </div>
                </Container>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-white/15 relative overflow-hidden rounded-full">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-1/2"
                        style={{ background: "#9E8976" }}
                    />
                </div>
            </motion.div>

        </section>
    );
}

