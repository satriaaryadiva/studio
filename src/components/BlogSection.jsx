"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const allPosts = [
    {
        id: 1,
        type: "ARTICLE",
        readTime: "5 MIN",
        title: "Modern Brand Should Feel Alive",
        subtitle: "Your Brand Isn't a File. It's a Dynamic System",
        href: "/blog/modern-brand",
        accent: "#D4F542",
        image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        type: "ARTICLE",
        readTime: "5 MIN",
        title: "2025 Transparency Report",
        subtitle: "From Commitment to Renewal",
        href: "/blog/transparency-report",
        accent: "#ffffff",
        image:
            "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        type: "PRESS",
        readTime: null,
        title: "Finalist: Campaign US Agency of the Year",
        subtitle:
            "For excellence in visual design, branding, and creative problem-solving.",
        href: "/blog/agency-of-the-year",
        accent: "#FF6B35",
        image:
            "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        type: "ARTICLE",
        readTime: "4 MIN",
        title: "Is Design Creative?",
        subtitle: "Design isn't what makes things creative. We are.",
        href: "/blog/is-design-creative",
        accent: "#D4F542",
        image:
            "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        type: "CASE STUDY",
        readTime: "8 MIN",
        title: "Rebranding LUXORA",
        subtitle: "Bagaimana kami mengubah persepsi brand fashion lokal menjadi premium.",
        href: "/blog/rebranding-luxora",
        accent: "#A78BFA",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        type: "ARTICLE",
        readTime: "6 MIN",
        title: "Content Marketing yang Mengkonversi",
        subtitle: "Framework 3-step untuk membuat konten yang mendorong penjualan.",
        href: "/blog/content-marketing-konversi",
        accent: "#38BDF8",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 7,
        type: "ARTICLE",
        readTime: "3 MIN",
        title: "Psikologi Warna dalam Branding",
        subtitle: "Mengapa warna yang tepat bisa meningkatkan konversi hingga 80%.",
        href: "/blog/psikologi-warna",
        accent: "#F43F5E",
        image:
            "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 8,
        type: "PRESS",
        readTime: null,
        title: "UPLIFT Masuk Top 10 Agency Indonesia",
        subtitle: "Diakui oleh Marketing Interactive sebagai agensi terbaik 2025.",
        href: "/blog/top-10-agency",
        accent: "#FBBF24",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 9,
        type: "ARTICLE",
        readTime: "5 MIN",
        title: "Masa Depan Performance Marketing",
        subtitle: "Dari pixel-based ke AI-driven: pergeseran besar di dunia ads.",
        href: "/blog/performance-marketing-future",
        accent: "#34D399",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 10,
        type: "CASE STUDY",
        readTime: "10 MIN",
        title: "Scaling E-Commerce Brand 10x",
        subtitle:
            "Studi kasus: bagaimana kami membantu brand D2C menembus 1 juta transaksi.",
        href: "/blog/scaling-ecommerce",
        accent: "#FB923C",
        image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

function PostCard({ post, index }) {
    return (
        <motion.article variants={cardVariants} className="group cursor-pointer">
            <Link href={post.href} className="block">
                {/* Tag Row */}
                <div className="flex items-center gap-3 mb-3">
                    <span
                        className="text-[9px] tracking-[0.25em] font-bold uppercase"
                        style={{ color: post.accent }}
                    >
                        {post.type}
                    </span>
                    {post.readTime && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-neutral-600" />
                            <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-neutral-400">
                                {post.readTime}
                            </span>
                        </>
                    )}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-5 border border-theme">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-base font-semibold leading-snug mb-1 transition-colors duration-300 group-hover:text-neutral-300">
                    {post.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {post.subtitle}
                </p>

                {/* Read more arrow */}
                <div className="mt-4 flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                    Baca
                    <svg
                        viewBox="0 0 16 6"
                        className="h-2 w-3 transition-transform group-hover:translate-x-1"
                    >
                        <path
                            d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </Link>
        </motion.article>
    );
}

export default function BlogSection() {
    return (
        <section className="bg-[#0a0a0a] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-end justify-between mb-16 border-b border-white/10 pb-8"
                >
                    <div>
                        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-neutral-400 block mb-4">
                            Semua Artikel
                        </span>
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Insights & Resources
                        </h2>
                    </div>
                    <span className="text-sm text-neutral-500 font-medium hidden sm:block">
                        {allPosts.length} artikel
                    </span>
                </motion.div>

                {/* Posts Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
                >
                    {allPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
