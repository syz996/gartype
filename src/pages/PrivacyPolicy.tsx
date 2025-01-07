
import SEOHead from '../components/SEOHead';
import { Globe } from 'lucide-react';
import { type Language } from '../i18n';
import { useState } from 'react';
const languages = {
  en: 'English',
  zh: '中文'
} as const;

export default function PrivacyPolicy() {
  
  const [showLanguages, setShowLanguages] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');

  return (
    <>
      <SEOHead
        title="Privacy Policy - Gar-Type Game"
        description="Learn about how we collect, use, and protect your information while playing Gar-Type."
        canonicalUrl="https://gartype.info/privacy"
      />
      <div className="bg-gray-900 text-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
        {/* Navigation */}
        <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-400">Gar-Type</h1>
            <div className="flex items-center gap-6">
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="flex items-center gap-2 hover:text-green-400 transition"
                >
                  <Globe size={20} />
                  {languages[currentLang]}
                </button>
                {showLanguages && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl">
                    {Object.entries(languages).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrentLang(code as Language);
                          setShowLanguages(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-green-400 transition"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">When you play Gar-Type, we collect certain information to improve your gaming experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Game progress and scores</li>
                <li>Device information (browser type, operating system)</li>
                <li>Usage statistics and gameplay patterns</li>
                <li>Technical data for game optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve game performance and user experience</li>
                <li>Provide technical support and troubleshooting</li>
                <li>Send important game updates and announcements</li>
                <li>Analyze gameplay patterns for better game balancing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Analytics</h2>
              <p>We use cookies and Google Analytics to understand game usage patterns and improve our service. You can control cookie settings through your browser preferences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Updates to Privacy Policy</h2>
              <p>We may update this privacy policy periodically. We will notify you of any material changes through the game or website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>If you have questions about our privacy policy, please contact us at privacy@gar-type.com</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}