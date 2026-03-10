"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";

const MagneticButton = ({ children, href }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

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
                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4  text-lg font-bold text-black transition-all hover:bg-neutral-200 shadow-2xl border border-neutral-200"
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
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.1,
                            ease: [0.33, 1, 0.68, 1],
                        }}
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

    // Smoother scroll interactions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);
    const skew = useTransform(smoothProgress, [0, 1], [0, -5]);
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] w-full bg-neutral-100 overflow-visible"
        >
            {/* Noise Overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Floating Parallax Elements */}
            <motion.div
                style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
                className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(smoothProgress, [0, 1], [0, 150]) }}
                className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-neutral-900/5 blur-3xl pointer-events-none"
            />

            {/* Sticky Background Text */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                <motion.div
                    style={{ x, skew, scale, opacity }}
                    className="whitespace-nowrap pointer-events-none select-none"
                >
                    <span className="text-[25vw] md:text-[15vw] font-black uppercase tracking-tighter text-neutral-900/40">
                       uplift your brand
                    </span>
                </motion.div>
            </div>

            {/* Foreground Content */}
            <div className="relative flex flex-col pt-32 md:pt-28 pb-32 md:pb-28 z-20">
                <Container>
                    <div className="flex flex-col max-w-7xl">
                        <h1 className="text-6xl md:text-9xl font-black text-black leading-[0.9] tracking-tighter font-freight uppercase">
                            <WordReveal
                                text="Turning Vision"
                                className="block"
                            />
                            <span className="flex items-center gap-4">
                                <WordReveal
                                    text="Into Reality."
                                    delay={0.3}
                                />
                                <motion.span
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    className="hidden md:inline-block text-yellow-600"
                                >
                                    →
                                </motion.span>
                            </span>
                            <WordReveal
                                text="focused"
                                className="italic font-light text-neutral-500 font-serif block md:mt-4 normal-case"
                                delay={0.6}
                            />
                        </h1>

                        <motion.h2
                            className="text-6xl md:text-9xl font-black text-yellow-600 leading-[0.9] tracking-tighter mt-2 font-freight uppercase"
                        >
                            <WordReveal
                                text="digital solutions"
                                delay={0.9}
                            />
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="mt-16 flex"
                        >
                            <MagneticButton href="/work">
                                View All Work
                            </MagneticButton>
                        </motion.div>
                    </div>
                </Container>

                {/* Scroll Indicator */}
                <div className="absolute left-8 bottom-12 hidden md:flex flex-col items-center gap-4">
                    <span className="[writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                        Scroll
                    </span>
                    <div className="w-[1px] h-20 bg-neutral-200 relative overflow-hidden">
                        <motion.div
                            animate={{
                                y: ["-100%", "100%"]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-yellow-600"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
