"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TowerControl as GameController, Globe } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languages } from '@/app/i18n/settings';
import '../../app/i18n/client';

export function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = pathname.split('/')[1];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1f]/30 backdrop-blur-lg border-b border-gray-800/50">
        <div className="h-16"></div>
      </nav>
    );
  }

  const navigation = [
    { name: t('nav.home'), href: `/${currentLang}` },
    { name: t('nav.games'), href: `/${currentLang}/games` },
    { name: t('nav.blog'), href: `/${currentLang}/blog` },
    { name: t('nav.about'), href: `/${currentLang}/about` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1f]/30 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${currentLang}`} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {/* <GameController className="h-6 w-6 text-white" /> */}
            <img src="logo.svg" width={48} height={16} alt="logo" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Gar-Type
            </span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'text-white border-b-2 border-purple-500'
                        : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-purple-500/50'
                    } px-1 py-2 text-sm font-medium transition-all duration-300`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">{t('nav.language')}</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1d1d1f] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
              {languages.map((lang) => {
                const href = pathname.replace(`/${currentLang}`, `/${lang.code}`);
                return (
                  <Link
                    key={lang.code}
                    href={href}
                    className={`${
                      currentLang === lang.code
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    } block px-4 py-2 text-sm transition-colors`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}