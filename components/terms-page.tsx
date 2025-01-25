"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { TowerControl as GameController } from "lucide-react";
import '../app/i18n/client';

export function TermsPage({ lang }: { lang: string }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1d1d1f] text-white">
      <nav className="flex justify-between items-center p-4 md:p-6 bg-[#1d1d1f]/30 backdrop-blur-lg">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <GameController className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Gar-Type
          </span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
          {t('terms.terms_policy')}
        </h1>
        <p className="text-gray-400 mb-8">{t('terms.last_updated')}</p>
        <p className="text-gray-300 mb-8">{t('terms.welcome_message')}</p>

        <div className="space-y-8">
          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              1. {t('terms.user_terms')}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>{t('terms.user_terms1')}</li>
              <li>{t('terms.user_terms2')}</li>
              <li>{t('terms.user_terms3')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              2. {t('terms.account_data')}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>{t('terms.account_data1')}</li>
              <li>{t('terms.account_data2')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              3. {t('terms.disclaimer')}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>{t('terms.disclaimer1')}</li>
              <li>{t('terms.disclaimer2')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              4. {t('terms.stop_agree')}
            </h2>
            <p className="text-gray-300">{t('terms.stop_agree1')}</p>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              5. {t('terms.change_update')}
            </h2>
            <p className="text-gray-300 mb-2">{t('terms.update')}</p>
            <p className="text-gray-300">{t('terms.contact')}: <span className="text-blue-300">support@gar-type.com</span></p>
          </section>

        </div>
      </div>
    </main>
  );
}