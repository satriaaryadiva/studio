import BlogRecommendation from "@/components/BlogRecommendation";
import BlogSection from "@/components/BlogSection";
import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Insight Pemasaran Omni-Channel">
        <p>
          Tetap up-to-date dengan tren industri terbaru dan strategi pemasaran
          yang efektif untuk pertumbuhan brand Anda.
        </p>
      </PageIntro>
      <BlogRecommendation />
      <BlogSection />
    </>
  );
};

export default BlogPage;
