'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sliderImages = [
  { image: '/products/chutney.png', title: 'Chutney' },
  { image: '/products/Sauce2.png', title: 'Sauce' },
  { image: '/products/Pastes.png', title: 'Paste' },
]

export function ProductSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-white py-8 md:py-12 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* --- TEXT SECTION (Reduced height to bring it closer to image) --- */}
        <div className="h-[130px] md:h-[160px] w-full flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
              {/* Decorative Drop */}
             

              <div className="text-center px-8 md:px-12 py-3 md:py-4">
                <h3 className="text-4xl md:text-7xl font-black text-red-600 mb-11 uppercase tracking-tighter leading-none">
                  {sliderImages[current].title}
                </h3> 
              </div>
          </AnimatePresence>
        </div>

     
        <div className="relative w-full h-full md:h-[300px]  mb-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full"
            >
              <img
                src={sliderImages[current].image}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots (Positioned closely below) */}
        <div className="flex justify-cente">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === current ? 'w-12 bg-red-600' : 'w-3 bg-red-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}