import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import pagesEn from './locales/en/pages.json';
import commonAr from './locales/ar/common.json';
import homeAr from './locales/ar/home.json';
import pagesAr from './locales/ar/pages.json';

// Define resources
export const resources = {
    en: {
        common: commonEn,
        home: homeEn,
        pages: pagesEn,
    },
    ar: {
        common: commonAr,
        home: homeAr,
        pages: pagesAr,
    },
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        defaultNS: 'common',
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
