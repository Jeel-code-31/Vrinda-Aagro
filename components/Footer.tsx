'use client';

import Link from 'next/link'
import Image from 'next/image'
import { Caveat } from 'next/font/google'
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const scriptFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function Footer() {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/Services' },
    { name: 'Standards', href: '/standards' },
    { name: 'Career', href: '/Career' },
    { name: 'Contact', href: '/contact' },
    { name: 'News', href: '/news' },
    { name: 'Articles', href: '/articles' },
    { name: 'Privacy', href: '/privacy-policy' },
  ]

  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/vrindaaagro/' },
    { icon: Linkedin, label: 'Linkedin', href: 'https://www.linkedin.com/company/vrindaaagro/' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  ]

  return (
    <footer className="bg-black text-white border-t border-zinc-800 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">

          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-4 md:space-y-5">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20">
              <Image src="/Vrinda.png" alt="Vrinda Logo" fill className="object-contain" priority />
            </div>
            <span className={`${scriptFont.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-400 italic leading-tight`}>
              Bring taste to every dish
            </span>
            <p className="text-zinc-300 font-medium text-xs sm:text-sm leading-relaxed max-w-xs">
              Founded in 2023, Vrinda Aagro delivers excellence in food manufacturing through innovation, automation, and safety. Quality sauces, chutneys, and pastes for every taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-yellow-500">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-2 sm:gap-y-3 text-xs sm:text-sm font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-300 hover:text-red-600 transition-colors flex items-center gap-2">
                    <span className="text-yellow-600 flex-shrink-0">•</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-black uppercase tracking-widest text-yellow-500">
              Reach Us
            </h2>
            <div className="text-xs sm:text-sm text-zinc-300 space-y-3">
              <div>
                <p className="font-bold text-white uppercase mb-1">Production Unit</p>
                <p className="leading-relaxed">
                  Gut No. 45, Sharda Warehousing Compound, Ozar Airport Road, Jaulke, Nashik
                </p>
              </div>
              <div>
                <p className="font-bold text-white uppercase mb-1">Email</p>
                <a href="mailto:jagdish@vrindaaagro.com" className="text-yellow-500 hover:text-red-600 transition-colors break-all">
                  jagdish@vrindaaagro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-8 sm:my-10 md:my-12" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-yellow-500">
              Follow Us
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-zinc-700 flex items-center justify-center hover:border-yellow-600 hover:bg-yellow-600/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 text-center">
            © 2025 Vrinda Aagro — All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  )
}