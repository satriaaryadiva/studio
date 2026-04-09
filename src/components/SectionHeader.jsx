"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";

export default function SectionHeader({ label, title, backgroundText }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="relative w-full bg-neutral-950 py-32 md:py-48 overflow-hidden min-h-[60vh] flex items-center">
            {/* Background Text Layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.span
                    style={{ x: smoothX }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[25vw] md:text-[35vw] font-black text-white/[0.03] whitespace-nowrap leading-none tracking-tighter font-freight uppercase"
                >
                    {backgroundText || title}
                </motion.span>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col">
                    {/* Eyebrow Label */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-neutral-500 mb-6"
                    >
                        {label}
                    </motion.span>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none max-w-5xl font-freight uppercase"
                    >
                        {title}
                    </motion.h2>
                </div>
            </Container>

            {/* Side Scroll Indicator (Left) */}
            <div className="absolute left-8 bottom-12 hidden md:flex flex-col items-center gap-4">
                <span className="[writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600">
                    Scroll
                </span>
                <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
                    <motion.div
                        animate={{
                            y: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-white/20"
                    />
                </div>
                <div className="w-1.5 h-1.5 border-r border-b border-neutral-600 rotate-45" />
            </div>
        </section>
    );
}
