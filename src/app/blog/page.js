import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog | K J Window Cleaners',
  description: 'Tips, guides, and advice on window cleaning for Manchester homeowners from K J Window Cleaners.',
};

export default function BlogPage() {
  return (
    <main className="pt-28 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-800 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Helpful guides and tips on keeping your windows spotless in Manchester.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition p-6 sm:p-8 group border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500 mb-3">
                <time>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <span>|</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy-800 dark:text-white mb-3 group-hover:text-accent-500 transition">
                {post.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 text-accent-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
