import { useState, useRef } from 'react'
import {
  Handshake,
  BookOpen,
  ShieldCheck,
  Truck,
  Wrench,
  Headset,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { WHY_CHOOSE_US } from '../config/data'

const ICON_MAP = {
  Handshake,
  BookOpen,
  ShieldCheck,
  Truck,
  Wrench,
  Headset,
}

export default function WhyChoose() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-20 lg:py-28 relative bg-ink-2 overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 184, 0, 0.08), transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Engineered for Reliability."
          highlight="Built for Scale."
          subtitle="We eliminate project bottlenecks through ready buffer stock, certified tier-1 quality, and engineering excellence."
        />

        {/* Asymmetric Bento Grid (mix of span-2 and span-1 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || ShieldCheck
            // First and fourth items have larger prominence in bento
            const isLarge = index === 0 || index === 3

            return (
              <Reveal
                key={item.id}
                delay={0.08 * index}
                className={isLarge ? 'lg:col-span-2' : 'lg:col-span-1'}
              >
                <div className="h-full p-8 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl relative overflow-hidden group hover:border-sun/50 transition-all duration-300 flex flex-col justify-between">
                  {/* Subtle inner radial glow on hover */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-sun/0 group-hover:bg-sun/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sun/15 to-ember/15 border border-sun/30 flex items-center justify-center text-sun group-hover:scale-110 group-hover:shadow-glow-sun transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sun transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-panel-border/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>CPS ASSURANCE</span>
                    <span className="text-sun">0{index + 1}</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
