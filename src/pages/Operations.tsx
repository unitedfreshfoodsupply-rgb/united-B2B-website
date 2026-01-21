import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Truck,
  Thermometer,
  ShieldCheck,
  Leaf,
  Award,
  Globe2,
  Ship,
  Warehouse,
  Sprout,
  CheckCircle2,
  PackageCheck,
  Container
} from "lucide-react";
import operationsFreshHero from "@/assets/operations-fresh-hero.png";
import microgreens from "@/assets/microgreens.jpg";

export default function OperationsPage() {
  const { t, i18n } = useTranslation('pages');
  const isRTL = i18n.dir() === 'rtl';

  const certifications = [
    { name: t('operations.certifications.haccp.name'), description: t('operations.certifications.haccp.description'), id: "CERT_HACCP" },
    { name: t('operations.certifications.iso.name'), description: t('operations.certifications.iso.description'), id: "ISO_22000" },
    { name: t('operations.certifications.globalgap.name'), description: t('operations.certifications.globalgap.description'), id: "GAP_PLATINUM" },
  ];

  const operationalStats = [
    { value: t('operations.stats.facility.value'), label: t('operations.stats.facility.label'), icon: Warehouse },
    { value: t('operations.stats.delivery.value'), label: t('operations.stats.delivery.label'), icon: Truck },
    { value: t('operations.stats.varieties.value'), label: t('operations.stats.varieties.label'), icon: Leaf },
    { value: "100%", label: t('operations.stats.monitoring.label'), icon: Thermometer },
  ];

  return (
    <Layout>
      {/* Nature-Logistics Hero: Freshness Meets Efficiency */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-white">
        {/* Organic Background Glows */}
        <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-[1000px] h-[1000px] bg-uniteda-emerald/10 rounded-full blur-[180px] -mr-96 rtl:-ml-96 rtl:-mr-0 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 left-0 rtl:right-0 rtl:left-auto w-[800px] h-[800px] bg-uniteda-gold/10 rounded-full blur-[150px] -ml-48 rtl:-mr-48 rtl:-ml-0 -mb-48 pointer-events-none" />

        <div className="container-wide relative z-10 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Brand Identity Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="text-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald text-[11px] font-black uppercase tracking-[0.2em]">
                    <Sprout size={14} className="animate-bounce" />
                    {t('operations.hero.status')}
                  </span>
                </motion.div>

                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-uniteda-emerald-dark mb-8 tracking-tighter leading-[0.9] uppercase">
                  {t('operations.hero.title_prefix')} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                    {t('operations.hero.title_highlight')}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed max-w-xl font-medium">
                  {t('operations.hero.description')}
                </p>
              </div>

              <div className="flex flex-wrap gap-8 pt-4">
                <Button size="xl" className="rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white px-12 py-8 text-xl font-black shadow-2xl shadow-uniteda-emerald/20 transition-all hover:scale-105 active:scale-95 group" asChild>
                  <Link to="/rfq">
                    {t('operations.hero.cta')}
                    <ArrowRight className="w-6 h-6 ms-3 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                  </Link>
                </Button>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-uniteda-emerald/10 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Partner" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-uniteda-emerald-dark uppercase tracking-widest">{t('operations.hero.partners_label')}</span>
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">{t('operations.hero.partners_sub')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Fresh Infrastructure Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full hidden lg:block"
            >
              <div className="relative aspect-[1/1] rounded-[5rem] border-[16px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                <img
                  src={operationsFreshHero}
                  alt="United Fresh Shipment"
                  className="w-full h-full object-cover"
                />

                {/* Information Overlay (Soft & Clean) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-12 left-12 right-12 rtl:right-12 rtl:left-12 z-10">
                  <div className="glass-panel p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border-0 shadow-2xl flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald">
                        <Ship size={28} />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="text-xs font-black text-uniteda-emerald-dark uppercase tracking-widest">{t('operations.hero.vessel_label')}</span>
                        <span className="text-sm font-bold text-muted-foreground uppercase">{t('operations.hero.vessel_name')}</span>
                      </div>
                    </div>
                    <div className="text-end rtl:text-start">
                      <span className="text-[10px] font-black text-uniteda-emerald uppercase block mb-1">{t('operations.hero.integrity_score')}</span>
                      <span className="text-2xl font-black text-uniteda-emerald-dark font-mono">99.8%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Nature Floaties */}
              <div className="absolute -top-10 -right-10 rtl:-left-10 rtl:-right-auto w-32 h-32 bg-uniteda-emerald/5 rounded-3xl rotate-12 blur-xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 rtl:-right-10 rtl:-left-auto w-40 h-40 bg-uniteda-gold/5 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>

        {/* Tactical Metrics Bar (Fresh Style) */}
        <div className="relative mt-12 bg-[#fcfcfc] border-y border-black/5 py-10">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {operationalStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center group-hover:bg-uniteda-emerald transition-all duration-300">
                    <stat.icon size={24} className="text-uniteda-emerald group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-3xl font-black text-uniteda-emerald-dark tracking-tighter leading-none mb-1 font-mono">{stat.value}</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operations Lifecycle Bento Grid: Soil-to-Shipment */}
      <section className="section-padding bg-white relative">
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mb-20 text-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-5xl md:text-7xl font-black text-uniteda-emerald-dark tracking-tighter uppercase leading-[0.85]">
                {t('operations.anatomy.title_prefix')} <br />
                <span className="text-uniteda-emerald-dark/20">{t('operations.anatomy.title_highlight')}</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                {t('operations.anatomy.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Box 1: Sourcing (Vertical) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 p-12 rounded-[4rem] bg-[#f8fcf8] border border-uniteda-emerald/10 group hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="text-start">
                  <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald text-white flex items-center justify-center mb-10 shadow-lg shadow-uniteda-emerald/20">
                    <Leaf size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-uniteda-emerald-dark mb-6 leading-tight">{t('operations.anatomy.layer1.title')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t('operations.anatomy.layer1.description')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 text-start">
                    <span className="text-[10px] font-black text-uniteda-emerald uppercase tracking-widest">{t('operations.anatomy.layer1.tags.0')}</span>
                    <span className="text-xs font-bold text-uniteda-emerald-dark/60">{t('operations.anatomy.layer1.stage')}</span>
                  </div>
                  <ArrowRight size={20} className="text-uniteda-emerald ms-auto rtl:rotate-180" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 rtl:left-0 rtl:right-auto w-48 h-48 bg-uniteda-emerald/5 rounded-full translate-x-12 rtl:-translate-x-12 rtl:translate-x-0 translate-y-12 blur-2xl" />
            </motion.div>

            {/* Box 2: Tracking (Horizontal Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 p-12 rounded-[4rem] bg-uniteda-emerald-dark text-white group hover:shadow-2xl transition-all duration-500 relative flex flex-col md:flex-row gap-12"
            >
              <div className="flex-1 flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-uniteda-gold group-hover:bg-white group-hover:text-uniteda-emerald-dark transition-all">
                      <Truck size={32} />
                    </div>
                    <span className="text-[10px] font-black opacity-20 uppercase tracking-[0.5em]">{t('operations.anatomy.layer2.monitoring')}</span>
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tight">{t('operations.anatomy.layer2.title')}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{t('operations.anatomy.layer2.description')}</p>
                </div>
                <div className="flex gap-4">
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-uniteda-gold">{t('operations.anatomy.layer2.stats.on_time')}</div>
                  <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-white/40">{t('operations.anatomy.layer2.stats.secured')}</div>
                </div>
              </div>
              <div className="w-full md:w-64 shrink-0 flex flex-col gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-5 rounded-3xl bg-white/10 border border-white/5 flex items-center justify-between group-hover:bg-white/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-uniteda-emerald animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{t('operations.anatomy.layer4.vessel')} {i}</span>
                    </div>
                    <ArrowRight size={14} className="text-uniteda-gold rtl:rotate-180" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Box 3: Quality Gate (Horizontal Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-12 p-12 rounded-[4rem] bg-[#fafafa] border border-black/5 group hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="space-y-6 text-start">
                  <div className="w-14 h-14 rounded-2xl bg-uniteda-gold/10 flex items-center justify-center text-uniteda-gold">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-uniteda-emerald-dark tracking-tight leading-tight">{t('operations.anatomy.layer3.title')}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{t('operations.anatomy.layer3.description')}</p>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.values(t('operations.anatomy.layer3.tests', { returnObjects: true }) as object).map((test: string) => (
                    <div key={test} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white border border-black/5 shadow-sm group-hover:scale-105 transition-all">
                      <CheckCircle2 size={20} className="text-uniteda-emerald mb-4" />
                      <span className="text-[10px] font-black text-uniteda-emerald-dark uppercase tracking-widest">{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Section: Institutional Heritage */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-start"
            >
              <span className="text-[10px] font-black text-uniteda-emerald uppercase tracking-[0.4em] mb-6 block">{t('operations.compliance.label')}</span>
              <h2 className="text-5xl md:text-6xl font-black text-uniteda-emerald-dark tracking-tighter uppercase leading-[0.9] mb-10">
                {t('operations.compliance.title_prefix')} <br />
                <span className="text-uniteda-emerald-dark/20 text-4xl md:text-5xl">{t('operations.compliance.title_highlight')}</span>
              </h2>
              <div className="grid gap-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[3rem] bg-[#fcfcfc] border border-black/5 flex items-center gap-8 group hover:bg-white hover:shadow-2xl transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-uniteda-emerald/5 flex flex-col items-center justify-center group-hover:bg-uniteda-emerald group-hover:text-white transition-all shrink-0">
                      <Award size={28} />
                      <span className="text-[8px] font-mono mt-1 opacity-40">{cert.id}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-uniteda-emerald-dark tracking-tight mb-1">{cert.name}</h4>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{cert.description}</p>
                    </div>
                    <CheckCircle2 size={20} className="text-uniteda-emerald ms-auto" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border-[16px] border-white shadow-2xl">
                <img src={microgreens} alt="Nature focus" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark/80 via-transparent to-transparent" />

                <div className="absolute bottom-12 left-12 right-12 text-white text-start">
                  <span className="text-[10px] font-black tracking-[0.5em] mb-4 block uppercase opacity-50">{t('operations.compliance.hud.label')}</span>
                  <p className="text-2xl font-black tracking-tight leading-snug">
                    "{t('operations.compliance.hud.text')}"
                  </p>
                  <div className="mt-8 flex gap-3">
                    <span className="h-1 w-12 bg-uniteda-gold rounded-full" />
                    <span className="h-1 w-24 bg-uniteda-emerald rounded-full" />
                    <span className="h-1 w-12 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Partnership Link */}
      <section className="py-32 bg-uniteda-emerald-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container-wide relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black tracking-[0.8em] text-uniteda-gold mb-8 block uppercase">{t('operations.partnerships.label')}</span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-12">
              {t('operations.partnerships.title_prefix')} <br />
              <span className="text-uniteda-gold italic underline decoration-white/20 underline-offset-[16px]">{t('operations.partnerships.title_highlight')}</span>
            </h2>
            <p className="text-white/60 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              {t('operations.partnerships.description')}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <Button size="xl" className="h-24 px-16 rounded-full bg-uniteda-emerald hover:bg-uniteda-gold hover:text-uniteda-emerald-dark text-white font-black text-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all hover:scale-105 group" asChild>
              <Link to="/rfq">
                {t('operations.partnerships.cta_primary')}
                <ArrowRight className="w-8 h-8 ms-4 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform rtl:rotate-180" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="h-24 px-16 rounded-full border-2 border-white/20 text-white font-black text-2xl hover:bg-white/10 transition-all hover:scale-105" asChild>
              <Link to="/contact">{t('operations.partnerships.cta_secondary')}</Link>
            </Button>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-20">
            <div className="flex items-center gap-4 text-[11px] font-black text-uniteda-gold uppercase tracking-[0.3em]">
              <Globe2 size={16} />
              {t('operations.partnerships.footer.system')}
            </div>
            <div className="flex items-center gap-8 text-[11px] font-bold text-white uppercase tracking-widest">
              <span className="flex items-center gap-2"><Container size={14} /> {t('operations.partnerships.footer.shipped')}</span>
              <span className="flex items-center gap-2"><PackageCheck size={14} /> {t('operations.partnerships.footer.recall')}</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
