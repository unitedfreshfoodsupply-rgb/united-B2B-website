import { useState, useRef, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
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
  List,
  Apple,
  Carrot,
  Leaf,
  Sprout,
  Cherry,
  CircleDot,
  ArrowRight,
  TrendingUp,
  Package,
  Globe2,
  Ship,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import productsHero from "@/assets/products-hero.png";

const categories = [
  { id: "all", nameKey: "products.catalog.categories.all", icon: Grid3X3, count: 209 },
  { id: "fruits", nameKey: "products.catalog.categories.fruits", icon: Apple, count: 45 },
  { id: "vegetables", nameKey: "products.catalog.categories.vegetables", icon: Carrot, count: 62 },
  { id: "herbs", nameKey: "products.catalog.categories.herbs", icon: Leaf, count: 28 },
  { id: "microgreens", nameKey: "products.catalog.categories.microgreens", icon: Sprout, count: 18 },
  { id: "exotic", nameKey: "products.catalog.categories.exotic", icon: Cherry, count: 34 },
  { id: "specialty", nameKey: "products.catalog.categories.specialty", icon: CircleDot, count: 22 },
];

const tickerItems = [
  { key: "saffron_microgreens", tagKey: "new", icon: Sprout, origin: "UAE" },
  { key: "dragon_fruit", tagKey: "imported", icon: Globe2, origin: "Vietnam" },
  { key: "purple_carrots", tagKey: "new", icon: Carrot, origin: "Egypt" },
  { key: "starfruit", tagKey: "imported", icon: Ship, origin: "Malaysia" },
  { key: "organic_kale", tagKey: "new", icon: Leaf, origin: "Egypt" },
  { key: "thai_mangoes", tagKey: "imported", icon: Globe2, origin: "Thailand" },
  { key: "edible_flowers", tagKey: "new", icon: Sparkles, origin: "UAE" },
];

const sampleProducts = [
  {
    id: "1",
    key: "1",
    category: "vegetables",
    origin: "egypt",
    season: "peak",
    image: "🍅",
    grades: ["premium", "standard"],
    price: "From $2.50/kg"
  },
  {
    id: "2",
    key: "2",
    category: "fruits",
    origin: "egypt",
    season: "peak",
    image: "🍊",
    grades: ["export", "premium", "standard"],
    price: "From $1.80/kg"
  },
  {
    id: "3",
    key: "3",
    category: "herbs",
    origin: "egypt",
    season: "available",
    image: "🌿",
    grades: ["hydroponic", "organic"],
    price: "From $12.00/kg"
  },
  {
    id: "4",
    key: "4",
    category: "fruits",
    origin: "egypt",
    season: "starting",
    image: "🍓",
    grades: ["premium", "standard"],
    price: "From $3.20/kg"
  },
  {
    id: "5",
    key: "5",
    category: "microgreens",
    origin: "uae",
    season: "available",
    image: "🥬",
    grades: ["baby_leaf", "microgreen"],
    price: "From $25.00/kg"
  },
  {
    id: "6",
    key: "6",
    category: "exotic",
    origin: "imported",
    season: "available",
    image: "🐉",
    grades: ["premium"],
    price: "From $15.00/kg"
  },
  {
    id: "7",
    key: "7",
    category: "vegetables",
    origin: "egypt",
    season: "peak",
    image: "🫑",
    grades: ["premium", "standard"],
    price: "From $4.50/kg"
  },
  {
    id: "8",
    key: "8",
    category: "microgreens",
    origin: "uae",
    season: "available",
    image: "🌱",
    grades: ["microgreen"],
    price: "From $28.00/kg"
  },
];

export default function ProductsPage() {
  const { t, i18n } = useTranslation('pages');
  const isRTL = i18n.dir() === 'rtl';
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = sampleProducts.filter(product => {
    const productName = t(`products.catalog.items.${product.key}.name`);
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-[#fafafa]">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        <div className="container-wide relative z-10 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
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
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-uniteda-emerald-dark mb-6 tracking-tight leading-[0.9] uppercase">
                  {t('products.header.title')} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald via-uniteda-emerald to-uniteda-gold">
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
                  <span className="text-2xl font-black text-uniteda-gold">99.9%</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('products.header.stats.global_sourcing')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Immersive Visual */}
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
                />

                {/* HUD Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="glass-panel p-4 rounded-2xl border-white/20 bg-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-uniteda-emerald animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-tighter">{t('products.header.stats.live_track')}</span>
                      </div>
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

        {/* Categories Auto-scroll Ticker */}
        <div className="relative mt-12 bg-uniteda-emerald-dark py-6 overflow-hidden border-y border-uniteda-emerald/20">
          {/* Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-uniteda-emerald-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-uniteda-emerald-dark to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              animate={{ x: isRTL ? ["0%", "100%"] : ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="flex items-center gap-12 px-6"
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white group cursor-default flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-uniteda-emerald/20 flex items-center justify-center group-hover:bg-uniteda-emerald transition-colors">
                    <item.icon size={18} className="text-uniteda-gold" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">{t(`products.ticker.items.${item.key}`)}</span>
                      <span className={cn(
                        "text-[8px] font-black px-1.5 py-0.5 rounded",
                        item.tagKey === "new" ? "bg-uniteda-emerald text-white" : "bg-uniteda-gold text-white"
                      )}>
                        {t(`products.ticker.${item.tagKey}`)}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{t('products.ticker.sourced_via', { origin: item.origin })}</span>
                  </div>
                  <div className="h-4 w-px bg-white/10 ml-8" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content (Filters & Products) */}
      <section className="section-padding bg-white min-h-screen">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Sidebar Filters */}
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

                {/* Categories Panel */}
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
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="glass-panel p-6 rounded-3xl border border-black/5 bg-white shadow-sm">
                  <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                    {t('products.filters.quick_filters_title')}
                  </h3>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger className="w-full rounded-xl border-black/5 bg-muted/30 hover:bg-muted/50 transition-colors font-medium">
                        <SelectValue placeholder={t('products.filters.region.label')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('products.filters.region.all')}</SelectItem>
                        <SelectItem value="egypt">{t('products.filters.region.egypt')}</SelectItem>
                        <SelectItem value="uae">{t('products.filters.region.uae')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
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

            {/* Products Grid Area */}
            <div className="lg:col-span-9">
              {/* Toolbar */}
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
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Products List */}
              <AnimatePresence mode="popLayout">
                <div className={cn(
                  "grid gap-6",
                  viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                )}>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={cn(
                        "group relative bg-white border border-black/5 rounded-[2rem] overflow-hidden hover:border-uniteda-emerald/30 hover:shadow-xl hover:shadow-uniteda-emerald/5 transition-all duration-500",
                        viewMode === "list" && "flex items-center p-4 gap-6 hover:translate-x-2"
                      )}
                    >
                      {/* Image Area */}
                      <div className={cn(
                        "relative bg-[#f8f8f8] group-hover:bg-[#f0fdf4] transition-colors duration-500 flex items-center justify-center overflow-hidden",
                        viewMode === "list" ? "w-24 h-24 rounded-2xl shrink-0" : "aspect-square w-full"
                      )}>
                        <div className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">{product.image}</div>

                        {/* Grade Badge Overlay (Grid only) */}
                        {viewMode === "grid" && (
                          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                            {product.grades.slice(0, 1).map(grade => (
                              <span key={grade} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm text-[10px] font-bold uppercase tracking-wider text-uniteda-emerald-dark border border-black/5">
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
                        {/* Header */}
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-start">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 block">
                              {t(`products.catalog.items.${product.key}.scientific_name`)}
                            </span>
                            <h3 className="font-display font-bold text-xl text-uniteda-emerald-dark group-hover:text-uniteda-emerald transition-colors leading-tight">
                              {t(`products.catalog.items.${product.key}.name`)}
                            </h3>
                          </div>
                          {viewMode === "list" && (
                            <span className={cn(
                              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                              product.season === "peak" ? "bg-emerald-100 text-emerald-700" :
                                product.season === "starting" ? "bg-amber-100 text-amber-700" :
                                  "bg-slate-100 text-slate-600"
                            )}>
                              {product.season === "peak" ? t('products.filters.season.peak') :
                                product.season === "starting" ? t('products.filters.season.starting') :
                                  t('products.filters.season.available')}
                            </span>
                          )}
                        </div>

                        {/* Metadata (Grid) */}
                        {viewMode === "grid" && (
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-uniteda-emerald" />
                              {t(`products.catalog.items.${product.key}.origin`)}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
                              <TrendingUp className="w-3 h-3" />
                              {product.price}
                            </div>
                          </div>
                        )}

                        {/* Footer / Action */}
                        <div className={cn(
                          "mt-auto pt-4 border-t border-black/5 flex items-center justify-between",
                          viewMode === "list" && "mt-0 pt-0 border-none justify-end gap-6"
                        )}>
                          {viewMode === "grid" && (
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5",
                              product.season === "peak" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                product.season === "starting" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                  "bg-slate-50 text-slate-500 border border-slate-100"
                            )}>
                              <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse",
                                product.season === "peak" ? "bg-emerald-500" :
                                  product.season === "starting" ? "bg-amber-500" :
                                    "bg-slate-400"
                              )} />
                              {product.season === "peak" ? t('products.filters.season.peak') :
                                product.season === "starting" ? t('products.filters.season.starting') :
                                  t('products.filters.season.available')}
                            </span>
                          )}

                          <Button size="sm" className={cn(
                            "rounded-full font-bold transition-all",
                            viewMode === "grid"
                              ? "w-8 h-8 p-0 bg-transparent text-uniteda-emerald border border-uniteda-emerald/20 hover:bg-uniteda-emerald hover:text-white"
                              : "px-6 bg-uniteda-emerald text-white hover:bg-uniteda-emerald-dark"
                          )}>
                            {viewMode === "grid" ? <ArrowRight size={14} className="rtl:rotate-180" /> : <span className="flex items-center gap-2">{t('hero.cta_secondary')} <ArrowRight size={14} className="rtl:rotate-180" /></span>}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
