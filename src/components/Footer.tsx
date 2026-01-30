'use client'

import { Instagram, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 sm:py-12 bg-carbon-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Top Row - Logo, Social, Links */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <Image
                src="/logo.png"
                alt="CutEdge Agency"
                width={100}
                height={36}
                className="h-8 sm:h-10 w-auto object-contain mix-blend-lighten"
              />
              <div className="text-white/50 text-xs sm:text-sm">
                © {currentYear} All rights reserved.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 order-last sm:order-none">
              <a
                href="https://www.tiktok.com/@cutedge.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/cutedge_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-gold-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:cutedgeagency@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-all duration-300"
                aria-label="Email"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#work" className="text-white/50 hover:text-white transition-colors">
                Work
              </a>
              <a href="#about" className="text-white/50 hover:text-white transition-colors">
                About
              </a>
              <a href="#contact" className="text-white/50 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Designed By Credit */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            Designed & Developed by{' '}
            <a
              href="https://github.com/HarryYin03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-neon hover:opacity-80 transition-opacity"
            >
              Thu Ya Hlaing (Harry)
            </a>
            <span className="block sm:inline">
              {' '}<span className="hidden sm:inline">·</span>{' '}
              <a
                href="mailto:thuyahlaing04@gmail.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                thuyahlaing04@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
