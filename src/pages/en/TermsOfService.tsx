
import SEOHead from '../../components/en/SEOHead';
import { Gamepad2 } from 'lucide-react';
// import { LanguageSelector } from '../../components/en/LanguageSelector';
export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service - Gar-Type Game"
        description="Read our terms of service for playing Gar-Type, including user conduct, intellectual property, and other important information."
        canonicalUrl="https://gartype.info/terms"
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

          </nav>


        </div>


      </div>
      <div className="min-h-screen pt-20 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and playing Gar-Type, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Game Rules and Fair Play</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Players must maintain fair play and good sportsmanship</li>
                <li>Cheating, hacking, or exploiting game mechanics is prohibited</li>
                <li>Respect other players and maintain appropriate conduct</li>
                <li>Multiple accounts or automated gameplay is not allowed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
              <p>All game content, including but not limited to graphics, code, music, and text, is protected by copyright laws and belongs to Gar-Type.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Content</h2>
              <p>Any content created or shared by users must be appropriate and not infringe on others' rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Termination</h2>
              <p>We reserve the right to terminate or suspend access to the game for violations of these terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer</h2>
              <p>The game is provided "as is" without warranties of any kind, either express or implied.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
              <p>For questions about these terms, please contact us at terms@gar-type.com</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}