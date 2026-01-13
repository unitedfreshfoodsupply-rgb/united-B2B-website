import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Info, Grid3x3, Table2, Download, Calendar } from "lucide-react";
import { ProductCard } from "@/components/seasonal/ProductCard";
import { InSeasonNow } from "@/components/seasonal/InSeasonNow";
import { ProductDetailModal } from "@/components/seasonal/ProductDetailModal";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const seasonalProducts = [
  {
    name: "Strawberries",
    category: "Fruits",
    egypt: [0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
    uae: [1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1],
  },
  {
    name: "Mangoes",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0],
    uae: [0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0],
  },
  {
    name: "Valencia Oranges",
    category: "Fruits",
    egypt: [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
    uae: [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 2],
  },
  {
    name: "Pomegranates",
    category: "Fruits",
    egypt: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0],
    uae: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1],
  },
  {
    name: "Tomatoes",
    category: "Vegetables",
    egypt: [2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
  {
    name: "Bell Peppers",
    category: "Vegetables",
    egypt: [2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
  {
    name: "Asparagus",
    category: "Vegetables",
    egypt: [0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    uae: [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Fresh Basil",
    category: "Herbs",
    egypt: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    uae: [2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  },
];

const currentMonth = new Date().getMonth();

const getAvailabilityColor = (value: number) => {
  if (value === 2) return "bg-accent";
  if (value === 1) return "bg-accent/40";
  return "bg-muted";
};

const getAvailabilityLabel = (value: number) => {
  if (value === 2) return "Peak";
  if (value === 1) return "Available";
  return "Off-season";
};

const seasons = [
  { name: "Spring", icon: Leaf, months: "Mar - May", color: "text-green-500" },
  { name: "Summer", icon: Sun, months: "Jun - Aug", color: "text-amber-500" },
  { name: "Autumn", icon: Droplets, months: "Sep - Nov", color: "text-orange-500" },
  { name: "Winter", icon: Snowflake, months: "Dec - Feb", color: "text-blue-500" },
];

type ViewMode = "grid" | "table";
type Region = "egypt" | "uae" | "both";

export default function SeasonalPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedRegion, setSelectedRegion] = useState<Region>("both");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof seasonalProducts[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  const categories = ["Fruits", "Vegetables", "Herbs"];

  return (
    <Layout>
      {/* Header */}
      <section className="relative pt-16 pb-12 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge with current month */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                  <Calendar size={14} />
                  Seasonal Intelligence
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {months[currentMonth]} {new Date().getFullYear()}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
                Seasonal Availability
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                  Calendar
                </span>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6">
                Plan your supply needs with our real-time seasonal availability data.
                Know what's in peak, what's available, and plan ahead for optimal sourcing.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">{seasonalProducts.filter(p => p.egypt[currentMonth] === 2 || p.uae[currentMonth] === 2).length}</span> products at peak
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">2</span> regions tracked
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">
                    <span className="font-bold text-foreground">12</span> months coverage
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:min-w-[280px]"
            >
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Download size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Export Data</h3>
                    <p className="text-xs text-muted-foreground">Download calendar</p>
                  </div>
                </div>
                <Button className="w-full rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20">
                  <Download size={16} className="mr-2" />
                  Export Calendar
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  CSV & PDF formats available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 border-b border-border bg-background sticky top-0 z-10">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Region Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-muted">
              <button
                onClick={() => setSelectedRegion("egypt")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "egypt"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                🇪🇬 Egypt
              </button>
              <button
                onClick={() => setSelectedRegion("uae")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "uae"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                🇦🇪 UAE
              </button>
              <button
                onClick={() => setSelectedRegion("both")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === "both"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Both
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-muted">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                title="Grid View"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-all ${viewMode === "table"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                title="Table View"
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
            products={filteredProducts}
            region={selectedRegion}
            currentMonth={currentMonth}
          />

          {/* Grid View */}
          {viewMode === "grid" && (
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                All Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.name}
                    product={product}
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
            <div className="space-y-12">
              {/* Legend */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent" />
                  <span className="text-sm text-muted-foreground">Peak Season</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent/40" />
                  <span className="text-sm text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-muted" />
                  <span className="text-sm text-muted-foreground">Off-season</span>
                </div>
              </div>

              {/* Egypt Table */}
              {(selectedRegion === "egypt" || selectedRegion === "both") && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span>🇪🇬</span> Egypt Availability
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                          <th className="text-left py-3 px-2 text-muted-foreground text-sm">Category</th>
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
                          <tr key={product.name} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-3 px-4 font-medium text-foreground">{product.name}</td>
                            <td className="py-3 px-2 text-sm text-muted-foreground">{product.category}</td>
                            {product.egypt.map((value, i) => (
                              <td key={i} className="py-3 px-2 text-center">
                                <div
                                  className={`w-8 h-8 mx-auto rounded-lg ${getAvailabilityColor(value)} ${i === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}`}
                                  title={getAvailabilityLabel(value)}
                                />
                              </td>
                            ))}
                          </tr>
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
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span>🇦🇪</span> UAE Availability
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                          <th className="text-left py-3 px-2 text-muted-foreground text-sm">Category</th>
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
                          <tr key={product.name} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-3 px-4 font-medium text-foreground">{product.name}</td>
                            <td className="py-3 px-2 text-sm text-muted-foreground">{product.category}</td>
                            {product.uae.map((value, i) => (
                              <td key={i} className="py-3 px-2 text-center">
                                <div
                                  className={`w-8 h-8 mx-auto rounded-lg ${getAvailabilityColor(value)} ${i === currentMonth ? "ring-2 ring-accent ring-offset-2" : ""}`}
                                  title={getAvailabilityLabel(value)}
                                />
                              </td>
                            ))}
                          </tr>
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
            className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10"
          >
            <div className="flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Planning Your Supply</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seasonal availability may vary based on weather conditions and farm yields.
                  For off-season items, we can source through our import network.
                  Contact our sales team for custom supply programs and volume commitments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Need Custom Supply Programs?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We can design year-round supply programs with import alternatives
              for off-season periods.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/rfq">
                Request Quote
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
