import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Zap, ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { PROOF_PROJECTS, SUPPLY_PARTNERS, TESTIMONIALS } from '../config/data'

export default function ProofSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="py-20 lg:py-28 relative bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─────────────────────────────────────────────────────────────
            (A) PROJECTS STRIP
            ───────────────────────────────────────────────────────────── */}
        <SectionHeading
          badge="Proof & Capabilities"
          title="Field-Tested Renewable"
          highlight="Deployments"
          subtitle="Representative projects powered by equipment sourced and supplied across our distribution network."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PROOF_PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={0.07 * idx}>
              <div className="h-full rounded-3xl bg-panel border border-panel-border overflow-hidden glass-panel-hover flex flex-col justify-between group">
                <div>
                  {/* Project Image / Visual Placeholder */}
                  <div className="relative w-full h-44 bg-gradient-to-br from-panel to-ink overflow-hidden border-b border-panel-border flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sun text-ink shadow-glow-sun">
                      {project.capacity}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-volt block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-sun transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                      <MapPin size={13} className="text-sun flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Hover reveal impact note */}
                <div className="p-4 bg-white/[0.02] border-t border-panel-border/60 text-xs text-slate-300 flex items-center gap-2">
                  <Zap size={14} className="text-volt flex-shrink-0" />
                  <span className="truncate">{project.impact}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            (B) SUPPLY PARTNERS MARQUEE
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-20 pt-4 border-t border-panel-border">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Authorized Tier-1 Supply Network & Component Alliances
            </span>
          </div>

          <div className="w-full py-4 bg-panel/40 border border-panel-border rounded-2xl overflow-hidden whitespace-nowrap backdrop-blur-md">
            <div className="inline-flex items-center gap-8 animate-[marquee_20s_linear_infinite]">
              {[...SUPPLY_PARTNERS, ...SUPPLY_PARTNERS, ...SUPPLY_PARTNERS].map((partner, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-ink/60 border border-white/5 text-xs font-mono text-slate-300"
                >
                  <Shield size={14} className="text-sun" />
                  <span className="font-semibold text-white">{partner.name}</span>
                  <span className="text-[10px] text-slate-400 uppercase">({partner.type})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            (C) TESTIMONIALS SLIDER
            ───────────────────────────────────────────────────────────── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-panel border border-panel-border backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sun/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sun/10 border border-sun/30 flex items-center justify-center text-sun">
                <Quote size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Partner Feedback
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  What EPC Contractors & Integrators Say
                </span>
              </div>
            </div>

            {/* Slider navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xl bg-panel border border-panel-border text-slate-300 hover:text-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-mono text-xs text-slate-400 px-2">
                0{currentTestimonial + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-2.5 rounded-xl bg-panel border border-panel-border text-slate-300 hover:text-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-slate-200 leading-relaxed italic">
                &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-panel-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {TESTIMONIALS[currentTestimonial].author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {TESTIMONIALS[currentTestimonial].organization} · {TESTIMONIALS[currentTestimonial].location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-sun bg-sun/10 border border-sun/20 px-3 py-1 rounded-full self-start sm:self-auto">
                  Verified Contractor Partner
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
