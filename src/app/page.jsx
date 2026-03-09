"use client";
import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import { Timeline } from "@/components/ui/timeline";
import Values from "@/components/Values";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import GridPattern from "@/components/GridPattern";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogRecommendation from "@/components/BlogRecommendation";
import Testimonials from "@/components/Testimonials";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { processData } from "@/data/processData";


const whatWeDo = [
  {
    title: "Brand Strategy & Identity",
    description:
      "Kami membangun fondasi brand yang kuat melalui riset mendalam, positioning yang tepat, dan identitas visual yang memorable. Setiap elemen dirancang untuk menciptakan koneksi emosional dengan audiens Anda.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
          alt="Brand Strategy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-cyan-400">01 — Strategy</span>
          <p className="mt-2 text-white text-sm font-medium">Membangun identitas yang tak terlupakan</p>
        </div>
      </div>
    ),
  },
  {
    title: "Digital Marketing & Performance",
    description:
      "Dari paid ads hingga SEO, kami mengoptimalkan setiap channel digital untuk menghasilkan ROI maksimal. Data-driven approach memastikan setiap rupiah yang diinvestasikan memberikan hasil nyata.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
          alt="Digital Marketing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-pink-400">02 — Performance</span>
          <p className="mt-2 text-white text-sm font-medium">Data-driven ROI optimization</p>
        </div>
      </div>
    ),
  },
  {
    title: "Content Creation & Social Media",
    description:
      "Konten yang autentik dan engaging adalah kunci pertumbuhan organik. Tim kreatif kami merancang strategi konten yang konsisten dan relevan untuk setiap platform media sosial.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
          alt="Content Creation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-orange-400">03 — Content</span>
          <p className="mt-2 text-white text-sm font-medium">Konten yang engage & mengkonversi</p>
        </div>
      </div>
    ),
  },
  {
    title: "Web & App Development",
    description:
      "Kami membangun pengalaman digital yang cepat, responsif, dan indah. Dari landing page hingga platform e-commerce, setiap produk dikembangkan dengan teknologi terkini dan UX yang optimal.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
          alt="Web Development"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-violet-400">04 — Development</span>
          <p className="mt-2 text-white text-sm font-medium">Pengalaman digital yang premium</p>
        </div>
      </div>
    ),
  },
  {
    title: "Analytics & Optimization",
    description:
      "Setiap keputusan didukung data. Kami memonitor, menganalisis, dan mengoptimalkan performa secara real-time untuk memastikan pertumbuhan yang berkelanjutan bagi brand Anda.",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          alt="Analytics"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-emerald-400">05 — Analytics</span>
          <p className="mt-2 text-white text-sm font-medium">Optimasi berbasis data real-time</p>
        </div>
      </div>
    ),
  },
];

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
            {/* Large Uplift SVG */}
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
                  Uplift
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
              Uplift membantu brand bertumbuh dengan strategi, konten, dan eksekusi yang terintegrasi. Kami mengangkat brand ke level berikutnya.
            </p>
          </FadeIn>
        </Container>

        {/* What UPLIFT Do — Sticky Scroll */}
        <div className="mt-24 sm:mt-32">
          <Container>
            <FadeIn>
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-neutral-400 block mb-4">
                Layanan Kami
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl mb-12">
                What UPLIFT Do
              </h2>
            </FadeIn>
          </Container>
          <StickyScroll content={whatWeDo} />
        </div>

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

        {/* How UPLIFT Works — Timeline */}
        <div className="mt-24 sm:mt-32">
          <Container>
            <FadeIn>
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-neutral-400 block mb-4">
                Proses Kami
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                How UPLIFT Works
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
                Empat fase yang teruji untuk mengangkat brand Anda ke level berikutnya.
              </p>
            </FadeIn>
          </Container>
          <div className="mt-16">
            <Timeline data={processData} />
          </div>
        </div>
        <Values />
        <BlogRecommendation />
      </div>
    </main>
  );
}
