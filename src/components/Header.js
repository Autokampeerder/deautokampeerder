'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container flex items-center justify-between" style={{ position: 'relative' }}>
        <Link href="/" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
          DeAuto<span style={{ color: 'var(--secondary)' }}>Kampeerder</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/daktenten" onClick={closeMenu}>Daktenten</Link>
          <Link href="/dakdragers" onClick={closeMenu}>Dakdragers</Link>
          <Link href="/fietsendragers" onClick={closeMenu}>Fietsendragers</Link>
          <Link href="/accu-en-power" onClick={closeMenu}>Accu's & Power</Link>
          <Link href="/accessoires" onClick={closeMenu}>Accessoires</Link>
          <Link href="/kennisbank" onClick={closeMenu}>Kennisbank</Link>
        </nav>
      </div>
    </header>
  );
}
