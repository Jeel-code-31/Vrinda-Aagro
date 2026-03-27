"use client"

import { Button } from '@/components/ui/button'
import { Lobster } from 'next/font/google'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { title } from 'process'

// ✅ Font
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

// ✅ Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

// ✅ Timeline Data
const highlights = [
  {
    title: "Installed Capacity: 5000+ MT per month",
    desc: "At Vrinda Agro, we combine scale and quality with an installed capacity of 5000+ MT per month for white-label Chutnes, sauces, and pastes. Our automated, hygienic facility ensure consistency, authenticity, and freshness. We deliver flexible, high-volume production with trusted quality-supporting brands across domestic and international markets efficiently and reliably"
  },
  {
    title: "Multiple advanced, automated filling lines",
    desc: "At Vrinda Aagro, our advance automated filling lines ensure precision, hygiene, and efficiency across all chutneys, Sauces, and Pastes. Designed for multiple packing formats, They deliver consistent quality and faster turnaround. with automation reducing human contact, we maintain food safety and authenticity, meeting"
  },
  {
    title: "IPQA Labs for real-time in-process checks",
    desc: "At Vrinda Aagro, our IPQA Labs ensure real-time quality checks at every production stage, from raw materials to packing. Monitoring texture, flavor, viscosity, PH, and safety, We prevent errors and maintain consistency. This proactive system guarantees every chutney, suace, and paste meets the highest standards of quality and reliablity."
  },
  {
    title:"Central & microbiology Labs for Compreshensive quality assurance",
   desc:"At Vrinda Aagro, Our Central and microbiology Labs ensure comprehensive quality assurance. The Central Lab monitors flavor, texture, and stability, while the microbiology Lab guarantees food safety amd compliance. This dual system ensures ebery chutney, Sauce, And paste is hygienic, Consistent, And meets the highest standards for global brands.",
  },
  {
    title:"Dedicated manufacturing lines for product categories",
   desc:"At Vrinda Aagro, We use dedicated manufacturing lines for chutnes, sauces, and pastes, ensuring precision, hygiene, and consistency. Segregated, process-specific lines orevebt cross-contamination and preserve authentic taste. This setup supports scalable production for small or large batches, refelecting our commitment to efficiency, food safety, and uncompromised white label quality."
  }
]

const License = [
  {
    title: "FSSAI Certification",

  },
  {
    title: "GMP-Compliant Operations",
   
  },
  {
    title: "In-House IPQA, Central Lab, and Microbiology Lab ",
    
  },
   {
    title: "Periodic Audits and traceability Systems",
    
  }, 
  {
    title: "Documentation for national & International Compliance",
    
  },
]
const points = [
    "Advance Automation & minimal human handling.",
    "Consistent batch quality and taste.",
    "Adherence to food safety & hygiene standards",
    "Seprate line for product categories and pack sizes",
  ];

export function Infro() {
  return (
    <main className="overflow-x-hidden">

      {/* Hero */}
       <section className="relative bg-green-700 text-white py-24 sm:py-32 overflow-hidden">
      
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Banner/Infra.png" 
            alt="Vrinda Aagro Facility"
            className="w-full h-full object-center"
          />
        </div>
      
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      
          <motion.h2
            className={`${lobster.className} text-4xl sm:text-5xl md:text-6xl text-white`}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Building Legacy with Quality and Taste
          </motion.h2>
      
        </div>
      
      </section>

      {/* Description */}
      <section className="py-20 mt-30 mb-30 px-6 text-center">
        <motion.h2
          className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold text-zinc-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Our plant is built for performance, scalability, and hygiene. Each Area-from production to packaging-is optimized for safe and efficent operations.
        </motion.h2>
      </section>

      {/* Highlights */}
      <section className="bg-zinc-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 className={`${lobster.className} text-4xl mb-10 text-center`}>
            Highlights
          </motion.h1>

          <Timeline data={highlights} />
        </div>
      </section>
  <motion.div 
    className="h-1 bg-red-600 mt-20 rounded-full"
    initial={{ width:0 }}
    whileInView={{ width: "auto" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  />
      {/* Licenses */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 className={`${lobster.className} text-4xl mb-10 text-center`}>
            Licenses  and Certifications
          </motion.h1>
          <div className="mb-16">

            {/* Left Border Text */}
            <div className="border-l-4 text-center border-red-500 pl-6 max-w-4xl">
              <p className="text-lg md:text-2xl text-zinc-800 leading-relaxed font-medium">
                Vrinda Aagro maintains full regulatory compliance with all statutory food industry norms. We operate with:
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-red-500 text-xl">...</span>
                <div className="flex-1 h-[2px] bg-red-600"></div>
              </div>
            </div>

            {/* Bottom Center Text */}
            <p className="text-center text-zinc-700 mt-12 text-base md:text-lg max-w-3xl mx-auto">
              Our certifications ensure transparency, food safety, and trust across our entire supply chain.
            </p>

          </div>

          <Timeline data={License} />
        </div>
         <motion.div 
    className="h-1 bg-red-600 mt-20 rounded-full"
    initial={{ width:0 }}
    whileInView={{ width: "auto" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  />
      </section>
<section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: IMAGE WITH DECORATION */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Background Square */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-green-50 rounded-3xl -z-10 hidden md:block" />
            
            <div className="relative rounded-3xl overflow-hidden border-3 border-yellow-500">
              <h2 className={`${lobster.className} text-2xl md:text-4xl mt-5 text-center text-zinc-900 mb-8`}>
              Why Choose Vrinda Aagro ?
            </h2>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-red-700 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Priority
            </h4>
            
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              At Vrinda Aagro, quality isn't just a department—it's a commitment. 
              Our state-of-the-art laboratory and rigorous protocols ensure that 
              every bottle that leaves our facility is safe, consistent, and superior in taste.
            </p>

            <ul className="space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-green-100 p-1 rounded-full group-hover:bg-yellow-500 transition-colors">
                    <CheckCircle2 className="w-7 h-8 text-red-700 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-zinc-700 font-medium text-base md:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
      {/* CTA */}
      <section className="bg-zinc-50 py-20 border-t">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Need Custom Solutions?
          </h2>
          <Link href="/contact">
            <Button className="bg-green-700 text-white px-8 py-4 rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

    </main>
  )
}

// ✅ FIXED Timeline Component
function Timeline({ data }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={ref} className="relative">

      {/* Line */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 -translate-x-1/2" />

      {/* Animated Line */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-1/2 top-0 w-[2px] h-full bg-black origin-top -translate-x-1/2"
      />

      <div className="flex flex-col gap-16">
        {data.map((item, i) => (
          <div key={i} className="relative flex items-center justify-center md:justify-between">

            {/* Left */}
            <div className={`hidden md:block w-1/2 ${i % 2 !== 0 && "invisible"}`}>
              <Card item={item} />
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-5 h-5 bg-black rounded-full border-4 border-yellow-500" />
            </div>

            {/* Right */}
            <div className={`hidden md:block w-1/2 ${i % 2 === 0 && "invisible"}`}>
              <Card item={item} />
            </div>

            {/* Mobile */}
            <div className="md:hidden w-full">
              <Card item={item} />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

// ✅ Card
function Card({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
    >
      <h1 className={`${lobster.className} text-xl text-red-500 mb-3`}>
        {item.title}
      </h1>
      <p className="text-gray-600 text-sm">
        {item.desc}
      </p>
    </motion.div>
  )
}