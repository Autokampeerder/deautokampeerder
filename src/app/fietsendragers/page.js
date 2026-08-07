import ProductCard from '../../components/ProductCard';
import UspBar from '../../components/UspBar';
import fietsendragersData from '../../data/fietsendragers.json';
import Link from 'next/link';
import { Bike, Unlink, ArrowDownToLine, Zap } from 'lucide-react';

export const metadata = {
  title: 'Beste Fietsendragers voor Daktent Trips | Trekhaak & E-Bike',
  description: 'Combineer je daktent met een stevige fietsendrager op de trekhaak. Bekijk de beste Thule, ProUser en Hapro modellen voor E-bikes.',
};

export default function FietsendragersPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-full" style={{ minHeight: '60vh' }}>
        <div className="hero-bg-fietsendragers"></div>
        <div className="container hero-content">
          <nav style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: 'var(--spacing-md)' }}>
            <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link> &gt; <span>Fietsendragers</span>
          </nav>
          <span className="badge">🚲 Neem je Fietsen Mee</span>
          <h1>Fietsendragers voor Autokampeerders</h1>
          <p>Wanneer je autodak al bezet is door een daktent, is een trekhaak-fietsendrager de ideale manier om je (elektrische) fietsen veilig mee te nemen op avontuur.</p>
        </div>
      </section>

      <UspBar />

      <div className="container section">
        <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
          <div className="flex items-center justify-between" style={{marginBottom: 'var(--spacing-lg)'}}>
            <h2>Onze Aanbevolen Fietsendragers</h2>
          </div>
          <div className="grid grid-cols-4">
            {fietsendragersData.map((drager) => (
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
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Keuzehulp: Fietsen mee met een daktent?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Omdat het dak volledig in beslag wordt genomen door de daktent, biedt een moderne trekhaakfietsendrager uitkomst. Waar moet je op letten?
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Zap size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>E-Bike Geschikt</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Zorg voor een hoog draagvermogen (vaak 60kg) voor zware accu-fietsen.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Unlink size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Kantelfunctie</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Blijf toegang houden tot je kofferbak, zelfs als de fietsen al op de drager staan.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <ArrowDownToLine size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Kogeldruk</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Controleer de maximale kogeldruk van je trekhaak (vaak tussen 50kg en 75kg).</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Bike size={32} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Brede Goot</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ideaal voor mountainbikes (fatbikes) of E-bikes met extra dikke banden.</p>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Belangrijk bij E-Bikes: Draagvermogen</h3>
            <p>
              Elektrische fietsen wegen gemiddeld tussen de 22 en 28 kg per stuk (zonder accu). Als je twee E-bikes wilt meenemen, heb je een drager nodig met een minimaal draagvermogen van 60 kg (zoals de <strong>Thule VeloSpace XT</strong> of <strong>ProUser Amber</strong>). Tip: haal de accu's uit de fietsen tijdens het rijden om de kogeldruk te verminderen.
            </p>

            <h3 style={{ marginTop: 'var(--spacing-md)' }}>Kantelfunctie voor Kofferbaktoegang</h3>
            <p>
              Tijdens het autokamperen moet je regelmatig bij je spullen in de kofferbak (zoals je koelbox of campingstoelen). Kies daarom altijd een drager met een voetpedaal-kantelmechanisme. Hiermee kantel je de hele drager inclusief fietsen schuin naar voren zonder ze te hoeven afladen.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
