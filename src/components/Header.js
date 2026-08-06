import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
          DeAuto<span style={{ color: 'var(--secondary)' }}>Kampeerder</span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Daktenten</Link>
          <Link href="/dakdragers">Dakdragers</Link>
          <Link href="/kennisbank">Kennisbank</Link>
        </nav>
      </div>
    </header>
  );
}
