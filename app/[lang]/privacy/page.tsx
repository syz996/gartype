import { PrivacyPage } from '@/components/privacy-page';
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
    title: 'Privacy Policy | Gar-Type',
    description: `Privacy policy for Gar-Type game in ${lang}. Learn about how we collect, use, and protect your personal information.`,
    alternates: {
      canonical: `https://gartype.info/${lang}/privacy`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}/privacy`])
      ),
    },
    openGraph: {
      title: 'Privacy Policy | Gar-Type',
      description: 'Privacy policy for Gar-Type game. Learn about how we collect, use, and protect your personal information.',
      url: `https://gartype.info/${lang}/privacy`,
      locale: lang,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
      },
    },
  };
}

export default function Page({ params: { lang } }: { params: { lang: string } }) {
  return <PrivacyPage lang={lang} />;
}