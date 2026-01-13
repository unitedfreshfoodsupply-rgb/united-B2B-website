import { useState } from "react";
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
  { id: "all", name: "All Products", icon: Grid3X3, count: 209 },
  { id: "fruits", name: "Fresh Fruits", icon: Apple, count: 45 },
  { id: "vegetables", name: "Fresh Vegetables", icon: Carrot, count: 62 },
  { id: "herbs", name: "Herbs & Greens", icon: Leaf, count: 28 },
  { id: "microgreens", name: "Microgreens", icon: Sprout, count: 18 },
  { id: "exotic", name: "Exotic Produce", icon: Cherry, count: 34 },
  { id: "specialty", name: "Specialty Items", icon: CircleDot, count: 22 },
];

const sampleProducts = [
  {
    id: "1",
    name: "Roma Tomatoes",
    scientificName: "Solanum lycopersicum",
    category: "vegetables",
    origin: "Egypt",
    availability: "Year-round",
    season: "Peak",
    grades: ["Premium", "Standard"],
    image: "🍅",
  },
  {
    id: "2",
    name: "Valencia Oranges",
    scientificName: "Citrus sinensis",
    category: "fruits",
    origin: "Egypt",
    availability: "Winter",
    season: "Peak",
    grades: ["Export Grade", "Premium", "Standard"],
    image: "🍊",
  },
  {
    id: "3",
    name: "Fresh Basil",
    scientificName: "Ocimum basilicum",
    category: "herbs",
    origin: "Egypt",
    availability: "Year-round",
    season: "Available",
    grades: ["Hydroponics", "Organic"],
    image: "🌿",
  },
  {
    id: "4",
    name: "Strawberries",
    scientificName: "Fragaria × ananassa",
    category: "fruits",
    origin: "Egypt",
    availability: "Spring",
    season: "Starting",
    grades: ["Premium", "Standard"],
    image: "🍓",
  },
  {
    id: "5",
    name: "Baby Spinach",
    scientificName: "Spinacia oleracea",
    category: "microgreens",
    origin: "UAE",
    availability: "Year-round",
    season: "Available",
    grades: ["Baby Leaf", "Microgreen"],
    image: "🥬",
  },
  {
    id: "6",
    name: "Dragon Fruit",
    scientificName: "Selenicereus undatus",
    category: "exotic",
    origin: "Imported",
    availability: "Summer",
    season: "Available",
    grades: ["Premium"],
    image: "🐉",
  },
  {
    id: "7",
    name: "Bell Peppers",
    scientificName: "Capsicum annuum",
    category: "vegetables",
    origin: "Egypt",
    availability: "Year-round",
    season: "Peak",
    grades: ["Premium", "Standard"],
    image: "🫑",
  },
  {
    id: "8",
    name: "Pea Shoots",
    scientificName: "Pisum sativum",
    category: "microgreens",
    origin: "UAE",
    availability: "Year-round",
    season: "Available",
    grades: ["Microgreen"],
    image: "🌱",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
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
              Product Intelligence
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Product Catalog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse our comprehensive catalog of 200+ premium products with complete
              specifications, seasonal availability, and quality grades.
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
                    placeholder="Search products..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="p-4 rounded-2xl bg-card border border-border">
                  <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Categories
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
                          {cat.name}
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
                    Quick Filters
                  </h3>
                  <div className="space-y-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        <SelectItem value="egypt">Egypt</SelectItem>
                        <SelectItem value="uae">UAE</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Seasons</SelectItem>
                        <SelectItem value="peak">Peak Now</SelectItem>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="starting">Starting Soon</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        <SelectItem value="hotel">Hotels</SelectItem>
                        <SelectItem value="restaurant">Restaurants</SelectItem>
                        <SelectItem value="airline">Airlines</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
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
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
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
                          {product.name}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${product.season === "Peak"
                          ? "bg-accent/10 text-accent"
                          : product.season === "Starting"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-muted text-muted-foreground"
                          }`}>
                          {product.season}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground italic mb-3">{product.scientificName}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 rounded bg-muted text-muted-foreground">{product.origin}</span>
                        <span className="px-2 py-1 rounded bg-muted text-muted-foreground">{product.availability}</span>
                      </div>
                      {viewMode === "list" && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.grades.map(grade => (
                            <span key={grade} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                              {grade}
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
