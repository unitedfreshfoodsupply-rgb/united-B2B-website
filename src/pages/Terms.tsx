import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Scale, FileText, Globe, AlertCircle, Building2 } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Terms() {
    const { t, isRTL } = useUnifiedTranslation();
    usePageTitle('meta.terms.title');

    const sections = [
        {
            icon: FileText,
            titleKey: "terms.sections.overview.title",
            contentKey: "terms.sections.overview.content"
        },
        {
            icon: Globe,
            titleKey: "terms.sections.procurement.title",
            contentKey: "terms.sections.procurement.content"
        },
        {
            icon: AlertCircle,
            titleKey: "terms.sections.liability.title",
            contentKey: "terms.sections.liability.content"
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-uniteda-emerald-dark to-uniteda-emerald">
                {/* Background Effects */}
                <div className="absolute inset-0 neural-grid opacity-10" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-uniteda-gold/10 rounded-full blur-[150px] -ml-48 -mt-48" />

                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                            <Scale size={16} className="text-uniteda-gold" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">{t('terms.badge')}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
                            {t('terms.title')} <span className="text-uniteda-gold">{t('terms.title_highlight')}</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-white/70 font-medium max-w-2xl mx-auto">
                            {t('terms.description')}
                        </p>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" className="w-full h-16 sm:h-24 fill-white">
                        <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z" />
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-16 sm:py-24 bg-white">
                <div className="container-wide relative z-10">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-[#fafafa] to-white border border-black/5 hover:shadow-xl hover:shadow-uniteda-emerald/5 transition-all duration-500"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-uniteda-emerald/10 flex items-center justify-center shrink-0 group-hover:bg-uniteda-emerald group-hover:scale-110 transition-all duration-500">
                                        <section.icon size={24} className="text-uniteda-emerald group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl sm:text-2xl font-black text-uniteda-emerald-dark mb-4 tracking-tight">
                                            {index + 1}. {t(section.titleKey)}
                                        </h2>
                                        <p className="text-muted-foreground font-medium leading-relaxed text-base sm:text-lg">
                                            {t(section.contentKey)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Business Identity Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-8 sm:p-12 rounded-[2.5rem] bg-uniteda-emerald-dark overflow-hidden"
                        >
                            <div className="absolute inset-0 neural-grid opacity-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-uniteda-gold/20 rounded-full blur-[80px] -ml-20 -mb-20" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <Building2 size={20} className="text-uniteda-gold" />
                                    <h3 className="text-xl font-black text-white uppercase tracking-wide">{t('terms.identity.title')}</h3>
                                </div>
                                <p className="text-white/60 font-medium mb-6">
                                    {t('terms.identity.description')}
                                </p>
                                <div className="space-y-3 text-white font-bold">
                                    <p>{t('terms.identity.company')}</p>
                                    <p className="text-white/70">{t('terms.identity.headquarters')}</p>
                                    <p className="text-uniteda-gold">{t('terms.identity.license')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
