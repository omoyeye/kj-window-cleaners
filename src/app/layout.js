import { Montserrat, Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'K J Window Cleaners Service | Professional Window Cleaning in Manchester',
  description:
    'Professional, reliable, and affordable window cleaning across Manchester and Greater Manchester. Fully insured. Book your clean today.',
  icons: {
    icon: '/logo.svg',
  },
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img
              src="/logo.svg"
              alt="K J Window Cleaners"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Serving Manchester and Greater Manchester with pride. Professional
              window cleaning you can trust.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white transition">
                  Book a Clean
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+447466360756" className="hover:text-white transition">
                  07466 360756
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kjwindowcleaners.co.uk"
                  className="hover:text-white transition"
                >
                  info@kjwindowcleaners.co.uk
                </a>
              </li>
              <li>Manchester, Greater Manchester</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">
              Areas We Cover
            </h4>
            <p className="text-sm leading-relaxed">
              Manchester, Salford, Stockport, Trafford, Bury, Bolton, Oldham,
              Rochdale, Tameside, Wigan
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          <p>&copy; {year} K J Window Cleaners Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'K J Window Cleaners Service',
    description: 'Professional window cleaning across Manchester and Greater Manchester.',
    url: 'https://kjwindowcleaners.co.uk',
    telephone: '+447466360756',
    email: 'info@kjwindowcleaners.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressRegion: 'Greater Manchester',
      addressCountry: 'GB',
    },
    areaServed: [
      'Manchester', 'Salford', 'Stockport', 'Trafford',
      'Bury', 'Bolton', 'Oldham', 'Rochdale', 'Tameside', 'Wigan',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Sa 07:00-18:00',
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
