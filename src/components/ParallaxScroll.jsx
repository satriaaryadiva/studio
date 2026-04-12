"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function ParallaxScroll({ content, title, subtitle }) {
    const containerRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const isMobile = windowWidth < 768;
    const ITEM_WIDTH = isMobile ? 300 : 480;
    const GAP = isMobile ? 24 : 56;
    const CARD_HEIGHT = isMobile ? 420 : 580;

    const itemsCount = content.length + 1;
    const totalDistance = (itemsCount - 1) * (ITEM_WIDTH + GAP);

    const x = useTransform(scrollYProgress, [0.15, 0.78], [0, -totalDistance]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

    const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.18], [0, 1, 1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.18], [20, -20]);

    const trackOpacity = useTransform(scrollYProgress, [0.12, 0.20, 0.78, 0.88], [0, 1, 1, 0]);

    const outroY = useTransform(scrollYProgress, [0.80, 0.95], ["100vh", "0vh"]);
    const outroOpacity = useTransform(scrollYProgress, [0.80, 0.85], [0, 1]);
    const outroScale = useTransform(scrollYProgress, [0.85, 1], [0.95, 1]);

    const imageParallax = useTransform(scrollYProgress, [0.15, 0.78], [100, -100]);

    // ── PROGRESS INDICATOR LOGIC ──
    const rawProgress = useTransform(scrollYProgress, [0.15, 0.78], [0, 1]);
    const smoothProgress = useSpring(rawProgress, { stiffness: 100, damping: 30, mass: 1 });
    const progressPercentage = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative h-[850vh] bg-theme font-freight" style={{ overflowX: "clip" }}>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none pt-20">

                {/* 1. INTRO PHASE */}
                <motion.section
                    style={{ opacity: introOpacity, y: introY }}
                    className="absolute inset-x-0 top-0 bottom-0 z-30 flex flex-col justify-center items-center text-center px-8 overflow-hidden"
                >
                    <span className="text-sm tracking-[0.5em] font-black uppercase text-[#9E8976] block mb-6 px-6 py-2 rounded-full border border-[#9E8976]/20 bg-[#9E8976]/8">
                        {subtitle || "SERVICE EXPERTISE"}
                    </span>
                    <h1 className="text-6xl md:text-9xl font-black text-theme tracking-tighter uppercase leading-none font-freight">
                        {title || "What UPLIFT Do"}
                    </h1>
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="w-px h-12 bg-gradient-to-b from-[#9E8976] to-transparent animate-pulse" />
                        <span className="text-theme-2 text-[10px] font-black uppercase tracking-[0.4em]">
                            Scroll to uncover
                        </span>
                    </div>
                </motion.section>

                {/* 2. HORIZONTAL TRACK PHASE */}
                <motion.div
                    style={{ opacity: trackOpacity }}
                    className="relative z-20 w-full flex items-center justify-center pointer-events-auto"
                >
                    <div
                        className="relative mx-auto flex items-center justify-start overflow-visible"
                        style={{ width: `${ITEM_WIDTH}px` }}
                    >
                        <motion.div
                            className="flex will-change-transform"
                            style={{ x: smoothX, gap: `${GAP}px` }}
                        >
                            {/* SLIDE 0: TITLE CARD — light themed */}
                            <div
                                className="flex-shrink-0 flex flex-col justify-center items-center text-center p-8 rounded-[3rem] bg-theme-surface border border-theme backdrop-blur-3xl relative overflow-hidden group"
                                style={{ width: `${ITEM_WIDTH}px`, height: `${CARD_HEIGHT}px`, boxShadow: "var(--theme-card-shadow)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#9E8976]/10 via-transparent to-transparent opacity-50" />
                                <h2 className="text-4xl md:text-6xl font-black text-theme tracking-tighter uppercase leading-[0.85] z-10 font-freight">
                                    {title || "What UPLIFT Do"}
                                </h2>
                                <div className="mt-10 w-20 h-[2px] bg-gradient-to-r from-transparent via-[#9E8976] to-transparent z-10" />
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#9E8976]/5 blur-[100px] rounded-full" />
                            </div>

                            {/* SLIDES 1 to N: IMAGE CARDS — always dark (photo bg) */}
                            {content.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative flex-shrink-0 overflow-hidden rounded-[3rem] bg-neutral-900 border border-white/5 transition-all duration-700 hover:border-[#9E8976]/30 shadow-2xl"
                                    style={{ width: `${ITEM_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
                                >
                                    {/* Image with parallax */}
                                    <motion.div
                                        style={{ x: imageParallax }}
                                        className="absolute inset-y-0 -left-10 -right-10 z-0 transition-transform duration-1000 group-hover:scale-110"
                                    >
                                        <div className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000">
                                            {item.content}
                                        </div>
                                    </motion.div>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />

                                    {/* Text content */}
                                    <div className="absolute bottom-10 left-10 z-10 pr-10">
                                        <span className="text-[10px] font-sans font-black text-[#9E8976] mb-4 block tracking-[0.4em] uppercase">
                                            0{index + 1} / {item.category || "Service"}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-5 font-freight">
                                            {item.title}
                                        </h2>
                                        <p className="text-white/40 text-sm leading-relaxed max-w-[320px] font-sans">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Ghost number */}
                                    <div className="absolute top-8 right-10 z-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                                        <span className="text-7xl font-black text-white tracking-tighter font-freight italic">0{index + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress indicator — Scrub Line & Knob */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 w-[240px] md:w-[320px]">
                        <span className="text-[10px] font-black text-theme-3 tracking-widest uppercase flex-none">01</span>
                        
                        <div className="flex-1 h-8 flex items-center relative">
                            {/* Track background */}
                            <div className="absolute inset-x-0 h-px bg-theme-border-md opacity-20" />
                            
                            {/* Active track filling */}
                            <motion.div 
                                className="absolute left-0 h-px bg-[#9E8976] origin-left"
                                style={{ width: progressPercentage }}
                            />
                            
                            {/* Knob / dot */}
                            <motion.div 
                                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#9E8976] border-2 border-theme-surface shadow-lg"
                                style={{ left: progressPercentage, x: "-50%" }}
                            />
                        </div>

                        <span className="text-[10px] font-black text-theme-3 tracking-widest uppercase flex-none">0{content.length}</span>
                    </div>
                </motion.div>

                {/* 3. OUTRO PHASE */}
                <motion.section
                    style={{ y: outroY, opacity: outroOpacity, scale: outroScale }}
                    className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center bg-theme px-8"
                >
                    <motion.div className="relative overflow-hidden">
                        <span className="text-white dark:text-[#9E8976] text-[15rem] md:text-[30rem] font-black tracking-tighter font-freight uppercase leading-none select-none">
                            UPLIFT
                        </span>
                    </motion.div>

                    <div className="flex flex-col gap-3 -mt-10 md:-mt-32">
                        <p className="text-theme text-2xl font-black uppercase tracking-[0.6em] animate-pulse">
                            Omnichannel Marketing Agency in Medan
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-6">
                            <div className="h-px w-8 border-theme-md opacity-50" />
                            <p className="text-theme-2 text-[10px] uppercase tracking-[1em] font-medium opacity-50">
                                Available 2024
                            </p>
                            <div className="h-px w-8 border-theme-md opacity-50" />
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}