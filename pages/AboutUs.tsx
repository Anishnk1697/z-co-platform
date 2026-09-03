import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import FAQSection from '../components/FAQSection';
import {
  Target,
  Shield,
  Layers,
  TrendingUp,
  Clock,
  Minimize2,
  Maximize2,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ReplicationGraph = () => {
  return (
    <div className="relative w-full h-80 bg-off p-8 border border-[rgba(0,0,0,0.08)] overflow-hidden">
      <div className="absolute top-4 left-8">
        <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em]">Efficiency vs. Scale</h4>
      </div>

      <svg className="w-full h-full" viewBox="0 0 400 200">
        <line x1="40" y1="160" x2="360" y2="160" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        <line x1="40" y1="160" x2="40" y2="20" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />

        <text x="30" y="30" fill="#6B6B68" fontSize="8" textAnchor="end">HIGH</text>
        <text x="30" y="155" fill="#6B6B68" fontSize="8" textAnchor="end">LOW</text>
        <text x="40" y="175" fill="#6B6B68" fontSize="8" textAnchor="middle">Project 1</text>
        <text x="200" y="175" fill="#6B6B68" fontSize="8" textAnchor="middle">Project 5</text>
        <text x="360" y="175" fill="#6B6B68" fontSize="8" textAnchor="middle">Project 10+</text>

        <g transform="translate(60, 35)">
          <rect width="10" height="2" fill="#8B6F3E" />
          <text x="15" y="4" fill="#8B6F3E" fontSize="8">Z-Co Replication</text>
          <rect width="10" height="2" y="12" fill="#C8C5BC" />
          <text x="15" y="16" fill="#6B6B68" fontSize="8">Traditional Model</text>
        </g>

        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          x1="40" y1="110" x2="360" y2="110"
          stroke="#C8C5BC" strokeWidth="1.5" strokeDasharray="4 4"
        />

        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          d="M 40 150 C 120 145, 200 110, 360 40"
          fill="none"
          stroke="#8B6F3E"
          strokeWidth="2.5"
        />

        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          d="M 40 150 C 120 145, 200 110, 360 40 L 360 160 L 40 160 Z"
          fill="#8B6F3E"
        />

        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          cx="360" cy="40" r="4" fill="#8B6F3E"
        />

        <motion.g
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
        >
          <text x="360" y="30" fill="#8B6F3E" fontSize="9" textAnchor="end">REPLICATION PREMIUM</text>
        </motion.g>
      </svg>
    </div>
  );
};

const ExecutionTimeline = () => {
  const steps = [
    { phase: "PHASE 1", title: "Archetype Development", desc: "Standardized plans and proven workflows.", icon: Target },
    { phase: "PHASE 2", title: "Integrated Procurement", desc: "Compound savings through repeat partnerships.", icon: Layers },
    { phase: "PHASE 3", title: "Scale Deployment", desc: "Rapid expansion across resilient markets.", icon: TrendingUp },
    { phase: "PHASE 4", title: "Exit Stabilization", desc: "Clear path to liquidity and investor returns.", icon: Shield }
  ];

  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]" />
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
              <div className="relative z-10 h-14 w-14 bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-mid group-hover:border-gold group-hover:text-gold transition-all duration-300">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-normal text-gold uppercase tracking-[0.14em] block mb-1">{step.phase}</span>
                <h4 className="font-serif font-light text-xl text-ink mb-2">{step.title}</h4>
                <p className="text-mid text-sm leading-relaxed font-light max-w-sm">{step.desc}</p>
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
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-6 lg:px-14 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em]">About Z-Co Development</p>
              <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl text-ink leading-[1.06]">
                Execution-First<br />
                <em className="text-mid">Real Estate.</em>
              </h1>
              <div className="w-9 h-px bg-gold" />
            </div>

            <p className="text-base text-mid font-light leading-[1.85] max-w-xl">
              Z-Co. Development Corp. develops income-producing real estate and operating-business assets with a disciplined, execution-first approach.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { label: 'Asset Focus', value: 'Income-Producing' },
                { label: 'Strategy', value: 'Recession-Resistant' },
                { label: 'Approach', value: 'Disciplined Execution' },
                { label: 'End Goal', value: 'Scalable Performance' }
              ].map((stat, i) => (
                <div key={i} className="space-y-1 border-l-2 border-gold/40 pl-4">
                  <span className="text-[10px] font-normal text-gold uppercase tracking-[0.14em]">{stat.label}</span>
                  <p className="text-sm font-light text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <ReplicationGraph />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] px-6 lg:px-14 bg-off">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Our Philosophy</p>
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mb-5 leading-[1.1]">
                A Disciplined Approach<br /><em>to Every Project</em>
              </h2>
              <div className="w-9 h-px bg-gold mb-6" />
              <p className="text-base text-mid leading-[1.85] font-light">
                Z-Co evaluates every project through detailed market research, data-driven supply-demand analysis, and disciplined development planning — designed to align long-term community demand with practical, on-the-ground execution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[rgba(0,0,0,0.07)]">
              {[
                { n: '01', t: 'Disciplined Underwriting', d: 'Every project stress-tested across multiple market cycle scenarios before capital commitment.' },
                { n: '02', t: 'Strategic Land Positioning', d: 'Site selection driven by infrastructure proximity, employment corridors, and structural demand.' },
                { n: '03', t: 'Thoughtful Design', d: 'Architecture and community planning that serves residents and strengthens surrounding neighborhoods.' },
                { n: '04', t: 'Execution-Driven Management', d: 'Hands-on ownership from groundbreak through close of escrow — with zero project abandonments.' },
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-6 space-y-2">
                  <span className="font-serif text-sm text-gold">{pillar.n}</span>
                  <h4 className="text-sm font-normal text-ink">{pillar.t}</h4>
                  <p className="text-xs text-mid leading-relaxed font-light">{pillar.d}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] overflow-hidden border border-[rgba(0,0,0,0.08)]">
              <img
                src="/asset/philosophy-building.webp"
                alt="Z-Co Development — disciplined project execution"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] bg-white px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden border border-[rgba(0,0,0,0.08)]">
              <img
                src="/asset/medplex.jpg"
                alt="Z-Co strategic vision — long-term community building"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Strategic Vision</p>
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mb-5 leading-[1.1]">
                A Long-Term Approach<br /><em>to Community Building</em>
              </h2>
              <div className="w-9 h-px bg-gold mb-6" />
              <p className="text-base text-mid leading-[1.85] font-light">
                Z-Co's strategy is built around one core belief: that well-located, well-designed communities generate durable value — for residents, investors, and neighborhoods alike.
              </p>
            </div>

            <div className="border border-[rgba(0,0,0,0.08)] overflow-hidden">
              {[
                { n: '01', t: 'Market-Driven Site Selection', d: 'Deep supply-demand analysis before any capital is committed. Z-Co only enters markets where structural undersupply and employment growth support long-term absorption.' },
                { n: '02', t: 'Capital-Efficient Structuring', d: 'Land acquired ahead of investor capital. Sponsor equity contributed at closing. LP capital deployed only when entitlements and design are de-risked.' },
                { n: '03', t: 'Community-Centered Design', d: 'Projects designed around livability, walkability, and wellness — not just unit count. Resident experience informs every design decision.' },
                { n: '04', t: 'Defined Exit Discipline', d: 'Build-to-sell as primary thesis. Pre-sales velocity tracked from month one. Capital return events tied to closings, not refinancing assumptions.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 border-b border-[rgba(0,0,0,0.07)] last:border-b-0 hover:bg-off transition-colors"
                >
                  <span className="font-serif text-sm text-gold mt-1 flex-shrink-0">{step.n}</span>
                  <div>
                    <h4 className="text-sm font-normal text-ink mb-2">{step.t}</h4>
                    <p className="text-xs text-mid leading-relaxed font-light">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Replication Section */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] bg-off px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em]">Competitive Advantage</p>
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.06]">The Replication Advantage.</h2>
              <div className="w-9 h-px bg-gold" />
              <p className="text-base text-mid leading-[1.85] font-light">
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
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-normal text-ink text-sm uppercase tracking-wide mb-1">{benefit.title}</h5>
                    <p className="text-mid text-xs leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] flex items-center gap-4">
              <Users className="w-5 h-5 text-gold" />
              <p className="text-sm text-mid font-light">
                <span className="font-normal text-ink">Investor Alignment:</span> Consistent reporting, milestones, and controls across all deployments.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-16 border border-[rgba(0,0,0,0.08)] relative">
            <div className="absolute top-0 right-10 translate-y-[-50%] px-4 py-2 bg-off border border-[rgba(0,0,0,0.08)]">
              <span className="text-[10px] font-normal text-gold uppercase tracking-[0.14em]">Evolution of Delivery</span>
            </div>
            <ExecutionTimeline />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] bg-white px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Leadership</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-4xl text-ink mb-4 leading-[1.1]">Meet the Team</h2>
            <div className="w-9 h-px bg-gold mx-auto mb-6" />
            <p className="text-mid max-w-xl mx-auto font-light text-sm leading-[1.85]">
              A seasoned group of operators, builders, and capital partners driving execution across every project.
            </p>
          </div>

          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 bg-off border border-[rgba(0,0,0,0.07)] overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-full md:w-1/4 flex-shrink-0 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="/asset/mike-butte.jpg"
                  alt="Mike Butte - CEO of Z-Co Development - Real Estate Development Team"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h3 className="font-serif font-light text-3xl text-ink mb-2">Mike Butte</h3>
                  <p className="text-[10px] font-normal text-gold uppercase tracking-[0.18em]">Chief Executive Officer</p>
                </div>
                <div className="w-9 h-px bg-gold mx-auto md:ml-0" />
                <div className="space-y-4 max-w-3xl">
                  <p className="text-mid leading-[1.85] text-sm font-light">
                    Mike Butte is the Founder and CEO of Z-Co. Development Corp., where he leads the firm's end-to-end development platform across real estate and operating-business projects. With more than 30 years of leadership experience, Mike has executed projects across multiple asset classes by combining disciplined underwriting, capital strategy, and delivery execution to create recession-resistant, essential-service assets designed for scale.
                  </p>
                  <p className="text-mid leading-[1.85] text-sm font-light">
                    Mike is also passionate about expanding access, creating opportunities for small investors to participate in institutional-quality projects and helping budding real estate developers learn, grow, and succeed through clear systems, practical guidance, and aligned partnerships.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="px-3 py-1.5 border border-[rgba(0,0,0,0.1)] text-mid text-[10px] font-normal uppercase tracking-widest">30+ Years Experience</div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.07)]">
              {[
                { name: 'Mo Khan', title: 'Chief Operating Officer', img: '/asset/mo-khan.png' },
                { name: 'Sarah Ali', title: 'President', img: '/asset/sarah-ali.jpg' },
                { name: 'Omar Terkawi', title: 'Director of Development', img: '/asset/omar-terkawi.png' },
                { name: 'Thaddaus Hays Jr.', title: 'Director of Business Development', img: '/asset/thaddaus-hays.jpg' },
                { name: 'Dan Prosser', title: 'Senior Advisor', img: '/asset/dan-prosser.png' },
                { name: 'John Stevens', title: 'Legal Counsel', img: '/asset/john-stevens.jpg' },
                { name: 'Anish N. Kantharia', title: 'Director of Marketing', img: '/asset/anish-kantharia.jpg' },
                { name: 'Abel Castro', title: 'Construction Manager', img: '/asset/abel-castro.png' },
                { name: 'Phan Le', title: 'Financial Analyst', img: '/asset/phan-le.png' },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white overflow-hidden"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.title} - Z-Co Real Estate Development Team`}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink2/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 border-t border-[rgba(0,0,0,0.07)]">
                    <h4 className="font-serif font-normal text-lg text-ink mb-1">{member.name}</h4>
                    <p className="text-[10px] font-normal text-gold uppercase tracking-[0.18em] leading-snug">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[rgba(0,0,0,0.07)] bg-off">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif font-light text-2xl sm:text-3xl italic text-ink2 leading-[1.55]"
          >
            "With a track record across multiple asset classes and an expanding pipeline, Z-Co. partners with investors, landowners, and operators to build projects that meet real demand and are designed to replicate."
          </motion.blockquote>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pt-8">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 transition-all"
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
            answer: 'A real estate developer acquires land or existing properties, secures financing, manages the design and construction process, and ultimately delivers a finished real estate asset. Z-Co Development is a fully integrated developer, meaning we manage every phase of this process in-house, from site selection and entitlements through construction and lease-up.'
          },
          {
            question: "What is Z-Co Development's specialization?",
            answer: "Z-Co specializes in scalable, replicable real estate development across three core asset classes: build-to-rent residential communities, healthcare real estate, and mixed-use developments. Our Replication Advantage consistently delivers faster timelines and better investor returns than one-off development approaches."
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
            answer: 'Yes. Z-Co structures its projects to accommodate international investors, including through the EB-5 Immigrant Investor Program, which provides a pathway to U.S. permanent residency for qualifying foreign nationals who invest in U.S. development projects that create American jobs.'
          },
        ]}
      />
    </div>
  );
};

export default AboutUs;
