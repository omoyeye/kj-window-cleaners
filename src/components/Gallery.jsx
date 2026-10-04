'use client';

import { useState } from 'react';

const projects = [
  {
    location: 'Didsbury',
    type: '4 Bed Detached',
    description: 'Full exterior and interior clean on a large detached property. Heavy build-up removed from all 22 windows.',
    image: '/result.jpg',
  },
  {
    location: 'Chorlton',
    type: '3 Bed Semi-Detached',
    description: 'Regular monthly clean. Water-fed pole system used for all exterior windows including upstairs.',
    image: '/service-ext.jpg',
  },
  {
    location: 'Altrincham',
    type: 'Commercial Office',
    description: 'Weekly clean of 40+ office windows across two floors. Completed before business hours every Monday.',
    image: '/hero-bg.jpg',
  },
  {
    location: 'Stockport',
    type: '2 Bed Terrace',
    description: 'One-off deep clean before a house sale. All windows, frames, and sills thoroughly cleaned inside and out.',
    image: '/about.jpg',
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800 dark:text-white mb-4">
            Our Recent Work
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of window cleaning projects across Greater Manchester.
            Every job receives the same care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={projects[activeIdx].image}
              alt={`Window cleaning project in ${projects[activeIdx].location}`}
              className="w-full aspect-[4/3] object-cover transition-opacity duration-300"
            />
          </div>

          <div className="space-y-3">
            {projects.map((p, i) => (
              <button
                key={p.location}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  activeIdx === i
                    ? 'border-accent-500 bg-accent-50 dark:bg-accent-900/20 shadow-sm'
                    : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-semibold text-navy-800 dark:text-white">
                    {p.location}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {p.type}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed transition-all ${
                  activeIdx === i
                    ? 'text-gray-600 dark:text-gray-300 max-h-20 opacity-100'
                    : 'text-gray-400 dark:text-gray-500 max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {p.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
