import fs from 'fs'
import path from 'path'

const rootDir = process.cwd()
const publicImagesDir = path.join(rootDir, 'public', 'images')

// Ensure subdirectories exist
const dirs = [
  publicImagesDir,
  path.join(publicImagesDir, 'products'),
  path.join(publicImagesDir, 'services'),
  path.join(publicImagesDir, 'about'),
  path.join(publicImagesDir, 'projects'),
]

dirs.forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true })
  }
})

// Helper to write an SVG file
function writeSvg(relPath, svgContent) {
  const fullPath = path.join(publicImagesDir, relPath)
  fs.writeFileSync(fullPath, svgContent.trim(), 'utf-8')
  console.log('Created:', relPath)
}

// 1. Brand Logo SVG and simple PNG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" fill="none">
  <defs>
    <linearGradient id="logoSun" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFD36B"/>
      <stop offset="0.5" stop-color="#FFB800"/>
      <stop offset="1" stop-color="#FF7A1A"/>
    </linearGradient>
    <linearGradient id="logoVolt" x1="40" y1="40" x2="100" y2="100" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00E5A0"/>
      <stop offset="1" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>
  
  <!-- Icon Emblem -->
  <g transform="translate(10, 10)">
    <rect width="100" height="100" rx="24" fill="#0A1422" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
    <circle cx="50" cy="50" r="22" fill="url(#logoSun)"/>
    <path d="M50 12V22M50 78V88M12 50H22M78 50H88M23 23L30 30M70 70L77 77M23 77L30 70M70 30L77 23" stroke="#FFB800" stroke-width="5" stroke-linecap="round"/>
    <path d="M50 28C62.1 28 72 37.9 72 50C72 62.1 62.1 72 50 72" stroke="url(#logoVolt)" stroke-width="6" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="10" fill="#050B14"/>
    <circle cx="50" cy="50" r="5" fill="#FFB800"/>
  </g>

  <!-- Brand Typography -->
  <text x="130" y="58" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="34" letter-spacing="-0.5">CPS RENEWABLES</text>
  <rect x="368" y="32" width="28" height="18" rx="4" fill="#FFB800" fill-opacity="0.15" stroke="#FFB800" stroke-opacity="0.4"/>
  <text x="372" y="45" fill="#FFB800" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">LLP</text>
  
  <!-- Sub-brand Tagline -->
  <text x="132" y="86" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="13" font-weight="600" letter-spacing="3.5">SUSTAINABLE ENERGY</text>
  <circle cx="330" cy="82" r="3" fill="#00E5A0"/>
  <text x="340" y="86" fill="#00E5A0" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="500">INDIA</text>
</svg>`

writeSvg('cps-renewables-logo.svg', logoSvg)

// A tiny valid transparent 1x1 PNG data URI converted to buffer so /images/cps-renewables-logo.png exists
// If the image fails or loads, the Logo component also falls back gracefully to the SVG icon/text.
const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
fs.writeFileSync(path.join(publicImagesDir, 'cps-renewables-logo.png'), Buffer.from(pngBase64, 'base64'))

// 2. OpenGraph Card SVG
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#050B14"/>
  <circle cx="950" cy="200" r="280" fill="#FFB800" fill-opacity="0.15" filter="blur(80px)"/>
  <circle cx="200" cy="500" r="240" fill="#00E5A0" fill-opacity="0.1" filter="blur(80px)"/>
  
  <!-- Logo & Title -->
  <g transform="translate(100, 120)">
    <rect width="70" height="70" rx="18" fill="#0A1422" stroke="#FFB800" stroke-width="2"/>
    <circle cx="35" cy="35" r="16" fill="#FFB800"/>
    <path d="M35 15C46 15 55 24 55 35" stroke="#00E5A0" stroke-width="4" stroke-linecap="round"/>
    
    <text x="90" y="46" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="28">CPS RENEWABLES LLP</text>
    <text x="90" y="66" fill="#FFB800" font-family="'JetBrains Mono', monospace" font-size="13" letter-spacing="2">SUSTAINABLE ENERGY</text>
  </g>

  <text x="100" y="290" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="56">Powering India's</text>
  <text x="100" y="360" fill="#FFB800" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="56">Renewable Future.</text>
  <text x="100" y="430" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="22" max-width="800">
    Tier-1 Solar Panels, Inverters, DCR Kits & Clean Energy Supply across 28 States.
  </text>
  
  <rect x="100" y="480" width="380" height="50" rx="25" fill="#0A1422" stroke="rgba(255,255,255,0.1)"/>
  <text x="130" y="512" fill="#00E5A0" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="600">● Pan-India Dispatch · Chennai Hub</text>
</svg>`
writeSvg('og-image.svg', ogImageSvg)

// 3. Products SVGs
const productsData = [
  {
    file: 'products/solar-panels.svg',
    title: 'Tier-1 Mono PERC & TOPCon Panels',
    subtitle: 'N-Type / Bifacial Dual Glass',
    accent: '#FFB800',
    draw: `
      <!-- Solar Panel Array Graphic -->
      <g transform="translate(120, 40)">
        <rect x="0" y="0" width="240" height="140" rx="8" fill="#0A1428" stroke="#38BDF8" stroke-width="3"/>
        <!-- Cells -->
        <g stroke="#1E293B" stroke-width="2">
          <line x1="40" y1="0" x2="40" y2="140"/>
          <line x1="80" y1="0" x2="80" y2="140"/>
          <line x1="120" y1="0" x2="120" y2="140"/>
          <line x1="160" y1="0" x2="160" y2="140"/>
          <line x1="200" y1="0" x2="200" y2="140"/>
          <line x1="0" y1="46" x2="240" y2="46"/>
          <line x1="0" y1="92" x2="240" y2="92"/>
        </g>
        <!-- Shimmer highlights -->
        <path d="M20 10 L120 130" stroke="#FFB800" stroke-width="2" opacity="0.6" stroke-linecap="round"/>
        <path d="M40 10 L140 130" stroke="#00E5A0" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
      </g>
    `,
  },
  {
    file: 'products/solar-inverters.svg',
    title: 'Solar Inverters (String & Hybrid)',
    subtitle: 'Multi-MPPT / 98.8% Efficiency',
    accent: '#00E5A0',
    draw: `
      <!-- Inverter Enclosure Graphic -->
      <g transform="translate(140, 30)">
        <rect x="0" y="0" width="200" height="150" rx="14" fill="#0F172A" stroke="#00E5A0" stroke-width="2.5"/>
        <rect x="25" y="25" width="150" height="40" rx="6" fill="#020617" stroke="#334155"/>
        <!-- Digital Display -->
        <text x="40" y="50" fill="#00E5A0" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="bold">50.0 kW</text>
        <circle cx="150" cy="45" r="4" fill="#00E5A0"/>
        <!-- Cooling Fins & Connectors -->
        <line x1="40" y1="90" x2="160" y2="90" stroke="#475569" stroke-width="3"/>
        <line x1="40" y1="105" x2="160" y2="105" stroke="#475569" stroke-width="3"/>
        <line x1="40" y1="120" x2="160" y2="120" stroke="#475569" stroke-width="3"/>
        <circle cx="70" cy="140" r="6" fill="#FFB800"/>
        <circle cx="100" cy="140" r="6" fill="#38BDF8"/>
        <circle cx="130" cy="140" r="6" fill="#00E5A0"/>
      </g>
    `,
  },
  {
    file: 'products/dcr-solar-kits.svg',
    title: 'DCR Solar Kits (One-Box Solution)',
    subtitle: 'PM Surya Ghar Compliant / ALMM',
    accent: '#FF7A1A',
    draw: `
      <!-- One Box Kit Graphic -->
      <g transform="translate(130, 35)">
        <rect x="0" y="0" width="220" height="140" rx="12" fill="#0B132B" stroke="#FF7A1A" stroke-width="2.5"/>
        <rect x="20" y="20" width="80" height="100" rx="6" fill="#1C2541" stroke="#38BDF8"/>
        <rect x="115" y="20" width="85" height="50" rx="6" fill="#1C2541" stroke="#00E5A0"/>
        <rect x="115" y="80" width="85" height="40" rx="6" fill="#1C2541" stroke="#FFB800"/>
        <text x="125" y="50" fill="#00E5A0" font-family="'JetBrains Mono'" font-size="11">INVERTER</text>
        <text x="125" y="105" fill="#FFB800" font-family="'JetBrains Mono'" font-size="11">BOS & CAB</text>
        <text x="35" y="75" fill="#38BDF8" font-family="'JetBrains Mono'" font-size="11">DCR PV</text>
      </g>
    `,
  },
  {
    file: 'products/mounting-structures.svg',
    title: 'Solar Mounting Structures',
    subtitle: 'Aluminium 6063-T6 & HDG Steel',
    accent: '#38BDF8',
    draw: `
      <!-- Mounting Structure Truss Graphic -->
      <g transform="translate(120, 40)" stroke="#38BDF8" stroke-width="3" stroke-linecap="round">
        <line x1="20" y1="130" x2="220" y2="130"/>
        <line x1="50" y1="130" x2="70" y2="40"/>
        <line x1="190" y1="130" x2="170" y2="40"/>
        <line x1="50" y1="50" x2="210" y2="20" stroke="#FFB800" stroke-width="4"/>
        <line x1="70" y1="40" x2="190" y2="130" stroke="#475569" stroke-width="2"/>
        <line x1="170" y1="40" x2="50" y2="130" stroke="#475569" stroke-width="2"/>
        <circle cx="50" cy="50" r="5" fill="#FFB800"/>
        <circle cx="210" cy="20" r="5" fill="#FFB800"/>
      </g>
    `,
  },
  {
    file: 'products/cables-bos.svg',
    title: 'Cables & Balance of System',
    subtitle: 'EN 50618 DC Cables / ACDB / DCDB',
    accent: '#FFB800',
    draw: `
      <!-- Cables & Distribution Box Graphic -->
      <g transform="translate(120, 35)">
        <rect x="20" y="15" width="120" height="120" rx="10" fill="#0A1422" stroke="#FFB800" stroke-width="2.5"/>
        <rect x="40" y="35" width="80" height="35" rx="4" fill="#020617"/>
        <line x1="50" y1="52" x2="110" y2="52" stroke="#00E5A0" stroke-width="4"/>
        <!-- Cables coiling -->
        <path d="M150 50 Q 200 40 220 70 T 200 120" fill="none" stroke="#FF7A1A" stroke-width="5" stroke-linecap="round"/>
        <path d="M150 70 Q 220 60 230 90 T 190 135" fill="none" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>
      </g>
    `,
  },
  {
    file: 'products/batteries-storage.svg',
    title: 'Batteries & Energy Storage',
    subtitle: 'LiFePO4 Lithium & Tubular C10',
    accent: '#00E5A0',
    draw: `
      <!-- Battery Stack Graphic -->
      <g transform="translate(130, 30)">
        <rect x="30" y="10" width="160" height="40" rx="8" fill="#0A1422" stroke="#00E5A0" stroke-width="2"/>
        <rect x="30" y="58" width="160" height="40" rx="8" fill="#0A1422" stroke="#00E5A0" stroke-width="2"/>
        <rect x="30" y="106" width="160" height="40" rx="8" fill="#0A1422" stroke="#00E5A0" stroke-width="2"/>
        <!-- Charge indicators -->
        <circle cx="50" cy="30" r="4" fill="#00E5A0"/>
        <circle cx="50" cy="78" r="4" fill="#00E5A0"/>
        <circle cx="50" cy="126" r="4" fill="#00E5A0"/>
        <line x1="70" y1="30" x2="150" y2="30" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
        <line x1="70" y1="78" x2="130" y2="78" stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
        <line x1="70" y1="126" x2="160" y2="126" stroke="#00E5A0" stroke-width="4" stroke-linecap="round"/>
      </g>
    `,
  },
  {
    file: 'products/wind-products.svg',
    title: 'Wind Energy Turbines & Systems',
    subtitle: 'Small Turbines / Hybrid Controllers',
    accent: '#38BDF8',
    draw: `
      <!-- Wind Turbine Silhouette Graphic -->
      <g transform="translate(200, 30)">
        <line x1="40" y1="140" x2="40" y2="50" stroke="#94A3B8" stroke-width="5" stroke-linecap="round"/>
        <circle cx="40" cy="50" r="12" fill="#38BDF8"/>
        <!-- Rotor blades -->
        <path d="M40 50 L40 5" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
        <path d="M40 50 L80 75" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
        <path d="M40 50 L0 75" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
        <circle cx="40" cy="50" r="4" fill="#FFB800"/>
      </g>
    `,
  },
]

productsData.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" fill="none">
    <rect width="480" height="220" rx="20" fill="#050B14"/>
    <rect width="480" height="220" rx="20" fill="url(#bgGrad-${p.file.replace(/[^a-z]/g, '')})"/>
    <defs>
      <radialGradient id="bgGrad-${p.file.replace(/[^a-z]/g, '')}" cx="50%" cy="50%" r="50%">
        <stop stop-color="${p.accent}" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#050B14" stop-opacity="0"/>
      </radialGradient>
    </defs>
    ${p.draw}
  </svg>`
  writeSvg(p.file, svg)
})

// 4. Services SVGs (11 items)
const servicesData = [
  { id: 'solar-home-commercial', title: 'Solar for Home / Commercials', iconText: 'ROOFTOP' },
  { id: 'inverter-solutions', title: 'On / Off / Hybrid Inverters', iconText: 'POWER INVERTER' },
  { id: 'solar-street-light', title: 'Solar Street Light', iconText: 'STREET LIGHT' },
  { id: 'solar-modules', title: 'Solar Modules Wholesale', iconText: 'PV MODULES' },
  { id: 'solar-heaters-pumps', title: 'Solar Water Heaters / Pumps', iconText: 'HEATER & PUMP' },
  { id: 'epc-services', title: 'EPC Turnkey Services', iconText: 'EPC CONTRACT' },
  { id: 'ev-charger', title: 'EV Charger Integration', iconText: 'EV FAST CHARGE' },
  { id: 'system-maintenance', title: 'Solar System Maintenance', iconText: 'O&M INSPECT' },
  { id: 'portable-solar', title: 'Portable Solar Power', iconText: 'PORTABLE POWER' },
  { id: 'solar-park', title: 'Solar Park (Utility & Floating)', iconText: 'SOLAR PARK MW' },
  { id: 'solar-commercial-factory', title: 'Solar Power for Commercial & Factories', iconText: 'FACTORY CAPTIVE' },
]

servicesData.forEach((s, idx) => {
  const accent = idx % 2 === 0 ? '#FFB800' : '#00E5A0'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 200" fill="none">
    <rect width="440" height="200" rx="16" fill="#0A1422"/>
    <circle cx="360" cy="60" r="100" fill="${accent}" fill-opacity="0.1" filter="blur(40px)"/>
    <g transform="translate(30, 40)">
      <rect width="60" height="60" rx="16" fill="#050B14" stroke="${accent}" stroke-width="2"/>
      <circle cx="30" cy="30" r="14" fill="${accent}" fill-opacity="0.2"/>
      <path d="M30 18V42M18 30H42" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
    </g>
    <text x="110" y="66" fill="#FFFFFF" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="18">${s.title}</text>
    <text x="110" y="90" fill="${accent}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" letter-spacing="1">${s.iconText}</text>
    <rect x="30" y="125" width="380" height="35" rx="10" fill="#050B14" stroke="rgba(255,255,255,0.06)"/>
    <text x="50" y="147" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="12">Supplied & Engineered by CPS Renewables Pan-India</text>
  </svg>`
  writeSvg(`services/${s.id}.svg`, svg)
})

// 5. About & Warehouse SVGs
const teamInspectionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" fill="none">
  <rect width="600" height="480" rx="20" fill="#070D18"/>
  <circle cx="450" cy="150" r="200" fill="#FFB800" fill-opacity="0.15" filter="blur(60px)"/>
  
  <!-- Engineering Blueprint / Solar Grid background -->
  <g stroke="rgba(255, 184, 0, 0.15)" stroke-width="1.5">
    <line x1="50" y1="50" x2="550" y2="50"/>
    <line x1="50" y1="120" x2="550" y2="120"/>
    <line x1="50" y1="190" x2="550" y2="190"/>
    <line x1="50" y1="260" x2="550" y2="260"/>
    <line x1="120" y1="30" x2="120" y2="350"/>
    <line x1="280" y1="30" x2="280" y2="350"/>
    <line x1="440" y1="30" x2="440" y2="350"/>
  </g>

  <!-- Inspection Tablet Graphic -->
  <g transform="translate(140, 100)">
    <rect width="320" height="220" rx="16" fill="#0A1422" stroke="#00E5A0" stroke-width="2.5"/>
    <text x="30" y="45" fill="#FFFFFF" font-family="'Space Grotesk'" font-weight="700" font-size="18">QUALITY AUDIT PROTOCOL</text>
    <text x="30" y="70" fill="#00E5A0" font-family="'JetBrains Mono'" font-size="12">STATUS: 100% INSPECTED PASS</text>
    <rect x="30" y="90" width="260" height="15" rx="7" fill="#1E293B"/>
    <rect x="30" y="90" width="220" height="15" rx="7" fill="#00E5A0"/>
    <text x="30" y="140" fill="#94A3B8" font-family="'Inter'" font-size="13">• Electroluminescence (EL) Hotspot Check</text>
    <text x="30" y="165" fill="#94A3B8" font-family="'Inter'" font-size="13">• Inverter Multi-MPPT Efficiency Benchmarked</text>
    <text x="30" y="190" fill="#94A3B8" font-family="'Inter'" font-size="13">• BIS & ALMM Origin Certificates Attached</text>
  </g>
</svg>`
writeSvg('about/team-inspection.svg', teamInspectionSvg)

const warehouseChennaiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" fill="none">
  <rect width="600" height="350" rx="16" fill="#070D18"/>
  <circle cx="150" cy="150" r="160" fill="#00E5A0" fill-opacity="0.1" filter="blur(60px)"/>
  
  <!-- Warehouse Structure -->
  <g transform="translate(60, 40)">
    <polygon points="240,20 40,80 40,240 440,240 440,80" fill="#0A1422" stroke="#FFB800" stroke-width="2"/>
    <polygon points="240,20 40,80 240,90 440,80" fill="#0F172A"/>
    <!-- Shutter Doors -->
    <rect x="70" y="140" width="80" height="100" rx="4" fill="#050B14" stroke="#334155"/>
    <rect x="180" y="140" width="80" height="100" rx="4" fill="#050B14" stroke="#334155"/>
    <rect x="290" y="140" width="80" height="100" rx="4" fill="#050B14" stroke="#334155"/>
    
    <text x="90" y="60" fill="#FFB800" font-family="'Space Grotesk'" font-weight="800" font-size="18">CPS MADHAVARAM LOGISTICS HUB</text>
    <text x="110" y="210" fill="#00E5A0" font-family="'JetBrains Mono'" font-size="11">BAY 01</text>
    <text x="220" y="210" fill="#00E5A0" font-family="'JetBrains Mono'" font-size="11">BAY 02</text>
    <text x="330" y="210" fill="#00E5A0" font-family="'JetBrains Mono'" font-size="11">BAY 03</text>
  </g>
</svg>`
writeSvg('about/warehouse-chennai.svg', warehouseChennaiSvg)

// 6. Project Proof SVGs (4 items)
const projectsData = [
  { id: 'project-1', title: '250 kW Industrial Rooftop', location: 'Sriperumbudur, Tamil Nadu', cap: '250 kW' },
  { id: 'project-2', title: '500 kW Commercial IT Park', location: 'Bengaluru, Karnataka', cap: '500 kW' },
  { id: 'project-3', title: '1.2 MW Captive Solar Plant', location: 'Tirupur, Tamil Nadu', cap: '1.2 MW' },
  { id: 'project-4', title: '85 kW PM Surya Ghar Cluster', location: 'Chennai, Tamil Nadu', cap: '85 kW' },
]

projectsData.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 240" fill="none">
    <rect width="440" height="240" rx="16" fill="#0A1422"/>
    <circle cx="220" cy="120" r="120" fill="#FFB800" fill-opacity="0.12" filter="blur(40px)"/>
    <rect x="40" y="40" width="360" height="160" rx="12" fill="#050B14" stroke="rgba(255,255,255,0.08)"/>
    <!-- Solar Array Silhouette -->
    <path d="M60 140 L160 100 L240 105 L140 150 Z" fill="#0F172A" stroke="#FFB800" stroke-width="1.5"/>
    <path d="M160 150 L260 110 L340 115 L240 160 Z" fill="#0F172A" stroke="#00E5A0" stroke-width="1.5"/>
    <text x="60" y="75" fill="#FFFFFF" font-family="'Space Grotesk'" font-weight="700" font-size="16">${p.title}</text>
    <text x="60" y="95" fill="#94A3B8" font-family="'Inter'" font-size="12">Location: ${p.location}</text>
    <text x="330" y="75" fill="#FFB800" font-family="'JetBrains Mono'" font-weight="bold" font-size="14">${p.cap}</text>
  </svg>`
  writeSvg(`projects/${p.id}.svg`, svg)
})

// 7. Write public/images/README.txt
const readmeContent = `CPS RENEWABLES LLP — MEDIA & IMAGERY DIRECTORY
==============================================
All photography, illustrations and branding assets live in this directory.
To replace placeholder illustrations with high-res on-site photos, save your files with matching names or update src/config/data.js.

Expected files:
1. /images/cps-renewables-logo.png (or cps-renewables-logo.svg) — Brand mark with text fallback
2. /images/about/team-inspection.svg (Recommended photo: 1200x800px on-site engineering team or module inspection)
3. /images/about/warehouse-chennai.svg (Recommended photo: 1200x700px Madhavaram dispatch facility)
4. /images/products/
   - solar-panels.svg (Mono PERC / TOPCon module photo or render)
   - solar-inverters.svg (String / Hybrid inverter photo)
   - dcr-solar-kits.svg (Complete pallet kit with packaging)
   - mounting-structures.svg (Aluminium rails, clamps, rooftop layout)
   - cables-bos.svg (Solar DC cables, ACDB/DCDB boxes, MC4 connectors)
   - batteries-storage.svg (Wall/rack-mount LiFePO4 battery pack)
   - wind-products.svg (Small wind turbine and tower assembly)
5. /images/services/ (11 service illustrations or field project photos)
6. /images/projects/ (4 representative client installation photos)
7. /images/og-image.svg (Social sharing banner for WhatsApp/LinkedIn)
`
fs.writeFileSync(path.join(publicImagesDir, 'README.txt'), readmeContent, 'utf-8')
console.log('Successfully created public/images/README.txt and all SVG assets.')
