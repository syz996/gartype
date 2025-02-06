import '../globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/ui/navigation';
import { Analytics } from '@/components/analytics';
import { languages } from '../i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://gartype.info'),
  title: 'Gar-Type',
  description: 'Gar-Type is a free online shooting game, experience the exciting space shooting battle! Pilot your spaceship to fight off alien invaders and enjoy a retro pixel-style arcade shooter. No need to download, start now, challenge the highest score!',
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Gar-Type",
    "description": "Gar-Type is a free online shooting game, experience the exciting space shooting battle! Pilot your spaceship to fight off alien invaders and enjoy a retro pixel-style arcade shooter. No need to download, start now, challenge the highest score!",
    "genre": ["Shooter", "Action"],
    "playMode": "SinglePlayer",
    "operatingSystem": ["Windows", "macOS", "HTML5"],
    "url": "https://gartype.info",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1280"
    }
  };

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} min-h-screen bg-black`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}