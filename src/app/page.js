import ProductCard from '../components/ProductCard';
import UspBar from '../components/UspBar';
import FaqAccordion from '../components/FaqAccordion';
import daktentenData from '../data/daktenten.json';
import accessoiresData from '../data/accessoires.json';
import Link from 'next/link';

export default function Home() {
  const faqs = [
    { question: "Past een daktent op mijn auto?", answer: "In de meeste gevallen: ja! Zolang je auto dakdragers kan dragen en de dynamische daklast (tijdens het rijden) minimaal gelijk is aan het gewicht van de daktent (meestal tussen 45 en 70 kg)." },
    { question: "Hoe hard mag ik rijden met een daktent?", answer: "De meeste fabrikanten adviseren een maximumsnelheid van 100 tot 120 km/u, afhankelijk van het model." },
    { question: "Kies ik voor een Hardshell of een Softshell?", answer: "Hardshells zijn razendsnel op te zetten (vaak binnen 30 seconden). Softshells bieden vaak meer leefruimte en zijn lichter/goedkoper." },
    { question: "Zijn fietsendragers en daktenten te combineren?", answer: "Ja, absoluut! Een trekhaak-gemonteerde fietsendrager is de perfecte aanvulling op een daktent-setup, omdat het dak al bezet is." }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <span className="badge">🏕️ Jouw avontuur begint hier</span>
          <h1>Ontdek de Ultieme Vrijheid van Autokamperen</h1>
          <p>Onafhankelijk vergelijken van Daktenten, Dakdragers, Fietsendragers, Powerstations en Outdoor Gear op Bol.com.</p>
          <div className="flex gap-md" style={{flexWrap: 'wrap'}}>
            <Link href="/daktenten" className="btn btn-primary">Bekijk Daktenten</Link>
            <Link href="/dakdragers" className="btn btn-primary" style={{backgroundColor: 'var(--primary)'}}>Dakdragers & Gear</Link>
          </div>
        </div>
      </section>

      <UspBar />

      <div className="brands-strip">
        <div className="container brands-flex">
          <span>OFFLANDER</span>
          <span>THULE</span>
          <span>TREKKER</span>
          <span>ROOFTOP CABIN</span>
          <span>CADAC</span>
          <span>BLUETTI</span>
        </div>
      </div>

      {/* CATEGORY QUICK HUBS */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Ontdek onze 5 Categorieën</h2>
            <p>Vind direct alle benodigdheden voor jouw ideale autokampeertrip.</p>
          </div>
          <div className="grid grid-cols-4">
            <Link href="/daktenten" className="card" style={{ padding: 'var(--spacing-lg)', textCenter: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏕️</div>
              <h3>Daktenten</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Softshell & Hardshell modellen vergelijken.</p>
            </Link>

            <Link href="/dakdragers" className="card" style={{ padding: 'var(--spacing-lg)', textCenter: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚗</div>
              <h3>Dakdragers</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Thule WingBar, Menabo & pasvorm gidsen.</p>
            </Link>

            <Link href="/fietsendragers" className="card" style={{ padding: 'var(--spacing-lg)', textCenter: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚲</div>
              <h3>Fietsendragers</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Trekhaakdragers voor E-Bikes & mountainbikes.</p>
            </Link>

            <Link href="/accu-en-power" className="card" style={{ padding: 'var(--spacing-lg)', textCenter: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡</div>
              <h3>Accu's & Power</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bluetti, EcoFlow powerstations & solar.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* DAKTENTEN HIGHLIGHT */}
      <section id="aanbod" className="section">
        <div className="container">
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Populairste Daktenten</h2>
            <Link href="/daktenten" style={{fontWeight: 600, color: 'var(--secondary)'}}>Bekijk alle daktenten &rarr;</Link>
          </div>
          <div className="grid grid-cols-4">
            {daktentenData.map((product) => (
              <div style={{position: 'relative'}} key={product.id}>
                {product.id === 1 && <span className="card-tag">Beste Getest</span>}
                <ProductCard title={product.name} brand={product.category} price={product.price} image={product.image} affiliateUrl={product.link} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / INNOVATIE */}
      <section id="waarom" className="section section-bg-light">
        <div className="container">
          <div className="feature-block">
            <div className="feature-image">
              <img src="/images/rooftop-cabin-smart-top-3.png" alt="Land Cruiser met Daktent" />
            </div>
            <div className="feature-text">
              <h2>Topkwaliteit Materialen</h2>
              <p>De merken op ons platform staan garant voor jarenlang kampeerplezier onder alle weersomstandigheden.</p>
              <ul className="check-list">
                <li><strong>Ademend Polykatoen:</strong> Ripstop canvas voorkomt condensatie en is 100% waterdicht.</li>
                <li><strong>Robuuste Ritsen:</strong> SBS of YKK ritsen die modder en stof moeiteloos trotseren.</li>
                <li><strong>High-Density Matrassen:</strong> Minimaal 5.5cm dik geheugenschuim voor slaapcomfort als thuis.</li>
                <li><strong>Aerodynamisch Design:</strong> Geen belemmering en minimaal brandstofverbruik.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTDOOR GEAR & ACCESSOIRES */}
      <section id="accessoires" className="section">
        <div className="container">
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Uitgelichte Outdoor Gear & Skottelbraai</h2>
            <Link href="/accessoires" style={{fontWeight: 600, color: 'var(--secondary)'}}>Bekijk alle accessoires &rarr;</Link>
          </div>
          <div className="grid grid-cols-4">
            {accessoiresData.map((item) => (
              <ProductCard key={item.id} title={item.name} brand={item.category} price={item.price} image={item.image} affiliateUrl={item.link} />
            ))}
          </div>
        </div>
      </section>

      {/* SFEER GALERIJ */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Inspiratie uit het Wild</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1533575770077-052fa2c609fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Veelgestelde Vragen</h2>
            <p>Alles wat je moet weten voordat je de hoogte in gaat.</p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
