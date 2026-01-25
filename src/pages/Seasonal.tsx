import { useState, useMemo, memo } from "react";
import React from "react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Info, Grid3x3, Table2, Download, Calendar } from "lucide-react";
import { ProductCard } from "@/components/seasonal/ProductCard";
import { InSeasonNow } from "@/components/seasonal/InSeasonNow";
import { ProductDetailModal } from "@/components/seasonal/ProductDetailModal";
import { cn } from "@/lib/utils";


const seasonalProducts = [

  {
    name: "Mangoes",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0],
    uae: [0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
    image: "/images/products/mangoes.webp",
  },

  {
    name: "Pomegranates",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0],
    uae: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1],
    image: "/images/products/pomegranates.webp",
  },


  {
    name: "Asparagus",
    category: "Vegetables",
    egypt: [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    uae: [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    image: "/images/products/asparagus.webp",
  },

];

const currentMonth = new Date().getMonth();

const getAvailabilityColor = (value: number) => {
  if (value === 2) return "bg-accent";
  if (value === 1) return "bg-accent/40";
  return "bg-muted";
};

const getAvailabilityLabelKey = (value: number) => {
  if (value === 2) return "seasonal.legend.peak";
  if (value === 1) return "seasonal.legend.available";
  return "seasonal.legend.off_season";
};

const seasons = [
  { name: "seasonal.seasons.spring", icon: Leaf, months: "Mar - May", color: "text-green-500" },
  { name: "seasonal.seasons.summer", icon: Sun, months: "Jun - Aug", color: "text-amber-500" },
  { name: "seasonal.seasons.autumn", icon: Droplets, months: "Sep - Nov", color: "text-orange-500" },
  { name: "seasonal.seasons.winter", icon: Snowflake, months: "Dec - Feb", color: "text-blue-500" },
];

type ViewMode = "grid" | "table";
type Region = "egypt" | "uae" | "both";

const MatrixRow = memo(({ product, months, currentMonth, t, regionType }: { product: any, months: string[], currentMonth: number, t: any, regionType: "egypt" | "uae" }) => {
  const availability = regionType === "egypt" ? product.egypt : product.uae;
  return (
    <tr className="border-b border-border/50 hover:bg-muted/30">
      <td className="py-3 px-4 font-medium text-foreground">{t(`seasonal.products.${product.name}`)}</td>
      <td className="py-3 px-2 text-sm text-muted-foreground">{t(`products.catalog.categories.${product.category.toLowerCase()}`)}</td>
      {availability.map((value: number, i: number) => (
        <td key={i} className="py-2 sm:py-3 px-1 sm:px-2 text-center">
          <div
            className={cn(
              "w-6 h-6 sm:w-8 sm:h-8 mx-auto rounded-lg",
              getAvailabilityColor(value),
              i === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""
            )}
            title={t(getAvailabilityLabelKey(value))}
          />
        </td>
      ))}
    </tr>
  );
});

MatrixRow.displayName = "MatrixRow";

export default function SeasonalPage() {
  const { t, i18n, isRTL } = useUnifiedTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedRegion, setSelectedRegion] = useState<Region>("both");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof seasonalProducts[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const months = t('seasonal.months', { returnObjects: true }) as string[];

  // Filter products
  const filteredProducts = useMemo(() => {
    return seasonalProducts.filter(p =>
      !selectedCategory || p.category === selectedCategory
    );
  }, [selectedCategory]);

  const handleProductClick = (product: typeof seasonalProducts[0]) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const categories = [
    { id: "Fruits", label: t('products.catalog.categories.fruits') },
    { id: "Vegetables", label: t('products.catalog.categories.vegetables') },
    { id: "Herbs", label: t('products.catalog.categories.herbs') },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40" />

        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr,auto] gap-6 lg:gap-8 items-start">
            {/* Main content */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge with current month */}
              <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                  <Calendar size={14} />
                  {t('seasonal.header.badge')}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {months[currentMonth]} {new Date().getFullYear()}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                {t('seasonal.header.title')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-1 sm:mt-2">
                  {t('seasonal.header.title_highlight')}
                </span>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mb-4 sm:mb-6">
                {t('seasonal.header.description')}
              </p>

              {/* Quick stats */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">{seasonalProducts.filter(p => p.egypt[currentMonth] === 2 || p.uae[currentMonth] === 2).length}</span> {t('seasonal.stats.peak_products')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">2</span> {t('seasonal.stats.regions_tracked')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">12</span> {t('seasonal.stats.months_coverage')}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action card */}
            <motion.div
              className="w-full lg:w-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-lg lg:min-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Download size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{t('seasonal.controls.buttons.export')}</h3>
                    <p className="text-xs text-muted-foreground">{t('seasonal.controls.buttons.download')}</p>
                  </div>
                </div>
                <Button className="w-full rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20">
                  <Download size={16} className="mr-2" />
                  {t('seasonal.controls.buttons.export')}
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  {t('seasonal.controls.export_note')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-4 sm:py-6 border-b border-border bg-background sticky top-0 z-10">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {/* Region Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-muted w-full sm:w-auto order-1">
              <button
                onClick={() => setSelectedRegion("egypt")}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "egypt"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                🇪🇬 {t('seasonal.controls.region.egypt')}
              </button>
              <button
                onClick={() => setSelectedRegion("uae")}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "uae"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                🇦🇪 {t('seasonal.controls.region.uae')}
              </button>
              <button
                onClick={() => setSelectedRegion("both")}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "both"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t('seasonal.controls.region.both')}
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 order-3 sm:order-2 w-full sm:w-auto scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t('products.catalog.categories.all')}
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-muted ml-auto sm:ml-0 order-2 sm:order-3">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                title={t('seasonal.controls.view_mode.grid')}
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-all ${viewMode === "table"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                title={t('seasonal.controls.view_mode.table')}
              >
                <Table2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          {/* In Season Now */}
          <InSeasonNow
            products={filteredProducts.map(p => ({
              ...p,
              name: t(`seasonal.products.${p.name}`),
              category: t(`products.catalog.categories.${p.category.toLowerCase()}`)
            }))}
            region={selectedRegion}
            currentMonth={currentMonth}
          />

          {/* Grid View */}
          {viewMode === "grid" && (
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                {t('products.catalog.categories.all')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.name}
                    product={{
                      ...product,
                      name: t(`seasonal.products.${product.name}`),
                      category: t(`products.catalog.categories.${product.category.toLowerCase()}`)
                    }}
                    region={selectedRegion}
                    currentMonth={currentMonth}
                    onClick={() => handleProductClick({
                      ...product,
                      name: t(`seasonal.products.${product.name}`),
                      category: t(`products.catalog.categories.${product.category.toLowerCase()}`)
                    })}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Table View (Classic) */}
          {viewMode === "table" && (
            <div className="space-y-8 sm:space-y-12">
              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent" />
                  <span className="text-sm text-muted-foreground">{t('seasonal.legend.peak')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent/40" />
                  <span className="text-sm text-muted-foreground">{t('seasonal.legend.available')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-muted" />
                  <span className="text-sm text-muted-foreground">{t('seasonal.legend.off_season')}</span>
                </div>
              </div>

              {/* Egypt Table */}
              {(selectedRegion === "egypt" || selectedRegion === "both") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <span>🇪🇬</span> {t('seasonal.table.egypt_title')}
                  </h2>
                  <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                    <table className="w-full min-w-[700px] sm:min-w-[800px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">{t('seasonal.table.columns.product')}</th>
                          <th className="text-left py-3 px-2 text-muted-foreground text-sm">{t('seasonal.table.columns.category')}</th>
                          {months.map((month, i) => (
                            <th
                              key={month}
                              className={`py-3 px-2 text-center text-sm ${i === currentMonth ? "text-accent font-bold" : "text-muted-foreground"}`}
                            >
                              {month}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((product) => (
                          <MatrixRow
                            key={product.name}
                            product={product}
                            months={months}
                            currentMonth={currentMonth}
                            t={t}
                            regionType="egypt"
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* UAE Table */}
              {(selectedRegion === "uae" || selectedRegion === "both") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <span>🇦🇪</span> {t('seasonal.table.uae_title')}
                  </h2>
                  <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                    <table className="w-full min-w-[700px] sm:min-w-[800px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">{t('seasonal.table.columns.product')}</th>
                          <th className="text-left py-3 px-2 text-muted-foreground text-sm">{t('seasonal.table.columns.category')}</th>
                          {months.map((month, i) => (
                            <th
                              key={month}
                              className={`py-3 px-2 text-center text-sm ${i === currentMonth ? "text-accent font-bold" : "text-muted-foreground"}`}
                            >
                              {month}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((product) => (
                          <MatrixRow
                            key={product.name}
                            product={product}
                            months={months}
                            currentMonth={currentMonth}
                            t={t}
                            regionType="uae"
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <div className="flex gap-3 sm:gap-4">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{t('seasonal.info.title')}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {t('seasonal.info.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container-wide text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              {t('seasonal.cta.title')}
            </h2>
            <p className="text-primary-foreground/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
              {t('seasonal.cta.description')}
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/rfq">
                {t('seasonal.controls.buttons.request_access')}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        currentMonth={currentMonth}
      />
    </Layout>
  );
}
