import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

const FAQSection = ({ faqs, heading = 'Frequently Asked Questions' }: FAQSectionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => {
      const answerText = typeof answer === 'string' ? answer : typeof answer?.toString === 'function' ? answer.toString() : '';
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answerText },
      };
    }),
  };

  return (
    <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8 bg-off">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto">
        <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-3">FAQ</p>
        <h2 className="font-serif font-light text-2xl sm:text-3xl text-ink mb-4">{heading}</h2>
        <div className="w-9 h-px bg-gold mb-10" />

        <div className="space-y-px bg-[rgba(0,0,0,0.07)]">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="text-sm font-light text-ink group-hover:text-gold transition-colors leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-mid transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-gold' : ''
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
                    <p className="px-6 pb-5 text-sm text-mid leading-[1.85] font-light">
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
