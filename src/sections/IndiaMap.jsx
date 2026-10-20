import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Truck, Clock, ShieldCheck, Warehouse, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { INDIA_MAP_CITIES } from '../config/data'
import { SITE_CONFIG } from '../config/site'

export default function IndiaMap() {
  const [activeCity, setActiveCity] = useState(
    INDIA_MAP_CITIES.find((c) => c.id === 'mumbai') || INDIA_MAP_CITIES[1]
  )

  // Chennai Hub coordinates in percentage
  const chennai = INDIA_MAP_CITIES.find((c) => c.isHub) || INDIA_MAP_CITIES[0]

  return (
    <section className="py-20 lg:py-28 relative bg-ink-2 overflow-hidden border-t border-panel-border">
      {/* Background glow behind Chennai */}
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Logistics & Dispatch Reach"
          title="Pan-India Delivery."
          highlight="Central Chennai Hub."
          subtitle="Direct express freight dispatches from our Madhavaram warehouse to project sites across all 28 states and union territories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* ─────────────────────────────────────────────────────────────
              LEFT: INTERACTIVE SVG MAP OF INDIA (7 cols)
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/3.8] max-w-xl mx-auto rounded-3xl bg-panel border border-panel-border p-4 sm:p-6 backdrop-blur-xl overflow-hidden shadow-glass">
              {/* Dotted engineering grid background */}
              <div className="absolute inset-0 dotted-grid opacity-20 pointer-events-none" />

              {/* Hand-built SVG map canvas */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full filter drop-shadow-lg"
              >
                {/* Simplified aesthetic stylized silhouette of India */}
                <path
                  d="M 36 12 
                     L 46 8 L 52 14 L 46 22 L 54 26 L 68 28 L 74 24 L 88 28 L 92 36 L 86 42 L 78 40 L 72 48 L 70 56 L 64 66 L 54 78 L 48 88 L 44 86 L 40 76 L 34 66 L 28 58 L 22 50 L 26 42 L 32 38 L 30 30 L 36 20 Z"
                  fill="rgba(255, 255, 255, 0.03)"
                  stroke="rgba(255, 184, 0, 0.25)"
                  strokeWidth="0.75"
                  strokeLinejoin="round"
                />

                {/* Regional internal latitude/longitude tech grids */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="1 3" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(255,255,255,0.04)" strokeDasharray="1 3" strokeWidth="0.5" />

                {/* Animated Dashed Route Lines from Chennai to each destination city */}
                {INDIA_MAP_CITIES.filter((c) => !c.isHub).map((city) => {
                  const isSelected = activeCity?.id === city.id
                  return (
                    <g key={`route-${city.id}`}>
                      {/* Route Path */}
                      <path
                        d={`M ${chennai.x} ${chennai.y} Q ${(chennai.x + city.x) / 2 + (city.x < chennai.x ? -3 : 3)} ${(chennai.y + city.y) / 2} ${city.x} ${city.y}`}
                        fill="none"
                        stroke={isSelected ? '#FFB800' : 'rgba(0, 229, 160, 0.25)'}
                        strokeWidth={isSelected ? '1.2' : '0.6'}
                        strokeDasharray={isSelected ? '2 2' : '1.5 2'}
                        className={isSelected ? 'animate-pulse' : ''}
                      />
                    </g>
                  )
                })}

                {/* Destination City Nodes */}
                {INDIA_MAP_CITIES.filter((c) => !c.isHub).map((city) => {
                  const isSelected = activeCity?.id === city.id
                  return (
                    <g
                      key={`city-${city.id}`}
                      onClick={() => setActiveCity(city)}
                      className="cursor-pointer group"
                    >
                      {/* Hit target for touch/mouse */}
                      <circle cx={city.x} cy={city.y} r="3" fill="transparent" />

                      {/* Visible node */}
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={isSelected ? '2' : '1.2'}
                        fill={isSelected ? '#FFB800' : '#00E5A0'}
                        className="transition-all duration-300"
                      />
                      {isSelected && (
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="3.5"
                          fill="none"
                          stroke="#FFB800"
                          strokeWidth="0.5"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  )
                })}

                {/* Chennai Hub Glowing Star Marker */}
                <g>
                  <circle
                    cx={chennai.x}
                    cy={chennai.y}
                    r="4"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="0.8"
                    className="animate-ping"
                  />
                  <circle cx={chennai.x} cy={chennai.y} r="2.5" fill="#FFB800" />
                  <circle cx={chennai.x} cy={chennai.y} r="1" fill="#050B14" />
                </g>
              </svg>

              {/* Floating Active City Tooltip Card */}
              {activeCity && (
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-ink/90 border border-sun/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-heading text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin size={14} className="text-sun" />
                      {activeCity.name}
                    </span>
                    <span className="text-[10px] font-mono text-volt bg-volt/10 border border-volt/20 px-2 py-0.5 rounded-full">
                      {activeCity.state}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-300 mt-2">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Truck size={12} className="text-sun" />
                      <span>Dispatch from Chennai:</span>
                    </div>
                    <div className="font-mono text-xs font-semibold text-sun pl-4">
                      {activeCity.delivery}
                    </div>
                    <p className="text-[11px] text-slate-400 pl-4">{activeCity.desc}</p>
                  </div>
                </div>
              )}

              {/* Legend overlay */}
              <div className="absolute bottom-3 right-4 flex items-center gap-3 text-[11px] font-mono bg-ink/80 border border-panel-border px-3 py-1.5 rounded-xl">
                <span className="flex items-center gap-1.5 text-sun">
                  <span className="w-2 h-2 rounded-full bg-sun" /> Chennai Hub
                </span>
                <span className="flex items-center gap-1.5 text-volt">
                  <span className="w-1.5 h-1.5 rounded-full bg-volt" /> Active Corridors
                </span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT: DISPATCH SPECIFICATIONS & STATE COVERAGE (5 cols)
              ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="p-6 rounded-3xl bg-panel border border-panel-border space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sun/10 border border-sun/30 flex items-center justify-center text-sun">
                    <Warehouse size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Madhavaram Central Facility
                    </h3>
                    <span className="text-xs font-mono text-volt">Pan-India Freight Dispatches</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Located right on the MRH Road highway corridor in Madhavaram, Chennai, our warehouse enables containerized truck movements without city traffic delays.
                </p>

                <div className="p-3.5 rounded-xl bg-ink border border-panel-border text-xs text-slate-400 space-y-1">
                  <strong className="text-slate-200 block">Warehouse Address:</strong>
                  <span>{SITE_CONFIG.warehouse.address}</span>
                </div>
              </div>
            </Reveal>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-panel border border-panel-border">
                <span className="font-mono text-3xl font-bold text-white block">28</span>
                <span className="text-xs font-heading font-medium text-slate-300">
                  States & UTs Delivered
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-panel border border-panel-border">
                <span className="font-mono text-3xl font-bold text-volt block">&lt;48h</span>
                <span className="text-xs font-heading font-medium text-slate-300">
                  Avg South India Transit
                </span>
              </div>
            </div>

            {/* Tap or Click City Buttons for Mobile / Quick Select */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                Select Corridor To Inspect Delivery Timeline:
              </span>
              <div className="flex flex-wrap gap-2">
                {INDIA_MAP_CITIES.filter((c) => !c.isHub).map((city) => (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => setActiveCity(city)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      activeCity?.id === city.id
                        ? 'bg-sun text-ink font-semibold shadow-glow-sun'
                        : 'bg-panel border border-panel-border text-slate-300 hover:text-white'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
