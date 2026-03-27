'use client'

import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Lobster } from 'next/font/google'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'

// ✅ Font
const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

// ✅ Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <main>
       <section className="relative bg-green-700 text-white py-24 sm:py-32 overflow-hidden">
      
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Banner/Contact.png" 
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

      {/* Description */}
      <section className="py-20 mt-30 mb-30 px-6 text-center">
        <motion.h2
          className="max-w-4xl mx-auto text-xl md:text-2xl font-semibold text-zinc-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Have Question, want to collaborate, Or need products samples?<br></br>
          We'd love to hear from you
        </motion.h2>
      </section>
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in touch with us for inquiries, orders, or partnerships
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Gut No. 45, Sharda Warehousing Compound, Ozar Airport Road, Jaulke, Nashik, Maharashtra 422213
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Email</h3>
              </div>
              <a
                href="mailto:jagdish@vrindaaagro.com"
                className="text-green-700 hover:text-green-800 transition-colors break-all"
              >
                jagdish@vrindaaagro.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-200 rounded-lg border border-red-800 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your number"
                    required
                    className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Add Email"
                    required
                    className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can We help you ?"
                  required
                  className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-yellow-500 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="
    w-full sm:w-auto 
    bg-red-700 text-white border-2 border-red-700
    transition-all duration-300 ease-in-out
    hover:bg-transparent hover:text-red-700 hover:border-red-700
    active:scale-95
  "
              >
                Submit Application
              </Button>
              {isSubmitted && (
                <p className="text-sm text-green-700 font-medium">
                  ✓ Thank you for your message! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      {/* Google Map Section */}
<section className="w-full h-[400px] mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.3258440910154!2d73.89399437421663!3d20.078661381343426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc3005ff14ffd%3A0x8fba3dbc17b7b34a!2sVrinda%20Aagro!5e0!3m2!1sen!2sin!4v1773904261588!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full pb-10"
  ></iframe>
</section>
</main>
  )
}
