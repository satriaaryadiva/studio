"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Post {
  id: number;
  type: "ARTICLE" | "PRESS" | "CASE STUDY";
  readTime: string | null;
  title: string;
  subtitle: string;
  href: string;
  accent: string;
}

const posts: Post[] = [
  {
    id: 1,
    type: "ARTICLE",
    readTime: "5 MINUTES",
    title: "Modern Brand Should Feel Alive",
    subtitle: "Your Brand Isn't a File. It's a Dynamic System",
    href: "/latest/modern-brand",
    accent: "#D4F542",
  },
  {
    id: 2,
    type: "ARTICLE",
    readTime: "5 MINUTES",
    title: "2025 Transparency Report",
    subtitle: "From Commitment to Renewal",
    href: "/latest/transparency-report",
    accent: "#ffffff",
  },
  {
    id: 3,
    type: "PRESS",
    readTime: null,
    title: "Finalist: Campaign US Agency of the Year",
    subtitle: "For excellence in visual design, branding, and creative problem-solving.",
    href: "/latest/agency-of-the-year",
    accent: "#FF6B35",
  },
  {
    id: 4,
    type: "ARTICLE",
    readTime: "4 MINUTES",
    title: "Is Design Creative?",
    subtitle: "Design isn't what makes things creative. We are.",
    href: "/latest/is-design-creative",
    accent: "#D4F542",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BlogSection() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen px-6 md:px-10 py-16">
      {/* Breadcrumb */}
  
      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate="show"
        className="text-[clamp(2.2rem,6vw,5rem)] font-serif font-normal text-white leading-tight tracking-tight mb-16 max-w-4xl"
      >
        Breaking news, insights,
        <br className="hidden md:block" /> and articles.
      </motion.h1>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </motion.div>

      {/* View All */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 border-t border-neutral-800 pt-8 flex justify-between items-center"
      >
        <span className="text-neutral-600 text-xs tracking-widest uppercase">
          All Articles
        </span>
        <Link
          href="/latest"
          className="group flex items-center gap-2 text-white text-xs tracking-widest uppercase hover:text-[#D4F542] transition-colors duration-300"
        >
          View All
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <motion.article variants={cardVariants} className="group cursor-pointer">
      <Link href={post.href}>
        {/* Tag Row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium">
            {post.type}
          </span>
          {post.readTime && (
            <>
              <span className="w-px h-3 bg-neutral-700" />
              <span className="text-[10px] tracking-widest uppercase text-neutral-500">
                {post.readTime}
              </span>
            </>
          )}
        </div>

        {/* Image Placeholder */}
        <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 mb-4">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              background: `radial-gradient(ellipse at center, ${post.accent}22 0%, #111 70%)`,
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />

          {/* Decorative SVG */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{ color: post.accent }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-sm font-medium leading-snug mb-1 transition-colors duration-300 group-hover:text-neutral-300">
          <span className="font-bold">{post.title}:</span>{" "}
          <span className="text-neutral-400 font-normal">{post.subtitle}</span>
        </h2>

        {/* Animated underline */}
        <div
          className="mt-3 w-0 h-px transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: post.accent }}
        />
      </Link>
    </motion.article>
  );
}