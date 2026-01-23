import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { useTranslation, Trans } from "react-i18next";
import {
    Play, Globe, Users, BarChart3,
    ChevronRight, ChevronLeft, ArrowDown,
    Zap, Navigation, Ship
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function About() {
    const { t, i18n } = useTranslation('pages');
    const isRTL = i18n.dir() === 'rtl';
    const containerRef = useRef<HTMLDivElement>(null);

    const stats = [
        { id: 'countries', value: '12+', icon: Globe, label: t('about.impact.stats.countries') },
        { id: 'growers', value: '450+', icon: Users, label: t('about.impact.stats.growers') },
        { id: 'tonnage', value: '15k', icon: BarChart3, label: t('about.impact.stats.tonnage') },
        { id: 'satisfaction', value: '98%', icon: Navigation, label: t('about.impact.stats.satisfaction') },
    ];

    return (
        <Layout>
            <div ref={containerRef} className="relative bg-white font-sans overflow-x-hidden">

                {/* Progress Indicator (Safe Absolute) */}
                <div className="absolute left-0 top-0 w-full h-1 z-50 pointer-events-none">
                    <motion.div
                        className="h-full bg-uniteda-gold origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Hero: The Beginning */}
                <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-32 sm:py-24">
                    <div className="absolute inset-0 z-0">
                        {/* Unified Cinematic Overlay */}
                        <div className="absolute inset-0 bg-neutral-900/40 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-uniteda-emerald-dark/60 via-transparent to-white z-20" />

                        <img
                            src="/assets/operations-fresh-hero-v2.png"
                            className="w-full h-full object-cover opacity-60 animate-pulse duration-[20s]"
                            alt=""
                        />
                    </div>

                    <div className="container-wide relative z-30 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-8"
                        >
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                            <span className="text-xs sm:text-sm font-black text-uniteda-gold uppercase tracking-[0.4em] sm:tracking-[0.8em] whitespace-nowrap">{t('about.hero.label')}</span>
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-[1.1] sm:leading-[0.9] uppercase mb-10 max-w-6xl mx-auto drop-shadow-2xl"
                        >
                            <Trans
                                t={t}
                                i18nKey="about.hero.title"
                                components={{
                                    highlight: <span className="text-uniteda-gold" />,
                                    br: <br />
                                }}
                            />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md text-center"
                        >
                            {t('about.hero.description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
                            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{t('about.hero.scroll')}</span>
                            <ArrowDown className="w-5 h-5 text-uniteda-gold" />
                        </motion.div>
                    </div>
                </section>

                {/* Chapter 01: The Heritage */}
                <section className="py-20 sm:py-32 lg:py-48 bg-white relative overflow-hidden">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            <div className="lg:col-span-5 relative">
                                <motion.div
                                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl sm:text-6xl font-black text-uniteda-gold/20">{t('about.story.chapter_01.num')}</span>
                                        <div className="h-px flex-1 bg-black/5" />
                                        <span className="text-[10px] font-black text-uniteda-gold uppercase tracking-[0.2em]">{t('about.story.chapter_01.label')}</span>
                                    </div>
                                    <div className="relative ps-10 sm:ps-12 border-s-2 sm:border-s-4 border-uniteda-gold/40 mb-12 text-start">
                                        <p className="text-xl sm:text-2xl text-muted-foreground font-medium leading-relaxed">
                                            {t('about.story.chapter_01.content')}
                                        </p>
                                    </div>
                                </motion.div>

                                <div className="mt-12 flex flex-wrap gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-2xl sm:text-3xl font-black text-uniteda-emerald-dark">{t('about.story.chapter_01.stats.legacy.value')}</span>
                                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">{t('about.story.chapter_01.stats.legacy.label')}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-2xl sm:text-3xl font-black text-uniteda-emerald-dark">{t('about.story.chapter_01.stats.organic.value')}</span>
                                        <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">{t('about.story.chapter_01.stats.organic.label')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative"
                                >
                                    <img src="/assets/microgreens.jpg" className="w-full h-full object-cover" alt="" />
                                    <div className="absolute inset-0 bg-uniteda-emerald-dark/10 mix-blend-overlay" />
                                </motion.div>
                                <div className="absolute bottom-4 sm:-bottom-8 start-4 sm:-start-8 w-32 h-32 sm:w-40 sm:h-40 bg-uniteda-gold rounded-full flex items-center justify-center p-4 sm:p-6 text-center text-white shadow-xl z-20">
                                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{t('about.story.chapter_01.badge')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 02: The Intelligence */}
                <section className="py-20 sm:py-32 lg:py-48 bg-uniteda-emerald-dark relative overflow-hidden">
                    <div className="absolute inset-0 neural-grid opacity-10" />
                    <div className="container-wide relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            <div className="lg:col-span-6 order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative group p-3 sm:p-4 bg-white/5 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] border border-white/10"
                                >
                                    <img src="/assets/rfq-hero.png" className="w-full aspect-video object-cover rounded-[1.5rem] sm:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
                                </motion.div>
                            </div>

                            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-5xl sm:text-6xl font-black text-uniteda-gold/40">{t('about.story.chapter_02.num')}</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="text-[10px] font-black text-uniteda-gold uppercase tracking-[0.2em]">{t('about.story.chapter_02.label')}</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                                        {t('about.story.chapter_02.title')}
                                    </h2>
                                    <p className="text-lg sm:text-xl text-white/60 font-medium leading-relaxed">
                                        {t('about.story.chapter_02.content')}
                                    </p>

                                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[t('about.story.chapter_02.features.precision'), t('about.story.chapter_02.features.telemetry')].map((text, i) => (
                                            <div key={i} className="flex items-center gap-3 py-4 px-6 rounded-xl bg-white/5 border border-white/10">
                                                <img src="/logo.png" className="w-4 h-4 object-contain brightness-0 invert opacity-60" alt="" />
                                                <span className="text-[10px] font-black uppercase text-white tracking-widest">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chapter 03: The Vision */}
                <section className="py-20 sm:py-32 lg:py-48 bg-white relative">
                    <div className="container-wide">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16 sm:mb-24"
                            >
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <span className="text-5xl sm:text-6xl font-black text-uniteda-gold/20">{t('about.story.chapter_03.num')}</span>
                                    <span className="text-[10px] font-black text-uniteda-gold uppercase tracking-[0.2em]">{t('about.story.chapter_03.label')}</span>
                                </div>
                                <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-uniteda-emerald-dark uppercase tracking-tighter mb-8 italic leading-tight text-balance">
                                    {t('about.story.chapter_03.title')}
                                </h2>
                                <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                                    {t('about.story.chapter_03.content')}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-video rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden bg-black shadow-2xl border-[6px] sm:border-[12px] border-[#fafafa]"
                            >
                                <img src="/assets/products-hero.png" className="w-full h-full object-cover opacity-60 grayscale" alt="" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-uniteda-gold text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform group">
                                        <Play className="w-8 h-8 sm:w-12 sm:h-12 fill-current translate-x-1" />
                                    </button>
                                </div>
                                <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xs text-center">
                                    <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[8px] sm:text-[10px] font-black text-white uppercase tracking-[0.3em] border border-white/20">
                                        {t('about.story.chapter_03.cinema_label')}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Chapter 04: The Horizon - Ultra-Premium Redesign */}
                <section id="chapter-04" className="py-20 sm:py-32 lg:py-48 bg-white relative overflow-hidden scroll-mt-24">
                    {/* Background Visual Layer */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-10" />

                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/* Massive Watermark Typography */}
                        <div className="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-[15%] rtl:translate-x-[15%] text-[40vw] lg:text-[25vw] font-black text-uniteda-emerald/[0.03] lg:text-uniteda-emerald/[0.02] uppercase tracking-tighter select-none rotate-90 lg:rotate-0">
                            Horizon
                        </div>

                        {/* High-Tech Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.03]"
                            style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '120px 120px' }}
                        />

                        {/* Focal Glow */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[120%] bg-uniteda-gold/[0.03] blur-[150px] rounded-full mix-blend-multiply" />
                    </div>

                    <div className="container-wide relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                            {/* Left: Tactical Content (Editorial) */}
                            <div className="lg:col-span-5 flex flex-col justify-center items-start">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="inline-flex items-center gap-6 mb-12 group">
                                        <div className="w-16 h-16 rounded-full border border-uniteda-gold/20 flex items-center justify-center text-uniteda-gold font-black text-lg group-hover:bg-uniteda-gold group-hover:text-white transition-all duration-700 shadow-xl shadow-uniteda-gold/5">
                                            {t('about.story.chapter_04.num')}
                                        </div>
                                        <div className="h-px w-12 bg-uniteda-gold/20" />
                                        <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.6em]">{t('about.story.chapter_04.label')}</span>
                                    </div>

                                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-uniteda-emerald-dark uppercase tracking-tighter leading-[0.85] mb-8 text-start">
                                        {t('about.story.chapter_04.title')}
                                    </h2>

                                    <div className="relative mb-12 text-start">
                                        <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-md">
                                            {t('about.story.chapter_04.content')}
                                        </p>
                                    </div>

                                    {/* Strategy Badge (Premium) */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-8 group cursor-default"
                                    >
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] sm:rounded-[2.5rem] bg-uniteda-emerald-dark flex items-center justify-center shadow-3xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-uniteda-gold opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                            <img src="/logo.png" className="w-10 h-10 object-contain brightness-0 invert relative z-10" alt="" />
                                        </div>
                                        <div>
                                            <div className="text-[12px] font-black uppercase text-uniteda-gold tracking-[0.4em] mb-1.5">{t('about.story.chapter_04.strategy.label')}</div>
                                            <div className="text-xl font-black text-uniteda-emerald-dark uppercase tracking-tight">{t('about.story.chapter_04.strategy.detail')}</div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right: Dynamic Bento Grid */}
                            <div className="lg:col-span-7 flex items-center">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full auto-rows-auto sm:auto-rows-[250px]">

                                    {/* Primary Impact Stat (Wide Bento) */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        className="sm:col-span-2 p-12 rounded-[4rem] bg-uniteda-emerald-dark flex flex-col justify-end relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(6,78,59,0.3)]"
                                    >
                                        <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-[15s] group-hover:scale-110">
                                            <img src="/assets/operations-fresh-hero-v2.png" className="w-full h-full object-cover grayscale brightness-[2]" alt="" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark via-uniteda-emerald-dark/60 to-transparent z-10" />

                                        <div className="relative z-20 flex justify-between items-end border-b border-white/10 pb-2">
                                            <div>
                                                <div className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none mb-3">{stats[0].value}</div>
                                                <div className="text-[11px] font-black uppercase text-uniteda-gold tracking-[0.5em]">{stats[0].label}</div>
                                            </div>
                                            {(() => {
                                                const Icon = stats[0].icon;
                                                return <Icon className="w-16 h-16 text-white/10 mb-2" />;
                                            })()}
                                        </div>
                                    </motion.div>

                                    {/* Supporting Stats (Bento Cells) */}
                                    {stats.slice(1).map((stat, idx) => (
                                        <motion.div
                                            key={stat.id}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                                            viewport={{ once: true }}
                                            className={cn(
                                                "p-10 rounded-[4rem] bg-[#fcfcfc] border border-black/[0.02] flex flex-col justify-between group hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-uniteda-gold/20 transition-all duration-700 hover:-translate-y-3",
                                                idx === 2 && "sm:col-span-2 lg:col-span-1"
                                            )}
                                        >
                                            <div className="w-14 h-14 rounded-[1.5rem] bg-white flex items-center justify-center border border-black/[0.02] shadow-sm group-hover:scale-110 group-hover:bg-uniteda-gold group-hover:text-white transition-all duration-700">
                                                <stat.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-5xl font-black text-uniteda-emerald-dark tracking-tighter leading-none mb-2 group-hover:text-uniteda-gold transition-colors">{stat.value}</div>
                                                <div className="text-[10px] font-black uppercase text-muted-foreground/50 tracking-[0.2em]">{stat.label}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Closing: The Legacy CTA - Ultra-Premium Overhaul */}
                <section className="py-24 sm:py-32 lg:py-48 relative overflow-hidden">
                    <div className="container-wide">
                        <div className="relative min-h-[600px] lg:min-h-[800px] rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
                            {/* Cinematic Background Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out group-hover:scale-110"
                                style={{ backgroundImage: 'url(/assets/operations-facility.jpg)' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-uniteda-emerald-dark/95 via-uniteda-emerald-dark/80 to-transparent z-10" />

                            {/* Floating Data Nodes (Glass Elements) */}
                            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
                                <motion.div
                                    animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-[15%] right-[10%] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                                >
                                    <Zap className="w-8 h-8 text-uniteda-gold mb-2" />
                                    <div className="h-1 w-12 bg-uniteda-gold/30 rounded-full" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-[20%] right-[15%] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                                >
                                    <Ship className="w-10 h-10 text-white/50 mb-3" />
                                    <div className="space-y-2">
                                        <div className="h-1 w-16 bg-white/20 rounded-full" />
                                        <div className="h-1 w-10 bg-white/10 rounded-full" />
                                    </div>
                                </motion.div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-uniteda-gold/5 rounded-full blur-[120px] mix-blend-screen" />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-30 h-full p-10 sm:p-20 lg:p-32 flex flex-col justify-center max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <span className="inline-block px-6 py-2 rounded-full bg-uniteda-gold/10 border border-uniteda-gold/20 text-uniteda-gold text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                                        {t('about.impact.title')}
                                    </span>

                                    <h2 className="text-5xl sm:text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.85]">
                                        <Trans
                                            t={t}
                                            i18nKey="about.cta.title"
                                            components={{
                                                highlight: <span className="text-uniteda-gold italic relative inline-block">
                                                    <span className="relative z-10" />
                                                    <span className="absolute bottom-4 left-0 w-full h-8 bg-uniteda-gold/10 -rotate-1 z-0" />
                                                </span>,
                                                br: <br />
                                            }}
                                        />
                                    </h2>

                                    <div className="flex flex-col sm:flex-row gap-6 items-start mt-6">
                                        <Button size="xl" className="group relative overflow-hidden h-20 px-12 rounded-2xl bg-uniteda-gold hover:bg-uniteda-gold-dark text-white font-black text-xl uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(182,152,90,0.3)]" asChild>
                                            <Link to="/contact" className="flex items-center gap-4 relative z-10">
                                                {t('about.cta.contact')}
                                                {isRTL ? (
                                                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                                                ) : (
                                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                                )}
                                                {/* Light Sweep Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                            </Link>
                                        </Button>

                                        <Button size="xl" variant="outline" className="h-20 px-12 rounded-2xl border-white/20 text-white font-black text-xl uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all" asChild>
                                            <Link to="/products">{t('about.cta.inventory')}</Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Corner Decorative Notch */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-uniteda-gold/10 backdrop-blur-md [clip-path:polygon(100%_0,0_0,100%_100%)] z-20 opacity-50" />
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
}
