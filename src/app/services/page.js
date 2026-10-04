import Link from 'next/link';
import Gallery from '@/components/Gallery';

export const metadata = {
  title: 'Our Services | K J Window Cleaners',
  description: 'Professional exterior, interior, and full window cleaning services across Manchester and Greater Manchester.',
};

const services = [
  {
    title: 'Exterior Window Cleaning',
    description:
      'Using the latest water-fed pole technology, we clean your exterior windows from the ground. No ladders needed for most properties, meaning a safer and more efficient clean.',
    image: '/service-ext.jpg',
    details: [
      'Water-fed pole system for safe ground-level cleaning',
      'Purified water leaves no spots or streaks',
      'Frames and sills wiped down as standard',
      'Ideal for regular maintenance cleans',
    ],
  },
  {
    title: 'Interior Window Cleaning',
    description:
      'Our team carefully cleans all interior glass surfaces, frames, and sills by hand. We use non-toxic, quick-drying solutions that leave no residue or streaks.',
    image: '/service-int.jpg',
    details: [
      'Hand-cleaned with non-toxic solutions',
      'Quick-drying, no residue left behind',
      'Frames, sills, and tracks included',
      'Perfect for a thorough deep clean',
    ],
  },
  {
    title: 'Full Window Clean',
    description:
      'Get the complete package with both interior and exterior cleaning. This is our most popular option and offers the best value for a total window transformation.',
    image: '/service-full.jpg',
    popular: true,
    details: [
      'Combines interior and exterior cleaning',
      'Best value for a complete transformation',
      'Most popular choice among our customers',
      'Recommended every 4 to 6 weeks',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Window Cleaning Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We deliver a professional, thorough clean using modern equipment
            and eco-friendly solutions.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-800 dark:text-white">
                    {s.title}
                  </h2>
                  {s.popular && (
                    <span className="text-xs bg-accent-500 text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{d}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Gallery />
    </>
  );
}
