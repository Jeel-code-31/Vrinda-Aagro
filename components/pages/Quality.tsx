"use client"

import { Lobster } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

// Data for the grid
const gridItems = [
  {
    id: 1,
    text: "CLOSED-LOOP MANUFACTURING AND PACKAGING",
    image: "/Banner/Q1.png", // Replace with your image path
    reverse: false,
  },
  {
    id: 2,
    text: "MINIMAL MANUAL INTERVENTION",
    image: "/Banner/Infra.png", // Replace with your image path
    reverse: true, // This triggers the alternating layout
  },
   {
    id: 3,
    text: "REAL-TIME QUALITY MONITORING",
    image: "/Banner/Q2.png", // Replace with your image path
    reverse: false,
  },
   {
    id: 4,
    text: "LAB-TASTED FOR CHEMICAL, PHYSICAL, AND MICROBIAL PARAMETERS",
    image: "/Banner/Q3.png", // Replace with your image path
    reverse: true, // This triggers the alternating layout
  },
  {
    id: 5,
    text: "ROUTINE EMPLOYEE TRAINING ON HYGIENE AND GMP",
    image: "/Banner/Q4.png", // Replace with your image path
    reverse: false,
  }
  
]

export function Quality() {
  return (
    <main className="overflow-x-hidden">
       <section className="relative bg-green-700 text-white py-24 sm:py-32 overflow-hidden">
      
        <div className="absolute inset-0 z-0">
          <img 
            src="/Banner/Quality.png" 
            alt="Vrinda Aagro Facility"
            className="w-full h-full object-cover"
          />
        </div>
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
      <section className="py-20 px-6 mt-35 mb-30 text-center">
        <motion.h2
          className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold text-zinc-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          We are committed to delivering food products that meet and exceed safety expectations. Every stage of our process is guided by Good Manufacturing Practices (GMP).
        </motion.h2>
      </section>
 <section className="bg-red-800 text-white min-h-[30vh] mt-30 mb-10 flex items-center justify-center text-center px-6">
        <motion.h1
          className={`${lobster.className} text-4xl sm:text-6xl`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          "Key Practices."
        </motion.h1>
      </section>
      <section className="w-full MB-20">
        {gridItems.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row mb-5 w-full min-h-[400px] ${item.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div 
              className="w-full md:w-1/2 bg-[#8B0000] flex items-center justify-center p-12 text-center"
              initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-white">
                <div className="w-2 h-2 bg-white rounded-full" /> {/* The Bullet Point */}
                <h3 className="text-lg md:text-xl font-bold tracking-widest uppercase">
                  {item.text}
                </h3>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              className="w-full md:w-1/2 relative min-h-[300px]"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={item.image} 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover grayscale-[30%] brightness-75"
              />
            </motion.div>
          </div>
        ))}
      </section>
    </main>
  )
}