import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  /** Optional heading override, defaults to "Frequently Asked Questions" */
  heading?: string;
}

/**
 * Reusable FAQ accordion with inline FAQPage JSON-LD schema.
 * Drop this anywhere on a page — it injects the schema automatically.
 */
const FAQSection = ({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => {
      // If answer is simple string we use it, if it's ReactNode we try to extract text or default to a safe string.
      // This is a simple workaround since schema needs raw string text.
      const answerText = typeof answer === 'string' ? answer : typeof answer?.toString === 'function' ? answer.toString() : '';
      return {
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText,
      },
    }}),
  };

  return (
    <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">{heading}</h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-950/40 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-slate-500 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
