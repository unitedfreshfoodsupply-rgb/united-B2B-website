import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Facebook, Instagram, Share2 } from "lucide-react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "201008896683";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61587570560424";
const INSTAGRAM_URL = "https://www.instagram.com/unitedfreshfoodsupply/";

const DEFAULT_MESSAGE_EN = "Hello UNITED! I'm interested in your fresh produce supply services.";
const DEFAULT_MESSAGE_AR = "مرحباً بالمتحدة! أنا مهتم بخدمات توريد المنتجات الطازجة لديكم.";

export function FloatingSocials() {
    const { t, isRTL } = useUnifiedTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isChatExpanded, setIsChatExpanded] = useState(false);

    const defaultMessage = isRTL ? DEFAULT_MESSAGE_AR : DEFAULT_MESSAGE_EN;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

    const socialLinks = [
        {
            name: "WhatsApp",
            icon: MessageCircle,
            color: "bg-[#25D366]",
            shadow: "shadow-[#25D366]/40",
            onClick: () => setIsChatExpanded(true),
        },
        {
            name: "Facebook",
            icon: Facebook,
            color: "bg-[#1877F2]",
            shadow: "shadow-[#1877F2]/40",
            href: FACEBOOK_URL,
        },
        {
            name: "Instagram",
            icon: Instagram,
            color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
            shadow: "shadow-[#ee2a7b]/40",
            href: INSTAGRAM_URL,
        },
    ];

    return (
        <div className={cn(
            "fixed bottom-6 z-[9999] flex flex-col items-center gap-4",
            isRTL ? "left-6" : "right-6"
        )}>
            {/* WhatsApp Chat Popup */}
            <AnimatePresence>
                {isChatExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className={cn(
                            "absolute bottom-20 w-72 sm:w-80 bg-white rounded-[2rem] shadow-2xl border border-black/5 overflow-hidden",
                            isRTL ? "left-0" : "right-0"
                        )}
                    >
                        <div className="bg-[#25D366] p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <img src="/logo.webp" alt="U" className="w-6 h-6 object-contain" />
                            </div>
                            <div className="flex-1 text-start">
                                <h4 className="text-white font-bold text-sm">{isRTL ? 'المتحدة' : 'UNITED'}</h4>
                                <p className="text-white/80 text-[10px] font-medium">Typically replies within minutes</p>
                            </div>
                            <button onClick={() => setIsChatExpanded(false)} className="text-white/80 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                        <div className="p-4 bg-[#f0f2f5] text-start">
                            <div className={cn("bg-white p-3 rounded-2xl shadow-sm text-sm text-gray-700 max-w-[90%]", isRTL ? "rounded-tr-none" : "rounded-tl-none")}>
                                {isRTL ? '👋 مرحباً! كيف يمكننا مساعدتك؟' : '👋 Hi! How can we help you today?'}
                            </div>
                        </div>
                        <div className="p-3 bg-white border-t border-black/5">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg transition-all">
                                <MessageCircle size={18} />
                                {isRTL ? 'ابدأ المحادثة' : 'Start Chat'}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Social Icons Stack */}
            <div className="flex flex-col-reverse items-center gap-3">
                {/* Main Toggle */}
                <motion.button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        if (isOpen) setIsChatExpanded(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                        "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500",
                        isOpen ? "bg-uniteda-emerald-dark text-white rotate-90" : "bg-white text-uniteda-emerald border border-black/5"
                    )}
                >
                    {isOpen ? <X size={24} /> : <Share2 size={24} className="animate-pulse" />}
                    {!isOpen && <span className="absolute inset-0 rounded-full bg-uniteda-emerald/10 animate-ping" />}
                </motion.button>

                {/* Expanded Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {socialLinks.map((social, i) => (
                                <motion.div
                                    key={social.name}
                                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.5 }}
                                    transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    {social.href ? (
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95",
                                                social.color,
                                                social.shadow
                                            )}
                                            title={social.name}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ) : (
                                        <button
                                            onClick={social.onClick}
                                            className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95",
                                                social.color,
                                                social.shadow
                                            )}
                                            title={social.name}
                                        >
                                            <social.icon size={20} />
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
