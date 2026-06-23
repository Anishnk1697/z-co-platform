
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BuildToRent from './pages/seo/BuildToRent';
import HealthcareRealEstate from './pages/seo/HealthcareRealEstate';
import MixedUseRealEstate from './pages/seo/MixedUseRealEstate';
import EB5Projects from './pages/seo/EB5Projects';
import JointVenture from './pages/seo/JointVenture';
import InvestmentPlatform from './pages/seo/InvestmentPlatform';
import PrefabConstruction from './pages/seo/PrefabConstruction';
import DevelopmentCompany from './pages/seo/DevelopmentCompany';
import InsightsList from './pages/InsightsList';
import InsightsPost from './pages/InsightsPost';
import RequestPacketModal from './components/RequestPacketModal';
import FAQSection from './components/FAQSection';
import { SmartImage, SmartVideo } from '@/components/SmartMedia';
import {
  Building2,
  Landmark,
  Factory,
  Globe,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  LayoutGrid,
  CircleDot,
  CheckCircle2,
  FileText,
  CalendarCheck,
  TrendingUp
} from 'lucide-react';

const LifecycleGraphic = () => {
  const steps = [
    { label: "Development Plan", color: "#D4B483" },
    { label: "Venture Formation", color: "#C4A267" },
    { label: "Setup Operations", color: "#B8904E" },
    { label: "Execute Development Plan", color: "#A8895A" },
    { label: "Reach a predetermined exit point", color: "#8B6F3E" },
    { label: "Execute Exit Strategy", color: "#7A6035" },
    { label: "Distribute Profits", color: "#5C4725" },
  ];

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number, continuePath: boolean = false) => {
    const start = polarToCartesian(x, y, radius, startAngle);
    const end = polarToCartesian(x, y, radius, endAngle);
    const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
    const sweepFlag = endAngle > startAngle ? "1" : "0";

    return [
      continuePath ? "" : `M ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`
    ].join(" ");
  };

  const describeSegment = (index: number, total: number) => {
    const cx = 750, cy = 750, R = 400, r = 345;
    const angleStep = 360 / total;
    const offset = - (angleStep / 2);
    const startAngle = index * angleStep + offset;
    const endAngle = (index + 1) * angleStep + offset;

    const tipDepth = 15;

    const pOuterStart = polarToCartesian(cx, cy, R, startAngle);
    const pOuterEnd = polarToCartesian(cx, cy, R, endAngle);
    const pInnerEnd = polarToCartesian(cx, cy, r, endAngle);
    const pInnerStart = polarToCartesian(cx, cy, r, startAngle);

    const pTip = polarToCartesian(cx, cy, (R + r) / 2, endAngle + tipDepth);
    const pNotch = polarToCartesian(cx, cy, (R + r) / 2, startAngle + tipDepth);

    return [
      `M ${pOuterStart.x} ${pOuterStart.y}`,
      describeArc(cx, cy, R, startAngle, endAngle, true),
      `L ${pTip.x} ${pTip.y}`,
      `L ${pInnerEnd.x} ${pInnerEnd.y}`,
      describeArc(cx, cy, r, endAngle, startAngle, true),
      `L ${pNotch.x} ${pNotch.y}`,
      "Z"
    ].join(" ");
  };

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <svg viewBox="0 0 1500 1500" className="w-full h-full drop-shadow-3xl overflow-visible">
        {steps.map((step, i) => (
          <motion.path
            key={i}
            d={describeSegment(i, steps.length)}
            fill={step.color}
            stroke="#ffffff"
            strokeWidth="3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="hover:brightness-110 transition-all cursor-default"
          />
        ))}
      </svg>

      {steps.map((step, i) => {
        const angleStep = 360 / steps.length;
        const offset = - (angleStep / 2);
        const angle = (i * angleStep) + (angleStep / 2) + offset;
        const radius = 660;
        const pos = polarToCartesian(37.5, 46.4, radius / 15, angle);

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + (i * 0.1) }}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center w-32 pointer-events-none"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <p className="text-[9px] font-normal text-ink uppercase tracking-[0.14em] leading-tight bg-white/70 backdrop-blur-sm px-2 py-1 border border-[rgba(0,0,0,0.08)]">
              {step.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

const TriangleGraphic = () => {
  const gold = "#8B6F3E";

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <motion.path
          d="M 200 93 L 340 308 L 60 308 Z"
          fill={gold}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.circle cx="200" cy="93" r="13.5" fill="#F8F7F4" stroke="#8B6F3E" strokeWidth="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
        <motion.circle cx="60" cy="308" r="13.5" fill="#F8F7F4" stroke="#8B6F3E" strokeWidth="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
        <motion.circle cx="340" cy="308" r="13.5" fill="#F8F7F4" stroke="#8B6F3E" strokeWidth="2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      </svg>

      <div className="absolute top-[13%] left-1/2 -translate-x-1/2 text-center">
        <span className="text-[10px] font-normal text-ink uppercase tracking-[0.17em]">Operator</span>
      </div>
      <div className="absolute top-[83%] left-[15%] -translate-x-1/2 text-center">
        <span className="text-[10px] font-normal text-ink uppercase tracking-[0.17em]">Developer</span>
      </div>
      <div className="absolute top-[83%] left-[85%] -translate-x-1/2 text-center">
        <span className="text-[10px] font-normal text-ink uppercase tracking-[0.17em]">Investor</span>
      </div>
    </div>
  );
};

import { NAVIGATION, STATS } from './constants';
import AIChatAssistant from './components/AIChatAssistant';
import SchemaMarkup from './components/SchemaMarkup';
import { useSEO } from './hooks/useSEO';

const PORTFOLIO_FILTERS = ['All', 'Residential', 'Healthcare', 'Hospitality', 'Retail', 'Automotive'] as const;
type PortfolioFilter = typeof PORTFOLIO_FILTERS[number];

const PORTFOLIO_PROJECTS = [
  {
    title: 'Dove Trails',
    type: 'Residential Community · Build-to-Sell',
    location: 'San Antonio, TX — Near Medical District',
    badge: 'Active · Under Development',
    badgeActive: true,
    category: 'Residential' as PortfolioFilter,
    img: 'dovetrails',
    featured: true,
    desc: '152-home gated build-to-sell ownership community near San Antonio Medical District. UniQube light-gauge steel modular construction. 31% gross margin, 18-month build timeline.',
    stats: [
      { value: '152', label: 'Homes' },
      { value: '$25.1M', label: 'Dev. Cost' },
      { value: '$32.9M', label: 'Proj. Revenue' },
      { value: '31%', label: 'Gross Margin' },
    ],
  },
  {
    title: 'MedPlex',
    type: 'Healthcare · Medical Office',
    location: 'San Antonio Medical District, TX',
    badge: 'Pre-Development',
    badgeActive: false,
    category: 'Healthcare' as PortfolioFilter,
    img: 'medplex',
    featured: false,
    desc: 'Next-generation healthcare campus in pre-development. Designed for ambulatory care, specialist clinics, and medical office tenants.',
  },
  {
    title: 'The Everson',
    type: 'Multifamily · Market Rate',
    location: 'Katy, TX',
    badge: 'Completed',
    badgeActive: false,
    category: 'Residential' as PortfolioFilter,
    img: 'everson-building',
    featured: false,
    desc: 'Completed market-rate multifamily community. Benchmarked against top-tier comparable assets in the submarket.',
  },
  {
    title: 'TowneCenter',
    type: 'Retail · Mixed-Use Town Center',
    location: 'San Antonio, Texas',
    badge: 'Active · Under Development',
    badgeActive: true,
    category: 'Retail' as PortfolioFilter,
    img: 'townecenter',
    featured: false,
    desc: 'Mixed-use retail town center anchored by essential-service tenants in a high-growth San Antonio corridor.',
  },
  {
    title: 'Best Western Premier',
    type: 'Hospitality · Full Service Hotel',
    location: 'Texas',
    badge: 'Completed',
    badgeActive: false,
    category: 'Hospitality' as PortfolioFilter,
    img: 'hotel-best-western-1',
    featured: false,
    desc: 'Full-service hotel development completed and delivered. Positioned in a high-demand corridor with institutional-grade operations.',
  },
  {
    title: 'Elite Medical Center',
    type: 'Healthcare Facility',
    location: 'Texas Medical Corridor',
    badge: 'Completed',
    badgeActive: false,
    category: 'Healthcare' as PortfolioFilter,
    img: 'elite-medical',
    featured: false,
    desc: 'Completed 7,000 sq ft medical office facility serving the Texas medical corridor. Delivered on time and on budget.',
  },
  {
    title: 'Caliber Collision',
    type: 'Automotive · Paint & Body',
    location: 'Texas',
    badge: 'Completed',
    badgeActive: false,
    category: 'Automotive' as PortfolioFilter,
    img: 'caliber-collision-v2',
    featured: false,
    desc: 'National-brand automotive paint and body shop development. Delivered on schedule for a Tier 1 franchise operator.',
  },
  {
    title: 'Oak Hollow',
    type: 'Residential · Luxury Custom Home',
    location: 'Houston, Texas',
    badge: 'Completed',
    badgeActive: false,
    category: 'Residential' as PortfolioFilter,
    img: 'oak-hollow',
    featured: false,
    desc: 'Luxury custom home showcasing premium architecture, sustainable design, and high-end finishes.',
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All');

  const filtered = PORTFOLIO_PROJECTS.filter(
    p => activeFilter === 'All' || p.category === activeFilter
  );

  const featured = filtered.find(p => p.featured) ?? filtered[0];
  const rest = filtered.filter(p => p !== featured);

  return (
    <section id="projects" className="py-24 bg-off px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-3">Selected Portfolio</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              37+ Projects Across<br /><em className="font-light">Six Asset Classes</em>
            </h2>
            <div className="w-9 h-px bg-gold mt-5" />
          </div>
          <div className="flex flex-wrap gap-0">
            {PORTFOLIO_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2.5 text-[11px] font-normal uppercase tracking-[0.14em] transition-all duration-200 border-b ${
                  activeFilter === f
                    ? 'text-ink border-ink'
                    : 'text-mid border-[rgba(0,0,0,0.1)] hover:text-ink hover:border-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="space-y-1">
          {/* Featured Card */}
          {featured && (
            <Link to="/portfolio">
              <motion.div
                layout
                key={featured.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative w-full h-[420px] sm:h-[500px] overflow-hidden cursor-pointer bg-ink2"
              >
                <SmartImage
                  alt={featured.title}
                  fallbackSeed={featured.img}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <span className={`absolute top-5 left-5 px-3 py-1 text-[10px] font-normal uppercase tracking-[0.17em] border ${featured.badgeActive ? 'border-gold/70 text-gold bg-black/60' : 'border-white/50 text-white bg-black/60'}`}>
                  {featured.badge}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink2/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-12">
                  <div className="text-center space-y-4 max-w-lg">
                    <p className="text-[10px] font-normal text-gold uppercase tracking-[0.22em]">{featured.type}</p>
                    <h3 className="font-serif font-light text-3xl text-white">{featured.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed font-light">{featured.desc}</p>
                    <span className="inline-flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.18em] border-b border-white/40 pb-0.5">
                      View Project <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[10px] font-normal text-gold uppercase tracking-[0.22em] mb-1">{featured.type}</p>
                  <h3 className="font-serif font-light text-2xl text-white mb-1">{featured.title}</h3>
                  <p className="text-white/50 text-xs mb-4">{featured.location}</p>
                  {featured.stats && (
                    <div className="flex flex-wrap gap-3">
                      {featured.stats.map(s => (
                        <div key={s.label} className="px-3 py-1.5 bg-black/40 border border-white/20 backdrop-blur">
                          <span className="text-white font-light text-sm">{s.value}</span>
                          <span className="text-white/60 text-[10px] ml-1">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          )}

          {/* Rest of cards */}
          {rest.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {rest.map(project => (
                <Link to="/portfolio" key={project.title}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group relative h-[260px] overflow-hidden cursor-pointer bg-ink2"
                  >
                    <SmartImage
                      alt={project.title}
                      fallbackSeed={project.img}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <span className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-normal uppercase tracking-[0.17em] border ${project.badgeActive ? 'border-gold/70 text-gold bg-black/60' : 'border-white/50 text-white bg-black/60'}`}>
                      {project.badge}
                    </span>

                    <div className="absolute inset-0 bg-ink2/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <div className="text-center space-y-2">
                        <p className="text-[9px] font-normal text-gold uppercase tracking-[0.22em]">{project.type}</p>
                        <p className="text-white text-sm leading-relaxed font-light">{project.desc}</p>
                        <span className="inline-flex items-center gap-1 text-white text-[10px] uppercase tracking-[0.18em] border-b border-white/40 pb-0.5">
                          View Project <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[9px] font-normal text-gold uppercase tracking-[0.22em] mb-0.5">{project.type}</p>
                      <h4 className="font-serif font-light text-sm text-white leading-snug">{project.title}</h4>
                      <p className="text-white/50 text-[10px]">{project.location}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink font-normal uppercase tracking-[0.14em] text-xs hover:bg-ink hover:text-white transition-all">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home = ({
  investorStatus,
  handleInvestorSubmit,
  formStatus,
  handleContactSubmit
}: {
  investorStatus: string;
  handleInvestorSubmit: (e: React.FormEvent) => void;
  formStatus: string;
  handleContactSubmit: (e: React.FormEvent) => void;
}) => {
  useSEO({
    title: 'Real Estate Development Company USA | Z-Co Development',
    description: 'Z-Co Development is a real estate development and investment platform specializing in build-to-rent, healthcare, mixed-use and EB-5 projects.'
  });

  return (
    <>
      {/* HERO */}
      <header className="relative isolate min-h-screen flex flex-col justify-end pb-0 lg:pb-4 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <SmartVideo className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/20 to-black/05" />

        <div className="mx-auto max-w-7xl px-6 lg:px-14 relative z-10 w-full pb-16 lg:pb-20 pt-[380px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-5 mr-auto"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/80">
              Real Estate Development Platform
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif font-light text-[clamp(32px,3.8vw,58px)] leading-[1.1] text-white"
            >
              Faster builds. Faster exits.<br />
              <em className="font-light text-white/90">Faster returns.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm leading-[1.8] text-white/80 max-w-md font-light"
            >
              Replication reduces variance, compresses timelines, and accelerates
              stabilization—supporting faster capital return where applicable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-all"
              >
                View portfolio
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="bg-ink2">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center py-8 px-6 border-r border-white/[0.06] last:border-r-0">
                <span className="font-serif font-light text-4xl text-white leading-none">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.17em] text-white/55 mt-1.5 font-normal">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONE PLATFORM. THREE ENGINES. */}
      <section id="platform" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Our Platform</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink mb-5 leading-[1.1]"
            >
              End-to-end <em>development platform</em>
            </motion.h2>
            <div className="w-9 h-px bg-gold mx-auto mb-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-mid leading-[1.85] font-light mb-8"
            >
              We deliver essential, recession-resistant <Link to="/portfolio" className="underline hover:text-ink transition-colors">projects</Link> designed for the masses through an end-to-end platform, from site selection and underwriting to entitlements, design, capital structuring, construction execution, and exit. Replication drives speed, reduces risk, and accelerates stabilization, supporting faster sales and faster capital return.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {[
                'Repeatable prototypes',
                'Factory-enabled delivery',
                'Investor-aligned structures'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                  <span className="text-[11px] font-normal text-ink uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Capabilities</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
              One platform. <em>Three engines.</em>
            </h2>
            <div className="w-9 h-px bg-gold mx-auto mt-5" />
          </div>

          <div className="grid gap-1 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'Development',
                body: 'Essential projects engineered to repeat at scale.',
                bullets: ['Prototype-driven planning', 'Disciplined approvals', 'Market-led siting']
              },
              {
                icon: Landmark,
                title: 'Capital Solutions',
                body: 'Structures built for absolute alignment and execution.',
                bullets: ['Milestone-linked capital', 'Transparent reporting', 'Institution-ready data']
              },
              {
                icon: Factory,
                title: 'Prefabricated Construction',
                body: 'Faster delivery. Higher control. Consistent outcomes.',
                bullets: ['Factory-enabled build', 'Standardized assemblies', 'Predictable timelines']
              }
            ].map((block, idx) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-off border border-[rgba(0,0,0,0.07)] hover:border-gold/30 hover:bg-white transition-all duration-500"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-12 w-12 flex items-center justify-center text-gold/70 group-hover:text-gold transition-colors">
                    <block.icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-4xl font-light text-light group-hover:text-gold/50 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="font-serif font-light text-2xl text-ink mb-3">{block.title}</h3>
                <p className="text-mid text-sm mb-6 leading-[1.8] font-light">{block.body}</p>
                <div className="w-9 h-px bg-gold mb-6" />
                <ul className="space-y-3">
                  {block.bullets.map((line) => (
                    <li key={line} className="flex items-center gap-3 text-sm text-mid font-light">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW INVESTING WORKS STRIP */}
      <section className="bg-off border-t border-[rgba(0,0,0,0.07)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Process</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-4xl text-ink leading-[1.1]">
              How investing works
            </h2>
            <div className="w-9 h-px bg-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-px bg-[rgba(0,0,0,0.1)] -z-10" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-[4.5rem] h-[4.5rem] bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors shadow-sm relative">
                <FileText className="w-8 h-8 text-mid group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gold font-light text-[10px] text-white flex items-center justify-center shadow-sm">1</div>
              </div>
              <h3 className="font-serif font-light text-xl text-ink mb-2">Request packet</h3>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-[4.5rem] h-[4.5rem] bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors shadow-sm relative">
                <CalendarCheck className="w-8 h-8 text-mid group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gold font-light text-[10px] text-white flex items-center justify-center shadow-sm">2</div>
              </div>
              <h3 className="font-serif font-light text-xl text-ink mb-2">Review structure + timeline</h3>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-[4.5rem] h-[4.5rem] bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors shadow-sm relative">
                <TrendingUp className="w-8 h-8 text-mid group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gold font-light text-[10px] text-white flex items-center justify-center shadow-sm">3</div>
              </div>
              <h3 className="font-serif font-light text-xl text-ink mb-2">Invest + receive updates</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SELECTED PORTFOLIO */}
      <PortfolioSection />

      {/* EXECUTION MODEL */}
      <section id="execution" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-14">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Our Process</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-4xl text-ink leading-[1.1] mb-3">The Execution Model</h2>
            <p className="text-mid text-sm font-light">Replication is a system. Not a slogan.</p>
            <div className="w-9 h-px bg-gold mx-auto mt-5" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(0,0,0,0.08)] hidden md:block -z-10" />
            {[
              { label: 'Essential demand', icon: Globe },
              { label: 'Site + structure', icon: MapPin },
              { label: 'Design to repeat', icon: LayoutGrid },
              { label: 'Prefabricated delivery', icon: Factory },
              { label: 'Operate + optimize', icon: CircleDot }
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center group relative">
                <div className="h-16 w-16 rounded-full bg-white border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-mid group-hover:border-gold group-hover:text-gold transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-[13px] font-light text-ink transition-colors text-center whitespace-nowrap">
                  {step.label}
                </p>
                <span className="absolute -top-8 font-serif text-[13px] text-light group-hover:text-gold/50 transition-colors">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE MODEL */}
      <section className="py-24 bg-off">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Framework</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-4xl text-ink mb-4 leading-[1.1]">
              Integrated Systems
            </h2>
            <div className="w-9 h-px bg-gold mx-auto mb-6" />
            <p className="text-mid font-light max-w-2xl mx-auto text-sm leading-[1.85]">
              Our model combines a continuous lifecycle of value creation with a unified stakeholder alignment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative py-10">
              <h3 className="text-center text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-12">The Lifecycle Model</h3>
              <LifecycleGraphic />
            </div>
            <div className="relative py-10">
              <h3 className="text-center text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-12">Stakeholder Alignment</h3>
              <TriangleGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR ACCESS */}
      <section id="invest" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold">Investor Relations</p>
              <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1]">
                Disciplined capital<br />
                <em className="text-mid">for superior returns.</em>
              </h2>
              <div className="w-9 h-px bg-gold" />
              <p className="text-base text-mid leading-[1.85] font-light">
                We provide institutional-grade investment opportunities backed by transparent data
                and milestone-linked execution.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center text-gold flex-shrink-0 border border-[rgba(0,0,0,0.1)]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-light text-lg text-ink mb-1">De-risked</h5>
                    <p className="text-xs text-mid font-light">Milestone deployment of capital.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center text-gold flex-shrink-0 border border-[rgba(0,0,0,0.1)]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif font-light text-lg text-ink mb-1">Institutional</h5>
                    <p className="text-xs text-mid font-light">Ready for major PE allocation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-off p-10 border border-[rgba(0,0,0,0.08)] relative overflow-hidden">
              {investorStatus === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                  <div className="h-20 w-20 border border-gold/40 flex items-center justify-center mx-auto mb-6 text-gold">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif font-light text-2xl text-ink mb-2">Request Received</h3>
                  <p className="text-mid font-light">Our IR team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleInvestorSubmit}>
                  <div className="space-y-2">
                    <h3 className="font-serif font-light text-2xl text-ink">Access Portal</h3>
                    <p className="text-sm text-mid font-light">Receive investor materials and pipeline metrics.</p>
                  </div>
                  <div className="grid gap-4">
                    <input type="text" required placeholder="Full Name" className="bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none transition-all" />
                    <input type="email" required placeholder="Professional Email" className="bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none transition-all" />
                  </div>
                  <button
                    disabled={investorStatus === 'submitting'}
                    className="w-full bg-gold text-white py-4 font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {investorStatus === 'submitting' ? 'Processing...' : 'Request Access'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-mid uppercase tracking-widest font-normal">
                    Accredited Investors Only
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-off">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Leadership</p>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-4xl text-ink mb-4 leading-[1.1]">
              Meet the Team
            </h2>
            <div className="w-9 h-px bg-gold mx-auto mb-6" />
            <p className="text-mid max-w-xl mx-auto font-light text-sm leading-[1.85]">
              A seasoned group of operators, builders, and capital partners driving execution across every project.
            </p>
          </div>

          <div className="space-y-2">
            {/* Featured CEO Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 bg-white border border-[rgba(0,0,0,0.07)] overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden border border-[rgba(0,0,0,0.1)]">
                <img
                  src="/asset/mike-butte.jpg"
                  alt="Mike Butte - CEO of Z-Co Development - Real Estate Development Team"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
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
                    Mike Butte is the Founder and CEO of Z-Co. Development Corp., where he leads the firm's end-to-end development platform across real estate and operating-business projects. With more than 30 years of leadership experience, Mike has executed projects across <Link to="/portfolio" className="underline hover:text-ink transition-colors">multiple asset classes</Link> by combining disciplined underwriting, capital strategy, and delivery execution to create recession-resistant, essential-service assets designed for scale. His background includes development and ownership experience tied to nationally recognized brands such as Holiday Inn, Best Western, Arby's, Denny's, and Caliber Collision, and he remains focused on building repeatable project prototypes that compress timelines and improve predictability across markets.
                  </p>
                  <p className="text-mid leading-[1.85] text-sm font-light">
                    Mike is also passionate about expanding access, creating opportunities for small investors to participate in institutional-quality projects and helping budding real estate developers learn, grow, and succeed through clear systems, practical guidance, and aligned <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">joint venture partnerships</Link>.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  <div className="px-3 py-1.5 border border-[rgba(0,0,0,0.1)] text-mid text-[10px] font-normal uppercase tracking-widest">30+ Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Other Team Members Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.07)]">
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
                  className="group bg-white overflow-hidden"
                >
                  {/* Photo Container */}
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.title} - Z-Co Real Estate Development Team`}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink2/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-0 border border-[rgba(0,0,0,0.08)] overflow-hidden">
            <div className="lg:col-span-7 p-10 md:p-16">
              {formStatus === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-serif font-light text-3xl text-ink mb-4">Message Sent</h3>
                  <p className="text-mid font-light">Thank you for your interest. We'll be in touch.</p>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleContactSubmit}>
                  <div className="space-y-2">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-3">Get in Touch</p>
                    <h3 className="font-serif font-light text-3xl sm:text-4xl text-ink">Let&apos;s build together.</h3>
                    <p className="text-mid font-light text-sm">Inquire about partnerships, site submissions, or prefabricated solutions.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Name" className="bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none" />
                    <input required type="email" placeholder="Email" className="bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none" />
                  </div>
                  <select required className="w-full bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink font-light focus:border-gold focus:outline-none appearance-none">
                    <option value="">Select Topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="submission">Site Submission</option>
                    <option value="capital">Capital Allocation</option>
                  </select>
                  <textarea required rows={4} placeholder="Your message" className="w-full bg-white border border-[rgba(0,0,0,0.12)] px-4 py-4 text-sm text-ink placeholder-mid font-light focus:border-gold focus:outline-none resize-none"></textarea>
                  <button
                    disabled={formStatus === 'submitting'}
                    className="bg-gold text-white px-10 py-4 font-normal uppercase tracking-[0.13em] text-[10.5px] hover:bg-gold2 disabled:opacity-50 transition-all inline-flex items-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-off p-10 md:p-16 border-l border-[rgba(0,0,0,0.07)] space-y-12">
              <div>
                <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-6">Headquarters</h4>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <MapPin className="w-5 h-5 text-mid flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-light text-ink">5120 Woodway Dr.</p>
                      <p className="text-sm text-mid font-light">Suite 7018, Houston TX 77056</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Mail className="w-5 h-5 text-mid" />
                    <p className="font-light text-ink">info@z-co.info</p>
                  </div>
                  <div className="flex gap-5">
                    <Phone className="w-5 h-5 text-mid" />
                    <p className="font-light text-mid">Inquire for Office Line</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-[rgba(0,0,0,0.07)]">
                <blockquote className="font-serif font-light text-xl italic leading-[1.55] text-ink2 border-l-2 border-gold pl-5">
                  &ldquo;Z-Co is not just building projects; we are building a more predictable future for real estate development.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        heading="Common Questions"
        faqs={[
          {
            question: 'What is a real estate development platform?',
            answer: 'A real estate development platform like Z-Co goes beyond developing single, isolated projects. We utilize a replicable model—standardized designs, bulk procurement, and repeatable capital structures—to deploy similar project types across multiple high-growth markets efficiently. This scale reduces risk, accelerates timelines, and generates more predictable returns for our investment partners.'
          },
          {
            question: 'How do I invest in US real estate projects with Z-Co?',
            answer: <>Z-Co offers multiple entry points for accredited investors, including direct project equity, preferred equity, and <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">joint venture partnerships</Link>. We also accommodate <Link to="/eb5-real-estate-projects-usa" className="underline hover:text-ink transition-colors">international investors</Link> seeking U.S. permanent residency through USCIS-approved EB-5 investments into our qualifying development projects. Reach out via the Request Packet form to review our current offerings.</>
          },
          {
            question: 'What is the minimum investment for your projects?',
            answer: 'Minimum investment sizes vary depending on the capital structure and the specific project. Co-investments and LP equity positions typically have standard minimums comparable to institutional private equity real estate funds. EB-5 investments must meet USCIS statutory minimums (currently $800,000 in Targeted Employment Areas). Please contact our investor relations team for details.'
          },
          {
            question: 'Why does Z-Co focus on Texas and the Sun Belt?',
            answer: <>We strategically deploy capital in markets demonstrating sustained population growth, corporate relocations, and strong job creation. Texas, specifically the Greater Houston, San Antonio, and Austin corridors, offers an optimal mix of massive demographic influx, landlord-friendly policies, and economic diversification that drives demand for <Link to="/build-to-rent-developer-usa" className="underline hover:text-ink transition-colors">residential</Link>, <Link to="/healthcare-real-estate-developer" className="underline hover:text-ink transition-colors">healthcare</Link>, and <Link to="/mixed-use-real-estate-developer" className="underline hover:text-ink transition-colors">mixed-use</Link> real estate.</>
          }
        ]}
      />
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPacketModalOpen, setIsPacketModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [investorStatus, setInvestorStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInvestorStatus('submitting');
    setTimeout(() => setInvestorStatus('success'), 1500);
    setTimeout(() => setInvestorStatus('idle'), 5000);
  };

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white border-[rgba(0,0,0,0.07)] py-4 shadow-sm'
            : 'bg-white/97 border-[rgba(0,0,0,0.07)] py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/asset/z-co-logo-vertical.png"
              alt="Z-Co Development - Real Estate Development Company USA"
              className="h-[3.4rem] sm:h-[4rem] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-[10.5px] font-normal uppercase tracking-[0.16em] text-mid hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/#invest"
              className="text-[10.5px] font-normal uppercase tracking-[0.16em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-all"
            >
              Investor access
            </Link>
            <button
              onClick={() => setIsPacketModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gold px-[18px] py-[9px] text-[10.5px] font-normal text-white uppercase tracking-[0.13em] hover:bg-gold2 transition-all"
            >
              Request packet
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-ink transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 border-b border-[rgba(0,0,0,0.07)] bg-white shadow-sm overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-normal uppercase tracking-[0.14em] text-mid hover:text-ink py-1 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-[rgba(0,0,0,0.07)] flex flex-col gap-4">
                  <Link
                    to="/#invest"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-normal uppercase tracking-[0.16em] text-mid hover:text-ink transition-colors"
                  >
                    Investor access
                  </Link>
                  <button
                    onClick={() => { setIsMenuOpen(false); setIsPacketModalOpen(true); }}
                    className="flex items-center justify-center gap-2 py-4 text-sm font-normal uppercase tracking-[0.13em] bg-gold text-white hover:bg-gold2 transition-all"
                  >
                    Request packet
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Routes>
        <Route path="/" element={
          <Home
            investorStatus={investorStatus}
            handleInvestorSubmit={handleInvestorSubmit}
            formStatus={formStatus}
            handleContactSubmit={handleContactSubmit}
          />
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/build-to-rent-developer-usa" element={<BuildToRent />} />
        <Route path="/healthcare-real-estate-developer" element={<HealthcareRealEstate />} />
        <Route path="/mixed-use-real-estate-developer" element={<MixedUseRealEstate />} />
        <Route path="/eb5-real-estate-projects-usa" element={<EB5Projects />} />
        <Route path="/real-estate-joint-venture-partnerships" element={<JointVenture />} />
        <Route path="/real-estate-investment-platform" element={<InvestmentPlatform />} />
        <Route path="/prefabricated-construction-real-estate" element={<PrefabConstruction />} />
        <Route path="/real-estate-development-company-usa" element={<DevelopmentCompany />} />
        <Route path="/insights" element={<InsightsList />} />
        <Route path="/insights/:slug" element={<InsightsPost />} />
      </Routes>

      {/* FOOTER */}
      <footer className="py-16 md:py-24 border-t border-[rgba(0,0,0,0.08)] bg-ink2">
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            <div className="space-y-6 lg:col-span-1">
              <Link to="/">
                <img
                  src="/asset/z-co-logo-vertical.png"
                  alt="Z-Co Development"
                  className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Building a more predictable future for real estate development.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">Home</Link></li>
                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">About Us</Link></li>
                <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">Portfolio</Link></li>
                <li><Link to="/testimonials" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">Testimonials</Link></li>
                <li><Link to="/insights" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                  <span className="text-white/40 text-xs font-light leading-relaxed">5120 Woodway Dr. Suite 7018<br />Houston TX 77056</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/30 shrink-0" />
                  <span className="text-white/40 text-sm font-light">info@z-co.info</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/30 shrink-0" />
                  <span className="text-white/40 text-sm font-light">Inquire for Office Line</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light inline-flex items-center gap-2 group">
                    Privacy Policy
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
                <li><Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} className="text-white/40 hover:text-white transition-colors text-sm font-light">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-normal text-gold uppercase tracking-[0.17em] mb-6">Social</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/company/z-co-development" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm font-light">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/z_co_tx/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm font-light">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Z.CO.TX" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm font-light">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-normal text-white/25 uppercase tracking-widest">© 2024 Z-Co Development Group. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant />

      {/* Structured Data / Schema Markup */}
      <SchemaMarkup />

      {/* Request Packet Modal */}
      <RequestPacketModal isOpen={isPacketModalOpen} onClose={() => setIsPacketModalOpen(false)} />
    </div>
  );
}
