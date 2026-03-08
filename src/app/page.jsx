"use client";
import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Values from "@/components/Values";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import GridPattern from "@/components/GridPattern";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-black">
      <div className="relative isolate">
        <GridPattern
          className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-256}
        />
        <Container className="pt-24 sm:pt-32 lg:pt-5">
          <FadeIn className="flex flex-col items-center text-center">
            {/* Large UPLIFT SVG */}
            <div className="w-full max-w-7xl overflow-hidden">
              <motion.svg
                viewBox="0 0 1000 200"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-auto fill-neutral-950"
              >
                <text
                  x="50%"
                  y="160"
                  textAnchor="middle"
                  className="text-[180px] font-black tracking-[-0.05em] uppercase"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  UPLIFT
                </text>
              </motion.svg>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 max-w-4xl font-display text-4xl font-normal leading-tight tracking-tight text-neutral-950 sm:text-6xl"
            >
              We’re a digital-first design agency working at the intersection of creativity and technology.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-16 flex justify-center"
            >
              <Link
                href="/work"
                className="group flex items-center gap-3 rounded-full bg-neutral-950 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-2xl"
              >
                View All Work
                <svg viewBox="0 0 16 6" className="h-2 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M16 3 10 .5v2H0v1h10v2L16 3Z" fill="white" />
                </svg>
              </Link>
            </motion.div>
          </FadeIn>
        </Container>

        <Container className="mt-24 sm:mt-32">
          <FadeIn>
            <p className="max-w-3xl text-xl leading-relaxed text-neutral-600 mx-auto text-center">
              UPLIFT membantu brand bertumbuh dengan strategi, konten, dan eksekusi yang terintegrasi. Kami mengangkat brand ke level berikutnya.
            </p>
          </FadeIn>
        </Container>
        <Clients />
        <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          client={{ name: "Phobia", logo: logoPhobiaDark }}
        >
          The team at Studio went above and beyond with our onboarding, even
          finding a way to access the user microphone without triggering one of
          those annoying permission dialogs.
        </Testimonials>
        <Services />
        <Pricing />
        <Process />
        <Values />
      </div>
    </main>
  );
}
