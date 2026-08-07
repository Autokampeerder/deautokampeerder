import ProductCard from '../../components/ProductCard';
import accessoiresData from '../../data/accessoires.json';
import Link from 'next/link';

export const metadata = {
  title: 'Outdoor Gear & Accessoires | Skottelbraai, Luifels & Koelboxen',
  description: 'Maak je daktent avontuur compleet met de beste outdoor spullen. Vergelijk Cadac Skottelbraais, 270 graden luifels, parasols en koelboxen.',
};

export default function AccessoiresPage() {
  return (
    <div className="container section" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
        <Link href="/">Home</Link> &gt; <span>Accessoires & Outdoor Gear</span>
      </nav>

      <h1>Outdoor Gear, Skottelbraai & Accessoires</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
        Van heerlijk buiten koken op een Cadac Skottelbraai tot schaduw creëren met een 270 graden luifel of parasol: ontdek de populairste camping gear voor jouw roadtrip.
      </p>

      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Populaire Camping Accessoires op Bol.com</h2>
        <div className="grid grid-cols-4">
          {accessoiresData.map((item) => (
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
        <h2>De leukste outdoor gear voor autokampeerders</h2>
        <p>
          Autokamperen draait om buiten leven. Na een dag rijden klap je je daktent uit, rol je de luifel uit en stak je de Skottelbraai aan. Met de juiste compacte spullen geniet je van maximaal comfort zonder dat je auto uit zijn voegen barst.
        </p>

        <h3>1. Koken op de Camping: De iconische Cadac Skottelbraai</h3>
        <p>
          De <strong>Cadac Carri Chef 2 / Safari Chef</strong> is de absolute favoriet onder kampeerders. Dankzij de verwisselbare kookoppervlakken (grillplaat, bakplaat, paellapan en skottel) maak je binnen een handomdraai van ontbijt-pannenkoeken tot uitgebreide roerbakgerechten op gas.
        </p>

        <h3>2. Schaduw en beschutting: Luifels vs. Parasols</h3>
        <p>
          Een <strong>270 graden luifel</strong> (zoals de Darche Eclipse of Offlander Awnings) wordt aan je dakdragers gemonteerd en waaiert in één beweging rondom de zijkant en achterkant van je auto uit. Dit biedt directe bescherming tegen zowel felle zon als regen. Zoek je een lichtgewicht oplossing? Dan is een stevige windbestendige <strong>Bo-Camp parasol</strong> ideaal.
        </p>

        <h3>3. Eten & Drinken koel houden: Compressorkoelboxen</h3>
        <p>
          Vergeet smeltende koelelementen. Een 12V compressorkoelbox (zoals de <strong>Dometic CFX3</strong>) koelt tot wel -22°C, ongeacht de buitentemperatuur op de camping.
        </p>
      </article>
    </div>
  );
}
