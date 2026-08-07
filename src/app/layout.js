import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  metadataBase: new URL('https://deautokampeerder.nl'),
  title: {
    default: 'De Autokampeerder | Onafhankelijke Gids & Vergelijker voor Daktenten',
    template: '%s | De Autokampeerder',
  },
  description: 'Onafhankelijke vergelijkingsgids voor Daktenten, Dakdragers, Fietsendragers, Powerstations en Outdoor Gear in Nederland en België.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'De Autokampeerder | Onafhankelijke Gids voor Daktenten & Autokamperen',
    description: 'Vergelijk daktenten, bereken daklast en vind de beste autokampeer-uitrusting voor jouw roadtrip.',
    url: 'https://deautokampeerder.nl',
    siteName: 'De Autokampeerder',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://deautokampeerder.nl/#organization',
      name: 'De Autokampeerder',
      url: 'https://deautokampeerder.nl',
      logo: 'https://deautokampeerder.nl/images/logo.png',
      description: 'Onafhankelijk informatieplatform en vergelijkingsgids voor daktenten, dakdragers en autokampeer-uitrusting.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://deautokampeerder.nl/#website',
      url: 'https://deautokampeerder.nl',
      name: 'De Autokampeerder',
      publisher: {
        '@id': 'https://deautokampeerder.nl/#organization',
      },
      inLanguage: 'nl-NL',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
