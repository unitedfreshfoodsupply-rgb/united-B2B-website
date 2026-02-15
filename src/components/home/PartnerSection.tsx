import React from "react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { motion } from "framer-motion";

const partners = [
    { name: "Fairmont", logo: "/images/partners/fairmont.png" },
    { name: "Four Seasons", logo: "/images/partners/four-seasons.png" },
    { name: "Royal Maxim Palace Kempinski", logo: "/images/partners/kempinski.png" },
    { name: "Jaz Hotels", logo: "/images/partners/jaz.png" },
    { name: "Steigenberger", logo: "/images/partners/steigenberger.png" },
    { name: "Triumph", logo: "https://triumphhotel.com/images/triumph-logo.png" },
    { name: "Safir", logo: "/images/partners/safir.webp" },
    { name: "Hilton", logo: "/images/partners/hilton.png" },
    { name: "Sheraton", logo: "/images/partners/sheraton.png" },
    { name: "Mövenpick", logo: "/images/partners/movenpick.png" },
    { name: "Conrad", logo: "/images/partners/conrad.png" },
    { name: "Marriott", logo: "/images/partners/marriott.png" },
    { name: "Intercontinental", logo: "/images/partners/intercontinental.png" },
    { name: "Holiday Inn", logo: "/images/partners/holiday-inn.png" },
    { name: "Radisson Blu", logo: "/images/partners/radisson.png" },
    { name: "Tolip", logo: "/images/partners/tolip.png" },
    { name: "Sunrise", logo: "/images/partners/sunrise.jpg" },
    { name: "Albatros", logo: "/images/partners/albatros.png" },
    { name: "Rixos", logo: "/images/partners/rixos.png" },
];

export function PartnerSection() {
    const { t, isRTL } = useUnifiedTranslation();

    return (
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-y border-black/[0.03]">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-uniteda-emerald/5 rounded-full blur-[120px] -mr-72 -mt-72 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-uniteda-gold/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(${isRTL ? '50%' : '-50%'}); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .pause-on-hover:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}} />

            <div className="container-wide relative z-10">
                {/* Refined Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 px-4">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-6xl font-black text-uniteda-emerald-dark tracking-tighter leading-none uppercase mb-6"
                        >
                            {t('partners.title_prefix')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-uniteda-emerald to-uniteda-gold">
                                {t('partners.title_highlight')}
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-muted-foreground font-medium text-lg border-l-2 rtl:border-l-0 rtl:border-r-2 border-uniteda-gold pl-4 rtl:pl-0 rtl:pr-4"
                        >
                            {t('partners.subtitle')}
                        </motion.p>
                    </div>
                </div>

                {/* Marquee with circular premium pods */}
                <div className="relative group/marquee px-4 -mx-4 sm:mx-0">
                    <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden cursor-pointer pause-on-hover py-12">
                        <div className={`flex gap-12 md:gap-20 items-center whitespace-nowrap animate-marquee ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            {[...partners, ...partners, ...partners].map((partner, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex flex-col items-center gap-4 group"
                                >
                                    {/* The Circular Pod */}
                                    <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center rounded-full glass-panel border border-white/40 shadow-xl overflow-hidden group-hover:shadow-uniteda-emerald/10 group-hover:border-uniteda-emerald/30 transition-all duration-500">
                                        {/* Background Subtle Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Logo Container */}
                                        <div className="relative z-10 w-full h-full p-6 md:p-8 flex items-center justify-center">
                                            {partner.logo ? (
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className="text-xl md:text-2xl font-black text-uniteda-emerald-dark/40 italic">
                                                    {partner.name[0]}
                                                </span>
                                            )}
                                        </div>

                                        {/* Decorative Rings */}
                                        <div className="absolute inset-2 border border-uniteda-emerald/5 rounded-full scale-95 group-hover:scale-100 group-hover:border-uniteda-emerald/10 transition-all duration-700" />
                                    </div>

                                    {/* Minimal Label */}
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] md:text-[11px] font-black text-uniteda-emerald-dark/60 group-hover:text-uniteda-emerald-dark transition-colors duration-300 uppercase tracking-widest">
                                            {partner.name}
                                        </span>
                                        <div className="w-4 h-[1px] bg-uniteda-gold/30 group-hover:w-8 group-hover:bg-uniteda-gold transition-all duration-500 mt-1" />
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
