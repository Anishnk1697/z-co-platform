import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mike Butte is a longtime trusted friend and someone I hold in high regard both personally and professionally. In business, Mike is thoughtful, careful, and highly resourceful. Our conversations over the years have often focused on commercial real estate and evolving market needs, and I have always appreciated his practical insights and disciplined approach to development. Although we have not yet had the opportunity to invest alongside Mike, we look forward to doing so when the right opportunity presents itself.",
      author: "Stewart Morris Jr",
      role: "President at Stewart Security Capital Inc",
      image: "/asset/stewart-morris.jpg",
      featured: true
    },
    {
      quote: "From my experience with you, I can easily endorse you. You have a well-rounded level of experience in general business and you couple that with integrity, a good combination. I would be glad to act as a reference for you.",
      author: "Randy Hancock",
      role: "Hancock Realty Corporation, Houston",
      image: "/asset/randy-hancock.jpg"
    },
    {
      quote: "As Mike Butte's real estate broker since 2008, together we have had numerous interactions with other brokers and potential clients. I have always been so impressed with Mike's honesty, integrity, and professionalism in dealing with myself and others. It has been a pleasure knowing Mike and working together with him and I strongly recommend Mike as a loyal and trustworthy business associate.",
      author: "Danny Pleason",
      role: "Real Estate Broker - Martha Turner Properties",
      image: "/asset/danny-pleason.jpg"
    },
    {
      quote: "I have had the pleasure of working with Mike Butte and Z-Co. Development for more than fifteen years in my role as a commercial banker. During that time, we have financed several of their projects and I have consistently been impressed by Mike’s professionalism, integrity, and disciplined approach to business.\n\nMike has always demonstrated a clear understanding of both the operational and financial aspects of real estate development. He approaches projects thoughtfully, communicates transparently, and follows through on his commitments. From a lender’s perspective, those qualities are invaluable.\n\nBased on my experience, I would confidently recommend Mike Butte and Z-Co. Development to any financial institution, business partner, or investor. Beyond the professional relationship, I am also proud to consider Mike a trusted colleague and personal friend.",
      author: "Jim Lindsey",
      role: "Senior Vice President, Allegiance Bank",
      image: "/asset/jim-lindsey.jpg",
      featured: true
    },
    {
      quote: "It has been a wonderful experience to have worked with you in the past. Your firm has set the customer focus standard in Houston, and you likely seek even higher levels of performance. I have been fortunate to have worked with you and you have demonstrated a high quality of professionalism. It has been very obvious that your associates contribute daily by exceeding the needs of your customers. You also collaborate with a team of professionals to help you achieve your revenue goals.",
      author: "Victor Carrillo",
      role: "Vice President, Comerica Bank",
      image: "/asset/victor-carrillo.jpg"
    },
    {
      quote: "Mike Butte, president of Z-Co Development, has been a long-time client of mine. I have enjoyed working with Mike on a number of his projects as he is a professional and has integrity in his business dealings. These qualities are key to developing successful business relationships. Z-Co Development exhibits these qualities which reflects the owner.",
      author: "Mark D. Owen",
      role: "Executive Vice President, Stellar Bank"
    },
    {
      quote: "I have known Mike for 40+ years. Have watched him go through almost all stages of business. Start-up, doing well, struggling, picking himself up, running an established, respected, successful business.\n\nI am impressed with his vision and a partnership approach with stakeholders. Above all, truly impressed with his knack for finding opportunities and delivering. All this with integrity, sound business practices and great teamwork.\n\nWe love working with Mike and his team.",
      author: "Amin Ansari",
      role: "Chief Strategy Officer at Murkez Technologies",
      image: "/asset/amin-ansari.jpg",
      featured: true
    },
    {
      quote: "Mike sees opportunities where others see obstacles. His unwavering determination and never-give-up attitude ensure that every project is brought to completion. I admire his commitment to making every development a successful investment to all stakeholders.",
      author: "Ghandi Saad, PE",
      role: "Partner & CEO at RSG Engineering, Inc.",
      image: "/asset/ghandi-saad.jpg"
    }
  ];

  return (
    <div className="pt-32 pb-20 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Testimonials
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Hear from our partners, investors, and clients about their experience working with Z-Co Development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 relative flex flex-col justify-between ${t.featured ? 'md:col-span-2' : ''}`}
            >
              <div>
                <Quote className="w-10 h-10 text-slate-700 absolute top-8 right-8 opacity-50" />
                <p className={`text-slate-300 italic mb-10 relative z-10 whitespace-pre-line ${t.featured ? 'text-xl leading-relaxed' : 'text-lg'}`}>
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 translate-y-2">
                {t.image && (
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 flex-shrink-0">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                )}
                {!t.image && !t.featured && (
                  <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500 border border-slate-700/50">
                    <Quote className="w-5 h-5 opacity-30" />
                  </div>
                )}
                <div className="flex flex-col">
                  <p className="font-bold text-white text-lg leading-tight mb-1">{t.author}</p>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
