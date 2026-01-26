import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { Shield, Lock, Eye, Mail } from "lucide-react";

export default function Privacy() {
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
                            <Shield size={14} />
                            <span className="text-xs font-bold tracking-widest uppercase">Privacy Protocol</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-uniteda-emerald-dark mb-8 tracking-tighter uppercase">
                            Privacy <span className="text-uniteda-gold">Policy</span>
                        </h1>

                        <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <Eye className="text-uniteda-gold" size={24} />
                                    1. Data Collection & Usage
                                </h2>
                                <p>
                                    UNITED is committed to protecting the privacy of our partners within the Egyptian market. We collect only the information necessary to facilitate local food supply procurement and business inquiries, specifically names, company details, contact information, and specific supply requirements provided via our RFQ and Contact forms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <Mail className="text-uniteda-gold" size={24} />
                                    2. Email Handling
                                </h2>
                                <p>
                                    Information submitted through our forms is transmitted directly to our sales and support teams via secure email protocols. We do not store this data in a public-facing database at this stage. Your data is used exclusively for professional communication regarding your specific requests.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-uniteda-emerald-dark flex items-center gap-3 mb-4 uppercase tracking-tight">
                                    <Lock className="text-uniteda-gold" size={24} />
                                    3. Hosting & Cookies
                                </h2>
                                <p>
                                    Our platform is hosted on secure enterprise infrastructure. We use minimal cookies essential for site functionality and performance optimization. We do not use third-party tracking cookies for advertising purposes.
                                </p>
                            </section>

                            <section className="p-8 rounded-3xl bg-uniteda-emerald/5 border border-uniteda-emerald/10 text-uniteda-emerald-dark">
                                <h2 className="text-xl font-black mb-4 uppercase tracking-tight">Contact Reference</h2>
                                <p className="text-sm font-bold opacity-70 mb-4">
                                    For any privacy-related inquiries or to request data deletion, please contact our administrative HUB:
                                </p>
                                <div className="space-y-2 font-black uppercase tracking-widest text-xs">
                                    <p>UNITED Food & Veggie Supply</p>
                                    <p>Administrative HUB: Cairo, Egypt</p>
                                    <p>support@united-ffv.com</p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
