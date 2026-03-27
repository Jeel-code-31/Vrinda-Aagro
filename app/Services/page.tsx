"use client"

import { useState } from "react"
import { motion } from 'framer-motion'
import { Lobster } from 'next/font/google'
import { Settings, ShieldCheck, ArrowRight, Zap, Factory, Microscope } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

const services = [
  {
    id: "01",
    title: "Agro-Processing Tech",
    desc: "Implementing world-class dehydration and cold-press technology for maximum nutrient retention.",
    details: "We use advanced dehydration systems and cold-press extraction to retain maximum nutrients, flavor, and shelf life. Our machinery ensures consistent quality for large-scale production.",
    icon: <Settings className="text-red-600" size={32} />,
    image: "/Services/tech.jpg"
  },
  {
    id: "02",
    title: "Quality Auditing",
    desc: "Rigorous 5-step microbial testing in our Nashik facility to meet BRCGS and ISO standards.",
    details: "Our auditing includes microbial testing, contamination checks, and compliance with global standards like ISO and BRCGS. Every batch is verified before dispatch.",
    icon: <Microscope className="text-yellow-500" size={32} />,
    image: "/Services/audit.jpg"
  },
  {
    id: "03",
    title: "Turnkey Solutions",
    desc: "End-to-end setup of automated food processing lines, from piping to final CNC integration.",
    details: "We design and deliver complete processing plants including automation, piping, installation, and maintenance support for long-term efficiency.",
    icon: <Factory className="text-red-600" size={32} />,
    image: "/Services/turnkey.jpg"
  },
  {
    id: "04",
    title: "Formulation R&D",
    desc: "Customizing paste and powder formulations for global FMCG brands with high-stability results.",
    details: "Our R&D team develops customized formulations with extended shelf life, consistent taste, and global export quality standards.",
    icon: <Zap className="text-yellow-500" size={32} />,
    image: "/Services/rd.jpg"
  }
]

export default function ServicePage() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900">
      <Navigation />

      {/* Hero Header */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Background/sample.jpg" 
            alt=""
            className="w-full h-full object-cover grayscale-[0.4] brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="border-l-4 border-red-600 pl-8">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-[10px] font-black tracking-[0.5em] text-yellow-400 uppercase mb-4 block"
            >
              Excellence in Action
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className={`${lobster.className} text-6xl sm:text-9xl text-white leading-tight`}
            >
              Our Services
            </motion.h1>
          </div>
        </div>
      </header>

      {/* Services */}
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-[3rem] shadow-2xl">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-12 md:p-20 overflow-hidden"
            >
              {/* Hover Image */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img src={service.image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <span className="text-6xl font-black text-slate-100 group-hover:text-red-600 transition-colors duration-500 absolute -top-10 -left-6">
                  {service.id}
                </span>
                
                <div className="mb-8 p-4 rounded-2xl inline-block">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-10">
                  {service.desc}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            <div className="w-full h-56 rounded-xl overflow-hidden mb-6">
              <img
                src={activeService.image}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-black mb-4">
              {activeService.title}
            </h2>

            <p className="text-slate-600 leading-relaxed">
              {activeService.details}
            </p>
          </div>
        </div>
      )}

      {/* Trust Section */}
      <section className="bg-slate-950 py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className={`${lobster.className} text-5xl text-white mb-8`}>
              Why Vrinda Precision?
            </h2>
            <div className="space-y-6">
              {[
                "100% Traceability from Nashik Farms",
                "Advanced Microbial Stability Labs",
                "Zero-Waste Processing Architecture"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <ShieldCheck className="text-red-600" size={24} />
                  <span className="text-slate-300 font-bold uppercase text-xs tracking-widest">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10">
            <img src="/Facility/inner-view.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}