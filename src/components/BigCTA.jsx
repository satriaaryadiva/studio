"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function BigCTA() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 pb-16   bg-theme relative z-20">
      <div className="relative overflow-hidden bg-theme-muted rounded-[2rem] md:rounded-[3rem] py-20 md:py-24 min-h-[450px] flex items-center border border-theme-md shadow-2xl mx-auto max-w-[1400px]">
        {/* Technical Blueprint Grid Layer 1 (Static) */}
        <div className="absolute inset-0 bg-grid-brutalist opacity-40" />
        
        {/* Technical Blueprint Grid Layer 2 (Kinetic/Moving) */}
        <motion.div 
          className="absolute inset-x-0 -top-40 -bottom-40 bg-grid-brutalist opacity-20 pointer-events-none"
          style={{ y: gridY }}
        />

        {/* Animated Wavy Path */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-30 text-theme"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,138.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224"
          />
        </svg>

        {/* Hand Cursor Icon (Playful Element) */}
        <motion.div
          className="absolute hidden lg:block z-20 pointer-events-none text-theme"
          animate={{
            x: [200, 300, 200],
            y: [400, 380, 400],
            rotate: [15, 20, 15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "20%", left: "8%" }}
        >
          <div className="relative drop-shadow-2xl scale-90">
             <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="var(--theme-bg)" strokeWidth="1">
               <path d="M11 1h2v4h-2V1zm-3.5 2.5l1.4 1.4L6.1 7.7 4.7 6.3 7.5 3.5zm9 0l2.8 2.8-1.4 1.4-2.8-2.8 1.4-1.4zM7 8h10l1 9H6l1-9zm5 2v5h-2v-5h2z" />
               <rect x="5" y="17" width="14" height="6" rx="1" fill="#9E8976" />
               <g transform="scale(1.2) translate(-2, -2)">
                  <path d="M18.12,17.27,11.53,13l1-1.63L19.12,15.7l-1,1.57ZM11.08,9l.06,1,7.24-1.1s2.21-.38,1.26,1.48l-.89,1.75-1,.17,1.06-2.11L11.5,11.4l-.12-2Zm0,0L10,5.77C9.53,4.61,11,4.06,11.5,5.18L13.11,8.9,11.08,9ZM7,18.89l3.52-5.75,2,1.24L9,20.13,7,18.89ZM6,15.11,8.38,11.2,10.37,12.4,8,16.31,6,15.11Z" fill="currentColor" stroke="var(--theme-bg)" strokeWidth="0.5" />
               </g>
             </svg>
          </div>
        </motion.div>

        {/* Floating Chat Bubble */}
        <motion.div
          className="absolute z-20 top-16 right-[8%] lg:right-[12%] max-w-[240px]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-theme-surface border border-theme-md p-5 rounded-2xl rounded-tr-none shadow-theme-card relative">
            <p className="text-[10px] font-sans font-bold text-theme leading-relaxed">
              📩 Start your consultation with UPLIFT today.
            </p>
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-2.5 h-2.5 bg-theme-surface border-t border-r border-theme-md rotate-45 transform origin-bottom-left" />
          </div>
        </motion.div>

        {/* Floating Concept Image - Left */}
        <motion.div
          className="absolute hidden xl:block left-[-4%] top-[15%] w-64 h-64 pointer-events-none"
          animate={{
            y: [0, -25, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/images/cta/left.png" 
            alt="Growth Concept" 
            className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] opacity-90"
          />
        </motion.div>

        {/* Floating Concept Image - Right */}
        <motion.div
          className="absolute hidden xl:block right-[-4%] bottom-[10%] w-50 h-50  pointer-events-none"
          animate={{
            y: [0, 30, 0],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/images/cta/right.png" 
            alt="System Concept" 
            className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] opacity-90"
          />
        </motion.div>

        <Container className="relative z-10 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-2 mb-8 w-full">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-6 bg-[#9E8976]" />
                <span className="text-[10px] sm:text-[11px] font-sans font-black uppercase tracking-[0.6em] text-theme-3">
                  CONTACT US
                </span>
                <div className="h-[2px] w-6 bg-[#9E8976]" />
              </motion.div>

              {/* KINETIC TYPOGRAPHY */}
              <div className="flex flex-col flex-wrap w-full items-center text-center overflow-visible px-4">
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-x-4 font-sans text-4xl md:text-5xl lg:text-7xl font-black text-[#9E8976] leading-[0.9] uppercase tracking-[-0.02em] transform scale-y-110 pt-4 pb-2 w-full break-words"
                >
                  {["LET'S", "GROW", "YOUR", "BRAND"].map((word, i) => (
                    <motion.span key={word} custom={i} variants={wordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
                <motion.h2 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-x-4 font-sans text-4xl md:text-5xl lg:text-7xl font-black text-theme leading-[0.9] uppercase tracking-[-0.02em] transform scale-y-110 pt-2 pb-6 w-full break-words"
                >
                  {["WITH", "THE", "RIGHT", "SYSTEM"].map((word, i) => (
                    <motion.span key={word} custom={i + 4} variants={wordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>

              {/* CTA Paragraph */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="max-w-xl text-center text-xs md:text-sm text-theme-2 font-sans leading-relaxed mt-2 px-6"
              >
                Whether you’re a local business in Medan or a growing brand across Indonesia, 
                our team is ready to help you build an omnichannel system that works.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center gap-6 mt-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 bg-[#9E8976] text-white px-10 sm:px-12 py-4 rounded-md text-[11px] sm:text-[12px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 shadow-xl hover:bg-[#827163] hover:translate-y-[-4px]"
              >
                KONSULTASI GRATIS
                <svg viewBox="0 0 16 6" fill="currentColor" className="w-4 h-2 sm:w-5 sm:h-2 transition-transform group-hover:translate-x-3">
                  <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" />
                </svg>
              </Link>
              
              <Link
                href="/services"
                className="group flex items-center gap-2 text-theme-3 hover:text-theme text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300"
              >
                LIHAT LAYANAN 
                <span className="w-6 sm:w-8 h-[1px] bg-theme-md group-hover:w-12 group-hover:bg-[#9E8976] transition-all duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* Contact Info Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-16 pt-8 border-t border-theme-md grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto"
          >
            {[
              { label: "Office", value: "Jalan Gatot Subroto No. 19, Medan Petisah" },
              { label: "Email", value: "upliftcrtv@gmail.com", href: "mailto:upliftcrtv@gmail.com" },
              { label: "Phone", value: "0821 6510 1085", href: "tel:+6282165101085" },
              { label: "Social", value: "@upliftcreative.co", href: "https://instagram.com/upliftcreative.co" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 group text-left">
                <p className="text-[8px] font-sans font-black uppercase tracking-[0.4em] text-[#9E8976] transition-colors">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-[11px] sm:text-[12px] font-sans font-medium text-theme-2 hover:text-theme transition-all duration-300 leading-snug">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[11px] sm:text-[12px] font-sans font-medium text-theme-2 leading-snug">{item.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
