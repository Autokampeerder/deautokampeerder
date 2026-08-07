import { getAllPosts } from '@/lib/markdown';

export default async function sitemap() {
  const baseUrl = 'https://deautokampeerder.nl';

  // Statische pagina's
  const staticRoutes = [
    '',
    '/daktenten',
    '/dakdragers',
    '/fietsendragers',
    '/accu-en-power',
    '/accessoires',
    '/kennisbank',
    '/over-ons',
    '/transparantie-en-methodiek',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamische Kennisbank artikelen
  const posts = getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/kennisbank/${post.slug}`,
    lastModified: post.date || new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
