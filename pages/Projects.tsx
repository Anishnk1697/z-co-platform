import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/SmartMedia';

const Projects = () => {
  const currentProjects = [
    {
      title: 'TowneCenter',
      location: 'Katy, Texas',
      fallbackSeed: 'townecenter',
      description: 'A mixed-use development on Fry Road featuring Class-A apartments, senior living, climate-controlled storage, and modern medical offices.',
      link: 'https://drive.google.com/file/d/1MMH6BE9Age7gM1lRrIDedvDnkArYZ_22/view?usp=drive_link'
    },
    {
      title: 'MedPlex',
      location: 'USA',
      fallbackSeed: 'medplex',
      description: 'An office solution tailored to the evolving needs of the US healthcare industry, offering retail medical spaces and suites.',
      link: 'https://drive.google.com/file/d/1-A_PB-EHraeV0hcsIT-ZpKZjcobx0D2F/view?usp=drive_link'
    },
    {
      title: 'Strobes Tower',
      location: 'Houston Medical Center',
      fallbackSeed: 'strobes',
      description: 'A nearly $280 million high-rise building offering a fusion of commercial, residential, and hotel spaces.',
      link: '#'
    },
    {
      title: 'Dove Trails',
      location: 'Premier Community',
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

  return (
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                  alt={project.title}
                  fallbackSeed={project.fallbackSeed}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">{project.location}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Download Brochure
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
