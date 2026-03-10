"use client";
import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import ExecutionMethods from "@/components/ExecutionMethods";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import BlogRecommendation from "@/components/BlogRecommendation";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import ParallaxScroll from "@/components/ParallaxScroll";
import SectionHeader from "@/components/SectionHeader";
import SectionDivider from "@/components/SectionDivider";


const whatWeDo = [
  {
    title: "Socmed Management",
    category: "MANAGEMENT",
    size: "large",
    gridSpan: "col-span-12 md:col-span-7",
    offset: "md:mt-0",
    description: "Kami mengelola kehadiran digital brand Anda dengan strategi konten yang konsisten dan engagement aktif.",
    content: <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
  {
    title: "Content Production",
    category: "CREATIVE",
    size: "small",
    gridSpan: "col-span-12 md:col-span-4 md:col-start-9",
    offset: "md:mt-24",
    description: "Tim kreatif kami memproduksi visual berkualitas tinggi yang bercerita.",
    content: <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
  {
    title: "Digital Marketing",
    category: "STRATEGY",
    size: "medium",
    gridSpan: "col-span-12 md:col-span-6",
    offset: "md:-mt-12",
    description: "Optimalkan ROI Anda dengan kampanye iklan berbasis data.",
    content: <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
  {
    title: "Branding Design",
    category: "IDENTITY",
    size: "small",
    gridSpan: "col-span-12 md:col-span-5 md:col-start-8",
    offset: "md:mt-0",
    description: "Kami membangun identitas visual yang kuat dan kohesif.",
    content: <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
  {
    title: "Offline Activation",
    category: "EXPERIENCE",
    size: "large",
    gridSpan: "col-span-12 md:col-span-8",
    offset: "md:mt-12",
    description: "Ciptakan pengalaman brand yang nyata di dunia fisik.",
    content: <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
  {
    title: "E-Commerce Opt",
    category: "GROWTH",
    size: "medium",
    gridSpan: "col-span-12 md:col-span-4 md:col-start-9",
    offset: "md:-mt-24",
    description: "Tingkatkan performa penjualan digital Anda.",
    content: <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" className="h-full w-full object-cover" />
  },
];

export default function Home() {
  return (
    <main className="text-black">
      <Hero />

      {/* What UPLIFT Do — Parallax Sections */}
      <ParallaxScroll
        content={whatWeDo}
        title="What UPLIFT Do"
        subtitle="Layanan Kami"
      />

      <SectionHeader
        label="Our Partnerships"
        title="Trusted by Innovative Brands"
        backgroundText="UPLIFT PARTNERS"
      />
      <SectionDivider rows={["CREATIVE", "STRATEGY", "IDENTITY", "PRODUCTION"]} />
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
<SectionDivider rows={["CREATIVE", "STRATEGY", "IDENTITY", "PRODUCTION"]} />
      <ExecutionMethods />
      <BlogRecommendation />
    </main>
  );
}
