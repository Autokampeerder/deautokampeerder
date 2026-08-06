import ProductCard from '../components/ProductCard';
import UspBar from '../components/UspBar';
import FaqAccordion from '../components/FaqAccordion';
import productsData from '../data/products.json';
import accessoriesData from '../data/accessories.json';

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
          <h1>Ontdek de Ultieme Vrijheid van een Daktent</h1>
          <p>Vergelijk onafhankelijk de beste daktenten, dakdragers en fietsendragers. Vind de scherpste deals en lees handige tips voor je volgende roadtrip.</p>
          <div className="flex gap-md" style={{flexWrap: 'wrap'}}>
            <a href="#aanbod" className="btn btn-primary">Bekijk Daktenten</a>
            <a href="#accessoires" className="btn btn-primary" style={{backgroundColor: 'var(--primary)'}}>Fietsendragers & Gear</a>
          </div>
        </div>
      </section>

      <UspBar />

      <div className="brands-strip">
        <div className="container brands-flex">
          <span>THULE</span>
          <span>SHEEPIE</span>
          <span>DARE TO BE DIFFERENT</span>
          <span>FJORDSEN</span>
          <span>AUTOHOME</span>
        </div>
      </div>

      {/* STAPPENPLAN */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header">
            <h2>In 3 stappen on the road</h2>
            <p>Jouw ultieme roadtrip-setup is makkelijker geregeld dan je denkt.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Check je Daklast</h3>
              <p>Controleer de dynamische daklast van je auto (meestal 50-75kg) en kies de juiste Thule dakdragers.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Kies je Tent</h3>
              <p>Ga je voor het gemak van een Hardshell, of de ruimte van een opvouwbare Softshell?</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Maak het compleet</h3>
              <p>Voeg een fietsendrager en luifel toe voor de ultieme outdoor ervaring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAKTENTEN AANBOD */}
      <section id="aanbod" className="section">
        <div className="container">
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Uitgelichte Daktenten</h2>
            <a href="#" style={{fontWeight: 600, color: 'var(--secondary)'}}>Bekijk alle modellen &rarr;</a>
          </div>
          <div className="grid grid-cols-3">
            {productsData.map((product) => (
              <div style={{position: 'relative'}} key={product.id}>
                {product.id === 1 && <span className="card-tag">Beste Getest 2026</span>}
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO / EXPERIENCE SECTION */}
      <section className="video-section">
        <div className="video-overlay"></div>
        <div className="container video-content">
          <h2>Ervaar de Vrijheid</h2>
          <p>Kijk hoe de Thule Approach M binnen 3 minuten slaapklaar is op een verlaten bergpas in Noorwegen.</p>
          <button className="play-btn">▶ Bekijk Video</button>
        </div>
      </section>

      {/* FEATURES / INNOVATIE */}
      <section id="waarom" className="section">
        <div className="container">
          <div className="feature-block">
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1504280741562-fd0e12315105?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Materialen en Innovatie" />
            </div>
            <div className="feature-text">
              <h2>Topkwaliteit Materialen</h2>
              <p>De merken die wij aanbevelen staan garant voor jarenlang kampeerplezier onder alle weersomstandigheden. Een daktent is een investering in vrijheid.</p>
              <ul className="check-list">
                <li><strong>Ademend Polykatoen:</strong> 300g/m2 ripstop canvas voorkomt condensatie en is 100% waterdicht.</li>
                <li><strong>Robuuste Ritsen:</strong> SBS of YKK ritsen die modder en stof moeiteloos trotseren.</li>
                <li><strong>High-Density Matrassen:</strong> Minimaal 6cm dik traagschuim voor slaapcomfort als thuis.</li>
                <li><strong>Aerodynamisch Design:</strong> ABS of Aluminium hardshells minimaliseren brandstofverbruik.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AANVERWANTE SPULLEN / CROSS-SELL */}
      <section id="accessoires" className="section section-bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Maak je Setup Compleet</h2>
            <p>Dakdragers, fietsendragers en luifels: alles voor de ultieme roadtrip.</p>
          </div>
          <div className="grid grid-cols-4">
            {accessoriesData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* SFEER GALERIJ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Inspiratie uit het Wild</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
            <div className="gallery-item"><img src="https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sfeer" /></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Ervaringen van Kampeerders</h2>
          </div>
          <div className="grid grid-cols-3">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Dankzij de keuzehulp de perfecte Thule daktent gevonden. Installatie was een fluitje van een cent op onze Volvo!"</p>
              <strong>- Mark & Lisa</strong>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"We zochten ook nog een goede fietsendrager. Heel fijn dat we hier alles in één duidelijk overzicht konden vergelijken."</p>
              <strong>- Jeroen Bakker</strong>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"De artikelen over daklast hebben me behoed voor een foute aankoop. Uiteindelijk een lichte Softshell gekozen."</p>
              <strong>- Sanne V.</strong>
            </div>
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
