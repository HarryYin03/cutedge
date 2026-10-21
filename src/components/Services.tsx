'use client'

import { motion } from 'framer-motion'
import { Film, Clapperboard, Camera, Monitor, Bot, Share2 } from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Scroll-stopping Shorts, Reels, TikToks and YouTube edits built to perform.',
  },
  {
    icon: Clapperboard,
    title: 'Cinematic Content',
    description: 'Short-form cinematic shoots and edits for brands, products and venues.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Clean, premium product and lifestyle photography for your brand.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Fast, modern, mobile-first websites that turn visitors into customers.',
  },
  {
    icon: Bot,
    title: 'AI Specialists',
    description: 'AI-powered content, automation and workflows to help your business scale.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategy, posting and growth across TikTok, Instagram and YouTube.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 md:py-32 bg-carbon-800">
      <div className="absolute inset-0 bg-noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Our <span className="text-gradient-neon">Services</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Everything your brand needs to stand out online, under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-carbon-700/50 neon-border card-hover"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center mb-3 sm:mb-4 group-hover:neon-glow transition-all duration-300">
                <service.icon size={20} className="text-black sm:hidden" />
                <service.icon size={24} className="text-black hidden sm:block" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
