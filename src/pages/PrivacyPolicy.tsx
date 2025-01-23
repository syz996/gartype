import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';
import { Header } from '../components/Header';
import { Gamepad2 } from 'lucide-react';


export function PrivacyPolicy() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={t('privacy.seoTitle', 'Privacy Policy - Gar-Type')}
        description={t('privacy.seoDescription', 'Learn about how Gar-Type collects and protects your personal information. Read our privacy policy for detailed information about data usage and protection.')}
      />
      <Header type="privacy" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t('main.title')}
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {/* <LanguageSelector  /> */}
          </nav>
        </div>
      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8"> {t('privacy.privacy_policy')}</h1>
          <p className="text-2xl font-bold mb-8"> {t('privacy.last_updated')}</p>
          <p className="text-1xl  mb-8"> {t('privacy.welcome_message')}</p>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. {t('privacy.data_collection')}</h2>
              <p className="mb-4">{t('privacy.data_collection1')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">{t('privacy.device_info')}: </span>{t('privacy.device_info_item')}</li>
                <li><span className="font-bold">{t('privacy.game_data')}: </span>{t('privacy.game_data_item')}</li>
                <li><span className="font-bold">{t('privacy.user_feedback')}: </span>{t('privacy.user_feedback_item')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. {t('privacy.data_usage')}</h2>
              <p className="mb-4">{t('privacy.data_usage1')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">{t('privacy.improve_experience')}: </span>{t('privacy.improve_experience_item')}</li>
                <li><span className="font-bold">{t('privacy.analytics')}: </span>{t('privacy.analytics_item')}</li>
                <li><span className="font-bold">{t('privacy.customer_support')}: </span>{t('privacy.customer_support_item')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. {t('privacy.data_sharing')}</h2>
              <p className="mb-4">{t('privacy.data_sharing1')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">{t('privacy.legal_compliance')}: </span>{t('privacy.legal_compliance_item')}</li>
                <li><span className="font-bold">{t('privacy.business_change')}: </span>{t('privacy.business_change_item')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. {t('privacy.third_party_services')}</h2>
              <p className="mb-4">{t('privacy.third_party_services_item')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. {t('privacy.data_security')}</h2>
              <p className="mb-4">{t('privacy.data_security_item')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. {t('privacy.updates')}</h2>
              <p className="mb-4">{t('privacy.updates_item')}</p>
              <p className="mb-4">{t('privacy.contact')}: <span className="text-blue-300">support@gar-type.com</span></p>
            </section>
          </div>


        </div>
      </div>
    </div>
  );
}