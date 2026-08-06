export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex justify-between">
        <div>
          <h3 style={{color: 'white'}}>De Autokampeerder</h3>
          <p style={{opacity: 0.8, maxWidth: '300px'}}>De onafhankelijke gids voor autokamperen, daktenten en outdoor in Nederland en België.</p>
        </div>
        <div style={{display: 'flex', gap: '2rem'}}>
          <div className="flex flex-col">
            <strong style={{marginBottom: '1rem'}}>Categorieën</strong>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Hardshell Daktenten</a>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Softshell Daktenten</a>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Accessoires</a>
          </div>
          <div className="flex flex-col">
            <strong style={{marginBottom: '1rem'}}>Informatie</strong>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Over Ons</a>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Contact</a>
            <a href="#" style={{opacity: 0.8, marginBottom: '0.5rem'}}>Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.6, fontSize: '0.9rem'}}>
        &copy; {new Date().getFullYear()} De Autokampeerder. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
