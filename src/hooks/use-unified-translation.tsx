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
    const { t, i18n } = useTranslation(["common", "pages", "home"]);
    const isRTL = i18n.dir() === "rtl";
    const [bundleVersion, setBundleVersion] = React.useState(0);

    // Watch for bundle loads to force re-render when background loading completes
    React.useEffect(() => {
        const handleLoaded = () => setBundleVersion(prev => prev + 1);
        i18n.on('loaded', handleLoaded);
        return () => i18n.off('loaded', handleLoaded);
    }, [i18n]);

    // Use a memoized context value
    const value = useMemo(() => ({
        t: (key: string, options?: any) => t(key, { ...options, ns: ["common", "pages", "home"] }),
        i18n,
        isRTL
    }), [t, i18n, isRTL, bundleVersion]);

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
