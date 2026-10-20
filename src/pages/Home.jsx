import { useSEO } from '../hooks/useSEO'
import Hero from '../sections/Hero'
import AboutTeaser from '../sections/AboutTeaser'
import WhyChoose from '../sections/WhyChoose'
import Calculator from '../sections/Calculator'
import StatsStrip from '../sections/StatsStrip'
import ProductRail from '../sections/ProductRail'
import IndiaMap from '../sections/IndiaMap'
import ProofSection from '../sections/ProofSection'
import CTABanner from '../sections/CTABanner'

export default function Home() {
  useSEO({
    title: "Powering India's Renewable Future",
    description:
      'CPS Renewables LLP is a Chennai-based B2B supplier of Tier-1 solar panels, inverters, DCR solar kits, mounting structures, and clean energy products with pan-India dispatch.',
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutTeaser />
      <WhyChoose />
      <Calculator />
      <StatsStrip />
      <ProductRail />
      <IndiaMap />
      <ProofSection />
      <CTABanner />
    </div>
  )
}
