export const metadata = {
  title: 'Contact | De Autokampeerder',
  description: 'Neem contact op met De Autokampeerder.',
};

export default function Contact() {
  return (
    <div className="container section" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: 'var(--spacing-xl)' }}>
      <h1>Contact</h1>
      
      <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>
        <p>Heb je vragen over een daktent, wil je advies over jouw specifieke auto, of ben je een fabrikant die een product wil laten testen? Neem gerust contact met ons op!</p>
      </div>
      
      <div style={{ background: 'var(--card-bg)', padding: 'var(--spacing-lg)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
        <form className="flex flex-col gap-md">
          <div className="flex flex-col">
            <label htmlFor="name" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Naam</label>
            <input type="text" id="name" placeholder="Jouw naam" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem' }} />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>E-mailadres</label>
            <input type="email" id="email" placeholder="jouw@email.nl" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem' }} />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="message" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--primary)' }}>Bericht</label>
            <textarea id="message" rows="5" placeholder="Hoe kunnen we je helpen?" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
          </div>
          
          <button type="button" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>Verstuur Bericht</button>
        </form>
      </div>
      
      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Andere manieren om ons te bereiken</h3>
        <p><strong>E-mail:</strong> info@deautokampeerder.nl<br/>
        <strong>Social Media:</strong> Volg ons op Instagram voor de laatste kampeer avonturen.</p>
      </div>
    </div>
  );
}
