import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const categoryColors: Record<string, string> = {
  'Build-to-Rent': 'text-gold border-gold/30 bg-gold/5',
  'Healthcare': 'text-gold border-gold/30 bg-gold/5',
  'EB-5 Investment': 'text-gold border-gold/30 bg-gold/5',
  'Mixed-Use': 'text-gold border-gold/30 bg-gold/5',
  'Development': 'text-gold border-gold/30 bg-gold/5',
  'Markets': 'text-gold border-gold/30 bg-gold/5',
};

const InsightsList = () => {
  useSEO({
    title: 'Real Estate Development Insights | Z-Co Blog',
    description: 'Expert articles on build-to-rent investing, healthcare real estate, EB-5 investment, mixed-use development, and real estate market analysis in Texas and the USA.',
  });

  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-52 lg:pb-28 px-6 lg:px-14 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-4">Z-Co Insights</p>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.06] mb-5">
            Real Estate Development<br /><em className="text-mid">Insights</em>
          </h1>
          <div className="w-9 h-px bg-gold mb-6" />
          <p className="text-base text-mid font-light leading-[1.85] max-w-2xl">Expert analysis on build-to-rent investing, healthcare real estate, EB-5 opportunities, and market trends — from Z-Co Development's team.</p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="border-t border-[rgba(0,0,0,0.07)] px-6 lg:px-14 pb-20 bg-off">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-6 pt-12">Featured Article</p>
          <Link to={`/insights/${featured.slug}`} className="group block border border-[rgba(0,0,0,0.08)] bg-white hover:border-gold/30 transition-all duration-300 overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-normal uppercase tracking-[0.14em] ${categoryColors[featured.category] || 'text-gold border-gold/30 bg-gold/5'}`}>
                  <Tag className="w-2.5 h-2.5" />{featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-mid font-light">
                  <Clock className="w-3 h-3" />{featured.readTime}
                </span>
                <span className="text-xs text-mid font-light">{featured.publishDate}</span>
              </div>
              <h2 className="font-serif font-light text-2xl sm:text-3xl text-ink mb-4 group-hover:text-gold transition-colors leading-tight">{featured.title}</h2>
              <p className="text-mid font-light leading-[1.85] mb-6 max-w-3xl text-sm">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-normal text-ink uppercase tracking-[0.18em] border-b border-ink pb-0.5 group-hover:text-gold group-hover:border-gold transition-all">
                Read Article <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="border-t border-[rgba(0,0,0,0.07)] px-6 lg:px-14 pb-24 bg-white">
        <div className="max-w-5xl mx-auto pt-12">
          <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em] mb-8">All Articles</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,0,0,0.07)]">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link to={`/insights/${post.slug}`} className="group flex flex-col h-full bg-white hover:bg-off transition-all duration-300 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[9px] font-normal uppercase tracking-[0.14em] ${categoryColors[post.category] || 'text-gold border-gold/30'}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-mid font-light">
                      <Clock className="w-2.5 h-2.5" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif font-light text-lg text-ink mb-3 group-hover:text-gold transition-colors leading-snug flex-1">{post.title}</h3>
                  <p className="text-mid text-xs leading-relaxed mb-4 line-clamp-3 font-light">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-mid font-light">{post.publishDate}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-mid group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(0,0,0,0.07)] py-20 px-6 lg:px-14 bg-off">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-[10px] font-normal text-gold uppercase tracking-[0.28em]">Get Started</p>
          <h2 className="font-serif font-light text-2xl sm:text-3xl text-ink">Ready to Invest with Z-Co?</h2>
          <div className="w-9 h-px bg-gold mx-auto" />
          <p className="text-mid leading-[1.85] font-light text-sm">Explore our current development projects or request an investor packet to learn about active opportunities.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-normal uppercase text-[10.5px] tracking-[0.13em] hover:bg-gold2 transition-all">
              Our Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/#invest" className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink font-normal uppercase text-[10.5px] tracking-[0.13em] hover:bg-ink hover:text-white transition-all">
              Investor Access <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsList;
