'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Instagram, ExternalLink } from 'lucide-react'

// TikTok icon component since lucide doesn't have it
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ff64ac4b-9a0a-4a54-9ab3-a97d77984e8c',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from ${formData.name} - CutEdge Agency`,
          from_name: 'CutEdge Agency Website',
          replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-carbon-900">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-carbon-800 to-transparent" />

      {/* Decorative elements - hidden on small screens */}
      <div className="hidden sm:block absolute top-1/4 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold/5 rounded-full blur-[100px] md:blur-[150px]" />
      <div className="hidden sm:block absolute bottom-1/4 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold-dark/5 rounded-full blur-[100px] md:blur-[150px]" />

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
            Let&apos;s <span className="text-gradient-neon">Connect</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            Ready to elevate your content? Drop us a message and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Email */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-carbon-800/50 neon-border">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white sm:hidden" />
                  <Mail size={24} className="text-white hidden sm:block" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Email Us</h3>
                  <p className="text-white/50 text-xs sm:text-sm">We reply within 24 hours</p>
                </div>
              </div>
              <a
                href="mailto:cutedgeagency@gmail.com"
                className="text-sm sm:text-xl md:text-2xl font-medium text-gradient-neon hover:opacity-80 transition-opacity break-all sm:break-normal"
              >
                cutedgeagency@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-carbon-800/50 neon-border">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                <a
                  href="https://www.tiktok.com/@cutedge.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <TikTokIcon size={20} />
                  <span className="font-medium text-sm sm:text-base">TikTok</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://www.instagram.com/cutedge_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <Instagram size={20} />
                  <span className="font-medium text-sm sm:text-base">Instagram</span>
                  <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-carbon-800/50 neon-border">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Info</h3>
              <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold flex-shrink-0" />
                  Average response time: 2-4 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-dark flex-shrink-0" />
                  Project turnaround: 24-72 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-darker flex-shrink-0" />
                  Unlimited revisions on all packages
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-carbon-800 border border-white/10 text-white text-sm sm:text-base placeholder-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-carbon-800 border border-white/10 text-white text-sm sm:text-base placeholder-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-carbon-800 border border-white/10 text-white text-sm sm:text-base placeholder-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 resize-none sm:rows-5"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="sm:hidden" />
                    <Send size={18} className="hidden sm:block" />
                    Send Message
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-center text-sm sm:text-base"
                >
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
