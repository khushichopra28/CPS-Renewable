import { useState, useEffect } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { SITE_CONFIG } from '../config/site'
import { useTheme } from '../hooks/useTheme'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Product & Services', path: '/products-services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  // Track window scroll for glass styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and listen for Escape key on mobile menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/80 backdrop-blur-xl border-b border-panel-border shadow-glass py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 relative bg-panel border border-panel-border rounded-full p-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive: active }) =>
                    `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full z-10 ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`
                  }
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </NavLink>
              )
            })}
          </nav>

          {/* Right controls: Theme toggle & CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2.5 rounded-full bg-panel border border-panel-border text-slate-300 hover:text-sun hover:border-sun/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Quote CTA Button */}
            <Link
              to="/contact?subject=quote"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-panel border border-panel-border p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              <span
                className={`block h-0.5 w-5 bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white rounded-full my-1.5 transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden bg-ink/95 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Header row inside overlay */}
            <div className="flex items-center justify-between pb-6 border-b border-panel-border">
              <Logo />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2.5 rounded-full bg-panel border border-panel-border text-slate-300"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2.5 rounded-full bg-panel border border-panel-border text-slate-300 hover:text-white"
                >
                  <span className="block w-5 h-5 relative flex items-center justify-center">
                    <span className="absolute w-5 h-0.5 bg-white rotate-45" />
                    <span className="absolute w-5 h-0.5 bg-white -rotate-45" />
                  </span>
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 flex flex-col justify-center py-8 space-y-4">
              {NAV_LINKS.map((link, idx) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-heading text-2xl font-bold py-2 transition-colors ${
                        isActive ? 'text-sun pl-2 border-l-2 border-sun' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Bottom Actions inside mobile drawer */}
            <div className="pt-6 border-t border-panel-border space-y-3">
              <Link
                to="/contact?subject=quote"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading font-semibold text-ink bg-sun-ember text-center shadow-glow-sun"
              >
                <span>Request a Fast Quote</span>
                <ArrowRight size={16} />
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.primaryTel}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-panel border border-panel-border text-xs font-medium text-slate-200"
                >
                  <Phone size={14} className="text-volt" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                    SITE_CONFIG.whatsapp.defaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-panel border border-panel-border text-xs font-medium text-slate-200"
                >
                  <MessageCircle size={14} className="text-volt" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
