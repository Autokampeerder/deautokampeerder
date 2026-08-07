import ProductCard from '../../components/ProductCard';
import dakdragersData from '../../data/dakdragers.json';
import Link from 'next/link';

export const metadata = {
  title: 'Dakdragers voor Daktenten | Thule & Menabo Vergelijken',
  description: 'Vind de beste dakdragers voor jouw daktent. Gids over open vs gesloten railing, glad dak en Thule WingBar draagvermogen.',
};

export default function DakdragersPage() {
  return (
    <div className="container section" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
        <Link href="/">Home</Link> &gt; <span>Dakdragers</span>
      </nav>

      <h1>Dakdragers voor Daktenten Vergelijken</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
        Stevige dakdragers vormen het fundament van je daktent-setup. Ontdek welke dragers geschikt zijn voor zware belastingen, stil zijn tijdens het rijden en passen op jouw type dak.
      </p>

      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Aanbevolen Dakdragers op Bol.com</h2>
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

      <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '16px', border: '1px solid var(--border-light)', lineHeight: '1.8' }}>
        <h2>Welke dakdragers heb je nodig voor een daktent?</h2>
        <p>
          Niet elke dakdrager is geschikt om een daktent te dragen. Omdat een daktent al snel tussen de 45 en 75 kilo weegt, stel je hoge eisen aan de stijfheid, het draagvermogen en het bevestigingssysteem van de dragers.
        </p>

        <h3>1. Bepaal het daksysteem van jouw auto</h3>
        <p>Om de juiste voetslot-set en stangen te kiezen, controleer je eerst hoe het dak van je voertuig is afgewerkt:</p>
        <ul>
          <li><strong>Open Dakrailing:</strong> Langwerpige stangen met ruimte tussen de stang en het autodak. Eenvoudig vast te klemmen met universele dragers (zoals Menabo of Thule Evo Raised Rail).</li>
          <li><strong>Geïntegreerde / Gesloten Railling:</strong> Langwerpige profielen die vlak op het dak gemonteerd zitten zonder tussenruimte.</li>
          <li><strong>Fixpoints (Vaste montagepunten):</strong> Klepjes in het dak waaronder schroefgaten zitten voor specifieke voetsets.</li>
          <li><strong>Glad Dak:</strong> Geen railing of punten aanwezig. De dakdrager klem je met specifieke rubberen voetjes in de deurposten.</li>
        </ul>

        <h3>2. Waarom kiezen voor Thule WingBar Evo?</h3>
        <p>
          De <strong>Thule WingBar Evo</strong> geldt wereldwijd als de goudstandaard voor autokampeerders. Dankzij het aerodynamische vliegtuigvleugelprofiel (WindDiffuser technologie) ontstaat er nauwelijks fluitend windgeruis tijdens het rijden, wat je brandstofverbruik aanzienlijk verlaagt vergeleken met traditionele vierkante stalen stangen.
        </p>
      </article>
    </div>
  );
}
