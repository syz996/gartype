import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';
import { Header } from '../components/Header';
import { Gamepad2 } from 'lucide-react';


export function TermsOfService() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead
        title={t('terms.seoTitle', 'Terms of Service - Gar-Type')}
        description={t('terms.seoDescription', 'Read Gar-Type\'s terms of service to understand the rules and guidelines for playing our game. Learn about user conduct and intellectual property rights.')}
      />
      <Header type="terms"  />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t('main.title')}
            </span>
          </div>
        </div>
      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8"> {t('terms.terms_policy')}</h1>
          <p className="text-2xl font-bold mb-8"> {t('terms.last_updated')}</p>
          <p className="text-1xl  mb-8"> {t('terms.welcome_message')}</p>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. {t('terms.user_terms')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('terms.user_terms1')}</li>
                <li>{t('terms.user_terms2')}</li>
                <li>{t('terms.user_terms3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. {t('terms.account_data')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('terms.account_data1')}</li>
                <li>{t('terms.account_data2')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. {t('terms.disclaimer')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('terms.disclaimer1')}</li>
                <li>{t('terms.disclaimer2')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. {t('terms.stop_agree')}</h2>
              <p>{t('terms.stop_agree1')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. {t('terms.change_update')}</h2>
              <p className="mb-4">{t('terms.update')}</p>
              <p className="mb-4">{t('terms.contact')}: <span className="text-blue-300">support@gar-type.com</span></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}