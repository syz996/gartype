import '../globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/ui/navigation';
import { Analytics } from '@/components/analytics';
import { languages } from '../i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://gartype.info'),
  title: {
    template: '%s | Gar-Type',
    default: 'Gar-Type - Free Pixel Art Shooter Game | Play Now'
  },
  description: 'Play Gar-Type, a free pixel art shooter game with intense action and humor. Defend Earth from the invasion of planet Gar in this retro-style arcade shooter. Available in multiple languages.',
  keywords: ['pixel art game', 'shooter game', 'free online game', 'arcade game', 'indie game', 'Gar-Type', 'bullet hell', 'retro game', 'browser game', 'action game', 'pixel graphics', 'indie shooter'],
  authors: [{ name: 'Lumpy', url: 'https://gartype.info/about' }],
  creator: 'Lumpy',
  publisher: 'Gar-Type',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-site-verification', // 添加Google站长验证码
    yandex: 'your-yandex-verification', // 添加Yandex验证码
    bing: 'your-bing-verification' // 添加Bing验证码
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gartype.info',
    title: 'Gar-Type - Free Pixel Art Shooter Game | Play Now',
    description: 'Play Gar-Type, a free pixel art shooter game with intense action and humor. Defend Earth from the invasion of planet Gar in this retro-style arcade shooter.',
    siteName: 'Gar-Type',
    images: [{
      url: 'https://gartype.info/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Gar-Type Game Screenshot - Pixel Art Shooter Game',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gar-Type - Free Pixel Art Shooter Game',
    description: 'Play now! A free pixel art shooter game with intense action and humor. Available in multiple languages.',
    images: [{
      url: 'https://gartype.info/twitter-image.jpg',
      alt: 'Gar-Type Game Screenshot',
      width: 1200,
      height: 630,
    }],
    creator: '@gartype',
    site: '@gartype',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'notranslate': false,
    },
  },
  alternates: {
    canonical: 'https://gartype.info',
    languages: Object.fromEntries(
      languages.map(lang => [lang.code, `https://gartype.info/${lang.code}`])
    ),
  },
  category: 'game',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1d1d1f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}