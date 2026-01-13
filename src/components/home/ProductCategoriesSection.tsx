import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Apple, Carrot, Leaf, Sprout, Cherry, CircleDot, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    description: "Premium citrus, berries, and stone fruits with verified Brix levels.",
    icon: Apple,
    count: 45,
    size: "large",
    color: "bg-orange-500/10 text-orange-600",
    image: "https://images.unsplash.com/photo-1619566639858-5a8b1b6031b6?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    description: "Root varieties and seasonal greens with cold-chain tracking.",
    icon: Carrot,
    count: 62,
    size: "small",
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: "herbs",
    name: "Herbs & Greens",
    description: "Aromatic culinary essentials.",
    icon: Leaf,
    count: 28,
    size: "small",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "microgreens",
    name: "Microgreens",
    description: "Nutrient-dense baby veg for premium plating and high-end gastronomy.",
    icon: Sprout,
    count: 18,
    size: "medium",
    color: "bg-lime-500/10 text-lime-600",
    image: "https://images.unsplash.com/photo-1594921935665-63529bfa5be2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "exotic",
    name: "Exotic & Specialty",
    description: "Rare imports and unique mushrooms.",
    icon: Cherry,
    count: 34,
    size: "small",
    color: "bg-rose-500/10 text-rose-600",
  },
];

export function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-[#fff]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-uniteda-emerald/5 text-uniteda-emerald text-[10px] font-black uppercase tracking-widest mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-uniteda-emerald animate-pulse" />
              Inventory Logic
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-uniteda-emerald-dark tracking-tighter">
              Product Intelligence <br />
              <span className="text-uniteda-gold">Portfolio</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground font-medium max-w-sm"
          >
            Every product category is treated as a technical supply asset with deep metadata and regional availability logic.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 gap-4 auto-rows-[240px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative rounded-[2rem] overflow-hidden glass-panel border border-black/5 hover:shadow-2xl hover:shadow-uniteda-emerald/10 transition-all duration-500",
                cat.size === "large" ? "md:col-span-2 lg:col-span-3 md:row-span-2" : "",
                cat.size === "medium" ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "",
                cat.size === "small" ? "md:col-span-1 lg:col-span-1" : ""
              )}
            >
              <Link to={`/products?category=${cat.id}`} className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm transition-transform duration-500 group-hover:rotate-12", cat.color)}>
                    <cat.icon size={24} />
                  </div>
                  <div className="px-3 py-1 bg-black/5 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    {cat.count} Units
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tighter text-uniteda-emerald-dark group-hover:text-uniteda-emerald transition-colors">
                    {cat.name}
                  </h3>
                  {cat.size !== "small" && (
                    <p className="text-sm font-medium text-muted-foreground leading-snug max-w-[200px]">
                      {cat.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-uniteda-gold text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Access Specs <ArrowRight size={14} />
                  </div>
                </div>
              </Link>

              {cat.image && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" />
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Inquiry Hub Bento Tile */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 bg-uniteda-emerald rounded-[2rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-uniteda-emerald/20"
            whileHover={{ scale: 0.98 }}
          >
            <div>
              <Info className="w-10 h-10 mb-4 text-uniteda-gold" />
              <h3 className="text-3xl font-black tracking-tighter">Business Inquiry Hub</h3>
              <p className="text-white/70 font-medium mt-2">Generate structured RFQs for regional logistics hubs.</p>
            </div>
            <Button className="w-full rounded-2xl bg-white text-uniteda-emerald font-black py-6 mt-4 hover:bg-uniteda-gold hover:text-white transition-colors">
              <Link to="/rfq">Open inquiry engine</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
