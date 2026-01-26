import React, { useState, useMemo, useDeferredValue, memo } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { VirtuosoGrid } from "react-virtuoso";
import { sampleProducts } from "@/data/all-products";
import { ProduceImage } from "@/components/ui/ProduceImage";

const ProductCard = memo(({ product, t, viewMode, index }: { product: any, t: any, viewMode: "grid" | "list", index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
                duration: 0.2,
                delay: Math.min(index * 0.03, 0.3),
                ease: "easeOut"
            }}
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
                {product.image.length > 2 ? (
                    <ProduceImage
                        src={product.image}
                        alt={t(`products.catalog.items.${product.key}.name`)}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                        isPriority={index < 4}
                    />
                ) : (
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">{product.image}</div>
                )}

                {/* Grade Badge Overlay (Grid only) */}
                {viewMode === "grid" && (
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                        {product.grades.slice(0, 1).map((grade: string) => (
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
    );
});

ProductCard.displayName = "ProductCard";

const CategorySidebar = memo(({
    categories,
    activeCategory,
    setActiveCategory,
    t
}: {
    categories: any[],
    activeCategory: string,
    setActiveCategory: (id: string) => void,
    t: any
}) => {
    return (
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
    );
});

CategorySidebar.displayName = "CategorySidebar";

export const ProductCatalog = ({ t, isRTL }: { t: any, isRTL: boolean }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const deferredSearchQuery = useDeferredValue(searchQuery);
    const [regionFilter, setRegionFilter] = useState("all");
    const [seasonFilter, setSeasonFilter] = useState("all");

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: sampleProducts.length };
        sampleProducts.forEach(p => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, []);

    const categories = useMemo(() => [
        { id: "all", nameKey: "products.catalog.categories.all", icon: Grid3X3, count: categoryCounts["all"] || 0 },
        { id: "fruits", nameKey: "products.catalog.categories.fruits", icon: Apple, count: categoryCounts["fruits"] || 0 },
        { id: "vegetables", nameKey: "products.catalog.categories.vegetables", icon: Carrot, count: categoryCounts["vegetables"] || 0 },
        { id: "herbs", nameKey: "products.catalog.categories.herbs", icon: Leaf, count: categoryCounts["herbs"] || 0 },
        { id: "microgreens", nameKey: "products.catalog.categories.microgreens", icon: Sprout, count: categoryCounts["microgreens"] || 0 },
        { id: "exotic", nameKey: "products.catalog.categories.exotic", icon: Cherry, count: categoryCounts["exotic"] || 0 },
        { id: "specialty", nameKey: "products.catalog.categories.specialty", icon: CircleDot, count: categoryCounts["specialty"] || 0 },
    ], [categoryCounts]);

    const filteredProducts = useMemo(() => {
        const query = deferredSearchQuery.toLowerCase().trim();
        const region = regionFilter.toLowerCase();
        const hasActiveCategory = activeCategory !== "all";
        const hasSeasonFilter = seasonFilter !== "all";
        const hasSearchQuery = query !== "";
        const hasRegionFilter = region !== "all";

        if (!hasActiveCategory && !hasSeasonFilter && !hasSearchQuery && !hasRegionFilter) {
            return sampleProducts;
        }

        return sampleProducts.filter(product => {
            if (hasActiveCategory && product.category !== activeCategory) return false;
            if (hasSeasonFilter && product.season !== seasonFilter) return false;

            if (hasSearchQuery || hasRegionFilter) {
                const productName = t(`products.catalog.items.${product.key}.name`).toLowerCase();
                const productOrigin = t(`products.catalog.items.${product.key}.origin`).toLowerCase();

                if (hasSearchQuery && !(productName.includes(query) || productOrigin.includes(query))) return false;
                if (hasRegionFilter && !productOrigin.includes(region)) return false;
            }

            return true;
        });
    }, [activeCategory, deferredSearchQuery, regionFilter, seasonFilter, t]);

    return (
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

                            {/* Categories Panel - Memoized to prevent re-renders */}
                            <CategorySidebar
                                categories={categories}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                t={t}
                            />

                            {/* Quick Filters */}
                            <div className="glass-panel p-6 rounded-3xl border border-black/5 bg-white shadow-sm">
                                <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
                                    {t('products.filters.quick_filters_title')}
                                </h3>
                                <div className="space-y-4">
                                    <Select dir={isRTL ? "rtl" : "ltr"} value={regionFilter} onValueChange={setRegionFilter}>
                                        <SelectTrigger className="w-full rounded-xl border-black/5 bg-muted/30 hover:bg-muted/50 transition-colors font-medium">
                                            <SelectValue placeholder={t('products.filters.region.label')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">{t('products.filters.region.all')}</SelectItem>
                                            <SelectItem value="egypt">{t('products.filters.region.egypt')}</SelectItem>
                                            <SelectItem value="uae">{t('products.filters.region.uae')}</SelectItem>
                                            <SelectItem value="imported">{t('products.filters.region.imported') || "Imported"}</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                        <div className="min-h-[600px]">
                            {filteredProducts.length > 0 ? (
                                <VirtuosoGrid
                                    useWindowScroll
                                    overscan={200}
                                    data={filteredProducts}
                                    components={{
                                        List: React.forwardRef<HTMLDivElement, { children?: React.ReactNode }>(({ children, ...props }, ref) => (
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
                                        )),
                                        Item: ({ children, ...props }) => (
                                            <div {...props}>
                                                {children}
                                            </div>
                                        )
                                    }}
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
                            ) : (
                                <div className="flex flex-col items-center justify-center py-24 text-center">
                                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                                        <Search className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold text-uniteda-emerald-dark mb-2">{t('products.catalog.no_results')}</h3>
                                    <p className="text-muted-foreground">{t('products.catalog.no_results_description')}</p>
                                    <Button
                                        variant="ghost"
                                        className="mt-4 text-uniteda-emerald font-bold"
                                        onClick={() => {
                                            setActiveCategory("all");
                                            setSearchQuery("");
                                            setRegionFilter("all");
                                            setSeasonFilter("all");
                                        }}
                                    >
                                        {t('products.filters.clear_all')}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
