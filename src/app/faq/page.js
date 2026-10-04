import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'FAQ | K J Window Cleaners',
  description: 'Frequently asked questions about our window cleaning services in Manchester. Find answers about booking, pricing, and more.',
};

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Got questions? We have answers. If you do not find what you are looking
            for, feel free to get in touch.
          </p>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
