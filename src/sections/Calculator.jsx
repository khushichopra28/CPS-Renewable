import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap,
  TrendingUp,
  Leaf,
  DollarSign,
  Sun,
  ShieldAlert,
  ArrowRight,
  Info,
  Calendar,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { SOLAR_DEFAULTS, calculateSolarSavings } from '../config/solar'

export default function Calculator() {
  const navigate = useNavigate()

  // State inputs
  const [monthlyBill, setMonthlyBill] = useState(SOLAR_DEFAULTS.defaultBill)
  const [propertyType, setPropertyType] = useState('residential')
  const [selectedState, setSelectedState] = useState('TN')
  const [customTariff, setCustomTariff] = useState(8.0)
  const [roofAreaSqft, setRoofAreaSqft] = useState('')
  const [enableEscalation, setEnableEscalation] = useState(true)

  // Sync state preset tariff changes
  const handleStateChange = (stateId) => {
    setSelectedState(stateId)
    const preset = SOLAR_DEFAULTS.statePresets.find((s) => s.id === stateId)
    if (preset) {
      setCustomTariff(preset.tariff)
    }
  }

  // Handle property type changes
  const handlePropertyTypeChange = (pTypeId) => {
    setPropertyType(pTypeId)
    const pType = SOLAR_DEFAULTS.propertyTypes.find((p) => p.id === pTypeId)
    if (pType && selectedState === 'OTHER') {
      setCustomTariff(pType.defaultTariff)
    }
  }

  // Live calculation results
  const results = useMemo(() => {
    return calculateSolarSavings({
      monthlyBill: Number(monthlyBill) || SOLAR_DEFAULTS.minBill,
      propertyType,
      customTariff: Number(customTariff) || 8.0,
      roofAreaSqft: roofAreaSqft ? Number(roofAreaSqft) : 0,
      enableEscalation,
    })
  }, [monthlyBill, propertyType, customTariff, roofAreaSqft, enableEscalation])

  // Navigate to contact with prefilled query parameters
  const handleProceedToContact = () => {
    const params = new URLSearchParams({
      subject: 'quote',
      projectType:
        propertyType === 'residential'
          ? 'Residential rooftop'
          : propertyType === 'commercial'
          ? 'Commercial'
          : 'Industrial',
      estimatedKw: results.recommendedKw.toString(),
      monthlyBill: monthlyBill.toString(),
    })
    navigate(`/contact?${params.toString()}`)
  }

  // 25-Year SVG Chart dimensions & computations
  const chartWidth = 500
  const chartHeight = 180
  const padding = { top: 20, right: 30, bottom: 30, left: 55 }

  const maxVal = Math.max(
    results.total25YearSavings,
    results.netSystemCost * 1.5,
    100000
  )

  const getX = (year) =>
    padding.left + ((year - 1) / 24) * (chartWidth - padding.left - padding.right)
  const getY = (val) =>
    chartHeight -
    padding.bottom -
    (val / maxVal) * (chartHeight - padding.top - padding.bottom)

  // Construct SVG area and line path for cumulative savings
  const points = results.projection.map((d) => `${getX(d.year)},${getY(d.cumulativeSavings)}`)
  const savingsPath = `M ${points.join(' L ')}`
  const areaPath = `M ${getX(1)},${chartHeight - padding.bottom} L ${points.join(
    ' L '
  )} L ${getX(25)},${chartHeight - padding.bottom} Z`

  // Net cost horizontal baseline
  const costY = getY(results.netSystemCost)

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-ink overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-volt/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Interactive ROI Tool"
          title="Solar Savings"
          highlight="Calculator"
          subtitle="Estimate system sizing, PM Surya Ghar subsidy eligibility, net capital cost, and 25-year financial returns in real time."
        />

        {/* Master Glass Panel */}
        <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-panel border border-panel-border backdrop-blur-2xl shadow-glass">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* ─────────────────────────────────────────────────────────────
                LEFT COLUMN: INPUT CONTROLS (5 cols)
                ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  1. Your Property & Consumption
                </h3>
                <p className="text-xs text-slate-400">
                  Adjust values to match your current electricity tariff and roof space.
                </p>
              </div>

              {/* Property Type Radio Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5">
                  Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {SOLAR_DEFAULTS.propertyTypes.map((pt) => {
                    const isSelected = propertyType === pt.id
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => handlePropertyTypeChange(pt.id)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-heading font-medium text-center transition-all ${
                          isSelected
                            ? 'bg-sun text-ink shadow-glow-sun font-semibold'
                            : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {pt.label.split(' ')[0]}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Monthly Electricity Bill Input & Slider */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-panel-border space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="bill-slider" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Monthly Electricity Bill
                  </label>
                  <div className="flex items-center gap-1 bg-ink border border-sun/40 px-3 py-1.5 rounded-xl">
                    <span className="font-mono text-xs text-sun">₹</span>
                    <input
                      type="number"
                      id="bill-input"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
                      min={SOLAR_DEFAULTS.minBill}
                      max={SOLAR_DEFAULTS.maxBill}
                      step={SOLAR_DEFAULTS.billStep}
                      aria-label="Monthly electricity bill in rupees"
                      className="w-24 bg-transparent font-mono text-sm font-bold text-white text-right focus:outline-none"
                    />
                  </div>
                </div>

                <input
                  type="range"
                  id="bill-slider"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  min={SOLAR_DEFAULTS.minBill}
                  max={SOLAR_DEFAULTS.maxBill}
                  step={SOLAR_DEFAULTS.billStep}
                  aria-label="Monthly electricity bill slider"
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sun"
                />

                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>₹{SOLAR_DEFAULTS.minBill.toLocaleString('en-IN')}</span>
                  <span>Est. {results.unitsPerMonth} kWh/mo</span>
                  <span>₹{SOLAR_DEFAULTS.maxBill.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* State & Grid Tariff Presets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state-preset" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    State / Discom Preset
                  </label>
                  <select
                    id="state-preset"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full bg-ink border border-panel-border rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-sun"
                  >
                    {SOLAR_DEFAULTS.statePresets.map((st) => (
                      <option key={st.id} value={st.id}>
                        {st.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="tariff-input" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Electricity Tariff (₹/kWh)
                  </label>
                  <input
                    type="number"
                    id="tariff-input"
                    value={customTariff}
                    onChange={(e) => setCustomTariff(Number(e.target.value))}
                    step="0.1"
                    min="1"
                    max="20"
                    className="w-full bg-ink border border-panel-border rounded-xl px-3 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-sun"
                  />
                </div>
              </div>

              {/* Rooftop Area (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="roof-area" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Shade-Free Roof Area (Optional)
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">~80 sqft per kW</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    id="roof-area"
                    placeholder="e.g. 500 (Leave empty for unconstrained)"
                    value={roofAreaSqft}
                    onChange={(e) => setRoofAreaSqft(e.target.value)}
                    className="w-full bg-ink border border-panel-border rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sun"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-500">
                    sq ft
                  </span>
                </div>
              </div>

              {/* Tariff Escalation Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-panel-border text-xs">
                <div>
                  <span className="text-slate-300 font-medium block">
                    Include 3% Annual Tariff Inflation
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Reflects realistic grid rate increases over 25 years
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setEnableEscalation((v) => !v)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    enableEscalation ? 'bg-volt' : 'bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-ink transition-transform ${
                      enableEscalation ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT COLUMN: LIVE FINANCIAL RESULTS & 25-YR CHART (7 cols)
                ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  2. Sizing & Projected Savings
                </h3>
                <p className="text-xs text-slate-400">
                  Instant engineering sizing model powered by tier-1 PV performance parameters.
                </p>
              </div>

              {/* Primary Output Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {/* 1. Recommended Capacity */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-panel-border">
                  <div className="flex items-center gap-1.5 text-sun mb-1">
                    <Sun size={15} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      System Size
                    </span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {results.recommendedKw}{' '}
                    <span className="text-xs font-normal text-sun">kW</span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    ~{(results.recommendedKw * 80).toFixed(0)} sq ft roof
                  </span>
                </div>

                {/* 2. Yearly Generation */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-panel-border">
                  <div className="flex items-center gap-1.5 text-volt mb-1">
                    <Zap size={15} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Year 1 Gen
                    </span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {results.yearlyGenerationKwh.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-volt">kWh</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Derate factor 0.8</span>
                </div>

                {/* 3. Yearly Savings */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-sun/30 bg-sun/5 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-sun mb-1">
                    <DollarSign size={15} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sun">
                      Annual Savings
                    </span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-sun">
                    ₹{results.yearlySavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-slate-400">Immediate reduction</span>
                </div>
              </div>

              {/* Financial Capital Cost & PM Surya Ghar Subsidy Breakdown */}
              <div className="p-5 rounded-2xl bg-ink-2 border border-panel-border space-y-3">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-panel-border">
                  <span className="text-slate-400">Estimated Capital Cost (+/-10%):</span>
                  <span className="font-mono font-medium text-slate-200">
                    ₹{results.costMin.toLocaleString('en-IN')} – ₹{results.costMax.toLocaleString('en-IN')}
                  </span>
                </div>

                {propertyType === 'residential' && results.subsidyAmount > 0 && (
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-panel-border text-volt">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      PM Surya Ghar Subsidy (Indicative):
                    </span>
                    <span className="font-mono font-bold">
                      - ₹{results.subsidyAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
                      Estimated Net Investment:
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Approx. Payback: <strong className="text-volt font-mono">{results.paybackYears} Years</strong>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-2xl font-bold text-white block">
                      ₹{results.netSystemCost.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* 25-Year Cumulative Savings SVG Line Chart */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-panel-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-volt" />
                    <span className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
                      25-Year Cumulative Return
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-volt">
                    ₹{results.total25YearSavings.toLocaleString('en-IN')} Total
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 mb-4">
                  Break-even estimated at Year {results.breakEvenYear}. Beyond this point, power generated is practically pure profit.
                </p>

                {/* Hand-built SVG Area/Line Chart */}
                <div className="w-full overflow-hidden">
                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-40 overflow-visible"
                  >
                    <defs>
                      <linearGradient id="savingsArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00E5A0" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Chart Grid Lines */}
                    <line
                      x1={padding.left}
                      y1={chartHeight - padding.bottom}
                      x2={chartWidth - padding.right}
                      y2={chartHeight - padding.bottom}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />

                    {/* Net Cost Horizontal Line */}
                    <line
                      x1={padding.left}
                      y1={costY}
                      x2={chartWidth - padding.right}
                      y2={costY}
                      stroke="#FF7A1A"
                      strokeDasharray="4 4"
                      strokeWidth="1.2"
                    />
                    <text
                      x={chartWidth - padding.right + 2}
                      y={costY + 3}
                      fill="#FF7A1A"
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                    >
                      Cost
                    </text>

                    {/* Cumulative Savings Area & Curve */}
                    <path d={areaPath} fill="url(#savingsArea)" />
                    <path
                      d={savingsPath}
                      fill="none"
                      stroke="#00E5A0"
                      strokeWidth="2.5"
                    />

                    {/* Break-even point marker */}
                    {results.breakEvenYear && (
                      <g>
                        <circle
                          cx={getX(results.breakEvenYear)}
                          cy={getY(results.projection[results.breakEvenYear - 1]?.cumulativeSavings || results.netSystemCost)}
                          r="4"
                          fill="#FFB800"
                          stroke="#050B14"
                          strokeWidth="2"
                        />
                        <text
                          x={getX(results.breakEvenYear) - 15}
                          y={costY - 8}
                          fill="#FFB800"
                          fontSize="9"
                          fontFamily="JetBrains Mono"
                          fontWeight="bold"
                        >
                          Yr {results.breakEvenYear} (Break-even)
                        </text>
                      </g>
                    )}

                    {/* Year Labels */}
                    <text
                      x={getX(1)}
                      y={chartHeight - 10}
                      fill="#64748B"
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                    >
                      Yr 1
                    </text>
                    <text
                      x={getX(10)}
                      y={chartHeight - 10}
                      fill="#64748B"
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                    >
                      Yr 10
                    </text>
                    <text
                      x={getX(25)}
                      y={chartHeight - 10}
                      fill="#64748B"
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                      textAnchor="end"
                    >
                      Yr 25
                    </text>
                  </svg>
                </div>
              </div>

              {/* Environmental Impact Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-volt/5 border border-volt/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-volt/10 text-volt flex items-center justify-center flex-shrink-0">
                    <Leaf size={16} />
                  </div>
                  <div>
                    <span className="font-mono font-bold text-white block">
                      {results.co2AvoidedKgPerYear.toLocaleString('en-IN')} kg
                    </span>
                    <span className="text-[10px] text-slate-400">CO2 avoided / year</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky/5 border border-sky/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky/10 text-sky flex items-center justify-center flex-shrink-0">
                    <Sun size={16} />
                  </div>
                  <div>
                    <span className="font-mono font-bold text-white block">
                      ~{results.treesEquivalent} Trees
                    </span>
                    <span className="text-[10px] text-slate-400">Equivalent planted / yr</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                * Estimates only. Final design, pricing, and subsidy depend on physical site survey, shadow profile, discom regulations, and portal guidelines.
              </p>

              {/* Action Button: Prefills Contact Form */}
              <button
                type="button"
                onClick={handleProceedToContact}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-heading font-semibold text-sm sm:text-base text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get This Quote From Our Engineers</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
