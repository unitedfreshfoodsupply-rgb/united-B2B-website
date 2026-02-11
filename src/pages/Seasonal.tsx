import { useState, useMemo, memo, useDeferredValue, lazy, useEffect } from "react";
import React from "react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { usePageTitle } from "@/hooks/use-page-title";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Info, Grid3x3, Table2, Download, Calendar, Search } from "lucide-react";
import { ProductCard } from "@/components/seasonal/ProductCard";
import { InSeasonNow } from "@/components/seasonal/InSeasonNow";
const ProductDetailModal = lazy(() => import("@/components/seasonal/ProductDetailModal").then(m => ({ default: m.ProductDetailModal })));
import { cn } from "@/lib/utils";
import { importedProducts } from "@/data/imported-products";
import { vegetableProducts } from "@/data/vegetable-products";
import { herbProducts } from "@/data/herb-products";
import { localFruitProducts } from "@/data/local-fruit-products";
import { Input } from "@/components/ui/input";


const currentMonth = new Date().getMonth();

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

const parseAvailabilityString = (str: string): number[] => {
  if (!str) return Array(12).fill(0);
  if (str === "Year-round" || str === "Available" || str === "طوال العام") return Array(12).fill(1);
  if (str === "Summer" || str === "صيفي") return [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0];

  const parts = str.split(" - ").map(s => s.trim());
  if (parts.length === 2) {
    const startIndex = monthMap[parts[0]];
    const endIndex = monthMap[parts[1]];

    if (startIndex !== undefined && endIndex !== undefined) {
      const arr = Array(12).fill(0);
      if (startIndex <= endIndex) {
        for (let i = startIndex; i <= endIndex; i++) arr[i] = 1;
      } else {
        for (let i = startIndex; i < 12; i++) arr[i] = 1;
        for (let i = 0; i <= endIndex; i++) arr[i] = 1;
      }
      return arr;
    }
  }

  return Array(12).fill(1);
};

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
  { name: "seasonal.seasons.spring", icon: Leaf, months: "seasonal.seasons.spring_range", color: "text-green-500" },
  { name: "seasonal.seasons.summer", icon: Sun, months: "seasonal.seasons.summer_range", color: "text-amber-500" },
  { name: "seasonal.seasons.autumn", icon: Droplets, months: "seasonal.seasons.autumn_range", color: "text-orange-500" },
  { name: "seasonal.seasons.winter", icon: Snowflake, months: "seasonal.seasons.winter_range", color: "text-blue-500" },
];

type ViewMode = "grid" | "table";
type Region = "egypt";

const MatrixRow = memo(({ product, months, currentMonth, t, regionType }: { product: any, months: string[], currentMonth: number, t: any, regionType: Region }) => {
  const availability = product.egypt;

  return (
    <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors">
      <td className="py-3 px-4 font-medium text-foreground sticky left-0 bg-background/80 backdrop-blur-md z-10 w-[200px]">
        {t(`products.catalog.items.${product.key}.name`)}
      </td>
      <td className="py-3 px-2 text-sm text-muted-foreground whitespace-nowrap">{t(`products.catalog.categories.${product.category.toLowerCase()}`)}</td>
      {availability.map((value: number, i: number) => (
        <td key={i} className="py-2 sm:py-3 px-1 sm:px-2 text-center">
          <div
            className={cn(
              "w-6 h-6 sm:w-8 sm:h-8 mx-auto rounded-lg transition-all",
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
  usePageTitle('meta.seasonal.title');
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedRegion, setSelectedRegion] = useState<Region>("egypt");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || "");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Sync state with URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) setSelectedCategory(category);

    const search = searchParams.get('search');
    if (search !== null) setSearchQuery(search);
  }, [searchParams]);

  const months = t('seasonal.months', { returnObjects: true }) as string[];

  // Merge full catalog data
  const allProducts = useMemo(() => {
    const catalogBase = [
      ...importedProducts,
      ...vegetableProducts,
      ...herbProducts,
      ...localFruitProducts
    ];

    // Map these to seasonal format
    return catalogBase.map(p => {
      const availabilityStr = t(`products.catalog.items.${p.key}.availability`);
      const dynamicArr = parseAvailabilityString(availabilityStr);

      // Check if we have a manually tuned entry for this product (preserving peak info)
      const manualEntry = [
        { name: "mangoes", key: "loc_5", egypt: [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0] },
        { name: "pomegranates", key: "loc_3", egypt: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0] },
        { name: "asparagus", key: "veg_1", egypt: [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0] },
        { name: "strawberries", key: "loc_1", egypt: [1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 2, 2] }
      ].find(m => m.key === p.key || m.name === p.key);

      return {
        ...p,
        name: p.key,
        egypt: manualEntry ? manualEntry.egypt : dynamicArr,
      };
    });
  }, [t]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchesCategory = !selectedCategory || p.category === selectedCategory.toLowerCase();
      const productName = t(`products.catalog.items.${p.key}.name`).toLowerCase();
      const matchesSearch = productName.includes(deferredSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, deferredSearchQuery, t]);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleExport = React.useCallback(() => {
    // Generate CSV Headers with quoting for safety
    const headerCols = [
      t('seasonal.table.columns.product'),
      t('seasonal.table.columns.category'),
      ...months
    ];
    const headers = headerCols.map(h => `"${h.replace(/"/g, '""')}"`).join(',');

    // Generate CSV Rows with strict quoting
    const rows = filteredProducts.map(p => {
      const name = t(`products.catalog.items.${p.key}.name`);
      const category = t(`products.catalog.categories.${p.category.toLowerCase()}`);
      const values = [name, category, ...p.egypt];
      return values.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',');
    });

    // Excel prefers \r\n and 'sep=,' helps with regional settings
    const csvContent = `sep=,\r\n${headers}\r\n${rows.join('\r\n')}`;

    // Create and trigger download
    const blob = new Blob([`\ufeff${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const fileName = `Uniteda_Seasonal_Catalog_${months[currentMonth]}_${new Date().getFullYear()}.csv`;

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [filteredProducts, t, months, currentMonth]);

  const categories = [
    { id: "fruits", label: t('products.catalog.categories.fruits') },
    { id: "vegetables", label: t('products.catalog.categories.vegetables') },
    { id: "herbs", label: t('products.catalog.categories.herbs') },
    { id: "exotic", label: t('products.catalog.categories.exotic') || "Exotic" },
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
                    <span className="font-bold text-foreground">{allProducts.filter(p => p.egypt[currentMonth] === 2).length}</span> {t('seasonal.stats.peak_products')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">{allProducts.length}</span> {t('seasonal.stats.regions_tracked')}
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
                <Button
                  onClick={handleExport}
                  className="w-full rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20"
                >
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
            {/* Region Indicator */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-muted w-full sm:w-auto order-1">
              <div className="px-4 py-2 rounded-md text-sm font-bold bg-uniteda-emerald text-white shadow-sm flex items-center gap-2">
                <span>🇪🇬</span> {t('seasonal.controls.region.egypt_ops')}
              </div>
            </div>

            {/* Search and Category Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 order-3 sm:order-2 w-full lg:w-auto">
              <div className="relative group min-w-[200px] lg:min-w-[280px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder={t('products.filters.search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 bg-muted/50 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-accent/20 transition-all font-medium text-sm"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === null
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
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
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
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
              name: t(`products.catalog.items.${p.key}.name`),
              category: t(`products.catalog.categories.${p.category.toLowerCase()}`)
            }))}
            region={selectedRegion}
            currentMonth={currentMonth}
          />

          {/* Grid View */}
          {viewMode === "grid" && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  {selectedCategory ? t(`products.catalog.categories.${selectedCategory}`) : t('products.catalog.categories.all')}
                </h2>
                <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                  {filteredProducts.length} {t('products.catalog.products_suffix')}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.key}
                    product={{
                      ...product,
                      name: t(`products.catalog.items.${product.key}.name`),
                      category: t(`products.catalog.categories.${product.category.toLowerCase()}`)
                    }}
                    region={selectedRegion}
                    currentMonth={currentMonth}
                    onClick={() => handleProductClick(product)}
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
                          key={product.key}
                          product={product}
                          months={months}
                          currentMonth={currentMonth}
                          t={t}
                          regionType={selectedRegion}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
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
