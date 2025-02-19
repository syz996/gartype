import { TermsPage } from '@/components/terms-page';
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
    title: 'Terms of Service | Gar-Type | Pixel shooter game | Play online for free',
    description: `Terms of service for Gar-Type game in ${lang}. Read about the rules, guidelines, and conditions for playing our game.`,
    alternates: {
      canonical: `https://gartype.info/${lang}/terms`,
      languages: Object.fromEntries(
        languages.map(l => [l.code, `https://gartype.info/${l.code}/terms`])
      ),
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
  return <TermsPage lang={lang} />;
}