import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { STATS } from '../config/data'

export default function StatsStrip() {
  return (
    <section className="py-16 relative bg-ink-2 border-y border-panel-border overflow-hidden">
      {/* Background glow line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sun/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.id} delay={0.08 * idx}>
              <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
                {/* Number Counter */}
                <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 group-hover:text-sun transition-colors">
                  <Counter
                    endValue={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isString={stat.isString}
                    stringValue={stat.stringValue}
                  />
                </div>

                {/* Label */}
                <h3 className="font-heading text-sm sm:text-base font-semibold text-slate-200 tracking-tight">
                  {stat.label}
                </h3>

                {/* Subtext */}
                <p className="mt-1 text-xs text-slate-400 font-normal max-w-[200px]">
                  {stat.subtext}
                </p>

                {/* Glowing divider between items on desktop */}
                {idx < STATS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
