import React from "react";
import AboutUplift from "@/components/AboutUplift";
import BlogSection from "@/components/BlogSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import HeroMarquee from "@/components/HeroMarquee";
import SectionHeader from "@/components/SectionHeader";
import Process from "@/components/Process";
import Values from "@/components/Values";
import { StatList, StatListItem } from "@/components/StatList";

export default function AboutPage() {
  return (
    <main className="bg-neutral-950">
      {/* 1. Header Hero */}
      <SectionHeader 
        label="About Uplift"
        title="Kekuatan kami adalah kolaborasi"
        backgroundText="UPLIFT STUDIO"
      />
      
      {/* 2. Marquee & Core About */}
      <HeroMarquee />
      <AboutUplift />
      
      {/* 3. Global Stats */}
      <Container>
        <StatList>
          <StatListItem index={0} value="50+" label="Brands Partnered" />
          <StatListItem index={1} value="200+" label="Campaigns Launched" />
          <StatListItem index={2} value="10M+" label="Reach Generated" />
        </StatList>
      </Container>
      
      {/* 4. Workflow / Process */}
      <Process />
      
      {/* 5. Our Values */}
      <Values />
      
      {/* 6. Insights / Blog */}
      <BlogSection />
      
      {/* 7. Culture Summary */}
      <Cultures />
    </main>
  );
}
