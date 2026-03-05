import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Z-Co. has transformed our approach to real estate investment. Their disciplined capital strategy and modular construction model are game-changers.",
      author: "David Richardson",
      role: "Institutional Investor"
    },
    {
      quote: "The speed and quality of delivery with Z-Co are unmatched. They truly understand the balance between innovation and operational excellence.",
      author: "Sarah Jenkins",
      role: "Healthcare Provider"
    },
    {
      quote: "Partnering with Z-Co has been a seamless experience. Their transparent reporting and milestone-linked execution provide absolute peace of mind.",
      author: "Michael Chen",
      role: "Strategic Partner"
    },
    {
      quote: "Their mixed-use developments set a new standard for urban living. Minimalist design meets functional excellence.",
      author: "Elena Rodriguez",
      role: "Retail Partner"
    }
  ];

  return (
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Testimonials
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Hear from our partners, investors, and clients about their experience working with Z-Co Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 relative"
            >
              <Quote className="w-10 h-10 text-slate-700 absolute top-8 right-8 opacity-50" />
              <p className="text-lg text-slate-300 italic mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
