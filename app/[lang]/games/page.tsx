import { GamesPage } from '@/components/games-page';
import { languages } from '../../i18n/settings';
import { Metadata } from 'next';

type Props = {
  params: { lang: string }
};

export function generateStaticParams() {
  return languages.map(lang => ({
    lang: lang.code
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang;
  
  return {
    title: {
      template: '%s | Gar-Type',
      default: 'Popular Games | Gar-Type'
    },
    description: 'Discover our collection of free pixel art games. From shooters to platformers, find your next favorite retro-style game.',
    alternates: {
      canonical: `https://gartype.info/${lang}/games`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}/games`])
      ),
    },
    openGraph: {
      title: 'Popular Games | Gar-Type',
      description: 'Discover our collection of free pixel art games.',
      url: `https://gartype.info/${lang}/games`,
      locale: lang,
      type: 'website',
      images: [{
        url: 'https://gartype.info/og-games.jpg',
        width: 1200,
        height: 630,
        alt: 'Gar-Type Games Collection',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Popular Games | Gar-Type',
      description: 'Discover our collection of free pixel art games.',
      images: [{
        url: 'https://gartype.info/twitter-games.jpg',
        alt: 'Gar-Type Games Collection',
      }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function Page({ params: { lang } }: { params: { lang: string } }) {
  return <GamesPage lang={lang} />;
}