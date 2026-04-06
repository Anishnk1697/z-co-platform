import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What types of healthcare real estate does Z-Co develop?',
    a: 'Z-Co develops a range of healthcare real estate assets including integrated medical campuses, outpatient medical office buildings, community hospitals, physician practice facilities, and healthcare-anchored mixed-use developments. Our flagship healthcare project, MedPlex, combines licensed hospital services, outpatient care, and a physician network in one integrated platform.'
  },
  {
    q: 'Why is healthcare real estate a strong investment?',
    a: 'Healthcare real estate is one of the most recession-resistant property types. Demand for medical services grows with population and aging demographics, regardless of economic cycles. Healthcare tenants sign long-term leases, have low default rates, and anchor the surrounding community — creating durable, long-term income streams for investors.'
  },
  {
    q: 'What markets does Z-Co target for healthcare development?',
    a: 'Z-Co focuses on fast-growing Texas markets — particularly Katy and the Greater Houston area — where population growth, specialist shortages, and underserved communities create strong demand for integrated healthcare infrastructure.'
  },
  {
    q: 'How does Z-Co structure investment in healthcare projects?',
    a: 'Z-Co structures healthcare investments with a focus on capital efficiency and investor alignment. We utilize joint ventures, preferred equity, and EB-5 capital stacks depending on the project. Each structure is designed to match investor preferences for risk, return, and liquidity profile.'
  },
  {
    q: 'Can EB-5 investors participate in Z-Co healthcare projects?',
    a: 'Yes. Z-Co\'s healthcare developments are structured to accommodate EB-5 investment through designated Regional Centers. These projects create substantial qualified employment, meeting EB-5 job creation requirements while providing investors a path toward permanent U.S. residency.'
  }
];

const HealthcareRealEstate = () => {
  useSEO({
    title: 'Healthcare Real Estate Developer | Z-Co Development',
    description: 'Z-Co Development is an integrated healthcare real estate developer specializing in medical campuses, outpatient facilities, and physician-centered healthcare developments in Texas.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            Healthcare Real Estate
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            Healthcare Real Estate<br />
            <span className="text-slate-400">Developer & Investor</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
            Z-Co Development designs, builds, and operates integrated healthcare real estate assets in high-growth U.S. markets. From licensed community hospitals to outpatient campuses, we deliver physician-centered healthcare infrastructure that serves communities and generates durable returns for investors.
          </p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">The Case for Healthcare Real Estate Investment</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Healthcare real estate is one of the most compelling property sectors in the United States today. Unlike traditional commercial or residential real estate, healthcare facilities serve a fundamental human need — access to medical care — that grows consistently alongside population and demographic aging. This creates a uniquely recession-resistant demand base that shields investors from economic volatility.</p>
              <p>The United States faces a growing shortage of primary and specialty care physicians, hospital beds, and outpatient facilities, particularly in fast-growing suburban and exurban markets. This structural undersupply creates significant opportunity for developers who can deliver high-quality healthcare real estate in undersupported communities.</p>
              <p>Z-Co Development has built a specialized platform to address this opportunity. Our healthcare projects are designed around the physician experience — creating environments where doctors can practice efficiently, deliver excellent patient outcomes, and build long-term practices — while simultaneously meeting the operational needs of health systems, insurers, and communities.</p>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Our flagship healthcare development, MedPlex, represents this vision in practice. Located in Katy, Texas — one of the fastest-growing communities in the United States — MedPlex integrates a licensed community hospital, outpatient medical services, and a physician network in a single platform. It is designed to deliver convenient, high-quality care while giving physicians greater freedom and flexibility in how they practice.</p>
              <p>Beyond MedPlex, Z-Co's healthcare pipeline includes medical office buildings, surgical centers, imaging facilities, and healthcare-anchored mixed-use developments. Each project is underwritten with a rigorous focus on market demand, payor mix, physician supply, and community health needs.</p>
              <p>Investors in Z-Co's healthcare projects benefit from long-lease-term revenues, creditworthy tenants, and the reputational anchor that healthcare brings to mixed-use and community-oriented development projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare RE */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Healthcare Real Estate Outperforms</h2>
          <p className="text-slate-400 mb-12 text-lg">Demographic, structural, and economic forces make healthcare real estate one of the strongest long-term investment sectors.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Aging Population', desc: 'The U.S. population over 65 is projected to double by 2050. Healthcare utilization accelerates with age — driving long-term demand for medical facilities.' },
              { title: 'Long Lease Terms', desc: 'Healthcare tenants — hospitals, physician groups, health systems — sign 10–20 year leases with renewal options, delivering exceptional income stability.' },
              { title: 'Low Default Rate', desc: 'Healthcare tenants have among the lowest default rates in commercial real estate. Essential services and creditworthy sponsors protect investor capital.' },
              { title: 'Community Anchor', desc: 'Healthcare facilities act as community anchors, supporting surrounding retail, residential, and commercial real estate values.' },
              { title: 'Physician Demand', desc: 'The U.S. faces a projected shortage of 37,000–124,000 physicians by 2034, creating demand for physician-friendly practice environments.' },
              { title: 'Operational Integration', desc: 'Z-Co integrates real estate ownership with healthcare operations, capturing value across both the property and the service delivery platform.' }
            ].map((item, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MedPlex */}
      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Featured Project: MedPlex — Katy, Texas</h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>MedPlex is Z-Co Development's flagship healthcare project — a patient-centered healthcare platform that combines a licensed community hospital, outpatient medical services, and a physician network in one integrated system. Designed to deliver convenient, high-quality care while giving physicians greater freedom and flexibility, MedPlex represents a new model for healthcare delivery in growing Texas communities.</p>
            <p>Katy, Texas is among the fastest-growing cities in the United States, with a rapidly expanding population that has outpaced healthcare infrastructure investment for years. MedPlex is purpose-built to close this gap — providing the community with access to hospital-level care, specialist services, and preventive medicine in a single, convenient location.</p>
            <p>For investors, MedPlex offers exposure to one of the most resilient asset classes in real estate, anchored by long-term leases, creditworthy physician tenants, and a community with exceptional demographic growth fundamentals. Inquire with our team for current investment opportunities in the MedPlex project.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">View Portfolio <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:border-white transition-all">Contact Us <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-24 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Partner with a Healthcare Real Estate Developer</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Whether you are an investor, physician group, health system, or landowner — Z-Co is actively seeking partners to expand our healthcare real estate platform across Texas and the Sun Belt.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareRealEstate;
