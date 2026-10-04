'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

const PRICES = {
  flat: { exterior: 10, interior: 12, full: 18 },
  terrace: { exterior: 15, interior: 18, full: 28 },
  'semi-detached': { exterior: 20, interior: 24, full: 35 },
  detached: { exterior: 30, interior: 35, full: 50 },
  commercial: { exterior: 45, interior: 50, full: 80 },
};

export default function InvoicePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const password = searchParams.get('password');
    fetch(`/api/bookings?password=${encodeURIComponent(password || '')}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.bookings) {
          const found = data.bookings.find((b) => b.id === parseInt(params.id));
          if (found) setBooking(found);
        }
      })
      .catch(() => {});
  }, [params.id, searchParams]);

  if (!booking) {
    return (
      <main className="pt-28 pb-20 min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Loading invoice...</p>
      </main>
    );
  }

  const basePrice = PRICES[booking.property_type]?.[booking.service_type] || 0;
  let discount = 0;
  if (booking.frequency === 'weekly') discount = 0.2;
  else if (booking.frequency === 'bi-weekly') discount = 0.15;
  else if (booking.frequency === 'monthly') discount = 0.1;

  const discountAmount = basePrice * discount;
  const total = basePrice - discountAmount;

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-100 print:bg-white print:pt-0">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-4 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Print / Save PDF
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <h1 className="font-heading text-2xl font-bold text-navy-800">K J Window Cleaners</h1>
              <p className="text-gray-400 text-sm mt-1">Professional Window Cleaning Services</p>
              <p className="text-gray-400 text-sm">Manchester, Greater Manchester</p>
              <p className="text-gray-400 text-sm">07466 360756</p>
            </div>
            <div className="text-right">
              <h2 className="font-heading text-xl font-bold text-navy-800">INVOICE</h2>
              <p className="text-gray-500 text-sm mt-1">#{String(booking.id).padStart(4, '0')}</p>
              <p className="text-gray-500 text-sm">{new Date(booking.created_at).toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          {/* Customer */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Bill To</h3>
            <p className="font-semibold text-gray-800">{booking.full_name}</p>
            <p className="text-gray-500 text-sm">{booking.address}</p>
            <p className="text-gray-500 text-sm">{booking.postcode}</p>
            <p className="text-gray-500 text-sm">{booking.email}</p>
          </div>

          {/* Line items */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-sm font-semibold text-gray-500">Description</th>
                <th className="text-right py-3 text-sm font-semibold text-gray-500">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4">
                  <div className="font-medium text-gray-800 capitalize">
                    {booking.service_type} Window Clean
                  </div>
                  <div className="text-gray-400 text-sm capitalize">
                    {booking.property_type} property | {booking.frequency} service
                  </div>
                  <div className="text-gray-400 text-sm">
                    Scheduled: {new Date(booking.preferred_date).toLocaleDateString('en-GB')} ({booking.preferred_time})
                  </div>
                </td>
                <td className="py-4 text-right font-medium text-gray-800">
                  &pound;{basePrice.toFixed(2)}
                </td>
              </tr>
              {discount > 0 && (
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-green-600 text-sm capitalize">
                    {booking.frequency} discount ({(discount * 100).toFixed(0)}%)
                  </td>
                  <td className="py-3 text-right text-green-600 text-sm">
                    -&pound;{discountAmount.toFixed(2)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Total */}
          <div className="flex justify-end mb-10">
            <div className="w-48">
              <div className="flex justify-between py-2 border-t-2 border-navy-800">
                <span className="font-heading font-bold text-navy-800">Total</span>
                <span className="font-heading font-bold text-navy-800">&pound;{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-xs border-t border-gray-100 pt-6">
            <p>Thank you for choosing K J Window Cleaners.</p>
            <p className="mt-1">Payment is due upon completion of service.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
