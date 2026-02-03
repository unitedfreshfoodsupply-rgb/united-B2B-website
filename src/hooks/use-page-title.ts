import { useEffect } from 'react';
import { useUnifiedTranslation } from './use-unified-translation';

export const usePageTitle = (titleKey?: string, overrideTitle?: string) => {
    const { t } = useUnifiedTranslation();

    useEffect(() => {
        const brandName = t('common:app_name') || 'UNITED Supply Hub';
        const slogan = t('common:header.brand.slogan') || 'Supply Intelligence';

        let pageTitle = '';

        if (overrideTitle) {
            pageTitle = overrideTitle;
        } else if (titleKey) {
            // Try to get title from pages namespace
            const translatedTitle = t(`pages:${titleKey}`);
            if (translatedTitle && translatedTitle !== `pages:${titleKey}`) {
                pageTitle = translatedTitle;
            } else {
                // Fallback to titleKey if translation fails
                pageTitle = titleKey;
            }
        }

        if (pageTitle) {
            document.title = `${pageTitle} | ${brandName}`;
        } else {
            // Default Home/Landing Title
            document.title = `${brandName} | ${slogan}`;
        }
    }, [titleKey, overrideTitle, t]);
};
