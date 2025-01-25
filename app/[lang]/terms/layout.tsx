import { Metadata } from 'next';
import { languages } from '../../i18n/settings';

export const metadata: Metadata = {
  title: 'Terms of Service | Gar-Type',
  description: 'Terms of service for Gar-Type game. Read about the rules, guidelines, and conditions for playing our pixel art shooter game.',
  alternates: {
    canonical: 'https://gartype.info/terms',
    languages: Object.fromEntries(
      languages.map(lang => [lang.code, `https://gartype.info/${lang.code}/terms`])
    ),
  },
  openGraph: {
    title: 'Terms of Service | Gar-Type',
    description: 'Terms of service for Gar-Type game. Read about the rules, guidelines, and conditions for playing our game.',
    url: 'https://gartype.info/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Gar-Type',
    description: 'Terms of service for Gar-Type game. Read about the rules, guidelines, and conditions for playing our game.',
  },
}; 

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}