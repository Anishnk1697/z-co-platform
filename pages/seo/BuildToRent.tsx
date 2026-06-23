import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is a build-to-rent development?',
    a: 'Build-to-rent (BTR) is a real estate model where residential properties are purpose-built for long-term rental rather than individual sale. Communities are professionally managed and designed from the ground up to serve renters, offering higher-quality amenities and consistent operational returns.'
  },
  {
    q: 'Why invest in build-to-rent communities in the USA?',
    a: 'The United States faces a structural housing shortage of several million units. Demand for professionally managed rental housing is growing across all demographics. BTR communities offer stable cash flow, institutional-quality returns, and long-term appreciation in high-growth markets like Texas, Florida, and Arizona.'
  },
  {
    q: 'How does Z-Co approach build-to-rent development?',
    a: 'Z-Co uses a replicable archetype model — standardized floor plans, integrated procurement, and proven delivery workflows — to reduce timeline risk and compress project costs across multiple deployments. This means investors benefit from compound learning and improving returns with every project.'
  },
  {
    q: 'What markets does Z-Co target for BTR development?',
    a: 'Z-Co focuses on high-growth Sun Belt markets including Texas, Florida, and Arizona — regions characterized by strong population inflows, favorable landlord regulations, and undersupplied housing stock.'
  },
  {
    q: 'How can I invest in a Z-Co build-to-rent project?',
    a: 'Qualified investors can request an investor packet directly from Z-Co. Our team will walk you through current project opportunities, capital structure, target return profiles, and minimum investment thresholds.'
  }
];

const BuildToRent = () => {
  useSEO({
    title: 'Build to Rent Developer USA | Z-Co Development',
    description: 'Z-Co Development is a leading build-to-rent developer in the USA specializing in purpose-built rental communities in high-growth Sun Belt markets.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1  bg-off border border-[rgba(0,0,0,0.08)] text-[10px] font-bold text-mid uppercase tracking-widest mb-6">
            Build-to-Rent Development
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-[1.06] mb-5">
            Build-to-Rent Developer<br />
            <span className="text-mid">United States of America</span>
          </h1>
          <p className="text-xl text-mid font-light leading-relaxed max-w-3xl">
            <Link to="/" className="underline hover:text-ink transition-colors">Z-Co Development</Link> is an integrated real estate development platform specializing in purpose-built rental communities across high-growth U.S. markets. Our build-to-rent projects deliver institutional-quality housing with scalable, replicable delivery systems that drive superior risk-adjusted returns for our investors.
          </p>
        </motion.div>
      </section>

      {/* What Is BTR */}
      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">What Is Build-to-Rent Real Estate?</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-mid leading-relaxed">
              <p>
                Build-to-rent (BTR) real estate refers to residential developments that are purpose-designed and constructed for long-term rental occupancy rather than individual home sales. Unlike traditional apartment complexes, BTR communities often feature single-family detached or attached homes, townhomes, or cottage-style units with private yards, garages, and community amenities — all professionally managed under a single ownership entity.
              </p>
              <p>
                The BTR sector has emerged as one of the most compelling real estate asset classes in the United States over the past decade. Structural housing undersupply, shifting renter demographics, and the rising cost of homeownership have created a durable, long-term demand base for high-quality rental communities in growth markets.
              </p>
              <p>
                Z-Co Development is positioned at the forefront of this shift. As an experienced build-to-rent developer in the USA, we combine disciplined underwriting, standardized project archetypes, and integrated procurement to deliver communities that <Link to="/portfolio" className="underline hover:text-ink transition-colors">outperform on both timeline and cost metrics</Link>.
              </p>
            </div>
            <div className="space-y-5 text-mid leading-relaxed">
              <p>
                Our build-to-rent approach is rooted in replication. Each project we develop builds on the lessons, relationships, and infrastructure of the last. This compound improvement model translates directly into better <Link to="/real-estate-investment-platform" className="underline hover:text-ink transition-colors">investor outcomes</Link> — lower development risk, faster delivery, and more predictable returns.
              </p>
              <p>
                We focus on Sun Belt markets — Texas, Florida, and Arizona — where population growth, job creation, and undersupplied housing create the most favorable conditions for build-to-rent investment. Our current pipeline includes communities in Katy, Texas and San Antonio, Texas, with additional market expansions underway.
              </p>
              <p>
                Whether you are an investor seeking stable income, a landowner with a development opportunity, or an operator looking for a <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">strategic capital partner</Link>, Z-Co's BTR platform offers a compelling entry point into one of the most resilient real estate sectors in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BTR */}
      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] bg-off px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-4">Why Build-to-Rent Is a Winning Asset Class</h2>
          <p className="text-mid mb-12 text-lg">The macroeconomic and demographic tailwinds behind BTR have never been stronger.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Housing Shortage', desc: 'The U.S. faces a shortfall of 4–7 million housing units. BTR communities directly address undersupply in the most in-demand markets.' },
              { title: 'Renter Demographics', desc: 'Millennials and Gen Z are renting longer and demanding higher-quality housing with community amenities. BTR is built precisely for this cohort.' },
              { title: 'Homeownership Barriers', desc: 'Rising mortgage rates and home prices have pushed millions of prospective buyers into the rental market — expanding BTR demand further.' },
              { title: 'Institutional Returns', desc: 'BTR communities generate stable monthly income, favorable cap rate compression, and strong exit liquidity as the institutional market matures.' },
              { title: 'Lower Vacancy Risk', desc: 'Purpose-built communities with dedicated management consistently outperform traditional apartments on occupancy and rent growth metrics.' },
              { title: 'Recession Resilience', desc: 'Rental housing is an essential service. Demand for quality rental homes remains stable across economic cycles, protecting investor downside.' }
            ].map((item, i) => (
              <div key={i} className="p-7  bg-white border border-[rgba(0,0,0,0.08)]">
                <h3 className="text-lg font-serif font-light text-ink mb-3">{item.title}</h3>
                <p className="text-mid text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Z-Co Approach */}
      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink mb-5">Z-Co's Build-to-Rent Development Platform</h2>
          <div className="space-y-8 text-mid leading-relaxed">
            <p>
              Z-Co Development Corp. is a fully integrated real estate development platform with in-house expertise spanning site acquisition, entitlements, design, construction management, capital markets, and asset management. This integration allows us to maintain quality control and timeline discipline across every phase of a build-to-rent project.
            </p>
            <p>
              Our proprietary Replication Advantage focuses on standardizing project archetypes — unit floor plans, site layouts, construction specifications, and procurement relationships — so that each successive BTR community we develop benefits from the accumulated knowledge of all prior projects. The result is a consistent reduction in per-unit development costs and delivery timelines as our portfolio scales.
            </p>
            <p>
              We design our communities to be operationally excellent from day one. Thoughtful unit design, efficient site layouts, and curated amenity programming create environments where residents want to stay — translating into high renewal rates, stable occupancy, and growing rental income for our investors.
            </p>
            <p>
              Z-Co's capital structure is designed to be accessible to a broad range of investors. We work with family offices, high-net-worth individuals, qualified opportunity zone funds, and EB-5 investors to match the right capital to the right project.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-normal uppercase text-[10.5px] tracking-[0.13em] hover:bg-gold2 transition-all">View Projects <ArrowRight className="w-3.5 h-3.5" /></Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(0,0,0,0.1)] text-ink  font-bold uppercase text-xs tracking-widest hover:border-white transition-all">About Z-Co <ArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-[rgba(0,0,0,0.07)] bg-off px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-light text-ink mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[rgba(0,0,0,0.08)]  overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-off transition-colors"
                >
                  <span className="font-serif font-light text-ink pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-mid shrink-0" /> : <ChevronDown className="w-5 h-5 text-mid shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-mid text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-ink">Ready to Invest in Build-to-Rent?</h2>
          <p className="text-mid text-lg leading-relaxed">Partner with one of the USA's leading build-to-rent developers. Whether you're an investor, landowner, or operator — let's build something together.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(0,0,0,0.1)] text-ink  font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildToRent;
