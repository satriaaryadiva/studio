"use client";

import { motion } from "framer-motion";
import Container from "./Container";

/**
 * PageHero — clean split-layout hero for inner pages.
 * Left side: label + headline + description text.
 * Right side: full-bleed image with rounded corners, gradient overlay, and optional stat badge.
 *
 * Props:
 *  - label        : small uppercase label (e.g. "About Us")
 *  - title        : JSX or string — main headline
 *  - description  : short paragraph
 *  - image        : URL string
 *  - imageAlt     : alt text for the image
 *  - badge        : { value, label } — optional floating stat badge on the image
 *  - watermark    : large watermark text behind the section
 */
export default function PageHero({
  label = "",
  title,
  description = "",
  image,
  imageAlt = "",
  badge = null,
  watermark = "",
}) {
  return (
    <section className="relative min-h-[85vh] flex items-end pb-20 md:pb-28 pt-36 md:pt-44 border-b border-theme overflow-hidden bg-theme">

      {/* Watermark */}
      {watermark && (
        <span
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[18vw] font-black font-freight uppercase tracking-tighter leading-none select-none pointer-events-none"
          style={{ color: "var(--theme-watermark)" }}
        >
          {watermark}
        </span>
      )}

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">

          {/* ── Left: Text ── */}
          <div className="lg:col-span-6 relative z-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-8 bg-[#9E8976]" />
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.55em] text-[#9E8976]">
                {label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black font-freight uppercase tracking-tighter leading-[0.85] text-theme mb-8"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-theme-2 font-sans leading-relaxed max-w-lg"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* ── Right: Image ── */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl group">
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                {/* Badge */}
                {badge && (
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
                    <p className="text-3xl md:text-4xl font-black font-freight text-white tracking-tighter leading-none">
                      {badge.value}
                    </p>
                    <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/50 mt-1.5">
                      {badge.label}
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#9E8976]/20 rounded-br-3xl pointer-events-none hidden lg:block" />
            </motion.div>
          )}

        </div>
      </Container>
    </section>
  );
}
