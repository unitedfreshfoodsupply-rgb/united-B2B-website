import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function StoryChapter02({ isRTL }: { isRTL: boolean }) {
    const { t } = useTranslation('pages');
    return (
        <section className="py-20 sm:py-32 lg:py-48 bg-uniteda-emerald-dark relative overflow-hidden">
            <div className="absolute inset-0 neural-grid opacity-10" />
            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative group p-3 sm:p-4 bg-white/5 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] border border-white/10"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <img
                                src="/assets/rfq-hero.webp"
                                className="w-full aspect-video object-cover rounded-[1.5rem] sm:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt=""
                                width={1280}
                                height={720}
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
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
                                        <img
                                            src="/logo.webp"
                                            className="w-4 h-4 object-contain brightness-0 invert opacity-60"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                        <span className="text-[10px] font-black uppercase text-white tracking-widest">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
