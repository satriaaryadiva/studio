"use client";
import React from "react";
import FadeIn from "./FadeIn";
import ServiceImage from "./ServiceImage";
import { motion } from "framer-motion";

const ServiceDetail = ({
    title,
    description,
    mission,
    challenge,
    details,
    features,
    image,
    secondaryImage,
    whyItMattersList
}) => {
    return (
        <div className="py-8 first:pt-0 last:pb-0">
            <FadeIn>
                <div className="group relative overflow-hidden rounded-4xl bg-neutral-100 p-8 sm:p-12 transition-all duration-500 hover:shadow-[0_0_80px_-20px_rgba(0,0,0,0.1)]">
                    <div className="relative z-10 space-y-12">
                        {/* Header: Title + Image */}
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl"
                                >
                                    {title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="mt-6 text-xl text-neutral-600 leading-relaxed font-light"
                                >
                                    {description}
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="mt-8 lg:mt-0"
                            >
                                <ServiceImage src={image} alt={title} className="shadow-2xl ring-1 ring-neutral-950/5" />
                            </motion.div>
                        </div>

                        {/* Detailed Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-neutral prose-lg max-w-none text-neutral-600"
                        >
                            <p className="leading-relaxed">{details}</p>
                        </motion.div>

                        {/* Split Boxes: Mission & Challenge */}
                        {(mission || challenge) && (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {mission && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="rounded-3xl bg-gradient-to-br from-indigo-50/50 to-white p-8 border border-indigo-100/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-indigo-500/5 group/box"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 transition-transform group-hover/box:scale-150 rotate-in-view" />
                                            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-900">
                                                Our Mission
                                            </h4>
                                        </div>
                                        <p className="mt-4 text-base text-indigo-950 font-normal leading-relaxed">
                                            {mission}
                                        </p>
                                    </motion.div>
                                )}
                                {challenge && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="rounded-3xl bg-gradient-to-br from-rose-50/50 to-white p-8 border border-rose-100/50 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-rose-500/5 group/box"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-rose-600 transition-transform group-hover/box:scale-150" />
                                            <h4 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-rose-900">
                                                The Challenge
                                            </h4>
                                        </div>
                                        <p className="mt-4 text-base text-rose-950 font-normal leading-relaxed">
                                            {challenge}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {/* Key Features: Badges */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                        >
                            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-950">
                                Key Features & Capabilities
                            </h4>
                            <div className="mt-6 flex flex-wrap gap-3">
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            show: { opacity: 1, scale: 1 }
                                        }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#f5f5f5" }}
                                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm border border-neutral-200 flex items-center gap-2 transition-colors"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Secondary Image */}
                        {secondaryImage && (
                            <motion.div
                                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                                whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                                viewport={{ once: true }}
                                className="mt-12 overflow-hidden rounded-3xl shadow-2xl relative"
                            >
                                <ServiceImage src={secondaryImage} alt={`${title} secondary`} aspect="aspect-[21/9]" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                            </motion.div>
                        )}

                        {/* Why It Matters: Numbered List */}
                        {whyItMattersList && (
                            <div className="pt-12 border-t border-neutral-200">
                                <motion.h4
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 font-display text-xl font-medium text-neutral-950"
                                >
                                    <span className="text-neutral-400">01</span>
                                    WHY IT MATTERS TO YOU
                                </motion.h4>
                                <motion.ul
                                    role="list"
                                    className="mt-8 space-y-8 text-neutral-600"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {whyItMattersList.map((item, index) => (
                                        <motion.li
                                            key={item.title}
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                show: { opacity: 1, x: 0 }
                                            }}
                                            className="flex gap-x-6 group/item"
                                        >
                                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-neutral-950 text-white font-display text-sm font-bold shadow-lg transition-transform group-hover/item:scale-110">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h5 className="font-display text-base font-semibold text-neutral-950">
                                                    {item.title}
                                                </h5>
                                                <p className="mt-2 text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        )}
                    </div>

                    {/* Decorative background elements ala Aceternity/Glassmorphism */}
                    <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200/20 via-blue-200/10 to-transparent blur-3xl transition-all duration-1000 group-hover:from-indigo-300/30 group-hover:scale-125" />
                    <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tr from-rose-200/10 via-orange-200/5 to-transparent blur-3xl transition-all duration-1000 group-hover:from-rose-300/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.01),transparent)]" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-950/5 to-transparent" />
                </div>
            </FadeIn>
        </div>
    );
};

export default ServiceDetail;
