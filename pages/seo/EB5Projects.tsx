import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is the EB-5 Immigrant Investor Program?',
    a: 'The EB-5 Immigrant Investor Program, administered by U.S. Citizenship and Immigration Services (USCIS), allows foreign nationals to obtain U.S. permanent residency (a green card) by investing capital in qualifying U.S. commercial enterprises that create or preserve at least 10 full-time jobs for U.S. workers. Projects in Targeted Employment Areas (TEAs) require a minimum investment of $800,000.'
  },
  {
    q: 'How does EB-5 work in real estate development?',
    a: 'Real estate projects are among the most common EB-5 vehicles because they are capital-intensive, create substantial construction and operational employment, and offer a tangible, understandable investment. EB-5 capital is typically structured as subordinated debt or preferred equity within the project\'s capital stack, behind senior lenders and ahead of common equity. Investors receive a fixed return with the primary goal being job creation and immigration benefit.'
  },
  {
    q: 'Are Z-Co projects eligible for EB-5 investment?',
    a: 'Yes. Z-Co structures its projects to accommodate EB-5 investment through designated USCIS-approved Regional Centers. Our projects in Katy, Texas and Greater Houston create substantial direct and indirect employment that meets and exceeds EB-5 job creation requirements.'
  },
  {
    q: 'What is the typical EB-5 investment timeline?',
    a: 'The EB-5 process typically involves an investment period of 5–7 years from capital commitment to potential repatriation, depending on project completion, USCIS processing times, and State Department visa availability. Processing timelines vary by nationality. Z-Co works with experienced EB-5 legal counsel to guide investors through every stage of the process.'
  },
  {
    q: 'What due diligence should I conduct before investing in an EB-5 project?',
    a: 'Prospective EB-5 investors should review the project\'s offering documents, Regional Center designation, escrow arrangement, I-526 track record, job creation methodology, and developer financial statements. Z-Co provides a comprehensive investor packet and works with investors and their legal and financial advisors to ensure thorough due diligence.'
  }
];

const EB5Projects = () => {
  useSEO({
    title: 'EB-5 Real Estate Projects USA | Z-Co Development',
    description: 'Z-Co Development offers qualified EB-5 real estate investment opportunities in the USA. Our projects in Texas create the required jobs while providing a path to U.S. permanent residency.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">EB-5 Investment</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            EB-5 Real Estate<br /><span className="text-slate-400">Projects in the USA</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">Z-Co Development offers qualified EB-5 investment opportunities in high-quality U.S. real estate projects that create substantial American jobs and provide a structured path toward U.S. permanent residency for qualifying foreign nationals.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Is EB-5 & Why Real Estate?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>The EB-5 Immigrant Investor Program is one of the most direct pathways to U.S. permanent residency available to foreign nationals. Administered by U.S. Citizenship and Immigration Services (USCIS), the program requires a qualifying investment in a U.S. commercial enterprise that creates or preserves at least 10 full-time positions for U.S. workers. For investments in Targeted Employment Areas (TEAs) — rural or high-unemployment zones — the minimum investment threshold is $800,000.</p>
              <p>Real estate development projects have consistently been among the most popular and successful EB-5 investment vehicles. Large-scale construction projects create thousands of direct and indirect jobs, exceed minimum employment requirements reliably, and offer a tangible, understandable investment that investors and their advisors can evaluate with confidence.</p>
              <p>The EB-5 program underwent significant reform with the EB-5 Reform and Integrity Act of 2022, which introduced new safeguards for investors, new TEA designations, and enhanced Regional Center oversight. Z-Co's compliance team monitors program developments closely to ensure our projects remain fully compliant and investor-ready.</p>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Z-Co Development's projects in high-growth Texas markets are particularly well-suited to EB-5 investment. Our developments — including TowneCenter, MedPlex, and Strobes Tower — create substantial direct construction employment and substantial indirect economic activity across the supply chain and local service economy.</p>
              <p>For investors, EB-5 projects offer a dual benefit: the potential for capital return through project operations and the primary objective of obtaining U.S. green cards for the investor and their family. EB-5 is widely recognized as one of the fastest and most reliable pathways to U.S. permanent residency for high-net-worth individuals from qualifying countries.</p>
              <p>Z-Co partners with experienced EB-5 legal counsel, USCIS-approved Regional Centers, and independent economic analysts to structure our EB-5 offerings with maximum investor protection, full regulatory compliance, and credible job creation methodologies. We are committed to transparency and investor communication throughout the process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Z-Co EB-5 Investment Advantages</h2>
          <p className="text-slate-400 mb-12 text-lg">Z-Co provides a structured, transparent EB-5 investment experience backed by experienced developers and a proven project pipeline.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Proven Developer', desc: 'Z-Co brings 30+ years of real estate development experience across multiple asset classes — providing the operational credibility that EB-5 investors and their advisors demand.' },
              { title: 'Job Creation Reliability', desc: 'Our large-scale projects consistently generate multiples of the minimum EB-5 job creation requirement, using conservative methodologies endorsed by independent economists.' },
              { title: 'Transparent Structure', desc: 'Z-Co provides clear, fully auditable capital stacks, detailed use-of-proceeds documentation, and regular investor reporting throughout the project lifecycle.' },
              { title: 'Texas Market Strength', desc: 'Our projects are located in Texas — one of the strongest economic and population-growth states in the U.S. — providing a solid market foundation for capital deployment.' },
              { title: 'Experienced Legal Team', desc: 'We work with nationally recognized EB-5 immigration attorneys and securities counsel to ensure every offering is fully compliant with USCIS and SEC requirements.' },
              { title: 'Investor-First Approach', desc: 'Z-Co structures EB-5 investments to prioritize investor protection, with senior position preferences, escrow arrangements, and clear repayment timelines.' }
            ].map((item, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 text-slate-400 leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How to Get Started with Z-Co EB-5</h2>
          <p>Getting started with an EB-5 investment through Z-Co is straightforward. Begin by requesting our investor packet, which provides a comprehensive overview of our current project pipeline, capital structures, expected return profiles, and job creation documentation. Our investor relations team will follow up promptly to answer questions and schedule a detailed project briefing.</p>
          <p>We strongly recommend that prospective EB-5 investors engage an experienced EB-5 immigration attorney early in the process. The immigration and investment aspects of EB-5 are distinct legal disciplines, and proper legal representation is essential to protecting your immigration interests. Z-Co can provide referrals to qualified EB-5 counsel upon request.</p>
          <p>Once you have completed your due diligence and received legal advice, Z-Co's team will guide you through the investment subscription process, escrow arrangement, I-526 petition preparation, and ongoing project reporting. We are committed to being a responsive, transparent, and professional partner throughout your EB-5 journey.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">Request Investor Packet <ArrowRight className="w-3.5 h-3.5" /></Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:border-white transition-all">About Z-Co <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/40 transition-colors">
                  <span className="font-bold text-white pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Explore EB-5 Investment with Z-Co</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Join a growing community of international investors building their U.S. future through Z-Co's real estate development platform. Request your investor packet today.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EB5Projects;
