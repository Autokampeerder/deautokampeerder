export default function UspBar() {
  const usps = [
    { icon: "🛡️", title: "Onafhankelijk Advies", subtitle: "Door kampeerders, voor kampeerders" },
    { icon: "⛺", title: "Alle Topmerken", subtitle: "Thule, Sheepie, Dare To Be Different" },
    { icon: "⚖️", title: "Vergelijk & Bespaar", subtitle: "Altijd de scherpste actuele prijzen" },
    { icon: "📚", title: "Gratis Kennisbank", subtitle: "Tips, installatie & roadtrip routes" }
  ];

  return (
    <div className="usp-bar">
      <div className="container usp-grid">
        {usps.map((usp, index) => (
          <div key={index} className="usp-item">
            <span className="usp-icon">{usp.icon}</span>
            <div className="usp-text">
              <strong>{usp.title}</strong>
              <p>{usp.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
