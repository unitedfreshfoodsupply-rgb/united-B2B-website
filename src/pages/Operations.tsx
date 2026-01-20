import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Factory,
  Truck,
  Thermometer,
  Package,
  Shield,
  CheckCircle2,
  Users,
  Leaf,
  Award
} from "lucide-react";
import microgreens from "@/assets/microgreens.jpg";


export default function OperationsPage() {
  const { t } = useTranslation('pages');

  const certifications = [
    { name: t('operations.certifications.haccp.name'), description: t('operations.certifications.haccp.description') },
    { name: t('operations.certifications.iso.name'), description: t('operations.certifications.iso.description') },
    { name: t('operations.certifications.globalgap.name'), description: t('operations.certifications.globalgap.description') },
  ];

  const stats = [
    { value: t('operations.stats.facility.value'), label: t('operations.stats.facility.label') },
    { value: t('operations.stats.delivery.value'), label: t('operations.stats.delivery.label') },
    { value: t('operations.stats.varieties.value'), label: t('operations.stats.varieties.label') },
    { value: t('operations.stats.monitoring.value'), label: t('operations.stats.monitoring.label') },
  ];

  return (
    <Layout>
      {/* Phase 1: System Awakening (Hero) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafafa]">
        {/* Background Systems */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* System Status Indicators */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-uniteda-emerald animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">{t('operations.hero.status')}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-uniteda-emerald-dark leading-[0.95] tracking-tighter mb-8"
            >
              {t('operations.hero.title_prefix')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                {t('operations.hero.title_highlight')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mb-12"
            >
              {t('operations.hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-10 py-8 text-lg font-bold shadow-2xl shadow-uniteda-emerald/20 transition-all hover:scale-105">
                <Link to="/rfq" className="flex items-center gap-2">
                  {t('operations.hero.cta')}
                  <ArrowRight size={20} className="rtl:rotate-180" />
                </Link>
              </Button>
            </motion.div>

            {/* Floating Stats - Glass Panels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                  className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center gap-2 border border-white/40 bg-white/40"
                >
                  <span className="text-3xl lg:text-4xl font-black text-uniteda-emerald-dark tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remove Phase 1.5 as it's merged into Hero now for cleaner look */}

      {/* Phase 2: System Anatomy (Subsystems) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid background for Phase 2 */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <div className="text-xs font-bold text-uniteda-emerald uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-uniteda-emerald" />
              {t('operations.anatomy.label')}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-uniteda-emerald-dark tracking-tighter mb-6">
              {t('operations.anatomy.title_prefix')} <span className="text-uniteda-emerald-dark/30 font-display">{t('operations.anatomy.title_highlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              {t('operations.anatomy.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Subsystem 01: Procurement & Backbone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-[#f8f8f8] border border-black/5 group hover:shadow-2xl hover:bg-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald group-hover:scale-110 transition-all duration-500">
                  <Leaf className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-muted-foreground/40">{t('operations.anatomy.layer1.id')}</div>
              </div>
              <h3 className="text-2xl font-black text-uniteda-emerald-dark mb-4">{t('operations.anatomy.layer1.title')}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium">
                {t('operations.anatomy.layer1.description')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(t('operations.anatomy.layer1.tags', { returnObjects: true }) as string[]).map(item => (
                  <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-black/5 text-xs font-bold text-uniteda-emerald-dark/60 uppercase tracking-wider shadow-sm">
                    <div className="w-1.5 h-1.5 bg-uniteda-emerald rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subsystem 02: Thermal Integrity (Dark Card for Contrast) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[2.5rem] bg-uniteda-emerald-dark text-white group shadow-2xl shadow-uniteda-emerald-dark/20"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-uniteda-emerald-dark transition-all duration-500">
                  <Thermometer className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-white/20">{t('operations.anatomy.layer2.id')}</div>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{t('operations.anatomy.layer2.title')}</h3>
              <p className="text-white/60 mb-8 text-sm leading-relaxed font-medium">
                {t('operations.anatomy.layer2.description')}
              </p>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-uniteda-gold"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-uniteda-gold">
                  <span>{t('operations.anatomy.layer2.monitoring')}</span>
                  <span>{t('operations.anatomy.layer2.flow')}</span>
                </div>
              </div>
            </motion.div>

            {/* Subsystem 03: Precision Processing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-[#f8f8f8] border border-black/5 group hover:shadow-2xl hover:bg-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald group-hover:scale-110 transition-all duration-500">
                  <Factory className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-muted-foreground/40">{t('operations.anatomy.layer3.id')}</div>
              </div>
              <h3 className="text-2xl font-black text-uniteda-emerald-dark mb-4">{t('operations.anatomy.layer3.title')}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium">
                {t('operations.anatomy.layer3.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                {(t('operations.anatomy.layer3.tags', { returnObjects: true }) as string[]).map(item => (
                  <span key={item} className="px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-[10px] font-bold text-uniteda-emerald tracking-wide uppercase">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Subsystem 04: Intelligent Logistics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-[2.5rem] bg-[#f8f8f8] border border-black/5 group hover:shadow-2xl hover:bg-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald group-hover:scale-110 transition-all duration-500">
                  <Truck className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-muted-foreground/40">{t('operations.anatomy.layer4.id')}</div>
              </div>
              <h3 className="text-2xl font-black text-uniteda-emerald-dark mb-4">{t('operations.anatomy.layer4.title')}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium">
                {t('operations.anatomy.layer4.description')}
              </p>
              <div className="flex items-center gap-4 text-uniteda-emerald/40">
                <div className="flex-1 h-[1px] bg-current" />
                <ArrowRight className="w-4 h-4 text-uniteda-emerald animate-pulse rtl:rotate-180" />
                <div className="flex-1 h-[1px] bg-current" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 3: Proof & Authority (Compliance Infrastructure) */}
      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-bold text-uniteda-emerald uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-uniteda-emerald" />
                {t('operations.compliance.label')}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-uniteda-emerald-dark tracking-tighter mb-8 leading-tight">
                {t('operations.compliance.title_prefix')} <span className="text-uniteda-emerald-dark/40">{t('operations.compliance.title_highlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-medium">
                {t('operations.compliance.description')}
              </p>
              <div className="grid gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-[2rem] bg-white border border-black/5 shadow-lg group hover:border-uniteda-emerald/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald group-hover:bg-uniteda-emerald group-hover:text-white transition-all duration-300">
                        <Award className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold text-uniteda-emerald uppercase tracking-widest">{t('operations.compliance.verified')}</span>
                          <span className="h-px w-8 bg-black/5" />
                        </div>
                        <h4 className="text-xl font-black text-uniteda-emerald-dark">{cert.name}</h4>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Architectural Visual Container */}
              <div className="rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl relative aspect-[4/5] bg-white">
                <img
                  src={microgreens}
                  alt="Quality produce"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark/90 via-transparent to-transparent" />

                {/* HUD Overlay on Image */}
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-panel bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <div className="text-xs font-bold text-uniteda-emerald mb-2 uppercase tracking-widest">{t('operations.compliance.hud.subject')}</div>
                  <div className="text-white text-sm font-medium leading-relaxed">
                    {t('operations.compliance.hud.text')}
                  </div>
                </div>
              </div>

              {/* Floating Deco */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-uniteda-emerald/10 rounded-full blur-3xl animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 4: Strategic Partnership Layer */}
      <section className="py-24 bg-uniteda-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-uniteda-emerald/30 to-transparent" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-xs font-bold text-uniteda-emerald mb-6 tracking-[0.5em] uppercase">{t('operations.partnerships.label')}</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              {t('operations.partnerships.title_prefix')} <span className="text-uniteda-emerald underline decoration-white/10 underline-offset-[12px]">{t('operations.partnerships.title_highlight')}</span>
            </h2>
            <p className="text-white/60 text-xl font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
              {t('operations.partnerships.description')}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-white hover:text-uniteda-emerald-dark hover:shadow-white/10 px-12 h-16 text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300" asChild>
                <Link to="/rfq">
                  {t('operations.partnerships.cta_primary')}
                  <ArrowRight className="w-6 h-6 ms-3 rtl:rotate-180" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-2 border-white/10 text-white hover:bg-white/5 px-12 h-16 text-lg font-bold transition-all" asChild>
                <Link to="/contact">{t('operations.partnerships.cta_secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Technical Footer Deco */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between text-[10px] font-bold text-white/10 uppercase tracking-widest pointer-events-none">
          <span>{t('operations.partnerships.footer.system')}</span>
          <span>{t('operations.partnerships.footer.access')}</span>
        </div>
      </section>
    </Layout>
  );
}
