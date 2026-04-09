"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { servicesData } from "@/constants";
import ServiceDetail from "@/components/ServiceDetail";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
    const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

    const activeService = servicesData.find((s) => s.id === activeServiceId);

    return (
        <main>
            <PageIntro
                eyebrow="Our Services"
                title="Apa yang Uplift bisa bantu untuk Brand Anda?"
                image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1074"
                imagePosition="right"
            >
                <p>
                    Kami mengintegrasikan strategi, kreativitas, dan teknologi untuk memberikan hasil nyata bagi bisnis Anda.
                </p>
            </PageIntro>

            <Container className="mt-12 pb-12 sm:mt-16 lg:mt-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:col-span-4 lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="rounded-4xl bg-white p-8 border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                                    All Services
                                </h2>
                                <nav className="mt-6">
                                    <ul role="list" className="space-y-4">
                                        {servicesData.map((service) => (
                                            <li key={service.id}>
                                                <button
                                                    onClick={() => setActiveServiceId(service.id)}
                                                    className={clsx(
                                                        "group flex w-full items-center gap-x-3 py-1.5 text-sm transition text-left focus:outline-none",
                                                        activeServiceId === service.id ? "text-neutral-950 font-bold translate-x-1" : "text-neutral-500 hover:text-neutral-950 hover:translate-x-0.5"
                                                    )}
                                                >
                                                    <span className={clsx(
                                                        "h-1.5 w-1.5 rounded-full transition-all duration-300",
                                                        activeServiceId === service.id ? "bg-neutral-950 scale-150 shadow-[0_0_8px_rgba(0,0,0,0.3)]" : "bg-transparent group-hover:bg-neutral-300"
                                                    )} />
                                                    <span className="relative">
                                                        {service.title}
                                                        {activeServiceId === service.id && (
                                                            <motion.span
                                                                layoutId="activeUnderline"
                                                                className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-gradient-to-r from-neutral-950 to-neutral-400"
                                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                            />
                                                        )}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className="rounded-4xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-indigo-950 p-8 text-white text-center shadow-2xl relative overflow-hidden group border border-white/5">
                                <div className="relative z-10">
                                    <h3 className="font-display text-xl font-medium">Ready to start?</h3>
                                    <p className="mt-4 text-sm text-neutral-400">
                                        Konsultasikan kebutuhan brand Anda dengan tim ahli kami sekarang juga.
                                    </p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href="/contact"
                                            className="mt-8 block rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)]"
                                        >
                                            Get In Touch
                                        </Link>
                                    </motion.div>
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:rotate-45" />
                                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-colors duration-500" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeServiceId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ServiceDetail {...activeService} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </main>
    );
}
