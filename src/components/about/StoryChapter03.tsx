import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";

export default function StoryChapter03() {
    const { t } = useTranslation('pages');
    return (
        <section className="py-20 sm:py-32 lg:py-48 bg-white relative">
            <div className="container-wide">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
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
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden bg-black shadow-2xl border-[6px] sm:border-[12px] border-[#fafafa]"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <img
                            src="/assets/products-hero.webp"
                            className="w-full h-full object-cover opacity-60 grayscale"
                            alt=""
                            width={1280}
                            height={720}
                            loading="lazy"
                            decoding="async"
                        />
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
    );
}
