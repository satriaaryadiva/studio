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
        <section className="bg-[#0a0a0a] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-neutral-400">
                        🔥 Populer Minggu Ini
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Rekomendasi untuk Anda
                    </h2>
                </motion.div>

                {/* Featured Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* Large Featured Post */}
                    <motion.article
                        variants={itemVariants}
                        className="group cursor-pointer lg:row-span-2"
                    >
                        <Link href={featured.href} className="block h-full">
                            <div className="relative overflow-hidden h-full min-h-[400px] lg:min-h-full bg-neutral-900 border border-theme">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.4s] ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[9px] tracking-[0.2em] font-bold uppercase text-white">
                                            {featured.type}
                                        </span>
                                        <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-white/70">
                                            {featured.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-neutral-200">
                                        {featured.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed max-w-md">
                                        {featured.subtitle}
                                    </p>
                                    <div className="mt-6 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        Baca Selengkapnya
                                        <svg
                                            viewBox="0 0 16 6"
                                            className="h-2 w-4 transition-transform group-hover:translate-x-1"
                                        >
                                            <path
                                                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.article>

                    {/* Side Posts */}
                    {rest.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            <Link
                                href={post.href}
                                className="flex gap-6 items-start rounded-2xl bg-white/5 border border-white/10 p-5 transition-colors duration-300 hover:bg-white/10 h-full"
                            >
                                {/* Thumbnail */}
                                <div className="relative overflow-hidden w-32 h-32 sm:w-40 sm:h-40 flex-none bg-neutral-800 border border-theme">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col justify-center min-w-0 flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-neutral-400">
                                            {post.type}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                                        <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-neutral-400">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-white text-lg font-bold leading-snug mb-2 transition-colors group-hover:text-neutral-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
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
                        className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:border-white"
                    >
                        Lihat Semua Artikel
                        <svg
                            viewBox="0 0 16 6"
                            className="h-2 w-4 transition-transform duration-300 group-hover:translate-x-2"
                        >
                            <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" fill="currentColor" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
