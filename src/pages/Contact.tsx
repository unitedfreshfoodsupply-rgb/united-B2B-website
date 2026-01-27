import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { t, i18n, isRTL } = useUnifiedTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Get values from .env or use placeholders for development
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default";
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default";
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                e.currentTarget,
                publicKey
            );

            setSubmitted(true);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError(t('contact.form.error_message') || 'Submission failed. Please contact support@united-ffv.com directly.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <Layout>
            <section className="relative min-h-[90vh] flex items-center pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-white">
                {/* Organic Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-[1000px] h-[1000px] bg-uniteda-emerald/10 rounded-full blur-[100px] -mr-96 rtl:-ml-96 rtl:-mr-0 -mt-96 pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />
                    <div className="absolute bottom-0 left-0 rtl:right-0 rtl:left-auto w-[800px] h-[800px] bg-uniteda-gold/10 rounded-full blur-[80px] -ml-48 rtl:-mr-48 rtl:-ml-0 -mb-48 pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />
                </div>

                <div className="container-wide relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
                        {/* Left Column: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-start"
                        >
                            <div className="flex items-center gap-2 mb-6 sm:mb-8">
                                <img src="/logo.webp" alt="Uniteda" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" width={24} height={24} />
                                <span className="text-[10px] sm:text-xs font-black text-uniteda-emerald uppercase tracking-[0.3em] sm:tracking-[0.4em]">{t('contact.label')}</span>
                            </div>

                            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-uniteda-emerald-dark mb-6 sm:mb-8 tracking-tighter uppercase leading-tight">
                                {t('contact.title_prefix')} <br className="hidden sm:block" />
                                <span className="text-uniteda-gold">{t('contact.title_highlight')}</span>
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium max-w-xl mb-10 sm:mb-12 leading-relaxed">
                                {t('contact.description')}
                            </p>

                            <div className="space-y-6 sm:space-y-8">
                                {[
                                    { icon: MapPin, title: "Cairo Administrative HUB", detail: "New Cairo, Egypt", infra: "Local Operations Center" },
                                    { icon: Mail, title: "Corporate Correspondence", detail: "support@united-ffv.com", infra: "Central Email Relay" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="flex gap-4 sm:gap-6 group"
                                    >
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 flex items-center justify-center text-uniteda-emerald group-hover:bg-uniteda-emerald group-hover:text-white transition-all duration-500 shrink-0">
                                            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="text-start">
                                            <div className="text-[10px] font-black text-uniteda-emerald/60 uppercase tracking-widest mb-1">{item.infra}</div>
                                            <h3 className="text-uniteda-emerald-dark font-black text-base sm:text-lg mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground text-sm sm:text-base">{item.detail}</p>
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
                            className="p-6 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[3rem] lg:rounded-[4rem] bg-[#fafafa] border border-black/5 shadow-2xl shadow-black/[0.02]"
                        >
                            <div className="flex items-center gap-3 mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-uniteda-emerald/5 border border-uniteda-emerald/10">
                                <div className="w-2 h-2 rounded-full bg-uniteda-emerald animate-pulse" />
                                <MessageSquare className="w-4 h-4 text-uniteda-emerald" />
                                <span className="text-xs sm:text-sm font-black text-uniteda-emerald-dark uppercase tracking-widest">{t('contact.status')}</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Honeypot field */}
                                <div className="hidden">
                                    <input type="text" name="_company_id_verification" tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('contact.form.entity_name')}</label>
                                        <Input name="entityName" className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-white border-black/5 px-4 sm:px-6 font-medium focus:border-uniteda-emerald/40 transition-all" placeholder={t('contact.form.entity_placeholder')} required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('contact.form.access_mail')}</label>
                                        <Input name="email" type="email" className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-white border-black/5 px-4 sm:px-6 font-medium focus:border-uniteda-emerald/40 transition-all" placeholder={t('contact.form.mail_placeholder')} required />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('contact.form.subject')}</label>
                                    <Input name="subject" className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-white border-black/5 px-4 sm:px-6 font-medium focus:border-uniteda-emerald/40 transition-all" placeholder={t('contact.form.subject_placeholder')} required />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">{t('contact.form.payload')}</label>
                                    <Textarea name="payload" className="min-h-[120px] sm:min-h-[150px] rounded-2xl sm:rounded-3xl bg-white border-black/5 p-4 sm:p-6 font-medium focus:border-uniteda-emerald/40 transition-all resize-none" placeholder={t('contact.form.payload_placeholder')} required />
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 ps-1">Full Name</label>
                                        <Input name="fullName" className="h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl bg-white border-black/5 px-4 sm:px-6 font-medium focus:border-uniteda-emerald/40 transition-all" placeholder="Enter your full name" required />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    size="xl"
                                    disabled={isSubmitting || submitted}
                                    className="w-full h-14 sm:h-16 lg:h-18 rounded-full bg-uniteda-emerald hover:bg-uniteda-emerald-dark text-white font-black text-base sm:text-lg lg:text-xl shadow-xl shadow-uniteda-emerald/20 transition-all hover:scale-105 active:scale-95 group"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">Processing <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></span>
                                    ) : submitted ? (
                                        <span className="flex items-center gap-2">Sent Successfully <CheckCircle2 className="w-5 h-5" /></span>
                                    ) : (
                                        <>
                                            {t('contact.form.submit')}
                                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ms-3 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform rtl:rotate-180" />
                                        </>
                                    )}
                                </Button>

                                {error && (
                                    <p className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-xs font-bold text-center">
                                        {error}
                                    </p>
                                )}
                                <p className="mt-6 text-[10px] text-center text-muted-foreground/60 font-medium leading-relaxed">
                                    By submitting this form, you agree to our <Link to="/terms" className="text-uniteda-emerald underline underline-offset-2">Terms of Service</Link> and <Link to="/privacy" className="text-uniteda-emerald underline underline-offset-2">Privacy Protocol</Link>.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout >
    );
}
