import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import { SITE_CONFIG } from '../config/site'

export default function Footer() {
  return (
    <footer className="relative bg-ink-2 border-t border-panel-border overflow-hidden pt-16 pb-12">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-sun/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-panel-border">
          {/* Column 1: Brand & Blurb (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              Powering a sustainable tomorrow with high-quality solar, wind, and clean energy solutions across India. Trusted by EPC contractors, businesses, and communities.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-volt bg-volt/10 border border-volt/20 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-volt animate-ping" />
              <span>Pan-India Dispatch from Madhavaram Warehouse</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-sun transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-sun transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products-services" className="text-slate-400 hover:text-sun transition-colors">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-sun transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact?subject=quote" className="text-sun hover:text-sun-soft font-medium inline-flex items-center gap-1 transition-colors">
                  Request Quote <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Supply (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Clean Energy Supply
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products-services#solar-panels" className="text-slate-400 hover:text-sun transition-colors">
                  Tier-1 Solar Panels
                </Link>
              </li>
              <li>
                <Link to="/products-services#solar-inverters" className="text-slate-400 hover:text-sun transition-colors">
                  Solar Inverters (String/Hybrid)
                </Link>
              </li>
              <li>
                <Link to="/products-services#dcr-solar-kits" className="text-slate-400 hover:text-sun transition-colors">
                  DCR Solar Kits (PM Surya Ghar)
                </Link>
              </li>
              <li>
                <Link to="/products-services#wind-energy-products" className="text-slate-400 hover:text-sun transition-colors">
                  Wind Energy Products
                </Link>
              </li>
              <li>
                <Link to="/products-services#mounting-structures" className="text-slate-400 hover:text-sun transition-colors">
                  Mounting Structures & BOS
                </Link>
              </li>
              <li>
                <Link to="/products-services#epc-services" className="text-slate-400 hover:text-sun transition-colors">
                  EPC Contractor Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Chennai Head Office
            </h3>
            
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin size={16} className="text-sun flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.headOffice.address}</span>
            </div>

            <div className="space-y-1 pt-1">
              {SITE_CONFIG.phones.map((phone) => (
                <div key={phone.tel} className="flex items-center gap-2.5">
                  <Phone size={14} className="text-volt flex-shrink-0" />
                  <a href={`tel:${phone.tel}`} className="text-slate-300 hover:text-white transition-colors">
                    {phone.display}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail size={14} className="text-sky flex-shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
              <Clock size={14} className="text-slate-400 flex-shrink-0 mt-0.5" />
              <span>Hours: {SITE_CONFIG.hours}</span>
            </div>
          </div>
        </div>

        {/* Socials & Compliance Row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-b border-panel-border/50">
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-500">CONNECT:</span>
            {/* Social icons driven by site.js */}
            {/* TODO: Update '#' links in src/config/site.js with official social URLs */}
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CPS Renewables LinkedIn"
              className="hover:text-sun transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={SITE_CONFIG.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CPS Renewables Twitter"
              className="hover:text-sun transition-colors"
            >
              Twitter / X
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CPS Renewables Facebook"
              className="hover:text-sun transition-colors"
            >
              Facebook
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck size={14} className="text-volt" />
            <span>ALMM & BIS Compliant Renewable Supply</span>
          </div>
        </div>

        {/* Ghosted Wordmark & Bottom Bar */}
        <div className="relative pt-8 flex flex-col items-center">
          <div
            className="w-full text-center font-heading font-black text-4xl sm:text-6xl md:text-8xl tracking-tight text-white/[0.03] select-none pointer-events-none uppercase -mb-3"
            aria-hidden="true"
          >
            CPS RENEWABLES
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-4 text-xs text-slate-500">
            <p>{SITE_CONFIG.copyrightNotice}</p>
            <p className="mt-2 sm:mt-0 font-mono text-[11px]">
              Head Office: Perambur, Chennai · Dispatch: Madhavaram
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
