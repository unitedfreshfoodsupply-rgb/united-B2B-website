import React from "react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { motion } from "framer-motion";

const partners = [
    { name: "Fairmont", logo: "/images/partners/fairmont.png" },
    { name: "Four Seasons", logo: "/images/partners/four-seasons.png" },
    { name: "Kempinski", logo: "/images/partners/kempinski.png" },
    { name: "Jaz Hotels", logo: "/images/partners/jaz.png" },
    { name: "Steigenberger", logo: "/images/partners/steigenberger.png" },
];

export function PartnerSection() {
    const { t, isRTL } = useUnifiedTranslation();

    return (
        <section className="relative py-32 sm:py-48 bg-white overflow-hidden border-y border-black/[0.03]">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-uniteda-emerald/5 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />
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

                {/* Marquee with premium elevation */}
                <div className="relative group/marquee px-4 -mx-4 sm:mx-0 py-12">
                    {/* Industrial Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden cursor-pointer pause-on-hover py-8">
                        <div className={`flex gap-16 md:gap-24 items-center whitespace-nowrap animate-marquee ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                                <div
                                    key={i}
                                    className="relative flex items-center justify-center transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]"
                                >
                                    <div className="group relative h-40 md:h-52 w-64 md:w-80 flex flex-col items-center justify-center p-8 rounded-[2.5rem] glass-panel border border-white/20 shadow-2xl hover:shadow-uniteda-emerald/10 hover:border-uniteda-emerald/30 transition-all duration-700">
                                        {/* Status Header Overlay */}
                                        <div className="absolute top-6 left-8 right-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1 h-1 rounded-full bg-uniteda-emerald" />
                                                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-uniteda-emerald-dark">{t('partners.card_status')}</span>
                                            </div>
                                        </div>

                                        <div className="relative z-10 w-full h-full flex items-center justify-center mt-4">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-h-[60%] max-w-[80%] object-contain filter drop-shadow-md grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* HUD Corner Accents */}
                                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-uniteda-gold/20 rounded-tr-xl group-hover:border-uniteda-gold transition-colors" />
                                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-uniteda-gold/20 rounded-bl-xl group-hover:border-uniteda-gold transition-colors" />

                                        {/* Bottom Label */}
                                        <div className="absolute bottom-6 left-8 right-8 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                            <span className="text-[8px] font-black text-uniteda-emerald-dark uppercase tracking-[0.3em]">{t('partners.card_verification')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
