import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../config/site'

export default function Logo({ className = '', variant = 'full' }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sun rounded-lg py-1 ${className}`}
      aria-label={`${SITE_CONFIG.name} Home`}
    >
      {/* Brand Icon / Logo Graphic */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-sun via-ember to-volt p-[1.5px] shadow-glow-sun/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-ink rounded-[10px] flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <img
              src="/images/cps-renewables-logo.png"
              alt="CPS Renewables Logo"
              className="w-full h-full object-contain p-1"
              onError={() => setImageError(true)}
            />
          ) : (
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sun & Wind Hybrid Tech Icon */}
              <circle cx="16" cy="16" r="6" fill="#FFB800" />
              <path
                d="M16 2V6M16 26V30M2 16H6M26 16H30M6.1 6.1L8.9 8.9M23.1 23.1L25.9 25.9M6.1 25.9L8.9 23.1M23.1 8.9L25.9 6.1"
                stroke="#FFB800"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 10C19.3 10 22 12.7 22 16C22 19.3 19.3 22 16 22"
                stroke="#00E5A0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-sun transition-colors duration-200">
              CPS RENEWABLES
            </span>
            <span className="text-[11px] font-mono text-sun/90 uppercase font-semibold px-1 rounded bg-sun/10 border border-sun/20">
              LLP
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
            Sustainable Energy
          </span>
        </div>
      )}
    </Link>
  )
}
