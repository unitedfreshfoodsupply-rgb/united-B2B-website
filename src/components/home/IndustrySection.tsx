import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Building2, Plane, ShoppingBag, Utensils, Ship, Store, CheckCircle2 } from "lucide-react";

const industriesData = [
  {
    id: "hospitality",
    icon: Building2,
    features: ["scale", "grading", "standards"],
  },
  {
    id: "dining",
    icon: Utensils,
    features: ["specialty", "brix", "batch"],
  },
  {
    id: "aviation",
    icon: Plane,
    features: ["haccp", "logistics", "iso"],
  },
  {
    id: "retail",
    icon: ShoppingBag,
    features: ["b2b", "shelf_life", "packaging"],
  },
  {
    id: "partners",
    icon: Ship,
    features: ["bulk", "flow", "billing"],
  },
  {
    id: "processing",
    icon: Store,
    features: ["volume", "technical", "locks"],
  },
];

export function IndustrySection() {
  const { t } = useTranslation('home');
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
            {t('industry.label')}
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-uniteda-emerald-dark tracking-tighter leading-none">
            {t('industry.title_prefix')} <br />
            <span className="text-uniteda-gold">{t('industry.title_highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg font-medium max-w-xl">
            {t('industry.description')}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesData.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-[#fff] border border-black/5 hover:border-uniteda-emerald/10 hover:shadow-2xl hover:shadow-uniteda-emerald/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/5 flex items-center justify-center mb-8 group-hover:bg-uniteda-emerald group-hover:text-white transition-all duration-500">
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-uniteda-emerald-dark tracking-tight mb-4">
                {t(`industry.sectors.${industry.id}.name`)}
              </h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-8">
                {t(`industry.sectors.${industry.id}.description`)}
              </p>

              <div className="space-y-3 border-t border-black/5 pt-8">
                {industry.features.map((featureKey) => (
                  <div key={featureKey} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-uniteda-gold" />
                    <span className="text-[11px] font-black text-uniteda-emerald-dark uppercase tracking-widest leading-none">
                      {t(`industry.sectors.${industry.id}.features.${featureKey}`)}
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
