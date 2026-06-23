import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from 'lucide-react';
import { getBlogPost, getRelatedPosts, BlogSection } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';

const categoryColors: Record<string, string> = {
  'Build-to-Rent': 'text-emerald-400 bg-emerald-950 border-emerald-900',
  'Healthcare': 'text-blue-400 bg-blue-950 border-blue-900',
  'EB-5 Investment': 'text-purple-400 bg-purple-950 border-purple-900',
  'Mixed-Use': 'text-amber-400 bg-amber-950 border-amber-900',
  'Development': 'text-rose-400 bg-rose-950 border-rose-900',
  'Markets': 'text-cyan-400 bg-cyan-950 border-cyan-900',
};

const renderSection = (section: BlogSection, i: number) => {
  switch (section.type) {
    case 'h2':
      return <h2 key={i} className="text-2xl sm:text-3xl font-bold text-ink mt-12 mb-4 leading-tight">{section.content}</h2>;
    case 'h3':
      return <h3 key={i} className="text-xl font-bold text-ink mt-8 mb-3">{section.content}</h3>;
    case 'p':
      return <p key={i} className="text-mid leading-relaxed mb-5">{section.content}</p>;
    case 'ul':
      return (
        <div key={i} className="my-6">
          {section.content && <p className="text-mid leading-relaxed mb-3">{section.content}</p>}
          <ul className="space-y-3">
            {section.items?.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-mid text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

const InsightsPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');
  const related = getRelatedPosts(slug || '');

  useSEO({
    title: post?.metaTitle || 'Insights | Z-Co Development',
    description: post?.metaDescription || 'Real estate development insights from Z-Co Development.',
  });

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  // Article JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://zcodevelopment.com/og-insights-${post.slug}.jpg`,
    author: {
      '@type': 'Organization',
      name: 'Z-Co Development',
      url: 'https://zcodevelopment.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Z-Co Development',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zcodevelopment.com/favicon.png',
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zcodevelopment.com/insights/${post.slug}`,
    },
    keywords: [post.category, 'real estate development', 'Z-Co Development', 'Texas real estate'],
    articleSection: post.category,
    wordCount: post.sections.reduce((acc, s) => acc + (s.content?.length || 0) + (s.items?.join(' ').length || 0), 0),
  };

  return (
    <div className="min-h-screen bg-gold text-white">
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back nav */}
      <div className="pt-32 lg:pt-44 pb-0 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-bold text-mid hover:text-ink uppercase tracking-widest transition-colors mb-10">
          <ArrowLeft className="w-3.5 h-3.5" /> All Insights
        </Link>
      </div>

      {/* Article Header */}
      <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${categoryColors[post.category] || 'text-mid bg-off border-[rgba(0,0,0,0.08)]'}`}>
              <Tag className="w-2.5 h-2.5" />{post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-mid">
              <Clock className="w-3 h-3" />{post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-mid">
              <Calendar className="w-3 h-3" />{post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-ink mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-mid font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Hero image placeholder with alt text */}
          <div className="mt-10  overflow-hidden bg-off border border-[rgba(0,0,0,0.08)] aspect-[16/7] flex items-center justify-center">
            <img
              src="/images/og-placeholder.jpg"
              alt={post.heroAlt}
              className="w-full h-full object-cover opacity-60"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{post.category}</div>
                <div className="text-slate-700 text-sm mt-1">Z-Co Development</div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-dark pb-16 border-b border-[rgba(0,0,0,0.07)]"
        >
          {post.sections.map((section, i) => renderSection(section, i))}
        </motion.div>

        {/* Author / CTA */}
        <div className="py-12 border-b border-[rgba(0,0,0,0.07)]">
          <div className="flex items-start gap-4 p-6  bg-off/60 border border-[rgba(0,0,0,0.08)]">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-xs font-bold text-ink">ZC</div>
            <div>
              <p className="text-sm font-bold text-ink mb-1">Z-Co Development</p>
              <p className="text-xs text-mid leading-relaxed">Z-Co Development Corp. is a fully integrated real estate development platform headquartered in Houston, Texas, specializing in build-to-rent, healthcare, and mixed-use real estate.</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link to="/about" className="text-[10px] font-bold text-ink uppercase tracking-widest hover:text-ink transition-colors">About Z-Co →</Link>
                <Link to="/#invest" className="text-[10px] font-bold text-ink uppercase tracking-widest hover:text-ink transition-colors">Investor Access →</Link>
                <Link to="/portfolio" className="text-[10px] font-bold text-ink uppercase tracking-widest hover:text-ink transition-colors">Our Projects →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="py-12 pb-24">
            <p className="text-[10px] font-bold text-mid uppercase tracking-widest mb-6">Related Articles</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(rel => (
                <Link key={rel.slug} to={`/insights/${rel.slug}`} className="group block p-5  border border-[rgba(0,0,0,0.08)] hover:border-slate-600 bg-off/40 transition-all">
                  <span className={`inline-block px-2 py-0.5 rounded-full border text-[8px] font-bold uppercase tracking-widest mb-3 ${categoryColors[rel.category] || 'text-mid bg-off border-[rgba(0,0,0,0.08)]'}`}>
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-ink leading-snug group-hover:text-ink transition-colors mb-2">{rel.title}</h4>
                  <span className="text-[10px] text-mid group-hover:text-ink transition-colors inline-flex items-center gap-1">Read <ArrowRight className="w-2.5 h-2.5" /></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default InsightsPost;
