import ProductCard from '../../components/ProductCard';
import UspBar from '../../components/UspBar';
import powerData from '../../data/power.json';
import Link from 'next/link';
import { BatteryCharging, Sun, Zap, PlugZap } from 'lucide-react';

export const metadata = {
  title: 'Powerstations & Accu\'s voor Kamperen | Bluetti, EcoFlow, Jackery',
  description: 'Blijf off-grid stroom houden tijdens je daktent trip. Vergelijk draagbare accu\'s en zonnepanelen van Bluetti, EcoFlow en Jackery.',
};

export default function PowerPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full" style={{ minHeight: '60vh' }}>
        <div className="hero-bg-accu"></div>
        <div className="container hero-content">
          <nav style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)' }}>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link> &gt; <span>Accu's & Power</span>
          </nav>
          <span className="badge">⚡ Nooit meer zonder stroom</span>
          <h1>Powerstations & Accu's voor Off-Grid Kamperen</h1>
          <p>Met een draagbare powerstation laad je je koelbox, verlichting, laptop en telefoon overal op zonder afhankelijk te zijn van een campingstekker. Blijf eindeloos off-grid.</p>
        </div>
      </section>

      <UspBar />

      <div className="container section">
        <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Beste Powerstations & Accu's</h2>
          </div>
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

        {/* INFORMATIE & GIDS */}
        <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '24px', border: '1px solid var(--border-light)', lineHeight: '1.8', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Keuzehulp: Off-grid stroom voor je daktent</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Wanneer je wildkampeert of op een natuurcamping staat, heb je geen 230V paal tot je beschikking. Een auto-accu leegtrekken met een 12V compressorkoelbox is gevaarlijk. Een draagbare powerstation lost dit elegant op.
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <BatteryCharging size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>LiFePO4 Cellen</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>De nieuwste batterijtechnologie die tot 10 jaar (3000+ cycli) meegaat zonder capaciteit te verliezen.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Sun size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Zonne-energie</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Koppel opvouwbare zonnepanelen om je powerstation overdag gratis weer helemaal op te laden.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Zap size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Piekvermogen</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Let op de continue en piek Wattage-output (bijv. 600W/1200W) om zwaardere apparaten te starten.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <PlugZap size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Opladen via Auto</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Tijdens het rijden naar je volgende bestemming laad je de accu vol via de 12V sigarettenaansteker.</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>LiFePO4 vs Traditionele Lithium-ion</h3>
            <p>
              Moderne topmerken zoals <strong>Bluetti (EB3A)</strong>, <strong>EcoFlow (River 2)</strong> en <strong>Anker (Solix)</strong> maken gebruik van LiFePO4 (Lithium IJzerfosfaat) batterijcellen. Deze gaan tot wel 3.000+ laadcycli mee (10 jaar dagelijks gebruik) en zijn vele malen veiliger en hittebestendiger dan oudere lithium-accu's. Dit is cruciaal voor de veiligheid in een hete auto.
            </p>

            <h3 style={{ marginTop: 'var(--spacing-md)' }}>De Juiste Capaciteit Kiezen</h3>
            <p>
              Voor een compressor koelbox (verbruik ca. 1-2 Ah/uur) en het opladen van telefoons en een laptop, is een capaciteit rond de <strong>500Wh tot 700Wh</strong> perfect voor 2 dagen off-grid zonder bij te laden. Heb je ook zonnepanelen aangesloten, dan kun je eindeloos op één plek blijven staan.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
