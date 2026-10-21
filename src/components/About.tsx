'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Award, Target } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'High-Impact Edits',
    description: 'Scroll-stopping content that captures attention in the first second.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: '24-48 hour delivery on most projects. Rush options available.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Industry-standard editing with attention to every detail.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Content optimized for engagement, views, and conversions.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-carbon-800">
      <div className="absolute inset-0 bg-city-lights opacity-50" />
      <div className="absolute inset-0 bg-noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="text-gradient-neon">CutEdge</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                We&apos;re a specialized video editing agency built for the modern creator economy.
                From viral TikToks to polished YouTube content, we craft edits that don&apos;t just
                look good—they perform.
              </p>
              <p>
                Our team combines creative storytelling with data-driven insights to produce
                content that resonates with your audience and drives real results.
              </p>
              <p>
                Whether you need quick-turn social content or premium brand videos, we deliver
                on time, every time. No excuses, just exceptional work.
              </p>
            </div>

          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-carbon-700/50 neon-border card-hover"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center mb-3 sm:mb-4 group-hover:neon-glow transition-all duration-300">
                  <feature.icon size={20} className="text-black sm:hidden" />
                  <feature.icon size={24} className="text-black hidden sm:block" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 group-hover:text-gradient-neon transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
