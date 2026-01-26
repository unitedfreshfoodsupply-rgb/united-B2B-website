import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Trans } from "react-i18next";
import {
    Globe, Users, BarChart3,
    ArrowDown, Navigation
} from "lucide-react";
import { LazySection } from "@/components/ui/LazySection";

export default function About() {
    const { t, i18n, isRTL } = useUnifiedTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        window.dispatchEvent(new CustomEvent('react-mounted'));
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const stats = useMemo(() => [
        { id: 'countries', value: '12+', icon: Globe, label: t('about.impact.stats.countries') },
        { id: 'growers', value: '450+', icon: Users, label: t('about.impact.stats.growers') },
        { id: 'tonnage', value: '15k', icon: BarChart3, label: t('about.impact.stats.tonnage') },
        { id: 'satisfaction', value: '98%', icon: Navigation, label: t('about.impact.stats.satisfaction') },
    ], [t]);

    return (
        <Layout>
            <div
                ref={containerRef}
                className="relative bg-white font-sans overflow-x-hidden"
            >

                {/* Progress Indicator (GPU Accelerated) */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-uniteda-gold origin-left z-[100] pointer-events-none"
                    style={{ scaleX }}
                />

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
                        />
                    </div>

                    <div className="container-wide relative z-30 text-center">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                            <span className="text-xs sm:text-sm font-black text-uniteda-gold uppercase tracking-[0.4em] sm:tracking-[0.8em] whitespace-nowrap">{t('about.hero.label')}</span>
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                        </div>

                        <motion.h1
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ willChange: "opacity" }}
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

                <LazySection
                    minHeight="400px"
                    importFunc={() => import("@/components/home/PartnerSection").then(m => ({ default: m.PartnerSection }))}
                />

                {/* Sub-sections: Individually wrapped LazySection for parallel hydration */}
                <LazySection
                    minHeight="800px"
                    importFunc={() => import("@/components/about/StoryChapter01")}
                    props={{ isRTL }}
                />

                <LazySection
                    minHeight="800px"
                    importFunc={() => import("@/components/about/StoryChapter02")}
                    props={{ isRTL }}
                />

                <LazySection
                    minHeight="600px"
                    importFunc={() => import("@/components/about/StoryChapter03")}
                />

                <LazySection
                    minHeight="600px"
                    importFunc={() => import("@/components/about/StoryChapter04")}
                    props={{ stats }}
                />

                <LazySection
                    minHeight="400px"
                    importFunc={() => import("@/components/about/ImpactCTA")}
                    props={{ isRTL }}
                />

            </div>
        </Layout>
    );
}
