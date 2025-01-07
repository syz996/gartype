import { useState } from 'react';
import { Youtube, Share2, ThumbsUp, Gamepad2, Info, Book, Globe, Star } from 'lucide-react';
import { translations, type Language } from '../i18n';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const languages = {
    en: 'English',
    zh: '中文'
} as const;

function HomePage() {
    const [showLanguages, setShowLanguages] = useState(false);
    const [currentLang, setCurrentLang] = useState<Language>('en');

    const t = translations[currentLang];

    const [isIframeVisible, setIframeVisible] = useState(false); // 初始状态为隐藏

    return (
        <>
            <SEOHead
                title="Gar-Type - Free Pixel Art Shooter Game"
                description="Play Gar-Type, a free pixel art shooter game with sci-fi humor. Control a prototype spaceship, defend Earth from invasion, and enjoy challenging boss battles!"
                canonicalUrl="https://gartype.info"
                lang={currentLang}
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
            
            <div className="min-h-screen bg-gray-900 text-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                {/* Navigation */}
                <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
                    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-green-400">Gar-Type</h1>
                        <div className="flex items-center gap-6">
                            <a href="#game" className="hover:text-green-400 transition">{t.nav.play}</a>
                            <a href="#about" className="hover:text-green-400 transition">{t.nav.about}</a>
                            <a href="#videos" className="hover:text-green-400 transition">{t.nav.videos}</a>
                            <a href="#reviews" className="hover:text-green-400 transition">{t.nav.reviews}</a>
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

                {/* Game Section */}
                <section id="game" className="pt-20 pb-10">
                    <div className="container mx-auto px-4">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex justify-center items-center">
                            <iframe
                                src="https://html-classic.itch.zone/html/12341048/index.html"
                                className="w-[960px] h-[600px] rounded-lg mb-4"
                                title="Gar-Type Game"
                                style={{ display: isIframeVisible ? 'block' : 'none' }} />
                            <div style={{ display: !isIframeVisible ? 'block' : 'none' }} className="w-[960px] rounded-lg mb-4">
                                <img src='https://img.itch.zone/aW1nLzE5MDg2MDQ1LnBuZw==/original/MhbkMZ.png' width='100%'></img>
                                <img src='https://img.itch.zone/aW1nLzE5MDc4Mzc1LnBuZw==/original/9E%2BivZ.png' width='100%'></img>
                                <button className="bg-green-500 hover:bg-green-600 transition mt-8 px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto"
                                    onClick={() => setIframeVisible(!isIframeVisible)}>
                                    <Gamepad2 size={20} />
                                    {t.game.playNow}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-10 bg-gray-800/50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <Info size={24} className="text-green-400" />
                            <h2 className="text-2xl font-bold">{t.about.title}</h2>
                        </div>
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>{t.about.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-700/50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-green-400">{t.about.features.title}</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {t.about.features.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-700/50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-green-400">{t.about.technical.title}</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {t.about.technical.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Videos Section */}
                <section id="videos" className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <Youtube size={24} className="text-green-400" />
                            <h2 className="text-2xl font-bold">{t.videos.title}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'FQSPCvJDbls',
                                'Ji045usI72U',
                                'i-9hIsEsSSo'
                            ].map((videoId) => (
                                <div key={videoId} className="aspect-video">
                                    <iframe
                                        className="w-full h-full rounded-lg"
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="Gameplay Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Play */}
                <section className="py-10 bg-gray-800/50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <Book size={24} className="text-green-400" />
                            <h2 className="text-2xl font-bold">{t.howToPlay.title}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3">{t.howToPlay.controls.title}</h3>
                                <ul className="space-y-2">
                                    {t.howToPlay.controls.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3">{t.howToPlay.combat.title}</h3>
                                <ul className="space-y-2">
                                    {t.howToPlay.combat.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gray-700/50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3">{t.howToPlay.powerups.title}</h3>
                                <ul className="space-y-2">
                                    {t.howToPlay.powerups.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <ThumbsUp size={24} className="text-green-400" />
                            <h2 className="text-2xl font-bold">{t.reviews.title}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                                        <span className="font-bold text-xl">A</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold">Alex Gaming</h3>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-300">
                                            The unique combination of Garfield theme with sci-fi shooting mechanics makes this game stand out. The pixel art style and humor are perfectly executed, and the boss battles provide just the right level of challenge. The smooth controls and great soundtrack complete the package!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                                        <span className="font-bold text-xl">S</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold">Sarah Pixel</h3>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-300">
                                            As a fan of both retro games and unique indie titles, Gar-Type hits all the right notes. The power-up system adds strategic depth, and the progressive difficulty keeps you engaged. The pixel art is stunning, especially during boss fights!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Share */}
                <section className="py-10 bg-gray-800/50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Share2 size={24} className="text-green-400" />
                            <h2 className="text-2xl font-bold">{t.share.title}</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['#GarType', '#PixelArt', '#IndieGame', '#Shooter', '#Gaming', '#RetroGaming', '#PixelShooter'].map((tag) => (
                                <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 py-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-sm text-gray-400">
                                {t.footer.rights}
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="text-gray-400 hover:text-green-400 transition">
                                    <Link to="/privacy">
                                        {t.footer.privacy}
                                    </Link>
                                </button>
                                <button
                                    className="text-gray-400 hover:text-green-400 transition">
                                    <Link to="/terms">
                                        {t.footer.terms}
                                    </Link>
                                </button>

                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default HomePage;