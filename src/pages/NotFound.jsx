import { Link } from 'react-router-dom'
import { ArrowLeft, Home, ZapOff } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO({
    title: '404 — Grid Node Not Found',
    description: 'The requested renewable energy page or resource is not available on this server.',
  })

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute w-[600px] h-[600px] bg-sun/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center p-8 sm:p-12 rounded-3xl bg-panel border border-panel-border backdrop-blur-2xl shadow-glass">
        <div className="w-16 h-16 rounded-2xl bg-sun/10 border border-sun/30 text-sun flex items-center justify-center mx-auto mb-6 shadow-glow-sun">
          <ZapOff size={32} />
        </div>

        <div className="font-mono text-xs font-bold text-sun uppercase tracking-widest mb-2">
          ERROR 404 // POWER GRID OFFLINE
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-black text-white mb-4">
          Node Disconnected
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The clean energy route or page you are attempting to access does not exist or has been shifted to a new dispatch frequency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-heading font-semibold text-sm text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/products-services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-heading font-medium text-sm text-white bg-panel border border-panel-border hover:bg-white/10 transition-colors"
          >
            <span>View Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
