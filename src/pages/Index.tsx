import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LazySection } from "@/components/ui/LazySection";
import { usePageTitle } from "@/hooks/use-page-title";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";

const Index = () => {
  const { t } = useUnifiedTranslation();
  usePageTitle('meta.home.title');
  return (
    <Layout>
      <HeroSection />

      <LazySection
        minHeight="400px"
        importFunc={() => import("@/components/home/PartnerSection").then(m => ({ default: m.PartnerSection }))}
      />

      <LazySection
        minHeight="800px"
        importFunc={() => import("@/components/home/ProductCategoriesSection").then(m => ({ default: m.ProductCategoriesSection }))}
      />

      <LazySection
        minHeight="600px"
        importFunc={() => import("@/components/home/SeasonalSection").then(m => ({ default: m.SeasonalSection }))}
      />

      <LazySection
        minHeight="700px"
        importFunc={() => import("@/components/home/OperationsSection").then(m => ({ default: m.OperationsSection }))}
      />

      <LazySection
        minHeight="600px"
        importFunc={() => import("@/components/home/IndustrySection").then(m => ({ default: m.IndustrySection }))}
      />

      <LazySection
        minHeight="500px"
        importFunc={() => import("@/components/home/CTASection").then(m => ({ default: m.CTASection }))}
      />
    </Layout>
  );
};

export default Index;

