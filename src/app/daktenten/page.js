import ProductCard from '../../components/ProductCard';
import daktentenData from '../../data/daktenten.json';
import Link from 'next/link';

export const metadata = {
  title: 'Beste Daktenten 2026 | Hardshell & Softshell Vergelijken',
  description: 'Vergelijk onafhankelijk de beste daktenten voor jouw auto. Uitgebreide gids over hardshell vs softshell, daklast berekenen en montage.',
};

export default function DaktentenPage() {
  return (
    <div className="container section" style={{ paddingTop: 'var(--spacing-xl)' }}>
      {/* BREADCRUMB */}
      <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
        <Link href="/">Home</Link> &gt; <span>Daktenten</span>
      </nav>

      <h1>Daktenten Vergelijken & Kopen (2026)</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
        Een daktent biedt de ultieme vrijheid voor elke car-camping trip. Binnen enkele minuten klap je een comfortabele slaapplek uit op het dak van je auto, droog en beschermd tegen de ondergrond.
      </p>

      {/* PRODUCT GRID */}
      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Populairste Daktent Modellen op Bol.com</h2>
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

      {/* SEO & BUYING GUIDE CONTENT */}
      <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '16px', border: '1px solid var(--border-light)', lineHeight: '1.8' }}>
        <h2>Waar let je op bij het kopen van een daktent?</h2>
        <p>
          Het aanbod aan autodaktenten is de afgelopen jaren enorm gegroeid. Of je nu met een kleine hatchback, SUV of 4x4 op pad gaat: er is vrijwel altijd een passende oplossing. Bij het kiezen van het juiste model spelen drie hoofdfactoren een rol: het type tent (Hardshell vs. Softshell), de maximale dynamische daklast van je auto, en de gewenste leefruimte.
        </p>

        <h3>1. Hardshell vs. Softshell: Wat is het verschil?</h3>
        <p>
          <strong>Hardshell Daktenten:</strong> Deze tenten klappen op in een strakke aluminium of kunststof koffer op het dak. Het grootste voordeel is de supersnelle opzettijd (vaak binnen 30 tot 60 seconden dankzij gasveren) en de aerodynamische vorm tijdens het rijden. Ideaal voor trekkers die elke nacht op een andere plek slapen.
        </p>
        <p>
          <strong>Softshell Daktenten:</strong> Dit zijn de bekende opvouwbare tenten met een beschermhoes. Ze nemen ingeklapt minder dakoppervlak in beslag, maar klappen uit tot een ruim matras buiten de contouren van de auto. Softshells bieden vaak meer leefruimte voor een scherpere prijs.
        </p>

        <h3>2. Hoe bereken je de dynamische daklast van je auto?</h3>
        <p>
          Een van de meest gestelde vragen is of een zware daktent wel op het dak van een normale personenauto kan. Hierbij maken we onderscheid tussen twee begrippen:
        </p>
        <ul>
          <li><strong>Dynamische daklast:</strong> Het maximale gewicht dat het autodak mag dragen <em>tijdens het rijden</em>. Dit ligt bij de meeste auto's tussen de 50 en 75 kg. Je daktent + dakdragers mogen samen niet zwaarder zijn dan deze waarde.</li>
          <li><strong>Statische daklast:</strong> Het gewicht dat de auto mag dragen wanneer hij <em>stilstaat</em>. Dit is vele malen hoger (vaak 300 tot 400 kg), omdat het gewicht gelijkmatig verdeeld wordt over de carrosseriepilaren. Je kunt er dus probleemloos met twee of meer volwassenen in slapen!</li>
        </ul>

        <h3>3. Essentiële accessoires voor je daktent-setup</h3>
        <p>
          Om jouw autokampeeravontuur compleet te maken raden we aan om te investeren in een goede <strong>anti-condensmat</strong> (mesh matras onderlaag), stevige <strong>Thule WingBar dakdragers</strong> en eventueel een 12V draagbare powerstation voor je koelbox en verlichting.
        </p>
      </article>
    </div>
  );
}
