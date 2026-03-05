import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            About Z-Co Development
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Z-Co. is a real estate and small business development company specializing in creating income-producing real estate projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              At Z-Co., we specialize in real estate and small business development, leveraging our expertise to design and implement efficient capital structures that consistently achieve or exceed targeted return on investment (ROI) goals for each project.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We are dedicated to delivering value through innovation, strategic planning, and operational excellence, ensuring sustainable growth for our clients and stakeholders.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Approach</h2>
            <ul className="space-y-4">
              {[
                { title: 'Dual Income Streams', desc: 'Generating revenue through operational success and real estate value appreciation.' },
                { title: 'Calculated Risk', desc: 'Balancing strategic risk-taking with high-profit potential to deliver exceptional outcomes.' },
                { title: 'Integrated Development', desc: 'Aligning development efforts seamlessly with investment strategies and operational goals.' },
                { title: 'Strategic Execution', desc: 'Ensuring a well-planned entry into projects, supported by a clearly defined exit strategy.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="h-2 w-2 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">{item.title}</span>
                    <span className="text-sm text-slate-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
