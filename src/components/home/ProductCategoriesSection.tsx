import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Apple, Carrot, Leaf, Sprout, Cherry, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "fruits",
    icon: Apple,
    count: 45,
    size: "large",
    color: "bg-orange-500/10 text-orange-600",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "vegetables",
    icon: Carrot,
    count: 62,
    size: "small",
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: "herbs",
    icon: Leaf,
    count: 28,
    size: "small",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "microgreens",
    icon: Sprout,
    count: 18,
    size: "medium",
    color: "bg-lime-500/10 text-lime-600",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "exotic",
    icon: Cherry,
    count: 34,
    size: "small",
    color: "bg-rose-500/10 text-rose-600",
  },
];

export function ProductCategoriesSection() {
  const { t } = useTranslation('home');
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t('product_catalog')}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.1]">
              {t('product_intelligence')}
              <br />
              <span className="text-accent">{t('portfolio')}</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base lg:text-lg text-muted-foreground font-medium max-w-md leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-card border-2 border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer",
                "min-h-[280px]",
                cat.size === "large" && "sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[280px] lg:min-h-[580px]",
                cat.size === "medium" && "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-[580px]",
                cat.size === "small" && "sm:col-span-1 lg:col-span-1 min-h-[280px]"
              )}
            >
              <Link
                to={`/products?category=${cat.id}`}
                className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between z-10 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start gap-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-12",
                    cat.color
                  )}>
                    <cat.icon size={28} strokeWidth={2.5} />
                  </div>
                  <div className="px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground border border-border shadow-sm">
                    {cat.count} {t('items')}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {t(`categories.${cat.id}.name`)}
                  </h3>
                  {(cat.size === "large" || cat.size === "medium") && (
                    <p className="text-sm lg:text-base font-medium text-muted-foreground leading-relaxed max-w-sm">
                      {t(`categories.${cat.id}.description`)}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {t('explore_category')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                  </div>
                </div>
              </Link>

              {/* Background Image */}
              {cat.image && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10" />
                  <img
                    src={cat.image}
                    alt={t(`categories.${cat.id}.name`)}
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
              )}
            </motion.div>
          ))}

          {/* Inquiry Hub Bento Tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 0.98 }}
            className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-primary-foreground shadow-2xl shadow-primary/30 min-h-[280px] border-2 border-primary/20"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Info className="w-7 h-7 text-accent" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-3">
                  {t('inquiry.title')}
                </h3>
                <p className="text-primary-foreground/80 font-medium text-sm lg:text-base leading-relaxed">
                  {t('inquiry.description')}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="w-full rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 mt-6 shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
            >
              <Link to="/rfq" className="flex items-center justify-center gap-2">
                {t('inquiry.cta')}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
