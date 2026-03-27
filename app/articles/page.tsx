"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  Quote, 
  ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

export default function ArticleDetail() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-yellow-100">
      <Navigation />

      {/* Progress Bar for Reading */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Article Hero Section */}
      <header className="relative h-[70vh] w-full overflow-hidden bg-slate-900">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Manufacturing Process"
            className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/news" className="inline-flex items-center gap-2 text-yellow-500 font-bold text-xs uppercase tracking-widest mb-6 hover:gap-3 transition-all">
                <ArrowLeft size={14} /> Back to Journal
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                The Science of <span className="text-yellow-500 font-serif italic font-light">Stability:</span> <br />
                Preserving Flavor without Synthetics.
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-slate-400 text-xs font-medium uppercase tracking-widest">
                <div className="flex items-center gap-2"><Calendar size={14} /> March 19, 2026</div>
                <div className="flex items-center gap-2"><Clock size={14} /> 6 Min Read</div>
                <div className="flex items-center gap-2"><User size={14} /> By Jagdish • R&D Dept</div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Social Sidebar (Fixed on Desktop) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-6 text-slate-300">
              <button className="hover:text-yellow-600 transition-colors"><Share2 size={20} /></button>
            </div>
          </aside>

          {/* Article Body */}
          <article className="lg:col-span-11 prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 first-letter:text-7xl first-letter:font-black first-letter:text-yellow-500 first-letter:mr-3 first-letter:float-left">
              In the modern food industry, the challenge has always been the balance between shelf-life and purity. 
              At Vrinda Aagro, our Nashik-based facility has pioneered a new cold-stabilization method for our 
              signature garlic and ginger pastes. This breakthrough ensures that the enzymes responsible for 
              flavor remain intact while microbial growth is naturally inhibited.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 tracking-tight">
              The Hygiene Mandate
            </h2>
            <p className="text-slate-600 font-light leading-loose mb-8">
              Every batch starts with a multi-stage cleaning process. We treat our water through a four-tier 
              filtration system before it ever touches a single ingredient. This "Zero-Contamination" 
              philosophy is what allows our chutneys to maintain that "just-made" zest for months.
            </p>

            {/* Blockquote - Decent & Retentive */}
            <div className="my-16 p-10 border-l-4 border-yellow-500 bg-slate-50 rounded-r-3xl italic">
              <Quote className="text-yellow-500 mb-4" size={32} />
              <p className="text-2xl font-serif text-slate-800 leading-snug">
                "We aren't just making sauces; we are engineering trust. If a product isn't 
                pure enough for our own families, it never leaves our warehouse."
              </p>
              <cite className="block mt-4 text-sm font-bold uppercase tracking-widest text-slate-400 not-italic">
                — Production Manager, Vrinda Aagro
              </cite>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 tracking-tight">
              Future of Flavor
            </h2>
            <p className="text-slate-600 font-light leading-loose mb-8">
              Looking ahead, our team is exploring the use of high-pressure processing (HPP) 
              to further enhance the vibrant colors of our red chili pastes without using 
              artificial dyes. This commitment to "Purity in Every Drop" remains our 
              North Star.
            </p>

            {/* Tags Section */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-3">
              {['Innovation', 'Food Tech', 'Hygiene', 'Nashik'].map(tag => (
                <span key={tag} className="px-4 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-tighter rounded-full hover:bg-yellow-500 hover:text-white transition-all cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Next Article Navigation */}
        <section className="mt-32 border-t border-slate-100 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xs">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Next Story</p>
              <h4 className="text-xl font-bold text-slate-900 hover:text-yellow-600 transition-colors cursor-pointer">
                Transitioning to Solar Power: Our 2026 ESG Roadmap.
              </h4>
            </div>
            <button className="p-4 bg-slate-900 text-white rounded-full hover:bg-yellow-500 transition-all group">
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}