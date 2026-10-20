// ─────────────────────────────────────────────────────────────
// SOLAR SAVINGS CALCULATOR — Constants & Calculation Engine
// ─────────────────────────────────────────────────────────────
// All financial, technical, and regulatory assumptions are maintained here.
// Easily edit tariffs, subsidies, costs, and derate factors.

export const SOLAR_DEFAULTS = {
  // Monthly electricity bill presets
  minBill: 500,
  maxBill: 100000,
  defaultBill: 4500,
  billStep: 250,

  // Property types and default tariff rates (₹ per kWh)
  propertyTypes: [
    { id: 'residential', label: 'Residential Rooftop', defaultTariff: 8.0, costPerKw: 55000, subsidyEligible: true },
    { id: 'commercial', label: 'Commercial Building', defaultTariff: 9.5, costPerKw: 48000, subsidyEligible: false },
    { id: 'industrial', label: 'Industrial / Factory', defaultTariff: 8.5, costPerKw: 42000, subsidyEligible: false },
  ],

  // State tariff presets in India (₹ per kWh)
  statePresets: [
    { id: 'TN', name: 'Tamil Nadu (TANGEDCO)', tariff: 8.0 },
    { id: 'MH', name: 'Maharashtra (MSEDCL)', tariff: 9.2 },
    { id: 'KA', name: 'Karnataka (BESCOM)', tariff: 8.5 },
    { id: 'GJ', name: 'Gujarat (UGVCL/PGVCL)', tariff: 7.8 },
    { id: 'DL', name: 'Delhi (BSES)', tariff: 7.5 },
    { id: 'TS_AP', name: 'Telangana & Andhra Pradesh', tariff: 8.2 },
    { id: 'RJ', name: 'Rajasthan (JVVNL)', tariff: 8.0 },
    { id: 'UP', name: 'Uttar Pradesh (UPPCL)', tariff: 7.9 },
    { id: 'OTHER', name: 'Other States (National Avg)', tariff: 8.0 },
  ],

  // Technical generation parameters
  daysPerMonth: 30,
  generationPerKwPerDay: 4.0, // kWh generated per kW per day (Indian average)
  performanceFactor: 0.8, // System derating factor (losses, temperature, dirt)
  roofSqftPerKw: 80, // Approx shade-free rooftop area needed per kW
  costRangePercent: 0.10, // +/- 10% range for estimated capital cost

  // PM Surya Ghar Muft Bijli Yojana Subsidy Logic (Residential only)
  // 30,000 / kW for the first 2 kW; 18,000 for the 3rd kW; capped at 78,000 max.
  subsidyRules: {
    enabled: true,
    first2KwRate: 30000,
    thirdKwRate: 18000,
    maxSubsidy: 78000,
    disclaimer: 'Indicative subsidy as per PM Surya Ghar scheme guidelines. Subject to discom approval & portal registration.',
  },

  // 25-Year Projection assumptions
  annualDegradation: 0.007, // 0.7% annual solar panel output degradation
  annualTariffEscalation: 0.03, // 3% typical annual grid electricity price inflation

  // Environmental impact factors
  co2FactorKgPerKwh: 0.82, // Central Electricity Authority (CEA) grid emission factor
  co2AbsorbedPerTreePerYearKg: 21, // Avg mature tree CO2 absorption capacity
}

/**
 * Calculates solar system sizing, financials, subsidies, and 25-year projections.
 * 
 * @param {Object} params
 * @param {number} params.monthlyBill - Monthly electricity bill in ₹
 * @param {string} params.propertyType - 'residential' | 'commercial' | 'industrial'
 * @param {number} params.customTariff - Tariff in ₹/kWh
 * @param {number|null} params.roofAreaSqft - Available rooftop area in sqft (optional)
 * @param {boolean} params.enableEscalation - Whether to apply 3% tariff inflation in 25-yr model
 */
export function calculateSolarSavings({
  monthlyBill = SOLAR_DEFAULTS.defaultBill,
  propertyType = 'residential',
  customTariff = 8.0,
  roofAreaSqft = 0,
  enableEscalation = true,
}) {
  const pType = SOLAR_DEFAULTS.propertyTypes.find((p) => p.id === propertyType) || SOLAR_DEFAULTS.propertyTypes[0]
  const tariff = customTariff > 0 ? customTariff : pType.defaultTariff

  // 1. Units consumed per month = Bill / Tariff
  const unitsPerMonth = monthlyBill / tariff

  // 2. Required kW = (Units per month) / (days per month * generation per kW per day)
  let rawKw = unitsPerMonth / (SOLAR_DEFAULTS.daysPerMonth * SOLAR_DEFAULTS.generationPerKwPerDay)

  // Cap by roof area if specified (approx 80 sqft per kW)
  if (roofAreaSqft && roofAreaSqft > 0) {
    const maxKwByRoof = roofAreaSqft / SOLAR_DEFAULTS.roofSqftPerKw
    rawKw = Math.min(rawKw, maxKwByRoof)
  }

  // Round up to nearest 0.5 kW (minimum 1 kW)
  const recommendedKw = Math.max(1, Math.ceil(rawKw * 2) / 2)

  // 3. Yearly generation in kWh = kW * 4 kWh/day * 365 days * performance factor (0.8)
  const yearlyGenerationKwh = Math.round(
    recommendedKw * SOLAR_DEFAULTS.generationPerKwPerDay * 365 * SOLAR_DEFAULTS.performanceFactor
  )

  // 4. Yearly savings in rupees = Generation * Tariff
  const yearlySavings = Math.round(yearlyGenerationKwh * tariff)

  // 5. System Cost Range (+/- 10%)
  const baseCost = recommendedKw * pType.costPerKw
  const costMin = Math.round(baseCost * (1 - SOLAR_DEFAULTS.costRangePercent))
  const costMax = Math.round(baseCost * (1 + SOLAR_DEFAULTS.costRangePercent))

  // 6. PM Surya Ghar Subsidy (residential only)
  let subsidyAmount = 0
  if (pType.subsidyEligible && SOLAR_DEFAULTS.subsidyRules.enabled) {
    if (recommendedKw <= 2) {
      subsidyAmount = recommendedKw * SOLAR_DEFAULTS.subsidyRules.first2KwRate
    } else if (recommendedKw <= 3) {
      subsidyAmount = 2 * SOLAR_DEFAULTS.subsidyRules.first2KwRate + (recommendedKw - 2) * SOLAR_DEFAULTS.subsidyRules.thirdKwRate
    } else {
      subsidyAmount = SOLAR_DEFAULTS.subsidyRules.maxSubsidy
    }
    subsidyAmount = Math.min(subsidyAmount, SOLAR_DEFAULTS.subsidyRules.maxSubsidy)
  }

  const netSystemCost = Math.max(0, baseCost - subsidyAmount)

  // 7. Payback period in years = Net System Cost / Yearly Savings
  const paybackYears = yearlySavings > 0 ? (netSystemCost / yearlySavings).toFixed(1) : 0

  // 8. Environmental benefits
  const co2AvoidedKgPerYear = Math.round(yearlyGenerationKwh * SOLAR_DEFAULTS.co2FactorKgPerKwh)
  const treesEquivalent = Math.round(co2AvoidedKgPerYear / SOLAR_DEFAULTS.co2AbsorbedPerTreePerYearKg)

  // 9. 25-Year Projection Chart points (cumulative savings vs net cost)
  const projection = []
  let cumulativeSavings = 0
  let breakEvenYear = null

  for (let year = 1; year <= 25; year++) {
    // Degradation derating
    const degradationMultiplier = Math.pow(1 - SOLAR_DEFAULTS.annualDegradation, year - 1)
    // Tariff escalation
    const tariffMultiplier = enableEscalation
      ? Math.pow(1 + SOLAR_DEFAULTS.annualTariffEscalation, year - 1)
      : 1

    const yearGeneration = yearlyGenerationKwh * degradationMultiplier
    const yearSavings = yearGeneration * (tariff * tariffMultiplier)
    cumulativeSavings += yearSavings

    if (cumulativeSavings >= netSystemCost && breakEvenYear === null) {
      breakEvenYear = year
    }

    projection.push({
      year,
      yearSavings: Math.round(yearSavings),
      cumulativeSavings: Math.round(cumulativeSavings),
      netCost: Math.round(netSystemCost),
    })
  }

  const total25YearSavings = Math.round(cumulativeSavings)

  return {
    recommendedKw,
    unitsPerMonth: Math.round(unitsPerMonth),
    yearlyGenerationKwh,
    yearlySavings,
    baseCost,
    costMin,
    costMax,
    subsidyAmount,
    netSystemCost,
    paybackYears: parseFloat(paybackYears),
    breakEvenYear: breakEvenYear || 4,
    total25YearSavings,
    co2AvoidedKgPerYear,
    treesEquivalent,
    projection,
  }
}
