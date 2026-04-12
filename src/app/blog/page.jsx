import BlogRecommendation from "@/components/BlogRecommendation";
import BlogSection from "@/components/BlogSection";
import PageHero from "@/components/PageHero";

const BlogPage = () => {
  return (
    <main className="bg-theme text-theme">
      <PageHero
        label="Blog"
        title={<>Insight Pemasaran<br /><span className="text-[#9E8976]">Omni-Channel</span></>}
        description="Tetap up-to-date dengan tren industri terbaru dan strategi pemasaran yang efektif untuk pertumbuhan brand Anda."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
        imageAlt="UPLIFT Insights and Blog"
        badge={{ value: "100+", label: "Artikel Published" }}
        watermark="BLOG"
      />
      <BlogRecommendation />
      <BlogSection />
    </main>
  );
};

export default BlogPage;
