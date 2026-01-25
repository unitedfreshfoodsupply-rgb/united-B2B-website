import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LazySection } from "@/components/home/LazySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      <LazySection
        importFunc={() => import("@/components/home/ProductCategoriesSection").then(m => ({ default: m.ProductCategoriesSection }))}
      />

      <LazySection
        importFunc={() => import("@/components/home/SeasonalSection").then(m => ({ default: m.SeasonalSection }))}
      />

      <LazySection
        importFunc={() => import("@/components/home/OperationsSection").then(m => ({ default: m.OperationsSection }))}
      />

      <LazySection
        importFunc={() => import("@/components/home/IndustrySection").then(m => ({ default: m.IndustrySection }))}
      />

      <LazySection
        importFunc={() => import("@/components/home/CTASection").then(m => ({ default: m.CTASection }))}
      />
    </Layout>
  );
};

export default Index;

