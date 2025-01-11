import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  lang?: string;
}

export default function SEOHead({ title, description, canonicalUrl, lang = 'en' }: SEOHeadProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}