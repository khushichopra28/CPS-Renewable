import { useState, useEffect, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import SpecDrawer from '../components/SpecDrawer'
import { PRODUCTS, SERVICES } from '../config/data'

const CATEGORIES = ['All', 'Solar', 'Storage', 'Wind', 'BOS', 'EV', 'Services']

const WHY_BUY_FROM_US = [
  { title: 'Tier-1 Quality Products', desc: 'Direct sourcing from audited, global and Indian Tier-1 manufacturers.' },
  { title: 'Competitive B2B Pricing', desc: 'Transparent wholesale price brackets tailored for EPC contractor margins.' },
  { title: 'Pan-India Delivery', desc: 'Central dispatch from Chennai warehouse reaching 28 states with cargo tracking.' },
  { title: 'In-House Engineering Team', desc: 'Dedicated technical engineers for string calculations and BOS matching.' },
  { title: 'After-Sales Support', desc: 'Prompt assistance on warranty processing, spare parts, and system upgrades.' },
  { title: 'Warranty-Backed Supply', desc: 'Comprehensive 10 to 30-year manufacturer guarantees with local claims handling.' },
]

export default function ProductsServices() {
  useSEO({
    title: 'Products & Services — Solar, Wind & BOS Catalog',
    description:
      'Explore CPS Renewables complete catalog: Tier-1 solar panels, string/hybrid inverters, DCR solar kits, wind turbines, mounting structures, and 11 clean-energy services.',
  })

  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDrawerProduct, setActiveDrawerProduct] = useState(null)

  // Handle URL hash deep-link (e.g. /products-services#solar-panels)
  useEffect(() => {
    if (location.hash) {
      const productId = location.hash.replace('#', '')
      const foundProduct = PRODUCTS.find((p) => p.id === productId)
      if (foundProduct) {
        setActiveDrawerProduct(foundProduct)
      }
    }
  }, [location.hash])

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="pt-24 min-h-screen bg-ink">
      {/* ─────────────────────────────────────────────────────────────
          1. PAGE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-ink-2 border-b border-panel-border">
        <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-6 bg-sun/10 text-sun border border-sun/30 shadow-glow-sun/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sun animate-pulse" />
              <span>Full Portfolio & Specifications</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl">
              Complete renewable energy{' '}
              <span className="text-gradient-sun">solutions.</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg sm:text-xl font-light max-w-3xl leading-relaxed">
              From panels and inverters to full EPC support, everything you need to build, power and maintain your renewable energy project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE PRODUCT EXPLORER (With Search, Filter Chips & Drawer)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Hardware Catalog"
            title="Interactive Product"
            highlight="Explorer"
            subtitle="Click any product to inspect detailed technical specifications, certifications, and application guidelines."
          />

          {/* Search Bar & Filter Chips */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-panel-border">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-sun text-ink font-semibold shadow-glow-sun'
                      : 'bg-panel border border-panel-border text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[260px]">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search products, TOPCon, DCR..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search renewable energy products"
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-ink-2 border border-panel-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sun"
              />
            </div>
          </div>

          {/* Product Cards Grid with Framer Motion Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    id={product.id}
                    onClick={() => setActiveDrawerProduct(product)}
                    className="h-full p-6 sm:p-7 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl flex flex-col justify-between glass-panel-hover group cursor-pointer relative overflow-hidden"
                  >
                    <div>
                      {/* Category & Origin Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-sun font-semibold px-2.5 py-1 rounded-full bg-sun/10 border border-sun/20">
                          {product.category}
                        </span>
                        <span className="text-[10px] font-mono text-volt bg-volt/10 border border-volt/20 px-2 py-0.5 rounded-full">
                          Ready Stock
                        </span>
                      </div>

                      {/* Product Visual Illustration */}
                      <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-white/[0.02] to-ink border border-panel-border overflow-hidden mb-5 flex items-center justify-center p-4 group-hover:border-sun/40 transition-colors">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-sun transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {product.shortDesc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer with Inspect Trigger */}
                    <div className="mt-6 pt-4 border-t border-panel-border/60 flex items-center justify-between text-xs font-heading font-semibold text-white group-hover:text-sun transition-colors">
                      <span>Open Technical Specs</span>
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sun group-hover:text-ink transition-colors">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 p-8 rounded-3xl bg-panel border border-panel-border">
              <p className="text-slate-400 text-sm">
                No products match &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-sun bg-sun/10 border border-sun/20"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SERVICES SHOWCASE (11 Services Bento Grid)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative bg-ink-2 border-t border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering & Deployment Services"
            title="11 End-to-End Clean"
            highlight="Energy Services"
            subtitle="From turnkey rooftop execution to utility-scale solar parks and solar street lighting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <Reveal key={service.id} delay={0.05 * idx}>
                <div className="h-full rounded-3xl bg-panel border border-panel-border overflow-hidden glass-panel-hover flex flex-col justify-between group">
                  <div>
                    {/* Visual Graphic */}
                    <div className="relative w-full h-44 bg-gradient-to-br from-panel to-ink overflow-hidden border-b border-panel-border flex items-center justify-center p-3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-volt block mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-sun transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      {/* Service feature bullets */}
                      <div className="space-y-1.5 border-t border-panel-border/60 pt-3">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-sun flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Micro-link to contact */}
                  <div className="p-4 bg-white/[0.02] border-t border-panel-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">TURNKEY / B2B</span>
                    <Link
                      to={`/contact?subject=service&serviceName=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sun hover:text-sun-soft transition-colors"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY BUY FROM US CHECKLIST TILES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative bg-ink border-t border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner Benefits"
            title="The CPS Renewables"
            highlight="Advantage"
            subtitle="Why leading EPC contractors and system integrators choose us as their sole equipment supply channel."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_BUY_FROM_US.map((item, idx) => (
              <Reveal key={idx} delay={0.06 * idx}>
                <div className="p-6 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl h-full flex flex-col justify-between group hover:border-sun/40 transition-colors">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sun/10 border border-sun/20 text-sun flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
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
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CUSTOM QUOTATION BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink-2 border-t border-panel-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-panel border border-sun/30 backdrop-blur-2xl shadow-glow-sun/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-sun/5 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Need a Custom Quotation?
              </h2>

              <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Share your project requirements and our team will get back with product recommendations, pricing and delivery timelines within one business day.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact?subject=quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/#calculator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-heading font-medium text-white bg-panel border border-panel-border hover:bg-white/10 transition-colors"
                >
                  <span>Use Solar Calculator</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Slide-over Specification Drawer */}
      <SpecDrawer
        product={activeDrawerProduct}
        isOpen={Boolean(activeDrawerProduct)}
        onClose={() => setActiveDrawerProduct(null)}
      />
    </div>
  )
}
