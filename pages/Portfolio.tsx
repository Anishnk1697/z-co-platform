import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/SmartMedia';
import { useSEO } from '../hooks/useSEO';
import FAQSection from '../components/FAQSection';

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
      description: 'MedPlex is a patient-centered healthcare platform that combines a licensed community hospital, outpatient medical services, and a physician network in one integrated system.',
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
    <>
      <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-6 lg:px-14 max-w-7xl mx-auto space-y-32">

        {/* Current Projects Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Pipeline</p>
            <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink mb-5 leading-[1.06]">
              Current Projects
            </h1>
            <div className="w-9 h-px bg-gold mb-6" />
            <p className="text-base text-mid font-light leading-[1.85]">
              Explore our current pipeline and the innovative developments we are currently bringing to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.07)]">
            {currentProjects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white overflow-hidden group"
              >
                <div className="h-64 overflow-hidden relative">
                  <SmartImage
                    alt={`${project.title} - ${project.location} - Real Estate Development Project`}
                    fallbackSeed={project.fallbackSeed}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink2/70 to-transparent" />
                </div>
                <div className="p-8 border-t border-[rgba(0,0,0,0.07)]">
                  <h3 className="font-serif font-light text-2xl text-ink mb-1">{project.title}</h3>
                  <p className="text-[10px] text-gold uppercase tracking-[0.17em] mb-4 font-normal">{project.location}</p>
                  <p className="text-mid text-sm leading-[1.85] mb-6 font-light">
                    {project.description}
                  </p>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink font-normal text-[11px] uppercase tracking-[0.16em] border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-all"
                    >
                      Download Brochure
                      <ArrowRight className="w-3 h-3" />
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
            <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Track Record</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mb-5 leading-[1.06]">
              Completed Projects
            </h2>
            <div className="w-9 h-px bg-gold mb-6" />
            <p className="text-base text-mid font-light leading-[1.85]">
              A track record of excellence across diverse real estate sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.07)]">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={`/portfolio/${cat.id}`}
                className="group relative h-64 overflow-hidden bg-ink2"
              >
                <SmartImage
                  alt={`${cat.name} Portfolio - Z-Co Real Estate Development`}
                  fallbackSeed={cat.seed}
                  className={`absolute inset-0 w-full h-full ${cat.imageFit} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink2 via-ink2/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="font-serif font-light text-xl text-white group-hover:text-white/80 transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] mt-2 font-normal">
                    View Projects
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <FAQSection
        heading="Real Estate Investment FAQ"
        faqs={[
          {
            question: 'What types of real estate projects does Z-Co develop?',
            answer: <>Z-Co develops across three core asset classes: <Link to="/build-to-rent-developer-usa" className="underline hover:text-ink transition-colors">build-to-rent</Link> residential communities, <Link to="/healthcare-real-estate-developer" className="underline hover:text-ink transition-colors">healthcare real estate</Link>, and <Link to="/mixed-use-real-estate-developer" className="underline hover:text-ink transition-colors">mixed-use</Link> developments. All projects are concentrated in high-growth Texas Sun Belt markets.</>
          },
          {
            question: 'What is build-to-rent development?',
            answer: 'Build-to-rent (BTR) development involves designing and constructing residential communities specifically for long-term rental rather than individual sale. BTR communities typically feature single-family homes or townhomes with private yards, garages, and community amenities — all operated under professional management by the ownership entity.'
          },
          {
            question: 'What is EB-5 investment and how does Z-Co use it?',
            answer: <>The <Link to="/eb5-real-estate-projects-usa" className="underline hover:text-ink transition-colors">EB-5 Immigrant Investor Program</Link> allows qualifying foreign nationals to invest in U.S. commercial enterprises that create American jobs, in exchange for U.S. permanent residency eligibility. Z-Co structures its larger development projects to qualify for EB-5 investment through USCIS-approved Regional Centers.</>
          },
          {
            question: 'How can I invest in Z-Co development projects?',
            answer: <>Z-Co accepts investment from <Link to="/real-estate-investment-platform" className="underline hover:text-ink transition-colors">accredited investors</Link> through several structures: direct project co-investment, preferred equity, mezzanine debt participation, and EB-5 investment. Request our investor packet via the Contact section to discuss current availability.</>
          },
          {
            question: 'How do joint venture real estate partnerships work?',
            answer: <>A real estate <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">joint venture (JV)</Link> is a partnership between two or more parties who contribute capital, expertise, or land to a development project in exchange for a share of the profits. Z-Co pursues JV partnerships with landowners, family offices, institutional capital partners, and operators.</>
          },
        ]}
      />
    </>
  );
};

export default Portfolio;
