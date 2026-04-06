import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is a real estate joint venture?',
    a: 'A real estate joint venture (JV) is a business arrangement in which two or more parties combine capital, expertise, relationships, or land to co-develop a real estate project. Each partner contributes something the other needs — typically one party brings land or operational expertise, while the other provides development capital, platform capabilities, or market access.'
  },
  {
    q: 'What does Z-Co look for in a joint venture partner?',
    a: 'Z-Co seeks JV partners who bring complementary strengths to a project: landowners with well-located sites in high-growth markets, capital partners seeking institutional-quality co-investment opportunities, and operating partners with sector-specific expertise in healthcare, hospitality, retail, or residential. Strong communication, aligned incentives, and shared execution standards are essential.'
  },
  {
    q: 'What does Z-Co contribute to a joint venture?',
    a: 'Z-Co contributes its integrated development platform — including site planning, entitlement expertise, design management, construction oversight, capital markets relationships, and asset management. We also bring our replication model, which applies compound operational learnings and procurement efficiencies from prior projects to reduce cost and timeline risk for our JV partners.'
  },
  {
    q: 'What project types does Z-Co pursue through joint ventures?',
    a: 'Z-Co pursues joint ventures across its core asset classes: build-to-rent residential communities, mixed-use developments, healthcare campuses, and EB-5-eligible commercial projects. We are open to ground-up development JVs as well as value-add repositioning partnerships on existing assets in our target markets.'
  },
  {
    q: 'How do I propose a joint venture with Z-Co?',
    a: 'The best first step is to reach out through our contact page or request an investor packet. Describe your project, its location, your role, and what you are seeking from a development partner. Our team reviews all inbound partnership inquiries and will respond promptly if there is a potential fit.'
  }
];

const JointVenture = () => {
  useSEO({
    title: 'Real Estate Joint Venture Partnerships | Z-Co Development',
    description: 'Z-Co Development is an active real estate joint venture partner offering development expertise, integrated execution, and capital relationships for build-to-rent, healthcare, and mixed-use projects.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Joint Venture Partnerships</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            Real Estate Joint Venture<br /><span className="text-slate-400">Partnerships</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl"><Link to="/" className="underline hover:text-white transition-colors">Z-Co Development</Link> is an experienced real estate joint venture partner bringing a fully integrated development platform, institutional-quality execution, and proven replication systems to co-development opportunities across the U.S. Sun Belt.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Structure Real Estate as a Joint Venture?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Real estate joint ventures allow parties with complementary strengths to share the risk and reward of complex development projects in ways that no single party could achieve alone. A landowner with a prime site may lack the development expertise to maximize its value. A <Link to="/real-estate-investment-platform" className="underline hover:text-white transition-colors">capital partner</Link> may have funds to deploy but need an experienced operating partner to manage execution. A developer may have a project opportunity that requires equity co-investment at a scale beyond their current balance sheet.</p>
              <p>joint ventures solve all of these constraints simultaneously. By aligning the right partners around a shared project, each party contributes what they do best — and shares in an outcome that exceeds what either could have created independently. For high-quality partners, joint ventures are often the preferred structure for exactly this reason: they create more value, more reliably, than any alternative.</p>
              <p>Z-Co Development has structured and operated joint ventures across multiple asset classes and project types. Our team understands the legal, financial, and operational mechanics of JV structures, and we are experienced at designing partnership agreements that are fair, transparent, and aligned from day one.</p>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>Our joint venture approach is grounded in our Replication Advantage — the proprietary system by which each Z-Co project benefits from the accumulated learnings, procurement relationships, and operational infrastructure of all prior projects. When you partner with Z-Co, you are not just hiring a developer for a single project. You are gaining access to a platform that gets measurably better with every deployment.</p>
              <p>We work collaboratively with our JV partners throughout every phase of a project — from initial feasibility and site underwriting through entitlements, design, construction, leasing, and exit. Our integrated team provides comprehensive project updates, transparent financial reporting, and direct executive access to Z-Co's senior leadership throughout the partnership.</p>
              <p>Z-Co is currently seeking joint venture partners for <Link to="/build-to-rent-developer-usa" className="underline hover:text-white transition-colors">build-to-rent residential</Link> communities, <Link to="/healthcare-real-estate-developer" className="underline hover:text-white transition-colors">healthcare real estate</Link> developments, and <Link to="/mixed-use-real-estate-developer" className="underline hover:text-white transition-colors">mixed-use projects</Link> across Texas, Florida, and Arizona. If you have a site, a capital commitment, or a development opportunity, we would welcome a conversation about how Z-Co can serve as your development partner.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Z-Co Joint Venture Partner Types</h2>
          <p className="text-slate-400 mb-12 text-lg">Z-Co actively pursues partnerships with a range of partners who bring complementary strengths to the development process.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Landowners', desc: 'Own a well-located site in a high-growth market? Z-Co will evaluate your land for joint venture development, contributing our full platform in exchange for an equity stake in the project.' },
              { title: 'Capital Partners', desc: 'Family offices, private equity funds, and high-net-worth investors can co-invest alongside Z-Co in projects where our platform equity is matched with institutional capital.' },
              { title: 'Sector Operators', desc: 'Healthcare operators, hospitality brands, retail anchors, and residential operators can partner with Z-Co on facilities and communities where their operational IP enhances project performance.' },
              { title: 'Community Banks', desc: 'Regional lenders seeking strong developer relationships in the Texas market can partner with Z-Co on senior debt facilities for our growing pipeline of shovel-ready projects.' },
              { title: 'Municipal Partners', desc: 'Z-Co works with cities, economic development authorities, and TIF districts to structure developments that meet public goals for housing, healthcare access, and economic development.' },
              { title: 'International Investors', desc: 'Through our EB-5 platform, Z-Co partners with international capital seeking U.S. real estate exposure and immigration pathways. Our projects are structured to accommodate EB-5 investment.' }
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
        <div className="max-w-5xl mx-auto space-y-5 text-slate-400 leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Z-Co's Development Platform — What You Get When You Partner With Us</h2>
          <p>When you enter into a joint venture with Z-Co, you gain access to our fully integrated development platform — a team and system built specifically to take complex real estate projects from concept to completion with maximum efficiency, quality, and investor transparency.</p>
          <p>Our platform spans site acquisition and market analysis, entitlement strategy, architectural programming and design management, construction procurement and oversight, capital markets advisory, and in-house asset management. This end-to-end capability eliminates the coordination friction and quality gaps that arise in projects where multiple independent parties manage different phases of development.</p>
          <p>We bring our Replication Advantage to every joint venture — applying standardized project archetypes, pre-qualified contractor relationships, and procurement scale to reduce per-unit costs and delivery risk for our partners. This is the same system that drives Z-Co's own proprietary projects, applied directly to the benefit of our JV partners.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">About Z-Co <ArrowRight className="w-3.5 h-3.5" /></Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:border-white transition-all">Our Projects <ArrowRight className="w-3.5 h-3.5" /></Link>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Build Together</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Whether you have land, capital, or a market opportunity — Z-Co is the integrated development partner that can take your project from vision to reality. Reach out today to explore a joint venture partnership.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JointVenture;
