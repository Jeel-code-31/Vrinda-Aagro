'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Clientele() {
  const clients = [
    { name: 'Client 1', logo: '/Client1.png' },   
    { name: 'Client 2', logo: '/Client2.png' }, 
    { name: 'Client 3', logo: '/Client3.webp' }, 
    { name: 'Client 4', logo: '/Client4.webp' },
  ];
  
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Red Lines on Sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 lg:gap-10 mb-10 sm:mb-14 md:mb-20 lg:mb-24">
          <div className="h-px bg-red-600 flex-1 hidden sm:block" />
          
          <h2 className="text-red-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-widest md:tracking-[0.2em] text-center px-2 whitespace-nowrap">
             Our Clientele
          </h2>
          
          <div className="h-px bg-red-600 flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full h-20 sm:h-24 md:h-28 lg:h-36 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 hover:shadow-md md:hover:shadow-lg hover:shadow-red-600/20 overflow-hidden bg-gray-50 hover:bg-gray-100"
            >
         
              <div className="relative w-full h-full p-3 sm:p-4 md:p-6 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain px-2 sm:px-3 md:px-4"
                  sizes="(max-width: 640px) 40vw, (max-width: 768px) 40vw, (max-width: 1024px) 20vw, 20vw"
                />
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}