import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface TranslationContextType {
    t: any;
    i18n: any;
    isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider: React.FC<{ children: ReactNode; namespace?: string }> = ({
    children,
    namespace = "common"
}) => {
    // Load all namespaces. order: common first for Layout, then pages and home for fallback.
    const { t, i18n } = useTranslation(["common", "pages", "home"]);
    const isRTL = i18n.dir() === "rtl";

    // Use a memoized context value
    const value = useMemo(() => ({
        // The 't' provided by useTranslation(["ns1", "ns2"]) already handles fallbacks in order.
        // We wrap it to ensure it can handle keys that might explicitly include a namespace.
        // The 't' provided by useTranslation(["ns1", "ns2"]) already handles fallbacks in order
        // if fallbackNS is configured in i18next or if we pass them here.
        t: (key: string, options?: any) => t(key, { ...options, ns: ["common", "pages", "home"] }),
        i18n,
        isRTL
    }), [t, i18n, isRTL]);

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useUnifiedTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useUnifiedTranslation must be used within a TranslationProvider");
    }
    return context;
};
