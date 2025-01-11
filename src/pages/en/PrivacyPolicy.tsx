
import SEOHead from '../../components/en/SEOHead';
import { Gamepad2 } from 'lucide-react';
// import { LanguageSelector } from '../../components/en/LanguageSelector';

export default function PrivacyPolicy() {


  return (
    <>
      <SEOHead
        title="Privacy Policy - Gar-Type Game"
        description="Learn about how we collect, use, and protect your information while playing Gar-Type."
        canonicalUrl="https://gartype.info/privacy"
         lang='en'
      />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Gar Type
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {/* <LanguageSelector  /> */}
          </nav>
        </div>
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

          
          </div>
        </div>
      </div>
    </>
  );
}