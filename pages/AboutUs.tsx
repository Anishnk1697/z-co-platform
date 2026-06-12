import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import FAQSection from '../components/FAQSection';
import {
  Target,
  Shield,
  Layers,
  Zap,
  TrendingUp,
  BarChart3,
  Clock,
  Minimize2,
  Maximize2,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ReplicationGraph = () => {
  return (
    <div className="relative w-full h-80 bg-slate-900/50 rounded-3xl p-8 border border-slate-800 overflow-hidden">
      <div className="absolute top-4 left-8">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency vs. Scale</h4>
      </div>

      <svg className="w-full h-full" viewBox="0 0 400 200">
        {/* Axes */}
        <line x1="40" y1="160" x2="360" y2="160" stroke="#334155" strokeWidth="2" />
        <line x1="40" y1="160" x2="40" y2="20" stroke="#334155" strokeWidth="2" />

        {/* Y-axis Labels */}
        <text x="30" y="30" fill="#64748b" fontSize="8" textAnchor="end">HIGH</text>
        <text x="30" y="155" fill="#64748b" fontSize="8" textAnchor="end">LOW</text>

        {/* X-axis Labels */}
        <text x="40" y="175" fill="#64748b" fontSize="8" textAnchor="middle">Project 1</text>
        <text x="200" y="175" fill="#64748b" fontSize="8" textAnchor="middle">Project 5</text>
        <text x="360" y="175" fill="#64748b" fontSize="8" textAnchor="middle">Project 10+</text>

        {/* Legend - Moved to avoid overlap */}
        <g transform="translate(60, 35)">
          <rect width="10" height="2" fill="#84CC16" />
          <text x="15" y="4" fill="#84cc16" fontSize="8" fontWeight="bold">Z-Co Replication</text>
          <rect width="10" height="2" y="12" fill="#475569" />
          <text x="15" y="16" fill="#475569" fontSize="8">Traditional Model</text>
        </g>

        {/* Traditional Line (Flat) */}
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          x1="40" y1="110" x2="360" y2="110"
          stroke="#475569" strokeWidth="2" strokeDasharray="4 4"
        />

        {/* Efficiency Curve (Smooth S-curve using Cubic Bezier) */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d="M 40 150 C 120 145, 200 110, 360 40"
          fill="none"
          stroke="#BEF264"
          strokeWidth="3"
        />

        {/* Shaded Area */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          d="M 40 150 C 120 145, 200 110, 360 40 L 360 160 L 40 160 Z"
          fill="#BEF264"
        />

        {/* Decorative point at the end */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          cx="360" cy="40" r="4" fill="#BEF264"
        />

        {/* Callout - Repositioned to avoid overlap */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          <text x="360" y="30" fill="#BEF264" fontSize="10" fontWeight="black" textAnchor="end">REPLICATION PREMIUM</text>
        </motion.g>
      </svg>
    </div>
  );
};

const ExecutionTimeline = () => {
  const steps = [
    {
      phase: "PHASE 1",
      title: "Archetype Development",
      desc: "Standardized plans and proven workflows.",
      icon: Target
    },
    {
      phase: "PHASE 2",
      title: "Integrated Procurement",
      desc: "Compound savings through repeat partnerships.",
      icon: Layers
    },
    {
      phase: "PHASE 3",
      title: "Scale Deployment",
      desc: "Rapid expansion across resilient markets.",
      icon: TrendingUp
    },
    {
      phase: "PHASE 4",
      title: "Exit Stabilization",
      desc: "Clear path to liquidity and investor returns.",
      icon: Shield
    }
  ];

  return (
    <div className="space-y-12">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-800" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex gap-8 group"
            >
              <div className="relative z-10 h-14 w-14 rounded-2xl bg-black border border-slate-800 flex items-center justify-center text-slate-500 group-hover:border-slate-500 group-hover:text-white transition-all duration-300 shadow-xl">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-1">
                  {step.phase}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  useSEO({
    title: 'About Z-Co | Real Estate Development Platform USA',
    description: 'Learn about Z-Co, an integrated real estate development platform focused on scalable, replicable real estate project models.'
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-lime-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">About Z-Co Development</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                Execution-First <br />
                <span className="text-slate-500">Real Estate.</span>
              </h1>
            </div>

            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
              Z-Co. Development Corp. develops income-producing real estate and operating-business assets with a disciplined, execution-first approach.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { label: 'Asset Focus', value: 'Income-Producing' },
                { label: 'Strategy', value: 'Recession-Resistant' },
                { label: 'Approach', value: 'Disciplined Execution' },
                { label: 'End Goal', value: 'Scalable Performance' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1 border-l-2 border-slate-800 pl-4">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{stat.label}</span>
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-lime-500/10 blur-3xl rounded-full opacity-50" />
            <ReplicationGraph />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-bold text-lime-500 uppercase tracking-widest mb-4">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                A Disciplined Approach<br />to Every Project
              </h2>
              <div className="h-px w-16 bg-slate-700 mb-6" />
              <p className="text-lg text-slate-400 leading-relaxed">
                Z-Co evaluates every project through detailed market research, data-driven supply-demand analysis, and disciplined development planning — designed to align long-term community demand with practical, on-the-ground execution. Rather than building isolated structures, Z-Co creates communities around livability, wellness, and enduring value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-slate-800 rounded-2xl overflow-hidden">
              {[
                { n: '01', t: 'Disciplined Underwriting', d: 'Every project stress-tested across multiple market cycle scenarios before capital commitment.' },
                { n: '02', t: 'Strategic Land Positioning', d: 'Site selection driven by infrastructure proximity, employment corridors, and structural demand.' },
                { n: '03', t: 'Thoughtful Design', d: 'Architecture and community planning that serves residents and strengthens surrounding neighborhoods.' },
                { n: '04', t: 'Execution-Driven Management', d: 'Hands-on ownership from groundbreak through close of escrow — with zero project abandonments.' },
              ].map((pillar, i) => (
                <div key={i} className="bg-slate-950 p-6 space-y-2">
                  <span className="text-xs font-bold text-lime-500 font-mono">{pillar.n}</span>
                  <h4 className="text-sm font-bold text-white">{pillar.t}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-lime-500/5 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800">
              <img
                src="/asset/dovetrails.jpg"
                alt="Z-Co Development — disciplined project execution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="py-24 border-t border-slate-900 bg-slate-950/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-lime-500/5 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800">
              <img
                src="/asset/medplex.jpg"
                alt="Z-Co strategic vision — long-term community building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <p className="text-[10px] font-bold text-lime-500 uppercase tracking-widest mb-4">Strategic Vision</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                A Long-Term Approach<br />to Community Building
              </h2>
              <div className="h-px w-16 bg-slate-700 mb-6" />
              <p className="text-lg text-slate-400 leading-relaxed">
                Z-Co's strategy is built around one core belief: that well-located, well-designed communities generate durable value — for residents, investors, and neighborhoods alike. Every project decision flows from this principle.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden">
              {[
                { n: '01', t: 'Market-Driven Site Selection', d: 'Deep supply-demand analysis before any capital is committed. Z-Co only enters markets where structural undersupply and employment growth support long-term absorption.' },
                { n: '02', t: 'Capital-Efficient Structuring', d: 'Land acquired ahead of investor capital. Sponsor equity contributed at closing. LP capital deployed only when entitlements and design are de-risked.' },
                { n: '03', t: 'Community-Centered Design', d: 'Projects designed around livability, walkability, and wellness — not just unit count. Resident experience informs every design decision from massing to amenity programming.' },
                { n: '04', t: 'Defined Exit Discipline', d: 'Build-to-sell as primary thesis. Pre-sales velocity tracked from month one. Capital return events tied to closings, not refinancing assumptions.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 border-b border-slate-800 last:border-b-0 hover:bg-slate-900/50 transition-colors"
                >
                  <span className="text-xs font-bold text-lime-500 font-mono mt-1 flex-shrink-0">{step.n}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{step.t}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Replication Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">The Replication Advantage.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                A core advantage of Z-Co. is replication. We build projects as repeatable systems, not one-off efforts. Replication creates measurable benefits across every stage of the lifecycle.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Faster Timelines', desc: 'Standardized plans reduce schedule variance.', icon: Clock },
                { title: 'Lower Risk', desc: 'Compound lessons improve predictability.', icon: Minimize2 },
                { title: 'Cost Efficiency', desc: 'Repeat procurement reduces friction.', icon: Zap },
                { title: 'Scalable Growth', desc: 'Prototypes allow market expansion.', icon: Maximize2 }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">{benefit.title}</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4">
              <Users className="w-6 h-6 text-slate-500" />
              <p className="text-sm text-slate-300">
                <span className="font-bold text-white">Investor Alignment:</span> Consistent reporting, milestones, and controls across all deployments.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-[3rem] p-10 lg:p-16 border border-slate-900 relative">
            <div className="absolute top-0 right-10 translate-y-[-50%] px-4 py-2 bg-black border border-slate-800 rounded-full">
              <span className="text-[10px] font-black text-lime-500 uppercase tracking-widest">Evolution of Delivery</span>
            </div>
            <ExecutionTimeline />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-slate-950/30 relative overflow-hidden border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-slate-500/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Meet the Team
            </h2>
            <div className="h-1 w-20 bg-slate-700 mx-auto rounded-full" />
            <p className="text-slate-400 max-w-xl mx-auto font-light mt-6">
              A seasoned group of operators, builders, and capital partners driving execution across every project.
            </p>
          </div>

          <div className="space-y-12">
            {/* Featured CEO Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group hover:border-slate-700 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 blur-3xl -z-10" />

              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="/asset/mike-butte.jpg"
                  alt="Mike Butte - CEO of Z-Co Development - Real Estate Development Team"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Mike Butte</h3>
                  <p className="text-xs font-bold text-[#84CC16] uppercase tracking-[0.2em]">Chief Executive Officer</p>
                </div>
                <div className="h-px w-12 bg-slate-700 mx-auto md:ml-0" />
                <div className="space-y-4 max-w-3xl">
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                    Mike Butte is the Founder and CEO of Z-Co. Development Corp., where he leads the firm's end-to-end development platform across real estate and operating-business projects. With more than 30 years of leadership experience, Mike has executed projects across multiple asset classes by combining disciplined underwriting, capital strategy, and delivery execution to create recession-resistant, essential-service assets designed for scale. His background includes development and ownership experience tied to nationally recognized brands such as Holiday Inn, Best Western, Arby's, Denny's, and Caliber Collision, and he remains focused on building repeatable project prototypes that compress timelines and improve predictability across markets.
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                    Mike is also passionate about expanding access, creating opportunities for small investors to participate in institutional-quality projects and helping budding real estate developers learn, grow, and succeed through clear systems, practical guidance, and aligned partnerships.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 opacity-50 italic text-[10px]">30+ YEARS EXPERIENCE</div>
                </div>
              </div>
            </motion.div>

            {/* Other Team Members Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Sarah Ali', title: 'President', img: '/asset/sarah-ali.jpg' },
                { name: 'Mo Khan', title: 'Chief Operating Officer', img: '/asset/mo-khan.png' },
                { name: 'John Stevens', title: 'Director of Asset Management', img: '/asset/john-stevens.jpg' },
                { name: 'Thaddaus Hays Jr.', title: 'Director of Business Development', img: 'https://cdn.prod.website-files.com/673390480b47a07dd6beac13/673a64ed0f6cca562db5fa9f_66ace28771dc9f27738eafa5_hays.jpg' },
                { name: 'Dan Prosser', title: 'Director of Strategic Planning', img: '/asset/dan-prosser.png' },
                { name: 'Phan Le', title: 'Office Coordinator', img: '/asset/phan-le.png' },
                { name: 'Omar Terkawi', title: 'Project Architect', img: '/asset/omar-terkawi.png' },
                { name: 'Abel Castro', title: 'Director of Maintenance', img: '/asset/abel-castro.png' },
                { name: 'Anish N. Kantharia', title: 'Marketing Manager', img: '/asset/anish-kantharia.jpg' },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative p-5 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 mb-5 relative">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.title} - Z-Co Real Estate Development Team`}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-bold text-white text-sm leading-snug mb-1">{member.name}</h4>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-snug">{member.title}</p>

                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Final Section */}
      <section className="py-24 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-light text-slate-300 leading-relaxed italic"
          >
            "With a track record across multiple asset classes and an expanding pipeline, Z-Co. partners with investors, landowners, and operators to build projects that meet real demand and are designed to replicate."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all"
            >
              Partner with us
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
      <FAQSection
        heading="Frequently Asked Questions About Z-Co Development"
        faqs={[
          {
            question: 'What does a real estate developer do?',
            answer: 'A real estate developer acquires land or existing properties, secures financing, manages the design and construction process, and ultimately delivers a finished real estate asset — whether residential, commercial, healthcare, or mixed-use. Z-Co Development is a fully integrated developer, meaning we manage every phase of this process in-house, from site selection and entitlements through construction and lease-up.'
          },
          {
            question: 'What is Z-Co Development\'s specialization?',
            answer: 'Z-Co specializes in scalable, replicable real estate development across three core asset classes: build-to-rent residential communities, healthcare real estate, and mixed-use developments. Our Replication Advantage — standardized project archetypes, bulk procurement, and prefabricated construction — consistently delivers faster timelines and better investor returns than one-off development approaches.'
          },
          {
            question: 'Where does Z-Co Development operate?',
            answer: 'Z-Co is headquartered in Houston, Texas, with a primary development focus on high-growth Texas markets including Katy, The Woodlands, San Antonio, and the Greater Houston area. We also pursue select opportunities in other Sun Belt growth markets including Florida and Arizona.'
          },
          {
            question: 'How can I partner with Z-Co Development?',
            answer: 'Z-Co works with partners across the capital stack — from co-investors and preferred equity partners to joint venture equity partners and EB-5 investors. Contact our team via the form on our website or request an investor packet to discuss your specific objectives and available opportunities.'
          },
          {
            question: 'Does Z-Co accept foreign investors?',
            answer: 'Yes. Z-Co structures its projects to accommodate international investors, including through the EB-5 Immigrant Investor Program, which provides a pathway to U.S. permanent residency for qualifying foreign nationals who invest in U.S. development projects that create American jobs. Contact our team to learn about current EB-5 eligible projects.'
          },
        ]}
      />
    </div>
  );
};

export default AboutUs;
