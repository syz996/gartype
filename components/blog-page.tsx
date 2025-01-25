"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';
import '../app/i18n/client';

export function BlogPage({ lang }: { lang: string }) {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    setMounted(true);
  }, [lang, i18n]);

  const posts = [
    {
      title: t('posts.title1'),
      excerpt: t('posts.excerpt1'),
      image: 'https://placehold.co/800x400/1d1d1f/cccccc?text=Making+of+Gar-Type',
      date: '2024-03-20',
      readTime: '5 min',
      author: 'Lumpy'
    },
    {
      title: t('posts.title2'),
      excerpt: t('posts.excerpt2'),
      image: 'https://placehold.co/800x400/1d1d1f/cccccc?text=Pixel+Art',
      date: '2024-03-15',
      readTime: '8 min',
      author: 'PixelArtist'
    },
    {
      title: t('posts.title3'),
      excerpt: t('posts.excerpt3'),
      image: 'https://placehold.co/800x400/1d1d1f/cccccc?text=Community',
      date: '2024-03-10',
      readTime: '6 min',
      author: 'Community Team'
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
          <div className="grid grid-cols-1 gap-8">
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
            {t('blog.title')}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="card-hover bg-[#1d1d1f]/30 backdrop-blur-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t('blog.date')}: {post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{t('blog.readTime')}: {post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{t('blog.author')}: {post.author}</span>
                    </div>
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