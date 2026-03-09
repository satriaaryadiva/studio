"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#0a0a0a",
        "#0c1222",
        "#0a0a0a",
        "#110c1a",
        "#0a0f0d",
    ];

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative grid grid-cols-1 lg:grid-cols-2 h-[42rem] overflow-y-auto rounded-3xl rounded-b-none p-8 md:p-14"
            ref={ref}
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            {/* Hide scrollbar */}
            <style>{`
        .sticky-scroll::-webkit-scrollbar { display: none; }
      `}</style>

            {/* Left: Text Content */}
            <div className="relative">
                <div className="max-w-lg">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-28 first:mt-14">
                            {/* Step number */}
                            <motion.div
                                animate={{ opacity: activeCard === index ? 1 : 0.15 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 flex items-center gap-4"
                            >
                                <span
                                    className="text-[11px] tracking-[0.3em] font-bold uppercase transition-colors duration-500"
                                    style={{
                                        color: activeCard === index ? "white" : "#525252",
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div
                                    className="h-px flex-1 max-w-[80px] transition-all duration-700"
                                    style={{
                                        background:
                                            activeCard === index
                                                ? "rgba(255,255,255,0.3)"
                                                : "rgba(255,255,255,0.05)",
                                        width: activeCard === index ? 80 : 40,
                                    }}
                                />
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.15,
                                    y: activeCard === index ? 0 : 15,
                                }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-tight"
                            >
                                {item.title}
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                animate={{
                                    opacity: activeCard === index ? 0.8 : 0.1,
                                    y: activeCard === index ? 0 : 15,
                                }}
                                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-5 max-w-sm text-[15px] leading-relaxed text-neutral-400"
                            >
                                {item.description}
                            </motion.p>

                            {/* Progress dots */}
                            <motion.div
                                animate={{ opacity: activeCard === index ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="mt-8 flex gap-2"
                            >
                                {content.map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-1 rounded-full transition-all duration-500"
                                        style={{
                                            width: i === activeCard ? 24 : 8,
                                            backgroundColor:
                                                i === activeCard
                                                    ? "white"
                                                    : "rgba(255,255,255,0.15)",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-72" />
                </div>
            </div>

            {/* Right: Sticky Visual — centered and full */}
            <div className="hidden lg:flex items-center justify-center sticky top-0 h-[42rem]">
                <div
                    className={clsx(
                        "w-full h-[36rem] bg-attachment-fixed overflow-hidden rounded-3xl shadow-2xl",
                        contentClassName
                    )}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCard}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full w-full"
                        >
                            {content[activeCard].content ?? null}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};
