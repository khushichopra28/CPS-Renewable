import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'

export default function AtelierHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showReelModal, setShowReelModal] = useState(false)

  // Prevent background scroll when mobile menu or modal is open
  useEffect(() => {
    if (menuOpen || showReelModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, showReelModal])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setShowReelModal(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Studio', href: '#studio' },
    { label: 'Insights', href: '#insights' },
  ]

  const mobileNavLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Studio', href: '#studio' },
    { label: 'Insights', href: '#insights' },
    { label: 'Reach Out', href: '#reach-out' },
  ]

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4"
      />

      {/* Subtle overlay gradient to ensure crisp typography contrast across video frames */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <header className="w-full px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center justify-between">
          {/* Left Side: Logo + Desktop Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="#"
              className="text-white font-semibold text-lg tracking-tight font-sans hover:opacity-90 transition-opacity"
            >
              Atelier
            </a>

            {/* Desktop Nav Links (hidden on mobile, shown md+) */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side: Reach Out + Let's Talk + Hamburger */}
          <div className="flex items-center gap-6">
            {/* Reach Out link (hidden mobile) */}
            <a
              href="#reach-out"
              className="hidden md:inline-block text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
            >
              Reach Out
            </a>

            {/* Let's Talk button (hidden mobile) */}
            <a
              href="#talk"
              className="hidden md:inline-flex items-center justify-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Let&apos;s Talk
            </a>

            {/* Hamburger Button (shown only on mobile, md:hidden) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-[6px] focus:outline-none z-50 p-1 cursor-pointer"
            >
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen
                    ? 'w-6 rotate-45 translate-y-[8px]'
                    : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen
                    ? 'w-4 opacity-0 scale-x-0'
                    : 'w-4 opacity-100'
                }`}
              />
              <span
                className={`h-[2px] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  menuOpen
                    ? 'w-6 -rotate-45 -translate-y-[8px]'
                    : 'w-6'
                }`}
              />
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center">
          {/* Main Heading */}
          <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl tracking-normal">
            UX <span className="italic font-instrument-serif font-normal">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif font-normal">for</span> BOLD
            <br />
            VENTURES
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
            We shape digital products that define brands{' '}
            <br className="hidden sm:block" />
            and unlock exponential growth.
          </p>

          {/* Buttons Row */}
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <a
              href="#cases"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>See Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={() => setShowReelModal(true)}
              className="group inline-flex items-center justify-center gap-2 bg-transparent border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/60 active:scale-[0.98] w-full sm:w-auto cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white transition-transform duration-200 group-hover:scale-110" />
              <span>Watch Reel</span>
            </button>
          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay (fixed inset-0 z-50, md:hidden) */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex flex-col justify-between p-6 sm:p-8 bg-black/90 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Header: Matches navbar layout with logo + close button */}
        <div className="flex items-center justify-between py-2 border-b border-white/10 pb-5">
          <span className="text-white font-semibold text-lg tracking-tight font-sans">
            Atelier
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute h-[2px] w-6 bg-white rounded-full rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="absolute h-[2px] w-6 bg-white rounded-full -rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </div>
          </button>
        </div>

        {/* Nav links: Stacked vertically, centered, font-instrument-serif */}
        <nav className="flex flex-col justify-center my-auto w-full max-w-sm mx-auto">
          {mobileNavLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                transitionDelay: menuOpen ? `${150 + index * 80}ms` : '0ms',
              }}
              className={`block text-center text-4xl sm:text-5xl font-instrument-serif text-white border-b border-white/10 py-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:pl-4 hover:text-white/80 ${
                menuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Footer: Full-width Let's Talk button */}
        <div className="pt-4">
          <a
            href="#talk"
            onClick={handleLinkClick}
            style={{
              transitionDelay: menuOpen ? '550ms' : '0ms',
            }}
            className={`w-full block text-center bg-white text-black font-sans font-medium text-base rounded-full py-4 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] hover:bg-white/90 active:scale-[0.99] ${
              menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Optional Interactive Reel Modal */}
      {showReelModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fade-in"
          onClick={() => setShowReelModal(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Atelier Showreel — 2026
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowReelModal(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close showreel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de.mp4"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
