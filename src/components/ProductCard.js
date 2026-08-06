export default function ProductCard({ title, brand, price, image, affiliateUrl }) {
  return (
    <article className="card">
      <div className="card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="card-content">
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px' }}>{brand}</span>
        <h3 style={{ marginTop: '4px' }}>{title}</h3>
        <p className="card-price">Vanaf € {price}</p>
        <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
          Bekijk Prijs
        </a>
      </div>
    </article>
  );
}
