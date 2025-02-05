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
    metadataBase: new URL('https://gartype.info'),
    title:'Gar-Type',
    description: 'Play Gar-Type, a free pixel art shooter game with intense action and humor. Defend Earth from the invasion of planet Gar in this retro-style arcade shooter.',
    alternates: {
      canonical: `https://gartype.info/${lang}`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}`])
      ),
    },
    category: 'game',
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