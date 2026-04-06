import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const categoryColors: Record<string, string> = {
  'Build-to-Rent': 'text-emerald-400 bg-emerald-950 border-emerald-900',
  'Healthcare': 'text-blue-400 bg-blue-950 border-blue-900',
  'EB-5 Investment': 'text-purple-400 bg-purple-950 border-purple-900',
  'Mixed-Use': 'text-amber-400 bg-amber-950 border-amber-900',
  'Development': 'text-rose-400 bg-rose-950 border-rose-900',
  'Markets': 'text-cyan-400 bg-cyan-950 border-cyan-900',
};

const InsightsList = () => {
  useSEO({
    title: 'Real Estate Development Insights | Z-Co Blog',
    description: 'Expert articles on build-to-rent investing, healthcare real estate, EB-5 investment, mixed-use development, and real estate market analysis in Texas and the USA.',
  });

  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Z-Co Insights</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Real Estate Development<br /><span className="text-slate-400">Insights</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">Expert analysis on build-to-rent investing, healthcare real estate, EB-5 opportunities, and market trends — from Z-Co Development's team.</p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 pt-12">Featured Article</p>
          <Link to={`/insights/${featured.slug}`} className="group block rounded-2xl border border-slate-800 bg-slate-950/40 hover:border-slate-600 transition-all duration-300 overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${categoryColors[featured.category] || 'text-slate-400 bg-slate-900 border-slate-800'}`}>
                  <Tag className="w-2.5 h-2.5" />{featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />{featured.readTime}
                </span>
                <span className="text-xs text-slate-600">{featured.publishDate}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-slate-200 transition-colors leading-tight">{featured.title}</h2>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="border-t border-slate-900 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto pt-12">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">All Articles</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link to={`/insights/${post.slug}`} className="group flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-950/40 hover:border-slate-600 transition-all duration-300 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest ${categoryColors[post.category] || 'text-slate-400 bg-slate-900 border-slate-800'}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-500">
                      <Clock className="w-2.5 h-2.5" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-slate-200 transition-colors leading-snug flex-1">{post.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-slate-600">{post.publishDate}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Invest with Z-Co?</h2>
          <p className="text-slate-400 leading-relaxed">Explore our current development projects or request an investor packet to learn about active opportunities.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-200 transition-all">
              Our Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/#invest" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:border-white transition-all">
              Investor Access <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsList;
