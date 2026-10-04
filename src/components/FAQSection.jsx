'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How often should I have my windows cleaned?',
    a: 'For residential properties, we recommend a clean every 4 to 6 weeks. This keeps your windows looking their best and prevents the build-up of dirt and grime that can damage glass over time.',
  },
  {
    q: 'Do you use ladders?',
    a: 'For most residential properties, we use water-fed pole systems that allow us to clean windows safely from the ground. Ladders are only used when absolutely necessary, and our team is fully trained in ladder safety.',
  },
  {
    q: 'What happens if it rains after my clean?',
    a: 'Our water-fed pole system uses purified water, which means your windows will dry without any spots or streaks, even if it rains. If you are not satisfied, we will happily re-clean free of charge.',
  },
  {
    q: 'Are you insured?',
    a: 'Yes. We carry full public liability insurance covering up to two million pounds. You can request a copy of our certificate at any time.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover all of Manchester and Greater Manchester, including Salford, Stockport, Trafford, Bury, Bolton, Oldham, Rochdale, Tameside, and Wigan.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept cash, bank transfer, and card payments. Payment is due on the day of your clean. For regular customers, we can arrange monthly invoicing.',
  },
  {
    q: 'Can I book a one-off clean?',
    a: 'Absolutely. While many of our customers prefer regular cleans, we are happy to carry out one-off cleans for special occasions, pre-sale preparation, or spring cleaning.',
  },
  {
    q: 'Do you clean conservatory roofs?',
    a: 'Our core service is window cleaning. However, we can clean conservatory glass panels as part of an exterior clean. Please mention this when booking so we can provide an accurate quote.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about our window cleaning service.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-semibold text-navy-800 hover:text-accent-600 transition-colors"
              >
                <span className="pr-4">{item.q}</span>
                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-current text-sm transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? 'max-h-64 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-500 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
