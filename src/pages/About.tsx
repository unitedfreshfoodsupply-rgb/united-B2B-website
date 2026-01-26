import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useMemo, memo } from "react";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Trans } from "react-i18next";
import {
    Globe, Users, BarChart3,
    ArrowDown, Navigation
} from "lucide-react";
import { LazySection } from "@/components/ui/LazySection";

/**
 * Isolated Progress Bar to prevent page-level reflows on scroll
 */
const ScrollProgress = memo(() => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-uniteda-gold origin-left z-[100] pointer-events-none"
            style={{ scaleX }}
        />
    );
});

ScrollProgress.displayName = "ScrollProgress";

export default function About() {
    const { t, i18n, isRTL } = useUnifiedTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger entrance animations after mount
        setIsLoaded(true);
        window.dispatchEvent(new CustomEvent('react-mounted'));
    }, []);

    const stats = useMemo(() => [
        { id: 'countries', value: '12+', icon: Globe, label: t('about.impact.stats.countries') },
        { id: 'growers', value: '450+', icon: Users, label: t('about.impact.stats.growers') },
        { id: 'tonnage', value: '15k', icon: BarChart3, label: t('about.impact.stats.tonnage') },
        { id: 'satisfaction', value: '98%', icon: Navigation, label: t('about.impact.stats.satisfaction') },
    ], [t]);

    return (
        <Layout>
            <div ref={containerRef} className="relative bg-white font-sans overflow-x-hidden">
                <ScrollProgress />

                {/* Hero: The Beginning (Flattened and CSS-First for LCP) */}
                <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden py-32 sm:py-24">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-neutral-900/40 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-uniteda-emerald-dark/60 via-transparent to-white z-20" />
                        <img
                            src="/assets/operations-fresh-hero-v2.webp"
                            className="w-full h-full object-cover opacity-60"
                            alt=""
                            width={1920}
                            height={1080}
                            fetchpriority="high"
                            decoding="sync"
                        />
                    </div>

                    <div className="container-wide relative z-30 text-center">
                        {/* CSS-driven Entrance Label */}
                        <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                            <span className="text-xs sm:text-sm font-black text-uniteda-gold uppercase tracking-[0.4em] sm:tracking-[0.8em] whitespace-nowrap">{t('about.hero.label')}</span>
                            <div className="w-8 sm:w-16 h-px bg-uniteda-gold" />
                        </div>

                        {/* High-Priority LCP Title (Static + Immediate CSS Fade) */}
                        <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-[1.1] sm:leading-[0.9] uppercase mb-10 max-w-6xl mx-auto drop-shadow-2xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <Trans
                                t={t}
                                i18nKey="about.hero.title"
                                components={{
                                    highlight: <span className="text-uniteda-gold" />,
                                    br: <br />
                                }}
                            />
                        </h1>

                        <p className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md text-center transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {t('about.hero.description')}
                        </p>

                        <div className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{t('about.hero.scroll')}</span>
                            <ArrowDown className="w-5 h-5 text-uniteda-gold animate-bounce" />
                        </div>
                    </div>
                </section>

                <div className="relative z-10 bg-white">
                    <LazySection
                        minHeight="400px"
                        importFunc={() => import("@/components/home/PartnerSection").then(m => ({ default: m.PartnerSection }))}
                    />

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
            </div>
        </Layout>
    );
}
