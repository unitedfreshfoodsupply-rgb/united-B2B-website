import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { SeasonalSection } from "@/components/home/SeasonalSection";
import { OperationsSection } from "@/components/home/OperationsSection";
import { IndustrySection } from "@/components/home/IndustrySection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductCategoriesSection />
      <SeasonalSection />
      <OperationsSection />
      <IndustrySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
