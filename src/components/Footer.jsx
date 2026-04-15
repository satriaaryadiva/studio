"use client";
import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import Ripple from "./Ripple";


const NewsletterForm = () => {
  return (
    <div className="max-w-sm">
      <h2 className="font-freight text-lg font-black tracking-tight text-theme sm:text-2xl [text-wrap:balance] uppercase leading-tight">
        Quarterly Updates. <br />
        <span className="text-[#9E8976]">No Fluff.</span>
      </h2>
      <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-auto font-sans">
          <input
            type="email"
            placeholder="Email address..."
            aria-label="Email address"
            className="block w-full rounded-full border border-theme-md bg-theme-surface px-6 py-3 text-sm text-theme focus:outline-none focus:border-[#9E8976] transition-colors placeholder:text-theme-3 shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-[#9E8976] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-theme-muted hover:text-theme"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full">
      {/* Top CTA Section */}
      <div className="bg-theme-surface py-20 sm:py-24 border-t border-b border-theme-md">
        <Container>
          <FadeIn className="flex flex-col gap-10">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.6em] text-[#9E8976]">
              Contact UPLIFT
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
              <h2 className="font-freight text-5xl md:text-7xl font-black tracking-tighter text-theme max-w-2xl leading-[0.88] uppercase">
                Let's Build the <br />
                <span className="text-[#9E8976]">Right System</span>
              </h2>
              <Link
                href="/contact"
                className="flex-none rounded-full bg-[#9E8976] border border-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-theme-surface hover:text-[#9E8976] hover:border-theme-md shadow-xl uppercase tracking-widest whitespace-nowrap"
              >
                Start Consultation →
              </Link>
            </div>
            <p className="font-sans text-base text-theme-2 max-w-2xl leading-relaxed">
              Whether you're a local business in Medan or a growing brand across Indonesia,
              our team is ready to help you build an omnichannel system that works.{" "}
              Start your consultation with UPLIFT today.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-sans font-bold uppercase tracking-widest text-theme-3">
              <a href="mailto:upliftcrtv@gmail.com" className="hover:text-theme transition-colors">✉ upliftcrtv@gmail.com</a>
              <a href="tel:+6282165101085" className="hover:text-theme transition-colors">📞 0821 6510 1085</a>
              <span>📍 Jl. Gatot Subroto No. 19, Medan</span>
              <a href="https://instagram.com/upliftcreative.co" target="_blank" rel="noreferrer" className="hover:text-theme transition-colors">📷 Instagram</a>
              <a href="https://tiktok.com/@uplift.creative" target="_blank" rel="noreferrer" className="hover:text-theme transition-colors">🎵 TikTok</a>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Main Footer Section */}
      <footer className="bg-theme py-20 sm:py-24">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12">
              {/* Logo, Ripple & Newsletter Col */}
              <div className="lg:col-span-7 flex flex-col items-start gap-12 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-8 flex-none">
                  <Logo href="/" className="z-10" invert={false}>
                    UPLIFT Agency
                  </Logo>
                  <Ripple className="hidden sm:block h-32 w-32 text-[#9E8976]/20 sm:h-48 sm:w-48" />
                </div>
                <NewsletterForm />
              </div>

              {/* Navigation Col */}
              <div className="lg:col-span-5 font-sans">
                <FooterNavigation />
              </div>
            </div>

            <div className="mt-20 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 border-t border-theme-border pt-8 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-theme-3">
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/sitemap" className="transition hover:text-theme">Sitemap</Link>
                <Link href="/privacy" className="transition hover:text-theme">Privacy Policy</Link>
              </div>
              <p>
                © {new Date().getFullYear()}, UPLIFT Agency. All Rights Reserved.
              </p>
            </div>
          </FadeIn>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
