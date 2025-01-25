import { Metadata } from 'next';
import { languages } from '../../i18n/settings';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gar-Type',
  description: 'Privacy policy for Gar-Type game. Learn about how we collect, use, and protect your personal information while playing our pixel art shooter game.',
  alternates: {
    canonical: 'https://gartype.info/privacy',
    languages: Object.fromEntries(
      languages.map(lang => [lang.code, `https://gartype.info/${lang.code}/privacy`])
    ),
  },
  openGraph: {
    title: 'Privacy Policy | Gar-Type',
    description: 'Privacy policy for Gar-Type game. Learn about how we collect, use, and protect your personal information.',
    url: 'https://gartype.info/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Gar-Type',
    description: 'Privacy policy for Gar-Type game. Learn about how we collect, use, and protect your personal information.',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}