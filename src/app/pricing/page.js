import Link from 'next/link';

export const metadata = {
  title: 'Pricing | K J Window Cleaners',
  description: 'Transparent, affordable window cleaning prices for residential and commercial properties across Manchester.',
};

const pricingRows = [
  { type: 'Flat / Apartment', exterior: 10, interior: 12, full: 18 },
  { type: 'Terraced House', exterior: 15, interior: 18, full: 28 },
  { type: 'Semi-Detached', exterior: 20, interior: 24, full: 35 },
  { type: 'Detached House', exterior: 30, interior: 35, full: 50 },
  { type: 'Commercial', exterior: 45, interior: 50, full: 80 },
];

const discounts = [
  { frequency: 'Weekly', discount: '20% off' },
  { frequency: 'Bi-weekly', discount: '15% off' },
  { frequency: 'Monthly', discount: '10% off' },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No hidden fees. Prices shown are per visit and include VAT at 20%.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="py-4 px-6 font-heading font-semibold">Property Type</th>
                  <th className="py-4 px-6 font-heading font-semibold text-center">Exterior</th>
                  <th className="py-4 px-6 font-heading font-semibold text-center">Interior</th>
                  <th className="py-4 px-6 font-heading font-semibold text-center">
                    <span className="flex items-center justify-center gap-2">
                      Full Clean
                      <span className="text-[10px] bg-accent-500 px-2 py-0.5 rounded-full">BEST VALUE</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr
                    key={row.type}
                    className={`border-t border-gray-100 dark:border-gray-800 ${
                      i % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-950'
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-navy-800 dark:text-white">{row.type}</td>
                    <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-300">
                      From &pound;{row.exterior}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-300">
                      From &pound;{row.interior}
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-accent-600 dark:text-accent-400">
                      From &pound;{row.full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {pricingRows.map((row) => (
              <div
                key={row.type}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
              >
                <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-3">
                  {row.type}
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="text-gray-400 dark:text-gray-500 mb-1">Exterior</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">&pound;{row.exterior}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 dark:text-gray-500 mb-1">Interior</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-200">&pound;{row.interior}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 dark:text-gray-500 mb-1">Full Clean</div>
                    <div className="font-semibold text-accent-600 dark:text-accent-400">&pound;{row.full}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-6">
            All prices include VAT at 20%. Final pricing may vary depending on
            window count, access, and condition.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-navy-800 dark:text-white text-center mb-12">
            Save with Regular Cleans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {discounts.map((d) => (
              <div
                key={d.frequency}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 text-center"
              >
                <h3 className="font-heading text-lg font-semibold text-navy-800 dark:text-white mb-2">
                  {d.frequency}
                </h3>
                <span className="text-2xl font-bold text-accent-500">{d.discount}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Need a quote for a commercial property or a larger project?
            </p>
            <Link
              href="/booking"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg shadow-accent-500/25 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
