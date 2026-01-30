import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CutEdge Agency',
  description: 'Professional video editing agency specializing in high-impact edits that grab attention. Shorts, Reels, Ads, YouTube, and Corporate videos.',
  keywords: ['video editing', 'video production', 'content creation', 'social media', 'YouTube', 'TikTok', 'Reels'],
  openGraph: {
    title: 'CutEdge Agency | High-Impact Video Editing',
    description: 'Professional video editing agency specializing in high-impact edits that grab attention.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-carbon-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
