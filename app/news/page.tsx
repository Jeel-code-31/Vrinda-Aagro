"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Lobster } from 'next/font/google';
import { MapPin, ArrowUpRight, Newspaper, } from 'lucide-react';
import { useState } from 'react'; 
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

const newsItems = [
  {
    id: 1,
    category: "Innovation",
    date: "March 15, 2026",
    title: "Vrinda Aagro Unveils New High-Stability Garlic Paste Formulation",
    excerpt: "After 12 months of R&D, we have achieved a natural preservation technique that extends flavor retention without synthetic additives.",
    image: "/Artical/Image1.png",
    isFeatured: true,
  }
];

export default function NewsAndEvents() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-green-100">
      <Navigation />

      {/* Hero Section */}
     <header className="relative pt-40 pb-24 px-6 overflow-hidden">
  {/* The Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/Background/sample.jpg" 
      alt="Vrinda Aagro Facility"
      className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]"
    />
    {/* Subtle Gradient Overlay to ensure text pops */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
  </div>

  {/* Content Layer */}
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="border-l-4 border-red-600 pl-8 pb-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-6"
      >
        <div>
          <span className="text-xs font-bold tracking-[0.4em] text-yellow-400 uppercase mb-4 block">
            The Vrinda Aagro
          </span>
          
          <motion.h1
            className={`${lobster.className} text-4xl sm:text-7xl text-white leading-tight max-w-4xl`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            "World-class Facility
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md text-yellow-500 text-sm font-light leading-relaxed border-t border-yellow pt-6"
        >
          Explore the latest breakthroughs in food technology and hygiene 
          straight from our Nashik headquarters.
        </motion.p>
      </motion.div>
      </div>
      </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Featured News */}
        {newsItems.filter(item => item.isFeatured).map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -5 }}
            className="group relative grid lg:grid-cols-2 gap-12 mb-24 items-center cursor-pointer"
          >
            <div className="overflow-hidden rounded-3xl bg-slate-100 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover  transition-all duration-700" 
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-yellow-600">
                <Newspaper size={14} />
                <span>Featured Story</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400">{item.date}</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-black-500 transition-colors">
                {item.title}
              </h2>
              <p className="text-black-500 leading-loose font-light text-lg">
                {item.excerpt}
              </p>
              <button className="flex items-center gap-2 font-bold text-sm border-b-2 border-slate-900 pb-1 group-hover:border-green-600 transition-all">
                Read Full Case Study <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Secondary Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.filter(item => !item.isFeatured).map((item) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-video mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {item.isEvent && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold rounded-full shadow-sm">
                    UPCOMING EVENT
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors leading-tight">
                  {item.title}
                </h3>
                
                {item.isEvent && (
                  <div className="flex items-center gap-4 py-2 text-xs text-slate-500 italic">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                  </div>
                )}

                <p className="text-sm text-slate-500 leading-relaxed font-light line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}