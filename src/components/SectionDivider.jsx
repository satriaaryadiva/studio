"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ScrollingRow = ({ text, direction = 1, isOutline = false }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xRange = direction > 0 ? ["-20%", "0%"] : ["0%", "-20%"];
    const x = useTransform(scrollYProgress, [0, 1], xRange);
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={containerRef} className="py-2 overflow-hidden whitespace-nowrap select-none">
            <motion.div
                className={`text-7xl md:text-9xl font-black tracking-tighter uppercase font-freight flex gap-8 items-center`}
                style={{
                    x: smoothX,
                    color: isOutline ? "transparent" : "var(--theme-divider-text)",
                    WebkitTextStroke: isOutline ? `3px var(--theme-divider-stroke)` : "none",
                }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="flex-shrink-0">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default function SectionDivider({
    rows = ["CREATIVE", "DESIGN", "MOTION", "STUDIO"]
}) {
    return (
        // SectionDivider stays dark intentionally — creates visual rhythm between sections
        <section className="bg-[#1A1612] py-14 md:py-14 overflow-hidden border-y border-[#F9F2E7]/8">
            <div className="flex flex-col">
                {rows.map((text, index) => (
                    <ScrollingRow
                        key={index}
                        text={text}
                        direction={index % 2 === 0 ? 1 : -1}
                        isOutline={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
}
