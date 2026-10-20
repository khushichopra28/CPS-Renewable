import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight, ShieldCheck, Tag, Info } from 'lucide-react'

export default function SpecDrawer({ product, isOpen, onClose }) {
  const drawerRef = useRef(null)

  // Escape key and scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!product) return null

  const quoteUrl = `/contact?subject=quote&product=${encodeURIComponent(
    product.name
  )}&projectType=${encodeURIComponent(
    product.category === 'Solar' ? 'Commercial' : 'EPC / contractor supply'
  )}`

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Slide-over Panel */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            className="relative w-full max-w-2xl bg-ink-2 border-l border-panel-border shadow-2xl flex flex-col h-full z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-panel-border flex items-start justify-between bg-ink/50">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium uppercase tracking-wider bg-sun/10 text-sun border border-sun/20">
                    {product.category}
                  </span>
                  <span className="text-xs font-mono text-volt flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-volt" />
                    In-Stock at Chennai Hub
                  </span>
                </div>
                <h2 id="drawer-title" className="font-heading text-2xl font-bold text-white">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1">{product.headline}</p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close specification drawer"
                className="p-2 rounded-xl bg-panel border border-panel-border text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Product Hero Image / Illustration */}
              <div className="relative w-full h-56 rounded-2xl bg-gradient-to-br from-panel to-ink border border-panel-border overflow-hidden flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-panel border border-panel-border text-slate-300"
                  >
                    <Tag size={12} className="text-sun" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-2">
                  Product Overview
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-3">
                  Key Technical Features
                </h3>
                <div className="space-y-2.5">
                  {product.keyFeatures?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-md bg-volt/10 text-volt flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Applications */}
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-3">
                  Typical Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.typicalApplications?.map((app, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-panel border border-panel-border text-xs text-slate-300 font-medium"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                    Technical Specifications
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 italic">
                    Typical ranges, confirm with our team
                  </span>
                </div>

                <div className="border border-panel-border rounded-xl overflow-hidden bg-panel">
                  <table className="w-full text-left text-xs border-collapse">
                    <tbody>
                      {product.specifications?.map((spec, i) => (
                        <tr
                          key={i}
                          className="border-b border-panel-border last:border-b-0 hover:bg-white/[0.02]"
                        >
                          <td className="py-3 px-4 font-mono font-medium text-slate-400 bg-white/[0.01] w-2/5">
                            {spec.param}
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-200">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance & Quality Note */}
              <div className="p-4 rounded-xl bg-volt/5 border border-volt/20 flex items-start gap-3">
                <ShieldCheck size={18} className="text-volt flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-volt block mb-0.5">Assured Quality & Warranty</strong>
                  All equipment supplied by CPS Renewables comes with manufacturer warranties, factory test flash reports, and ALMM / BIS compliance certificates for seamless project commissioning.
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-panel-border bg-ink/70 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={quoteUrl}
                onClick={onClose}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-heading font-semibold text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-200"
              >
                <span>Request Quote For This Product</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-panel border border-panel-border text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
