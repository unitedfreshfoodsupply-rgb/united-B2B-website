import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useUnifiedTranslation } from "@/hooks/use-unified-translation";

const WHATSAPP_NUMBER = "201008896683"; // Egyptian format without +
const DEFAULT_MESSAGE_EN = "Hello UNITED! I'm interested in your fresh produce supply services.";
const DEFAULT_MESSAGE_AR = "مرحباً بالمتحدة! أنا مهتم بخدمات توريد المنتجات الطازجة لديكم.";

export function WhatsAppFloat() {
    const { t, isRTL } = useUnifiedTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const defaultMessage = isRTL ? DEFAULT_MESSAGE_AR : DEFAULT_MESSAGE_EN;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-[9999]`}>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`absolute bottom-20 ${isRTL ? 'left-0' : 'right-0'} w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden`}
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <img
                                    src="/logo.webp"
                                    alt="UNITED"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-base">{isRTL ? 'المتحدة' : 'UNITED'}</h4>
                                <p className="text-white/80 text-xs font-medium">
                                    {isRTL ? 'عادةً نرد خلال دقائق' : 'Typically replies within minutes'}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-[#ECE5DD]">
                            <div className={`bg-white rounded-2xl ${isRTL ? 'rounded-tr-sm' : 'rounded-tl-sm'} p-4 shadow-sm max-w-[90%]`}>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {isRTL
                                        ? '👋 مرحباً! كيف يمكننا مساعدتك اليوم؟ تواصل معنا مباشرة عبر واتساب.'
                                        : '👋 Hi there! How can we help you today? Chat with us directly on WhatsApp.'
                                    }
                                </p>
                                <span className="text-[10px] text-gray-400 mt-2 block text-end">
                                    {new Date().toLocaleTimeString(isRTL ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-4 bg-white border-t border-black/5">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/30"
                            >
                                <MessageCircle size={20} />
                                {isRTL ? 'ابدأ المحادثة' : 'Start Conversation'}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 flex items-center justify-center hover:bg-[#1da851] transition-colors"
            >
                <AnimatePresence mode="wait">
                    {isExpanded ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="whatsapp"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-current">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse Animation */}
                {!isExpanded && (
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                )}
            </motion.button>
        </div>
    );
}
