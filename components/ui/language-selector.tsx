"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { languages } from '@/app/i18n/settings';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = pathname.split('/')[1];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (langCode: string) => {
    const newPathname = pathname.replace(`/${currentLang}`, `/${langCode}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative language-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#1d1d1f] border border-gray-800/20 shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                currentLang === lang.code ? 'text-white' : 'text-gray-400'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}