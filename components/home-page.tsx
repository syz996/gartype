"use client";

import { useEffect, useState } from 'react';
import { Twitter, Instagram, Youtube, Shield, Gift, Rocket, Facebook, Gamepad2, Maximize2, Minimize2, X, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../app/i18n/client';

export function HomePage({ lang }: { lang: string }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 'gameplay',
      title: 'videos.gameplay',
      description: 'videos.gameplayDesc',
      url: 'FQSPCvJDbls'
    },
    {
      id: 'strategies',
      title: 'videos.strategies',
      description: 'videos.strategiesDesc',
      url: 'Ji045usI72U'
    },
    {
      id: 'tips',
      title: 'videos.tips',
      description: 'videos.tipsDesc',
      url: 'i-9hIsEsSSo'
    }
  ];

  useEffect(() => {
    const initI18n = async () => {
      if (i18n.language !== lang) {
        await i18n.changeLanguage(lang);
      }
      setIsLoaded(true);
    };

    initI18n();

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [lang, i18n]);

  const toggleFullscreen = async () => {
    try {
      const gameContainer = document.getElementById('game-container');
      if (!gameContainer) return;

      if (!document.fullscreenElement) {
        await gameContainer.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };




  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : [];
  };

  if (!isLoaded) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <main className="text-white min-h-screen bg-gradient-to-b from-[#000000] to-[#1d1d1f] relative">
      {/* Left side social share and links bar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-r-lg border-r border-t border-b border-gray-800/20">
        {/* Share buttons */}


        {/* Follow buttons */}
        <div className="w-full">
          <p className="text-xs text-gray-400 mb-2 text-center">Share</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/80 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/80 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/80 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/80 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {showGame ? (
        <div
          id="game-container"
          className="fixed inset-0 z-50 bg-black flex flex-col"
        >
          <div className="flex justify-end items-center gap-4 p-4 bg-gray-900/50">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-gray-800 hover:bg-purple-500/20 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-6 h-6 text-gray-300" />
              ) : (
                <Maximize2 className="w-6 h-6 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setShowGame(false)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-red-500/20 transition-colors"
              aria-label="Close game"
            >
              <X className="w-6 h-6 text-gray-300" />
            </button>
          </div>
          <iframe
            src="https://html-classic.itch.zone/html/12341048/index.html"
            className="flex-1 w-full border-0"
            allow="fullscreen; autoplay"
          />
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto px-6 md:px-24">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center mb-32">
              <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 neon-text mb-8">
                {t('hero.title')}
              </h1>
              <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed">
                {t('hero.description')}
              </p>
              <button
                onClick={() => setShowGame(true)}
                className="neon-button group relative px-12 py-6 text-white rounded-lg font-semibold text-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-1 bg-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow" />

                    {/* Icon background */}
                    <div className="relative w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <Gamepad2 className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    {t('hero.playButton')}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Videos Section */}
          <section className="py-20 bg-[#1d1d1f]/30 backdrop-blur-lg rounded-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('sections.videos')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="card-hover bg-gray-800/50 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideo(video.url)}
                >
                  <h3 className="text-xl font-semibold mb-4">{t(video.title)}</h3>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group">
                    <img
                      src={`https://img.youtube.com/vi/${video.url}/maxresdefault.jpg`}
                      alt={t(video.title)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-4 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Animated border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow [animation-duration:3s]" />

                        {/* Play button background */}
                        <div className="relative w-16 h-16 bg-[#1d1d1f] rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 border border-white/20">
                          {/* Play icon */}
                          <div className="relative ml-1">
                            <div className="absolute -inset-2 bg-white/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Play className="w-8 h-8 text-white/90" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400">{t(video.description)}</p>
                </Card>
              ))}
            </div>

            {/* Video Modal */}
            {activeVideo && (
              <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                onClick={() => setActiveVideo(null)}
              >
                <div className="relative w-full max-w-6xl aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    className="absolute -top-12 right-0 text-white hover:text-purple-500 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo(null);
                    }}
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* How to Play Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {t('sections.howToPlay')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover bg-gray-800/50 p-6">
                <Shield className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{t('howToPlay.guide.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('howToPlay.guide.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="card-hover bg-gray-800/50 p-6">
                <Rocket className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{t('howToPlay.combat.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('howToPlay.combat.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="card-hover bg-gray-800/50 p-6">
                <Gift className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{t('howToPlay.powerups.title')}</h3>
                <ul className="space-y-2 text-gray-300">
                  {getTranslatedArray('howToPlay.powerups.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('sections.faq')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Object.entries(t('faq.questions', { returnObjects: true }) || {}).map(([key, question], index) => (
                <Card key={index} className="card-hover bg-gray-800/50 p-6">
                  <h3 className="text-xl font-semibold mb-4">{question as string}</h3>
                  <p className="text-gray-300">{t(`faq.answers.${key.replace('q', 'a')}`)}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-20 bg-[#1d1d1f]/30 backdrop-blur-lg rounded-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('sections.reviews')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: 'PixelWarrior99',
                  rating: 5,
                  review: t('reviews.review1'),
                  color: 'blue',
                  seed: 'PixelWarrior99'
                },
                {
                  name: 'RetroGamerX',
                  rating: 5,
                  review: t('reviews.review2'),
                  color: 'green',
                  seed: 'RetroGamerX'
                },
                {
                  name: 'BulletHellFan',
                  rating: 4,
                  review: t('reviews.review3'),
                  color: 'red',
                  seed: 'BulletHellFan'
                },
                {
                  name: 'IndieLover',
                  rating: 4,
                  review: t('reviews.review4'),
                  color: 'purple',
                  seed: 'IndieLover'
                },
                {
                  name: 'PixelWarrior99',
                  rating: 5,
                  review: t('reviews.review5'),
                  color: 'blue',
                  seed: 'PixelWarrior99'
                },
                {
                  name: 'RetroGamerX',
                  rating: 5,
                  review: t('reviews.review6'),
                  color: 'green',
                  seed: 'RetroGamerX'
                },
                {
                  name: 'BulletHellFan',
                  rating: 4,
                  review: t('reviews.review7'),
                  color: 'red',
                  seed: 'BulletHellFan'
                },
                {
                  name: 'IndieLover',
                  rating: 4,
                  review: t('reviews.review8'),
                  color: 'purple',
                  seed: 'IndieLover'
                },
                {
                  name: 'PixelWarrior99',
                  rating: 5,
                  review: t('reviews.review9'),
                  color: 'blue',
                  seed: 'PixelWarrior99'
                },
                {
                  name: 'RetroGamerX',
                  rating: 5,
                  review: t('reviews.review10'),
                  color: 'green',
                  seed: 'RetroGamerX'
                },
                {
                  name: 'BulletHellFan',
                  rating: 4,
                  review: t('reviews.review11'),
                  color: 'red',
                  seed: 'BulletHellFan'
                },
                {
                  name: 'IndieLover',
                  rating: 4,
                  review: t('reviews.review12'),
                  color: 'purple',
                  seed: 'IndieLover'
                },

              ].map((review, index) => (
                <Card key={index} className="card-hover bg-[#0D1117] p-6 transform transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-${review.color}-500 flex items-center justify-center overflow-hidden`}>
                      <img
                        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${review.seed}`}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{review.name}</h3>
                      <div className="flex gap-1">
                        {"★".repeat(review.rating).split("").map((star, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{review.review}</p>
                </Card>
              ))}
            </div>
          </section>



          {/* Footer */}
          <footer className="py-8 border-t border-gray-800/50">
            <div className="text-center text-gray-400">
              <p className="mb-4">{t('footer.rights')}</p>
              <div className="flex justify-center gap-4 mb-4">
                <Link href="https://colorblockgames.online/" className="hover:text-purple-500 transition-colors">
                  Color Block Games
                </Link>
              </div>
              <div className="flex justify-center gap-4">
                <Link href={`/${lang}/terms`} className="hover:text-purple-500 transition-colors">
                  {t('footer.terms')}
                </Link>
                <Link href={`/${lang}/privacy`} className="hover:text-purple-500 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    </main>
  );
}