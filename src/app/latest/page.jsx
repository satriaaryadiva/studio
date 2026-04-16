import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import BlogSection from "@/components/BlogSection";
import React from "react";

export const metadata = {
  title: "Latest Items",
  description: "Stay up to date with the latest news and insights from Uplift.",
};

const LatestPage = () => {
  return (
    <main className="bg-theme min-h-screen">
      <Container className="pt-24 sm:pt-32">
        <FadeIn>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-8">
            <span className="text-white">Home</span>
            <span>/</span>
            <span>Latest</span>
          </div>
        </FadeIn>
      </Container>

      <BlogSection />
    </main>
  );
};

export default LatestPage;
