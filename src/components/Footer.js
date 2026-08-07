import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex justify-between" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'white' }}>De Autokampeerder</h3>
          <p style={{ opacity: 0.8, maxWidth: '340px', lineHeight: '1.6' }}>
            De onafhankelijke vergelijkingsgids voor autokamperen, daktenten, dakdragers en outdoor uitrusting in Nederland en België.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div className="flex flex-col">
            <strong style={{ marginBottom: '1rem' }}>Categorieën</strong>
            <Link href="/daktenten" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Daktenten</Link>
            <Link href="/dakdragers" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Dakdragers</Link>
            <Link href="/fietsendragers" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Fietsendragers</Link>
            <Link href="/accu-en-power" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Accu's & Power</Link>
            <Link href="/accessoires" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Outdoor Accessoires</Link>
          </div>
          <div className="flex flex-col">
            <strong style={{ marginBottom: '1rem' }}>Informatie & Trust</strong>
            <Link href="/over-ons" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Over Ons</Link>
            <Link href="/transparantie-en-methodiek" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Transparantie & Methodiek</Link>
            <Link href="/disclaimer" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Disclaimer & Affiliate</Link>
            <Link href="/kennisbank" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Kennisbank</Link>
            <Link href="/contact" style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Contact</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.7, fontSize: '0.85rem', lineHeight: '1.5' }}>
        <p style={{ marginBottom: '0.5rem' }}>
          * DeAutokampeerder is een onafhankelijke vergelijkingssite. Onze vergelijkingen zijn gebaseerd op officiële fabrieksspecificaties, handleidingen en geaggregeerde gebruikersreviews. Wij ontvangen mogelijk een commissie bij aankopen via onze partners, zonder dat dit jou iets extra's kost.
        </p>
        &copy; {new Date().getFullYear()} De Autokampeerder. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
