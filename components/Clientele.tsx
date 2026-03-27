'use client';

import Image from 'next/image';

export function Clientele() {
  const clients = [
    { name: 'Client 1', logo: '/Client1.png' },   
    { name: 'Client 2', logo: '/Client2.png' }, 
    { name: 'Client 3', logo: '/Client3.webp' }, 
    { name: 'Client 4', logo: '/Client4.webp' },
  ];
  
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header with Red Lines on Sides */}
        <div className="flex items-center justify-center gap-4 md:gap-10 mb-16 md:mb-24">
          <div className="h-px bg-red-600 flex-1 hidden sm:block" />
          
          <h2 className="text-red-600 text-3xl md:text-5xl font-extrabold uppercase tracking-[0.2em] text-center whitespace-nowrap">
             OUR ESTEEMED CLIENTELE
          </h2>
          
          <div className="h-px bg-red-600 flex-1 hidden sm:block" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group relative w-full h-28 md:h-36 flex items-center justify-center rounded-2xl  transition-all duration-500 hover:shadow-xl hover:shadow-red-600/5 hover:border-red-100 overflow-hidden"
            >
         
              <div className="relative w-full h-full p-6 transition-all duration-500 group-hover:opacity-100 transform group-hover:scale-110">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain px-4"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}