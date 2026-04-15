"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
    const ITEM_WIDTH = isMobile ? 260 : 380;
    const GAP = isMobile ? 60 : 140;

    const itemsCount = content.length;
    const totalDistance = itemsCount * (ITEM_WIDTH + GAP);

    const x = useTransform(scrollYProgress, [0.1, 0.85], [0, -totalDistance]);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

    const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

    const trackOpacity = useTransform(scrollYProgress, [0.05, 0.12, 0.82, 0.9], [0, 1, 1, 0]);

    const outroY = useTransform(scrollYProgress, [0.85, 0.95], ["30vh", "0vh"]);
    const outroOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    const rawProgress = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[550vh] bg-theme" style={{ overflowX: "clip" }}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pointer-events-none">

                {/* ── INTRO ── Resn-style minimal */}
                <motion.section
                    style={{ opacity: introOpacity, y: introY }}
                    className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-8"
                >
                    <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-theme-3 mb-5">
                        {subtitle || "Case Studies"}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-freight font-black tracking-tighter text-theme uppercase leading-[0.9]">
                        {title || "Selected Works"}
                    </h1>
                </motion.section>

                {/* ── GALLERY TRACK ── Clean, borderless, floating images */}
                <motion.div
                    style={{ opacity: trackOpacity }}
                    className="relative z-20 w-full flex items-center h-full pointer-events-auto"
                >
                    <div className="relative flex items-center justify-start w-full pl-[12vw] md:pl-[20vw] h-full">
                        <motion.div
                            className="flex items-end will-change-transform"
                            style={{ x: smoothX, gap: `${GAP}px` }}
                        >
                            {content.map((item, index) => {
                                // Alternate between taller and wider aspect ratios for visual rhythm
                                const aspects = ["aspect-[3/4]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[1/1]", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]"];
                                const aspect = aspects[index % aspects.length];
                                // Stagger vertical positions like resn.co.nz
                                const offsets = [0, -60, 20, -40, 10, -70, 30];
                                const yOffset = isMobile ? 0 : offsets[index % offsets.length];

                                return (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 flex flex-col group cursor-pointer"
                                        style={{
                                            width: `${ITEM_WIDTH}px`,
                                            transform: `translateY(${yOffset}px)`,
                                        }}
                                    >
                                        {/* Image — no border, no card, just floating */}
                                        <div className={`relative w-full ${aspect} overflow-hidden`}>
                                            <div className="w-full h-full group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-out">
                                                {item.content}
                                            </div>
                                        </div>

                                        {/* Typography — resn.co.nz style: centered, uppercase title + lighter category */}
                                        <div className="mt-5 text-center">
                                            <h2 className="text-[11px] md:text-[13px] font-sans font-black text-theme uppercase tracking-[0.2em] leading-tight">
                                                {item.title}
                                            </h2>
                                            <span className="text-[10px] md:text-[11px] font-sans font-normal text-theme-3 tracking-[0.15em] mt-1 block">
                                                {item.category || "Project"}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Minimal progress indicator — just a thin line */}
                    <div className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 w-24 md:w-32 z-30 pointer-events-none">
                        <div className="w-full h-px bg-theme-md relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-theme-3 origin-left"
                                style={{ scaleX: rawProgress }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* ── OUTRO ── */}
                <motion.section
                    style={{ y: outroY, opacity: outroOpacity }}
                    className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center px-8 pointer-events-auto"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-freight font-black text-theme tracking-tighter mb-10 max-w-2xl leading-[1.05] uppercase">
                        We orchestrate growth<br />for modern brands.
                    </h2>
                    <a
                        href="/services"
                        className="group inline-flex items-center gap-3 text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-theme-3 hover:text-theme transition-colors duration-300"
                    >
                        Explore Services
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.section>
            </div>
        </div>
    );
}