'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Newsletter() {
  return (
    <section className="bg-red-900 text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Sign up for Newsletter
          </h2>

          <p className="text-yellow-100 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed">
            Stay updated with our latest products, insights, and company news.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 md:py-3 rounded-md sm:rounded-lg text-gray-900 border border-gray-300 placeholder-yellow-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <Button className="bg-white text-red-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 md:py-3 text-sm sm:text-base rounded-md sm:rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
