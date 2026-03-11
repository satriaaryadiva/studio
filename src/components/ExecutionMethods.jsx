"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { processData } from "@/data/processData";

const MethodItem = ({ method, index, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full py-8 md:py-12 flex items-center justify-between text-left group hover:opacity-100 opacity-60 transition-opacity duration-300"
                style={{ opacity: isOpen ? 1 : 0.6 }}
            >
                <div className="flex items-center gap-8">
                    <span className="text-sm font-black text-yellow-600 font-freight">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter text-[#9b7a60] uppercase font-freight transition-transform duration-500 group-hover:translate-x-4">
                        {method.title}
                    </h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-white/40 group-hover:text-white transition-colors"
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 4V28M4 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="pb-12 md:pl-24">
                            <div className="bg-white/5 rounded-[2rem] border border-white/10 p-8 md:p-12">
                                {method.content}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ExecutionMethods() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-neutral-950 py-24 md:py-32 relative overflow-x-clip flex items-center">
            <Container className="w-full">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
                    {/* Left Column - Sticky Content */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <FadeIn>
                                <span className="text-[10px] tracking-[0.5em] font-black uppercase text-white/30 block mb-6 font-freight">
                                    OUR PROCESS
                                </span>
                                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase font-freight mb-12">
                                    Execution <br /> Methods
                                </h2>
                                <div className="h-px w-24 bg-yellow-600 mb-8" />
                                <p className="text-neutral-400 text-lg leading-relaxed max-w-sm font-medium">
                                    Kami memastikan setiap orang memahami tujuan akhir dan memiliki pemahaman yang jelas tentang langkah-langkah yang diperlukan.
                                </p>

                                {/* Visual Accent */}
                                <div className="mt-16 relative hidden lg:block">
                                    <div className="w-px h-32 bg-gradient-to-b from-yellow-600 to-transparent absolute left-0 top-0" />
                                    <div className="pl-8 flex flex-col gap-6">
                                        <div className="text-xs font-bold text-white/20 tracking-widest uppercase font-freight">Iterative Design</div>
                                        <div className="text-xs font-bold text-white/20 tracking-widest uppercase font-freight">Strategic Execution</div>
                                        <div className="text-xs font-bold text-white/20 tracking-widest uppercase font-freight">Performance Focused</div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Right Column - Accordion Items */}
                    <div className="lg:w-2/3">
                        <FadeIn>
                            <div className="border-t border-white/10">
                                {processData.map((method, index) => (
                                    <MethodItem
                                        key={index}
                                        method={method}
                                        index={index}
                                        isOpen={openIndex === index}
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>

            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/[0.02] rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>
    );
}
