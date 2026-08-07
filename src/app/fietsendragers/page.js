import ProductCard from '../../components/ProductCard';
import fietsendragersData from '../../data/fietsendragers.json';
import Link from 'next/link';

export const metadata = {
  title: 'Beste Fietsendragers voor Daktent Trips | Trekhaak & E-Bike',
  description: 'Combineer je daktent met een stevige fietsendrager op de trekhaak. Bekijk de beste Thule, ProUser en Hapro modellen voor E-bikes.',
};

export default function FietsendragersPage() {
  return (
    <div className="container section" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)' }}>
        <Link href="/">Home</Link> &gt; <span>Fietsendragers</span>
      </nav>

      <h1>Fietsendragers voor Autokampeerders</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '900px', marginBottom: 'var(--spacing-xl)' }}>
        Wanneer je autodak al bezet is door een daktent, is een trekhaak-fietsendrager de ideale manier om je fietsen of E-bikes mee te nemen op avontuur.
      </p>

      <section style={{ marginBottom: 'var(--spacing-xxl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Populairste Fietsendragers op Bol.com</h2>
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

      <article className="seo-content" style={{ background: 'var(--card-bg)', padding: 'var(--spacing-xl)', borderRadius: '16px', border: '1px solid var(--border-light)', lineHeight: '1.8' }}>
        <h2>Waarom een trekhaak-fietsendrager ideaal is bij een daktent</h2>
        <p>
          Omdat het dak van de auto volledig in beslag wordt genomen door de daktent, vervalt de optie voor fietsendragers op het dak. Gelukkig biedt een moderne trekhaakfietsendrager uitkomst. Met handige kantelsystemen blijf je ook met fietsen erop eenvoudig toegang houden tot je kofferbak.
        </p>

        <h3>1. Belangrijk bij E-Bikes: Draagvermogen en wielguts</h3>
        <p>
          Elektrische fietsen wegen gemiddeld tussen de 22 en 28 kg per stuk (zonder accu). Als je twee E-bikes wilt meenemen, heb je een drager nodig met een minimaal draagvermogen van 60 kg (zoals de <strong>Thule VeloSpace XT</strong> of <strong>ProUser Amber</strong>). Controleer daarnaast altijd de kogeldruk van je auto.
        </p>

        <h3>2. Kantelfunctie voor Kofferbaktoegang</h3>
        <p>
          Tijdens het autokamperen moet je regelmatig bij je spullen in de kofferbak (zoals je koelbox of campingstoelen). Kies daarom altijd een drager met een voetpedaal-kantelmechanisme. Hiermee kantel je de hele drager inclusief fietsen schuin naar voren zonder ze te hoeven afladen.
        </p>
      </article>
    </div>
  );
}
