import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Scale, FileText, Globe, AlertCircle } from "lucide-react";

export default function Terms() {
    const { t } = useUnifiedTranslation();

    return (
        <Layout>
            <section className="relative pt-32 pb-24 overflow-hidden bg-white">
                <div className="container-wide relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald mb-8">
                            <Scale size={14} />
                            <span className="text-xs font-bold tracking-widest uppercase">Institutional Framework</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-uniteda-emerald-dark mb-8 tracking-tighter uppercase">
                            Terms of <span className="text-uniteda-gold">Service</span>
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <FileText className="text-uniteda-gold" size={24} />
                                    1. Service Overview
                                </h2>
                                <p>
                                    By accessing the UNITED platform, you agree to these terms. UNITED provides a high-efficiency procurement interface for professional food supply services, focusing on B2B agricultural supply chains within the Egyptian market.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <Globe className="text-uniteda-gold" size={24} />
                                    2. Procurement Requests
                                </h2>
                                <p>
                                    All RFQs submitted via our platform constitute an invitation to treat and not a binding contract until formal procurement agreements are signed. UNITED reserves the right to verify business credentials before fulfilling supply requests.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <AlertCircle className="text-uniteda-gold" size={24} />
                                    3. Liability & Compliance
                                </h2>
                                <p>
                                    UNITED operates in strict compliance with international food safety standards (HACCP, ISO 22000). While we strive for 100% platform availability and logistical accuracy, we are not liable for indirect losses resulting from site downtime or supply chain disruptions beyond our HUB control.
                                </p>
                            </section>

                            <section className="p-8 rounded-3xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald-dark">
                                <h2 className="text-xl font-black mb-4 uppercase tracking-tight">Business Identity</h2>
                                <p className="text-sm font-bold opacity-70 mb-4">
                                    UNITED is a registered enterprise specialized in Advanced Agricultural Supply. All branding, logic streams, and industrial designs on this site are the intellectual property of UNITED.
                                </p>
                                <div className="space-y-2 font-black uppercase tracking-widest text-xs">
                                    <p>UNITED Food & Veggie Supply HUB</p>
                                    <p>Corporate Headquarters: Cairo, Egypt</p>
                                    <p>Procurement Licensing: EGY-2026-LOCAL</p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
