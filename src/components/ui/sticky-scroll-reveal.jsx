"use client";
import React from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export const StickyScroll = ({ content, title, subtitle }) => {
    return (
        <section className="relative bg-neutral-950 py-24 sm:py-32">
            {/* Section Header */}
            <div className="px-8 md:px-24 mb-16 md:mb-24">
                <FadeIn>
                    <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-white/40 block mb-4">
                        {subtitle || "Proses Kami"}
                    </span>
                    <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {title || "What UPLIFT Do"}
                    </h2>
                </FadeIn>
            </div>

            {/* Vertical Content Stack */}
            <div className="px-8 md:px-24 space-y-32 md:space-y-48">
                {content.map((item, index) => (
                    <div
                        key={item.title + index}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    >
                        {/* Left: Content Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                type: "spring",
                                damping: 15,
                                stiffness: 100,
                                duration: 1
                            }}
                            className="order-2 lg:order-1"
                        >
                            <div className="mb-8 flex items-center gap-6">
                                <span className="text-2xl font-display font-medium text-white/30 italic">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="h-px w-24 bg-white/10" />
                            </div>

                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-freight tracking-tight leading-[1.1]">
                                {item.title}
                            </h3>

                            <p className="max-w-xl text-lg md:text-2xl text-neutral-400 leading-relaxed font-light">
                                {item.description}
                            </p>

                            <div className="mt-12 group flex items-center gap-4 text-white/20 hover:text-white/80 transition-all duration-500 cursor-pointer w-fit">
                                <div className="h-px w-12 bg-current" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Solution</span>
                            </div>
                        </motion.div>

                        {/* Right: Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                damping: 12,
                                stiffness: 90,
                                duration: 1.2
                            }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square overflow-hidden bg-neutral-900 border border-theme shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 z-0">
                                    {item.content}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent z-10" />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Background Depth */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>
        </section>
    );
};
