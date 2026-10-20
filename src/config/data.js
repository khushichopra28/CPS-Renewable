// ─────────────────────────────────────────────────────────────
// CPS RENEWABLES LLP — Catalog, Services, FAQs, and Proof Data
// ─────────────────────────────────────────────────────────────
// All catalog items, service offerings, proof sections, and map points.
// Note: Items marked with TODO are placeholder entries for owner updates.

export const STATS = [
  {
    id: 'experience',
    value: 10,
    prefix: '',
    suffix: '+',
    label: 'Years Industrial Experience',
    subtext: 'Over a decade of engineering & distribution depth',
  },
  {
    id: 'states',
    value: 28,
    prefix: '',
    suffix: '',
    label: 'States Covered',
    subtext: 'Robust pan-India supply chain & dispatch network',
  },
  {
    id: 'support',
    isString: true,
    stringValue: '24/7',
    label: 'Customer & EPC Support',
    subtext: 'Dedicated technical engineers on standby',
  },
  {
    id: 'reach',
    isString: true,
    stringValue: 'Pan India',
    label: 'Warehousing & Delivery',
    subtext: 'Central logistics hub in Madhavaram, Chennai',
  },
]

export const VALUES = [
  {
    id: 'customer-focus',
    title: 'Customer Focus & Satisfaction',
    desc: 'Solutions designed around real customer needs with responsive, proactive service at every step.',
    icon: 'Users',
  },
  {
    id: 'cost-reduction',
    title: 'Cost Reduction Through Innovation',
    desc: 'Latest technologies for better outcomes at lowest lifecycle cost and superior ROI.',
    icon: 'TrendingDown',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    desc: 'Transparent dealings, honest partnerships, and absolute adherence to engineering standards.',
    icon: 'ShieldCheck',
  },
  {
    id: 'quality-reliability',
    title: 'Quality & Reliability',
    desc: 'Consistent quality, on-time delivery, and dependable support backed by tier-1 warranties.',
    icon: 'Award',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    desc: 'Every decision measured against long-term environmental impact and green energy generation.',
    icon: 'Leaf',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    desc: 'Continuous improvement across every function—from supply chain logistics to technical consultation.',
    icon: 'Sparkles',
  },
]

export const WHY_CHOOSE_US = [
  {
    id: 'trusted-partner',
    title: 'Trusted Renewable Partner',
    desc: 'One of India’s fastest-growing clean energy supply partners, committed to powering contractors, factories, and homes.',
    icon: 'Handshake',
    badge: 'Pan-India Trust',
  },
  {
    id: 'industry-knowledge',
    title: 'Trusted Industry Knowledge',
    desc: 'Over a decade of technical and field experience helping clients select optimal equipment and avoid costly sizing errors.',
    icon: 'BookOpen',
    badge: '10+ Years Depth',
  },
  {
    id: 'high-quality-products',
    title: 'High Quality Products',
    desc: 'Sourced directly from certified tier-1 global and domestic manufacturers with stringent quality audits.',
    icon: 'ShieldCheck',
    badge: 'Tier-1 Certified',
  },
  {
    id: 'reliable-supply-chain',
    title: 'Reliable Supply Chain',
    desc: 'Expansive warehouse facility in Madhavaram, Chennai with ready buffer inventory for rapid dispatch to 28 states.',
    icon: 'Truck',
    badge: 'Chennai Dispatch Hub',
  },
  {
    id: 'expert-technical-support',
    title: 'Expert Technical Support',
    desc: 'In-house electrical and solar engineers guide design, SLD review, BOS compatibility, and commissioning questions.',
    icon: 'Wrench',
    badge: 'In-House Engineers',
  },
  {
    id: 'customer-first-approach',
    title: 'Customer First Approach',
    desc: 'Dedicated account managers for EPC contractors and transparent, competitive B2B wholesale pricing structures.',
    icon: 'Headset',
    badge: 'Dedicated B2B Desks',
  },
]

// 7 Products with comprehensive specs and drawer metadata
export const PRODUCTS = [
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    category: 'Solar',
    headline: 'High-Efficiency Mono PERC, TOPCon & Bifacial PV Modules',
    shortDesc: 'Tier-1 PV modules engineered for extreme Indian weather, high irradiance, and minimal PID degradation.',
    image: '/images/products/solar-panels.svg',
    tags: ['Mono PERC', 'TOPCon', 'Bifacial', 'Tier-1'],
    featured: true,
    overview:
      'CPS Renewables stocks high-yield photovoltaic modules ranging from 450W to 700W+ from certified Tier-1 manufacturers. Suitable for utility-scale solar parks, commercial rooftops, and residential installations with comprehensive 12-year product and 25-30 year linear output warranties.',
    keyFeatures: [
      'N-Type TOPCon & P-Type Mono PERC cell architectures with module efficiency up to 22.8%',
      'Bifacial power gain up to 25% from albedo reflection on ground and high-reflectivity roofs',
      'Anti-PID (Potential Induced Degradation) and excellent low-light performance',
      'Robust 2400 Pa wind load and 5400 Pa mechanical snow load certification',
      'Full ALMM and BIS certification for Indian grid compliance and subsidy approvals',
    ],
    typicalApplications: [
      'Commercial & Industrial Rooftop Solar Installations',
      'Ground-Mounted Utility Solar Farms & Solar Parks',
      'PM Surya Ghar / PM KUSUM Scheme Projects',
      'Agricultural Solar Pump Powering',
    ],
    specifications: [
      { param: 'Power Output Range', value: '450W – 710W+' },
      { param: 'Module Technologies', value: 'Mono PERC, N-Type TOPCon, HJT, Bifacial Dual Glass' },
      { param: 'Module Efficiency', value: '21.2% – 22.9%' },
      { param: 'Temperature Coefficient (Pmax)', value: '-0.30% / °C to -0.35% / °C' },
      { param: 'Bifaciality Factor', value: '70% ± 10% (for bifacial models)' },
      { param: 'Connector Type', value: 'MC4 / MC4-EVO2 compatible IP68' },
      { param: 'Certifications', value: 'IEC 61215, IEC 61730, BIS, ALMM Approved' },
      { param: 'Warranty', value: '12-Year Product Warranty, 25/30-Year Performance Guarantee' },
    ],
  },
  {
    id: 'solar-inverters',
    name: 'Solar Inverters',
    category: 'Solar',
    headline: 'String, Hybrid & Central Inverters with Smart Monitoring',
    shortDesc: 'Ultra-reliable power conversion systems with multi-MPPT tracking, AFCI protection, and remote IoT telemetry.',
    image: '/images/products/solar-inverters.svg',
    tags: ['String', 'Hybrid', 'Central', 'Multi-MPPT'],
    featured: true,
    overview:
      'We supply grid-tied string inverters, battery-ready hybrid inverters, and utility central stations. Engineered with high DC/AC ratios, IP66 weatherproof enclosures, and intelligent grid management features designed to thrive on Indian grid fluctuations.',
    keyFeatures: [
      'Wide MPPT voltage windows ensuring maximum daily energy harvest',
      'Built-in DC isolator, Type II AC/DC surge protection (SPD), and optional AFCI',
      'Seamless on-grid and backup/diesel generator synchronisation for hybrid units',
      'Cloud monitoring via Wi-Fi/4G with live string-level diagnostics',
      'High conversion efficiency up to 98.8%',
    ],
    typicalApplications: [
      'Residential Net Metering Rooftops',
      'Commercial Factories, Warehouses & IT Parks',
      'Microgrids with Energy Storage Systems',
      'Off-Grid & Zero-Export Industrial Facilities',
    ],
    specifications: [
      { param: 'Capacity Range', value: '1 kW – 250 kW (String), up to 3.125 MW (Central)' },
      { param: 'Max Efficiency', value: '98.4% – 98.8% (Euro 98.1%)' },
      { param: 'MPPT Trackers', value: '1 to 12 independent MPPTs depending on capacity' },
      { param: 'Grid Compatibility', value: 'Single Phase 230V / Three Phase 415V, 50Hz' },
      { param: 'Enclosure Rating', value: 'IP65 / IP66 Outdoor Grade' },
      { param: 'Protection', value: 'Anti-islanding, DC Reverse Polarity, Short Circuit, OVP' },
      { param: 'Communication', value: 'RS485, Wi-Fi, Ethernet, 4G, Modbus TCP' },
      { param: 'Standard Warranty', value: '5 Years standard, extendable to 10/15 Years' },
    ],
  },
  {
    id: 'dcr-solar-kits',
    name: 'DCR Solar Kits',
    category: 'Solar',
    headline: 'MNRE & PM Surya Ghar Compliant Complete One-Box Kits',
    shortDesc: 'Certified Domestic Content Requirement (DCR) kits containing modules, inverters, structure, and BOS for hassle-free installation.',
    image: '/images/products/dcr-solar-kits.svg',
    tags: ['MNRE Compliant', 'PM Surya Ghar', 'One-Box Solution', '1 kW - 10 kW'],
    featured: true,
    overview:
      'CPS Renewables provides fully integrated, pre-engineered DCR Solar Kits for installers and EPCs participating in national subsidy programs like PM Surya Ghar Muft Bijli Yojana. Every kit comes pre-matched with approved DCR cells/modules, inverters, structure, ACDB/DCDB, and cabling.',
    keyFeatures: [
      '100% compliant with MNRE Domestic Content Requirement (DCR) mandate',
      'Pre-sized and engineered for 1 kW, 2 kW, 3 kW, 5 kW, 7.5 kW, and 10 kW projects',
      'Includes Tier-1 DCR solar panels with full origin traceability documentation',
      'Includes high-efficiency on-grid inverter, pre-wired IP65 ACDB & DCDB boxes',
      'Complete set of UV-resistant DC solar cables, earthing kits, and lightning arrestor',
    ],
    typicalApplications: [
      'Residential Rooftops availing Govt. Subsidies',
      'Government Housing & Institutional Tenders',
      'Discom Agnostic Net-Metering Projects',
      'Fast-Turnaround EPC Contractor Projects',
    ],
    specifications: [
      { param: 'Available Kit Sizes', value: '1 kW, 2 kW, 3 kW, 5 kW, 8 kW, 10 kW' },
      { param: 'Module Origin', value: '100% Indian Made Solar Cells & Modules (DCR)' },
      { param: 'Included Inverter', value: 'Single / Three Phase Grid-Tied Inverter (BIS certified)' },
      { param: 'Included BOS', value: 'ACDB, DCDB (with MCBs & SPDs), 4mm² Solar Cable, MC4s' },
      { param: 'Included Structure', value: 'Anodized Aluminum / Pre-Galvanized Rooftop Rails' },
      { param: 'Documentation', value: 'DCR Undertaking Certificate, BIS test reports, Warranty cards' },
      { param: 'Dispatch Time', value: 'Within 24-48 hours from Chennai central warehouse' },
    ],
  },
  {
    id: 'mounting-structures',
    name: 'Mounting Structures',
    category: 'BOS',
    headline: 'High-Strength Anodized Aluminium & Pre-Galvanized Structures',
    shortDesc: 'Wind-tunnel tested rooftop and ground-mount structures engineered to withstand 180 km/h gusts and coastal corrosion.',
    image: '/images/products/mounting-structures.svg',
    tags: ['HDG Steel', 'Aluminium 6063-T6', 'Coastal Ready', '180 km/h Rated'],
    featured: false,
    overview:
      'Engineered specifically for Indian geographic diversity and cyclone-prone coastal zones. We supply standard tin-shed rails, ballast flat-roof solutions, elevated rooftop walkways, and ground-mount pile-driven or seasonal tilt structures.',
    keyFeatures: [
      'High-grade extruded aluminium AL6063-T6 and Hot Dip Galvanized (HDG) / PosMAC steel',
      'Corrosion resistant with 80+ micron zinc coating for coastal resilience',
      'Pre-assembled clamps and module fasteners to halve installation labor hours',
      'Structural design calculation reports approved by certified civil/structural engineers',
      'Compatible with framed and frameless PV modules of all thicknesses',
    ],
    typicalApplications: [
      'Industrial Metal/Tin Sheet Roofs (Trapezoidal, Standing Seam)',
      'Flat RCC Concrete Roofs with Ballast or Anchor Blocks',
      'Elevated Superstructures for Usable Rooftop Terrace Spaces',
      'Ground-Mount Solar Parks & Water Body Floating Racks',
    ],
    specifications: [
      { param: 'Material Grades', value: 'Aluminium 6063-T6 / Hot Dip Galvanized Steel (IS 2062)' },
      { param: 'Galvanization Coating', value: '80 – 120 Microns (ISO 1461 compliant)' },
      { param: 'Wind Speed Rating', value: 'Tested up to 180 km/h (50 m/s)' },
      { param: 'Tilt Angles', value: 'Fixed 10° – 30° / Adjustable Seasonal / Flush Mount' },
      { param: 'Hardware / Fasteners', value: 'Stainless Steel SS304 / SS316' },
      { param: 'Design Life', value: '25+ Years against environmental degradation' },
    ],
  },
  {
    id: 'cables-bos',
    name: 'Cables & BOS',
    category: 'BOS',
    headline: 'Solar DC & AC Cables, Connectors, ACDB/DCDB & Switchgear',
    shortDesc: 'Certified UV and ozone-resistant solar cables, high-current connectors, IP65 distribution boxes, and protection gear.',
    image: '/images/products/cables-bos.svg',
    tags: ['EN 50618 DC Cables', 'IP68 MC4', 'ACDB / DCDB', 'Surge Protection'],
    featured: false,
    overview:
      'Balance of System (BOS) components dictate the safety and operational life of any renewable installation. CPS Renewables supplies cross-linked polyolefin (XLPO) DC cables, rugged AC armoring cables, original MC4 connectors, and custom-built LT distribution panels.',
    keyFeatures: [
      'TUV certified solar DC cables conforming to EN 50618 / IEC 62930 standards',
      'Flame retardant, low smoke, halogen free (LSZH) insulation rated up to 120°C',
      'Pre-assembled IP65 weatherproof ACDB & DCDB boxes with Type II SPDs and MCBs/fuses',
      'Chemical earthing electrodes, copper-bonded rods, and lightning arrestors',
      'Cable trays, conduits, gland kits, and terminal lugs for clean EPC execution',
    ],
    typicalApplications: [
      'Solar Rooftop String Combines & Inverter Interconnects',
      'High-Voltage 1500V DC Solar Park Arrays',
      'Industrial Electrical Panel Integrations',
      'Grounding & Lightning Protection Grids',
    ],
    specifications: [
      { param: 'DC Cable Sizes', value: '4 sq mm, 6 sq mm, 10 sq mm, 16 sq mm, 25 sq mm' },
      { param: 'Voltage Rating', value: '1500V DC / 1000V AC' },
      { param: 'Operating Temperature', value: '-40°C to +90°C (Max conductor temp 120°C)' },
      { param: 'Connector Rating', value: 'IP68 waterproof, 1500V DC rated, 30A – 50A' },
      { param: 'Distribution Boxes', value: 'IP65 UV resistant poly-carbonate or powder coated CRCA' },
      { param: 'Surge Protection (SPD)', value: 'Type II 1000V DC / 415V AC with status indicators' },
    ],
  },
  {
    id: 'batteries-storage',
    name: 'Batteries & Storage',
    category: 'Storage',
    headline: 'Lithium Ferro Phosphate (LiFePO4) & High-Cycle Tubular Batteries',
    shortDesc: 'Safe, long-lifecycle energy storage solutions for backup power, hybrid commercial systems, and microgrids.',
    image: '/images/products/batteries-storage.svg',
    tags: ['LiFePO4', 'Tubular Gel', 'BMS Integrated', '6000+ Cycles'],
    featured: false,
    overview:
      'Store surplus clean energy to achieve 24/7 self-consumption and resilient emergency power. CPS Renewables supplies wall-mounted and rack-mounted lithium iron phosphate batteries alongside heavy-duty solar tubular lead-acid batteries with smart BMS integrations.',
    keyFeatures: [
      'Lithium Iron Phosphate (LFP) chemistry ensuring thermal stability and safety against fire risks',
      'High Depth of Discharge (DoD up to 90%) with over 6,000 charge/discharge cycles',
      'Intelligent Battery Management System (BMS) with cell-level balancing and CAN/RS485 comms',
      'Modular scalability allowing parallel expansion from 5 kWh to 200+ kWh',
      'Zero maintenance design with rapid charging capability (1C charge rate)',
    ],
    typicalApplications: [
      'Residential Hybrid & Off-Grid Solar Energy Storage',
      'Commercial Peak Shaving & UPS Backup Systems',
      'Telecom Towers & Remote Clean Power Stations',
      'EV Charging Buffer Hubs',
    ],
    specifications: [
      { param: 'Battery Chemistry', value: 'Lithium Iron Phosphate (LiFePO4) / Solar C10 Tubular' },
      { param: 'Nominal Voltages', value: '12V, 24V, 48V, 51.2V Low Voltage & High Voltage (HV)' },
      { param: 'Cycle Life', value: '6000+ cycles @ 80% DoD (Lithium), 1500 cycles (Tubular)' },
      { param: 'Communication Ports', value: 'CAN, RS485, Modbus compatible with major hybrid inverters' },
      { param: 'Operating Range', value: '-10°C to 55°C ambient temperature' },
      { param: 'Warranty', value: '5 to 10 Years limited warranty on lithium packs' },
    ],
  },
  {
    id: 'wind-energy-products',
    name: 'Wind Energy Products',
    category: 'Wind',
    headline: 'Small Wind Turbines, Hybrid Wind-Solar Controllers & Spares',
    shortDesc: 'Efficient aerodynamic wind power systems and hybrid microgrid controllers for high-wind coastal and upland regions.',
    image: '/images/products/wind-products.svg',
    tags: ['Wind Turbines', 'Hybrid Wind-Solar', 'Low Cut-in', 'Coastal Grade'],
    featured: false,
    overview:
      'Complement solar generation with 24/7 wind power, particularly effective during monsoon months and night cycles. CPS Renewables supplies certified small wind turbines (1 kW to 20 kW), tilt-up monopole towers, dual wind-solar MPPT hybrid charge controllers, and turbine components.',
    keyFeatures: [
      'Low cut-in wind speed (starting at 2.5 m/s) maximizing energy capture in moderate breeze',
      'Reinforced carbon-fiber glass composite aerodynamic blades with low acoustic signature',
      'Electromagnetic and mechanical braking systems for automated hurricane/gale protection',
      'Integrated hybrid controller supporting simultaneous solar and wind battery charging',
      'Marine-grade anti-corrosive coatings for extended life along coastal belts',
    ],
    typicalApplications: [
      'Hybrid Wind-Solar Farms & Coastal Commercial Sites',
      'Off-Grid Agricultural Farms & Remote Estates',
      'Highway Wind-Solar Lighting Infrastructure',
      'Telecommunications & Edge Sensor Powering',
    ],
    specifications: [
      { param: 'Capacity Ratings', value: '1 kW, 3 kW, 5 kW, 10 kW, 20 kW' },
      { param: 'Cut-in Wind Speed', value: '2.5 m/s (approx 9 km/h)' },
      { param: 'Rated Wind Speed', value: '10 m/s – 12 m/s' },
      { param: 'Survival Wind Speed', value: '50 m/s – 60 m/s (216 km/h)' },
      { param: 'Generator Type', value: 'Permanent Magnet Synchronous Generator (PMSG), 3-Phase AC' },
      { param: 'Tower Heights', value: '6m, 9m, 12m, 18m Guyed or Self-Supporting Monopole' },
      { param: 'Controller Features', value: 'MPPT Wind + Solar, Dump Load Resistor, Battery Protection' },
    ],
  },
]

// 11 Services
export const SERVICES = [
  {
    id: 'solar-home-commercial',
    title: 'Solar for Home / Commercials',
    category: 'Solar',
    shortDesc: 'Custom rooftop turnkey solutions engineered for residential bungalows, housing societies, and commercial business complexes.',
    features: ['Rooftop feasibility analysis', 'Net-metering liaisoning', 'Bill reduction up to 90%', 'Tier-1 equipment'],
    image: '/images/services/solar-home-commercial.svg',
  },
  {
    id: 'inverter-solutions',
    title: 'On / Off / Hybrid Inverters',
    category: 'Solar',
    shortDesc: 'Supply, sizing, and integration of cutting-edge power inverters tailored to your load profile and grid reliability.',
    features: ['Single and three-phase units', 'Zero-export configuration', 'Battery backup integration', 'Remote cloud telemetry'],
    image: '/images/services/inverter-solutions.svg',
  },
  {
    id: 'solar-street-light',
    title: 'Solar Street Light',
    category: 'Solar',
    shortDesc: 'Autonomous all-in-one and split solar street lighting systems for highways, gated communities, and industrial campuses.',
    features: ['Built-in LiFePO4 battery', 'PIR motion sensor dimming', 'Dusk-to-dawn automation', 'IP66 waterproof optics'],
    image: '/images/services/solar-street-light.svg',
  },
  {
    id: 'solar-modules-supply',
    title: 'Solar Modules Wholesale',
    category: 'Solar',
    shortDesc: 'Volume pallet and container-load supply of Tier-1 ALMM and DCR certified solar modules direct from factory lines.',
    features: ['Factory-sealed packaging', 'Container-load pricing', 'Ready stock in Chennai hub', 'Flash test reports included'],
    image: '/images/services/solar-modules.svg',
  },
  {
    id: 'solar-water-heaters-pumps',
    title: 'Solar Water Heaters / Pumps',
    category: 'Solar',
    shortDesc: 'Reliable thermal solar water heating systems and high-lift solar agricultural / domestic borewell water pumps.',
    features: ['Evacuated tube collectors (ETC)', 'Submersible & surface VFD pumps', 'PM KUSUM scheme guidance', 'Heavy-duty stainless steel tanks'],
    image: '/images/services/solar-heaters-pumps.svg',
  },
  {
    id: 'epc-services',
    title: 'EPC Services',
    category: 'Services',
    shortDesc: 'End-to-end Engineering, Procurement, and Construction assistance for solar contractors and industrial developers.',
    features: ['Detailed engineering & SLD drawings', 'Tier-1 BOM procurement', 'Project management support', 'Grid interconnection testing'],
    image: '/images/services/epc-services.svg',
  },
  {
    id: 'ev-charger',
    title: 'EV Charger Integration',
    category: 'EV',
    shortDesc: 'Solar-integrated electric vehicle AC and DC fast chargers for commercial parking lots, fleets, and residential premises.',
    features: ['Type-2 AC chargers (7kW - 22kW)', 'DC fast chargers up to 120kW', 'OCPP 1.6J compliant', 'Solar-direct charging modes'],
    image: '/images/services/ev-charger.svg',
  },
  {
    id: 'system-maintenance',
    title: 'Solar System Maintenance',
    category: 'Services',
    shortDesc: 'Preventive and breakdown Operation & Maintenance (O&M), thermographic drone inspections, and inverter servicing.',
    features: ['String-level I-V curve tracing', 'Thermal hotspot imaging', 'Module robotic cleaning supply', '24/7 uptime monitoring'],
    image: '/images/services/system-maintenance.svg',
  },
  {
    id: 'portable-solar-power',
    title: 'Portable Solar Power',
    category: 'Solar',
    shortDesc: 'Rugged portable power stations and folding solar blankets for defense, off-grid telemetry, disaster relief, and outdoor use.',
    features: ['Lightweight pure sine wave generators', 'High-speed USB-C PD & AC outlets', 'Folding solar panels with kickstands', 'Silent zero-emission operation'],
    image: '/images/services/portable-solar.svg',
  },
  {
    id: 'solar-park',
    title: 'Solar Park (Utility & Floating)',
    category: 'Solar',
    shortDesc: 'Large-scale utility ground-mount and reservoir floating solar park equipment supply, string combiners, and HT integration.',
    features: ['MW-scale bulk dispatch', 'Floating pontoon hardware', 'HT transformer substations', '1500V DC rated architecture'],
    image: '/images/services/solar-park.svg',
  },
  {
    id: 'solar-power-commercial-industrial',
    title: 'Solar Power for Commercial & Factories',
    category: 'Solar',
    shortDesc: 'High-yield rooftop and open-access captive solar plants engineered to slash heavy industrial power tariffs.',
    features: ['Captive & group captive models', 'Zero-capex OPEX / CAPEX analysis', 'Harmonics & power factor control', 'Accelerated depreciation benefits'],
    image: '/images/services/solar-commercial-factory.svg',
  },
]

// 4 Detailed FAQs
export const FAQS = [
  {
    id: 'faq-supply-reach',
    question: 'Do you supply across India?',
    answer:
      'Yes, CPS Renewables supplies clean energy products to all 28 states and union territories across India. We operate a central high-capacity warehouse facility located at Madhavaram, Chennai, directly connected to major national freight corridors. Whether you require a single pallet of high-efficiency modules for a rooftop project or container-loads for a multi-megawatt solar farm, our logistics network guarantees rapid, insured dispatch with complete transit tracking to your project site.',
  },
  {
    id: 'faq-tech-support',
    question: 'Do you provide technical support?',
    answer:
      'Yes, our in-house engineering team provides end-to-end technical support at every phase of your project. We assist EPC contractors, system integrators, and project owners with system sizing, single-line diagram (SLD) reviews, inverter-to-string voltage matching, Balance of System (BOS) compatibility checks, and on-site troubleshooting during testing and commissioning. We act as an extension of your own technical bench.',
  },
  {
    id: 'faq-epc-partners',
    question: 'Can EPC contractors partner with CPS Renewables?',
    answer:
      'Absolutely. EPC contractors and renewable installers represent our core partnership base. We offer dedicated B2B wholesale pricing tiers, preferential credit facilities for established partners, project-specific equipment reservation, and customized one-box kits. EPC partners also gain direct access to manufacturer warranty processing desks and priority dispatch from our Madhavaram inventory.',
  },
  {
    id: 'faq-dcr-kits',
    question: 'Do you supply DCR Solar Kits?',
    answer:
      'Yes, we provide fully certified Domestic Content Requirement (DCR) solar kits pre-engineered for national subsidy programs, including the PM Surya Ghar Muft Bijli Yojana and state rooftop tenders. Every kit includes 100% Indian-manufactured solar cells and modules with official ALMM documentation, BIS-certified grid-tied inverters, pre-wired IP65 ACDB/DCDB boxes, UV-rated solar cables, and mounting hardware for rapid, inspection-ready installations.',
  },
]

// Proof: Projects (Placeholder entries clearly flagged TODO)
// TODO: Replace with real project photos and verified project capacity data
export const PROOF_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Rooftop Solar Array for Industrial Manufacturing Plant',
    capacity: '250 kW',
    location: 'Sriperumbudur, Tamil Nadu',
    category: 'Industrial Rooftop',
    impact: 'Estimated 3,60,000 kWh clean energy annually',
    image: '/images/projects/project-1.svg',
    // TODO: replace with real client name and photography
    isPlaceholder: true,
  },
  {
    id: 'proj-2',
    title: 'Commercial IT Park Grid-Tied Solar Installation',
    capacity: '500 kW',
    location: 'Bengaluru, Karnataka',
    category: 'Commercial Solar',
    impact: 'Supplied high-efficiency TOPCon modules & string inverters',
    image: '/images/projects/project-2.svg',
    // TODO: replace with real client name and photography
    isPlaceholder: true,
  },
  {
    id: 'proj-3',
    title: 'Captive Solar Power Installation for Textile Facility',
    capacity: '1.2 MW',
    location: 'Tirupur, Tamil Nadu',
    category: 'Utility & Captive',
    impact: 'Reduced grid dependence by 42% with tier-1 bifacial panels',
    image: '/images/projects/project-3.svg',
    // TODO: replace with real client name and photography
    isPlaceholder: true,
  },
  {
    id: 'proj-4',
    title: 'DCR Solar Residential Community Micro-Cluster',
    capacity: '85 kW',
    location: 'Chennai, Tamil Nadu',
    category: 'PM Surya Ghar Cluster',
    impact: 'Turnkey DCR kits delivered for 28 housing units',
    image: '/images/projects/project-4.svg',
    // TODO: replace with real client name and photography
    isPlaceholder: true,
  },
]

// Proof: Partner Brands (Placeholder brand slots)
// TODO: Replace with official authorized tier-1 supplier partner logos
export const SUPPLY_PARTNERS = [
  { name: 'Tier-1 Solar PV Partner A', type: 'PV Modules', placeholderCode: 'T1-PV-01' },
  { name: 'Global String Inverter Partner B', type: 'Inverters', placeholderCode: 'INV-T1-02' },
  { name: 'Certified DCR Module Partner C', type: 'DCR Cells', placeholderCode: 'DCR-IND-03' },
  { name: 'Structural Aluminium Partner D', type: 'Mounting Systems', placeholderCode: 'STR-AL-04' },
  { name: 'Solar Cable & BOS Partner E', type: 'EN 50618 Cables', placeholderCode: 'CAB-TUV-05' },
  { name: 'Lithium Storage Partner F', type: 'LiFePO4 Storage', placeholderCode: 'BAT-LFP-06' },
]

// Proof: Testimonials (Placeholder reviews)
// TODO: Replace with verified client testimonials and designations
export const TESTIMONIALS = [
  {
    id: 'test-1',
    quote:
      'CPS Renewables has been our primary equipment supplier for over 15 commercial rooftop projects. Their technical team verifies inverter-panel matching before dispatch, preventing costly site delays. Deliveries from their Chennai warehouse are always on schedule.',
    author: 'Senior Project Director',
    organization: 'Leading South India Solar EPC Contractor',
    location: 'Chennai, Tamil Nadu',
    // TODO: replace with real client name
    isPlaceholder: true,
  },
  {
    id: 'test-2',
    quote:
      'Securing certified DCR solar panels for the PM Surya Ghar scheme was a challenge until we partnered with CPS Renewables. Their one-box kits with complete compliance paperwork made government inspections seamless.',
    author: 'Principal Integrator',
    organization: 'Renewable Rooftop Solutions',
    location: 'Coimbatore, Tamil Nadu',
    // TODO: replace with real client name
    isPlaceholder: true,
  },
  {
    id: 'test-3',
    quote:
      'The pricing transparency and engineering guidance from CPS Renewables are unmatched in the B2B renewable sector. They hold genuine tier-1 stock and handle logistics across multiple states without hassle.',
    author: 'General Manager (Procurement)',
    organization: 'Infrastructure & Clean Power Corp',
    location: 'Hyderabad, Telangana',
    // TODO: replace with real client name
    isPlaceholder: true,
  },
]

// Cities for Interactive Pan-India Map
export const INDIA_MAP_CITIES = [
  { id: 'chennai', name: 'Chennai Hub', x: 50.8, y: 77.2, state: 'Tamil Nadu', isHub: true, delivery: 'Local / Same-day dispatch', desc: 'Central Dispatch Warehouse, Madhavaram' },
  { id: 'bengaluru', name: 'Bengaluru', x: 44.5, y: 76.5, state: 'Karnataka', isHub: false, delivery: '24-48 Hours transit', desc: 'Active EPC supply corridor' },
  { id: 'hyderabad', name: 'Hyderabad', x: 48.0, y: 64.0, state: 'Telangana', isHub: false, delivery: '24-48 Hours transit', desc: 'Commercial & industrial hub' },
  { id: 'kochi', name: 'Kochi', x: 42.0, y: 84.5, state: 'Kerala', isHub: false, delivery: '24-48 Hours transit', desc: 'Rooftop & coastal installations' },
  { id: 'mumbai', name: 'Mumbai', x: 30.5, y: 58.0, state: 'Maharashtra', isHub: false, delivery: '48-72 Hours transit', desc: 'Western industrial corridor' },
  { id: 'pune', name: 'Pune', x: 33.0, y: 62.0, state: 'Maharashtra', isHub: false, delivery: '48-72 Hours transit', desc: 'Automotive & manufacturing plants' },
  { id: 'ahmedabad', name: 'Ahmedabad', x: 27.5, y: 47.0, state: 'Gujarat', isHub: false, delivery: '48-72 Hours transit', desc: 'Solar parks & industrial captive' },
  { id: 'delhi', name: 'Delhi NCR', x: 41.0, y: 31.0, state: 'Delhi NCR', isHub: false, delivery: '48-72 Hours transit', desc: 'North India commercial projects' },
  { id: 'jaipur', name: 'Jaipur', x: 36.5, y: 36.0, state: 'Rajasthan', isHub: false, delivery: '48-72 Hours transit', desc: 'High-irradiance solar zone' },
  { id: 'lucknow', name: 'Lucknow', x: 54.0, y: 36.5, state: 'Uttar Pradesh', isHub: false, delivery: '48-72 Hours transit', desc: 'State rooftop & pump projects' },
  { id: 'kolkata', name: 'Kolkata', x: 74.0, y: 48.0, state: 'West Bengal', isHub: false, delivery: '48-72 Hours transit', desc: 'Eastern distribution node' },
  { id: 'bhubaneswar', name: 'Bhubaneswar', x: 67.0, y: 56.5, state: 'Odisha', isHub: false, delivery: '48-72 Hours transit', desc: 'Mining & coastal clean energy' },
  { id: 'guwahati', name: 'Guwahati', x: 86.5, y: 35.0, state: 'Assam', isHub: false, delivery: '72-96 Hours transit', desc: 'North-East regional gateway' },
]

// Journey Timeline (Placeholder milestones)
// TODO: Replace with verified company incorporation dates and achievements
export const JOURNEY_MILESTONES = [
  {
    year: '2014',
    title: 'Foundational Industry Experience',
    desc: 'Founders start engineering and supply engagements in the Indian solar and renewable space.',
    // TODO: update with exact company founding milestones
    isPlaceholder: true,
  },
  {
    year: '2018',
    title: 'Pan-India Distribution Expansion',
    desc: 'Expanded direct relationships with tier-1 manufacturers and initiated multi-state logistics dispatch.',
    isPlaceholder: true,
  },
  {
    year: '2021',
    title: 'Central Warehouse at Madhavaram',
    desc: 'Commissioned modern high-capacity warehousing facility in Chennai to support buffer stocking.',
    isPlaceholder: true,
  },
  {
    year: '2024',
    title: 'DCR Kits & PM Surya Ghar Acceleration',
    desc: 'Rolled out specialized certified one-box DCR solar kits for installers participating in national subsidy programs.',
    isPlaceholder: true,
  },
  {
    year: '2026',
    title: 'Next-Gen Energy Tech Platform',
    desc: 'Expanding into hybrid storage, small wind turbine integrations, and smart monitoring distribution.',
    isPlaceholder: true,
  },
]

// Trust Checklist
export const TRUST_CHECKLIST = [
  { title: 'Experienced Team', desc: 'Over a decade of industry expertise guiding equipment selection and system matching.' },
  { title: 'Premium Quality Products', desc: 'Certified Tier-1 global and domestic manufacturers meeting strict BIS and ALMM norms.' },
  { title: 'Fast & Insured Delivery', desc: 'Pan-India dispatch network reaching project sites across 28 states safely.' },
  { title: 'Reliable Warehousing', desc: 'Dedicated Chennai facility maintaining buffer stocks for immediate contractor dispatch.' },
  { title: 'Long-term Partnerships', desc: 'Dedicated account managers and wholesale pricing structures built for EPC growth.' },
  { title: 'Strong Customer Support', desc: '24/7 emergency support desk and responsive resolution within one business day.' },
]
