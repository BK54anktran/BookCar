import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationVI from './locales/vi/translation.json';
import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';
import translationZH from './locales/zh/translation.json';
import translationRU from './locales/ru/translation.json';
import translationFR from './locales/fr/translation.json';
import translationJA from './locales/ja/translation.json';

const resources = {
  vi: { translation: translationVI },
  en: { translation: translationEN },
  ko: { translation: translationKO },
  zh: { translation: translationZH },
  ru: { translation: translationRU },
  fr: { translation: translationFR },
  ja: { translation: translationJA },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'vi', // ✅ tự động lưu và load
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
