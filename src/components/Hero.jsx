import { useEffect, useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { LOCAL_VIDEO, FALLBACK_VIDEO } from '../config/video.js'

const NAV_LINKS = ['Projects', 'Expertise', 'Studio', 'Insights']
const MENU_ITEMS = [...NAV_LINKS, 'Reach Out']
const EASE = 'ease-[cubic-bezier(0.76,0,0.24,1)]'

export default function Hero() {
  const [open, setOpen] = useState(false)

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video — edit src/config/video.js to change it */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {LOCAL_VIDEO && <source src={LOCAL_VIDEO} type="video/mp4" />}
        {FALLBACK_VIDEO && <source src={FALLBACK_VIDEO} type="video/mp4" />}
      </video>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
          <div className="flex items-center gap-10">
            <a href="#" className="text-white font-semibold text-lg tracking-tight font-sans">
              Atelier
            </a>
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hidden md:inline text-white/80 hover:text-white text-sm font-light transition-colors duration-200"
            >
              Reach Out
            </a>
            <button className="hidden md:inline-block bg-white text-black text-sm font-medium rounded-full px-5 py-2">
              Let&apos;s Talk
            </button>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col items-end gap-[5px] p-1"
            >
              <span
                className={`block h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${EASE} ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-4 bg-white rounded-full transition-opacity duration-500 ${EASE} ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${EASE} ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-6 text-center">
          <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl">
            UX <span className="italic font-instrument-serif">and</span> APP
            <br />
            DESIGN <span className="italic font-instrument-serif">for</span> BOLD
            <br />
            VENTURES
          </h1>

          <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
            We shape digital products that define brands
            <br className="hidden sm:block" /> and unlock exponential growth.
          </p>

          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium">
              See Cases
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
            <button className="inline-flex items-center gap-2 bg-transparent border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/10 hover:border-white/60">
              <Play size={14} />
              Watch Reel
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-700 ${EASE} ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Content */}
        <div
          className={`relative flex flex-col h-full transition-opacity duration-700 ${EASE} ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <a href="#" className="text-white font-semibold text-lg tracking-tight font-sans">
              Atelier
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="relative w-8 h-8"
            >
              <span className="absolute left-1 top-1/2 block h-[2px] w-6 -translate-y-1/2 rotate-45 bg-white rounded-full" />
              <span className="absolute left-1 top-1/2 block h-[2px] w-6 -translate-y-1/2 -rotate-45 bg-white rounded-full" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            {MENU_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${150 + i * 80}ms` : '0ms' }}
                className={`block text-center border-b border-white/10 py-4 text-white font-instrument-serif text-4xl sm:text-5xl transition-all duration-700 ${EASE} hover:pl-4 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            style={{ transitionDelay: open ? '550ms' : '0ms' }}
            className={`px-6 pb-8 transition-opacity duration-700 ${EASE} ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button className="w-full bg-white text-black rounded-full py-4 text-sm font-medium">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
