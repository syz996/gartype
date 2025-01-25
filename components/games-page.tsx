"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Gamepad2, Star, Users, Trophy } from 'lucide-react';
import '../app/i18n/client';

export function GamesPage({ lang }: { lang: string }) {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    setMounted(true);
  }, [lang, i18n]);

  const games = [
    {
      title: 'Gar-Type',
      description: t('games.gartype.description', 'A pixel art shooter game with intense action and humor.'),
      image: 'https://placehold.co/600x400/1d1d1f/cccccc?text=Gar-Type',
      rating: 4.8,
      players: '10K+',
      category: t('games.categories.shooter', 'Shooter')
    },
    {
      title: 'Gar-Quest',
      description: t('games.garquest.description', 'An epic RPG adventure in the Gar universe.'),
      image: 'https://placehold.co/600x400/1d1d1f/cccccc?text=Gar-Quest',
      rating: 4.6,
      players: '5K+',
      category: t('games.categories.rpg', 'RPG')
    },
    {
      title: 'Gar-Puzzle',
      description: t('games.garpuzzle.description', 'Brain-teasing puzzles with a Gar twist.'),
      image: 'https://placehold.co/600x400/1d1d1f/cccccc?text=Gar-Puzzle',
      rating: 4.7,
      players: '8K+',
      category: t('games.categories.puzzle', 'Puzzle')
    }
  ];

  // 在客户端渲染之前返回一个占位内容
  if (!mounted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1d1d1f] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-gray-800 rounded mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-800 rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1d1d1f] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
            {t('games.title')}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('games.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Card 
              key={index}
              className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <img 
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                  <p className="text-sm text-gray-300">{game.category}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-300">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-300">{game.players}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-300">{t('games.ranked')}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}