import React from "react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { motion } from "framer-motion";

const partners = [
    { name: "Fairmont", logo: "/images/partners/fairmont.png" },
    { name: "Four Seasons", logo: "/images/partners/four-seasons.png" },
    { name: "Kempinski", logo: "/images/partners/kempinski.png" },
    { name: "Jaz Hotels", logo: "/images/partners/jaz.png" },
    { name: "Emaar", logo: "/images/partners/emaar.png" },
    { name: "Steigenberger", logo: "/images/partners/steigenberger.png" },
];

export function PartnerSection() {
    const { t, isRTL } = useUnifiedTranslation();

    return (
        <section className="relative py-28 sm:py-36 bg-white overflow-hidden border-y border-black/[0.03]">
            {/* Smooth Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(${isRTL ? '50%' : '-50%'}); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
                .pause-on-hover:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}} />

            <div className="container-wide relative z-10">
                {/* Massive Hero Header */}
                <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24 sm:mb-32">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 mb-8 w-fit"
                        >
                            <div className="w-2 h-2 rounded-full bg-uniteda-gold animate-ping" />
                            <span className="text-uniteda-emerald text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] whitespace-nowrap">
                                {t('partners.label')}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-uniteda-emerald-dark tracking-[-0.05em] leading-[0.85] uppercase"
                        >
                            {t('partners.title_prefix')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald via-uniteda-emerald-light to-uniteda-gold">
                                {t('partners.title_highlight')}
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="lg:col-span-4 lg:pt-20"
                    >
                        <p className="text-muted-foreground font-bold text-xl sm:text-2xl leading-tight border-l-4 rtl:border-l-0 rtl:border-r-4 border-uniteda-gold pl-6 rtl:pl-0 rtl:pr-6 py-2">
                            {t('partners.subtitle')}
                        </p>
                    </motion.div>
                </div>

                {/* Marquee with improved masks */}
                <div className="relative group/marquee px-4 -mx-4 sm:mx-0">
                    <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-gradient-to-r from-white via-white/60 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden cursor-pointer pause-on-hover">
                        <div className={`flex gap-20 md:gap-40 items-center whitespace-nowrap py-14 animate-marquee ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            {[...partners, ...partners, ...partners].map((partner, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10, scale: 1.15 }}
                                    className="flex items-center justify-center grayscale contrast-125 opacity-30 hover:grayscale-0 hover:opacity-100 hover:contrast-100 transition-all duration-700 ease-[0.22,1,0.36,1]"
                                >
                                    <div className="h-12 md:h-20 w-44 md:w-64 flex items-center justify-center">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={192}
                                            height={56}
                                            className="max-h-full max-w-full object-contain filter drop-shadow-md"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
