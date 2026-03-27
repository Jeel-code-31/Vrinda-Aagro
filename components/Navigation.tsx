'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation' // Import usePathname
import { Menu, X } from 'lucide-react'
import { Caveat } from 'next/font/google'

const waveyFont = Caveat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() // Get the current active path

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Infrastructure', href: '/Infra' },
    { name: 'Quality And Safety', href: '/Quality' },
    { name: 'Career', href: '/Career' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> 
          
          {/* LOGO & SLOGAN SECTION */}
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative h-16 w-16"> 
              <Image
                src="/Vrinda.png" 
                alt="Vrinda Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className={`${waveyFont.className} text-2xl text-yellow-400 mt-1 italic tracking-wide`}>
                Bring taste to every dish
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-bold uppercase tracking-widest transition-colors group py-2 
                    ${isActive ? 'text-red-600' : 'text-yellow-100/80 hover:text-red-600'}`}
                >
                  {link.name}
                  {/* Underline remains full width if active, or grows on hover if not */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </Link>
              )
            })}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 text-yellow-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-gray-800 bg-black">
            <div className="flex flex-col gap-6 px-4">
              {links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-bold uppercase tracking-wider transition-colors
                      ${isActive ? 'text-red-600' : 'text-yellow-100'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}