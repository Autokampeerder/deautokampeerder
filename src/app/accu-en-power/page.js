import ProductCard from '../../components/ProductCard';
import powerData from '../../data/power.json';
import Link from 'next/link';

export const metadata = {
  title: 'Powerstations & Accu\'s voor Kamperen | Bluetti, EcoFlow, Jackery',
  description: 'Blijf off-grid stroom houden tijdens je daktent trip. Vergelijk draagbare accu\'s en zonnepanelen van Bluetti, EcoFlow en Jackery.',
};

export default function PowerPage() {
  return (
    <div className="container section" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
        <Link href="/">Home</Link> &gt; <span>Accu's & Power</span>
      </nav>

      <h1>Powerstations & Accu's voor Off-Grid Kamperen</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
        Met een draagbare powerstation (portable power station) laad je je koelbox, verlichting, laptop en telefoon overal op zonder afhankelijk te zijn van een campingstekker.
      </p>

      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Beste Powerstations & Accu's op Bol.com</h2>
        <div className="grid grid-cols-4">
          {powerData.map((item) => (
            <ProductCard 
              key={item.id}
              title={item.name}
              brand={item.category}
              price={item.price}
              image={item.image}
              affiliateUrl={item.link}
            />
          ))}
        </div>
      </section>

      <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '16px', border: '1px solid var(--border-light)', lineHeight: '1.8' }}>
        <h2>Waarom een Portable Powerstation onmisbaar is bij een daktent</h2>
        <p>
          Wanneer je wildkampeert of op een eenvoudige natuurcamping staat, heb je geen 230V paal tot je beschikking. Een auto-accu leegtrekken met een 12V compressorkoelbox is gevaarlijk (want dan start de auto niet meer). Een draagbare LiFePO4 powerstation lost dit probleem elegant op.
        </p>

        <h3>1. LiFePO4 vs Traditionele Lithium-ion</h3>
        <p>
          Moderne topmerken zoals <strong>Bluetti (EB3A)</strong>, <strong>EcoFlow (River 2)</strong> en <strong>Anker (Solix)</strong> maken gebruik van LiFePO4 (Lithium IJzerfosfaat) batterijcellen. Deze gaan tot wel 3.000+ laadcycli mee (10 jaar dagelijks gebruik) en zijn vele malen veiliger en hittebestendiger dan oudere lithium-accu's.
        </p>

        <h3>2. Opladen via 12V Auto of Zonnepanelen</h3>
        <p>
          Tijdens het rijden laad je de powerstation eenvoudig op via de 12V sigarettenaansteker in de auto. Sta je een paar dagen stil op één plek? Dan koppel je er een opvouwbaar zonnepaneel aan om gratis zonne-energie op te vangen.
        </p>
      </article>
    </div>
  );
}
