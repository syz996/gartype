'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { languages } from './settings';

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => {
    return import(`./locales/${language}.json`);
  }))
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: languages.map(l => l.code),
    interpolation: {
      escapeValue: false
    },
    returnObjects: true,
    react: {
      useSuspense: false,
      transWrapTextNodes: 'span'
    }
  });

export default i18next;