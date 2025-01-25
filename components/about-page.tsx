"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Code, Gamepad2, Heart, Palette, Users } from 'lucide-react';
import '../app/i18n/client';

export function AboutPage({ lang }: { lang: string }) {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    setMounted(true);
  }, [lang, i18n]);

  const team = [
    {
      name: t('about.team.members.director.name'),
      role: t('about.team.members.director.role'),
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lumpy',
      description: t('about.team.members.director.description')
    },
    {
      name: t('about.team.members.artist.name'),
      role: t('about.team.members.artist.role'),
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=PixelArtist',
      description: t('about.team.members.artist.description')
    },
    {
      name: t('about.team.members.developer.name'),
      role: t('about.team.members.developer.role'),
      avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=CodeMaster',
      description: t('about.team.members.developer.description')
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[1, 2].map((i) => (
              <div key={i} className="h-40 bg-gray-800 rounded-lg"></div>
            ))}
          </div>
          <div className="h-8 w-48 bg-gray-800 rounded mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-800 rounded-lg"></div>
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
            {t('about.title')}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{t('about.mission.title')}</h2>
                <p className="text-gray-400">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>
          </Card>

          <Card className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Heart className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{t('about.values.title')}</h2>
                <p className="text-gray-400">
                  {t('about.values.description')}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="text-3xl font-bold text-center text-white mb-8">{t('about.team.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-purple-500 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6 text-center">
            <div className="p-3 bg-green-500/10 rounded-full w-12 h-12 mx-auto mb-4">
              <Code className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('about.features.openSource.title')}</h3>
            <p className="text-gray-400">
              {t('about.features.openSource.description')}
            </p>
          </Card>

          <Card className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6 text-center">
            <div className="p-3 bg-yellow-500/10 rounded-full w-12 h-12 mx-auto mb-4">
              <Palette className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('about.features.pixelPerfect.title')}</h3>
            <p className="text-gray-400">
              {t('about.features.pixelPerfect.description')}
            </p>
          </Card>

          <Card className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg p-6 text-center">
            <div className="p-3 bg-red-500/10 rounded-full w-12 h-12 mx-auto mb-4">
              <Users className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('about.features.community.title')}</h3>
            <p className="text-gray-400">
              {t('about.features.community.description')}
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}