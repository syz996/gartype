"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { TowerControl as GameController } from "lucide-react";
import '../app/i18n/client';

export function PrivacyPage({ lang }: { lang: string }) {
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
          {t('privacy.privacy_policy')}
        </h1>
        <p className="text-gray-400 mb-4">{t('privacy.last_updated')}</p>
        <p className="text-gray-300 mb-8">{t('privacy.welcome_message')}</p>

        <div className="space-y-8">
          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              1. {t('privacy.data_collection')}
            </h2>
            <p className="text-gray-300 mb-4">{t('privacy.data_collection1')}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-bold">{t('privacy.device_info')}: </span>{t('privacy.device_info_item')}</li>
              <li><span className="font-bold">{t('privacy.game_data')}: </span>{t('privacy.game_data_item')}</li>
              <li><span className="font-bold">{t('privacy.user_feedback')}: </span>{t('privacy.user_feedback_item')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              2. {t('privacy.data_usage')}
            </h2>
            <p className="text-gray-300 mb-4">{t('privacy.data_usage1')}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-bold">{t('privacy.improve_experience')}: </span>{t('privacy.improve_experience_item')}</li>
              <li><span className="font-bold">{t('privacy.analytics')}: </span>{t('privacy.analytics_item')}</li>
              <li><span className="font-bold">{t('privacy.customer_support')}: </span>{t('privacy.customer_support_item')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              3. {t('privacy.data_sharing')}
            </h2>
            <p className="text-gray-300">{t('privacy.data_sharing1')}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><span className="font-bold">{t('privacy.legal_compliance')}: </span>{t('privacy.legal_compliance_item')}</li>
              <li><span className="font-bold">{t('privacy.business_change')}: </span>{t('privacy.business_change_item')}</li>
            </ul>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              4. {t('privacy.third_party_services')}
            </h2>
            <p className="text-gray-300">{t('privacy.third_party_services_item')}</p>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              5. {t('privacy.data_security')}
            </h2>
            <p className="text-gray-300 mb-4">{t('privacy.data_security_item')}</p>
          </section>

          <section className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
              6. {t('privacy.updates')}
            </h2>
            <p className="text-gray-300 mb-2">{t('privacy.updates_item')}</p>
            <p className="text-gray-300">{t('privacy.contact')}:  <span className="text-blue-300">support@gar-type.com</span></p>
          </section>
        </div>
      </div>
    </main>
  );
}