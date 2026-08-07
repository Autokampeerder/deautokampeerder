import ProductCard from '../../components/ProductCard';
import UspBar from '../../components/UspBar';
import daktentenData from '../../data/daktenten.json';
import Link from 'next/link';
import { Tent, Weight, Droplets, Clock } from 'lucide-react';

export const metadata = {
  title: 'Beste Daktenten 2026 | Hardshell & Softshell Vergelijken',
  description: 'Vergelijk onafhankelijk de beste daktenten voor jouw auto. Uitgebreide gids over hardshell vs softshell, daklast berekenen en montage.',
};

export default function DaktentenPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full" style={{ minHeight: '60vh' }}>
        <div className="hero-bg-daktenten"></div>
        <div className="container hero-content">
          <nav style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)' }}>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link> &gt; <span>Daktenten</span>
          </nav>
          <span className="badge">🏕️ Ultieme Vrijheid</span>
          <h1>Daktenten Vergelijken & Kopen</h1>
          <p>Binnen enkele minuten klap je een comfortabele slaapplek uit op het dak van je auto, droog en beschermd tegen de ondergrond. Ontdek onze topkeuzes.</p>
        </div>
      </section>

      <UspBar />

      <div className="container section">
        <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Populairste Daktent Modellen</h2>
          </div>
          <div className="grid grid-cols-4">
            {daktentenData.map((tent) => (
              <ProductCard 
                key={tent.id}
                title={tent.name}
                brand={tent.category}
                price={tent.price}
                image={tent.image}
                affiliateUrl={tent.link}
              />
            ))}
          </div>
        </section>

        {/* INFORMATIE & GIDS */}
        <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '24px', border: '1px solid var(--border-light)', lineHeight: '1.8', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Waar let je op bij het kopen van een daktent?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Het aanbod aan autodaktenten is enorm gegroeid. Of je nu met een hatchback of 4x4 op pad gaat: er is altijd een passende oplossing. Let op het type tent, de daklast en de gewenste leefruimte.
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Clock size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Opzettijd</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hardshells staan vaak binnen 60 seconden, ideaal voor rondtrekken.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Tent size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Leefruimte</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Softshells bieden meer ruimte en klappen uit over de zijkant van de auto.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Weight size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Daklast</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Zorg dat de tent + dragers de dynamische daklast van je auto niet overschrijden.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Droplets size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Weerbestendigheid</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Kies voor dik, ademend polykatoen met een stevige regenhoes tegen condens.</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Hardshell vs. Softshell</h3>
            <p>
              <strong>Hardshell Daktenten:</strong> Klappen op in een strakke koffer op het dak. Supersnelle opzettijd en aerodynamische vorm. Ideaal voor wie veel rijdt.
            </p>
            <p>
              <strong>Softshell Daktenten:</strong> Opvouwbare tenten met beschermhoes. Nemen ingeklapt minder dakoppervlak in beslag en bieden meer slaapruimte voor een lagere prijs.
            </p>

            <h3 style={{ marginTop: 'var(--spacing-md)' }}>De Daklast Berekenen</h3>
            <ul>
              <li><strong>Dynamische daklast:</strong> Maximaal gewicht tijdens het rijden (vaak 50-75 kg). Tent + dragers mogen dit niet overschrijden.</li>
              <li><strong>Statische daklast:</strong> Gewicht tijdens stilstand (vaak 300+ kg). Twee volwassenen in de tent is voor het dak geen enkel probleem.</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
