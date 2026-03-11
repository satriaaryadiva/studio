"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";

export const MagneticButton = ({ children, href }) => {
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
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-black transition-all hover:bg-neutral-200 shadow-xl border border-neutral-200"
            >
                {children}
                <svg viewBox="0 0 16 6" className="h-2 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" fill="black" />
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
                <span key={i} className="inline-block overflow-hidden mr-[0.15em] last:mr-0">
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
            className="relative w-full min-h-dvh bg-brand-taupe"
        >
            {/* Noise texture */}
            <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Glow blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-8%] w-40 h-40 md:w-72 md:h-72 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute bottom-[15%] left-[-8%] w-56 h-56 md:w-[28rem] md:h-[28rem] rounded-full bg-neutral-900/5 blur-3xl" />
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
                            style={{ color: "rgba(155,122,96,0.55)" }}
                        >
                            uplift your brand&nbsp;&nbsp;uplift your brand
                        </span>
                    </motion.div>
                </div>

                {/* Desktop foreground (absolute over sticky) */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center">
                    <Container>
                        <div className="flex flex-col">
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-[10px] font-black uppercase tracking-[0.5em] text-black/35 mb-8 block"
                            >
                                Creative Digital Agency
                            </motion.span>
                            <h1 className="text-[clamp(3rem,6vw,5rem)] font-black text-black leading-[0.88] tracking-tighter font-freight uppercase">
                                <WordReveal text="Turning Vision" className="block" />
                                <WordReveal text="Into Reality." delay={0.3} className="block" />
                                <WordReveal
                                    text="focused"
                                    className="italic font-light text-[#9b7a60] font-serif block mt-3 normal-case"
                                    delay={0.6}
                                />
                            </h1>
                            <h2 className="text-[clamp(3rem,6vw,5rem)] font-black leading-[0.88] tracking-tighter mt-2 font-freight uppercase">
                                <WordReveal text="digital solutions" delay={0.9} />
                            </h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="mt-14 flex"
                            >
                                <MagneticButton href="/work">View All Work</MagneticButton>
                            </motion.div>
                        </div>
                    </Container>
                    <div className="absolute left-8 bottom-10 flex flex-col items-center gap-3">
                        <span className="[writing-mode:vertical-lr] text-[9px] font-bold uppercase tracking-[0.4em] text-black/30">Scroll</span>
                        <div className="w-px h-16 bg-black/10 relative overflow-hidden rounded-full">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-1/2"
                                style={{ background: "#9b7a60" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================
                MOBILE ONLY: Stacked layout
            ========================================= */}
            <div className="md:hidden flex flex-col min-h-dvh pt-44 pb-12">
                <Container>
                    <div className="flex flex-col">
                        {/* Eyebrow */}
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-[9px] font-black uppercase tracking-[0.5em] text-black/35 mb-5 block"
                        >
                            Creative Digital Agency
                        </motion.span>

                        {/* Headline */}
                        <h1 className="text-[clamp(2.4rem,11vw,3.5rem)] font-black text-black leading-[0.88] tracking-tighter font-freight uppercase">
                            <WordReveal text="Turning Vision" className="block" />
                            <WordReveal text="Into Reality." delay={0.3} className="block" />
                            <WordReveal
                                text="focused"
                                className="italic font-light text-[#9b7a60] font-serif block mt-1 normal-case"
                                delay={0.6}
                            />
                        </h1>
                        <h2 className="text-[clamp(2.4rem,11vw,3.5rem)] font-black leading-[0.88] tracking-tighter mt-1 font-freight uppercase">
                            <WordReveal text="digital solutions" delay={0.9} />
                        </h2>

                        {/* Short description */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="mt-5 text-sm text-black/45 max-w-[270px] leading-relaxed"
                        >
                            Strategi digital &amp; kreatif yang terukur untuk brand Anda berkembang.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="mt-8 flex"
                        >
                            <MagneticButton href="/work">View All Work</MagneticButton>
                        </motion.div>
                    </div>
                </Container>

                {/* Big decorative text BELOW the CTA — mobile only */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-auto pt-16 overflow-hidden"
                >
                    <motion.div
                        style={{ x: bgX }}
                        className="whitespace-nowrap"
                    >
                        <span
                            className="text-[22vw] uppercase font-black tracking-tighter select-none block leading-none"
                            style={{ color: "rgba(155,122,96,0.5)" }}
                        >
                            uplift your brand&nbsp;&nbsp;uplift your brand
                        </span>
                    </motion.div>
                </motion.div>

                {/* Mobile scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="flex justify-center mt-6"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
