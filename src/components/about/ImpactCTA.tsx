import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import { ChevronRight, ChevronLeft, Zap, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ImpactCTA({ isRTL }: { isRTL: boolean }) {
    const { t } = useTranslation('pages');
    return (
        <section className="py-16 sm:py-32 lg:py-48 relative overflow-hidden">
            <div className="container-wide">
                <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
                    {/* Cinematic Background Layer */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out group-hover:scale-110"
                        style={{
                            backgroundImage: 'url(/assets/operations-facility.webp)',
                            willChange: "transform"
                        }}
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
                    <div className="relative z-30 h-full px-6 py-16 sm:p-20 lg:p-32 flex flex-col justify-center max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <span className="inline-block px-6 py-2 rounded-full bg-uniteda-gold/10 border border-uniteda-gold/20 text-uniteda-gold text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                                {t('about.impact.title')}
                            </span>

                            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-8 sm:mb-10 leading-[0.9] sm:leading-[0.85]">
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

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-start mt-6 w-full sm:w-auto">
                                <Button size="xl" className="group relative overflow-hidden h-16 sm:h-20 px-8 sm:px-12 rounded-2xl bg-uniteda-gold hover:bg-uniteda-gold-dark text-white font-black text-lg sm:text-xl uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(182,152,90,0.3)]" asChild>
                                    <Link to="/contact" className="flex items-center justify-center gap-4 relative z-10 w-full h-full">
                                        {t('about.cta.contact')}
                                        {isRTL ? (
                                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                        )}
                                        {/* Light Sweep Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    </Link>
                                </Button>

                                <Button size="xl" variant="outline" className="h-16 sm:h-20 px-8 sm:px-12 rounded-2xl border-white/20 text-white font-black text-lg sm:text-xl uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all" asChild>
                                    <Link to="/products" className="flex items-center justify-center w-full h-full">{t('about.cta.inventory')}</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Corner Decorative Notch */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-uniteda-gold/10 backdrop-blur-md [clip-path:polygon(100%_0,0_0,100%_100%)] z-20 opacity-50" />
                </div>
            </div>
        </section>
    );
}
