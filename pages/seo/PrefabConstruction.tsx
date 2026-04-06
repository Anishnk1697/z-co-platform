import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

const faqs = [
  {
    q: 'What is prefabricated construction in real estate?',
    a: 'Prefabricated construction (also known as prefab or industrialized construction) involves manufacturing building components off-site in controlled factory environments, then assembling them on-site. This approach contrasts with traditional stick-built construction, where all components are fabricated and assembled on location. Prefabricated methods deliver significant advantages in quality control, schedule predictability, and cost efficiency.'
  },
  {
    q: 'How much faster is prefabricated construction versus traditional methods?',
    a: 'Prefabricated construction typically reduces project timelines by 30–50% compared to traditional methods. Because components are manufactured simultaneously with site preparation, multiple phases of construction can run in parallel — dramatically compressing the overall schedule and reducing the time between ground-breaking and C.O.'
  },
  {
    q: 'Does prefabricated construction reduce project costs?',
    a: 'Yes. Prefabricated methods reduce labor costs, material waste, site disruption, and financing carry costs (through faster delivery). The combination of factory precision, bulk material purchasing, and compressed project timelines delivers meaningful cost advantages that translate directly to better investor economics.'
  },
  {
    q: 'How does Z-Co integrate prefabricated construction into its projects?',
    a: 'Z-Co uses prefabricated construction methods as a core component of its Replication Advantage. By standardizing project archetypes and establishing consistent manufacturing relationships, we generate compound cost and quality improvements across successive project deployments. Our procurement team negotiates factory rates and component specifications at scale, driving savings that individual developers cannot access.'
  },
  {
    q: 'Does prefabricated construction compromise quality?',
    a: 'No — in fact, factory-manufactured components typically exceed the quality standards of site-built alternatives. Controlled manufacturing environments eliminate weather delays, ensure precise tolerances, enable rigorous quality inspection before installation, and reduce the human-error variability inherent in traditional on-site construction. Z-Co\'s projects meet or exceed all applicable building code standards.'
  }
];

const PrefabConstruction = () => {
  useSEO({
    title: 'Prefabricated Construction Real Estate Developer | Z-Co Development',
    description: 'Z-Co Development leverages prefabricated construction methods to deliver real estate projects up to 50% faster with superior quality and cost efficiency across Texas and Sun Belt markets.'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Prefabricated Construction</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
            Prefabricated Construction<br /><span className="text-slate-400">Real Estate Development</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl"><Link to="/" className="underline hover:text-white transition-colors">Z-Co Development</Link> leverages prefabricated construction methods to deliver high-quality real estate projects up to 50% faster than traditional methods — compressing timelines, reducing costs, and improving outcomes for investors and communities.</p>
        </motion.div>
      </section>

      <section className="py-20 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Prefabricated Construction Is Transforming Real Estate</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>The construction industry is undergoing a fundamental transformation. Labor shortages, supply chain volatility, rising material costs, and investor demands for shorter development timelines have created powerful incentives to move away from traditional on-site construction methods toward more industrialized, predictable prefabricated approaches.</p>
              <p>Prefabricated construction — where building components are manufactured in controlled factory environments and assembled on-site — addresses all of these challenges simultaneously. Factory manufacturing delivers higher precision, lower waste, faster throughput, and more consistent quality than traditional site-built methods. When combined with a replicable project archetype, prefabricated construction becomes even more powerful: each successive deployment benefits from factory process improvements and scale purchasing advantages.</p>
              <p>Z-Co Development has built prefabricated construction methods into the core of its development platform. Our Replication Advantage is specifically designed to leverage the compound benefits of prefabricated approaches — standardizing project specifications to enable factory-scale procurement, compressing delivery timelines to reduce financing carry, and driving quality consistency that traditional methods simply cannot match.</p>
            </div>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>The financial case for prefabricated construction in real estate development is compelling. A project delivered 30–50% faster spends less time accruing construction loan interest, reaches revenue faster, and provides <Link to="/real-estate-investment-platform" className="underline hover:text-white transition-colors">investors</Link> with quicker return of capital. Simultaneously, factory manufacturing reduces per-unit material and labor costs compared to site-built alternatives — improving project-level economics for both developers and their investors.</p>
              <p>Z-Co's <Link to="/portfolio" className="underline hover:text-white transition-colors">projects</Link> span multiple asset types — <Link to="/build-to-rent-developer-usa" className="underline hover:text-white transition-colors">build-to-rent residential communities</Link>, <Link to="/healthcare-real-estate-developer" className="underline hover:text-white transition-colors">healthcare facilities</Link>, and <Link to="/mixed-use-real-estate-developer" className="underline hover:text-white transition-colors">mixed-use developments</Link> — all of which benefit from prefabricated construction approaches. Our team selects the appropriate blend of prefabricated and traditional techniques for each project, optimizing cost, schedule, and quality based on site conditions, local regulatory requirements, and market delivery expectations.</p>
              <p>We work with a vetted network of prefabricated component manufacturers, structural engineers, and construction managers who specialize in industrialized building methods. This expertise — combined with our volume purchasing power and standardized project specifications — gives Z-Co a distinct competitive advantage in delivery speed and construction cost management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Prefabricated Construction Advantages</h2>
          <p className="text-slate-400 mb-12 text-lg">How prefabricated methods improve every dimension of real estate development performance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Up to 50% Faster', desc: 'Parallel factory manufacturing and site preparation compresses project timelines dramatically versus sequential traditional construction.' },
              { title: 'Lower Construction Cost', desc: 'Factory precision reduces material waste, rework, and labor premium costs that inflate traditional project budgets.' },
              { title: 'Superior Quality Control', desc: 'Controlled factory environments enable rigorous inspection protocols that exceed on-site quality standards.' },
              { title: 'Weather Independence', desc: 'Factory manufacturing is immune to weather delays that consistently push traditional construction projects over budget and behind schedule.' },
              { title: 'Reduced Carry Costs', desc: 'Faster delivery means lower construction loan interest carry — a direct improvement to project-level returns for investors.' },
              { title: 'Scale Repeatability', desc: 'Z-Co\'s replication model generates compound improvements with each successive prefabricated deployment — getting faster, cheaper, and better with every project.' }
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Z-Co's Prefabricated Construction Philosophy</h2>
          <p>Z-Co Development does not view prefabricated construction as a cost-cutting shortcut. We view it as the most intelligent, most investor-aligned approach to real estate development available today. Prefabricated methods allow us to build better — with more precision, more efficiency, and more reliability — not just more cheaply.</p>
          <p>Our approach starts with project archetypes: standardized design templates that have been optimized for prefabricated component integration. By developing repeatable designs across our build-to-rent and healthcare project types, we can work with manufacturers to produce components at scale — accessing volume discounts, ensuring consistent quality, and enabling rapid redeployment of proven specifications across multiple project sites simultaneously.</p>
          <p>We apply prefabricated thinking holistically — to structural systems, mechanical and electrical rough-in, facade panels, bathroom pods, and kitchen assemblies — selecting the prefabricated solution where it delivers the greatest combination of quality, schedule, and cost advantage. This integrated approach to prefabrication is a cornerstone of the Replication Advantage that sets Z-Co apart from traditional real estate developers.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Invest in Smarter Construction</h2>
          <p className="text-slate-400 text-lg leading-relaxed">Partner with Z-Co Development and experience the financial advantage of prefabricated construction — faster delivery, better quality, lower cost, and stronger investor returns.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/#invest" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all">Investor Access <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-white transition-all">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrefabConstruction;
