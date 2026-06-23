import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is mixed-use real estate development?',
    a: 'Mixed-use real estate development integrates multiple property types — residential, retail, office, hospitality, and healthcare — within a single master-planned project or building. By combining complementary uses, mixed-use developments create vibrant, walkable environments that generate multiple streams of income and serve communities more holistically than single-use properties.'
  },
  {
    q: 'What are the investment advantages of mixed-use developments?',
    a: 'Mixed-use projects offer diversified revenue streams, reduced vacancy risk through cross-use synergies, and typically command premium valuations from institutional buyers. The combination of residential occupancy, retail foot traffic, and commercial tenancy creates a self-reinforcing economic ecosystem that strengthens each individual use.'
  },
  {
    q: 'What mixed-use projects does Z-Co have in its pipeline?',
    a: 'Z-Co\'s flagship mixed-use development is TowneCenter in Katy, Texas — a comprehensive mixed-use project on Fry Road featuring Class-A apartments, senior living, climate-controlled storage, and modern medical offices. We also have Strobes Tower — a nearly $280M high-rise in the Houston Medical Center featuring a fusion of commercial, residential, and hotel spaces.'
  },
  {
    q: 'How does Z-Co manage complexity in mixed-use projects?',
    a: 'Z-Co\'s integrated development platform spans site acquisition, entitlements, design, construction management, and asset management in-house. This end-to-end capability allows us to coordinate between multiple uses efficiently, manage stakeholder relationships, and maintain design and quality standards across complex, multi-phase developments.'
  },
  {
    q: 'Can I invest in Z-Co mixed-use developments?',
    a: 'Yes. Z-Co structures mixed-use investments through joint ventures, preferred equity arrangements, and EB-5 programs depending on the project. We work with investors across a wide range of check sizes and return preferences. Request an investor packet to explore current opportunities.'
  }
];

const MixedUseRealEstate = () => {
  useSEO({
    title: 'Mixed-Use Real Estate Developer | Z-Co Development',
    description: 'Z-Co Development is an integrated mixed-use real estate developer specializing in large-scale mixed-use projects combining residential, retail, healthcare, and commercial uses in Texas.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-ink">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1  bg-off border border-[rgba(0,0,0,0.08)] text-[10px] font-bold text-mid uppercase tracking-widest mb-6">Mixed-Use Development</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-[1.06] mb-5">
            Mixed-Use Real Estate<br /><span className="text-mid">Developer & Investment Partner</span>
          </h1>
          <p className="text-xl text-mid font-light leading-relaxed max-w-3xl"><Link to="/" className="underline hover:text-ink transition-colors">Z-Co Development</Link> designs and delivers large-scale mixed-use real estate projects that integrate residential, retail, healthcare, and commercial components into cohesive, high-performing communities across high-growth U.S. markets.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">The Power of Mixed-Use Real Estate</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-mid leading-relaxed">
              <p>Mixed-use real estate development represents one of the most sophisticated and rewarding segments of the property industry. By combining multiple asset classes within a single, thoughtfully planned development, mixed-use projects create diversified income streams, reduce occupancy risk, and deliver higher long-term value than single-use alternatives.</p>
              <p>The economics of mixed-use are compelling. Residential tenants benefit from on-site retail and services. Retail tenants benefit from built-in customer traffic. Healthcare or office tenants provide stable anchor income. Each use reinforces the others, creating a virtuous cycle of activity, demand, and value creation that simply cannot be replicated by individual property types in isolation.</p>
              <p>Z-Co Development has assembled an integrated platform specifically designed to execute complex, multi-use projects with discipline and precision. Our in-house expertise spans every dimension of real estate development — from site acquisition and entitlements through design, construction, leasing, and asset management.</p>
            </div>
            <div className="space-y-5 text-mid leading-relaxed">
              <p>Our mixed-use projects are concentrated in the Texas Sun Belt markets — Katy, Houston, and San Antonio — where explosive population growth, rising household formation, and underserved community needs create the ideal conditions for large-scale mixed-use development. These markets offer strong demographic fundamentals, favorable regulatory environments, and enduring demand for integrated living and working environments.</p>
              <p><Link to="/portfolio" className="underline hover:text-ink transition-colors">TowneCenter</Link>, our flagship mixed-use project in Katy, Texas, exemplifies this strategy. A comprehensive development on one of suburban Houston's highest-traffic corridors, TowneCenter brings together Class-A apartments, senior living, climate-controlled storage, and modern medical offices into a single, interconnected community destination.</p>
              <p>For <Link to="/real-estate-investment-platform" className="underline hover:text-ink transition-colors">investors, Z-Co's</Link> mixed-use projects offer exposure to multiple income streams, multiple exit options, and the institutional appeal of well-located, well-designed community centers that attract creditworthy tenants and resilient demographics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] bg-off px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-4">Why Invest in Mixed-Use Real Estate</h2>
          <p className="text-mid mb-12 text-lg">Mixed-use developments offer a unique combination of income diversification, community impact, and long-term value creation.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Diversified Income', desc: 'Multiple tenant types and lease structures provide diversified revenue streams that reduce the impact of vacancy in any single component.' },
              { title: 'Premium Valuations', desc: 'Mixed-use developments consistently trade at cap rate premiums relative to single-use properties, reflecting their superior income stability and community positioning.' },
              { title: 'Community Anchoring', desc: 'Large mixed-use projects become destination anchors that drive traffic, community identity, and surrounding property value appreciation.' },
              { title: 'Flexible Exit Options', desc: 'Mixed-use projects can be sold as a portfolio or component-by-component, providing multiple exit paths and maximizing investor liquidity.' },
              { title: 'Zoning Advantage', desc: 'Z-Co\'s entitlement expertise and community relationships allow us to navigate complex mixed-use zoning efficiently, creating value before a shovel hits the ground.' },
              { title: 'Long-Term Appreciation', desc: 'Well-located mixed-use assets in growth markets appreciate faster than single-use properties over long holds, driven by land scarcity and intensifying use.' }
            ].map((item, i) => (
              <div key={i} className="p-7  bg-white border border-[rgba(0,0,0,0.08)]">
                <h3 className="text-lg font-serif font-light text-ink mb-3">{item.title}</h3>
                <p className="text-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'TowneCenter', loc: 'Katy, Texas', desc: 'A mixed-use development on Fry Road featuring Class-A apartments, senior living, climate-controlled storage, and modern medical offices — designed to serve one of the fastest-growing communities in the USA.' },
              { name: 'Strobes Tower', loc: 'Houston Medical Center', desc: 'A nearly $280 million high-rise building offering a fusion of commercial, residential, and hotel spaces — anchoring the Houston Medical Center corridor with a destination-class mixed-use development.' }
            ].map((p, i) => (
              <div key={i} className="p-8  bg-white border border-[rgba(0,0,0,0.08)]">
                <h3 className="text-xl font-serif font-light text-ink mb-1">{p.name}</h3>
                <p className="text-xs text-mid uppercase tracking-widest mb-4">{p.loc}</p>
                <p className="text-mid text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-normal uppercase text-[10.5px] tracking-[0.13em] hover:bg-gold2 transition-all">Full Portfolio <ArrowRight className="w-3.5 h-3.5" /></Link>
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
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink">Partner on Mixed-Use Development</h2>
          <p className="text-mid text-lg leading-relaxed">Z-Co is seeking investors, landowners, anchor tenants, and <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">capital partners</Link> to expand our mixed-use pipeline across the Sun Belt. Let's build something that lasts.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(0,0,0,0.1)] text-ink  font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MixedUseRealEstate;
