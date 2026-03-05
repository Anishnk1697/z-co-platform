import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SmartImage } from '@/components/SmartMedia';

const Portfolio = () => {
  const categories = [
    { name: 'Multifamily', id: 'multifamily', seed: 'multifamily' },
    { name: 'Medical', id: 'medical', seed: 'medical' },
    { name: 'Residential', id: 'residential', seed: 'residential' },
    { name: 'Hotels', id: 'hotels', seed: 'hotel' },
    { name: 'Automotive', id: 'automotive', seed: 'automotive' },
    { name: 'Restaurants', id: 'restaurants', seed: 'restaurant' },
    { name: 'Beauty', id: 'beauty', seed: 'beauty' },
    { name: 'Other', id: 'other', seed: 'other' }
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
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            A track record of excellence across diverse real estate sectors. Explore our completed projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={`/portfolio/${cat.id}`}
              className="group relative h-64 rounded-3xl overflow-hidden border border-slate-800 transition-all hover:border-slate-500"
            >
              <SmartImage
                alt={cat.name}
                fallbackSeed={cat.seed}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
                  {cat.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-2 font-bold">
                  View Projects
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
