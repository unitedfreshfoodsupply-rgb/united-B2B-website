import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Apple, Carrot, Leaf, Sprout, Cherry, CircleDot } from "lucide-react";

const categories = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    description: "Premium citrus, berries, tropical fruits, and stone fruits sourced from certified farms.",
    icon: Apple,
    count: 45,
    color: "bg-orange-500/10 text-orange-600",
    image: "🍎",
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    description: "Farm-fresh vegetables including leafy greens, root vegetables, and seasonal varieties.",
    icon: Carrot,
    count: 62,
    color: "bg-green-500/10 text-green-600",
    image: "🥕",
  },
  {
    id: "herbs",
    name: "Herbs & Greens",
    description: "Aromatic herbs, salad mixes, and specialty greens for culinary excellence.",
    icon: Leaf,
    count: 28,
    color: "bg-emerald-500/10 text-emerald-600",
    image: "🌿",
  },
  {
    id: "microgreens",
    name: "Microgreens",
    description: "Nutrient-dense microgreens and baby vegetables for premium presentations.",
    icon: Sprout,
    count: 18,
    color: "bg-lime-500/10 text-lime-600",
    image: "🌱",
  },
  {
    id: "exotic",
    name: "Exotic Produce",
    description: "Imported specialty items, rare varieties, and unique produce for distinctive menus.",
    icon: Cherry,
    count: 34,
    color: "bg-rose-500/10 text-rose-600",
    image: "🫐",
  },
  {
    id: "specialty",
    name: "Specialty Items",
    description: "Mushrooms, edible flowers, and artisanal produce for gourmet applications.",
    icon: CircleDot,
    count: 22,
    color: "bg-amber-500/10 text-amber-600",
    image: "🍄",
  },
];

export function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Product Intelligence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Supply Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 200+ curated products across six professional categories, 
            each with complete traceability and quality documentation.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products?category=${category.id}`}
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center text-2xl`}>
                    {category.image}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {category.count} items
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Browse Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
