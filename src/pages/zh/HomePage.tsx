
import { Header } from '../../components/zh/Header';
import { GameSection } from '../../components/zh/GameSection';
import { VideoSection } from '../../components/zh/VideoSection';
import { AboutSection } from '../../components/zh/AboutSection';
import { HowPlay } from '../../components/zh/HowPlay'
import { FAQSection } from '../../components/zh/FAQSection';
import { ReviewSection } from '../../components/zh/ReviewSection';
import { SocialShare } from '../../components/zh/SocialShare';
import { Footer } from '../../components/zh/Footer';
import SEOHead from '../../components/zh/SEOHead';


export default function HomePage() {
    return (
        <>
             <SEOHead
                title="Gar-Type - Free Pixel Art Shooter Game"
                description="Play Gar-Type, a free pixel art shooter game with sci-fi humor. Control a prototype spaceship, defend Earth from invasion, and enjoy challenging boss battles!"
                canonicalUrl="https://gartype.info"
                lang='zh'
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
