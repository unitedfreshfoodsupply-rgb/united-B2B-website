import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function StoryChapter04({ stats }: { stats: any[] }) {
    const { t } = useTranslation('pages');
    return (
        <section id="chapter-04" className="py-20 sm:py-32 lg:py-48 bg-white relative overflow-hidden scroll-mt-24">
            {/* Background Visual Layer */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent z-10" />

            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Massive Watermark Typography */}
                <div className="absolute top-1/2 start-0 -translate-y-1/2 -translate-x-[15%] rtl:translate-x-[15%] text-[40vw] lg:text-[25vw] font-black text-uniteda-emerald/[0.03] lg:text-uniteda-emerald/[0.02] uppercase tracking-tighter select-none rotate-90 lg:rotate-0">
                    Horizon
                </div>

                {/* High-Tech Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '120px 120px' }}
                />

                {/* Focal Glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[120%] bg-uniteda-gold/[0.03] blur-[150px] rounded-full mix-blend-multiply" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left: Tactical Content (Editorial) */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-6 mb-12 group">
                                <div className="w-16 h-16 rounded-full border border-uniteda-gold/20 flex items-center justify-center text-uniteda-gold font-black text-lg group-hover:bg-uniteda-gold group-hover:text-white transition-all duration-700 shadow-xl shadow-uniteda-gold/5">
                                    {t('about.story.chapter_04.num')}
                                </div>
                                <div className="h-px w-12 bg-uniteda-gold/20" />
                                <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.6em]">{t('about.story.chapter_04.label')}</span>
                            </div>

                            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-uniteda-emerald-dark uppercase tracking-tighter leading-[0.85] mb-8 text-start">
                                {t('about.story.chapter_04.title')}
                            </h2>

                            <div className="relative mb-12 text-start">
                                <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-md">
                                    {t('about.story.chapter_04.content')}
                                </p>
                            </div>

                            {/* Strategy Badge (Premium) */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-8 group cursor-default"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] sm:rounded-[2.5rem] bg-uniteda-emerald-dark flex items-center justify-center shadow-3xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-uniteda-gold opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <img
                                        src="/logo.webp"
                                        className="w-10 h-10 object-contain brightness-0 invert relative z-10"
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <div className="text-[12px] font-black uppercase text-uniteda-gold tracking-[0.4em] mb-1.5">{t('about.story.chapter_04.strategy.label')}</div>
                                    <div className="text-xl font-black text-uniteda-emerald-dark uppercase tracking-tight">{t('about.story.chapter_04.strategy.detail')}</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Dynamic Bento Grid */}
                    <div className="lg:col-span-7 flex items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full auto-rows-auto sm:auto-rows-[250px]">

                            {/* Primary Impact Stat (Wide Bento) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="sm:col-span-2 p-12 rounded-[4rem] bg-uniteda-emerald-dark flex flex-col justify-end relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(6,78,59,0.3)]"
                            >
                                <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-[15s] group-hover:scale-110">
                                    <img
                                        src="/assets/obour-hub-sorting.webp"
                                        className="w-full h-full object-cover grayscale brightness-[2]"
                                        alt=""
                                        width={1920}
                                        height={1080}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-uniteda-emerald-dark via-uniteda-emerald-dark/60 to-transparent z-10" />

                                <div className="relative z-20 flex justify-between items-end border-b border-white/10 pb-2">
                                    <div>
                                        <div className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-none mb-3">{stats[0].value}</div>
                                        <div className="text-[11px] font-black uppercase text-uniteda-gold tracking-[0.5em]">{stats[0].label}</div>
                                    </div>
                                    {(() => {
                                        const Icon = stats[0].icon;
                                        return <Icon className="w-16 h-16 text-white/10 mb-2" />;
                                    })()}
                                </div>
                            </motion.div>

                            {/* Supporting Stats (Bento Cells) */}
                            {stats.slice(1).map((stat, idx) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={cn(
                                        "p-10 rounded-[4rem] bg-[#fcfcfc] border border-black/[0.02] flex flex-col justify-between group hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-uniteda-gold/20 transition-all duration-700 hover:-translate-y-3",
                                        idx === 2 && "sm:col-span-2 lg:col-span-1"
                                    )}
                                >
                                    <div className="w-14 h-14 rounded-[1.5rem] bg-white flex items-center justify-center border border-black/[0.02] shadow-sm group-hover:scale-110 group-hover:bg-uniteda-gold group-hover:text-white transition-all duration-700">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-uniteda-emerald-dark tracking-tighter leading-none mb-2 group-hover:text-uniteda-gold transition-colors">{stat.value}</div>
                                        <div className="text-[10px] font-black uppercase text-muted-foreground/50 tracking-[0.2em]">{stat.label}</div>
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
