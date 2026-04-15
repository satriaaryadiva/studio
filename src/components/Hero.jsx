"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";

/* ─── Magnetic Button (Primary CTA) ─── */
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
                className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[12px] tracking-[0.15em] font-semibold uppercase bg-[#9E8976] text-white hover:bg-[#7a6a5b] transition-colors duration-300 ${className}`}
            >
                {children}
                <svg viewBox="0 0 16 6" className="h-[5px] w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor">
                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
            </Link>
        </motion.div>
    );
};

/* ─── Hero Section ─── */
export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }
        })
    };

    return (
        <section className="relative w-full min-h-[100svh] bg-theme flex flex-col justify-center overflow-hidden">

            {/* ── Background Graphics with parallax ── */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Warm radial glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#9E8976]/[0.07] blur-[140px]" />

                {/* Decorative circle rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-theme-md" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-theme-md/50" />

                {/* Corner accent lines */}
                <div className="absolute top-24 right-12 md:right-24 w-px h-24 bg-gradient-to-b from-theme-md to-transparent" />
                <div className="absolute bottom-24 left-12 md:left-24 w-px h-24 bg-gradient-to-t from-theme-md to-transparent" />
                <div className="hidden md:block absolute bottom-24 left-12 md:left-24 w-24 h-px bg-gradient-to-r from-theme-md to-transparent" />

                {/* Dot pattern accent */}
                <div className="absolute top-20 left-8 md:left-16 grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-theme-md" />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full py-32 md:py-40">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

                        {/* Label */}
                        <motion.span
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2.5 text-[10px] md:text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-theme-2 mb-8"
                        >
                            <span className="w-5 h-px bg-[#9E8976]" />
                            Omnichannel Marketing Agency
                            <span className="w-5 h-px bg-[#9E8976]" />
                        </motion.span>

                        {/* H1 — Primary Headline */}
                        <motion.h1
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.08] tracking-[-0.025em] font-freight text-theme"
                        >
                            <span className="font-medium">Build, Scale, and</span>
                            <br />
                            <span className="font-bold text-[#9E8976]">Systemize Your Brand.</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 text-[15px] md:text-base text-theme-2 max-w-lg leading-[1.7] font-sans"
                        >
                            Strategy, content, e-commerce, and activation — connected into one ecosystem that grows your brand in Medan and across Indonesia.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                        >
                            <MagneticButton href="/contact">
                                Free Consultation
                            </MagneticButton>

                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 text-[12px] font-sans font-semibold text-theme uppercase tracking-[0.15em] rounded-full border border-theme-md hover:border-[#9E8976] hover:text-[#9E8976] transition-colors duration-300"
                            >
                                Explore Work
                                <svg viewBox="0 0 16 6" className="h-[5px] w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor">
                                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Trust metric */}
                        <motion.div
                            custom={4}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="mt-16 flex items-center gap-3 text-[11px] font-sans text-theme-3 tracking-wide"
                        >
                            <span className="font-bold text-theme uppercase tracking-[0.1em]">50+ Brands</span>
                            <span className="w-px h-3 bg-theme-md" />
                            <span>Trusted partner since 2021</span>
                        </motion.div>

                    </div>
                </Container>
            </div>
        </section>
    );
}
