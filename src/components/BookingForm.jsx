'use client';

import { useState } from 'react';

const prices = {
  flat:            { exterior: 10, interior: 12, full: 18 },
  terrace:         { exterior: 15, interior: 18, full: 28 },
  'semi-detached': { exterior: 20, interior: 24, full: 35 },
  detached:        { exterior: 30, interior: 35, full: 50 },
  commercial:      { exterior: 0,  interior: 0,  full: 0  },
};

const discounts = {
  'one-off':    0,
  monthly:   0.10,
  'bi-weekly': 0.15,
  weekly:    0.20,
};

function getEstimate(property, service, frequency) {
  if (!property || !service) return null;
  if (property === 'commercial') return { text: 'Contact us for a free commercial quote.', price: null };
  const base = prices[property]?.[service];
  if (!base) return null;
  const disc = discounts[frequency] || 0;
  const final_price = base * (1 - disc);
  const discLabel = disc > 0 ? ` (${disc * 100}% regular discount applied)` : '';
  return { text: `Estimated price: £${final_price.toFixed(2)} per visit${discLabel}`, price: final_price };
}

function todayString() {
  return new Date().toISOString().split('T')[0];
}

export default function BookingForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    property_type: '',
    num_bedrooms: '2',
    service_type: '',
    frequency: 'one-off',
    preferred_date: '',
    preferred_time: 'any',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!form.full_name.trim()) errs.full_name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required.';
    if (!form.phone.trim()) errs.phone = 'Phone is required.';
    if (!form.address.trim()) errs.address = 'Address is required.';
    if (!form.postcode.trim()) errs.postcode = 'Postcode is required.';
    if (!form.property_type) errs.property_type = 'Select a property type.';
    if (!form.service_type) errs.service_type = 'Select a service.';
    if (!form.preferred_date) errs.preferred_date = 'Pick a date.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({
          full_name: '', email: '', phone: '', address: '', postcode: '',
          property_type: '', num_bedrooms: '2', service_type: '',
          frequency: 'one-off', preferred_date: '', preferred_time: 'any', message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const estimate = getEstimate(form.property_type, form.service_type, form.frequency);

  const fieldClass = (key) =>
    `w-full rounded-lg border ${errors[key] ? 'border-red-400 ring-2 ring-red-100' : 'border-gray-300'} px-4 py-3 text-gray-800 transition focus:border-accent-500 focus:ring-2 focus:ring-accent-100`;

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-green-800 mb-2">Booking Submitted!</h3>
        <p className="text-green-700 mb-6">
          Thank you for choosing K J Window Cleaners. We will contact you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Book Another Clean
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          Something went wrong. Please try again or call us directly on 07466 360756.
        </div>
      )}

      {/* Personal Details */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-sm flex items-center justify-center font-bold">1</span>
          Your Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input id="full_name" type="text" value={form.full_name} onChange={set('full_name')} className={fieldClass('full_name')} placeholder="John Smith" />
            {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input id="email" type="email" value={form.email} onChange={set('email')} className={fieldClass('email')} placeholder="john@example.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input id="phone" type="tel" value={form.phone} onChange={set('phone')} className={fieldClass('phone')} placeholder="07123 456 789" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-sm flex items-center justify-center font-bold">2</span>
          Property Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <input id="address" type="text" value={form.address} onChange={set('address')} className={fieldClass('address')} placeholder="123 Example Street, Manchester" />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
            <input id="postcode" type="text" value={form.postcode} onChange={set('postcode')} className={fieldClass('postcode')} placeholder="M1 1AA" />
            {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
          </div>
          <div>
            <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-1">Property Type *</label>
            <select id="property_type" value={form.property_type} onChange={set('property_type')} className={fieldClass('property_type')}>
              <option value="">Select property type</option>
              <option value="flat">Flat / Apartment</option>
              <option value="terrace">Terrace</option>
              <option value="semi-detached">Semi-Detached</option>
              <option value="detached">Detached</option>
              <option value="commercial">Commercial</option>
            </select>
            {errors.property_type && <p className="text-red-500 text-xs mt-1">{errors.property_type}</p>}
          </div>
          <div>
            <label htmlFor="num_bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <select id="num_bedrooms" value={form.num_bedrooms} onChange={set('num_bedrooms')} className={fieldClass('num_bedrooms')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy-800 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-sm flex items-center justify-center font-bold">3</span>
          Service Selection
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'exterior', label: 'Exterior Only', sub: 'Outside windows' },
              { value: 'interior', label: 'Interior Only', sub: 'Inside windows' },
              { value: 'full', label: 'Full Clean', sub: 'Inside + Outside' },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`relative flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  form.service_type === opt.value
                    ? 'border-accent-500 bg-accent-50 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="service_type"
                  value={opt.value}
                  checked={form.service_type === opt.value}
                  onChange={set('service_type')}
                  className="sr-only"
                />
                <span className="font-semibold text-navy-800">{opt.label}</span>
                <span className="text-gray-400 text-xs">{opt.sub}</span>
                {opt.value === 'full' && (
                  <span className="absolute -top-2 right-2 text-[10px] bg-accent-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                    BEST VALUE
                  </span>
                )}
              </label>
            ))}
          </div>
          {errors.service_type && <p className="text-red-500 text-xs mt-1">{errors.service_type}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <select id="frequency" value={form.frequency} onChange={set('frequency')} className={fieldClass('frequency')}>
              <option value="one-off">One-Off Clean</option>
              <option value="weekly">Weekly (20% off)</option>
              <option value="bi-weekly">Bi-Weekly (15% off)</option>
              <option value="monthly">Monthly (10% off)</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
            <input id="preferred_date" type="date" min={todayString()} value={form.preferred_date} onChange={set('preferred_date')} className={fieldClass('preferred_date')} />
            {errors.preferred_date && <p className="text-red-500 text-xs mt-1">{errors.preferred_date}</p>}
          </div>
          <div>
            <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
            <select id="preferred_time" value={form.preferred_time} onChange={set('preferred_time')} className={fieldClass('preferred_time')}>
              <option value="any">Any Time</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
            </select>
          </div>
        </div>

        {estimate && (
          <div className={`mt-4 p-4 rounded-xl text-sm font-medium ${estimate.price ? 'bg-accent-50 text-accent-700 border border-accent-200' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
            {estimate.text}
          </div>
        )}
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (optional)</label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={set('message')}
          className={fieldClass('message')}
          placeholder="Any access instructions, specific requirements, or questions..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-accent-500/25 disabled:shadow-none flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Booking Request'
        )}
      </button>

      <p className="text-center text-gray-400 text-xs">
        By submitting, you agree to be contacted about your booking. We will never share your details.
      </p>
    </form>
  );
}
