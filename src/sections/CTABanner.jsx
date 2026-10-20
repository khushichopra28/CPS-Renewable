import { Link } from 'react-router-dom'
import { ArrowRight, Wind, ShieldCheck, PhoneCall } from 'lucide-react'
import Reveal from '../components/Reveal'
import { SITE_CONFIG } from '../config/site'

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 relative bg-ink overflow-hidden border-t border-panel-border">
      {/* Background Graphic & Wind Turbine SVG Silhouette with Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-sun/20 via-ember/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-volt/10 rounded-full blur-3xl" />

        {/* Subtle Wind Turbine Overlay */}
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 w-full h-full opacity-10"
        >
          <path
            d="M900 400 L950 150 L1000 400 Z"
            fill="white"
          />
          <circle cx="950" cy="150" r="12" fill="white" />
          <line x1="950" y1="150" x2="950" y2="20" stroke="white" strokeWidth="4" />
          <line x1="950" y1="150" x2="830" y2="210" stroke="white" strokeWidth="4" />
          <line x1="950" y1="150" x2="1070" y2="210" stroke="white" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-6 bg-sun/10 text-sun border border-sun/30 shadow-glow-sun/20">
            <Wind size={14} />
            <span>Powering India's Clean Energy Transition</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Ready to power your next renewable energy project?
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Partner with CPS Renewables for reliable products, expert guidance, and pan-India delivery.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-base text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-medium text-base text-white bg-panel border border-panel-border hover:bg-white/10 hover:border-sun/40 transition-all duration-300 backdrop-blur-md"
            >
              <span>About Our Company</span>
            </Link>
          </div>

          {/* Quick trust reassurance footer */}
          <div className="mt-12 pt-8 border-t border-panel-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-volt" />
              <span>ALMM Approved Equipment</span>
            </span>
            <span className="flex items-center gap-1.5">
              <PhoneCall size={14} className="text-sun" />
              <span>Direct Engineering Consultation</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt" />
              <span>{SITE_CONFIG.responsePromise}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
