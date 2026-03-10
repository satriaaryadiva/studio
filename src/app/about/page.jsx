import BlogSection from "@/components/BlogSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import Process from "@/components/Process";
import SectionHeader from "@/components/SectionHeader";
import { StatList, StatListItem } from "@/components/StatList";
import Values from "@/components/Values";
import React from "react";

const AboutPage = () => {
  return (
    <>
    <SectionHeader 
    label="About us"
    title="Kekuatan kami adalah kolaborasi"
    backgroundText="UPLIFT STUDIO"
    />
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Brands Partnered" />
          <StatListItem value="200+" label="Campaigns Launched" />
          <StatListItem value="10M+" label="Reach Generated" />
        </StatList>
        <Process />
      </Container>

      <Values />
      <BlogSection />
      <Cultures />
    </>
  );
};

export default AboutPage;
