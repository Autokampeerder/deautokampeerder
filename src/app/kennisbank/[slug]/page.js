import { getPostBySlug, getAllPosts } from '../../../lib/markdown';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import '../markdown.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return { title: 'Niet gevonden' };
  }
  return {
    title: `${post.frontmatter.title} | De Autokampeerder`,
    description: post.frontmatter.excerpt,
    alternates: {
      canonical: `https://deautokampeerder.nl/kennisbank/${resolvedParams.slug}`,
    },
  };
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h1>Artikel niet gevonden</h1>
        <Link href="/kennisbank" className="btn btn-primary">Terug naar de kennisbank</Link>
      </div>
    );
  }

  return (
    <article className="container">
      <div className="article-header">
        <div className="article-meta">
          <span className="category">{post.frontmatter.category}</span>
          <span>{post.frontmatter.date}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{post.frontmatter.title}</h1>
      </div>

      {post.frontmatter.image && (
        <div className="article-hero">
          <img src={post.frontmatter.image} alt={post.frontmatter.title} />
        </div>
      )}

      <div className="prose">
        <ReactMarkdown
          components={{
            a: ({ href, children, ...props }) => {
              const textContent = Array.isArray(children) ? children.join('') : String(children || '');
              const isButtonLink = textContent.includes('→') || textContent.includes('&rarr;') || textContent.includes('Bekijk');

              if (href && href.startsWith('/')) {
                return (
                  <Link href={href} className={isButtonLink ? 'cta-btn' : ''} {...props}>
                    {children}
                  </Link>
                );
              }
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={isButtonLink ? 'cta-btn' : ''} {...props}>
                  {children}
                </a>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div style={{ textAlign: 'center', paddingBottom: 'var(--spacing-xl)', marginTop: '3rem' }}>
        <Link href="/kennisbank" className="btn btn-outline">
          &larr; Terug naar Kennisbank overzicht
        </Link>
      </div>
    </article>
  );
}
