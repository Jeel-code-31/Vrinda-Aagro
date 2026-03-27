"use client"

import { Lobster } from 'next/font/google'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { features } from 'process'
import Link from 'next/link'
import { Clientele } from '../Clientele'

// ✅ Font
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

// ✅ Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const sauces = [
  {
    slug: 'red-chili-sauce',
    name: 'Red Chili Sauce',
    features: ['Spicy', 'Tangy', 'Bold', 'Ready to serve'],
    image: '/products/red.png'
  },
  {
    slug: 'green-chili-sauce',
    name: 'Green Chili Sauce',
    features: [
      'Fresh & Zesty',
      'Mildly Spicy',
      'Refreshing Taste',
      'Long Shelf Life'
    ],
    image: '/products/Green.png'
  },
  {
    slug: 'dark-soy-sauce',
    name: 'Dark Soy Sauce',
    features: [
      'Rich Color',
      'Strong Umami',
      'Perfect for Cooking',
      'Premium Quality'
    ],
    image: '/products/Dark.png'
  },
  {
    slug: 'pizza-pasta-sauce',
    name: 'Pizza Pasta Sauce',
    features: [
      'Italian Taste',
      'Tomato Rich',
      'Herb Blend',
      'Perfect for Pizza'
    ],
    image: '/products/Pizza.png'
  },
  {
    slug: 'tomato-ketchup',
    name: 'Tomato Ketchup',
    features: [
      'Sweet & Tangy',
      'Kids Favorite',
      'Smooth Texture',
      'Ready to Use'
    ],
    image: '/products/Tomato.png'
  },
]
const chutney = [
  {
    slug: 'schezwan-chutney',
    name: 'Schezwan Chutney',
    features: ['Spicy', 'Tangy', 'Bold', 'Ready to serve'],
    image: '/products/Schezwan.png'
  },
  {
    slug: 'imli-chutney',
    name: 'Tikhi Imli Chutney',
    features: [
      'Fresh & Zesty',
      'Mildly Spicy',
      'Refreshing Taste',
      'Long Shelf Life'
    ],
    image: '/products/Tikhi.png'
  },
  {
    slug: 'dhaniya-chutney',
    name: 'Chatpata Dhaniya Chutney',
    features: [
      'Rich Color',
      'Strong Umami',
      'Perfect for Cooking',
      'Premium Quality'
    ],
    image: '/products/Dhaniya.png'
  },
  {
    slug: 'methi-imli-chutney',
    name: 'Methi Imli Chutney',
    features: [
      'Italian Taste',
      'Tomato Rich',
      'Herb Blend',
      'Perfect for Pizza'
    ],
    image: '/products/Imli.png'
  },
]

const Paste = [
  {
    slug: 'ginger-garlic-paste',
    name: 'Ginger Garlic Paste',
    features: [
      'Fresh',
      'Strong',
      'indispensable for Indian Cooking'
    ],
    image: '/products/Ginger.png'
  },
]

export function ProductsPage() {
  return (
    <main>

      {/* HERO */}
       <section className="relative bg-green-700 text-white py-24 sm:py-32 overflow-hidden">
      
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Banner/Products.jpg" 
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

      {/* DESCRIPTION */}
      <section className="py-12 md:py-16 mt-35 mb-30 px-10 text-center">
        <motion.h2
          className="max-w-4xl mx-auto text-xl md:text-2xl font-bold text-black-700"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          At Vrinda Aagro, our product range is designed to delight consumers and meet the evolving needs of th food service and retail industries. Every batch is produced under rigorous quality protocols using the latest in food processing technology.
        </motion.h2>
      </section>

      {/* TITLE */}
      <section className="bg-yellow-600 text-white min-h-[20vh] flex items-center justify-center text-center px-6">
        <h1 className={`${lobster.className} text-4xl sm:text-6xl`}>
          Our Product Portfolio
        </h1>
      </section>
      <section className="text-black min-h-[20vh] mt-30 flex flex-col items-center justify-center text-center px-6">
        {/* The Heading */}
        <h1 className={`${lobster.className} text-4xl sm:text-6xl`}>
          Our Sauce's
        </h1>

        <motion.div
          className="h-1 bg-red-600 mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </section>
      {/* PRODUCTS GRID */}
      <section className="pb-20 pt-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
        >
          {sauces.map((sauce, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition group"
            >

              {/* IMAGE FIXED */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                {sauce.image ? (
                  <img
                    src={sauce.image}
                    alt={sauce.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{sauce.name}</h3>

                {/* ✅ FIXED HERE */}
                <ul className="space-y-2 mb-6">
                  {sauce.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={`/products/${sauce.slug}`}>
                  <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                    Explore More
                  </button>
                </a>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="text-black min-h-[20vh] flex flex-col items-center justify-center text-center px-6">
        {/* The Heading */}
        <h1 className={`${lobster.className} text-4xl sm:text-6xl`}>
          Our Chutney's
        </h1>

        <motion.div
          className="h-1 bg-red-600 mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </section>

      {/* PRODUCTS GRID */}
      <section className="pb-20 pt-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
        >
          {chutney.map((chutney, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition group"
            >

              {/* IMAGE FIXED */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                {chutney.image ? (
                  <img
                    src={chutney.image}
                    alt={chutney.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{chutney.name}</h3>

                {/* ✅ FIXED HERE */}
                <ul className="space-y-2 mb-6">
                  {chutney.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${chutney.slug}`}>
                  <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                    Learn More
                  </button>
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="text-black min-h-[20vh] flex flex-col items-center justify-center text-center px-6">
        {/* The Heading */}
        <h1 className={`${lobster.className} text-4xl sm:text-6xl`}>
          Our Paste
        </h1>

        <motion.div
          className="h-1 bg-red-600 mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </section>
      {/* Paste Section */}
      <section className="pb-20 pt-20">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
        >
          {Paste.map((paste, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition group"
            >

              {/* IMAGE FIXED */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                {paste.image ? (
                  <img
                    src={paste.image}
                    alt={paste.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{paste.name}</h3>

                {/* ✅ FIXED HERE */}
                <ul className="space-y-2 mb-6">
                  {paste.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${paste.slug}`}>
                  <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                    Learn More
                  </button>
                </Link>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </section>
      <Clientele />

      <section className="bg-green-700 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Left Side: Title */}
          <div className="flex-1 text-center md:text-right">
            <motion.h1
              className={`${lobster.className} text-5xl md:text-6xl text-yellow-400`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Private Label & OEM
            </motion.h1>
          </div>

          {/* UBHI LINE (Vertical Line) */}
          <div className="hidden md:block h-48 w-[2px] bg-yellow-500/50 rounded-full" />

          {/* Right Side: Description */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              className="max-w-xl text-lg md:text-xl font-medium leading-relaxed opacity-90"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              We provide End-to-End Contract manufacturing solutions for private labels and OEM partners. From Custom Formulation and Packing to bulk production and dispatch, We help brands scale efficiently while maintaining quality and compliance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Let's Discuss more about product
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-green-700 border-2 border-green-700 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-green-700"
        >
          Contact Sales
        </Link>
      </section>

    </main>
  )
}