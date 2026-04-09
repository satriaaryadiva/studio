"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Timeline = ({ data }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 60%"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    return (
        <div className="w-full" ref={ref}>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-20">
                {data.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        total={data.length}
                    />
                ))}

                {/* Vertical animated line */}
                <div className="absolute left-[34px] md:left-[34px] top-0 bottom-0 w-[3px]">
                    {/* Track */}
                    <div className="absolute inset-0 rounded-full bg-neutral-100" />
                    {/* Animated fill */}
                    <motion.div
                        style={{
                            height: lineHeight,
                            opacity: lineOpacity,
                        }}
                        className="absolute top-0 left-0 right-0 w-full rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                    />
                </div>
            </div>
        </div>
    );
};

function TimelineItem({ item, index, total }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "start 40%"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    const phaseColors = [
        { from: "#06b6d4", to: "#10b981", bg: "rgba(6, 182, 212, 0.08)", border: "rgba(6, 182, 212, 0.2)" },
        { from: "#8b5cf6", to: "#6366f1", bg: "rgba(139, 92, 246, 0.08)", border: "rgba(139, 92, 246, 0.2)" },
        { from: "#f97316", to: "#ec4899", bg: "rgba(249, 115, 22, 0.08)", border: "rgba(249, 115, 22, 0.2)" },
        { from: "#10b981", to: "#84cc16", bg: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.2)" },
    ];

    const color = phaseColors[index % phaseColors.length];

    return (
        <div
            ref={ref}
            className="relative flex gap-10 md:gap-20 pb-20 md:pb-32 last:pb-0"
        >
            {/* Left: Dot & connector */}
            <div className="relative z-10 flex-none w-[18px]">
                <motion.div
                    style={{ opacity, scale }}
                    className="relative flex items-center justify-center"
                >
                    {/* Glow ring */}
                    <div
                        className="absolute h-12 w-12 rounded-full blur-xl opacity-60"
                        style={{ backgroundColor: color.from }}
                    />
                    {/* Outer ring */}
                    <div
                        className="h-[18px] w-[18px] rounded-full border-[3px] border-white"
                        style={{
                            background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                        }}
                    />
                </motion.div>
            </div>

            {/* Right: Content card */}
            <motion.div
                style={{ opacity, y }}
                className="flex-1 min-w-0 -mt-1"
            >
                {/* Phase badge */}
                <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                    style={{ backgroundColor: color.bg, border: `1px solid ${color.border}` }}
                >
                    <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                    />
                    <span
                        className="text-[10px] tracking-[0.2em] font-bold uppercase"
                        style={{ color: color.from }}
                    >
                        Phase {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-neutral-950 md:text-4xl lg:text-5xl mb-6 leading-tight text-freight">
                    {item.title}
                </h3>

                {/* Content wrapper with subtle card */}
                <div
                    className="rounded-3xl border p-6 md:p-8 transition-all duration-500 hover:shadow-lg"
                    style={{ backgroundColor: color.bg, borderColor: color.border }}
                >
                    {item.content}
                </div>

                {/* Connector line to next */}
                {index < total - 1 && (
                    <div className="mt-8 flex items-center gap-3 text-neutral-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span className="text-xs font-medium tracking-wider uppercase">Selanjutnya</span>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
