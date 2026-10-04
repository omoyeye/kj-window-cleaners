import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import Gallery from '@/components/Gallery';


const services = [
  {
    title: 'Exterior Window Cleaning',
    description:
      'Using the latest water-fed pole technology, we clean your exterior windows from the ground. No ladders needed for most properties, meaning a safer and more efficient clean.',
    image: '/service-ext.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    popular: false,
  },
  {
    title: 'Interior Window Cleaning',
    description:
      'Our team carefully cleans all interior glass surfaces, frames, and sills by hand. We use non-toxic, quick-drying solutions that leave no residue or streaks.',
    image: '/service-int.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    popular: false,
  },
  {
    title: 'Full Window Clean',
    description:
      'Get the complete package with both interior and exterior cleaning. This is our most popular option and offers the best value for a total window transformation.',
    image: '/service-full.jpg',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    popular: true,
  },
];

const pricingRows = [
  { type: '1-2 Bed Flat / Terrace', exterior: '10', interior: '12', full: '18' },
  { type: '2-3 Bed Terrace', exterior: '15', interior: '18', full: '28' },
  { type: '3 Bed Semi-Detached', exterior: '20', interior: '24', full: '35' },
  { type: '4 Bed Detached', exterior: '30', interior: '35', full: '50' },
  { type: '5+ Bed / Large Property', exterior: 'From 40', interior: 'From 45', full: 'From 65' },
];

const features = [
  {
    title: 'Fully Insured',
    desc: 'We carry full public liability insurance, so you can have complete peace of mind while we work on your property.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly',
    desc: 'We use purified water and biodegradable cleaning solutions that are safe for your home, family, and garden.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Reliable Service',
    desc: 'We show up when we say we will. Our customers value our punctuality and consistency above all else.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Local Manchester Team',
    desc: 'We are proud to be a Manchester-based business, serving communities across Greater Manchester since day one.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'No Contracts',
    desc: 'Book us when you need us. No long-term contracts, no commitments, and no hidden charges of any kind.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75m0 0h3" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    desc: 'Not happy with our work? We will come back and re-clean at no extra cost. Your satisfaction is our priority.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 01-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    ),
  },
];


export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700 overflow-hidden">
        <div className="absolute inset-0 hero-dots" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                Professional Window Cleaning in Manchester
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Crystal Clear Windows,
                <br />
                <span className="text-accent-300">Every Time</span>
              </h1>

              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Professional window cleaning across Manchester and Greater
                Manchester. Trusted by hundreds of homeowners for spotless,
                streak-free results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/booking"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-0.5"
                >
                  Book Your Clean
                </Link>
                <a
                  href="tel:+447466360756"
                  className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-0.5"
                >
                  Call 07466 360756
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-bg.jpg"
                  alt="Professional window cleaner using squeegee on glass"
                  className="w-full max-w-lg mx-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
      </section>


      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              Our Window Cleaning Services
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We deliver a professional, thorough clean using modern equipment
              and eco-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  s.popular ? 'ring-2 ring-accent-500/20' : ''
                }`}
              >
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-heading text-xl font-bold text-navy-800 dark:text-white">
                    {s.title}
                  </h3>
                  {s.popular && (
                    <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </div>

                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              Transparent Pricing, No Hidden Fees
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our prices are based on property type and the service you choose.
              Regular customers save up to 20% on every clean.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left p-5 font-heading font-semibold text-navy-800 dark:text-white">
                    Property Type
                  </th>
                  <th className="p-5 font-heading font-semibold text-navy-800 dark:text-white text-center">
                    Exterior Only
                  </th>
                  <th className="p-5 font-heading font-semibold text-navy-800 dark:text-white text-center">
                    Interior Only
                  </th>
                  <th className="p-5 font-heading font-semibold text-navy-800 dark:text-white text-center pricing-popular">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                        Best Value
                      </span>
                      Full Clean
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-b border-gray-50 dark:border-gray-700/50 ${
                      i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-800/50'
                    }`}
                  >
                    <td className="p-5 font-medium text-gray-700 dark:text-gray-200">
                      {row.type}
                    </td>
                    <td className="p-5 text-center text-gray-600 dark:text-gray-300">
                      {row.exterior.startsWith('From') ? row.exterior.replace('From ', 'From £') : `£${row.exterior}`}
                    </td>
                    <td className="p-5 text-center text-gray-600 dark:text-gray-300">
                      {row.interior.startsWith('From') ? row.interior.replace('From ', 'From £') : `£${row.interior}`}
                    </td>
                    <td className="p-5 text-center font-semibold text-accent-700 dark:text-accent-400 pricing-popular">
                      {row.full.startsWith('From') ? row.full.replace('From ', 'From £') : `£${row.full}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {pricingRows.map((row) => (
              <div
                key={row.type}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-3">
                  {row.type}
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-gray-400 dark:text-gray-500 text-xs mb-1">Exterior</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">
                      {row.exterior.startsWith('From') ? row.exterior.replace('From ', '£') + '+' : `£${row.exterior}`}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-gray-400 dark:text-gray-500 text-xs mb-1">Interior</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">
                      {row.interior.startsWith('From') ? row.interior.replace('From ', '£') + '+' : `£${row.interior}`}
                    </div>
                  </div>
                  <div className="bg-accent-50 dark:bg-accent-900/30 rounded-lg p-3 ring-1 ring-accent-200 dark:ring-accent-700">
                    <div className="text-accent-600 dark:text-accent-400 text-xs mb-1 font-medium">Full</div>
                    <div className="font-bold text-accent-700 dark:text-accent-300">
                      {row.full.startsWith('From') ? row.full.replace('From ', '£') + '+' : `£${row.full}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              All prices include VAT. Regular booking discounts applied automatically.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Need a commercial quote?{' '}
              <Link href="/booking" className="text-accent-600 dark:text-accent-400 font-semibold hover:underline">
                Contact us
              </Link>{' '}
              for a free, no-obligation estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / IMAGE SECTION ===== */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/about.jpg"
                alt="Window cleaner working outdoors with squeegee"
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-6">
                Why Manchester Trusts K J Window Cleaners
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                We have built our reputation on reliability, quality, and honest
                pricing. Here is what sets us apart from the rest.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.slice(0, 4).map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-50 dark:bg-accent-900/30 text-accent-500 flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy-800 dark:text-white text-sm mb-1">
                        {f.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE FEATURES ===== */}
      <section id="why-us" className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(4).map((f) => (
              <div
                key={f.title}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 dark:bg-accent-900/30 text-accent-500 flex items-center justify-center mx-auto mb-4">
                  {f.icon}
                </div>
                <h3 className="font-heading font-bold text-navy-800 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== GALLERY ===== */}
      <Gallery />

      {/* ===== FAQ ===== */}
      <FAQSection />

      {/* ===== GOOGLE MAPS ===== */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              Our Service Area
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We cover Manchester and the surrounding areas of Greater Manchester.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.15869283tried!2d-2.3520157!3d53.4723272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1698000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K J Window Cleaners Service Area - Manchester"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cta.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Book your window clean today and see why Manchester homeowners trust
            K J Window Cleaners for a spotless finish, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <a
              href="tel:+447466360756"
              className="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition hover:-translate-y-0.5"
            >
              Call 07466 360756
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
