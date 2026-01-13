import { motion } from "framer-motion";
import { Building2, Plane, ShoppingBag, Utensils, Ship, Store, CheckCircle2 } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Hospitality & Resorts",
    description: "Multi-tier supply for enterprise-scale hotel chains with 24/7 reliability.",
    features: ["Scale Consistency", "Custom Grading", "Global Standards"],
  },
  {
    icon: Utensils,
    name: "Fine Dining & Catering",
    description: "Chef-grade boutique produce for high-end culinary requirements.",
    features: ["Specialty Varities", "Brix Verified", "Small Batch Logic"],
  },
  {
    icon: Plane,
    name: "Aviation Logistics",
    description: "Hyper-compliant supply for inflight services with strict traceability.",
    features: ["HACCP Core", "Logistics Precision", "ISO Certified"],
  },
  {
    icon: ShoppingBag,
    name: "Modern Retail",
    description: "Shelf-ready produce with optimized packaging for premium supermarkets.",
    features: ["B2B Integration", "Shelf-Life Data", "Retail Packaging"],
  },
  {
    icon: Ship,
    name: "Logistics Partners",
    description: "Bulk supply orchestration for regional food distribution hubs.",
    features: ["Bulk Logic", "Port-to-Hub Flow", "Unified Billing"],
  },
  {
    icon: Store,
    name: "Enterprise Processing",
    description: "Industrial-grade raw material supply for secondary food processing.",
    features: ["High-Volume Flow", "Technical Grading", "Supply Locks"],
  },
];

export function IndustrySection() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-uniteda-emerald/5 text-uniteda-emerald text-[10px] font-black uppercase tracking-[0.2em] border border-uniteda-emerald/10"
          >
            Vertical Market Intelligence
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-uniteda-emerald-dark tracking-tighter leading-none">
            Tailored Industry <br />
            <span className="text-uniteda-gold">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl">
            We operate across six specialized sectors, delivering data-driven supply logic tailored to the unique technical requirements of each vertical.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-[#fff] border border-black/5 hover:border-uniteda-emerald/10 hover:shadow-2xl hover:shadow-uniteda-emerald/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center mb-8 group-hover:bg-uniteda-emerald group-hover:text-white transition-all duration-500">
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-uniteda-emerald-dark tracking-tight mb-4">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-8">
                {industry.description}
              </p>

              <div className="space-y-3 border-t border-black/5 pt-8">
                {industry.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-uniteda-gold" />
                    <span className="text-[11px] font-black text-uniteda-emerald-dark uppercase tracking-widest leading-none">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
