import { motion } from "framer-motion";
import { useRef, lazy, Suspense, useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Trans } from "react-i18next";
import {
    Globe, Users, BarChart3,
    ArrowDown, Navigation
} from "lucide-react";

// Lazy loaded chapters for structural performance
const StoryChapter01 = lazy(() => import("@/components/about/StoryChapter01"));
const StoryChapter02 = lazy(() => import("@/components/about/StoryChapter02"));
const StoryChapter03 = lazy(() => import("@/components/about/StoryChapter03"));
const StoryChapter04 = lazy(() => import("@/components/about/StoryChapter04"));
const ImpactCTA = lazy(() => import("@/components/about/ImpactCTA"));
const PartnerSection = lazy(() => import("@/components/home/PartnerSection").then(m => ({ default: m.PartnerSection })));

export default function About() {
    const { t, i18n, isRTL } = useUnifiedTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        // Signal to the skeleton logic that React is ready
        window.dispatchEvent(new CustomEvent('react-mounted'));
        setIsHydrated(true);
    }, []);

    const stats = [
        { id: 'countries', value: '12+', icon: Globe, label: t('about.impact.stats.countries') },
        { id: 'growers', value: '450+', icon: Users, label: t('about.impact.stats.growers') },
        { id: 'tonnage', value: '15k', icon: BarChart3, label: t('about.impact.stats.tonnage') },
        { id: 'satisfaction', value: '98%', icon: Navigation, label: t('about.impact.stats.satisfaction') },
    ];

    return (
        <Layout>
            <motion.div
                ref={containerRef}
                initial={{ opacity: 1 }}
                className="relative bg-white font-sans overflow-x-hidden"
            >

                {/* Progress Indicator (Safe Absolute) */}
                <div className="absolute left-0 top-0 w-full h-1 z-50 pointer-events-none">
                    <motion.div
                        className="h-full bg-uniteda-gold origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Hero: The Beginning (Kept in Main Chunk for LCP) */}
                <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-32 sm:py-24">
                    <div className="absolute inset-0 z-0">
                        {/* Unified Cinematic Overlay */}
                        <div className="absolute inset-0 bg-neutral-900/40 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-uniteda-emerald-dark/60 via-transparent to-white z-20" />

                        <img
                            src="/assets/operations-fresh-hero-v2.webp"
                            className="w-full h-full object-cover opacity-60"
                            alt=""
                            width={1920}
                            height={1080}
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>

                    <div className="container-wide relative z-30 text-center">
                        <motion.div
                            initial={{ y: 30, opacity: 1 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            style={{ willChange: "transform" }}
                            className="flex items-center justify-center gap-4 mb-8"
                        >
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                            <span className="text-xs sm:text-sm font-black text-uniteda-gold uppercase tracking-[0.4em] sm:tracking-[0.8em] whitespace-nowrap">{t('about.hero.label')}</span>
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                        </motion.div>

                        <motion.h1
                            initial={{ scale: 0.98, opacity: 0.1 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            style={{ willChange: "transform, opacity" }}
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
                            initial={{ opacity: 0.1, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ willChange: "transform, opacity" }}
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

                <Suspense fallback={null}>
                    <PartnerSection />
                </Suspense>

                {/* Sub-sections: Lazy loaded for structural performance */}
                <Suspense fallback={<div className="h-96 flex items-center justify-center bg-white"><div className="w-8 h-8 rounded-full border-4 border-uniteda-gold border-t-transparent animate-spin" /></div>}>
                    <StoryChapter01 isRTL={isRTL} />
                    <StoryChapter02 isRTL={isRTL} />
                    <StoryChapter03 />
                    <StoryChapter04 stats={stats} />
                    <ImpactCTA isRTL={isRTL} />
                </Suspense>

            </motion.div>
        </Layout>
    );
}
