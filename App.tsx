
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
              50+ Projects Across<br /><em className="font-light">Six Asset Classes</em>
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

const ASSET_CLASSES = [
  {
    label: 'Residential',
    title: 'Residential',
    body: 'Gated, build-to-sell communities and luxury custom homes targeting workforce ownership near major employment centers. Dove Trails is the current proof case — 152 homes engineered on Z-Co\'s LGS platform, priced for buyers who work in the neighborhood they\'re buying into.',
    featured: 'Featured: Dove Trails, San Antonio'
  },
  {
    label: 'Multifamily',
    title: 'Multifamily',
    body: 'Market-rate and workforce rental communities anchored by strong amenity programs and disciplined location strategy — sited against real employment and population data, not just land price. The Everson delivered at 92% leased against top-tier submarket comparables.',
    featured: 'Featured: The Everson, San Antonio'
  },
  {
    label: 'Healthcare',
    title: 'Healthcare',
    body: 'Hospital, HOPD, and ambulatory care developments positioned proximate to major employment corridors and underserved primary service areas. MedPlex anchors this vertical — a hub hospital and physician network built for a market with zero existing acute-care competition.',
    featured: 'Featured: MedPlex, Katy, TX'
  },
  {
    label: 'Hospitality',
    title: 'Hospitality',
    body: 'Select and full-service hotel developments placed at strategic demand nodes — highway interchanges, employment corridors, medical districts — and transitioned to institutional-grade brand operations after delivery.',
    featured: 'Featured: Best Western Premier'
  },
  {
    label: 'Retail & F&B',
    title: 'Retail & F&B',
    body: 'Restaurant, wellness, and retail developments embedded within community-oriented, mixed-use neighborhood programs — designed to activate foot traffic around Z-Co\'s residential and healthcare anchors.',
    featured: 'Featured: TowneCenter'
  },
  {
    label: 'Commercial',
    title: 'Commercial',
    body: 'Office, automotive, and specialty commercial developments serving business tenants in high-growth Texas submarkets — delivered to brand and operational specification for national and regional operators.',
    featured: 'Featured: Caliber Collision'
  },
];

const AssetClassesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ac = ASSET_CLASSES[activeTab];
  return (
    <section id="assets" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <p className="text-[11px] font-normal text-gold uppercase tracking-[0.28em] mb-4">What We Build</p>
        <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mb-5">
          Six asset classes. <em>One platform.</em>
        </h2>
        <div className="w-7 h-px bg-gold mb-0" />
        <div className="flex flex-wrap gap-0 border-b border-[rgba(0,0,0,0.1)] mt-10">
          {ASSET_CLASSES.map((a, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`font-serif text-[17px] font-normal px-0 mr-8 pb-4 border-b-2 -mb-px transition-all duration-200 ${
                activeTab === i
                  ? 'text-ink border-gold'
                  : 'text-mid border-transparent hover:text-ink'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          <div className="aspect-[16/10] overflow-hidden bg-ink2">
            <SmartImage alt={ac.title} fallbackSeed={ac.label.toLowerCase().replace(/[^a-z]/g, '')} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif font-normal text-3xl text-ink mb-5">{ac.title}</h3>
            <p className="text-base text-mid leading-[1.85] font-light mb-4">{ac.body}</p>
            <p className="text-[11px] font-normal text-gold uppercase tracking-[0.1em] mt-5">{ac.featured}</p>
            <Link to="/portfolio" className="inline-flex items-center gap-2 mt-8 text-[11px] font-normal uppercase tracking-[0.16em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-all">
              View Portfolio <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
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

  // --- Hero slideshow ---
  const heroSlides = [
    { img: '/asset/dovetrails-main.jpg', caption: 'Dove Trails · San Antonio, TX', pos: 'center 40%' },
    { img: '/asset/everson-building.jpg', caption: 'The Everson · San Antonio, TX', pos: 'center 30%' },
    { img: '/asset/medplex.jpg', caption: 'MedPlex · Katy, TX', pos: 'center 25%' },
    { img: '/asset/townecenter.jpg', caption: 'TowneCenter · Katy, TX', pos: 'center 25%' },
  ];
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  // --- Asset class tabs ---
  const assetTabs = [
    {
      label: 'Residential',
      img: '/asset/dovetrails.jpg',
      desc: "Gated, build-to-sell communities and luxury custom homes targeting workforce ownership near major employment centers. Dove Trails is the current proof case — 152 homes engineered on Z-Co's LGS platform, priced for buyers who work in the neighborhood they're buying into, not commuting in from further out.",
      featured: 'Featured: Dove Trails, San Antonio',
    },
    {
      label: 'Multifamily',
      img: '/asset/everson-building.jpg',
      desc: 'Market-rate and workforce rental communities anchored by strong amenity programs and disciplined location strategy — sited against real employment and population data, not just land price. The Everson delivered at 92% leased against top-tier submarket comparables.',
      featured: 'Featured: The Everson, San Antonio',
    },
    {
      label: 'Healthcare',
      img: '/asset/medplex.jpg',
      desc: 'Hospital, HOPD, and ambulatory care developments positioned proximate to major employment corridors and underserved primary service areas. MedPlex anchors this vertical — a hub hospital and physician network built for a market with zero existing acute-care competition.',
      featured: 'Featured: MedPlex, Katy, TX',
    },
    {
      label: 'Hospitality',
      img: '/asset/hotel-best-western-1.png',
      desc: 'Select and full-service hotel developments placed at strategic demand nodes — highway interchanges, employment corridors, medical districts — and transitioned to institutional-grade brand operations after delivery.',
      featured: 'Featured: Best Western Premier',
    },
    {
      label: 'Retail & F&B',
      img: '/asset/shopsfryroad.jpg',
      desc: 'Restaurant, wellness, and retail developments embedded within community-oriented, mixed-use neighborhood programs — designed to activate foot traffic around Z-Co\'s residential and healthcare anchors, not compete with them.',
      featured: 'Featured: Urban Retreat',
    },
    {
      label: 'Commercial',
      img: '/asset/auto-experts.png',
      desc: 'Office, automotive, and specialty commercial developments serving business tenants in high-growth Texas submarkets — delivered to brand and operational specification for national and regional operators.',
      featured: 'Featured: Auto Experts',
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* 1. HERO — Full-screen image slideshow */}
      <header className="relative overflow-hidden" style={{ height: '100vh', minHeight: '620px' }}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === heroIdx ? 1 : 0,
              transition: 'opacity 1.4s ease',
            }}
          >
            <img src={slide.img} alt={slide.caption} className="w-full h-full object-cover" style={{ objectPosition: slide.pos }} />
          </div>
        ))}
        {/* Bottom strip — gradient only at base, building tops fully visible */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(14,14,12,1) 0%, rgba(14,14,12,0.95) 32%, rgba(14,14,12,0.0) 58%), linear-gradient(to top right, rgba(14,14,12,0.55) 0%, rgba(14,14,12,0.3) 30%, rgba(14,14,12,0) 55%)',
            paddingTop: '90px',
            paddingBottom: '44px',
            paddingLeft: '72px',
            paddingRight: '72px',
          }}
        >
          <div className="flex items-end justify-between gap-8">
            {/* Left: headline + cta */}
            <div className="max-w-2xl">
              <div style={{ width: '36px', height: '1px', background: '#8B6F3E', marginBottom: '18px' }} />
              <p className="text-white/50 uppercase text-[10px] tracking-[0.2em] mb-3">
                Real Estate Development · Z-Co Development Corp · Est. 2003
              </p>
              <h1 className="font-serif font-light text-white leading-[1.12] mb-3" style={{ fontSize: 'clamp(24px,2.9vw,44px)' }}>
                Faster builds. Faster exits.<br /><em>Faster returns.</em>
              </h1>
              <p className="text-white/55 text-sm mb-6 max-w-lg leading-relaxed">
                Replication reduces variance, compresses timelines, and accelerates stabilization—supporting faster capital return where applicable.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/portfolio"
                  className="border border-white/40 text-white px-5 py-3 text-[11px] uppercase tracking-[0.14em] hover:bg-white hover:text-ink transition-all"
                >
                  View Our Work →
                </Link>
                <button
                  onClick={() => document.getElementById('investors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-white/40 text-white px-5 py-3 text-[11px] uppercase tracking-[0.14em] hover:bg-white hover:text-ink transition-all"
                >
                  Our Approach →
                </button>
              </div>
            </div>

            {/* Right: caption + slide indicators */}
            <div className="flex flex-col items-end gap-3 shrink-0 pb-1">
              <p className="text-white/45 text-[11px] uppercase tracking-[0.14em]">{heroSlides[heroIdx].caption}</p>
              <div className="flex gap-2 items-center">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIdx(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === heroIdx ? '20px' : '6px',
                      height: '6px',
                      background: i === heroIdx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.14em]">
                {String(heroIdx + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. STATS BAR */}
      <div className="flex justify-between items-center border-b border-[rgba(0,0,0,0.1)] bg-white px-[72px] py-8">
        {[
          { value: '2003', label: 'Founded, Texas' },
          { value: "50+", label: "Projects Delivered" },
          { value: '0', label: 'Abandonments' },
          { value: '$200M+', label: 'Combined Project Value' },
          { value: '6', label: 'Asset Classes' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif font-light text-ink" style={{ fontSize: 'clamp(22px,2.5vw,32px)' }}>{s.value}</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-mid mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 3. ABOUT SECTION */}
      <section className="bg-white py-24 px-[72px]">
        <div className="grid grid-cols-2 gap-24 items-center">
          {/* Left: main image + absolute inset */}
          <div className="relative pb-9 pr-9">
            <div className="w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src="/asset/dovetrails.jpg" alt="Dove Trails — Z-Co Development" className="w-full h-full object-cover" />
            </div>
            <div className="absolute overflow-hidden" style={{
              bottom: '-36px', right: '-36px', width: '50%', aspectRatio: '4/3',
              border: '5px solid #fff', boxShadow: '0 8px 40px rgba(0,0,0,0.18)'
            }}>
              <img src="/asset/medplex.jpg" alt="MedPlex — Z-Co Development" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right: text */}
          <div>
            <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">About Z-Co Development</p>
            <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35] mb-5">
              We develop resilient healthcare, residential, hospitality, commercial, and mixed-use communities through an integrated real estate development platform that creates long-term value for investors, partners, and the communities we serve.
            </h2>
            <div className="w-7 h-px bg-gold mb-5" />
            <p className="text-[14.5px] leading-[1.75] text-mid">
              Z-Co Development Corp is a privately held, vertically integrated real estate company that turns undervalued land and underserved markets into concepts that work — for residents, physicians, tenants, and investors alike. Founded by Mike Butte in 2003, the firm has completed more than 37 projects across six asset classes through multiple economic cycles, with zero abandonments.
            </p>
            <p className="text-[14.5px] leading-[1.75] text-mid mt-3">
              Rather than building isolated structures, Z-Co designs end-to-end concepts — for next-generation healthcare, community-centered living, and vibrant commercial centers — and stays accountable for each one from land acquisition through delivery.
            </p>
            <blockquote className="border-l-2 border-gold pl-5 font-serif italic text-[19px] text-ink2 font-light leading-[1.55] mt-8">
              "Conservative about what we start. Relentless about what we finish."
            </blockquote>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gold mt-3">Mike Butte · Founder & CEO · Est. 2003</p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO SECTION */}
      <section className="bg-off py-24 px-[72px]">
        <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">What We Do</p>
        <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35] mb-2">
          Four ways we<br /><em>create value.</em>
        </h2>
        <div className="w-7 h-px bg-gold mb-10" />
        <div className="grid grid-cols-4 gap-px bg-[rgba(0,0,0,0.1)] mt-10">
          {[
            {
              title: 'Real Estate Development',
              desc: "Z-Co's own residential, healthcare, hospitality, and mixed-use projects — from land acquisition through delivery.",
              cta: 'View Current Projects →',
              href: '/portfolio',
              scroll: null,
            },
            {
              title: 'Investment Opportunities',
              desc: 'Institutional-style capital structures opened to accredited investors, including EB-5 eligible projects.',
              cta: 'See Investor Access →',
              href: null,
              scroll: 'investors',
            },
            {
              title: 'Development Services',
              desc: "Turnkey project delivery for developers and asset owners who want Z-Co's execution, without giving up ownership.",
              cta: 'Build With Us →',
              href: null,
              scroll: 'build-with-us',
            },
            {
              title: 'US Modular Systems\nLight Gauge Steel Manufacturing',
              desc: "Z-Co's LGS manufacturing capability — built to serve Z-Co's own projects first.",
              cta: 'View the Facility →',
              href: '/portfolio',
              scroll: null,
            },
          ].map((card) => (
            <div key={card.title} className="bg-white p-8">
              <h3 className="text-[15px] font-medium text-ink mb-3 whitespace-pre-line">{card.title}</h3>
              <p className="text-[13.5px] leading-[1.7] text-mid mb-5">{card.desc}</p>
              {card.href ? (
                <Link to={card.href} className="text-[11px] uppercase tracking-[0.14em] text-ink hover:text-gold">{card.cta}</Link>
              ) : (
                <button
                  onClick={() => document.getElementById(card.scroll!)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[11px] uppercase tracking-[0.14em] text-ink hover:text-gold"
                >
                  {card.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHAT WE BUILD — tabbed asset classes */}
      <section className="bg-white py-24 px-[72px]">
        <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">What We Build</p>
        <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35]">
          Six asset classes.<br /><em>One platform.</em>
        </h2>
        <div className="w-7 h-px bg-gold mt-4" />
        {/* Tab strip */}
        <div className="flex flex-wrap border-b border-[rgba(0,0,0,0.1)] mt-10">
          {assetTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`font-serif text-[17px] font-light py-4 pr-8 mr-8 border-b-2 cursor-pointer transition-colors ${
                i === activeTab ? 'text-ink border-gold' : 'text-mid border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Panel */}
        <div className="grid grid-cols-2 gap-16 items-center py-12">
          <img
            src={assetTabs[activeTab].img}
            alt={assetTabs[activeTab].label}
            className="w-full object-cover"
            style={{ aspectRatio: '16/10' }}
          />
          <div>
            <h3 className="font-serif text-[28px] text-ink mb-4">{assetTabs[activeTab].label}</h3>
            <p className="text-[14.5px] leading-[1.75] text-mid">{assetTabs[activeTab].desc}</p>
            <p className="text-[11px] uppercase tracking-[0.1em] text-gold mt-4">{assetTabs[activeTab].featured}</p>
          </div>
        </div>
      </section>

      {/* 6. WHY Z-CO */}
      <section id="why-zco" className="py-[110px] px-[72px]" style={{ backgroundColor: '#0E0E0C', backgroundImage: 'linear-gradient(to right,rgba(14,14,12,1) 0%,rgba(14,14,12,.97) 20%,rgba(14,14,12,.8) 40%,rgba(14,14,12,.45) 62%,rgba(14,14,12,.1) 85%,rgba(14,14,12,0) 100%), url(/asset/philosophy-building.webp)', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'right top, right top', backgroundSize: '58% 100%, 58% auto' }}>
        <div style={{ color: '#A8895A', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Why Z-Co</div>
        <h2 className="font-serif font-light" style={{ color: '#fff', fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.1, marginBottom: 12 }}>Vertical integration.<br /><em>Real execution.</em></h2>
        <div style={{ width: 40, borderTop: '1px solid #8B6F3E', marginBottom: 32 }} />
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 820, marginBottom: 14 }}>We deliver essential, recession-resistant projects designed for the masses through an end-to-end development platform, from site selection and underwriting to entitlements, design, capital structuring, construction execution, and exit. Replication drives speed, reduces risk, and accelerates stabilization, supporting faster sales and faster capital return — the foundation of Z-Co's Replication Advantage as a real estate development company USA investors trust for build-to-rent and build-to-sell communities alike.</p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 820, marginBottom: 48 }}>Z-Co positions complementary assets near one another by design — a hospital next to a town center, homes near a major employment corridor — and builds on its own factory-based construction platform rather than renting one project at a time. Dove Trails proved the model in San Antonio; MedPlex and TowneCenter are scaling it into Katy; Austin and the wider Sun Belt corridor are next.</p>

        {/* Grid: bullet points + pull quote */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'start' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
            {[
              'One partner from land acquisition to final delivery — no handoffs between separate architects, contractors, and property managers.',
              'Factory-enabled construction that locks material costs and compresses schedule before a shovel hits the ground.',
              'Disciplined, data-driven site selection — Z-Co only enters markets with structural undersupply and real employment growth.',
              'Institutional-grade reporting for capital partners, from LP waterfall structures to K-1 documentation.',
              'Capital solutions that meet developers and investors where they are — direct equity, JV partnerships, or EB-5 structures.',
              '23 years, 50+ completed projects, zero abandonments. Proven, not promised.',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '26px 28px', background: '#1C1C1A' }}>
                <span style={{ flexShrink: 0, width: 26, height: 26, border: '1px solid #A8895A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8895A', fontSize: 14 }}>✓</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderLeft: '2px solid #A8895A', paddingLeft: 22 }}>
            <p className="font-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.55 }}>"In 50+ completed projects, we have never abandoned a development. That is not fortune — that is underwriting."</p>
            <p style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A8895A', marginTop: 10 }}>Mike Butte · Founder &amp; CEO</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 'auto', paddingTop: 32 }}>
              {[{ v: "50+", l: "Projects Delivered" }, { v: '23', l: 'Years Operating' }, { v: '0', l: 'Abandonments' }].map((s) => (
                <div key={s.l} style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 14 }}>
                  <strong className="font-serif" style={{ display: 'block', fontWeight: 300, color: '#A8895A', fontSize: 24 }}>{s.v}</strong>
                  <span style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How the Platform Aligns */}
        <div style={{ marginTop: 80 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>How the Platform Aligns</p>
          <p className="font-serif" style={{ fontStyle: 'italic', fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', maxWidth: 660, marginBottom: 48 }}>Every project runs the same seven-stage lifecycle, and every stakeholder sits in the same triangle of accountability — repeatable structure, not a one-off pitch.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
            <div style={{ padding: 40, background: '#1C1C1A' }}>
              <p style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>The Lifecycle Model</p>
              <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto' }}>
                <svg viewBox="0 0 400 400" style={{ width: '100%' }}>
                  <circle cx="200" cy="200" r="122" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  {([[200,78,295.4,123.9],[295.4,123.9,318.9,227.1],[318.9,227.1,252.9,309.9],[252.9,309.9,147.1,309.9],[147.1,309.9,81.1,227.1],[81.1,227.1,104.6,123.9],[104.6,123.9,200,78]] as number[][]).map(([x1,y1,x2,y2],i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>)}
                  {([[200,78],[295.4,123.9],[318.9,227.1],[252.9,309.9],[147.1,309.9],[81.1,227.1],[104.6,123.9]] as number[][]).map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="4.5" fill="#C9A227"/>)}
                </svg>
                {[
                  { label: 'Development Plan', n: '01', left: '50%', top: '8%' },
                  { label: 'Venture Formation', n: '02', left: '82.8%', top: '23.8%' },
                  { label: 'Setup Operations', n: '03', left: '90.9%', top: '59.3%' },
                  { label: 'Execute Development Plan', n: '04', left: '68.2%', top: '87.8%' },
                  { label: 'Reach a Predetermined Exit Point', n: '05', left: '31.8%', top: '87.8%' },
                  { label: 'Execute Exit Strategy', n: '06', left: '9.1%', top: '59.3%' },
                  { label: 'Distribute Profits', n: '07', left: '17.2%', top: '23.8%' },
                ].map(({ label, n, left, top }) => (
                  <div key={n} style={{ position: 'absolute', left, top, transform: 'translate(-50%,-50%)', width: 90, textAlign: 'center', pointerEvents: 'none' }}>
                    <span className="font-serif" style={{ display: 'block', fontStyle: 'italic', color: '#C9A227', fontSize: 11, marginBottom: 2 }}>{n}</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, lineHeight: 1.3 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: 40, background: '#1C1C1A' }}>
              <p style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>Stakeholder Alignment</p>
              <div style={{ maxWidth: 280, margin: '0 auto 32px' }}>
                <svg viewBox="0 0 300 260" style={{ width: '100%' }}>
                  <polygon points="150,20 280,230 20,230" fill="rgba(201,162,39,0.06)" stroke="#C9A227" strokeWidth="1.5"/>
                  <circle cx="150" cy="20" r="5" fill="#C9A227"/>
                  <circle cx="280" cy="230" r="5" fill="#C9A227"/>
                  <circle cx="20" cy="230" r="5" fill="#C9A227"/>
                </svg>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                {[
                  { title: 'Operator', desc: 'Runs day-to-day execution — construction, leasing, and asset performance once a project is delivered.' },
                  { title: 'Developer', desc: 'Sources the site, underwrites the deal, and carries execution risk from entitlement through delivery.' },
                  { title: 'Investor', desc: 'Provides milestone-linked capital and receives reporting, distributions, and a defined return.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <span className="font-serif" style={{ display: 'block', fontStyle: 'italic', color: '#A8895A', fontSize: 15, marginBottom: 8 }}>{title}</span>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED DEVELOPMENTS */}
      <section className="bg-off py-24 px-[72px]">
        <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">Featured Developments</p>
        <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35]">Proof, not projections.</h2>
        <div className="w-7 h-px bg-gold mt-4 mb-10" />
        <div className="grid grid-cols-3 gap-px bg-[rgba(0,0,0,0.1)]">
          {[
            {
              badge: 'Under Construction',
              name: 'Dove Trails',
              location: 'San Antonio, TX',
              problem: "San Antonio's workforce ownership housing supply fell 80% in a single year, pricing Medical District employees out of homeownership near their jobs.",
              solution: "152 gated, build-to-sell homes 2.2 miles from the Medical Center, built on Z-Co's LGS platform to hit an otherwise-impossible $185K–$216K price point.",
              statValue: '31%',
              statLabel: 'Gross Margin',
            },
            {
              badge: 'Concept · Pre-Development',
              name: 'MedPlex',
              location: 'Katy, TX',
              problem: '120,000-plus Katy residents have no local acute-care hospital and drive 20–40 minutes for emergency care.',
              solution: 'A hub hospital, HOPD network, and physician alliance anchoring TowneCenter on the I-10 Energy Corridor — zero existing competition in the primary service area.',
              statValue: '120K+',
              statLabel: 'Residents Served',
            },
            {
              badge: 'Concept · Pre-Development',
              name: 'TowneCenter',
              location: 'Katy, TX',
              problem: "A hospital campus alone doesn't build a neighborhood — it needs retail, daycare, and everyday amenities around it.",
              solution: 'A mixed-use retail town center on North Fry Road developed alongside MedPlex as one connected campus.',
              statValue: '1',
              statLabel: 'Connected Campus with MedPlex',
            },
          ].map((card) => (
            <div key={card.name} className="bg-white p-8">
              <p className="text-[9.5px] uppercase tracking-[0.14em] text-gold mb-3">{card.badge}</p>
              <h3 className="font-serif text-[22px] text-ink mb-1">
                {card.name}
                <span className="text-mid text-[14px] font-sans font-light ml-2">{card.location}</span>
              </h3>
              <div className="mt-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-gold">Problem</span>
                <p className="text-[13.5px] leading-[1.7] text-mid mt-1">{card.problem}</p>
              </div>
              <div className="mt-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-gold">Solution</span>
                <p className="text-[13.5px] leading-[1.7] text-mid mt-1">{card.solution}</p>
              </div>
              <div className="mt-6">
                <strong className="font-serif text-[28px] text-gold font-light">{card.statValue}</strong>
                <span className="text-[10.5px] uppercase tracking-[0.1em] text-mid ml-2">{card.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BUILD WITH US — dark */}
      <section id="build-with-us" className="bg-ink py-24 px-[72px]">
        <p className="text-[11px] text-gold2 uppercase tracking-[0.18em] mb-4">Our Integration Approach</p>
        <h2 className="font-serif font-light text-white leading-[1.35] mb-2" style={{ fontSize: 'clamp(28px,3vw,44px)' }}>
          From land<br /><em>to sale.</em>
        </h2>
        <div className="w-7 h-px bg-gold mb-5" />
        <p className="text-[rgba(255,255,255,0.65)] text-[15px] leading-[1.75] max-w-2xl mb-12">
          A disciplined approach to every project. Z-Co evaluates every project through detailed market research, data-driven supply-demand analysis, and disciplined development planning — designed to align long-term community demand with practical, on-the-ground execution.
        </p>
        <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] mt-2">
          {[
            { num: '01', title: 'Land Acquisition', desc: "Proprietary site sourcing with rigorous due diligence on entitlement risk, market demand, and capital efficiency." },
            { num: '02', title: 'Entitlements & Planning', desc: "Zoning, permitting and regulatory navigation with established municipal relationships." },
            { num: '03', title: 'Design & Engineering', desc: "Architect and consultant coordination built around constructability — including LGS panel design — not just design intent." },
            { num: '04', title: 'Capital Structuring', desc: "Debt and equity coordination across institutional lenders, family offices, and crowdfunding platforms." },
            { num: '05', title: 'Construction Oversight', desc: "Owner-representative oversight with active contractor management, budget control, and schedule enforcement." },
            { num: '06', title: 'Sales, Marketing & Delivery', desc: "Buyer experience programs driving pre-sales velocity, community identity, and on-time close of escrow." },
          ].map((card) => (
            <div key={card.num} className="bg-ink p-8">
              <div className="font-serif text-[32px] text-gold italic font-light mb-3">{card.num}</div>
              <div className="text-[15px] font-medium text-white mb-2">{card.title}</div>
              <div className="text-[13.5px] leading-[1.7] text-[rgba(255,255,255,0.6)]">{card.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[rgba(255,255,255,0.55)] mb-5">Have a site or a project that needs execution?</p>
          <Link
            to="/testimonials"
            className="border border-white/40 text-white px-6 py-3 text-[12px] uppercase tracking-[0.14em] hover:bg-white hover:text-ink transition-all inline-block"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

      {/* 8. INSIGHTS TEASER */}
      <section className="bg-off py-24 px-[72px]">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">Insights</p>
            <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35]">
              Research, not<br /><em>marketing copy.</em>
            </h2>
          </div>
          <Link
            to="/insights"
            className="border border-ink text-ink px-5 py-3 text-[11px] uppercase tracking-[0.14em] hover:bg-ink hover:text-white transition-all"
          >
            View All Insights →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-px bg-[rgba(0,0,0,0.1)]">
          {[
            {
              cat: 'Investment Analysis',
              mins: '18',
              title: 'The Dove Trails Investment Thesis',
              summary: "The full underwriting thesis behind Dove Trails: the national affordability crisis, San Antonio's 80% workforce-housing supply drop, and why LGS construction changes the return profile.",
              href: '/insights/dove-trails-thesis',
            },
            {
              cat: 'LGS Technology',
              mins: '9',
              title: 'Light Gauge Steel vs. Wood Frame: The Real Numbers',
              summary: "A quantitative look at why Z-Co builds on a factory-based LGS platform — cost lock-in, schedule compression, and the McKinsey productivity data.",
              href: '/insights/lgs-economics',
            },
            {
              cat: 'Market Research',
              mins: '8',
              title: 'The Katy Healthcare Access Gap: Why MedPlex',
              summary: '120,000-plus Katy residents have no local acute-care hospital. A look at the demand data behind MedPlex, and why the I-10 Energy Corridor is the only viable location.',
              href: '/insights/medplex-access-gap',
            },
          ].map((card) => (
            <Link key={card.title} to={card.href} className="bg-white p-8 cursor-pointer group block">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9.5px] uppercase tracking-[0.14em] text-gold border border-gold px-2 py-0.5">{card.cat}</span>
                <span className="text-[11px] text-mid">· {card.mins} min read</span>
              </div>
              <h3 className="font-serif text-[20px] text-ink leading-[1.28] mb-3 group-hover:text-gold transition-colors">{card.title}</h3>
              <p className="text-[13.5px] leading-[1.7] text-mid">{card.summary}</p>
              <p className="text-[11.5px] uppercase tracking-[0.14em] text-ink mt-4">Read More →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. INVESTORS SECTION */}
      <section id="investors" className="bg-white py-24 px-[72px]">
        <div className="grid grid-cols-2 gap-24">
          {/* Left */}
          <div>
            <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">For Investors</p>
            <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35] mb-4">
              Capital access, structured around an identified pipeline.
            </h2>
            <div className="w-7 h-px bg-gold mb-5" />
            <p className="text-[14.5px] leading-[1.75] text-mid">
              Each raise is tied to a specific project with its own underwriting, timeline, and milestone-linked capital draws — the same structure institutional LPs receive, documented and reported project by project.
            </p>
            <div className="grid grid-cols-2 gap-px bg-[rgba(0,0,0,0.1)] mt-6">
              {[
                { title: 'De-risked', desc: 'Milestone deployment of capital.' },
                { title: 'Institutional', desc: 'Ready for major PE allocation.' },
              ].map((f) => (
                <div key={f.title} className="bg-off p-5">
                  <div className="text-[14px] font-medium text-ink mb-1">{f.title}</div>
                  <div className="text-[13px] text-mid">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-off p-6 mt-6">
              <div className="text-[13px] uppercase tracking-[0.14em] text-ink mb-5">How investing works</div>
              <div className="flex gap-8">
                {[
                  { num: '01', label: 'Request packet' },
                  { num: '02', label: 'Review structure + timeline' },
                  { num: '03', label: 'Invest + receive updates' },
                ].map((step) => (
                  <div key={step.num}>
                    <div className="font-serif text-[22px] text-gold">{step.num}</div>
                    <div className="text-[13px] text-ink mt-1">{step.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[13px] text-mid mt-5">
              Z-Co also accommodates international investors seeking U.S. permanent residency through EB-5 visa real estate investment into qualifying development projects.
            </p>
            <div className="flex items-center gap-4 mt-5 border-t border-[rgba(0,0,0,0.1)] pt-5">
              <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-white text-[13px] font-medium">C</div>
              <div>
                <div className="text-[14px] font-medium text-ink">Covercy</div>
                <div className="text-[12px] text-mid">Capital Calls · Distributions · Statements</div>
              </div>
            </div>
          </div>

          {/* Right: Access Portal form */}
          <div className="bg-off p-10">
            <h3 className="font-serif text-[26px] text-ink mb-2">Access Portal</h3>
            <p className="text-[13px] text-mid mb-6">Receive investor materials and pipeline metrics.</p>
            <form onSubmit={handleInvestorSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold mt-3"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold mt-3"
              />
              <select className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold mt-3">
                <option value="">Investor Type</option>
                <option>Family Office</option>
                <option>High Net Worth Individual</option>
                <option>Institutional Fund</option>
                <option>EB-5 Visa Investor</option>
                <option>Sovereign / Government Entity</option>
              </select>
              <select className="w-full border border-[rgba(0,0,0,0.15)] bg-white p-3 text-[14px] font-light text-ink outline-none focus:border-gold mt-3">
                <option value="">Investment Capacity</option>
                <option>$50K–$250K</option>
                <option>$250K–$1M</option>
                <option>$1M–$5M</option>
                <option>$5M+</option>
              </select>
              {investorStatus === 'success' ? (
                <p className="font-serif text-[15px] text-ink mt-6 text-center">Thank you. We will be in touch within 48 hours.</p>
              ) : (
                <button
                  type="submit"
                  disabled={investorStatus === 'submitting'}
                  className="w-full bg-ink text-white text-[12px] uppercase tracking-[0.14em] py-4 mt-4 hover:bg-gold transition-colors"
                >
                  {investorStatus === 'submitting' ? 'Sending…' : 'Request Package →'}
                </button>
              )}
              <p className="text-[11px] text-mid mt-3">Accredited Investors Only. Not an offer of securities.</p>
            </form>
          </div>
        </div>

        {/* Operating Platform sub-section */}
        <div className="border-t border-[rgba(0,0,0,0.1)] mt-16 pt-12">
          <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">The Operating Platform</p>
          <h3 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}>
            One platform, <em>three engines.</em>
          </h3>
          <div className="w-7 h-px bg-gold mt-4" />
          <p className="text-mid text-[14.5px] max-w-2xl mt-4">
            Development, capital, and construction working as one system — not three separate vendors stitched together project by project. This is the platform behind every raise.
          </p>
          <div className="grid grid-cols-3 gap-px bg-[rgba(0,0,0,0.1)] mt-8">
            {[
              {
                title: 'Development',
                desc: "Essential projects engineered to repeat at scale — the foundation of Z-Co as a build-to-rent developer USA sponsors trust for recession-resistant real estate.",
                bullets: ['Prototype-driven planning', 'Disciplined approvals', 'Market-led siting'],
              },
              {
                title: 'Capital Solutions',
                desc: 'Structures built for absolute alignment and execution.',
                bullets: ['Milestone-linked capital', 'Transparent reporting', 'Institution-ready data'],
              },
              {
                title: 'Prefabricated Construction',
                desc: 'Faster delivery. Higher control. Consistent outcomes — prefabricated construction real estate built for repeatability.',
                bullets: ['Factory-enabled build', 'Standardized assemblies', 'Predictable timelines'],
              },
            ].map((card) => (
              <div key={card.title} className="bg-off p-7">
                <div className="text-[15px] font-medium text-ink mb-3">{card.title}</div>
                <p className="text-[13.5px] leading-[1.7] text-mid mb-4">{card.desc}</p>
                <ul className="text-[13px] text-ink space-y-1 list-none pl-0">
                  {card.bullets.map((b) => (
                    <li key={b}>— {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TEAM SECTION */}
      <section id="team" className="bg-off py-24 px-[72px]">
        <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">Leadership</p>
        <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35]">
          Meet the Team
          <span className="ml-3 text-[10px] uppercase tracking-[0.14em] text-gold border border-gold px-2 py-1 font-sans">30+ Years Experience</span>
        </h2>
        <div className="w-7 h-px bg-gold mt-4 mb-5" />
        <p className="text-mid text-[14px] max-w-xl mb-10">
          A seasoned group of operators, builders, and capital partners driving execution across every project.
        </p>

        {/* Mike Butte lead bio */}
        <div className="grid gap-11 items-start mb-14 pb-12 border-b border-[rgba(0,0,0,0.1)]" style={{ gridTemplateColumns: '260px 1fr' }}>
          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src="/asset/mike-butte.jpg"
              alt="Mike Butte"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h3 className="font-serif text-[28px] text-ink mb-1">Mike Butte</h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gold mb-5">Founder & CEO</p>
            <p className="text-[14px] leading-[1.75] text-mid">
              Mike Butte is the Founder and CEO of Z-Co Development Corp., a real estate development company USA investors and partners rely on for an end-to-end development platform spanning real estate and operating-business projects. With more than 30 years of leadership experience, Mike has executed projects across multiple asset classes by combining disciplined underwriting, capital strategy, and delivery execution to create recession-resistant, essential-service assets designed for scale. His background includes development and ownership experience tied to nationally recognized brands such as Holiday Inn, Best Western, Arby's, Denny's, and Caliber Collision, and he remains focused on building repeatable project prototypes that compress timelines and improve predictability across markets.
            </p>
            <p className="text-[14px] leading-[1.75] text-mid mt-3">
              Mike is also passionate about expanding access, creating opportunities for small investors to participate in institutional-quality projects and helping budding real estate developers learn, grow, and succeed through clear systems, practical guidance, and aligned real estate joint venture partnerships.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-5 gap-px bg-[rgba(0,0,0,0.1)]">
          {[
            { name: 'Mo Khan', title: 'Chief Operating Officer', img: '/asset/mo-khan.png', bio: "Leads financial strategy, capital structuring and LP/GP waterfall structures across Z-Co's development platform. Ensures every project is capitalized for execution certainty." },
            { name: 'Sarah Ali', title: 'President', img: '/asset/sarah-ali.jpg', bio: "Leads day-to-day operations and project delivery. Works directly with contractors, capital partners, and the development team across Z-Co's active portfolio." },
            { name: 'Omar Terkawi', title: 'Director of Development', img: '/asset/omar-terkawi.png', bio: "Oversees project planning, entitlements, design coordination and construction management. Maintains schedule, budget and design intent from groundbreak to handover." },
            { name: 'Dan Prosser', title: 'Senior Advisor', img: '/asset/dan-prosser.png', bio: "Brings decades of senior advisory experience to Z-Co's strategic initiatives. Provides counsel on market positioning, capital markets, and long-term development strategy." },
            { name: 'John Stevens', title: 'Legal Counsel', img: '/asset/john-stevens.jpg', bio: "Oversees legal structuring across Z-Co's development partnerships, entitlements, and capital transactions. Ensures compliance and investor protection across all project structures." },
            { name: 'Anish N. Kantharia', title: 'Director of Marketing', img: '/asset/anish-kantharia.jpg', bio: "Leads brand strategy, digital marketing, and project marketing execution across Z-Co's active developments and investor communications." },
            { name: 'Abel Castro', title: 'Construction Manager', img: '/asset/abel-castro.png', bio: "Manages on-site construction operations, contractor relationships, and field-level schedule compliance across Z-Co's active development projects." },
            { name: 'Phan Le', title: 'Financial Analyst', img: '/asset/phan-le.png', bio: "Supports underwriting, financial modeling, and investment reporting across Z-Co's project portfolio." },
            { name: 'Thaddaus Hays Jr.', title: 'Director of Business Development', img: '/asset/thaddaus-hays.jpg', bio: "Coordinates project timelines, contractor schedules, and stakeholder communications for Z-Co's active development pipeline." },
          ].map((member) => (
            <div key={member.name} className="bg-white">
              {member.img ? (
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-[3/4] bg-off flex items-center justify-center">
                  <span className="text-[11px] text-mid uppercase tracking-[0.14em]">No Photo</span>
                </div>
              )}
              <div className="p-5">
                <div className="font-serif text-[19px] text-ink mb-1">{member.name}</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-gold mb-2">{member.title}</div>
                <p className="text-[12.5px] leading-[1.65] text-mid">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section id="testimonials" className="bg-off py-24 px-[72px]">
        <p className="text-[11px] text-gold uppercase tracking-[0.18em] mb-4">Testimonials</p>
        <h2 className="font-serif font-light text-[28px] text-ink leading-[1.35]">
          What our partners<br />&amp; clients <em>say.</em>
        </h2>
        {/* Top row: 3 */}
        <div className="grid grid-cols-3 gap-px bg-[rgba(0,0,0,0.1)] mt-12">
          {[
            { quote: "It has been a wonderful experience. Your firm has set the customer focus standard. You have demonstrated a high quality of professionalism and your associates exceed the needs of your customers daily.", name: "David Taylor", org: "Frost Bank" },
            { quote: "Mike Butte is a longtime trusted friend and someone I hold in high regard. In business, Mike is thoughtful, careful, and highly resourceful. I've always appreciated his practical insights and disciplined approach.", name: "Stewart Morris Jr.", org: "President · Stewart Security Capital Inc." },
            { quote: "From my experience with you, I can easily endorse you. You have a well-rounded level of experience in general business and you couple that with integrity — a good combination.", name: "Randy Hancock", org: "Hancock Realty Corporation, Houston" },
          ].map((t) => (
            <div key={t.name} className="bg-white p-9">
              <div className="font-serif text-[52px] leading-[0.8] text-gold font-light mb-4">"</div>
              <p className="font-serif italic text-[16.5px] font-light leading-[1.72] text-ink2 mb-6">{t.quote}</p>
              <div className="w-7 h-px bg-gold mb-4" />
              <div className="text-[13px] font-medium text-ink mb-1">{t.name}</div>
              <div className="text-[12px] text-mid">{t.org}</div>
            </div>
          ))}
        </div>
        {/* Bottom row: 2 */}
        <div className="grid grid-cols-2 gap-px bg-[rgba(0,0,0,0.1)] mt-px">
          {[
            { quote: "As Mike Butte's real estate broker since 2008, I have always been impressed with Mike's honesty, integrity, and professionalism. I strongly recommend Mike as a loyal and trustworthy business associate.", name: "Danny Pleason", org: "Real Estate Broker · Martha Turner Properties" },
            { quote: "Working with Z-Co has been consistently professional and results-oriented. The team demonstrates a rare combination of market discipline and genuine care for long-term community outcomes.", name: "Capital Partner", org: "Texas-Based Family Office" },
          ].map((t) => (
            <div key={t.name} className="bg-white p-9">
              <div className="font-serif text-[52px] leading-[0.8] text-gold font-light mb-4">"</div>
              <p className="font-serif italic text-[16.5px] font-light leading-[1.72] text-ink2 mb-6">{t.quote}</p>
              <div className="w-7 h-px bg-gold mb-4" />
              <div className="text-[13px] font-medium text-ink mb-1">{t.name}</div>
              <div className="text-[12px] text-mid">{t.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. CONTACT SECTION — dark */}
      <section id="contact" className="bg-ink py-24 px-[72px]">
        <div className="grid grid-cols-2 gap-24">
          {/* Left */}
          <div>
            <p className="text-[11px] text-gold2 uppercase tracking-[0.18em] mb-4">Get in Touch</p>
            <h2 className="font-serif font-light text-white" style={{ fontSize: 'clamp(32px,3.5vw,52px)' }}>
              Let's build together.
            </h2>
            <p className="text-[rgba(255,255,255,0.45)] text-[15px] mt-5">
              Inquire about partnerships, site submissions, or prefabricated solutions.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: 'Address', value: '5120 Woodway Dr. Suite 7018, Houston TX 77056' },
                { label: 'Email', value: 'info@z-co.info' },
                { label: 'Investor Enquiries', value: 'investors@zco-dev.com' },
                { label: 'Development', value: 'development@zco-dev.com' },
              ].map((row) => (
                <div key={row.label} className="flex gap-6 border-t border-[rgba(255,255,255,0.08)] pt-4">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.45)] w-36 shrink-0">{row.label}</span>
                  <span className="text-[14px] text-[rgba(255,255,255,0.85)]">{row.value}</span>
                </div>
              ))}
            </div>
            <blockquote className="font-serif italic text-[16px] text-[rgba(255,255,255,0.5)] leading-[1.6] border-l-2 border-[rgba(139,111,62,0.4)] pl-6 mt-10">
              "Z-Co is not just building projects; we are building a more predictable future for real estate development."
            </blockquote>
          </div>

          {/* Right: Contact form */}
          <div>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white placeholder-[rgba(255,255,255,0.35)] p-4 text-[14px] font-light outline-none focus:border-gold/50 mt-3"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white placeholder-[rgba(255,255,255,0.35)] p-4 text-[14px] font-light outline-none focus:border-gold/50 mt-3"
              />
              <select className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white p-4 text-[14px] font-light outline-none focus:border-gold/50 mt-3">
                <option value="">Nature of Enquiry</option>
                <option>Investment Partnership</option>
                <option>Development Services</option>
                <option>Land/Site Opportunity</option>
                <option>Joint Venture</option>
                <option>General Enquiry</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white placeholder-[rgba(255,255,255,0.35)] p-4 text-[14px] font-light outline-none focus:border-gold/50 mt-3"
              />
              {formStatus === 'success' ? (
                <p className="font-serif text-white text-[15px] mt-6 text-center">Thank you. We will be in touch within 48 hours.</p>
              ) : (
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gold text-ink text-[12px] uppercase tracking-[0.14em] py-4 mt-4 hover:bg-gold2 transition-colors font-medium"
                >
                  {formStatus === 'submitting' ? 'Sending…' : 'Send Enquiry →'}
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <FAQSection
        faqs={[
          {
            question: 'What types of investors does Z-Co work with?',
            answer: <>Z-Co works with accredited investors across a range of capital profiles — from <Link to="/real-estate-investment-platform" className="underline hover:text-ink transition-colors">family offices and high-net-worth individuals</Link> to institutional funds and EB-5 visa investors. Each raise is tied to a specific project with documented underwriting, milestone-linked capital draws, and transparent reporting.</>
          },
          {
            question: 'How does Z-Co structure its investment offerings?',
            answer: <>Each project raise uses an institutional-style structure: equity and debt coordinated project-by-project, with LP/GP waterfalls, milestone-linked capital deployment, and regular reporting through our Covercy investor portal. This is not a pooled fund — every dollar is tied to a specific <Link to="/real-estate-joint-venture-partnerships" className="underline hover:text-ink transition-colors">identified development</Link>.</>
          },
          {
            question: 'What is Light Gauge Steel (LGS) construction and why does Z-Co use it?',
            answer: <>LGS is a factory-manufactured structural framing system that replaces traditional wood framing. Z-Co uses it across residential and modular projects because it compresses construction timelines, locks in material costs, and improves quality control — key advantages in a volatile materials market. Our US Modular Systems manufacturing platform is built to support <Link to="/prefabricated-construction-real-estate" className="underline hover:text-ink transition-colors">Z-Co's own pipeline first</Link>.</>
          },
          {
            question: 'What is the EB-5 visa program and how does Z-Co qualify?',
            answer: <>The <Link to="/eb5-real-estate-projects-usa" className="underline hover:text-ink transition-colors">EB-5 Immigrant Investor Program</Link> allows foreign nationals to obtain U.S. permanent residency by investing in qualifying commercial enterprises that create U.S. jobs. Z-Co structures select projects to accommodate EB-5 capital, providing international investors with a pathway to residency alongside market-rate real estate returns.</>
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
