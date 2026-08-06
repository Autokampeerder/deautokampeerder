import Link from 'next/link';

export const metadata = {
  title: 'Over Ons | De Autokampeerder',
  description: 'Lees meer over de missie van De Autokampeerder.',
};

export default function OverOns() {
  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--spacing-xl)' }}>
      <h1>Over De Autokampeerder</h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
        <p>Welkom bij <strong>De Autokampeerder</strong>, dé onafhankelijke vergelijker voor iedereen die de ultieme vrijheid van het kamperen met de auto wil ervaren.</p>
        
        <h2 style={{ marginTop: 'var(--spacing-lg)' }}>Onze Missie</h2>
        <p>Wij geloven dat avontuur niet ingewikkeld hoeft te zijn. Met een daktent tover je jouw dagelijkse auto in 3 minuten om tot een comfortabele slaapplaats, waar je ook bent. Geen gedoe met haringen in de stromende regen, geen koude rug, maar direct genieten van het uitzicht vanaf je dak.</p>
        <p>Omdat de markt voor daktenten, dakdragers en luifels enorm groeit, zagen we dat veel beginnende autokampeerders door de bomen het bos niet meer zagen. Welke tent past op mijn auto? Hoe zit het met de daklast? Welke accessoires heb ik écht nodig?</p>
        
        <h2 style={{ marginTop: 'var(--spacing-lg)' }}>Eerlijk & Onafhankelijk</h2>
        <p>Op De Autokampeerder bundelen we al deze informatie. We schrijven uitgebreide gidsen in onze kennisbank, vergelijken de beste modellen van topmerken zoals Thule, Sheepie en Dare To Be Different, en helpen jou de beste keuze te maken voor jouw budget en auto.</p>
        
        <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
          <h3 style={{ margin: 0, marginBottom: 'var(--spacing-sm)' }}>Klaar voor het avontuur?</h3>
          <p style={{ margin: 0, marginBottom: 'var(--spacing-md)' }}>Bekijk direct welke daktenten als beste uit de test komen.</p>
          <Link href="/#aanbod" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '1rem' }}>
            Bekijk Daktenten
          </Link>
        </div>
      </div>
    </div>
  );
}
