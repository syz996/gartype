import React from 'react';

import { Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English' },
  // { code: 'fr', name: 'Français' },
  // { code: 'ru', name: 'Русский' },
  // { code: 'pt', name: 'Português' },
  // { code: 'ja', name: '日本語' },
  // { code: 'ko', name: '한국어' },
  // { code: 'ar', name: 'العربية' },
  // { code: 'it', name: 'Italiano' },
  { code: 'zh', name: '简体中文' },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const changeLanguage = (code: any) => {
    console.log(code, 'code1111')
    navigate('/'); // 跳转到 "about" 页面
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span>简体中文</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm ${lang.code === 'zh'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
                }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}