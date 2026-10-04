'use client';

import { useState, useEffect } from 'react';

const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');

  const login = (e) => {
    e.preventDefault();
    setAuthenticated(true);
    fetchBookings();
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings?password=${encodeURIComponent(password)}`);
      const data = await res.json();
      if (data.bookings) setBookings(data.bookings);
    } catch {}
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    await fetch(`/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, password }),
    });
    fetchBookings();
  };

  const filtered = filter === 'all' ? bookings : bookings.filter((b) => b.status === filter);

  if (!authenticated) {
    return (
      <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <form onSubmit={login} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <h1 className="font-heading text-2xl font-bold text-navy-800 dark:text-white mb-6 text-center">
            Admin Login
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white mb-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Log In
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="font-heading text-3xl font-bold text-navy-800 dark:text-white">
            Booking Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Filter:</span>
            {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition ${
                  filter === s
                    ? 'bg-navy-800 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-400">Loading bookings...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-400">No bookings found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">ID</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Customer</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Service</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Property</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Date</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-500 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((b) => (
                    <tr key={b.id} className="border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition">
                      <td className="p-4 text-gray-600 dark:text-gray-300 font-mono">#{b.id}</td>
                      <td className="p-4">
                        <div className="font-semibold text-gray-800 dark:text-white">{b.full_name}</div>
                        <div className="text-gray-400 text-xs">{b.email}</div>
                        <div className="text-gray-400 text-xs">{b.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700 dark:text-gray-200 capitalize">{b.service_type}</div>
                        <div className="text-gray-400 text-xs capitalize">{b.frequency}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700 dark:text-gray-200 capitalize">{b.property_type}</div>
                        <div className="text-gray-400 text-xs">{b.postcode}</div>
                      </td>
                      <td className="p-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                        {new Date(b.preferred_date).toLocaleDateString('en-GB')}
                        <div className="text-gray-400 text-xs capitalize">{b.preferred_time}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_COLORS[b.status]}`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1 flex-wrap">
                          {b.status !== 'confirmed' && (
                            <button onClick={() => updateStatus(b.id, 'confirmed')} className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-100 dark:hover:bg-blue-900/40 transition">
                              Confirm
                            </button>
                          )}
                          {b.status !== 'completed' && (
                            <button onClick={() => updateStatus(b.id, 'completed')} className="px-2 py-1 text-xs bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded hover:bg-green-100 dark:hover:bg-green-900/40 transition">
                              Complete
                            </button>
                          )}
                          {b.status !== 'cancelled' && (
                            <button onClick={() => updateStatus(b.id, 'cancelled')} className="px-2 py-1 text-xs bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded hover:bg-red-100 dark:hover:bg-red-900/40 transition">
                              Cancel
                            </button>
                          )}
                          <a href={`/admin/invoice/${b.id}?password=${encodeURIComponent(password)}`} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                            Invoice
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-400 dark:text-gray-500">
          Showing {filtered.length} booking{filtered.length !== 1 ? 's' : ''}
        </div>
      </div>
    </main>
  );
}
