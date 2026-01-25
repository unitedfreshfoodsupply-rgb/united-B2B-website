import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function StoryChapter01({ isRTL }: { isRTL: boolean }) {
    const { t } = useTranslation('pages');
    return (
        <section className="py-20 sm:py-32 lg:py-48 bg-white relative overflow-hidden">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{ willChange: "transform, opacity" }}
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
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <img
                                src="/assets/microgreens.webp"
                                className="w-full h-full object-cover"
                                alt=""
                                width={800}
                                height={600}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-uniteda-emerald-dark/10 mix-blend-overlay" />
                        </motion.div>
                        <div className="absolute bottom-4 sm:-bottom-8 start-4 sm:-start-8 w-32 h-32 sm:w-40 sm:h-40 bg-uniteda-gold rounded-full flex items-center justify-center p-4 sm:p-6 text-center text-white shadow-xl z-20">
                            <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{t('about.story.chapter_01.badge')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
