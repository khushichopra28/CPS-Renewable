import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown, Activity } from 'lucide-react'
import { SITE_CONFIG } from '../config/site'
import { useReducedMotion } from '../hooks/useReducedMotion'

const MARQUEE_ITEMS = [
  'Solar Panels',
  'Solar Inverters',
  'DCR Solar Kits',
  'Wind Energy',
  'Batteries & Storage',
  'EV Chargers',
  'EPC Contractor Support',
  'Mounting Structures',
  'BOS & Cables',
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [tickerKwh, setTickerKwh] = useState(SITE_CONFIG.ticker.baseKwh)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  // Mouse parallax tracking
  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 20
    const y = (clientY / window.innerHeight - 0.5) * 20
    setMousePos({ x, y })
  }

  // Live Clean Energy Generation Ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerKwh((prev) => prev + SITE_CONFIG.ticker.ratePerSecond)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Headline words for staggered reveal
  const headlineWords = ["Powering", "India's", "Renewable", "Future"]

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-ink select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND SCENE: Video (if present) OR Layered Animated SVG
          ───────────────────────────────────────────────────────────── */}
      {SITE_CONFIG.heroVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={SITE_CONFIG.heroVideo} type="video/mp4" />
        </video>
      )}

      {/* Layered Animated Procedural Scene (Canvas/SVG Sky, Horizon, Panels & Wind Turbines) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sky Gradient: Night-to-Sunrise aura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-[#0A1428] to-[#12233E]" />

        {/* Glowing Sun rising on horizon */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-36 sm:bottom-48 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-gradient-to-t from-sun via-ember to-transparent opacity-80 blur-2xl"
        />

        {/* Ambient Sun Disc */}
        <div
          style={{
            transform: `translate(-50%, ${mousePos.y * 0.2}px)`,
          }}
          className="absolute left-1/2 bottom-32 sm:bottom-44 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-sun/40 border border-sun/50 blur-sm shadow-glow-sun"
        />

        {/* Rolling Horizon & Solar Farm Silhouettes (Hand-crafted SVG) */}
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-64 sm:h-80 opacity-90"
          style={{
            transform: `translate(${mousePos.x * -0.3}px, 0px)`,
          }}
        >
          {/* Back Mountain Ridges */}
          <path
            d="M0 260Q360 210 720 250T1440 240V400H0Z"
            fill="#08101E"
            opacity="0.8"
          />

          {/* Front Terrain with Solar PV Arrays */}
          <path
            d="M0 300Q320 280 720 295T1440 280V400H0Z"
            fill="#050B14"
          />

          {/* Detailed Solar Panel Row Lines */}
          <g stroke="rgba(255, 184, 0, 0.25)" strokeWidth="1.2">
            {/* Ground solar table lines left */}
            <path d="M40 340 L160 310 L220 315 L100 350 Z" fill="rgba(10, 20, 38, 0.7)" />
            <path d="M120 350 L240 320 L300 325 L180 360 Z" fill="rgba(10, 20, 38, 0.7)" />
            <path d="M200 360 L320 330 L380 335 L260 370 Z" fill="rgba(10, 20, 38, 0.7)" />

            {/* Ground solar table lines right */}
            <path d="M1060 340 L1180 310 L1240 315 L1120 350 Z" fill="rgba(10, 20, 38, 0.7)" />
            <path d="M1140 350 L1260 320 L1320 325 L1200 360 Z" fill="rgba(10, 20, 38, 0.7)" />
            <path d="M1220 360 L1340 330 L1400 335 L1280 370 Z" fill="rgba(10, 20, 38, 0.7)" />
          </g>

          {/* Grid connection glowing power line pulses */}
          <path
            d="M0 370 Q720 360 1440 370"
            stroke="rgba(0, 229, 160, 0.3)"
            strokeDasharray="6 8"
            strokeWidth="1.5"
          />
        </svg>

        {/* 3 to 4 Rotating Wind Turbines with continuous blade rotation */}
        <div className="absolute inset-x-0 bottom-12 h-64 pointer-events-none">
          {/* Turbine 1 (Far Left) */}
          <div className="absolute left-[12%] bottom-16 sm:bottom-24 flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sun z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute w-0.5 h-10 sm:h-12 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rounded-full opacity-80" />
                <div className="absolute w-0.5 h-10 sm:h-12 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rotate-120 rounded-full opacity-80" />
                <div className="absolute w-0.5 h-10 sm:h-12 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rotate-240 rounded-full opacity-80" />
              </motion.div>
            </div>
            {/* Mast */}
            <div className="w-1 sm:w-1.5 h-24 sm:h-32 bg-gradient-to-b from-slate-400 to-slate-800 rounded-t" />
          </div>

          {/* Turbine 2 (Mid-Left, background) */}
          <div className="absolute left-[26%] bottom-28 sm:bottom-36 flex flex-col items-center opacity-70 scale-75">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-sun z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2" />
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2 rotate-120" />
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2 rotate-240" />
              </motion.div>
            </div>
            <div className="w-1 h-20 bg-slate-600" />
          </div>

          {/* Turbine 3 (Mid-Right, background) */}
          <div className="absolute right-[24%] bottom-24 sm:bottom-32 flex flex-col items-center opacity-70 scale-75">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-sun z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2" />
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2 rotate-120" />
                <div className="absolute w-0.5 h-8 bg-slate-400 origin-bottom top-0 -translate-y-1/2 rotate-240" />
              </motion.div>
            </div>
            <div className="w-1 h-22 bg-slate-600" />
          </div>

          {/* Turbine 4 (Far Right, foreground) */}
          <div className="absolute right-[10%] bottom-14 sm:bottom-22 flex flex-col items-center">
            <div className="relative w-18 h-18 sm:w-24 sm:h-24 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-volt z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="absolute w-0.5 h-12 sm:h-14 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rounded-full opacity-80" />
                <div className="absolute w-0.5 h-12 sm:h-14 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rotate-120 rounded-full opacity-80" />
                <div className="absolute w-0.5 h-12 sm:h-14 bg-slate-300 origin-bottom top-0 -translate-y-1/2 rotate-240 rounded-full opacity-80" />
              </motion.div>
            </div>
            {/* Mast */}
            <div className="w-1.5 h-28 sm:h-36 bg-gradient-to-b from-slate-300 to-slate-800 rounded-t" />
          </div>
        </div>

        {/* Tech Grid Overlay with soft mask */}
        <div className="absolute inset-0 engineering-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO CONTENT LAYER
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center flex-1">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-panel border border-sun/30 backdrop-blur-md shadow-glow-sun/20 mb-6"
        >
          <Sparkles size={14} className="text-sun" />
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-sun-soft">
            Renewable Energy · India
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-volt animate-ping" />
        </motion.div>

        {/* H1 Heading (Word-by-word staggered reveal) */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-4xl">
          {headlineWords.map((word, idx) => {
            const isGradient = word === 'Renewable' || word === 'Future'
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block mr-3 sm:mr-4 ${
                  isGradient ? 'text-gradient-sun' : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            )
          })}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed"
        >
          Delivering high-quality solar, wind, and renewable energy solutions with innovation, reliability, and industry expertise.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/contact?subject=quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-semibold text-base text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Fast Quote</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/products-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-medium text-base text-white bg-panel border border-white/20 hover:bg-white/10 hover:border-sun/50 transition-all duration-300 backdrop-blur-md"
          >
            <span>Explore Products</span>
          </Link>
        </motion.div>

        {/* Live Clean Energy Generation Monospace Ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-2xl bg-ink-2/90 border border-panel-border backdrop-blur-xl shadow-glass"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-volt animate-pulse" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-left">
            <span className="font-mono text-sm sm:text-base font-semibold text-white tracking-wider">
              {Math.floor(tickerKwh).toLocaleString('en-IN')}{' '}
              <span className="text-volt">kWh</span>
            </span>
            <span className="text-[11px] font-sans text-slate-400">
              Clean energy powered by our supply network (Live demo)
            </span>
          </div>
          <Activity size={15} className="text-volt hidden sm:block ml-1 opacity-70" />
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. SCROLL CUE & THIN MARQUEE STRIP
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 mt-12 w-full">
        {/* Scroll cue icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-slate-500 hover:text-sun transition-colors"
          >
            <ChevronDown size={22} />
          </motion.div>
        </div>

        {/* Marquee Strip */}
        <div className="w-full py-3 bg-ink-2/80 border-y border-panel-border overflow-hidden whitespace-nowrap backdrop-blur-md">
          <div className="inline-flex items-center gap-8 animate-[marquee_25s_linear_infinite]">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-wider text-slate-400 uppercase">
                <span>{item}</span>
                <span className="text-sun">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
