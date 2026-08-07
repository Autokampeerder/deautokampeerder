import ProductCard from '../../components/ProductCard';
import UspBar from '../../components/UspBar';
import accessoiresData from '../../data/accessoires.json';
import Link from 'next/link';
import { Flame, TentTree, Snowflake, Compass } from 'lucide-react';

export const metadata = {
  title: 'Outdoor Gear & Accessoires | Skottelbraai, Luifels & Koelboxen',
  description: 'Maak je daktent avontuur compleet met de beste outdoor spullen. Vergelijk Cadac Skottelbraais, 270 graden luifels, parasols en koelboxen.',
};

export default function AccessoiresPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full" style={{ minHeight: '60vh' }}>
        <div className="hero-bg-accessoires"></div>
        <div className="container hero-content">
          <nav style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)' }}>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link> &gt; <span>Accessoires</span>
          </nav>
          <span className="badge">🍳 Het Buitenleven</span>
          <h1>Outdoor Gear & Accessoires</h1>
          <p>Van heerlijk buiten koken op een Cadac Skottelbraai tot schaduw creëren met een 270 graden luifel of parasol: ontdek de populairste camping gear voor jouw roadtrip.</p>
        </div>
      </section>

      <UspBar />

      <div className="container section">
        <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Essentiële Camping Gear</h2>
          </div>
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

        {/* INFORMATIE & GIDS */}
        <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '24px', border: '1px solid var(--border-light)', lineHeight: '1.8', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>De leukste outdoor gear voor autokampeerders</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Autokamperen draait om buiten leven. Na een dag rijden klap je je daktent uit, rol je de luifel uit en steek je de Skottelbraai aan. Met de juiste compacte spullen geniet je van maximaal comfort zonder dat je auto uit zijn voegen barst.
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Flame size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Buiten Koken</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Veelzijdig bakken, grillen en koken op gas met de compacte Cadac Safari Chef.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <TentTree size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Schaduw (Luifels)</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Creëer direct 270-graden bescherming rondom je auto tegen felle zon of regen.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Snowflake size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Compressor Koelbox</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Altijd ijskoude drankjes en vers vlees, ongeacht de buitentemperatuur, werkend op 12V.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Compass size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Compact Inpakken</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Stoelen, tafels en kookgerei dat speciaal is ontworpen om plat in de kofferbak te passen.</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Koken op de Camping: De iconische Cadac Skottelbraai</h3>
            <p>
              De <strong>Cadac Carri Chef 2 / Safari Chef</strong> is de absolute favoriet onder kampeerders. Dankzij de verwisselbare kookoppervlakken (grillplaat, bakplaat, paellapan en skottel) maak je binnen een handomdraai van ontbijt-pannenkoeken tot uitgebreide roerbakgerechten op gas. Alles past netjes in één kleine draagtas.
            </p>

            <h3 style={{ marginTop: 'var(--spacing-md)' }}>Schaduw en beschutting: Luifels vs. Parasols</h3>
            <p>
              Een <strong>270 graden luifel</strong> (zoals de Darche Eclipse of Offlander Awnings) wordt aan je dakdragers gemonteerd en waaiert in één beweging rondom de zijkant en achterkant van je auto uit. Dit biedt directe bescherming. Zoek je een lichtgewicht oplossing? Dan is een stevige windbestendige <strong>Bo-Camp parasol</strong> ideaal.
            </p>

            <h3 style={{ marginTop: 'var(--spacing-md)' }}>Eten & Drinken koel houden: Compressorkoelboxen</h3>
            <p>
              Vergeet smeltende koelelementen. Een 12V compressorkoelbox (zoals de <strong>Dometic CFX3</strong>) koelt tot wel -22°C, ongeacht de buitentemperatuur op de camping. Perfect in combinatie met een draagbare powerstation en zonnepanelen.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
