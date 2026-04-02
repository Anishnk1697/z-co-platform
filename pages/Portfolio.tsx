import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/SmartMedia';
import { useSEO } from '../hooks/useSEO';

const Portfolio = () => {
  useSEO({
    title: 'Real Estate Portfolio | Z-Co Development USA',
    description: 'View the portfolio of Z-Co Development including residential, healthcare and mixed-use real estate developments.'
  });

  const currentProjects = [
    {
      title: 'TowneCenter',
      location: 'Katy, Texas',
      fallbackSeed: 'townecenter',
      description: 'A mixed-use development on Fry Road featuring Class-A apartments, senior living, climate-controlled storage, and modern medical offices.',
      link: 'https://drive.google.com/file/d/1MMH6BE9Age7gM1lRrIDedvDnkArYZ_22/view?usp=drive_link',
      imagePosition: 'center top'
    },
    {
      title: 'MedPlex',
      location: 'Katy, Texas',
      fallbackSeed: 'medplex',
      description: 'MedPlex is a patient-centered healthcare platform that combines a licensed community hospital, outpatient medical services, and a physician network in one integrated system. It is designed to deliver convenient, high-quality care while giving physicians greater freedom and flexibility.',
      link: 'https://drive.google.com/file/d/1-A_PB-EHraeV0hcsIT-ZpKZjcobx0D2F/view?usp=drive_link',
      imagePosition: 'center 25%'
    },
    {
      title: 'Strobes Tower',
      location: 'Houston Medical Center',
      fallbackSeed: 'strobes',
      description: 'A nearly $280 million high-rise building offering a fusion of commercial, residential, and hotel spaces.',
      link: '#'
    },
    {
      title: 'Daycare Center',
      location: 'Katy, Texas',
      fallbackSeed: 'daycare-center',
      description: 'A state-of-the-art educational childcare facility designed to provide a safe, engaging, and enriching environment for early childhood development.',
      link: '#'
    },
    {
      title: 'Dove Trails',
      location: 'San Antonio, Texas',
      fallbackSeed: 'dovetrails',
      description: 'A premier 4-plex development where modern living meets serene surroundings.',
      link: 'https://drive.google.com/file/d/1RnyDdI7DBe-pqP6mr4Tp_3-hXf3wXQUv/view?usp=sharing'
    },
    {
      title: 'Shops @ Fry Road',
      location: 'Katy, Texas',
      fallbackSeed: 'shopsfryroad',
      description: 'A strategically located retail center designed to capture high-traffic demand. This development provides essential commercial space for neighborhood services and regional retail partners.',
      link: '#'
    }
  ];

  const categories = [
    { name: 'Multifamily', id: 'multifamily', seed: 'everson-building', imageFit: 'object-cover' },
    { name: 'Medical', id: 'medical', seed: 'elite-medical', imageFit: 'object-cover' },
    { name: 'Residential', id: 'residential', seed: 'dovetrails', imageFit: 'object-cover' },
    { name: 'Hotels', id: 'hotels', seed: 'hotel-best-western-1', imageFit: 'object-cover' },
    { name: 'Automotive', id: 'automotive', seed: 'stirling-auto-v2', imageFit: 'object-cover' },
    { name: 'Restaurants', id: 'restaurants', seed: 'restaurant-serious-pizza', imageFit: 'object-cover' },
    { name: 'Beauty', id: 'beauty', seed: 'urban-retreat', imageFit: 'object-cover' },
    { name: 'Retail', id: 'retail', seed: 'shopsfryroad', imageFit: 'object-cover' }
  ];

  return (
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
      {/* Current Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Current Projects
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Explore our current pipeline and the innovative developments we are currently bringing to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-500 transition-all overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <SmartImage
                  alt={`${project.title} - ${project.location} - Real Estate Development Project`}
                  fallbackSeed={project.fallbackSeed}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">{project.location}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Download Brochure
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Completed Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
            Completed Projects
          </h2>
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
                alt={`${cat.name} Portfolio - Z-Co Real Estate Development`}
                fallbackSeed={cat.seed}
                className={`absolute inset-0 w-full h-full ${cat.imageFit} group-hover:scale-110 transition-transform duration-700`}
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
