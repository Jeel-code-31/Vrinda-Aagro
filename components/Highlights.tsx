'use client';

import { motion } from 'framer-motion';

export function Highlights() {
  const highlights = [
    {
      bold: '5000+',
      text: 'Mt monthly production capacity',
    },
    {
      bold: 'Fully automated',
      text: 'manufacturing lines',
    },
    {
      bold: 'IPQA, Central & Micro',
      text: 'Dedicated Labs',
    },
    {
      bold: 'Safety & hygiene',
      text: 'Employee centric practices',
    },
  ];

  return (
    <section className="bg-[#800000] py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-14 md:mb-16">
          <div className="h-px bg-white flex-1" />
          <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest text-center whitespace-nowrap px-2">
            Highlights
          </h2>
          <div className="h-px bg-white flex-1" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl transition-all duration-300 hover:border-yellow-400"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                
                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-white mt-2 sm:mt-3 flex-shrink-0" />
                
                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed uppercase tracking-tight">
                  <span className="text-yellow-400 font-bold">
                    {item.bold}
                  </span>{' '}
                  <span className="text-yellow-200 font-light">
                    {item.text}
                  </span>
                </p>

              </div>

              {/* Hover underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-500 group-hover:w-full rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}