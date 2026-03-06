
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ProjectsPage from './pages/Projects';
import Portfolio from './pages/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory';
import Testimonials from './pages/Testimonials';
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
  CheckCircle2
} from 'lucide-react';

const LifecycleGraphic = () => {
  const steps = [
    { label: "Development Plan", color: "#BEF264" }, // Lime 300
    { label: "Venture Formation", color: "#A3E635" }, // Lime 400
    { label: "Setup Operations", color: "#84CC16" }, // Lime 500
    { label: "Execute Development Plan", color: "#65A30D" }, // Lime 600
    { label: "Reach a predetermined exit point", color: "#4D7C0F" }, // Lime 700
    { label: "Execute Exit Strategy", color: "#3F6212" }, // Lime 800
    { label: "Distribute Profits", color: "#14532D" }, // Green 900
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
    // Larger viewBox and circle for a premium, high-impact look
    // Coordinates calibrated for a 1500x1500px virtual space
    // Thickness increased by 10% (R-r: 400-345 = 55)
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

      {/* Labels */}
      {steps.map((step, i) => {
        const angleStep = 360 / steps.length;
        const offset = - (angleStep / 2);
        const angle = (i * angleStep) + (angleStep / 2) + offset;

        // Radius calibrated for zero-overlap in a 1500-unit space
        const radius = 660;
        // cx=37.5, cy=46.4: Offset measured in browser to center labels perfectly around the circle
        const pos = polarToCartesian(37.5, 46.4, radius / 15, angle);

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + (i * 0.1) }}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center w-32 pointer-events-none"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`
            }}
          >
            <p className="text-xs font-bold text-white uppercase tracking-widest leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,1)] px-1">
              {step.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

const TriangleGraphic = () => {
  const green = "#84CC16"; // lime-500

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Solid Main Triangle — wider base (60→340) for less steep sides */}
        <motion.path
          d="M 200 93 L 340 308 L 60 308 Z"
          fill={green}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Corner Circles */}
        <motion.circle cx="200" cy="93" r="13.5" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
        <motion.circle cx="60" cy="308" r="13.5" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
        <motion.circle cx="340" cy="308" r="13.5" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      </svg>

      {/* OPERATOR — centered above top circle (circle at 50% left, 23% top) */}
      <div className="absolute top-[13%] left-1/2 -translate-x-1/2 text-center">
        <span className="text-xs font-bold text-white uppercase tracking-widest">Operator</span>
      </div>

      {/* DEVELOPER — below bottom-left circle (circle at 15% left, 77% top) */}
      <div className="absolute top-[83%] left-[15%] -translate-x-1/2 text-center">
        <span className="text-xs font-bold text-white uppercase tracking-widest">Developer</span>
      </div>

      {/* INVESTOR — below bottom-right circle (circle at 85% left, 77% top) */}
      <div className="absolute top-[83%] left-[85%] -translate-x-1/2 text-center">
        <span className="text-xs font-bold text-white uppercase tracking-widest">Investor</span>
      </div>
    </div>
  );
};

import { NAVIGATION, STATS } from './constants';
import AIChatAssistant from './components/AIChatAssistant';

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
  return (
    <>
      {/* HERO */}
      <header className="relative isolate min-h-screen flex flex-col justify-end pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartVideo className="w-full h-full object-cover" />
          {/* Natural brightness - no filters */}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-4 mr-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-950"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,1), 0 2px 10px rgba(255,255,255,0.8)'
              }}
            >
              Build fast, sell fast, <br />
              <span className="text-slate-800 italic font-medium">Return capital fast.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-1.5 shadow-lg shadow-slate-950/20"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] text-white uppercase">
                End-to-end development platform
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs sm:text-sm text-white max-w-xl leading-relaxed font-bold"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4)'
                }}
              >
                Z-Co. is an end-to-end development platform. We design, capitalize, and deliver essential projects using a repeatable model powered by modular construction and disciplined capital strategy.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 text-slate-800"
              >
                {[
                  'Repeatable prototypes',
                  'Factory-enabled delivery',
                  'Investor-aligned structures'
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-white"
                    style={{
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.4)'
                    }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-950/20 hover:bg-slate-800 hover:scale-[1.02] transition-all"
              >
                Explore platform
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-950/20 bg-white/40 backdrop-blur px-8 py-4 text-sm font-bold text-slate-950 hover:bg-white/60 transition-all"
              >
                View projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="border-y border-slate-800/60 bg-slate-900/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 border-l border-slate-800/50 pl-6 first:border-l-0">
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                  {stat.label}
                </span>
                <span className="text-xl font-bold text-white leading-tight">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ONE PLATFORM. THREE ENGINES. */}
      <section id="platform" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/5 blur-[120px] rounded-full -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              One platform. Three engines.
            </h2>
            <div className="h-1 w-20 bg-slate-500 mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'Development',
                body: 'Essential projects engineered to repeat at scale.',
                bullets: ['Prototype-driven planning', 'Disciplined approvals', 'Market-led siting']
              },
              {
                icon: Landmark,
                title: 'Capital',
                body: 'Structures built for absolute alignment and execution.',
                bullets: ['Milestone-linked capital', 'Transparent reporting', 'Institution-ready data']
              },
              {
                icon: Factory,
                title: 'Modular',
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
                className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-500/50 hover:bg-slate-900 transition-all duration-500"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                    <block.icon className="w-7 h-7" />
                  </div>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-slate-500/20 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{block.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {block.body}
                </p>
                <ul className="space-y-3">
                  {block.bullets.map((line) => (
                    <li key={line} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-slate-500" />
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT TO REPLICATE */}
      <section id="projects" className="py-24 bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
                Built to replicate.
              </h2>
              <p className="text-lg text-slate-400 font-light">
                Every project is designed around durable demand, standardized design, and predictable factory-led delivery.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-slate-300 font-bold uppercase tracking-widest text-xs hover:text-slate-100 transition-colors">
              View pipeline
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: 'TowneCenter', fallback: 'townecenter' },
              { title: 'MedPlex', fallback: 'medplex' },
              { title: 'Dove Trails', fallback: 'dovetrails' },
              { title: 'Shops @ Fry Road', fallback: 'shopsfryroad' }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden border border-slate-800"
              >
                <SmartImage
                  alt={card.title}
                  fallbackSeed={card.fallback}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Project 0{i + 1}</span>
                  <h4 className="text-xl font-semibold text-white mb-4">{card.title}</h4>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTION MODEL */}
      <section id="execution" className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">The Execution Model</h2>
            <p className="text-slate-400">Replication is a system. Not a slogan.</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 hidden md:block -z-10" />
            {[
              { label: 'Essential demand', icon: Globe },
              { label: 'Site + structure', icon: MapPin },
              { label: 'Design to repeat', icon: LayoutGrid },
              { label: 'Modular delivery', icon: Factory },
              { label: 'Operate + optimize', icon: CircleDot }
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center group relative">
                <div className="h-16 w-16 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center text-slate-500 group-hover:border-slate-500 group-hover:text-slate-300 group-hover:shadow-[0_0_20px_rgba(148,163,184,0.1)] transition-all duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-[13px] font-semibold text-slate-400 group-hover:text-white transition-colors text-center whitespace-nowrap">
                  {step.label}
                </p>
                <span className="absolute -top-8 text-[10px] font-black text-slate-800 group-hover:text-slate-500/30">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE MODEL */}
      <section className="py-24 bg-slate-900/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Integrated Systems
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Our model combines a continuous lifecycle of value creation with a unified stakeholder alignment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative py-10">
              <h3 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">The Lifecycle Model</h3>
              <LifecycleGraphic />
            </div>
            <div className="relative py-10">
              <h3 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-12">Stakeholder Alignment</h3>
              <TriangleGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTOR ACCESS */}
      <section id="invest" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Disciplined capital <br />
                <span className="text-slate-400">for superior returns.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                We provide institutional-grade investment opportunities backed by transparent data
                and milestone-linked execution.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">De-risked</h5>
                    <p className="text-xs text-slate-500">Milestone deployment of capital.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-300 flex-shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Institutional</h5>
                    <p className="text-xs text-slate-500">Ready for major PE allocation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 blur-3xl rounded-full" />

              {investorStatus === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                  <div className="h-20 w-20 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Request Received</h3>
                  <p className="text-slate-400">Our IR team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleInvestorSubmit}>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Access Portal</h3>
                    <p className="text-sm text-slate-500">Receive investor materials and pipeline metrics.</p>
                  </div>
                  <div className="grid gap-4">
                    <input type="text" required placeholder="Full Name" className="bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none transition-all" />
                    <input type="email" required placeholder="Professional Email" className="bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none transition-all" />
                  </div>
                  <button
                    disabled={investorStatus === 'submitting'}
                    className="w-full bg-slate-700 text-white py-4 rounded-xl font-semibold uppercase tracking-widest text-xs hover:bg-slate-600 disabled:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    {investorStatus === 'submitting' ? 'Processing...' : 'Request Access'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest font-semibold">
                    Accredited Investors Only
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-slate-950/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-slate-500/5 blur-[120px] rounded-full -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  alt="Mike Butte"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Mike Butte</h3>
                  <p className="text-xs font-bold text-[#84CC16] uppercase tracking-[0.2em]">Chief Executive Officer</p>
                </div>
                <div className="h-px w-12 bg-slate-700 mx-auto md:ml-0" />
                <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light max-w-3xl">
                  Mike Butte is a seasoned executive with over 30 years of operational experience in real estate and business development. He has spearheaded the development, ownership, and sale of national brands such as Holiday Inn, Arby’s, Denny’s, Caliber Collision, and Best Western Hotels. Mike's experience spans various industries, including automotive, hospitality, fast food, multifamily, health care, and retail.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 opacity-50 italic text-[10px]">30+ YEARS EXPERIENCE</div>
                </div>
              </div>
            </motion.div>

            {/* Other Team Members Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Sarah Ali',
                  title: 'President',
                  img: '/asset/sarah-ali.jpg'
                },
                {
                  name: 'John Stevens',
                  title: 'Director of Asset Management',
                  img: '/asset/john-stevens.jpg'
                },
                {
                  name: 'Thaddaus Hays Jr.',
                  title: 'Director of Capital Markets',
                  img: 'https://cdn.prod.website-files.com/673390480b47a07dd6beac13/673a64ed0f6cca562db5fa9f_66ace28771dc9f27738eafa5_hays.jpg'
                },
                {
                  name: 'Dan Prosser',
                  title: 'Director of Strategic Planning',
                  img: '/asset/dan-prosser.png'
                },
                {
                  name: 'Phan Le',
                  title: 'Office Coordinator',
                  img: '/asset/phan-le.png'
                },
                {
                  name: 'Omar Terkawi',
                  title: 'Project Architect',
                  img: '/asset/omar-terkawi.png'
                },
                {
                  name: 'Abel Castro',
                  title: 'Director of Maintenance',
                  img: '/asset/abel-castro.png'
                },
                {
                  name: 'Anish N. Kntharia',
                  title: 'Marketing Manager',
                  img: '/asset/anish-kantharia.jpg'
                },
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
                  {/* Photo Container */}
                  <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 mb-5 relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="font-bold text-white text-sm leading-snug mb-1">{member.name}</h4>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-snug">{member.title}</p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 bg-slate-900/40 rounded-[3rem] border border-slate-800 overflow-hidden">
            <div className="lg:col-span-7 p-10 md:p-16">
              {formStatus === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">Message Sent</h3>
                  <p className="text-slate-400">Thank you for your interest. We'll be in touch.</p>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleContactSubmit}>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Let&apos;s build together.</h3>
                    <p className="text-slate-500">Inquire about partnerships, site submissions, or modular solutions.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <input required type="text" placeholder="Name" className="bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none" />
                    <input required type="email" placeholder="Email" className="bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none" />
                  </div>
                  <select required className="w-full bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none appearance-none">
                    <option value="">Select Topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="submission">Site Submission</option>
                    <option value="capital">Capital Allocation</option>
                  </select>
                  <textarea required rows={4} placeholder="Your message" className="w-full bg-black border border-slate-800 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-slate-500/50 outline-none resize-none"></textarea>
                  <button
                    disabled={formStatus === 'submitting'}
                    className="bg-slate-700 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-slate-600 disabled:opacity-50 transition-all shadow-lg shadow-slate-500/10"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-slate-900 p-10 md:p-16 border-l border-slate-800 space-y-12">
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">HQ</h4>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <MapPin className="w-6 h-6 text-slate-300" />
                    <div>
                      <p className="font-semibold text-white">Houston, TX</p>
                      <p className="text-sm text-slate-500">Corporate Strategy & Ops</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Mail className="w-6 h-6 text-slate-300" />
                    <p className="font-semibold text-white">info@z-co.info</p>
                  </div>
                  <div className="flex gap-5">
                    <Phone className="w-6 h-6 text-slate-300" />
                    <p className="font-semibold text-white">Inquire for Office Line</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-slate-800">
                <blockquote className="text-slate-100 font-medium italic text-lg leading-relaxed">
                  &ldquo;Z-Co is not just building projects; we are building a more predictable future for real estate development.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <div className="min-h-screen bg-black text-slate-100 selection:bg-slate-400/20 selection:text-slate-200 antialiased">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
          ? 'bg-white border-slate-200/60 py-3 shadow-md'
          : 'bg-white/5 backdrop-blur-md border-slate-200/10 py-5'
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 ${scrolled ? 'bg-slate-950 shadow-lg' : (isHome ? 'bg-slate-950/10 backdrop-blur-sm' : 'bg-white/10 backdrop-blur-sm')}`}>
              <span className={`font-black text-xl transition-colors ${scrolled ? 'text-white' : (isHome ? 'text-slate-950' : 'text-white')}`}>Z</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-sm font-black tracking-tight transition-colors ${scrolled ? 'text-slate-950' : (isHome ? 'text-slate-950' : 'text-white')}`}>Platform</span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-extrabold transition-colors ${scrolled ? 'text-slate-500' : (isHome ? 'text-slate-600' : 'text-slate-300')}`}>
                Z-Co Development
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${scrolled ? 'text-slate-950/70 hover:text-black' : (isHome ? 'text-slate-950/80 hover:text-black' : 'text-white/80 hover:text-white')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/#invest"
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-slate-950/70 hover:text-black' : (isHome ? 'text-slate-950/70 hover:text-black' : 'text-white/70 hover:text-white')}`}
            >
              Investor access
            </Link>
            <Link
              to="/#contact"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all transform hover:scale-105 ${scrolled
                ? 'border-slate-950 bg-slate-950 text-white hover:bg-slate-800'
                : 'border-slate-950 bg-slate-950 text-white hover:bg-slate-800 opacity-90'}`}
            >
              Request packet
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-slate-950' : (isHome ? 'text-slate-950' : 'text-white')}`}
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
              className={`lg:hidden absolute top-full left-0 right-0 border-b shadow-2xl transition-colors duration-500 overflow-hidden ${scrolled ? 'bg-white border-slate-200' : 'bg-white/95 backdrop-blur-xl border-slate-200'
                }`}
            >
              <div className="px-6 py-8 space-y-6">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-bold uppercase tracking-widest py-1 transition-colors ${scrolled ? 'text-slate-950 hover:text-black' : 'text-slate-950 hover:text-black'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className={`pt-6 border-t flex flex-col gap-4 ${scrolled ? 'border-slate-100' : 'border-slate-100'}`}>
                  <Link
                    to="/#invest"
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-bold uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-slate-500 hover:text-slate-950' : 'text-slate-500 hover:text-slate-950'
                      }`}
                  >
                    Investor access
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold uppercase tracking-widest transition-all active:scale-95 ${scrolled ? 'bg-slate-950 text-white hover:bg-slate-800' : 'bg-slate-950 text-white hover:bg-slate-800'
                      }`}
                  >
                    Request packet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-900 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded bg-slate-700 flex items-center justify-center text-white font-black">Z</div>
            <span className="text-sm font-bold text-slate-500">© 2024 Z-Co Development Group</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant />
    </div>
  );
}
