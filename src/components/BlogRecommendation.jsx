"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const popularPosts = [
    {
        id: 1,
        type: "TRENDING",
        readTime: "5 MIN",
        title: "Strategi Omni-Channel 2025",
        subtitle: "Mengapa brand perlu hadir di semua touchpoint secara konsisten.",
        href: "/blog/strategi-omnichannel",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        type: "POPULAR",
        readTime: "7 MIN",
        title: "ROI Social Media Marketing",
        subtitle:
            "Cara mengukur dan memaksimalkan return dari investasi media sosial Anda.",
        href: "/blog/roi-social-media",
        image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        type: "EDITOR'S PICK",
        readTime: "4 MIN",
        title: "Brand Identity di Era AI",
        subtitle:
            "Bagaimana kecerdasan buatan mengubah cara brand membangun identitas.",
        href: "/blog/brand-identity-ai",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function BlogRecommendation() {
    const [featured, ...rest] = popularPosts;

    return (
        <section className="bg-theme-muted py-20 sm:py-28 border-y border-theme-md">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="text-[11px] tracking-[0.5em] font-black uppercase text-[#9E8976] block mb-6">
                        🔥 Trending Insights
                    </span>
                    <h2 className="font-freight text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-theme uppercase leading-[0.85]">
                        Most <span className="text-[#9E8976]">Popular</span> <br />
                        This Week.
                    </h2>
                </motion.div>

                {/* Featured Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid  grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* Large Featured Post */}
                    <motion.article
                        variants={itemVariants}
                        className="group cursor-pointer lg:row-span-2 relative"
                    >
                        <Link href={featured.href} className="block h-full">
                            <div className="relative overflow-hidden h-full min-h-[500px] lg:min-h-full bg-neutral-950 border border-theme-md group-hover:border-[#9E8976]/40 transition-colors duration-500">
                                <motion.img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-40"
                                    style={{ willChange: "transform, opacity" }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                                {/* Content overlay — High Contrast */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="inline-flex items-center rounded-full bg-[#9E8976] px-4 py-1.5 text-[10px] tracking-[0.3em] font-black uppercase text-white shadow-lg shadow-[#9E8976]/20">
                                            {featured.type}
                                        </span>
                                        <div className="h-px w-8 bg-white/20" />
                                        <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/50">
                                            {featured.readTime} READ
                                        </span>
                                    </div>
                                    <h3 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black font-freight tracking-tighter leading-[0.9] mb-6 uppercase transition-transform duration-700 group-hover:-translate-y-2">
                                        {featured.title}
                                    </h3>
                                    <p className="text-white/60 text-base leading-relaxed max-w-lg mb-8 font-sans">
                                        {featured.subtitle}
                                    </p>
                                    
                                    <div className="flex items-center gap-3 text-[#9E8976] text-[11px] font-black uppercase tracking-[0.4em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        Explore Article
                                        <svg viewBox="0 0 16 6" className="h-2 w-5 transition-transform group-hover:translate-x-2" fill="currentColor">
                                            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.article> 
 
                    {rest.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            className="group   cursor-pointer"
                        >
                            <Link
                                href={post.href}
                                className="flex flex-col sm:flex-row gap-8 items-center rounded-4xl bg-theme-surface border border-theme-md p-6 transition-all duration-500 hover:border-[#9E8976]/30 hover:bg-theme-muted h-full"
                            >
                                {/* Thumbnail */}
                                <div className="relative overflow-hidden w-full sm:w-44 h-44 flex-none bg-theme-muted border border-theme-md rounded-2xl">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                                        style={{ willChange: "transform" }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col justify-center min-w-0 flex-1 py-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[10px] tracking-[0.3em] font-black uppercase text-[#9E8976]">
                                            {post.type}
                                        </span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-theme-md" />
                                        <span className="text-[10px] tracking-[0.3em] font-black uppercase text-theme-3">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-theme text-2xl font-black font-freight tracking-tighter leading-tight mb-3 transition-colors group-hover:text-[#9E8976]">
                                        {post.title}
                                    </h3>
                                    <p className="text-theme-2 text-sm leading-relaxed line-clamp-2 font-sans">
                                        {post.subtitle}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA to Blog */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="/blog"
                        className="group flex items-center gap-6 rounded-full border border-theme-md px-12 py-5 text-xs font-black uppercase tracking-[0.4em] text-theme transition-all duration-500 hover:bg-[#9E8976] hover:text-white hover:border-[#9E8976] shadow-xl hover:shadow-[#9E8976]/20"
                    >
                        View Full Archives
                        <svg
                            viewBox="0 0 16 6"
                            className="h-2 w-6 transition-transform duration-500 group-hover:translate-x-3"
                        >
                            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" fill="currentColor" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
