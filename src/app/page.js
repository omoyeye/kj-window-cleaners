import Link from 'next/link';

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

      {/* ===== OVERVIEW CARDS ===== */}
      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need for sparkling clean windows, from a trusted
              local team in Manchester.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/services"
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-800 dark:text-white mb-2">
                Our Services
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Exterior, interior, and full window cleaning for any property type.
              </p>
            </Link>

            <Link
              href="/pricing"
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-800 dark:text-white mb-2">
                Pricing
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Transparent prices starting from just &pound;10. No hidden fees.
              </p>
            </Link>

            <Link
              href="/why-us"
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-800 dark:text-white mb-2">
                Why Choose Us
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Fully insured, reliable, eco-friendly, and satisfaction guaranteed.
              </p>
            </Link>

            <Link
              href="/faq"
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-accent-500 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-800 dark:text-white mb-2">
                FAQ
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Got questions? Find answers about our services, booking, and more.
              </p>
            </Link>
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
