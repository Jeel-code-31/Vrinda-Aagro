"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Truck, Lock, UserCheck } from 'lucide-react';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})
export default function PrivacyPolicy() {
  const lastUpdated = "March 19, 2026";

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#333]">
      <Navigation />

      {/* Hero Header */}
      <div className="bg-green-700 pt-24 pb-16 px-4 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
           <motion.h1
                    className={`${lobster.className} text-4xl sm:text-6xl`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    "Privacy And Policy"
                  </motion.h1>
          <p className="text-green-100 mt-10 text-lg italic">
            At Vrinda Aagro, hygiene and quality extend from our kitchen to your data.
          </p>
        </motion.div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white shadow-xl shadow-gray-200/50 rounded-3xl p-8 md:p-12 border border-gray-100">
          
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Official Document</p>
            <p className="text-sm text-green-600 font-semibold">Updated: {lastUpdated}</p>
          </div>

          {/* 1. Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">1. Introduction</h2>
            </div>
            <p className="leading-relaxed text-gray-600">
              Welcome to <strong>Vrinda Aagro</strong>. We specialize in manufacturing high-quality food products, 
              including premium sauces, chutneys, and pastes. Just as we maintain the highest standards of 
              physical hygiene in our Nashik-based facility, we are equally committed to "digital hygiene"—the 
              secure and transparent handling of your personal information.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">2. Information Collection</h2>
            </div>
            <p className="mb-4 text-gray-600">To serve our B2B and retail partners effectively, we collect:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2 italic">Product Inquiries</h4>
                <p className="text-sm text-gray-700">Name, Company Name, and Contact details provided when requesting samples or bulk pricing for our pastes and sauces.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-2 italic">Logistics Data</h4>
                <p className="text-sm text-gray-700">Delivery addresses and billing information necessary for shipping our food products safely to your doorstep.</p>
              </div>
            </div>
          </section>

          {/* 3. Purpose of Usage */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">3. How We Use Your Data</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Processing and fulfilling your orders for sauces and chutneys.",
                "Conducting quality control and obtaining customer feedback.",
                "Ensuring timely delivery and communication regarding product availability.",
                "Maintaining high-security standards on our digital storefront."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="text-green-500 font-bold">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Data Hygiene & Security */}
          <section className="mb-12 bg-gray-900 text-white p-8 rounded-3xl shadow-inner">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-green-400" size={28} />
              <h2 className="text-2xl font-bold">4. Digital Hygiene & Security</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We apply the same level of rigor to data security as we do to our <strong>Good Manufacturing Practices (GMP)</strong>. 
              We implement SSL encryption, secure server firewalls, and limited-access protocols to ensure 
              your data is never contaminated or shared with unauthorized third parties.
            </p>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-green-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">5. Your Data Autonomy</h2>
            </div>
            <p className="text-gray-600 mb-4">You have the absolute right to:</p>
            <div className="flex flex-wrap gap-2">
              {["Access Records", "Correct Inaccuracies", "Delete Data", "Opt-out of Newsletters"].map((chip) => (
                <span key={chip} className="px-4 py-2 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200 uppercase tracking-tighter">
                  {chip}
                </span>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <div className="mt-16 text-center py-10 bg-[#fdfdfd] border-2 border-dashed border-gray-100 rounded-3xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">Privacy Inquiries</h3>
            <p className="text-gray-500 text-sm mb-6">Contact our compliance team regarding any data concerns.</p>
            <a 
              href="mailto:jagdish@vrindaaagro.com" 
              className="text-lg font-bold text-green-700 hover:text-green-800 underline transition-all"
            >
              jagdish@vrindaaagro.com
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}