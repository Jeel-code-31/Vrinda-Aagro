"use client";

import Image from "next/image"
import { motion } from "framer-motion"

export default function AnimationSection() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const itemRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }


  const leftItems = ["TRUST", "QUALITY", "PRECISION"];
  const rightItems = ["INTEGRITY", "EXCELLENCE", "INNOVATION"];

  return (
    <section className="bg-black py-30 px-4 md:px-10 overflow-hidden min-h-screen flex flex-col justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto w-full relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-0">
          
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col gap-16 md:gap-24 order-2 md:order-1">
            {leftItems.map((text, i) => (
              <motion.div key={text} variants={itemLeft} className="flex items-center justify-end gap-4 group">
                <h3 className="text-red-600 font-black text-2xl md:text-4xl tracking-tighter transition-colors group-hover:text-yellow-500">
                  {text}
                </h3>
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
                {/* Horizontal line for desktop */}
                <div className="hidden md:block h-[1px] w-20 bg-gradient-to-r from-yellow-500 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* ================= CENTER LOGO ================= */}
          <div className="relative flex justify-center items-center order-5 md:order-2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 100 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* Rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-yellow-500 rounded-full"
              />
              <Image
                src="/Vrinda.png"
                alt="Vrinda"
                width={200}
                height={100}
                className="w-40 md:w-56 z-10 object-contain p-4"
              />
            </motion.div>
            
            {/* SVG Background Connections (Desktop Only) */}
            <svg className="hidden md:block absolute inset-0 w-[150%] h-[150%] -translate-x-[16.5%] pointer-events-none" viewBox="0 0 800 600">
            </svg>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col gap-16 md:gap-24 order-3">
            {rightItems.map((text, i) => (
              <motion.div key={text} variants={itemRight} className="flex items-center justify-start gap-4 group">
                <div className="hidden md:block h-[1px] w-20 bg-gradient-to-l from-yellow-500 to-transparent" />
                <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
                <h3 className="text-red-600 font-black text-2xl md:text-4xl tracking-tighter transition-colors group-hover:text-orange-500">
                  {text}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM PRODUCTS ================= */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5 md:mt-32"
        >
          <Image
            src="/No.png"
            alt="Products"
            width={1400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}