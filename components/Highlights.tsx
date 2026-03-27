'use client';

import { motion } from 'framer-motion';

export function Highlights() {
  const highlights = [
    {
      bold: '5000+',
      text: ' Mt monthly production capacity',
    },
    {
      bold: 'Fully automated',
      text: 'manufacturing lines',
    },
    {
      bold: 'IPQA, Central & Micro ',
      text: 'Dedicated Labs',
    },
    {
      bold: 'safety and hygiene',
      text: 'Of Employe Centric practices',
    },
  ];

  return (
    <section className="bg-[#800000] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px bg-white flex-1" />
          <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold uppercase tracking-widest text-center whitespace-nowrap">
            Highlights
          </h2>
          <div className="h-px bg-white flex-1" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-white p-22 rounded-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                
                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0" />
                
                {/* Text */}
                <p className="text-lg md:text-xl leading-relaxed uppercase tracking-tight">
                  <span className="text-yellow-400 font-bold">
                    {item.bold}
                  </span>{' '}
                  <span className="text-yellow-200 font-light">
                    {item.text}
                  </span>
                </p>

              </div>

              {/* Hover underline */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}