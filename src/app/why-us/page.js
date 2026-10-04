import Link from 'next/link';

export const metadata = {
  title: 'Why Choose Us | K J Window Cleaners',
  description: 'Fully insured, reliable, and experienced window cleaning across Manchester with eco-friendly products and free quotes.',
};

const features = [
  {
    title: 'Fully Insured',
    description:
      'We carry full public liability insurance, giving you complete peace of mind every time we visit your property.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Reliable and Punctual',
    description:
      'We show up when we say we will. Our schedule is managed carefully so you always know when to expect us.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly Products',
    description:
      'Our purified water system and biodegradable cleaning solutions are safe for your home, family, and the environment.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Free, No-Obligation Quotes',
    description:
      'Every quote is free, transparent, and tailored to your property. No pressure, no hidden costs, no surprises.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Local Manchester Team',
    description:
      'We are based in Manchester and serve the entire Greater Manchester area. Supporting local means faster service and better care.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    description:
      'If you are not happy with the results, we will come back and reclean at no extra charge. Your satisfaction is our priority.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose K J Window Cleaners
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional, trusted, and local. Here is what sets us apart from the rest.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/about.jpg"
                alt="Professional window cleaner at work"
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
            </div>
            <div className="space-y-8">
              {features.slice(0, 3).map((f) => (
                <div key={f.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy-800 dark:text-white mb-1">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(3).map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 p-8 bg-gray-50/50 dark:bg-gray-900/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy-800 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy-800 dark:text-white text-center mb-4">
            Our Service Area
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We serve Manchester city centre and the wider Greater Manchester area,
            including Didsbury, Chorlton, Stockport, Sale, Altrincham, and beyond.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.98633529335!2d-2.3510684382461737!3d53.47248736498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K J Window Cleaners Service Area - Manchester"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Book Your Clean Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
