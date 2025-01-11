
import { Header } from '../../components/en/Header';
import { GameSection } from '../../components/en/GameSection';
import { VideoSection } from '../../components/en/VideoSection';
import { AboutSection } from '../../components/en/AboutSection';
import { HowPlay } from '../../components/en/HowPlay'
import { FAQSection } from '../../components/en/FAQSection';
import { ReviewSection } from '../../components/en/ReviewSection';
import { SocialShare } from '../../components/en/SocialShare';
import { Footer } from '../../components/en/Footer';
import SEOHead from '../../components/en/SEOHead';


export default function HomePage() {
    return (
        <>
             <SEOHead
                title="Gar-Type - Free Pixel Art Shooter Game"
                description="Play Gar-Type, a free pixel art shooter game with sci-fi humor. Control a prototype spaceship, defend Earth from invasion, and enjoy challenging boss battles!"
                canonicalUrl="https://gartype.info"
                lang='en'
            />
            
            {/* Schema.org structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "VideoGame",
                    "name": "Gar-Type",
                    "description": "A free pixel art shooter game with sci-fi humor",
                    "genre": ["Shooter", "Arcade", "Indie"],
                    "gamePlatform": ["Web Browser"],
                    "applicationCategory": "Game",
                    "operatingSystem": "Web Browser",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    }
                })}
            </script>
            <div className="min-h-screen bg-black text-white">
                <Header />
                <main>
                    <GameSection />
                    <VideoSection />
                    <AboutSection />
                    <HowPlay />
                    <FAQSection />
                    <ReviewSection />
                    <SocialShare />
                </main>
                <Footer />
            </div>
        </>
    );
}
