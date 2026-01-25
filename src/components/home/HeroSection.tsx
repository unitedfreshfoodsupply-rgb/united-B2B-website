import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Plane, ShoppingBag, Utensils, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Building2, label: "Hotels" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Plane, label: "Airlines" },
  { icon: ShoppingBag, label: "Retail" },
];

export function HeroSection() {
  const { t } = useUnifiedTranslation();
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#fafafa]">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-4"
            >
              <Zap size={14} className="animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">{t('hero.label')}</span>
            </motion.div>

            <motion.h1
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-uniteda-emerald-dark leading-[0.95] tracking-tighter"
            >
              {t('hero.title_prefix')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                {t('hero.title_highlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg font-bold shadow-2xl shadow-uniteda-emerald/20 transition-all hover:scale-105">
                <Link to="/rfq" className="flex items-center gap-2">
                  {t('hero.cta_primary')}
                  <ArrowRight size={20} className="rtl:rotate-180" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-2 border-uniteda-emerald/20 text-uniteda-emerald hover:bg-uniteda-emerald/5 px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-8 text-sm sm:text-base lg:text-lg font-bold transition-all">
                <Link to="/products">{t('hero.cta_secondary')}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6"
            >
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-muted flex items-center justify-center text-xs font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-uniteda-emerald-dark/60 uppercase tracking-widest text-start">
                <Trans t={t} i18nKey="hero.social_proof" components={{ br: <br /> }} />
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Bento */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 1, scale: 0.95, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0 }}
                className="col-span-2 h-[200px] sm:h-[250px] lg:h-[300px] rounded-[2rem] sm:rounded-[2.5rem] bg-uniteda-emerald overflow-hidden relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Produce"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                    <Shield className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{t('hero.bento.certified.title')}</h3>
                  <p className="text-white/80 font-medium">{t('hero.bento.certified.subtitle')}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-[160px] sm:h-[180px] lg:h-[200px] rounded-[1.5rem] sm:rounded-[2rem] glass-panel p-6 sm:p-8 flex flex-col justify-center gap-2"
              >
                <div className="text-4xl font-black text-uniteda-emerald tracking-tighter">{t('hero.bento.latency.value')}</div>
                <p className="text-sm font-bold text-uniteda-emerald-dark/60 uppercase tracking-widest">{t('hero.bento.latency.label')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-[160px] sm:h-[180px] lg:h-[200px] rounded-[1.5rem] sm:rounded-[2rem] bg-uniteda-gold p-6 sm:p-8 flex flex-col justify-center gap-2 text-white shadow-xl shadow-uniteda-gold/20"
              >
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold tracking-tight">{t('hero.bento.logic.title')}</div>
                <p className="text-white/80 text-sm font-medium">{t('hero.bento.logic.subtitle')}</p>
              </motion.div>
            </div>

            {/* Floating Status Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 rtl:right-auto rtl:-left-6 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/40 max-w-[200px] sm:max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-uniteda-emerald-dark/40">{t('hero.bento.status.label')}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-uniteda-emerald-dark">
                {t('hero.bento.status.cairo')}: <span className="text-uniteda-emerald font-black">{t('hero.bento.status.active')}</span>
              </p>
              <p className="text-sm font-bold text-uniteda-emerald-dark">
                {t('hero.bento.status.dubai')}: <span className="text-uniteda-emerald font-black">{t('hero.bento.status.active')}</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
}
