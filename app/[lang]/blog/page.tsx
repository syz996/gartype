import { BlogPage } from '@/components/blog-page';
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
      default: 'Blog | Gar-Type'
    },
    description: 'Read the latest news, updates, and insights about Gar-Type and our game development journey.',
    alternates: {
      canonical: `https://gartype.info/${lang}/blog`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}/blog`])
      ),
    },
    openGraph: {
      title: 'Blog | Gar-Type',
      description: 'Read the latest news, updates, and insights about Gar-Type.',
      url: `https://gartype.info/${lang}/blog`,
      locale: lang,
      type: 'website',
      images: [{
        url: 'https://gartype.info/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Gar-Type Blog',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog | Gar-Type',
      description: 'Read the latest news, updates, and insights about Gar-Type.',
      images: [{
        url: 'https://gartype.info/twitter-blog.jpg',
        alt: 'Gar-Type Blog',
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
  return <BlogPage lang={lang} />;
}