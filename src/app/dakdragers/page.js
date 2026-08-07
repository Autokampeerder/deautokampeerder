import ProductCard from '../../components/ProductCard';
import UspBar from '../../components/UspBar';
import dakdragersData from '../../data/dakdragers.json';
import Link from 'next/link';
import { ShieldCheck, Wind, Gauge, PenTool } from 'lucide-react';

export const metadata = {
  title: 'Dakdragers voor Daktenten | Premium Draagsystemen',
  description: 'Vind de beste dakdragers voor jouw daktent. Gids over open vs gesloten railing, glad dak en Thule WingBar draagvermogen.',
};

export default function DakdragersPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full" style={{ minHeight: '60vh' }}>
        <div className="hero-bg-dakdragers"></div>
        <div className="container hero-content">
          <nav style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)' }}>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link> &gt; <span>Dakdragers</span>
          </nav>
          <span className="badge">🚗 Essentieel voor je Daktent</span>
          <h1>Premium Dakdragers Vergelijken</h1>
          <p>Stevige dakdragers vormen het fundament van je avontuur. Ontdek welke dragers geschikt zijn voor zware belastingen, fluisterstil zijn tijdens het rijden en naadloos passen op jouw type dak.</p>
        </div>
      </section>

      <UspBar />

      <div className="container section">
        <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Onze Topkeuzes Dakdragers</h2>
          </div>
          <div className="grid grid-cols-4">
            {dakdragersData.map((drager) => (
              <ProductCard 
                key={drager.id}
                title={drager.name}
                brand={drager.category}
                price={drager.price}
                image={drager.image}
                affiliateUrl={drager.link}
              />
            ))}
          </div>
        </section>

        {/* INFORMATIE & GIDS */}
        <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '24px', border: '1px solid var(--border-light)', lineHeight: '1.8', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Keuzehulp: Welke dakdragers heb je nodig?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Niet elke dakdrager is geschikt om een daktent te dragen. Omdat een daktent al snel tussen de 45 en 75 kilo weegt, stel je hoge eisen aan de stijfheid en het draagvermogen.
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <ShieldCheck size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Draagvermogen (Dynamisch)</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Zorg dat de dragers minimaal het gewicht van je daktent kunnen dragen tijdens het rijden.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Wind size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Aerodynamica</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Vleugelprofielen (zoals Thule WingBar) verminderen brandstofverbruik en windgeruis aanzienlijk.</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Bepaal het daksysteem van jouw auto</h3>
            <p>Controleer eerst hoe het dak van je voertuig is afgewerkt om de juiste voetset te kiezen:</p>
            <ul className="check-list">
              <li><strong>Open Dakrailing:</strong> Langwerpige stangen met ruimte ertussen. Zeer eenvoudig vast te klemmen.</li>
              <li><strong>Gesloten Railling:</strong> Profielen die vlak op het dak gemonteerd zitten zonder tussenruimte.</li>
              <li><strong>Fixpoints:</strong> Klepjes in het dak waaronder schroefgaten zitten voor specifieke voetsets.</li>
              <li><strong>Glad Dak:</strong> Geen railing aanwezig. Klem de dragers met rubberen voetjes in de deurposten.</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
