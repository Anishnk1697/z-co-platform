import React from 'react';
import { motion } from 'framer-motion';
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
      <section className="py-24 border-t border-slate-900 bg-slate-950/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Built for Durability.</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our projects are designed for the masses, focused on essential, recession-resistant services that remain in demand across economic cycles. We design capital structures that match real-world delivery and build projects engineered for performance, durability, and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Dual Value Creation',
                desc: 'Operational performance plus long-term real estate appreciation.',
                icon: BarChart3
              },
              {
                title: 'Calculated Risk',
                desc: 'Downside control with meaningful upside potential.',
                icon: Shield
              },
              {
                title: 'Integrated Development',
                desc: 'Alignment across design, construction, operations, and capital.',
                icon: Layers
              },
              {
                title: 'Strategic Execution',
                desc: 'Planned entry with a clear path to stabilization and exit options.',
                icon: Target
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 mb-6 font-bold">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{principle.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
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
    </div>
  );
};

export default AboutUs;
