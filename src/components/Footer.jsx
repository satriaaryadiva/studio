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
      <h2 className="font-display text-lg font-medium tracking-tight text-white sm:text-2xl [text-wrap:balance]">
        Keep up to date with our quarterly newsletter, "You've got mail."
      </h2>
      <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-auto">
          <input
            type="email"
            placeholder="Enter email address..."
            aria-label="Email address"
            className="block w-full rounded-2xl border-none bg-neutral-900 px-6 py-3 text-base text-white ring-1 ring-inset ring-transparent transition focus:ring-2 focus:ring-white placeholder:text-neutral-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
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
      {/* Top CTA Section (White) */}
      <div className="bg-white py-24 sm:py-32">
        <Container>
          <FadeIn className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-neutral-950 sm:text-6xl max-w-2xl">
              We'd love to work with you and your team.
            </h2>
            <Link
              href="/contact"
              className="rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-800 shadow-xl"
            >
              Get in touch
            </Link>
          </FadeIn>
        </Container>
      </div>

      {/* Main Footer Section (Black) */}
      <footer className="bg-neutral-950 pt-24 pb-12 sm:pt-32">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12">
              {/* Logo, Ripple & Newsletter Col */}
              <div className="lg:col-span-7 flex flex-col items-start gap-12 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-8 flex-none">
                  <Logo href="/" className="h-8 text-white">
                    UPLIFT
                  </Logo>
                  <Ripple className="h-32 w-32 text-white sm:h-48 sm:w-48" />
                </div>
                <NewsletterForm />
              </div>

              {/* Navigation Col */}
              <div className="lg:col-span-5">
                <FooterNavigation />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-24 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 border-t border-white/10 pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/sitemap" className="transition hover:text-white">Sitemap</Link>
                <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
                <Link href="/supply-chain" className="transition hover:text-white">Supply Chain Statement</Link>
              </div>
              <p>
                © {new Date().getFullYear()}, UPLIFT. All Rights Reserved.
              </p>
            </div>
          </FadeIn>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
