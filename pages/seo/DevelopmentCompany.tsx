import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What does Z-Co Development do?',
    a: 'Z-Co Development Corp. is a fully integrated real estate development platform that designs, builds, and manages income-producing real estate assets in high-growth U.S. markets. Our core competencies span build-to-rent residential communities, healthcare real estate, mixed-use developments, and EB-5-eligible commercial projects, predominantly in Texas, Florida, and Arizona.'
  },
  {
    q: 'Where is Z-Co Development headquartered?',
    a: 'Z-Co Development Corp. is headquartered in Houston, Texas, at 5120 Woodway Dr., Suite 7018. Our projects are located across the Texas Sun Belt, with active developments in Katy, Texas, San Antonio, Texas, and the Greater Houston Medical Center corridor.'
  },
  {
    q: 'How long has Z-Co been in business?',
    a: 'Z-Co\'s CEO and founder Mike Butte brings over 30 years of real estate development and operating business experience — with a track record across multiple asset classes including hospitality, quick-service restaurant, collision repair, and commercial real estate. Z-Co Development Corp. formalizes this decades-long expertise into an integrated development platform.'
  },
  {
    q: 'What makes Z-Co different from other real estate developers?',
    a: 'Z-Co\'s Replication Advantage is our defining differentiator. Unlike traditional developers who treat each project as a one-off effort, Z-Co builds standardized project archetypes — design templates, procurement relationships, and delivery workflows — that improve with each successive deployment. This compound improvement model delivers faster timelines, lower costs, and more predictable investor returns than any single-project developer can match.'
  },
  {
    q: 'How can I get involved with Z-Co as an investor or partner?',
    a: 'The best first step is to request our investor packet or reach out through our contact page. We work with accredited investors, family offices, landowners, joint venture partners, and EB-5 investors. Our team will respond promptly to discuss current opportunities that match your investment profile and objectives.'
  }
];

const DevelopmentCompany = () => {
  useSEO({
    title: 'Real Estate Development Company USA | Z-Co Development',
    description: 'Z-Co Development is a full-service real estate development company in the USA specializing in build-to-rent, healthcare, mixed-use and EB-5 projects in Texas and Sun Belt markets.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Real Estate Development Company</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            Real Estate Development<br /><span className="text-slate-400">Company — USA</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">Z-Co Development Corp. is a full-service real estate development company headquartered in Houston, Texas. We specialize in <Link to="/build-to-rent-developer-usa" className="underline hover:text-white transition-colors">build-to-rent communities</Link>, <Link to="/healthcare-real-estate-developer" className="underline hover:text-white transition-colors">healthcare real estate</Link>, <Link to="/mixed-use-real-estate-developer" className="underline hover:text-white transition-colors">mixed-use developments</Link>, and <Link to="/eb5-real-estate-projects-usa" className="underline hover:text-white transition-colors">EB-5 investment opportunities</Link> across the United States Sun Belt.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Z-Co Development Corp.</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Z-Co Development Corp. is a fully integrated real estate development platform founded and led by Mike Butte — a veteran real estate developer with more than 30 years of experience across multiple asset classes and operating business sectors. Based in Houston, Texas, Z-Co is built to develop, own, and manage income-producing real estate assets that deliver value for <Link to="/real-estate-investment-platform" className="underline hover:text-white transition-colors">investors</Link>, communities, and partners across the full economic cycle.</p>
              <p>Our development platform spans every phase of the real estate creation process: market research and site acquisition, entitlement strategy, architectural programming, design management, construction procurement and oversight, capital markets advisory, leasing, and long-term asset management. This end-to-end integration eliminates the coordination gaps and quality inconsistencies that plague less comprehensive development operations.</p>
              <p>Z-Co's approach is fundamentally different from traditional real estate development. Rather than pursuing one-off projects, we specialize in building replicable systems. Each project we develop is designed around a proven archetype — standardized plans, specifications, and procurement relationships — that can be deployed repeatedly across new markets with increasing efficiency.</p>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>This Replication Advantage is Z-Co's defining competitive edge. Traditional developers learn expensive lessons on each new project. Z-Co applies the lessons of every completed project to the next, creating a compound improvement dynamic that reduces per-unit costs, compresses delivery timelines, and improves quality consistency with every successive deployment.</p>
              <p>Our current development pipeline exceeds $250 million across projects in Katy, Texas; Houston, Texas; and San Antonio, Texas — markets characterized by exceptional population growth, job creation, and undersupplied demand for essential-service real estate including housing, healthcare, and community retail.</p>
              <p>Z-Co is actively seeking investors, landowners, <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-white transition-colors">joint venture partners</Link>, and EB-5 capital partners to expand our platform across these high-conviction markets. We are committed to transparent communication, aligned incentive structures, and the highest standards of professional conduct in every relationship we build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Sets Z-Co Apart</h2>
          <p className="text-slate-400 mb-12 text-lg">Z-Co's integrated platform and replication model deliver advantages that traditional developers cannot match.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Integrated Platform', desc: 'Z-Co manages every development phase in-house — from site acquisition through asset management — eliminating coordination friction and quality gaps.' },
              { title: 'Replication Advantage', desc: 'Standardized project archetypes create compound improvements in cost, quality, and timeline across successive deployments.' },
              { title: 'Essential-Use Focus', desc: 'All Z-Co projects target essential-service sectors — housing, healthcare, community services — that remain in demand through full economic cycles.' },
              { title: '30+ Years Experience', desc: 'Z-Co\'s founder brings decades of real estate development experience across residential, commercial, hospitality, and operating business sectors.' },
              { title: 'Sun Belt Markets', desc: 'Deep market expertise in Texas, Florida, and Arizona — the three highest-growth real estate markets in the United States.' },
              { title: 'Investor Alignment', desc: 'Z-Co co-invests alongside partners, takes on full execution responsibility, and structures returns to prioritize investor capital before developer profits.' }
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Development Sectors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Build-to-Rent Communities', desc: 'Purpose-built residential rental communities designed for long-term, institutional-quality operations. Z-Co\'s BTR projects target the fastest-growing Texas markets with proven demand fundamentals.', link: '/build-to-rent-developer-usa' },
              { title: 'Healthcare Real Estate', desc: 'Integrated healthcare campuses, outpatient facilities, and physician-centered medical developments serving underserved communities in high-growth markets.', link: '/healthcare-real-estate-developer' },
              { title: 'Mixed-Use Developments', desc: 'Large-scale master-planned communities combining residential, retail, healthcare, and commercial uses to create diversified income and community anchors.', link: '/mixed-use-real-estate-developer' },
              { title: 'EB-5 Real Estate Investment', desc: 'Structured investment opportunities for qualified foreign nationals seeking U.S. permanent residency through real estate development projects.', link: '/eb5-real-estate-projects-usa' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link to={s.link} className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-slate-300 transition-colors">Learn More <ArrowRight className="w-3.5 h-3.5" /></Link>
              </div>
            ))}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work with Z-Co Development</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Whether you're an investor seeking institutional-quality real estate returns, a landowner with a site in a high-growth market, or a capital partner looking for an experienced development operator — Z-Co is ready to have the conversation.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">About Z-Co <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentCompany;
