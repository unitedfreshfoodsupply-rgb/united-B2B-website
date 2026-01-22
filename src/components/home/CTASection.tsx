import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, Rocket, BarChart3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const { t } = useTranslation('home');
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-uniteda-emerald-dark relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-[800px] h-[800px] bg-uniteda-emerald/20 rounded-full blur-[120px] -mr-96 rtl:mr-0 rtl:-ml-96 -mt-96" />
      <div className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-[600px] h-[600px] bg-uniteda-gold/10 rounded-full blur-[100px] -ml-48 rtl:ml-0 rtl:-mr-48 -mb-48" />

      <div className="container-wide relative z-10">
        <div className="glass-panel border-white/10 p-8 sm:p-12 lg:p-16 xl:p-24 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[4rem] bg-white/5 backdrop-blur-3xl overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-uniteda-gold text-uniteda-emerald-dark text-[10px] font-black uppercase tracking-[0.3em]">
                {t('cta.partner_label')}
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                {t('cta.title_prefix')} <br />
                <span className="text-uniteda-gold">{t('cta.title_highlight')}</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                {t('cta.description')}
              </p>
            </motion.div>

            {/* Quick Stats/Features Bento for CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/10">
              {[
                { icon: Globe2, id: 'sync' },
                { icon: BarChart3, id: 'rfq' },
                { icon: ShieldCheck, id: 'audit' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-uniteda-gold">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-white font-black tracking-tight">{t(`cta.features.${item.id}.label`)}</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{t(`cta.features.${item.id}.sub`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-8 sm:pt-12"
            >
              <Button size="xl" className="rounded-full bg-uniteda-gold hover:bg-uniteda-gold/80 text-uniteda-emerald-dark px-8 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-black shadow-2xl shadow-uniteda-gold/20 transition-all hover:scale-105">
                <Link to="/rfq" className="flex items-center gap-3">
                  {t('cta.primary_btn')}
                  <Rocket size={24} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-2 border-white/20 text-white hover:bg-white/5 px-8 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-black transition-all">
                <Link to="/contact">{t('cta.secondary_btn')}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
