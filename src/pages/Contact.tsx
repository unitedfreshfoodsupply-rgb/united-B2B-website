import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation('pages');
    return (
        <Layout>
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-uniteda-emerald-dark">
                {/* Background Systems */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 neural-grid opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-uniteda-emerald-dark/50 to-uniteda-emerald-dark" />
                    <div className="scanline" />

                    {/* Animated Glows */}
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] glow-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] glow-pulse" />
                </div>

                <div className="container-wide relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-infra text-accent mb-6 tracking-[0.4em]">{t('contact.label')}</div>
                            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                                {t('contact.title_prefix')} <span className="text-accent underline decoration-white/10 underline-offset-[12px]">{t('contact.title_highlight')}</span>
                            </h1>
                            <p className="text-white/60 text-xl font-light max-w-xl mb-12 leading-relaxed">
                                {t('contact.description')}
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: MapPin, title: t('contact.items.egypt.title'), detail: t('contact.items.egypt.detail'), infra: t('contact.items.egypt.infra') },
                                    { icon: Globe, title: t('contact.items.uae.title'), detail: t('contact.items.uae.detail'), infra: t('contact.items.uae.infra') },
                                    { icon: Mail, title: t('contact.items.email.title'), detail: t('contact.items.email.detail'), infra: t('contact.items.email.infra') },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-uniteda-emerald-dark transition-all duration-500">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-infra text-accent/40 mb-1">{item.infra}</div>
                                            <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                            <p className="text-white/40 text-sm">{item.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="hud-border p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl"
                        >
                            <div className="flex items-center gap-2 mb-8 p-3 rounded-full border border-primary/20 bg-primary/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-infra text-accent">{t('contact.status')}</span>
                            </div>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-infra text-white/40">{t('contact.form.entity_name')}</label>
                                        <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/10 h-14 rounded-xl focus:border-accent/40 transition-all font-mono" placeholder={t('contact.form.entity_placeholder')} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-infra text-white/40">{t('contact.form.access_mail')}</label>
                                        <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/10 h-14 rounded-xl focus:border-accent/40 transition-all font-mono" placeholder={t('contact.form.mail_placeholder')} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-infra text-white/40">{t('contact.form.subject')}</label>
                                    <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/10 h-14 rounded-xl focus:border-accent/40 transition-all font-mono" placeholder={t('contact.form.subject_placeholder')} />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-infra text-white/40">{t('contact.form.payload')}</label>
                                    <Textarea className="bg-white/5 border-white/10 text-white placeholder:text-white/10 min-h-[150px] rounded-xl focus:border-accent/40 transition-all font-mono" placeholder={t('contact.form.payload_placeholder')} />
                                </div>

                                <Button variant="accent" size="xl" className="w-full h-16 rounded-xl font-infra text-lg hover:scale-[1.02] transition-all group">
                                    {t('contact.form.submit')}
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
