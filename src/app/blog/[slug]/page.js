import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | K J Window Cleaners`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <main className="pt-28 pb-20 bg-white dark:bg-gray-950 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-accent-500 hover:text-accent-600 font-medium text-sm flex items-center gap-1 mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500 mb-4">
          <time>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          <span>|</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {paragraphs.map((p, i) => {
            if (p.startsWith('## ')) {
              return (
                <h2 key={i} className="font-heading text-2xl font-bold text-navy-800 dark:text-white mt-10 mb-4">
                  {p.replace('## ', '')}
                </h2>
              );
            }
            if (p.startsWith('### ')) {
              return (
                <h3 key={i} className="font-heading text-xl font-semibold text-navy-700 dark:text-gray-200 mt-6 mb-3">
                  {p.replace('### ', '')}
                </h3>
              );
            }
            if (p.startsWith('- ')) {
              const items = p.split('\n').filter((line) => line.startsWith('- '));
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^- \*\*(.+?)\*\*:?\s*/, '').length < item.replace('- ', '').length
                      ? <><strong>{item.match(/\*\*(.+?)\*\*/)?.[1]}</strong>: {item.replace(/^- \*\*(.+?)\*\*:?\s*/, '')}</>
                      : item.replace('- ', '')
                    }</li>
                  ))}
                </ul>
              );
            }
            if (p.trim() === '') return null;
            return (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {p.trim()}
              </p>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-navy-800 rounded-2xl text-center">
          <h3 className="font-heading text-2xl font-bold text-white mb-3">
            Need Your Windows Cleaned?
          </h3>
          <p className="text-white/60 mb-6">
            Get a free quote for your Manchester property today.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Book Now
          </Link>
        </div>
      </article>
    </main>
  );
}
