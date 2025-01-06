import en from './en';
import zh from './zh';

export const translations = {
  en,
  zh,
  // Add other languages here
  fr: en, // Placeholder for French
  ru: en, // Placeholder for Russian
  ja: en, // Placeholder for Japanese
  ko: en, // Placeholder for Korean
  ar: en  // Placeholder for Arabic
};

export type Language = keyof typeof translations;