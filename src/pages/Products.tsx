import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Grid3X3, List, Apple, Carrot, Leaf, Sprout, Cherry, CircleDot } from "lucide-react";

const categories = [
  { id: "all", nameKey: "products.catalog.categories.all", icon: Grid3X3, count: 209 },
  { id: "fruits", nameKey: "products.catalog.categories.fruits", icon: Apple, count: 45 },
  { id: "vegetables", nameKey: "products.catalog.categories.vegetables", icon: Carrot, count: 62 },
  { id: "herbs", nameKey: "products.catalog.categories.herbs", icon: Leaf, count: 28 },
  { id: "microgreens", nameKey: "products.catalog.categories.microgreens", icon: Sprout, count: 18 },
  { id: "exotic", nameKey: "products.catalog.categories.exotic", icon: Cherry, count: 34 },
  { id: "specialty", nameKey: "products.catalog.categories.specialty", icon: CircleDot, count: 22 },
];

const sampleProducts = [
  {
    id: "1",
    key: "1",
    category: "vegetables",
    origin: "egypt",
    season: "peak",
    image: "🍅",
    grades: ["premium", "standard"]
  },
  {
    id: "2",
    key: "2",
    category: "fruits",
    origin: "egypt",
    season: "peak",
    image: "🍊",
    grades: ["export", "premium", "standard"]
  },
  {
    id: "3",
    key: "3",
    category: "herbs",
    origin: "egypt",
    season: "available",
    image: "🌿",
    grades: ["hydroponic", "organic"]
  },
  {
    id: "4",
    key: "4",
    category: "fruits",
    origin: "egypt",
    season: "starting",
    image: "🍓",
    grades: ["premium", "standard"]
  },
  {
    id: "5",
    key: "5",
    category: "microgreens",
    origin: "uae",
    season: "available",
    image: "🥬",
    grades: ["baby_leaf", "microgreen"]
  },
  {
    id: "6",
    key: "6",
    category: "exotic",
    origin: "imported",
    season: "available",
    image: "🐉",
    grades: ["premium"]
  },
  {
    id: "7",
    key: "7",
    category: "vegetables",
    origin: "egypt",
    season: "peak",
    image: "🫑",
    grades: ["premium", "standard"]
  },
  {
    id: "8",
    key: "8",
    category: "microgreens",
    origin: "uae",
    season: "available",
    image: "🌱",
    grades: ["microgreen"]
  },
];

export default function ProductsPage() {
  const { t } = useTranslation('pages');
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
      {/* Header */}
      <section className="pt-12 pb-8 bg-gradient-subtle">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('products.header.badge')}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('products.header.title')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t('products.header.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder={t('products.filters.search_placeholder')}
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    {t('products.filters.categories_title')}
                  </h3>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${activeCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <cat.icon className="w-4 h-4" />
                          {t(cat.nameKey)}
                        </span>
                        <span className={`text-xs ${activeCategory === cat.id ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    {t('products.filters.quick_filters_title')}
                  </h3>
                  <div className="space-y-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('products.filters.region.label')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('products.filters.region.all')}</SelectItem>
                        <SelectItem value="egypt">{t('products.filters.region.egypt')}</SelectItem>
                        <SelectItem value="uae">{t('products.filters.region.uae')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('products.filters.season.label')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('products.filters.season.all')}</SelectItem>
                        <SelectItem value="peak">{t('products.filters.season.peak')}</SelectItem>
                        <SelectItem value="available">{t('products.filters.season.available')}</SelectItem>
                        <SelectItem value="starting">{t('products.filters.season.starting')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('products.filters.industry.label')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('products.filters.industry.all')}</SelectItem>
                        <SelectItem value="hotel">{t('products.filters.industry.hotel')}</SelectItem>
                        <SelectItem value="restaurant">{t('products.filters.industry.restaurant')}</SelectItem>
                        <SelectItem value="airline">{t('products.filters.industry.airline')}</SelectItem>
                        <SelectItem value="retail">{t('products.filters.industry.retail')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between mb-6"
              >
                <p className="text-muted-foreground">
                  {t('products.catalog.showing')} <span className="font-semibold text-foreground">{filteredProducts.length}</span> {t('products.catalog.products_suffix')}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Products */}
              <div className={`grid gap-4 ${viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`group p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300 ${viewMode === "list" ? "flex items-center gap-6" : ""
                      }`}
                  >
                    <div className={`${viewMode === "list" ? "w-20 h-20" : "w-full aspect-square mb-4"} rounded-xl bg-muted flex items-center justify-center text-5xl`}>
                      {product.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {t(`products.catalog.items.${product.key}.name`)}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${product.season === "peak"
                          ? "bg-accent/10 text-accent"
                          : product.season === "starting"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-muted text-muted-foreground"
                          }`}>
                          {product.season === "peak" ? t('products.filters.season.peak') :
                            product.season === "starting" ? t('products.filters.season.starting') :
                              t('products.filters.season.available')}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground italic mb-3">
                        {t(`products.catalog.items.${product.key}.scientific_name`)}
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 rounded bg-muted text-muted-foreground">
                          {t(`products.catalog.items.${product.key}.origin`)}
                        </span>
                        <span className="px-2 py-1 rounded bg-muted text-muted-foreground">
                          {t(`products.catalog.items.${product.key}.availability`)}
                        </span>
                      </div>
                      {viewMode === "list" && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.grades.map(grade => (
                            <span key={grade} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                              {t(`products.catalog.grades.${grade}`)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
