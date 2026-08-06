import Link from 'next/link';
import { getAllPosts } from '../../lib/markdown';

export const metadata = {
  title: 'Kennisbank | Alles over daktenten en kamperen',
  description: 'Lees onze koopgidsen, installatietips en roadtrip inspiratie voor jouw volgende avontuur.',
};

export default function KennisbankIndex() {
  const posts = getAllPosts();

  return (
    <div className="section section-bg-light">
      <div className="container" style={{ minHeight: '60vh' }}>
        <div className="section-header">
          <h1>Kennisbank</h1>
          <p>Lees de laatste tips, reviews en koopgidsen.</p>
        </div>

        <div className="grid grid-cols-3">
          {posts.map((post) => (
            <Link href={`/kennisbank/${post.slug}`} key={post.slug} className="card" style={{ textDecoration: 'none' }}>
              <div className="card-img-wrapper">
                {post.image && <img src={post.image} alt={post.title} className="card-img" />}
                <span className="card-tag">{post.category}</span>
              </div>
              <div className="card-content">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{post.excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                  Lees verder &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
