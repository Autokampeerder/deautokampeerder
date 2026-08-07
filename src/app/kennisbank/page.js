import Link from 'next/link';
import { getAllPosts } from '../../lib/markdown';

export const metadata = {
  title: 'Kennisbank | Alles over daktenten en kamperen',
  description: 'Lees onze koopgidsen, installatietips en roadtrip inspiratie voor jouw volgende avontuur.',
};

export default function KennisbankIndex() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="section section-bg-light">
      <div className="container" style={{ minHeight: '60vh' }}>
        <div className="section-header">
          <h1>Kennisbank</h1>
          <p>Lees de laatste tips, reviews en gidsen over daktenten en autokamperen.</p>
        </div>

        {/* FEATURED HERO ARTICLE */}
        {featuredPost && (
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <Link href={`/kennisbank/${featuredPost.slug}`} className="card" style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', padding: '12px', alignItems: 'center' }}>
              <div className="card-img-wrapper" style={{ aspectRatio: '16/9', borderRadius: '12px' }}>
                {featuredPost.image && <img src={featuredPost.image} alt={featuredPost.title} className="card-img" style={{ objectFit: 'cover' }} />}
              </div>
              <div className="card-content" style={{ padding: '16px' }}>
                <span style={{ display: 'inline-block', background: 'var(--secondary)', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '12px' }}>
                  ⭐ Nieuwste Artikel • {featuredPost.category || 'Gids'}
                </span>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{featuredPost.title}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '16px' }}>{featuredPost.excerpt}</p>
                <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  Lees het complete artikel &rarr;
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* GRID REMAINING ARTICLES */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-3">
            {remainingPosts.map((post) => (
              <Link href={`/kennisbank/${post.slug}`} key={post.slug} className="card" style={{ textDecoration: 'none' }}>
                <div className="card-img-wrapper">
                  {post.image && <img src={post.image} alt={post.title} className="card-img" />}
                  <span className="card-tag">{post.category}</span>
                </div>
                <div className="card-content">
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{post.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{post.excerpt}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                    Lees verder &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
