import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";

const partners = [
    { name: "Fairmont", logo: "/images/partners/fairmont.png" },
    { name: "Four Seasons", logo: "/images/partners/four-seasons.png" },
    { name: "Kempinski", logo: "/images/partners/kempinski.png" },
    { name: "Jaz Hotels", logo: "/images/partners/jaz.png" },
    { name: "Emaar", logo: "/images/partners/emaar.png" },
];

export function PartnerSection() {
    const { t } = useTranslation('home');
    const { isRTL } = useUnifiedTranslation();

    return (
        <section className="py-12 bg-white border-y border-black/5 overflow-hidden">
            <div className="container-wide mb-10">
                <p className="text-[10px] font-bold text-uniteda-emerald-dark/40 uppercase tracking-[0.25em] text-center">
                    {t('hero.partner_brief')}
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Double the array for seamless loops */}
                <motion.div
                    animate={{ x: isRTL ? ["0%", "50%"] : ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-8"
                >
                    {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center justify-center min-w-[120px] md:min-w-[150px]">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-14 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
