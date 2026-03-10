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
    const ITEM_WIDTH = isMobile ? 320 : 500;
    const GAP = isMobile ? 24 : 80;
    
    // Total items = Service cards + 1 for the Intro Slide Card
    const itemsCount = content.length + 1;
    const totalDistance = (itemsCount - 1) * (ITEM_WIDTH + GAP);
    
    // --- PHASED SCROLL TIMELINE ---
    // 0.00 - 0.15: Intro Visuals
    // 0.15 - 0.78: Horizontal Track Translation
    // 0.80 - 0.98: Final UPLIFT Outro

    const x = useTransform(scrollYProgress, [0.15, 0.78], [0, -totalDistance]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

    // Intro Phase
    const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.18], [0, 1, 1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.18], [20, -20]);

    // Track Opacity
    const trackOpacity = useTransform(scrollYProgress, [0.12, 0.20, 0.78, 0.88], [0, 1, 1, 0]);

    // Outro Phase
    const outroY = useTransform(scrollYProgress, [0.80, 0.95], ["100vh", "0vh"]);
    const outroOpacity = useTransform(scrollYProgress, [0.80, 0.85], [0, 1]);
    const outroScale = useTransform(scrollYProgress, [0.85, 1], [0.95, 1]);

    // Individual Card Internal Parallax
    const imageParallax = useTransform(scrollYProgress, [0.15, 0.78], [100, -100]);

    return (
        <div ref={containerRef} className="relative h-[850vh] bg-neutral-950 font-freight">
            
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
                
                {/* 1. SEAMLESS INTRO PHASE */}
                <motion.section 
                    style={{ opacity: introOpacity, y: introY }}
                    className="absolute inset-x-0 top-0 bottom-0 z-30 flex flex-col justify-center items-center text-center px-8"
                >
                    <span className="text-[10px] tracking-[0.8em] font-black uppercase text-yellow-600/60 block mb-6 px-4 py-1 rounded-full border border-yellow-600/20 bg-yellow-600/5">
                        {subtitle || "SERVICE EXPERTISE"}
                    </span>
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
                        {title || "What UPLIFT Do"}
                    </h1>
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="w-px h-12 bg-gradient-to-b from-yellow-600 to-transparent animate-bounce" />
                        <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[1em]">
                            Scroll to uncover
                        </span>
                    </div>
                </motion.section>

                {/* 2. CORE HORIZONTAL PHASE */}
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
                            {/* SLIDE 0: TITLE CARD - Ultra Premium Glass */}
                            <div 
                                className="flex-shrink-0 flex flex-col justify-center items-center text-center p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden group"
                                style={{ width: `${ITEM_WIDTH}px`, height: isMobile ? "450px" : "650px" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent opacity-50" />
                                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85] z-10">
                                    {title || "What UPLIFT Do"}
                                </h2>
                                <div className="mt-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent z-10" />
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full" />
                            </div>

                            {/* SLIDES 1 to N: CONTENT CARDS */}
                            {content.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative flex-shrink-0 overflow-hidden   bg-neutral-900 border border-white/10 transition-all duration-1000 hover:border-yellow-600/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                                    style={{ width: `${ITEM_WIDTH}px`, height: isMobile ? "450px" : "650px" }}
                                >
                                    {/* Visual content with Internal Parallax Effect */}
                                    <motion.div 
                                        style={{ x: imageParallax }}
                                        className="absolute inset-y-0 -left-20 -right-20 z-0 transition-transform duration-1000 group-hover:scale-110"
                                    >
                                        <div className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                    
                                    {/* Deep Dynamic Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95 group-hover:opacity-85 transition-opacity duration-700" />
                                    
                                    <div className="absolute bottom-12 left-12 z-10 pr-12">
                                        <motion.span 
                                            initial={{ opacity: 0.5 }}
                                            whileHover={{ opacity: 1 }}
                                            className="text-[11px] font-bold text-yellow-600 mb-4 block tracking-[0.4em] uppercase"
                                        >
                                            0{index + 1} / {item.category || "Service"}
                                        </motion.span>
                                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6 transform group-hover:-translate-y-2 transition-transform duration-700">
                                            {item.title}
                                        </h2>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-[320px] opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-1000">
                                            {item.description}
                                        </p>
                                    </div>
                                    
                                    {/* Ghost Number Reveal on Hover */}
                                    <div className="absolute top-12 right-12 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
                                        <span className="text-4xl font-black text-white tracking-tighter italic">
                                            #{index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Progress indicator - Refined Design */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
                        <span className="text-[9px] font-black text-white/20 tracking-widest uppercase">Start</span>
                        <div className="w-48 h-[1rem] bg-white/5 overflow-hidden rounded-full relative">
                            <motion.div 
                                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-yellow-600 to-yellow-400"
                                style={{ width: useTransform(scrollYProgress, [0.15, 0.78], ["0%", "100%"]) }}
                            />
                        </div>
                        <span className="text-[9px] font-black text-white/20 tracking-widest uppercase">End</span>
                    </div>
                </motion.div>

                {/* 3. CINEMATIC OUTRO PHASE (UPLIFT Reveal) */}
                <motion.section 
                    style={{ y: outroY, opacity: outroOpacity, scale: outroScale }}
                    className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center bg-neutral-950 px-8"
                >
                    <motion.div 
                        initial={{ tracking: "-0.5em" }}
                        animate={{ tracking: "calc(-0.5em + 1vw)" }}
                        className="relative overflow-hidden"
                    >
                        <span className="text-white/5 text-[15rem] md:text-[30rem] font-black tracking-tighter uppercase leading-none select-none">
                            UPLIFT
                        </span>
                    </motion.div>
                    
                    <div className="flex flex-col gap-3 -mt-10 md:-mt-32">
                        <p className="text-yellow-600 text-2xl font-black uppercase tracking-[0.6em] animate-pulse">
                            Uplift Your Brand
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-6">
                            <div className="h-px w-8 bg-white/20" />
                            <p className="text-neutral-500 text-[10px] uppercase tracking-[1em] font-medium opacity-50">
                                Available 2024
                            </p>
                            <div className="h-px w-8 bg-white/20" />
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}