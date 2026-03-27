"use client"
import { Lobster } from 'next/font/google'
import { motion } from 'framer-motion'



// ✅ Initialize font
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

export function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-24 sm:py-32 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Banner/About.jpg"
            alt="Vrinda Aagro Facility"
            className="w-full h-full object-top"
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

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h2 className={`${lobster.className} text-4xl`}>
                A journey to craft premium and superior products
              </h2>

              <img
                src="/Banner/About.png" // 👈 replace with your image path
                alt="Products"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

              <p className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl mt-1">•</span>
                Founded in 2023, Vrinda Aagro was established with a clear vision —
                to redefine excellence in the world of food manufacturing.
              </p>

              <p className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl mt-1">•</span>
                Our advanced manufacturing facility integrates cutting-edge automation,
                ensuring consistent quality, efficiency, and hygiene at every stage.
              </p>

              <p className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl mt-1">•</span>
                We follow stringent quality control processes and adhere to global
                food safety standards.
              </p>

              <p className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl mt-1">•</span>
                Our diverse product portfolio includes sauces, chutneys, and pastes,
                crafted for authentic taste and convenience.
              </p>

              <p className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl mt-1">•</span>
                Driven by a passionate team and backed by modern infrastructure,
                Vrinda Aagro continues to push boundaries in food innovation.
              </p>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid md:grid-cols-2">


          <div className="bg-black text-white flex items-center justify-center min-h-[60vh] md:min-h-[80vh] px-6">
            <div className="text-center max-w-xl">
              <h3 className="text-3xl sm:text-4xl font-light tracking-widest mb-6">
                •VISION•
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                To be a leader in delivering high-quality food products with precision & excellence.
              </p>
            </div>
          </div>

          <div className="bg-[#5a0f0f] text-white flex items-center justify-center min-h-[60vh] md:min-h-[80vh] px-6">
            <div className="text-center max-w-xl">

              <h3 className="text-3xl sm:text-4xl font-light tracking-widest mb-6">
                •MISSION•
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                To provide innovative, scalable, and sustainable food processing solutions that help our clients grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-wide">
            THE VISIONARIES BEHIND OUR MISSION
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div className="border border-red-700 rounded-2xl p-6 text-center">

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Mr. Jagdish K. Mishra
              </h3>

              {/* Image */}
               <div className="w-full aspect-square  mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/p2.jpeg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-black-600 font-bold text-xl mb-4">
                Managing Director
              </p>
              {/* Points instead of paragraph */}
              <p className="text-black-600 font-semibold mb-4">
                Our esteemed Managing Director holds a Bachelor's degree in Mechanical Engineering from 1993. He Commenced his professional journey at Lloyed Steel in Nagpur as a Trainee in the purchase department. In 1996, he relocated to Nashik, The Holy city of Lord Shri Ram, where he joined Shalimar Wire industries as an Assistant Manager in the Purchase department. With a vision to create something Extraordinary, he ventured into entrepreneurship in 2002, establishing a manufacturing unit for non-ferrous wire, Metals United. in 2023 started Vrinda Aagro started to engrave the inspiring entrepreneurial story.
              </p>
            </div>
            {/* CARD 2 */}
            <div className="border border-red-700 rounded-2xl p-6 text-center bg-gray-50">

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Mr. Ram Mishra
              </h3>
              {/* Image */}
              <div className="w-full aspect-square  mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/P1.jpeg"
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-900 font-bold mb-4">
                Joint Managing Director
              </p>
              {/* Points */}
              <p className="text-black-600 font-semibold mb-4">
                Our Jt. MD, representing the next generation of leadership, has completed his IBM from the University of Wollongong, UAE. He now plays a pivotal role in supporting our Hon'ble MD in driving the company toward sustained innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}