'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ExternalLink } from 'lucide-react'

type ProjectCategory = 'All' | 'Shorts/Reels' | 'Ads' | 'YouTube' | 'Corporate'

interface Project {
  id: number
  title: string
  thumbnail: string
  videoUrl: string
  category: ProjectCategory
  description: string
  goal: string
  style: string
  platform: string
}

/*
 * ============================================
 * HOW TO ADD YOUR PROJECTS:
 * ============================================
 * 
 * 1. THUMBNAIL OPTIONS:
 *    - Local: Save image to /public/projects/ folder, use '/projects/filename.jpg'
 *    - External: Use direct image URL
 * 
 * 2. VIDEO EMBED OPTIONS:
 *    - YouTube: 'https://www.youtube.com/embed/VIDEO_ID'
 *    - Vimeo: 'https://player.vimeo.com/video/VIDEO_ID'
 *    - Instagram Reel: 'https://www.instagram.com/reel/REEL_CODE/embed'
 *    - TikTok: 'https://www.tiktok.com/embed/VIDEO_ID'
 * 
 * 3. CATEGORIES: 'Shorts/Reels' | 'Ads' | 'YouTube' | 'Corporate'
 * 
 * To get Instagram Reel embed URL:
 *    - Go to your reel on Instagram
 *    - Copy the URL (e.g., https://www.instagram.com/reel/ABC123/)
 *    - Add '/embed' at the end: https://www.instagram.com/reel/ABC123/embed
 * ============================================
 */

const projects: Project[] = [
  /*
   * YOUR TIKTOK VIDEOS
   * Save thumbnails as: tiktok-1.jpg, tiktok-2.jpg, etc. in public/projects/
   */
  {
    id: 1,
    title: 'Avatar Style Edit',
    thumbnail: '/projects/tiktok-1.png',
    videoUrl: 'https://www.tiktok.com/embed/7600903346764926230',
    category: 'Shorts/Reels',
    description: 'Cinematic Avatar-inspired visual effects and color grading.',
    goal: 'Showcase creative editing skills',
    style: 'Cinematic color grading, VFX, immersive visuals',
    platform: 'TikTok',
  },
  {
    id: 2,
    title: 'Agency Promo',
    thumbnail: '/projects/tiktok-2.png',
    videoUrl: 'https://www.tiktok.com/embed/7600806696184859926',
    category: 'Ads',
    description: 'Professional agency promo showcasing our editing capabilities.',
    goal: 'Build brand awareness',
    style: 'Clean motion graphics, bold typography',
    platform: 'TikTok',
  },
  {
    id: 3,
    title: 'Iron Man Edit',
    thumbnail: '/projects/tiktok-3.png',
    videoUrl: 'https://www.tiktok.com/embed/7598219046928108822',
    category: 'Shorts/Reels',
    description: 'High-energy Marvel-inspired edit with dynamic transitions.',
    goal: 'Viral engagement',
    style: 'Comic book style, energetic cuts, VFX',
    platform: 'TikTok',
  },
]

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32 bg-carbon-900">
      <div className="absolute inset-0 bg-grid opacity-30" />

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
            Our <span className="text-gradient-neon">Work</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto px-2">
            A showcase of our best edits across different platforms and styles.
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer card-hover neon-border"
              >
                {/* Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-carbon-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-gold flex items-center justify-center neon-glow">
                    <Play size={20} className="text-white ml-0.5 sm:ml-1 sm:hidden" fill="white" />
                    <Play size={24} className="text-white ml-1 hidden sm:block" fill="white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm mb-2 sm:mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-semibold text-white group-hover:text-gradient-neon transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal/Lightbox - Premium Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl my-4 sm:my-0"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-2xl sm:rounded-3xl blur-sm opacity-75" />

              {/* Main content container */}
              <div className="relative bg-carbon-900 rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/70 hover:border-gold/50 transition-all duration-300 group"
                >
                  <X size={20} className="text-white/70 group-hover:text-gold transition-colors" />
                </button>

                {/* Layout: Side by side on desktop */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Project Info */}
                  <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1 bg-gradient-to-br from-carbon-800 to-carbon-900">
                    {/* Category & Platform */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <span className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full bg-gradient-gold text-black uppercase tracking-wide">
                        {selectedProject.category}
                      </span>
                      <span className="text-gold/70 text-xs sm:text-sm font-medium">{selectedProject.platform}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 text-white leading-tight">
                      {selectedProject.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Stats/Info Cards */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-gold/20 transition-colors">
                        <div className="text-gold/80 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">Goal</div>
                        <div className="text-white font-medium text-sm sm:text-base">{selectedProject.goal}</div>
                      </div>
                      <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-gold/20 transition-colors">
                        <div className="text-gold/80 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">Style</div>
                        <div className="text-white font-medium text-sm sm:text-base">{selectedProject.style}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-gradient-gold text-black font-bold rounded-xl hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 text-sm sm:text-base"
                    >
                      Order Similar Edit
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Right side - Video */}
                  <div className="lg:w-3/5 order-1 lg:order-2 relative">
                    {/* Video container with aspect ratio */}
                    <div className="aspect-[9/16] sm:aspect-[9/14] lg:aspect-[9/16] max-h-[70vh] lg:max-h-[85vh]">
                      <iframe
                        src={selectedProject.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {/* Gradient overlay at bottom for blend */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-carbon-800 to-transparent lg:hidden" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
