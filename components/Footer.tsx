'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Caveat } from 'next/font/google'
import { Facebook, Youtube, Instagram, Linkedin, MessageCircle } from 'lucide-react'

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
    { name: 'Contact Us', href: '/contact' },
    { name: 'News & Events', href: '/news' },
    { name: 'Articles', href: '/articles' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]

  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/vrindaaagro/' },
    { icon: Linkedin, label: 'Linkedin', href: 'https://www.linkedin.com/company/vrindaaagro/' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
  ]

  return (
    <footer className="bg-black text-white border-t border-zinc-800 w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 md:py-20">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-16">

          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Image src="/Vrinda.png" alt="Vrinda Logo" fill className="object-contain" priority />
            </div>
            <span className={`${scriptFont.className} text-2xl sm:text-3xl md:text-4xl text-yellow-400 italic block leading-tight`}>
              Bring taste to every dish
            </span>
            <p className="text-white-400 font-bold text-sm leading-relaxed max-w-xs sm:max-w-sm">
              Founded in 2023, Vrinda Aagro has established to redefine
              excellence in food manufacturing. Our mission is rooted in innovation.
              with an emphasis on automation and safety, we produce a diverse range of sauces,
              chutneys, and pastes to meet market demands with precision.
            </p>
          </div>

          {/* Quick Links: 2 columns on mobile to save vertical space */}
          <div className="w-full">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mt-20 mb-6 text-yellow-500 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-medium">
              {links.map((link) => (
                <li key={link.name} className="flex justify-center md:justify-start">
                  <Link href={link.href} className="text-white-400 hover:text-red-600 transition-colors flex items-center">
                    <span className="text-yellow-700 text-[12px] mr-2 flex-shrink-0">•</span>
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact: Centered on mobile */}
          <div className="flex flex-col items-center mt-20 md:items-start text-center md:text-left space-y-6 md:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-500">Reach Us</h2>
            <div className="text-sm text-zinc-300">
              <p className="font-bold text-white uppercase mb-2">Production Unit</p>
              <p className="max-w-xs">Gut No. 45, Sharda Warehousing Compound, Ozar Airport Road, Jaulke, Nashik</p>
            </div>
            <a href="mailto:jagdish@vrindaaagro.com" className="text-xs sm:text-sm font-bold text-yellow-500 hover:text-red-600 underline underline-offset-4 decoration-zinc-800 break-all">
              Email:-  jagdish@vrindaaagro.com
            </a>
          </div>
        </div>
        

        {/* BOTTOM BAR - Mobile Optimized */}
        <div className="pt-10 border-t border-yellow-500 flex flex-col items-center gap-10 md:flex-row md:justify-between">

          {/* Follow Us - Primary focus on mobile */}
          <div className="flex flex-col items-center gap-4 w-full md:w-auto">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">
              Follow us
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-800 flex items-center justify-center hover:border-yellow-600 hover:bg-yellow-600/10 transition-all duration-300 active:scale-95"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-zinc-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright text - Secondary on mobile */}
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-600 text-center">
            © 2025 Vrinda Aagro — All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  )
}