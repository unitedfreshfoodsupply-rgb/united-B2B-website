import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, ShieldAlert, Cpu, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FeatureStandby() {
    const { t } = useTranslation('pages');
    return (
        <Layout>
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />

                <div className="container-wide relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="mb-8 relative inline-block">
                            <div className="w-24 h-24 rounded-3xl bg-primary/5 flex items-center justify-center text-primary relative z-10">
                                <Settings className="w-12 h-12 animate-[spin_8s_linear_infinite]" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold animate-pulse">
                                {t('feature_standby.badge')}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-primary/20 blur-2xl -z-10" />
                        </div>

                        <div className="text-infra text-accent mb-4 tracking-[0.5em]">{t('feature_standby.label')}</div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                            {t('feature_standby.title_prefix')} <span className="text-primary/40">{t('feature_standby.title_highlight')}</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                            {t('feature_standby.description')}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
                            <div className="hud-border p-4 rounded-2xl bg-muted/20 text-left">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldAlert className="w-4 h-4 text-accent" />
                                    <span className="text-[10px] font-mono text-foreground/40 uppercase">{t('feature_standby.protection.label')}</span>
                                </div>
                                <div className="text-sm font-bold">{t('feature_standby.protection.value')}</div>
                            </div>
                            <div className="hud-border p-4 rounded-2xl bg-muted/20 text-left">
                                <div className="flex items-center gap-3 mb-2">
                                    <Cpu className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-mono text-foreground/40 uppercase">{t('feature_standby.status.label')}</span>
                                </div>
                                <div className="text-sm font-bold">{t('feature_standby.status.value')}</div>
                            </div>
                        </div>

                        <Button variant="outline" size="xl" className="rounded-2xl px-12 font-infra group" asChild>
                            <Link to="/">
                                <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
                                {t('feature_standby.return_btn')}
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
