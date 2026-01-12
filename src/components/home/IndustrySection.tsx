import { motion } from "framer-motion";
import { Building2, Plane, ShoppingBag, Utensils, Ship, Store } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Hotels & Resorts",
    description: "Reliable supply for large-scale hospitality operations with consistent quality and custom specifications.",
    features: ["Volume consistency", "Custom grading", "Daily delivery"],
  },
  {
    icon: Utensils,
    name: "Restaurants & Catering",
    description: "Fresh produce meeting culinary standards with flexible ordering and specialty items.",
    features: ["Chef-grade quality", "Specialty items", "Flexible volumes"],
  },
  {
    icon: Plane,
    name: "Airline Catering",
    description: "HACCP-compliant supply for inflight services with strict quality and safety documentation.",
    features: ["HACCP compliance", "Traceability", "Strict protocols"],
  },
  {
    icon: ShoppingBag,
    name: "Supermarkets",
    description: "Retail-ready produce with proper packing, labeling, and merchandising specifications.",
    features: ["Retail packaging", "Shelf optimization", "Category range"],
  },
  {
    icon: Ship,
    name: "Food Distributors",
    description: "Bulk supply partnerships with competitive pricing and logistics coordination.",
    features: ["Bulk volumes", "Competitive rates", "Distribution support"],
  },
  {
    icon: Store,
    name: "Food Processors",
    description: "Raw material supply for processing facilities with consistent quality and specifications.",
    features: ["Processing grades", "Bulk supply", "Quality consistency"],
  },
];

export function IndustrySection() {
  return (
    <section className="section-padding bg-muted/30">
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
            Industry Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand that each industry has unique requirements. 
            Our solutions are designed to meet specific operational needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
