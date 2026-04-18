import BlogRecommendation from "@/components/BlogRecommendation";
import BlogSection from "@/components/BlogSection";
import PageHero from "@/components/PageHero";

const BlogPage = () => {
  return (
    <main className="bg-theme text-theme">
      <PageHero
        label="Editorial & Insights"
        title={<>Strategic Marketing<br /><span className="text-[#9E8976]">Insights & Perspectives</span></>}
        description="Jelajahi pemikiran terdalam kami tentang bagaimana membangun brand yang berkelanjutan di ekosistem digital Indonesia."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Insights and Blog"
        badge={{ value: "100+", label: "Articles Published" }}
        watermark="INSIGHTS"
      />
      <BlogRecommendation />
      <BlogSection />
    </main>
  );
};

export default BlogPage;
