"use client"

import { motion } from "framer-motion"

const timelineData = [
  { year: "2003", title: "Company Foundation", desc: "Onsite Like Maintenance." },
  { year: "2005", title: "Rented Manufacturing set up of 2000 sq.ft", desc: "" },
  { year: "2009", title: "State of Art Manufacturing in own 5000 sq.ft premises ", desc: "5000 sq.ft premises." },
  { year: "2011", title: "Supplied First 5TPH Mango processing line", desc: "5TPH Mango processing." },
  { year: "2013", title: "4TPH Ketch up Proceesing Plant", desc: "4TPH processing plant." },
  { year: "2015", title: "New 12,500 Sq.ft Manufacturing Set up added", desc: "12500 sq.ft added." },
  { year: "2016", title: "First Direct Export order to Tanzania", desc: "Order to Tanzania." },
  { year: "2017", title: "Laser cutting and Bending Machine added", desc: "Laser cutting added." },
  { year: "2019", title: "CNC Punching added", desc: "CNC Punching added." },
  { year: "2020", title: "Office added", desc: "New office wing." },
  { year: "2022", title: "Asepticfruit Concentrate Turnkey Project", desc: "Aseptic concentrate." },
  { year: "2025", title: "New Manufacturing set added", desc: "New mfg. setup." },
]

export default function Timeline() {
  return (
    <section className="bg-white py-24 px-4 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-black text-slate-900 mb-40 text-center uppercase tracking-tighter"
        >
          Our Journey
        </motion.h2>
        
        {/* DESKTOP VIEW */}
        <div className="hidden lg:block relative px-4">
          {/* Main Center Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500 origin-left -translate-y-1/2"
          />
          
          <div className="grid grid-cols-12 gap-0 relative">
            {timelineData.map((item, index) => {
              const isUp = index % 2 === 0; // Even = Up, Odd = Down
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0, y: isUp ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1 
                  }}
                  className="flex flex-col items-center relative"
                >
                  {/* Content Container (Alternates Top and Bottom) */}
                  <div className={`absolute w-32 text-center flex flex-col items-center ${isUp ? 'bottom-10' : 'top-10'}`}>
                    
                    {/* Year for "Up" items is above text, for "Down" items is below text */}
                    {isUp && <span className="text-orange-600 font-black text-sm mb-2">{item.year}</span>}
                    
                    <h4 className="font-bold text-slate-800 text-[10px] uppercase leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-[9px] mt-1 leading-tight font-medium">
                      {item.desc}
                    </p>

                    {!isUp && <span className="text-orange-600 font-black text-sm mt-2">{item.year}</span>}
                  </div>

                  {/* Dot on the center line */}
                  <div className="w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-xl z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW (Kept as list for readability) */}
        <div className="lg:hidden flex flex-col gap-12 relative max-w-md mx-auto">
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-orange-500 origin-top"
          />
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", delay: index * 0.05 }}
              className="flex items-start gap-6 relative"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 border-4 border-white flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <div className="bg-slate-50 p-4 rounded-xl w-full">
                <span className="text-orange-600 font-black text-lg">{item.year}</span>
                <h4 className="font-bold text-slate-900 text-sm uppercase leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}