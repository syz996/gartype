import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';
import { Header } from '../components/Header';
import { GameSection } from '../components/GameSection';
import { VideoSection } from '../components/VideoSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { ReviewSection } from '../components/ReviewSection';
import { SocialShare } from '../components/SocialShare';
import { Footer } from '../components/Footer';

function MainLayout() {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead title={t('about.seoTitle', 'Gar-Type - Free Pixel Art Shooter Game')}
        description={t('about.seoDescription', 'Play Gar-Type, a free pixel art shooter game with sci-fi humor. Control a prototype spaceship, defend Earth from invasion, and enjoy challenging boss battles!')} />
      <Header type="" />
      <main>
        <GameSection />
        <VideoSection />
        <AboutSection />
        <FAQSection />
        <ReviewSection />
        <SocialShare />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;