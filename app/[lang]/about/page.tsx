import { AboutPage } from '@/components/about-page';
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
      default: 'About | Gar-Type'
    },
    description: 'Learn about the team behind Gar-Type and our mission to create engaging pixel art games.',
    alternates: {
      canonical: `https://gartype.info/${lang}/about`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}/about`])
      ),
    },
    openGraph: {
      title: 'About | Gar-Type',
      description: 'Learn about the team behind Gar-Type and our mission.',
      url: `https://gartype.info/${lang}/about`,
      locale: lang,
      type: 'website',
      images: [{
        url: 'https://gartype.info/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Gar-Type Team',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About | Gar-Type',
      description: 'Learn about the team behind Gar-Type and our mission.',
      images: [{
        url: 'https://gartype.info/twitter-about.jpg',
        alt: 'Gar-Type Team',
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
  return <AboutPage lang={lang} />;
}