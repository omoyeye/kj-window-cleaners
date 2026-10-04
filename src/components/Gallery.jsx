'use client';

import { useState } from 'react';

const projects = [
  {
    location: 'Didsbury',
    type: '4 Bed Detached',
    description: 'Full exterior and interior clean on a large detached property. Heavy build-up removed from all 22 windows.',
  },
  {
    location: 'Chorlton',
    type: '3 Bed Semi-Detached',
    description: 'Regular monthly clean. Water-fed pole system used for all exterior windows including upstairs.',
  },
  {
    location: 'Altrincham',
    type: 'Commercial Office',
    description: 'Weekly clean of 40+ office windows across two floors. Completed before business hours every Monday.',
  },
  {
    location: 'Stockport',
    type: '2 Bed Terrace',
    description: 'One-off deep clean before a house sale. All windows, frames, and sills thoroughly cleaned inside and out.',
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
          {/* Before/After Showcase */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Before side */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-gradient-to-br from-stone-400 via-stone-300 to-amber-200/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)' }} />
                  <span className="bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">Before</span>
                </div>
                <div className="w-1/2 bg-gradient-to-br from-sky-200 via-sky-100 to-white flex items-center justify-center relative">
                  <div className="absolute top-4 right-4 w-6 h-6 text-accent-300">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">After</span>
                </div>
              </div>
              {/* Divider line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-lg z-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg z-20 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-400 dark:text-gray-500 text-xs">
              Replace these placeholders with your own before and after photos
            </p>
          </div>

          {/* Project cards */}
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
