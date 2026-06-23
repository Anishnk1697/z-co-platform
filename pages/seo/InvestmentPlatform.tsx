import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is a real estate investment platform?',
    a: 'A real estate investment platform is an integrated system that connects investors with curated real estate development opportunities, providing professional management, transparent reporting, and structured capital deployment. Unlike direct property ownership, investment platforms allow investors to participate in institutional-quality projects with professional underwriting, diversified risk, and clear return structures.'
  },
  {
    q: 'What types of investments does Z-Co offer?',
    a: 'Z-Co offers investment opportunities across its core asset classes: build-to-rent residential communities, healthcare real estate, mixed-use developments, and EB-5-eligible commercial projects. Capital structures include preferred equity, joint venture equity, and debt instruments, depending on the project and investor profile.'
  },
  {
    q: 'What returns can investors expect from Z-Co projects?',
    a: 'Z-Co targets risk-adjusted returns of 18–20% across its portfolio, driven by disciplined underwriting, cost efficiency through the Replication Advantage, and well-located assets in high-growth markets. Specific return targets vary by project type and capital structure. Detailed return projections are provided in our investor packet for each project.'
  },
  {
    q: 'What is the minimum investment with Z-Co?',
    a: 'Minimum investment thresholds vary by project and capital structure. We work with accredited investors, family offices, and institutional capital partners. Contact our investor relations team or request our investor packet for specific investment minimums on current opportunities.'
  },
  {
    q: 'How does Z-Co communicate with its investors?',
    a: 'Z-Co is committed to best-in-class investor communication. We provide regular project updates, quarterly financial reporting, construction milestone notifications, and direct access to our executive team for investor questions and concerns. Transparency is a core principle of how we operate.'
  }
];

const InvestmentPlatform = () => {
  useSEO({
    title: 'Real Estate Investment Platform | Z-Co Development',
    description: 'Z-Co Development is an integrated real estate investment platform offering institutional-quality opportunities in build-to-rent, healthcare, and mixed-use real estate across high-growth U.S. markets.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-ink">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1  bg-off border border-[rgba(0,0,0,0.08)] text-[10px] font-bold text-mid uppercase tracking-widest mb-6">Investment Platform</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-[1.06] mb-5">
            Real Estate Investment<br /><span className="text-mid">Platform</span>
          </h1>
          <p className="text-xl text-mid font-light leading-relaxed max-w-3xl"><Link to="/" className="underline hover:text-ink transition-colors">Z-Co Development</Link> is an integrated real estate investment platform built for investors who want disciplined underwriting, transparent reporting, and institutional-quality returns from carefully selected development opportunities in the U.S. Sun Belt.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">An Investment Platform Built on Execution</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-mid leading-relaxed">
              <p>Z-Co Development is not a passive fund or a speculative venture. We are an active development company with a track record of executing complex, multi-asset-class real estate projects from the ground up. Our investment platform is built on this foundation of proven operational excellence — offering investors access to curated opportunities that have been rigorously underwritten, thoughtfully structured, and professionally managed.</p>
              <p>Our investment approach is grounded in three core principles: recession resistance, replication, and transparency. We select projects in essential-service sectors — <Link to="/build-to-rent-developer-usa" className="underline hover:text-ink transition-colors">build-to-rent housing</Link>, <Link to="/healthcare-real-estate-developer" className="underline hover:text-ink transition-colors">healthcare</Link>, and community anchored <Link to="/mixed-use-real-estate-developer" className="underline hover:text-ink transition-colors">mixed-use</Link> — that remain in demand across economic cycles. We develop using repeatable, standardized archetypes that reduce risk and improve margins with every project. And we communicate openly with our investors at every stage of the development process.</p>
              <p>Our target portfolio generates returns of 18–20% across projects, fueled by disciplined cost management, value-engineering through integrated procurement, and strategic positioning in high-growth Texas, Florida, and Arizona markets where population growth outpaces available housing and services supply.</p>
            </div>
            <div className="space-y-5 text-mid leading-relaxed">
              <p>What makes Z-Co's investment platform distinctive is our Replication Advantage. Unlike one-off developers who learn expensive lessons on each new project, Z-Co builds compound institutional knowledge. Our standardized project archetypes, pre-qualified contractor relationships, and proven delivery workflows generate measurably better outcomes for investors with every successive deployment.</p>
              <p>We design our capital structures to align developer and investor interests from first dollar to last. We invest alongside our capital partners, take on full development risk management responsibility, and structure returns to reward investors before developer profit. This alignment creates the trust and accountability that long-term capital relationships require.</p>
              <p>Z-Co's <Link to="/portfolio" className="underline hover:text-ink transition-colors">current pipeline</Link> exceeds $250M across build-to-rent, healthcare, and mixed-use development projects. We are actively seeking qualified investors, family offices, and institutional co-investment partners to expand this pipeline in the highest-conviction markets in the United States.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] bg-off px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-4">Investment Platform Highlights</h2>
          <p className="text-mid mb-12 text-lg">What makes Z-Co's platform a compelling choice for sophisticated real estate investors.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { stat: 'Over $250M', label: 'Pipeline Value', desc: 'Active development pipeline across multiple asset classes in high-growth Sun Belt markets.' },
              { stat: '18–20%', label: 'Target Returns', desc: 'Risk-adjusted return targets driven by disciplined underwriting and replication efficiencies.' },
              { stat: 'Up to 50%', label: 'Schedule Advantage', desc: 'Project delivery timeline advantage versus traditional development through standardized archetypes.' },
              { stat: 'TX, FL, AZ', label: 'Core Markets', desc: 'Focus on the three highest-growth, most investor-friendly states in the U.S. Sun Belt.' },
              { stat: '30+ Years', label: 'Experience', desc: 'Z-Co leadership brings over 30 years of real estate development and investment experience across multiple asset classes.' },
              { stat: 'Essential Use', label: 'Recession-Resistant', desc: 'All Z-Co projects target essential-service sectors that remain in demand through full economic cycles.' }
            ].map((item, i) => (
              <div key={i} className="p-7  bg-white border border-[rgba(0,0,0,0.08)]">
                <div className="text-2xl font-black text-ink mb-1">{item.stat}</div>
                <div className="text-xs font-bold text-mid uppercase tracking-widest mb-3">{item.label}</div>
                <p className="text-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-5 text-mid leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">How to Invest with Z-Co</h2>
          <p>Getting started with Z-Co as an investment partner is straightforward. The first step is to request our investor packet — a comprehensive overview of our platform, current project pipeline, capital structures, return targets, and team background. Our investor relations team will follow up promptly to schedule a detailed briefing and answer any questions.</p>
          <p>We work with accredited investors, family offices, high-net-worth individuals, and institutional co-investment partners. Our minimum investment thresholds vary by project and capital structure. We offer preferred equity positions, joint venture equity, and EB-5 structures depending on investor preferences and immigration objectives.</p>
          <p>Once you have completed your due diligence, our team will guide you through the subscription process, capital funding timeline, and ongoing project communication. We are committed to being the most transparent and accessible development partner you have worked with.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-normal uppercase text-[10.5px] tracking-[0.13em] hover:bg-gold2 transition-all">Request Investor Packet <ArrowRight className="w-3.5 h-3.5" /></Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,0,0,0.1)] text-ink  font-bold uppercase text-xs tracking-widest hover:border-white transition-all">View Projects <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] bg-off px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-light text-ink mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[rgba(0,0,0,0.08)]  overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-off transition-colors">
                  <span className="font-serif font-light text-ink pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-mid shrink-0" /> : <ChevronDown className="w-5 h-5 text-mid shrink-0" />}
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-mid text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink">Access the Z-Co Investment Platform</h2>
          <p className="text-mid text-lg leading-relaxed">Join a growing base of investors building wealth through Z-Co's disciplined, execution-first real estate investment platform. Request your investor packet and start the conversation today.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(0,0,0,0.1)] text-ink  font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentPlatform;
