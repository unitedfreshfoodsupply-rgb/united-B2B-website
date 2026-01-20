import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Droplets, Snowflake, Leaf, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const seasons = [
  {
    id: "spring",
    icon: Leaf,
    color: "bg-emerald-500",
    products: ["strawberries", "asparagus", "microgreens", "peas"],
  },
  {
    id: "summer",
    icon: Sun,
    color: "bg-amber-500",
    products: ["mangoes", "watermelon", "tomatoes", "peppers"],
  },
  {
    id: "autumn",
    icon: Droplets,
    color: "bg-orange-600",
    products: ["pomegranates", "figs", "squash", "apples"],
  },
  {
    id: "winter",
    icon: Snowflake,
    color: "bg-blue-400",
    products: ["citrus", "dates", "cabbage", "roots"],
  },
];

const currentMonth = new Date().getMonth();
const getCurrentSeason = () => {
  if (currentMonth >= 2 && currentMonth <= 4) return "spring";
  if (currentMonth >= 5 && currentMonth <= 7) return "summer";
  if (currentMonth >= 8 && currentMonth <= 10) return "autumn";
  return "winter";
};

export function SeasonalSection() {
  const { t } = useTranslation('home');
  const currentSeason = getCurrentSeason();

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6 border border-accent/20">
              <Calendar size={12} />
              {t('seasonal.label')}
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              {t('seasonal.title')} <br />
              <span className="text-accent">{t('seasonal.calendar')}</span>
            </h2>

            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10 max-w-lg font-medium">
              {t('seasonal.description')}
            </p>

            {/* Season Selectors */}
            <div className="space-y-3">
              {seasons.map((season) => (
                <motion.div
                  key={season.id}
                  whileHover={{ x: 10 }}
                  className={`group flex items-center justify-between p-5 rounded-3xl border transition-all duration-500 cursor-pointer ${season.id === currentSeason
                    ? "bg-primary/80 border-primary-foreground/20 shadow-2xl shadow-primary/40"
                    : "bg-primary-foreground/5 border-transparent hover:border-primary-foreground/10"
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl ${season.color} flex items-center justify-center shadow-lg`}>
                      <season.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg tracking-tight">{t(`seasonal.seasons.${season.id}`)}</p>
                      <p className="text-sm font-medium text-primary-foreground/40">{t(`seasonal.months.${season.id}`, { defaultValue: '' })}</p>
                    </div>
                  </div>
                  {season.id === currentSeason ? (
                    <div className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                      {t('seasonal.in_season_now')}
                    </div>
                  ) : (
                    <ArrowRight className="text-primary-foreground/20 group-hover:text-primary-foreground transition-colors rtl:rotate-180" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Harvest Intelligence Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card/10 backdrop-blur-md border border-primary-foreground/10 p-12 rounded-[3.5rem] relative overflow-hidden group">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 rtl:mr-0 rtl:-ml-32 -mt-32 transition-colors group-hover:bg-accent/20" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">{t('seasonal.highlights')}</span>
                    <h3 className="text-4xl font-black tracking-tight mt-2 italic">
                      {t('seasonal.peak', { season: t(`seasonal.seasons.${currentSeason}`) })}
                    </h3>
                  </div>
                  <div className="w-20 h-20 rounded-[2rem] bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/10 group-hover:rotate-12 transition-transform duration-700">
                    <Info className="text-accent w-8 h-8" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {seasons.find(s => s.id === currentSeason)?.products.map((productId, i) => (
                    <motion.div
                      key={productId}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-6 rounded-[2rem] bg-primary-foreground/5 border border-primary-foreground/5 hover:bg-primary-foreground/10 transition-all cursor-pointer group/item"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-lg tracking-tight">{t(`seasonal.products.${productId}`)}</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      </div>
                      <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">{t('seasonal.available_premium')}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-[2.5rem] bg-primary/50 border border-primary-foreground/5 flex items-center justify-between">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/40">{t('seasonal.regions_label')}</p>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10 font-medium text-xs uppercase">
                        <span>🇪🇬</span> {t('seasonal.regions.cairo')}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10 font-medium text-xs uppercase">
                        <span>🇦🇪</span> {t('seasonal.regions.dubai')}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-accent hover:text-primary-foreground transition-colors group/btn">
                    <Link to="/seasonal" className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                      {t('seasonal.view_calendar')}
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform rtl:rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
