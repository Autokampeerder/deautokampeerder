'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--border-light)',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      animation: 'slideUp 0.4s ease-out'
    }}>
      <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div>
        <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '8px', fontSize: '1.1rem' }}>
          🍪 Cookiemelding & Privacy
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
          De Autokampeerder gebruikt functionele en analytische cookies om de website te optimaliseren. Daarnaast tonen we affiliate links om onze service gratis te houden. Lees meer in onze{' '}
          <Link href="/disclaimer" style={{ color: 'var(--secondary)', textDecoration: 'underline', fontWeight: 500 }}>
            disclaimer & privacy policy
          </Link>.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleDecline} 
          style={{
            background: 'none',
            border: '1px solid var(--text-muted)',
            borderRadius: '50px',
            padding: '10px 20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text-main)',
            cursor: 'pointer',
            transition: '0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Weigeren
        </button>
        <button 
          onClick={handleAccept} 
          style={{
            background: 'var(--secondary)',
            border: 'none',
            borderRadius: '50px',
            padding: '10px 24px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'white',
            cursor: 'pointer',
            transition: '0.2s',
            boxShadow: '0 4px 12px rgba(227, 123, 64, 0.2)'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Accepteren
        </button>
      </div>
    </div>
  );
}
