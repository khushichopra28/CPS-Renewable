import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQS } from '../config/data'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0) // First open by default

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        const headingId = `faq-heading-${faq.id}`
        const contentId = `faq-content-${faq.id}`

        return (
          <div
            key={faq.id}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? 'bg-panel border-sun/40 shadow-glow-sun/20'
                : 'bg-panel/60 border-panel-border hover:border-white/20'
            }`}
          >
            <button
              type="button"
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => handleToggle(index)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sun rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-sun/20 text-sun' : 'bg-panel text-slate-400'
                  }`}
                >
                  <HelpCircle size={18} />
                </div>
                <span className="font-heading text-lg font-semibold text-white">
                  {faq.question}
                </span>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 flex-shrink-0"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-panel-border/50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
