import { languages } from '../../i18n/settings';

export function generateStaticParams() {
  return languages.map(lang => ({
    lang: lang.code
  }));
}