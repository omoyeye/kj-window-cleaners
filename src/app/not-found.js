import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
      <div className="text-center px-4">
        <h1 className="font-heading text-8xl font-bold text-white/20 mb-2">404</h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Go Home
          </Link>
          <Link
            href="/booking"
            className="border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book a Clean
          </Link>
        </div>
      </div>
    </section>
  );
}
