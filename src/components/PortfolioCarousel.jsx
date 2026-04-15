"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

// Portfolio items — vertical video cards (9:16)
// Replace `video` with actual hosted video URLs when available.
// Falls back to `image` if video is absent.
const portfolioItems = [
  {
    id: 1,
    brand: "Kedai Bumi Nusantara",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 2,
    brand: "Medan Craft Co.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f4f7b6b5d5a?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 3,
    brand: "Elevate Skincare",
    category: "Content Production",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 4,
    brand: "Sumatera Fresh",
    category: "Ads Strategy",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 5,
    brand: "Rumah Mode ID",
    category: "Campaign Offline",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 6,
    brand: "Akar Kopi",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
  {
    id: 7,
    brand: "Tekad Digital",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=1067",
    video: null,
    href: "/work",
  },
];

// A single video/image card with parallax
function PortfolioCard({ item, index }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Autoplay on hover
  useEffect(() => {
    if (!videoRef.current) return;
    if (hovered) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex-none w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden bg-theme-surface cursor-pointer"
    >
      {/* Video (when available) */}
      {item.video ? (
        <motion.video
          ref={videoRef}
          src={item.video}
          loop
          muted
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imageY, scale: 1.1 }}
        />
      ) : (
        <motion.img
          src={item.image}
          alt={item.brand}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: imageY, scale: 1.1 }}
          loading="lazy"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#9E8976]/15 flex items-center justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-[9px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976] block mb-1">
          {item.category}
        </span>
        <h3 className="text-base font-black font-freight uppercase text-white tracking-tight leading-tight">
          {item.brand}
        </h3>
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="text-[10px] font-sans text-white/60 mt-1.5 block"
        >
          Lihat Kampanye →
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function PortfolioCarousel() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 12);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="bg-theme py-20 md:py-32 overflow-hidden border-t border-theme-md">

      {/* ── Header ── */}
      <Container>
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-[11px] font-sans font-black uppercase tracking-[0.6em] text-[#9E8976] mb-4"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black font-freight uppercase tracking-tighter text-theme leading-none"
            >
              Karya Kami
            </motion.h2>
          </div>

          {/* Scroll controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-theme-border flex items-center justify-center text-theme-3 disabled:opacity-20 hover:border-[#9E8976] hover:text-[#9E8976] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-theme-border flex items-center justify-center text-theme-3 disabled:opacity-20 hover:border-[#9E8976] hover:text-[#9E8976] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <Link
              href="/work"
              className="ml-2 text-[10px] font-sans font-black uppercase tracking-[0.4em] text-theme-3 hover:text-[#9E8976] transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>
        </div>
      </Container>

      {/* ── Carousel track (full-bleed) ── */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {portfolioItems.map((item, i) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex-none"
            style={{ scrollSnapAlign: "start" }}
          >
            <PortfolioCard item={item} index={i} />
          </Link>
        ))}

        {/* "See all" end card */}
        <Link
          href="/work"
          className="flex-none w-[180px] md:w-[200px] aspect-[9/16] border border-theme-md flex flex-col items-center justify-center gap-4 hover:border-[#9E8976]/40 group transition-all duration-500"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-12 h-12 rounded-full border border-theme-border group-hover:border-[#9E8976] flex items-center justify-center transition-colors duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-theme-3 group-hover:text-[#9E8976] transition-colors">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-theme-3 group-hover:text-[#9E8976] transition-colors text-center px-4">
            Lihat<br />Semua Karya
          </span>
        </Link>
      </div>

      {/* Mobile CTA */}
      <Container>
        <div className="mt-10 flex md:hidden justify-center">
          <Link
            href="/work"
            className="text-[10px] font-sans font-black uppercase tracking-widest text-[#9E8976] hover:underline"
          >
            Lihat Semua Karya →
          </Link>
        </div>
      </Container>
    </section>
  );
}
