import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { PRODUCTS } from '../config/data'

export default function ProductRail() {
  const scrollContainerRef = useRef(null)

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return
    const offset = direction === 'left' ? -380 : 380
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 relative bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="B2B Equipment Catalog"
            title="Engineered Products for"
            highlight="Renewable Scale"
            subtitle="Tier-1 photovoltaic modules, high-frequency inverters, DCR subsidy kits, and balance of systems with pan-India warranty."
            className="mb-0"
          />

          {/* Rail Scroll Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Scroll products left"
              className="p-3 rounded-2xl bg-panel border border-panel-border text-slate-300 hover:text-white hover:border-sun/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Scroll products right"
              className="p-3 rounded-2xl bg-panel border border-panel-border text-slate-300 hover:text-white hover:border-sun/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontally scrollable snap rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product, idx) => (
            <Reveal
              key={product.id}
              delay={0.06 * idx}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[360px]"
            >
              <div className="h-full p-6 sm:p-7 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl flex flex-col justify-between glass-panel-hover group relative overflow-hidden">
                <div>
                  {/* Category Pill & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sun font-semibold px-2.5 py-1 rounded-full bg-sun/10 border border-sun/20">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Tier-1 Sourced
                    </span>
                  </div>

                  {/* Product Illustration / Graphic */}
                  <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-white/[0.03] to-ink border border-panel-border overflow-hidden mb-5 flex items-center justify-center p-3 group-hover:border-sun/30 transition-colors">
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
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Deep-Link */}
                <div className="mt-6 pt-4 border-t border-panel-border/60">
                  <Link
                    to={`/products-services#${product.id}`}
                    className="inline-flex items-center justify-between w-full text-xs font-heading font-semibold text-white group-hover:text-sun transition-colors"
                  >
                    <span>View Specifications</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-sun group-hover:text-ink transition-colors">
                      <ArrowRight size={13} />
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Catalog CTA link */}
        <div className="mt-8 text-center">
          <Link
            to="/products-services"
            className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-slate-300 hover:text-sun transition-colors"
          >
            <span>Browse Complete Product & Services Catalog (All 7 Products & 11 Services)</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
