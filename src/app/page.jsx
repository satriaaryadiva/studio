"use client";
import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import AboutUplift from "@/components/AboutUplift";
import OurServices from "@/components/OurServices";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import ConsultationForm from "@/components/ConsultationForm";
import ParallaxScroll from "@/components/ParallaxScroll";
import WhyUplift from "@/components/WhyUplift";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Pricing from "@/components/Pricing";
import BigCTA from "@/components/BigCTA";
import DiscoverSolutions from "@/components/DiscoverSolutions";

import { servicesData } from "@/constants";
import BlogRecommendation from "@/components/BlogRecommendation";

const whatWeDo = servicesData.map((service, index) => {
  const sizes = ["large", "small", "medium", "small", "large", "medium", "small"];
  return {
    title: service.title,
    category: service.id.toUpperCase().replace("-", " "),
    size: sizes[index] || "medium",
    description: service.description,
    content: <img src={service.image} alt={service.title} className="h-full w-full object-cover" />,
  };
});

export default function Home() {
  return (
    <main className="text-theme flex flex-col" style={{ overflowX: "clip" }}>

      {/* ─ 1. Hero — First impression + CTA ─ */}
      <Hero />

      {/* ─ 2. Marquee — Services & metrics info strip ─ */}
      <HeroMarquee />
         <Clients />

      {/* ─ 3. About — Who we are (brief) ─ */}
      <AboutUplift />

      {/* ─ 3.5. Discover Solutions — Quick Navigation Cards ─ */}
      <DiscoverSolutions />

      {/* ─ 4. Services — What we do (detailed) ─ */}
      <OurServices />

      {/* ─ 5. Parallax Scroll — Visual showcase of capabilities ─ */}
      <ParallaxScroll
        content={whatWeDo}
        title="CREATIVE OMNICHANNEL MARKETING AGENCY"
        subtitle="OUR EXPERTISE"
      />

      {/* ─ 6. Portfolio — Project cards carousel ─ */}
      <PortfolioCarousel />

      {/* ─ 6.5. Pricing — Transparency ─ */}
      <Pricing />

      {/* ─ 7. Why UPLIFT — Differentiators ─ */}
      <WhyUplift />

      {/* ─ 8. Clients — Trust signals ─ */}
      <BlogRecommendation/> 

      {/* ─ 9. FAQ — Objection handling ─ */}
      <FAQ />

      {/* ─ 10. Consultation — Final conversion ─ */}
      <ConsultationForm />

      {/* ─ 11. Big CTA — Cinematic Closer ─ */}
      <BigCTA />
    </main>
  );
}
