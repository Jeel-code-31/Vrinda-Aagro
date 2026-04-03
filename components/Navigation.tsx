'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Caveat } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const waveyFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Infrastructure', href: '/Infra' },
    { name: 'Quality & Safety', href: '/Quality' },
    { name: 'Career', href: '/Career' },
    { name: 'Contact', href: '/contact' },
  ]

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24"> 
          
          {/* LOGO & SLOGAN SECTION */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group shrink-0">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0"> 
              <Image
                src="/Vrinda.png" 
                alt="Vrinda Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="hidden sm:flex flex-col justify-center">
              <span className={`${waveyFont.className} text-sm md:text-xl lg:text-2xl text-yellow-400 italic tracking-wide leading-tight`}>
                Bring taste to every dish
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors group py-2 
                    ${isActive ? 'text-red-600' : 'text-yellow-100/80 hover:text-red-600'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </Link>
              )
            })}
          </nav>

          {/* MOBILE/TABLET MENU TOGGLE */}
          <button
            className="lg:hidden p-2 text-yellow-100 hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* MOBILE/TABLET NAVIGATION */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden py-4 md:py-6 border-t border-gray-800 bg-black/50 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3 md:gap-4 px-4">
                {links.map((link, index) => {
                  const isActive = pathname === link.href

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-sm md:text-base font-bold uppercase tracking-wider transition-colors py-2 px-3 rounded
                          ${isActive ? 'text-red-600 bg-red-600/10' : 'text-yellow-100 hover:text-red-600 hover:bg-red-600/5'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}