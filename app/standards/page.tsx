"use client";

import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield, Leaf, Eye, Lock, ArrowRight, Ticket } from 'lucide-react';
import { Lobster, Yeseva_One } from 'next/font/google';
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})
export default function PremiumPrivacyPolicy() {
  const lastUpdated = "March 19, 2026";

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-green-100">
      <Navigation />

      <main className="max-w-[1440px] mx-auto grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Side: Brand Narrative (Fixed on Desktop) */}
        <div className="relative bg-slate-50 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 border-r border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-[1px] bg-red-600"></div>
            </div>
            
            <motion.h1
                     className={`${lobster.className} text-4xl sm:text-6xl`}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.5 }}
                   >
                     "Vrinda Aagro Standers"
                   </motion.h1>
            
            <p className="text-lg text-slate-700 mt-10 font-light leading-relaxed max-w-md">
              Just as we source the finest ingredients for our sauces and pastes, we source only the necessary data to serve you better. Our privacy protocol is a reflection of our factory's hygiene.
            </p>

            <div className="mt-12 flex items-center gap-8  text-red-700">
              <Shield size={32} strokeWidth={1} />
              <Leaf size={32} strokeWidth={1} />
              <Lock size={32} strokeWidth={1} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Detailed Clauses (Scrollable) */}
        <div className="px-8 md:px-16 lg:px-24 py-24 space-y-32">
          
          {/* Section 01: The Harvest */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group"
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">01 / Data Collection</h3>
            <h2 className="text-3xl font-bold mb-8 group-hover:text-yellow-500 transition-colors">The Information We Harvest</h2>
            <div className="space-y-6 text-slate-600 leading-loose font-light">
              <p>
                To provide the precision required in food manufacturing and B2B supply, we collect:
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-sm hover:border-yellow-500 transition-all shadow-sm">
                  <Eye className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Professional Identity</h4>
                    <p className="text-xs mt-1">Contact names, company roles, and GST details for seamless invoicing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white border border-slate-100 rounded-sm hover:border-yellow-500 transition-all shadow-sm">
                  <Leaf className="text-red-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Product Preferences</h4>
                    <p className="text-xs mt-1">Specific interests in our sauces, chutneys, or customized paste formulations.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 02: Processing */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">02 / Usage & Purpose</h3>
            <h2 className="text-3xl font-bold mb-8">Refining the Experience</h2>
            <p className="text-slate-600 leading-loose font-light mb-8">
              We do not "sell" data. We process it. Your information is used to optimize our logistics—ensuring our pastes and chutneys reach you with their flavor and hygiene intact.
            </p>
            <ul className="space-y-4">
              {['Supply Chain Optimization', 'Quality Feedback Loops', 'Direct Communication'].map((item) => (
                <li key={item} className="flex items-center justify-between py-4 border-b border-slate-100">
                  <span className="text-sm font-medium">{item}</span>
                  <Shield size={16} className="text-red-500" />
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Section 03: Security */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-12 text-white rounded-sm"
          >
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">03 / Security</h3>
            <h2 className="text-3xl font-bold mb-6">Digital Sanitization</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-8">
              Our servers undergo regular "sanitization" audits. We use AES-256 encryption to ensure that your business insights remain confidential and uncontaminated.
            </p>
            <div className="h-[1px] w-full bg-slate-800 my-8"></div>
            <p className="text-xs text-slate-500 italic">Certified SSL Secure Connection active.</p>
          </motion.section>

          {/* Contact Section */}
          <section className="text-center md:text-left pt-12">
            <h2 className="text-2xl font-serif italic mb-4">Direct Inquiries?</h2>
            <p className="text-slate-500 text-sm mb-8">Reach our Privacy Officer for any data-related requests.</p>
            <a 
              href="mailto:jagdish@vrindaaagro.com" 
              className="px-10 py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-all inline-block shadow-lg shadow-green-100"
            >
              Contact Compliance
            </a>
            <p className="mt-8 text-[10px] text-slate-300 uppercase tracking-widest">
              Last Updated: {lastUpdated} • Nashik, India
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}