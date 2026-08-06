import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'De Autokampeerder | De ultieme vrijheid op het dak van je auto',
  description: 'Vergelijk de beste daktenten, vind handige tips en begin jouw outdoor avontuur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
