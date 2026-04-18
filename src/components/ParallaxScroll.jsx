"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "./Container";
import clsx from "clsx";

/* ── Kinetic Typography Reveal Config ── */
const wordReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
        y: "0%",
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

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
    const ITEM_WIDTH = isMobile ? 300 : 440;
    const GAP = isMobile ? 80 : 200;

    const itemsCount = content.length;
    const totalDistance = itemsCount * (ITEM_WIDTH + GAP);

    // Core X translation for the gallery track
    const xTranslate = useTransform(scrollYProgress, [0.1, 0.85], [100, -totalDistance]);
    const smoothX = useSpring(xTranslate, { stiffness: 60, damping: 25, mass: 0.8 });

    // Layered Parallax Transformation (Z-Depth)
    const bgX = useTransform(scrollYProgress, [0.1, 0.9], [0, -totalDistance * 0.4]);
    const fgX = useTransform(scrollYProgress, [0.1, 0.9], [200, -totalDistance * 2.2]);

    const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.08], [0, -60]);

    const trackOpacity = useTransform(scrollYProgress, [0.05, 0.12, 0.82, 0.92], [0, 1, 1, 0]);

    const outroY = useTransform(scrollYProgress, [0.85, 0.95], ["40vh", "0vh"]);
    const outroOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    const progressRaw = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);
    const progressPercent = useTransform(scrollYProgress, [0.1, 0.85], [0, 100]);

    return (
        <div ref={containerRef} className="relative h-[650vh] bg-theme" style={{ overflowX: "clip" }}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pointer-events-none">

                {/* ── INTRO IMAGES (According to Screenshot Layout) ── */}
                <motion.div
                    style={{ opacity: introOpacity }}
                    className="absolute inset-0 z-10 pointer-events-none"
                >
                    {/* Top Left (Large Asset) */}
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        src="/images/parallax/omni1.png"
                        className="absolute left-[5%] top-[15%] w-[25vw] max-w-[400px] object-contain filter drop-shadow-2xl"
                    />
                    {/* Bottom Left (Medium Asset) */}
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        src="/images/parallax/omni2.png"
                        className="absolute left-[20%] bottom-[12%] w-[18vw] max-w-[280px] object-contain filter drop-shadow-xl"
                    />
                    {/* Mid Right (Large Asset) */}
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.8 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        src="/images/parallax/omni3.png"
                        className="absolute right-[5%] top-[35%] w-[22vw] max-w-[350px] object-contain filter drop-shadow-2xl"
                    />
                    {/* Bottom Right (Small/Medium Asset) */}
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        src="/images/parallax/omni2.png"
                        className="absolute right-[25%] bottom-[10%] w-[15vw] max-w-[200px] object-contain filter drop-shadow-lg"
                    />
                </motion.div>

                {/* ── BACKGROUND LAYER (Layer 0) ── Appears during gallery scroll */}


                {/* ── INTRO SECTION ── Editorial Reveal */}
                <motion.section
                    style={{ opacity: introOpacity, y: introY }}
                    className="absolute inset-0 z-40 flex flex-col justify-center items-center text-center px-8"
                >
                    <div className="overflow-hidden mb-8">
                        <motion.span
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            className="block text-[10px] md:text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976]"
                        >
                            {subtitle || "CORE CAPABILITIES"}
                        </motion.span>
                    </div>
                    <div className="flex flex-col gap-3 overflow-hidden max-w-5xl">
                        {title ? title.split(" ").map((word, i) => (
                            <div key={i} className="overflow-hidden h-fit flex justify-center">
                                <motion.h1
                                    custom={i}
                                    variants={wordReveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="text-4xl md:text-7xl lg:text-[7vw] font-freight font-black tracking-tighter text-theme uppercase leading-[0.8] py-2"
                                >
                                    {word}
                                </motion.h1>
                            </div>
                        )) : (
                            <h1 className="text-4xl md:text-7xl lg:text-[7vw] font-freight font-black tracking-tighter text-theme uppercase leading-[0.85]">
                                SELECTED WORKS
                            </h1>
                        )}
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
                        className="h-px w-32 bg-[#9E8976] mt-16 origin-left"
                    />
                </motion.section>

                {/* ── MAIN GALLERY TRACK (Layer 1) ── */}
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

                    {/* ── FOREGROUND PARALLAX (Layer 2) ── Fast moving objects */}


                    {/* ── PROGRESS RAIL ── Bottom metadata bar */}
                    <div className="absolute bottom-12 left-0 w-full px-8 md:px-14 z-40 flex justify-between items-end">
                        <div className="flex flex-col gap-3 flex-1 max-w-[300px]">
                            <div className="flex justify-between items-center text-[8px] font-sans font-black uppercase tracking-[0.5em] text-theme-3">
                                <span>Archival Index</span>
                                <motion.span className="text-[#9E8976]">
                                    {Math.floor(progressPercent.get())}%
                                </motion.span>
                            </div>
                            <div className="w-full h-[2px] bg-theme-border relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-[#9E8976] origin-left"
                                    style={{ scaleX: progressRaw }}
                                />
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col items-end text-right">
                            <span className="text-[9px] font-sans font-black uppercase tracking-[0.5em] text-theme-2 mb-2">
                                UPLIFT / CASE_STUDIES
                            </span>
                            <span className="text-[10px] font-sans font-medium text-theme-3 tracking-[0.2em]">
                                Scroll to navigate
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* ── OUTRO SECTION ── Cinematic Closer (New Concept) */}
                <motion.section
                    style={{ y: outroY, opacity: outroOpacity }}
                    className="absolute inset-0 z-50 flex flex-col md:flex-row items-stretch pointer-events-auto bg-theme"
                >
                    {/* Left: Huge Editorial Image */}
                    <div className="hidden md:block w-1/2 relative overflow-hidden border-r border-theme-md">
                        <motion.div 
                            className="absolute inset-0 w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <img 
                                src="/images/parallax/omni_outro.png" 
                                alt="Omnichannel Ecosystem"
                                className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-[2s]"
                            />
                            {/* Inner Vignette / Shadow Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-theme/50 pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* Right: Typography & CTA */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 relative text-left">
                        <div className="hidden md:block absolute top-10 right-10 text-[9px] font-sans font-black uppercase tracking-[0.5em] text-theme-3">
                            FINAL PHASE
                        </div>
                        
                        <div className="flex flex-col gap-6 max-w-xl">
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#9E8976]">
                                READY TO SCALE?
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[4vw] font-freight font-black text-theme tracking-tighter leading-[0.85] uppercase">
                                GROW YOUR BRAND OMNICHANNEL.
                            </h2>
                            <p className="text-xs md:text-sm font-sans text-theme-3 mt-4 mb-4 leading-relaxed max-w-md">
                                Bergabunglah bersama kami untuk menciptakan ekosistem komunikasi brand yang tidak hanya estetik, tetapi juga mendulang performa nyata di seluruh platform digital.
                            </p>
                            
                            <motion.div className="w-fit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href="/services"
                                    className="group relative inline-flex items-center gap-6 bg-transparent border border-[#9E8976] hover:bg-[#9E8976] text-theme hover:text-white px-8 py-4 rounded-md text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-300"
                                >
                                    MULAI TRANSFORMASI
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform group-hover:translate-x-2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}