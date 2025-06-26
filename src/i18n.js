import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import các file dịch ngôn ngữ
import translationVI from './locales/vi/translation.json';
import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';
import translationZH from './locales/zh/translation.json';
import translationRU from './locales/ru/translation.json';
import translationFR from './locales/fr/translation.json';
import translationJA from './locales/ja/translation.json';
import translationUZ from './locales/uz/translation.json';

// Khai báo resource (từ khóa ngắn gọn: 'vi', 'en'...)
const resources = {
  vi: { translation: translationVI },
  en: { translation: translationEN },
  ko: { translation: translationKO },
  zh: { translation: translationZH },
  ru: { translation: translationRU },
  fr: { translation: translationFR },
  ja: { translation: translationJA },
  uz: { translation: translationUZ },
};

// Ưu tiên lấy từ localStorage, sau đó đến navigator.language, cuối cùng fallback là 'vi'
const defaultLang =
  localStorage.getItem('language') ||
  navigator.language?.split('-')[0] ||
  'vi';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLang,
    fallbackLng: 'en',
    supportedLngs: ['vi', 'en', 'ko', 'zh', 'ru', 'fr', 'ja', 'uz'],
    load: 'languageOnly', // Chỉ dùng phần đầu: 'vi' thay vì 'vi-VN'
    interpolation: {
      escapeValue: false, // React đã tự xử lý XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;
