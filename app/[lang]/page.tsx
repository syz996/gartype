import { HomePage } from '@/components/home-page';
import { languages } from '../i18n/settings';
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
      default: 'Gar-Type - Free Pixel Art Shooter Game | Play Now'
    },
    description: 'Play Gar-Type, a free pixel art shooter game with intense action and humor. Defend Earth from the invasion of planet Gar in this retro-style arcade shooter.',
    alternates: {
      canonical: `https://gartype.info/${lang}`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}`])
      ),
    },
    openGraph: {
      title: 'Gar-Type - Free Pixel Art Shooter Game',
      description: 'Play Gar-Type, a free pixel art shooter game with intense action and humor.',
      url: `https://gartype.info/${lang}`,
      siteName: 'Gar-Type',
      locale: lang,
      type: 'website',
      images: [{
        url: 'https://gartype.info/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gar-Type Game Screenshot',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gar-Type - Free Pixel Art Shooter Game',
      description: 'Play now! A free pixel art shooter game with intense action and humor.',
      images: [{
        url: 'https://gartype.info/twitter-image.jpg',
        alt: 'Gar-Type Game Screenshot',
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
  return <HomePage lang={lang} />;
}