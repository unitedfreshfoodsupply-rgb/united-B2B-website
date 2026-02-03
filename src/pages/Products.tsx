import React, { useState, useRef, useEffect, useMemo, useDeferredValue, memo, useCallback, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Grid3X3,
  List as ListIcon,
  Apple,
  Carrot,
  Leaf,
  Sprout,
  Cherry,
  CircleDot,
  ArrowRight,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VirtuosoGrid } from "react-virtuoso";
import productsHero from "@/assets/products-hero.webp";
import { importedProducts } from "@/data/imported-products";
import { vegetableProducts } from "@/data/vegetable-products";
import { herbProducts } from "@/data/herb-products";
import { localFruitProducts } from "@/data/local-fruit-products";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { usePageTitle } from "@/hooks/use-page-title";
import { ProduceImage } from "@/components/ui/ProduceImage";
import { LazySection } from "@/components/ui/LazySection";

// --- Types ---
interface Product {
  id: string;
  key: string;
  category: string;
  origin: string;
  season: string;
  image: string;
  grades: string[];
  price: string;
}

interface NormalizedProduct extends Product {
  searchName: string;
  searchOrigin: string;
}

// --- Constants & Data ---
const ALL_PRODUCTS: Product[] = [
  ...importedProducts,
  ...vegetableProducts,
  ...herbProducts,
  ...localFruitProducts
];

const CATEGORY_ICONS: Record<string, any> = {
  all: Grid3X3,
  fruits: Apple,
  vegetables: Carrot,
  herbs: Leaf,
  exotic: Cherry,
  specialty: CircleDot,
};

// --- Sub-components ---

/**
 * ProductCard: Highly optimized for virtualization.
 * - Strict memoization
 * - Optimized animations
 * - GPU-safe transforms
 */
const ProductCard = memo(({
  product,
  t,
  viewMode,
  index
}: {
  product: Product;
  t: (key: string, params?: any) => string;
  viewMode: "grid" | "list";
  index: number
}) => {
  const isPriority = index < 6;
  const productName = t(`products.catalog.items.${product.key}.name`);
  const scientificName = t(`products.catalog.items.${product.key}.scientific_name`);
  const origin = t(`products.catalog.items.${product.key}.origin`);
  const seasonType = product.season;

  // Animation variants to avoid per-render-object allocation
  const variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
        delay: isPriority ? index * 0.04 : 0,
        ease: [0.23, 1, 0.32, 1] // Custom ease for smoother feel
      }}
      className={cn(
        "group relative bg-white border border-black/5 rounded-[2rem] overflow-hidden hover:border-uniteda-emerald/30 transition-all duration-500",
        viewMode === "grid" ? "hover:shadow-xl hover:shadow-uniteda-emerald/5" : "flex items-center p-4 gap-6 hover:translate-x-2"
      )}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Image Area */}
      <div className={cn(
        "relative bg-[#f8f8f8] group-hover:bg-[#f0fdf4] transition-colors duration-500 flex items-center justify-center overflow-hidden",
        viewMode === "list" ? "w-24 h-24 rounded-2xl shrink-0" : "aspect-square w-full"
      )}>
        {product.image.length > 2 ? (
          <ProduceImage
            src={product.image}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            isPriority={isPriority}
          />
        ) : (
          <div className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl select-none">
            {product.image}
          </div>
        )}

        {viewMode === "grid" && (
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            {product.grades.slice(0, 1).map((grade) => (
              <span key={grade} className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-sm text-[10px] font-bold uppercase tracking-wider text-uniteda-emerald-dark border border-black/5">
                {t(`products.catalog.grades.${grade}`)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className={cn(
        "flex flex-col",
        viewMode === "grid" ? "p-6" : "flex-1 py-1"
      )}>
        <div className="flex justify-between items-start mb-2">
          <div className="text-start">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 block">
              {scientificName}
            </span>
            <h3 className="font-display font-bold text-xl text-uniteda-emerald-dark group-hover:text-uniteda-emerald transition-colors leading-tight">
              {t(`products.catalog.items.${product.key}.name`, { defaultValue: product.key.replace(/_/g, ' ') })}
            </h3>
          </div>
          {viewMode === "list" && (
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
              seasonType === "peak" ? "bg-emerald-100 text-emerald-700" :
                seasonType === "starting" ? "bg-amber-100 text-amber-700" :
                  "bg-slate-100 text-slate-600"
            )}>
              {t(`products.filters.season.${seasonType}`)}
            </span>
          )}
        </div>

        {viewMode === "grid" && (
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-uniteda-emerald" />
              {origin}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
              <TrendingUp className="w-3 h-3" />
              {product.price === "Market Price" ? t('products.catalog.market_price') : product.price}
            </div>
          </div>
        )}

        <div className={cn(
          "mt-auto pt-4 border-t border-black/5 flex items-center justify-between",
          viewMode === "list" && "mt-0 pt-0 border-none justify-end gap-6"
        )}>
          {viewMode === "grid" && (
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5",
              seasonType === "peak" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                seasonType === "starting" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                  "bg-slate-50 text-slate-500 border border-slate-100"
            )}>
              <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse",
                seasonType === "peak" ? "bg-emerald-500" :
                  seasonType === "starting" ? "bg-amber-500" :
                    "bg-slate-400"
              )} />
              {t(`products.filters.season.${seasonType}`)}
            </span>
          )}

          <Button size="sm" className={cn(
            "rounded-full font-bold transition-all",
            viewMode === "grid"
              ? "w-8 h-8 p-0 bg-transparent text-uniteda-emerald border border-uniteda-emerald/20 hover:bg-uniteda-emerald hover:text-white"
              : "px-6 bg-uniteda-emerald text-white hover:bg-uniteda-emerald-dark"
          )}>
            {viewMode === "grid" ? (
              <ArrowRight size={14} className="rtl:rotate-180" />
            ) : (
              <span className="flex items-center gap-2">
                {t('hero.cta_secondary')} <ArrowRight size={14} className="rtl:rotate-180" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}, (prev, next) => (
  prev.product.id === next.product.id &&
  prev.viewMode === next.viewMode &&
  prev.index === next.index
));

ProductCard.displayName = "ProductCard";

// Virtuoso stable components to prevent unnecessary remounts
const VirtuosoList = forwardRef<HTMLDivElement, { children?: React.ReactNode, viewMode: "grid" | "list" }>(({ children, viewMode, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      "grid gap-6",
      viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
    )}
  >
    {children}
  </div>
));
VirtuosoList.displayName = "VirtuosoList";

const VirtuosoItem = ({ children, ...props }: any) => (
  <div {...props} className="h-full">
    {children}
  </div>
);
VirtuosoItem.displayName = "VirtuosoItem";

// --- Main Page ---

export default function ProductsPage() {
  const { t, isRTL } = useUnifiedTranslation();
  usePageTitle('meta.products.title');

  // States
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [seasonFilter, setSeasonFilter] = useState("all");

  // 1️⃣ Data Normalization Layer
  // Pre-computes localized search strings to avoid calling t() inside hot loops
  const normalizedProducts = useMemo(() => {
    return ALL_PRODUCTS.map(p => ({
      ...p,
      searchName: t(`products.catalog.items.${p.key}.name`).toLowerCase(),
      searchOrigin: t(`products.catalog.items.${p.key}.origin`).toLowerCase(),
    }));
  }, [t]);

  // 2️⃣ Optimized Selector Logic
  // Single-pass calculation for filtered list and category counts
  const { filteredProducts, categoryCounts } = useMemo(() => {
    const query = deferredSearchQuery.toLowerCase().trim();
    const counts: Record<string, number> = { all: 0 };

    const filtered = normalizedProducts.filter(product => {
      // Calculate category counts globally (one pass)
      counts[product.category] = (counts[product.category] || 0) + 1;
      counts.all++;

      // Apply Filters
      if (activeCategory !== "all" && product.category !== activeCategory) return false;
      if (seasonFilter !== "all" && product.season !== seasonFilter) return false;

      const matchesSearch = query === "" ||
        product.searchName.includes(query) ||
        product.searchOrigin.includes(query);

      return matchesSearch;
    });
    return { filteredProducts: filtered, categoryCounts: counts };
  }, [normalizedProducts, activeCategory, deferredSearchQuery, seasonFilter]);

  // 3️⃣ Component Stable References
  const categories = useMemo(() => [
    { id: "all", nameKey: "products.catalog.categories.all", icon: Grid3X3 },
    { id: "fruits", nameKey: "products.catalog.categories.fruits", icon: Apple },
    { id: "vegetables", nameKey: "products.catalog.categories.vegetables", icon: Carrot },
    { id: "herbs", nameKey: "products.catalog.categories.herbs", icon: Leaf },
    { id: "exotic", nameKey: "products.catalog.categories.exotic", icon: Cherry },
    { id: "specialty", nameKey: "products.catalog.categories.specialty", icon: CircleDot },
  ], []);

  const tickerItems = useMemo(() => {
    return ALL_PRODUCTS
      .filter(p => p.season === "peak")
      .slice(0, 15)
      .map(p => ({
        key: p.key,
        icon: CATEGORY_ICONS[p.category] || CircleDot,
        tagKey: "peak",
        origin: p.origin
      }));
  }, []);

  const clearFilters = useCallback(() => {
    setActiveCategory("all");
    setSearchQuery("");
    setSeasonFilter("all");
  }, []);

  // Virtuoso components factory to inject props safely
  const VirtuosoComponents = useMemo(() => ({
    List: forwardRef<HTMLDivElement, any>((props, ref) => (
      <VirtuosoList {...props} ref={ref} viewMode={viewMode} />
    )),
    Item: VirtuosoItem
  }), [viewMode]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        <div className="container-wide relative z-10 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-start">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald text-sm font-bold mb-6"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  {t('products.header.badge')}
                </motion.span>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-uniteda-emerald-dark mb-6 tracking-tight leading-[0.9] uppercase">
                  {t('products.header.title')}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald via-uniteda-emerald to-uniteda-gold">
                    {t('products.header.title_highlight')}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-lg font-medium">
                  {t('products.header.description')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-panel px-6 py-4 rounded-3xl border border-black/5 flex flex-col items-start gap-1 bg-white/50">
                  <span className="text-2xl font-black text-uniteda-emerald">200+</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('products.header.stats.active_skus')}</span>
                </div>
                <div className="glass-panel px-6 py-4 rounded-3xl border border-black/5 flex flex-col items-start gap-1 bg-white/50">
                  <span className="text-2xl font-black text-uniteda-gold">100%</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('about.impact.stats.satisfaction')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-square w-full hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-uniteda-emerald/20 to-transparent rounded-[3rem] blur-2xl" />
              <div className="relative h-full w-full rounded-[3.5rem] border-8 border-white shadow-2xl overflow-hidden group">
                <img
                  src={productsHero}
                  alt="Premium Produce"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                  <div className="glass-panel p-4 rounded-2xl border-white/20 bg-white/10 backdrop-blur-md self-start">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-2 h-2 rounded-full bg-uniteda-emerald animate-ping" />
                      <span className="text-[10px] font-black uppercase tracking-tighter">{t('products.header.stats.live_track')}</span>
                    </div>
                  </div>
                  <div className="glass-panel p-6 rounded-3xl border-white/20 bg-white/20 backdrop-blur-xl self-end max-w-[200px]">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-white/60 text-[8px] font-bold uppercase tracking-widest">
                        <span>{t('products.header.stats.quality_index')}</span>
                        <span>AA+</span>
                      </div>
                      <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-uniteda-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <LazySection
          minHeight="100px"
          importFunc={() => Promise.resolve({
            default: () => (
              <div className="relative mt-12 bg-uniteda-emerald-dark py-6 overflow-hidden border-y border-uniteda-emerald/20">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-uniteda-emerald-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-uniteda-emerald-dark to-transparent z-10 pointer-events-none" />

                <div className="flex whitespace-nowrap overflow-hidden">
                  <motion.div
                    animate={{ x: isRTL ? ["0%", "100%"] : ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
                    className="flex items-center gap-12 px-6"
                    style={{ willChange: "transform" }}
                  >
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-white group cursor-default flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-uniteda-emerald/20 flex items-center justify-center group-hover:bg-uniteda-emerald transition-colors">
                          <item.icon size={18} className="text-uniteda-gold" />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">
                              {t(`products.catalog.items.${item.key}.name`)}
                            </span>
                            <span className={cn(
                              "text-[8px] font-black px-1.5 py-0.5 rounded",
                              item.tagKey === "new" ? "bg-uniteda-emerald text-white" : "bg-uniteda-gold text-white"
                            )}>
                              {t(`products.ticker.${item.tagKey}`)}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                            {t('products.ticker.sourced_via_local')}
                          </span>
                        </div>
                        <div className="h-4 w-px bg-white/10 ml-8" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )
          })}
        />
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white min-h-screen">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-uniteda-emerald/5 rounded-xl blur-lg group-hover:bg-uniteda-emerald/10 transition-all" />
                  <div className="relative bg-white rounded-xl shadow-sm border border-black/5 flex items-center px-4 py-3 gap-3 transition-all group-focus-within:border-uniteda-emerald/50 group-focus-within:shadow-md">
                    <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-uniteda-emerald transition-colors" />
                    <input
                      type="text"
                      placeholder={t('products.filters.search_placeholder')}
                      className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-muted-foreground/70"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="glass-panel p-6 rounded-3xl border border-black/5 bg-[#fafafa]/50">
                  <h3 className="font-display font-bold text-lg text-uniteda-emerald-dark mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-uniteda-emerald" />
                    {t('products.filters.categories_title')}
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group",
                          activeCategory === cat.id
                            ? "bg-uniteda-emerald text-white shadow-lg shadow-uniteda-emerald/20 scale-[1.02]"
                            : "text-muted-foreground hover:bg-white hover:text-uniteda-emerald-dark hover:shadow-sm"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <cat.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", activeCategory === cat.id ? "text-white" : "text-uniteda-emerald/70")} />
                          {t(cat.nameKey)}
                        </span>
                        <span className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full font-bold",
                          activeCategory === cat.id ? "bg-white/20 text-white" : "bg-black/5 text-muted-foreground"
                        )}>
                          {categoryCounts[cat.id] || 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div className="glass-panel p-6 rounded-3xl border border-black/5 bg-white shadow-sm">
                  <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                    {t('products.filters.quick_filters_title')}
                  </h3>
                  <div className="space-y-4">
                    <Select dir={isRTL ? "rtl" : "ltr"} value={seasonFilter} onValueChange={setSeasonFilter}>
                      <SelectTrigger className="w-full rounded-xl border-black/5 bg-muted/30 hover:bg-muted/50 transition-colors font-medium">
                        <SelectValue placeholder={t('products.filters.season.label')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('products.filters.season.all')}</SelectItem>
                        <SelectItem value="peak">{t('products.filters.season.peak')}</SelectItem>
                        <SelectItem value="available">{t('products.filters.season.available')}</SelectItem>
                        <SelectItem value="starting">{t('products.filters.season.starting')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Catalog */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between mb-8 bg-muted/30 p-2 rounded-2xl border border-black/5"
              >
                <div className="px-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t('products.catalog.showing')} <span className="font-bold text-uniteda-emerald-dark">{filteredProducts.length}</span> {t('products.catalog.products_suffix')}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm border border-black/5">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "rounded-lg transition-all",
                      viewMode === "grid" ? "bg-muted text-foreground font-bold shadow-inner" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "rounded-lg transition-all",
                      viewMode === "list" ? "bg-muted text-foreground font-bold shadow-inner" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <ListIcon className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Catalog List */}
              <div className="min-h-[600px] relative">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.length > 0 ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <VirtuosoGrid
                        useWindowScroll
                        overscan={12} // Adjusted for better performance/smoothness balance
                        data={filteredProducts}
                        components={VirtuosoComponents}
                        itemContent={(index, product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            t={t}
                            viewMode={viewMode}
                            index={index}
                          />
                        )}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-24 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Search className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-uniteda-emerald-dark mb-2">{t('products.catalog.no_results')}</h3>
                      <p className="text-muted-foreground">{t('products.catalog.no_results_description')}</p>
                      <Button
                        variant="ghost"
                        className="mt-4 text-uniteda-emerald font-bold"
                        onClick={clearFilters}
                      >
                        {t('products.filters.clear_all')}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
