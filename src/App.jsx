import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import ProductsServices from './pages/ProductsServices'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useReducedMotion } from './hooks/useReducedMotion'

function AnimatedRoutes() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-sun selection:text-ink">
      {/* Accessible Skip-to-Content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sun text-ink font-semibold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Scroll manager */}
      <ScrollToTop />

      {/* Main Page Router */}
      <main id="main-content" className="flex-1">
        <AnimatedRoutes />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Sticky Quote & WhatsApp Actions */}
      <FloatingActions />
    </div>
  )
}
