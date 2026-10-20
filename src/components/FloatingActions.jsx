import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, FileText, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '../config/site'

export default function FloatingActions() {
  const [showStickyPill, setShowStickyPill] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past 450px (typical hero height)
      setShowStickyPill(window.scrollY > 450)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.defaultMessage
  )}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Desktop Sticky "Request a Quote" Pill (hidden on mobile, appears after hero) */}
      <AnimatePresence>
        {showStickyPill && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block pointer-events-auto"
          >
            <Link
              to="/contact?subject=quote"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-ink/90 hover:bg-ink text-white text-xs font-semibold uppercase tracking-wider border border-sun/40 shadow-glow-sun/50 backdrop-blur-md transition-all duration-300 hover:border-sun hover:scale-105 group"
            >
              <div className="w-2 h-2 rounded-full bg-sun animate-pulse" />
              <span>Request a Quote</span>
              <ArrowRight
                size={14}
                className="text-sun group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <div className="pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with CPS Renewables on WhatsApp"
          className="relative flex items-center justify-center w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 group"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none" />
          <MessageCircle size={26} className="relative z-10 fill-white stroke-none" />
          
          {/* Tooltip on desktop */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-ink/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-white/10 hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}
