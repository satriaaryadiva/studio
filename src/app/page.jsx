"use client";
import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import AboutUplift from "@/components/AboutUplift";
import OurServices from "@/components/OurServices";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import ConsultationForm from "@/components/ConsultationForm";
import ParallaxScroll from "@/components/ParallaxScroll";
import SectionDivider from "@/components/SectionDivider";

import { servicesData } from "@/constants";

const whatWeDo = servicesData.map((service, index) => {
  const sizes = ["large", "small", "medium", "small", "large", "medium", "small"];
  const gridSpans = [
    "col-span-12 md:col-span-7", 
    "col-span-12 md:col-span-4 md:col-start-9", 
    "col-span-12 md:col-span-6", 
    "col-span-12 md:col-span-5 md:col-start-8", 
    "col-span-12 md:col-span-8", 
    "col-span-12 md:col-span-4 md:col-start-9",
    "col-span-12 md:col-span-12"
  ];
  return {
    title: service.title,
    category: service.id.toUpperCase().replace("-", " "),
    size: sizes[index] || "medium",
    gridSpan: gridSpans[index] || "col-span-12",
    offset: index % 2 === 0 ? "md:mt-0" : "md:mt-24",
    description: service.description,
    content: <img src={service.image} alt={service.title} className="h-full w-full object-cover" />,
  };
});

export default function Home() {
  return (
    <main className="text-black" style={{ overflowX: "clip" }}>
      {/* 1 · Hero */}
      <Hero />

      {/* 1.5 · Marquee strip */}
      <HeroMarquee />

      {/* 2 · About UPLIFT */}
      <AboutUplift />

      {/* 3 · Visual Parallax — services overview */}
      <ParallaxScroll
        content={whatWeDo}
        title="What UPLIFT Does"
        subtitle="Our Ecosystem"
      />
        <Clients />


      {/* 4 · Services — detailed accordion */}
      <SectionDivider rows={["OMNICHANNEL AGENCY CREATIVE", "DIGITAL MARKETING"]} />
      <OurServices />

      {/* 5 · Industries */}
      <Industries />

      {/* 5.5 · Clients/Partners */}

      {/* 6 · FAQ */}
      <FAQ />

      {/* 7 · Consultation Form */}
      <SectionDivider rows={["CREATIVE AGENCY MEDAN", "DIGITAL MARKETING MEDAN", "OMNICHANNEL"]} />
      <ConsultationForm />
    </main>
  );
}
