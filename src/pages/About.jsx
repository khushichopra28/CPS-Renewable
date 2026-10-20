import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Check,
  ArrowRight,
  ExternalLink,
  Users,
  TrendingDown,
  Award,
  Leaf,
  Sparkles,
  Sun,
  Wind,
  Layers,
  Wrench,
  Truck,
  Building2,
  Warehouse,
  MapPin,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTABanner from '../sections/CTABanner'
import { VALUES, JOURNEY_MILESTONES, TRUST_CHECKLIST } from '../config/data'
import { SITE_CONFIG } from '../config/site'

const VALUE_ICONS = {
  Users,
  TrendingDown,
  ShieldCheck,
  Award,
  Leaf,
  Sparkles,
}

const WHAT_WE_DO = [
  {
    title: 'Solar Energy Solutions',
    desc: 'Supply of high-efficiency Mono PERC, TOPCon and bifacial PV modules alongside tier-1 string and central inverters.',
    icon: Sun,
  },
  {
    title: 'Wind Energy Products',
    desc: 'Small wind turbines (1 kW to 20 kW), hybrid solar-wind charge controllers, and durable monopole tower structures.',
    icon: Wind,
  },
  {
    title: 'DCR Solar Kits',
    desc: 'Ready-to-install one-box kits with 100% domestic content requirement compliance for PM Surya Ghar subsidy schemes.',
    icon: Layers,
  },
  {
    title: 'Technical Expertise',
    desc: 'In-house electrical and solar engineering consultation, SLD reviews, string sizing, and commissioning support.',
    icon: Wrench,
  },
  {
    title: 'Supply Chain Network',
    desc: 'Central warehouse in Madhavaram, Chennai offering rapid dispatch and express freight tracking across 28 states.',
    icon: Truck,
  },
  {
    title: 'B2B Solutions',
    desc: 'Dedicated wholesale pricing, tailored inventory reservations, and long-term supply agreements for EPC contractors.',
    icon: Building2,
  },
]

export default function About() {
  useSEO({
    title: 'About Us — Innovation, Sustainability & Trust',
    description:
      'Learn about CPS Renewables LLP: our mission to accelerate India’s clean energy transition, our Madhavaram warehouse, and our decade of engineering depth.',
  })

  const [activeValue, setActiveValue] = useState(null)

  return (
    <div className="pt-24 min-h-screen bg-ink">
      {/* ─────────────────────────────────────────────────────────────
          1. ABOUT PAGE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-ink-2 border-b border-panel-border">
        <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-6 bg-sun/10 text-sun border border-sun/30 shadow-glow-sun/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sun animate-pulse" />
              <span>About CPS Renewables</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl">
              Innovation. Sustainability.{' '}
              <span className="text-gradient-sun">Trust.</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg sm:text-xl font-light max-w-3xl leading-relaxed">
              We are powering India’s clean energy revolution by delivering dependable solar, wind, and storage technology with transparent B2B partnership.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. COMPANY OVERVIEW SPLIT LAYOUT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-volt/10 text-volt border border-volt/20 mb-3">
                  <span>Our Heritage & Vision</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Building India’s clean energy backbone.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-slate-300 text-base leading-relaxed">
                  CPS Renewables LLP is one of India&apos;s fastest-growing suppliers of renewable energy products and turnkey equipment solutions. With deep roots in Chennai, Tamil Nadu, we bridge global manufacturing excellence and local project execution, empowering EPC contractors, commercial facilities, and residential installers.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  We work closely with reputed, certified Tier-1 domestic and international manufacturers. Every module, inverter, and structural clamp that leaves our warehouse meets stringent ALMM and BIS benchmarks, ensuring resilient generation in diverse Indian climates.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Our experienced engineering team brings over a decade of hands-on industrial knowledge. We don’t just ship boxes; we review electrical single-line diagrams, verify string-voltage ratios, and provide ongoing technical guidance so your installations perform at peak yield for decades.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                  <div className="p-3.5 rounded-xl bg-panel border border-panel-border flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sun" />
                    <span>ALMM & BIS Approved Products</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-panel border border-panel-border flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-volt" />
                    <span>Central Chennai Warehouse</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Visual / Facility Image (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative rounded-3xl p-2 bg-gradient-to-br from-panel-border to-transparent border border-panel-border overflow-hidden shadow-glass group">
                  <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-ink-2 flex items-center justify-center">
                    <img
                      src="/images/about/team-inspection.svg"
                      alt="CPS Renewables Engineering Team & Quality Inspection"
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-ink/90 border border-panel-border backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-mono text-sun mb-1">
                        <ShieldCheck size={14} />
                        <span>Quality Assurance Protocol</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        100% pre-dispatch inspection on module EL imaging and inverter flash reports.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. MISSION & VISION PANELS WITH GHOSTED NUMERALS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink-2 border-y border-panel-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Panel */}
            <Reveal>
              <div className="p-8 sm:p-12 rounded-3xl bg-panel border border-panel-border relative overflow-hidden h-full flex flex-col justify-between group glass-panel-hover">
                <div
                  className="absolute -right-4 -bottom-10 font-heading font-black text-9xl text-white/[0.03] select-none pointer-events-none group-hover:text-sun/[0.06] transition-colors"
                  aria-hidden="true"
                >
                  01
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-sun bg-sun/10 border border-sun/20 mb-6">
                    <span>Our Mission</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                    Accelerating India’s Clean Transition
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    &ldquo;{SITE_CONFIG.mission}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-panel-border/60 relative z-10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sun" />
                  <span>Measurable Carbon Abatement Focus</span>
                </div>
              </div>
            </Reveal>

            {/* Vision Panel */}
            <Reveal delay={0.15}>
              <div className="p-8 sm:p-12 rounded-3xl bg-panel border border-panel-border relative overflow-hidden h-full flex flex-col justify-between group glass-panel-hover">
                <div
                  className="absolute -right-4 -bottom-10 font-heading font-black text-9xl text-white/[0.03] select-none pointer-events-none group-hover:text-volt/[0.06] transition-colors"
                  aria-hidden="true"
                >
                  02
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-volt bg-volt/10 border border-volt/20 mb-6">
                    <span>Our Vision</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                    India’s Most Trusted Provider
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    &ldquo;{SITE_CONFIG.vision}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-panel-border/60 relative z-10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-volt" />
                  <span>Nationwide Accessibility & Reliability</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CORE VALUES INTERACTIVE GRID
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Six Pillars of Our"
            highlight="Commitment"
            subtitle="The foundational standards that govern our vendor selections, customer interactions, and delivery promises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = VALUE_ICONS[val.icon] || Sparkles
              const isExpanded = activeValue === val.id

              return (
                <Reveal key={val.id} delay={0.06 * idx}>
                  <div
                    onMouseEnter={() => setActiveValue(val.id)}
                    onMouseLeave={() => setActiveValue(null)}
                    className="p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl h-full flex flex-col justify-between glass-panel-hover transition-all duration-300 group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-sun/10 border border-sun/30 text-sun flex items-center justify-center group-hover:scale-110 group-hover:bg-sun group-hover:text-ink transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-sun transition-colors">
                        {val.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-panel-border/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-sun" />
                      <span>Value Standard</span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHAT WE DO: 6 CAPABILITY CARDS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink-2 border-t border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Spectrum Capabilities"
            title="Comprehensive Clean Energy"
            highlight="Solutions"
            subtitle="From component wholesale to technical coordination, we streamline renewable project execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_DO.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={idx} delay={0.07 * idx}>
                  <div className="p-7 rounded-3xl bg-panel border border-panel-border backdrop-blur-md h-full flex flex-col justify-between group hover:border-sun/40 transition-colors">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-volt/10 border border-volt/20 text-volt flex items-center justify-center mb-5 group-hover:bg-volt group-hover:text-ink transition-colors">
                        <Icon size={20} />
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-sun transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. JOURNEY TIMELINE (Flagged TODO for real dates)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative bg-ink overflow-hidden border-t border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Growth & Milestones"
            title="A Decade of Focused"
            highlight="Execution"
            subtitle="How we evolved from industrial renewable specialists into a nationwide supply network."
          />

          <div className="relative mt-12">
            {/* Central timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-sun via-volt to-transparent opacity-40" />

            <div className="space-y-10">
              {JOURNEY_MILESTONES.map((mile, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <Reveal key={idx} delay={0.08 * idx}>
                    <div
                      className={`flex flex-col md:flex-row items-center gap-6 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Content Card */}
                      <div className="w-full md:w-[46%] p-6 sm:p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl">
                        <span className="font-mono text-xs font-bold text-sun uppercase tracking-wider block mb-1">
                          Year {mile.year}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">
                          {mile.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {mile.desc}
                        </p>
                      </div>

                      {/* Center Node */}
                      <div className="w-10 h-10 rounded-full bg-ink border-2 border-sun text-sun flex items-center justify-center font-mono text-xs font-bold shadow-glow-sun z-10 flex-shrink-0">
                        {idx + 1}
                      </div>

                      {/* Spacer for alternate layout */}
                      <div className="hidden md:block w-[46%]" />
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. TRUST CHECKLIST & WAREHOUSE SPOTLIGHT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink-2 border-t border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Checklist (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-volt bg-volt/10 border border-volt/20 mb-2">
                  <span>Partner Reassurance</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Why Contractors & EPCs Trust CPS Renewables
                </h2>
                <p className="text-slate-400 text-sm sm:text-base">
                  We treat project deadlines with absolute urgency, maintaining live buffer stocks to prevent costly commissioning delays.
                </p>
              </Reveal>

              <div className="space-y-4 pt-2">
                {TRUST_CHECKLIST.map((item, i) => (
                  <Reveal key={i} delay={0.06 * i}>
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-panel border border-panel-border/70 hover:border-sun/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-volt/10 text-volt flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?subject=partnership"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all"
                >
                  <span>Partner With Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Warehouse Facility Spotlight (6 cols) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-2xl space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-sun/10 border border-sun/30 text-sun flex items-center justify-center">
                        <Warehouse size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white">
                          Madhavaram Logistics Facility
                        </h3>
                        <span className="text-xs font-mono text-volt">
                          Chennai Central Dispatch Hub
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-sun bg-sun/10 border border-sun/20 px-3 py-1 rounded-full">
                      Pan-India Dispatch
                    </span>
                  </div>

                  <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-ink border border-panel-border flex items-center justify-center">
                    <img
                      src="/images/about/warehouse-chennai.svg"
                      alt="CPS Renewables Madhavaram Central Warehouse"
                      className="w-full h-full object-cover filter brightness-95"
                    />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our modern warehousing facility supports pan-India distribution with efficient inventory management and rapid dispatch to project sites.
                  </p>

                  <div className="p-4 rounded-2xl bg-ink/70 border border-panel-border text-xs text-slate-300 flex items-start gap-2.5">
                    <MapPin size={16} className="text-sun flex-shrink-0 mt-0.5" />
                    <span>{SITE_CONFIG.warehouse.address}</span>
                  </div>

                  <a
                    href={SITE_CONFIG.warehouse.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-panel border border-panel-border hover:border-sun/40 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} className="text-sun" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Shared CTA Banner */}
      <CTABanner />
    </div>
  )
}
