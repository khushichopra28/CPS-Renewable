import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Headset, Shield, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { SITE_CONFIG } from '../config/site'

export default function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28 relative bg-ink overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sun/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Company Overview"
          title="Innovation. Sustainability."
          highlight="Trust."
          subtitle="Empowering EPC contractors, industrial facilities, and regional communities with dependable clean-energy technology."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Main Story Bento (Large 7 cols) */}
          <Reveal className="md:col-span-2 lg:col-span-7 h-full">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl flex flex-col justify-between glass-panel-hover group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sun/5 rounded-full blur-2xl group-hover:bg-sun/10 transition-colors pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-sun/10 border border-sun/30 flex items-center justify-center text-sun mb-6">
                  <Zap size={24} />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Building India’s clean energy supply backbone from Chennai to 28 states.
                </h3>

                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  CPS Renewables is one of India&apos;s fastest-growing suppliers of renewable energy products and solutions. We bridge the gap between world-class component manufacturers and on-ground solar/wind installers, ensuring consistent stock availability, verified specifications, and technical engineering consultation.
                </p>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Headquartered in Perambur, Chennai, with our central warehousing hub in Madhavaram, our team brings over a decade of hands-on industrial domain expertise to every partnership.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-panel-border flex items-center justify-between">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-sun hover:text-sun-soft transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Discover Our Full Story</span>
                  <ArrowRight size={16} />
                </Link>
                <span className="font-mono text-xs text-slate-500">EST. 10+ YEARS EXP</span>
              </div>
            </div>
          </Reveal>

          {/* Right Bento Column: Two stacked cards (5 cols) */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-6">
            {/* Tile 1: Pan-India Reach */}
            <Reveal delay={0.1} className="flex-1">
              <div className="p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl flex flex-col justify-between glass-panel-hover group relative overflow-hidden h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-volt/10 border border-volt/30 flex items-center justify-center text-volt">
                    <Globe size={22} />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-volt/10 text-volt border border-volt/20">
                    28 States
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">
                    Pan-India Distribution Hub
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Strategically located warehouse in Madhavaram, Chennai, equipped for same-day dispatch and nationwide freight tracking for rapid EPC delivery.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-panel-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-volt" />
                  <span>Express Transit Logistics Network</span>
                </div>
              </div>
            </Reveal>

            {/* Tile 2: 24/7 Dedicated Support */}
            <Reveal delay={0.2} className="flex-1">
              <div className="p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl flex flex-col justify-between glass-panel-hover group relative overflow-hidden h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky/10 border border-sky/30 flex items-center justify-center text-sky">
                    <Headset size={22} />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-sky/10 text-sky border border-sky/20">
                    24/7 Support
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-xl font-bold text-white mb-2">
                    In-House Technical Engineers
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Direct access to experienced electrical and solar engineers for SLD review, BOS compatibility, and on-site commissioning troubleshooting.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-panel-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Shield size={13} className="text-sky" />
                  <span>{SITE_CONFIG.responsePromise}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
