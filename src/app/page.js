import ProductCard from '../components/ProductCard';
import UspBar from '../components/UspBar';
import FaqAccordion from '../components/FaqAccordion';
import daktentenData from '../data/daktenten.json';
import accessoiresData from '../data/accessoires.json';
import Link from 'next/link';
import { Tent, Car, Bike, Battery, Compass } from 'lucide-react';
import { getAllPosts } from '../lib/markdown';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);
  const faqs = [
    { 
      question: "Past een daktent op mijn auto?", 
      answer: "Een daktent past op de meeste personenauto's, mits de dynamische daklast van het voertuig (het maximale gewicht tijdens het rijden volgens de fabrikant) minimaal gelijk is aan het totaalgewicht van de daktent en de dakdragers samen (meestal tussen 45 kg en 75 kg)." 
    },
    { 
      question: "Hoe hard mag je rijden met een daktent?", 
      answer: "De geadviseerde maximumsnelheid voor het rijden met een daktent ligt bij de meeste A-merk fabrikanten tussen de 100 km/u en 120 km/u. Dit zorgt voor een stabiel rijgedrag en beperkt extra brandstofverbruik." 
    },
    { 
      question: "Wat is het verschil tussen een Hardshell en een Softshell daktent?", 
      answer: "Hardshell daktenten zijn gehuisvest in een stijve kunststof of aluminium koffer en klappen via gasveren binnen 30 seconden op. Softshell daktenten klappen open als een boek en bieden een grotere leefruimte voor gezinnen tegen een lager gewicht." 
    },
    { 
      question: "Zijn fietsendragers en daktenten te combineren op één auto?", 
      answer: "Een trekhaak-gemonteerde fietsendrager (zoals voor e-bikes of mountainbikes) is uitstekend te combineren met een daktent op het dak. Houd hierbij altijd rekening met de maximale kogeldruk van de trekhaak." 
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <span className="badge">🏕️ Jouw avontuur begint hier</span>
          <h1>Ontdek de Ultieme Vrijheid van Autokamperen</h1>
          <p>Onafhankelijk vergelijken van Daktenten, Dakdragers, Fietsendragers, Powerstations en Outdoor Gear.</p>
          <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
            <Link href="/daktenten" className="btn btn-primary">Bekijk Daktenten</Link>
            <Link href="/dakdragers" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)' }}>Dakdragers & Gear</Link>
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
          <div className="grid grid-cols-5">
            <Link href="/daktenten" className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Tent size={40} />
              </div>
              <h3>Daktenten</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Softshell & Hardshell modellen vergelijken.</p>
            </Link>

            <Link href="/dakdragers" className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Car size={40} />
              </div>
              <h3>Dakdragers</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Thule WingBar, Menabo & pasvorm gidsen.</p>
            </Link>

            <Link href="/fietsendragers" className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Bike size={40} />
              </div>
              <h3>Fietsendragers</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Trekhaakdragers voor E-Bikes & mountainbikes.</p>
            </Link>

            <Link href="/accu-en-power" className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Battery size={40} />
              </div>
              <h3>Accu's & Power</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bluetti, EcoFlow powerstations & solar.</p>
            </Link>

            <Link href="/accessoires" className="card" style={{ padding: 'var(--spacing-lg)', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
                <Compass size={40} />
              </div>
              <h3>Accessoires</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Skottelbraais, luifels & kampeergear.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* DAKTENTEN HIGHLIGHT */}
      <section id="aanbod" className="section">
        <div className="container">
          <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2>Populairste Daktenten</h2>
            <Link href="/daktenten" style={{ fontWeight: 600, color: 'var(--secondary)' }}>Bekijk alle daktenten &rarr;</Link>
          </div>
          <div className="grid grid-cols-4">
            {daktentenData.map((product) => (
              <div style={{ position: 'relative' }} key={product.id}>
                {product.id === 1 && <span className="card-tag">Beste Prijs-Kwaliteit Gezin</span>}
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
              <h2>Selectie op Kwaliteit & Specificaties</h2>
              <p>Wij selecteren daktenten en uitrusting op basis van technische fabrieksspecificaties, materiaaleigenschappen en beoordelingen van A-merken.</p>
              <ul className="check-list">
                <li><strong>Waterbestendig Ripstop Canvas:</strong> Hoogwaardig ademend polykatoen met geteste waterkolom ter bescherming tegen buien.</li>
                <li><strong>Kwalitatieve Ritsen & Bevestiging:</strong> Stevige SBS of YKK ritsen en robuuste montagescharnieren.</li>
                <li><strong>Comfortabele Slaapmatrassen:</strong> Uitgerust met 5cm+ high-density schuimmatrassen voor een uitstekende nachtrust.</li>
                <li><strong>Gestroomlijnd Design:</strong> Hardshell en slanke softshell behuizingen om windgeruis en extra brandstofverbruik te beperken.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUTDOOR GEAR & ACCESSOIRES */}
      <section id="accessoires" className="section">
        <div className="container">
          <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2>Uitgelichte Outdoor Gear & Skottelbraai</h2>
            <Link href="/accessoires" style={{ fontWeight: 600, color: 'var(--secondary)' }}>Bekijk alle accessoires &rarr;</Link>
          </div>
          <div className="grid grid-cols-4">
            {accessoiresData.map((item) => (
              <ProductCard key={item.id} title={item.name} brand={item.category} price={item.price} image={item.image} affiliateUrl={item.link} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / GUIDES */}
      <section className="section section-bg-light">
        <div className="container">
          <div className="flex items-center justify-between" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2>Nieuwste Koopgidsen & Kampeertips</h2>
            <Link href="/kennisbank" style={{ fontWeight: 600, color: 'var(--secondary)' }}>Bekijk alle artikelen &rarr;</Link>
          </div>
          <div className="grid grid-cols-3">
            {latestPosts.map((post) => (
              <Link href={`/kennisbank/${post.slug}`} key={post.slug} className="card" style={{ textDecoration: 'none' }}>
                <div className="card-img-wrapper">
                  {post.image && <img src={post.image} alt={post.title} className="card-img" />}
                </div>
                <div className="card-content">
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase' }}>{post.category || 'Koopgids'}</span>
                  <h3>{post.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '12px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                    Lees verder &rarr;
                  </div>
                </div>
              </Link>
            ))}
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
