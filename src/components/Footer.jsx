"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Social Icons (inline SVG — no external deps) ───────────────────
const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/upliftcreative.co",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@uplift.creative",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.81 1.55V6.8a4.85 4.85 0 0 1-1.04-.11Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6282165101085",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.982 2C6.465 2 2 6.465 2 11.982a9.947 9.947 0 0 0 1.378 5.076L2 22l5.078-1.358A9.948 9.948 0 0 0 11.982 22c5.517 0 9.982-4.465 9.982-9.982C21.964 6.466 17.499 2 11.982 2zm0 18.316a8.288 8.288 0 0 1-4.226-1.154l-.303-.18-3.014.806.816-2.981-.197-.319a8.275 8.275 0 0 1-1.23-4.388 8.316 8.316 0 0 1 8.316-8.316 8.316 8.316 0 0 1 8.316 8.316 8.316 8.316 0 0 1-8.316 8.316z" />
      </svg>
    ),
  },
];

// ─── Nav links (no "Work" section) ───────────────────────────────────
const navLinks = [
  {
    heading: "Layanan",
    links: [
      { label: "Social Media", href: "/services#social-media" },
      { label: "Produksi Konten", href: "/services#content-production" },
      { label: "Branding", href: "/services#branding" },
      { label: "Iklan & Data", href: "/services#ads-strategy" },
      { label: "E-Commerce", href: "/services#digital-optimization" },
      { label: "Web Development", href: "/services#web-development" },
    ],
  },
  {
    heading: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Proses Kerja", href: "/process" },
      { label: "Blog", href: "/blog" },
      { label: "Harga", href: "/#pricing" },
    ],
  },
  {
    heading: "Hubungi",
    links: [
      { label: "Konsultasi Gratis", href: "/contact" },
      { label: "Email Kami", href: "mailto:upliftcrtv@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/6282165101085" },
    ],
  },
];

// ─── Newsletter ──────────────────────────────────────────────────────
function Newsletter() {
  const [val, setVal] = useState("");
  return (
    <div>
      <p className="text-[10px] font-sans font-black uppercase tracking-[0.35em] text-[#9E8976] mb-4">
        Newsletter
      </p>
      <p className="text-sm text-theme-2 font-sans leading-relaxed mb-6 max-w-xs">
        Tips strategi digital & update terbaru dari UPLIFT. No spam.
      </p>
      <form className="relative" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Email kamu..."
          className="w-full bg-theme border border-[#9E8976]/25 focus:border-[#9E8976] rounded-full pl-6 pr-36 py-4 text-sm font-sans text-theme placeholder:text-theme-3 focus:outline-none focus:ring-2 focus:ring-[#9E8976]/10 transition-all duration-400"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#9E8976] hover:bg-[#8a7866] text-white text-[10px] font-black uppercase tracking-[0.25em] px-6 rounded-full transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
      <p className="text-[9px] font-sans text-theme-3 mt-3 pl-2">
        Dengan subscribe, Anda menyetujui Kebijakan Privasi kami.
      </p>
    </div>
  );
}

// ─── Main Footer ────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-theme py-20 md:py-28 border-t border-theme-md">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {/* Logo */}
            <div>
              <Link href="/" className="font-freight text-3xl font-black uppercase tracking-tighter text-theme hover:text-[#9E8976] transition-colors duration-300">
                UPLIFT
              </Link>
              <div className="h-0.5 w-12 bg-[#9E8976] mt-4 mb-6" />
              <p className="text-sm font-sans text-theme-2 leading-relaxed max-w-[280px]">
                Mitra strategis brand modern Indonesia. Kami membangun ekosistem digital yang terukur, konsisten, dan berdampak.
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] font-sans font-black uppercase tracking-[0.35em] text-[#9E8976] mb-5">
                Follow Us
              </p>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-[#9E8976]/30 flex items-center justify-center text-theme-2 hover:bg-[#9E8976] hover:text-white hover:border-[#9E8976] transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "50+", label: "Brand" },
                { value: "200+", label: "Kampanye" },
                { value: "4.2×", label: "Avg. ROAS" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black font-freight text-[#9E8976] leading-none">{s.value}</p>
                  <p className="text-[9px] font-sans font-black uppercase tracking-[0.3em] text-theme-3 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Nav Columns ── */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {navLinks.map((group) => (
              <div key={group.heading}>
                <p className="text-[10px] font-sans font-black uppercase tracking-[0.35em] text-[#9E8976] mb-6">
                  {group.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-sans font-medium text-theme-2 hover:text-theme hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Newsletter Column ── */}
          <div className="lg:col-span-3">
            <Newsletter />
          </div>

        </div>

        {/* ── Divider band ── */}
        <div className="mt-16 mb-10 h-px w-full bg-gradient-to-r from-[#9E8976]/40 via-[#9E8976]/10 to-transparent" />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-theme-3">
            © {new Date().getFullYear()} UPLIFT Agency · All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-[10px] font-sans font-black uppercase tracking-[0.3em] text-theme-3">
            <Link href="/privacy" className="hover:text-[#9E8976] transition-colors">Privacy</Link>
            <span className="w-1 h-1 rounded-full bg-[#9E8976]/40" />
            <Link href="/terms" className="hover:text-[#9E8976] transition-colors">Terms</Link>
            <span className="w-1 h-1 rounded-full bg-[#9E8976]/40" />
            <span className="text-[#9E8976]">Made in Medan</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
