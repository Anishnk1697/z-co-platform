import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SmartImage } from '@/components/SmartMedia';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const PortfolioCategory = () => {
    const { category } = useParams<{ category: string }>();
    const data = category ? PORTFOLIO_DATA[category.toLowerCase()] : null;

    if (!data) {
        return (
            <div className="pt-32 pb-20 px-4 text-center">
                <h1 className="text-2xl text-white">Category not found</h1>
                <Link to="/portfolio" className="text-slate-400 hover:text-white mt-4 inline-block">Back to Portfolio</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-6 text-xs font-bold uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                            {data.title}
                        </h1>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-500 transition-all overflow-hidden group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <SmartImage
                                    alt={project.title}
                                    fallbackSeed={project.fallbackSeed}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">{project.location}</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PortfolioCategory;
