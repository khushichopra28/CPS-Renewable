import Reveal from './Reveal'

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <Reveal>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-4 border border-sun/30 bg-sun/10 text-sun ${centered ? 'mx-auto' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-sun animate-pulse" />
            {badge}
          </div>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          {title}{' '}
          {highlight && <span className="text-gradient-sun">{highlight}</span>}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
