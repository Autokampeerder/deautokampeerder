import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex justify-between" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h3 style={{color: 'white'}}>De Autokampeerder</h3>
          <p style={{opacity: 0.8, maxWidth: '300px'}}>De onafhankelijke gids voor autokamperen, daktenten en outdoor in Nederland en België.</p>
        </div>
        <div style={{display: 'flex', gap: '3rem', flexWrap: 'wrap'}}>
          <div className="flex flex-col">
            <strong style={{marginBottom: '1rem'}}>Categorieën</strong>
            <Link href="/daktenten" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Daktenten</Link>
            <Link href="/dakdragers" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Dakdragers</Link>
            <Link href="/fietsendragers" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Fietsendragers</Link>
            <Link href="/accu-en-power" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Accu's & Power</Link>
            <Link href="/accessoires" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Outdoor Accessoires</Link>
          </div>
          <div className="flex flex-col">
            <strong style={{marginBottom: '1rem'}}>Informatie</strong>
            <Link href="/over-ons" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Over Ons</Link>
            <Link href="/disclaimer" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Disclaimer & Affiliate</Link>
            <Link href="/contact" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Contact</Link>
            <Link href="/kennisbank" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Kennisbank</Link>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.6, fontSize: '0.9rem'}}>
        &copy; {new Date().getFullYear()} De Autokampeerder. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
