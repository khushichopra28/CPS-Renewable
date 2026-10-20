// ─────────────────────────────────────────────────────────────
// CPS RENEWABLES LLP — Global Brand and Company Configuration
// ─────────────────────────────────────────────────────────────
// Edit company information, contact details, addresses, and hours here.
// Components read from this file so content can be modified without code changes.

export const SITE_CONFIG = {
  name: 'CPS Renewables LLP',
  legalName: 'CPS Renewables LLP',
  subBrand: 'Sustainable Energy',
  tagline: "Powering India's Renewable Future",
  positioning:
    "One of India's fastest-growing suppliers of solar, wind and clean-energy products. Trusted by EPC contractors, businesses and communities. Pan-India delivery, 24/7 customer support.",
  responsePromise: 'Our team responds within one business day.',
  
  // Mission and Vision
  mission:
    'To accelerate India’s transition toward clean and sustainable energy through reliable renewable energy products, innovative solutions, and exceptional customer service.',
  vision:
    'To become India’s most trusted renewable energy solutions provider by empowering businesses and communities with efficient, sustainable, and affordable clean energy technologies.',

  // Contact phones (Display & raw tel links)
  phones: [
    { display: '+91 92345 51775', tel: '+919234551775' },
    { display: '+91 98404 04711', tel: '+919840404711' },
  ],
  primaryPhone: '+91 92345 51775',
  primaryTel: '+919234551775',

  // Email
  email: 'info@cpsrenewables.com',

  // Addresses
  headOffice: {
    title: 'Head Office',
    address: '19/8 Patel Road, Perambur, Chennai - 600011, Tamil Nadu, India',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600011',
    coordinates: { lat: 13.1096, lng: 80.2450 },
    // Google Maps embed URL
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8030283833777!2d80.2428113!3d13.1096000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265eb45780a49%3A0x6b49e8a8b19a16f2!2s19%2F8%2C%20Patel%20Rd%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600011!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.google.com/?q=13.1096,80.2450',
  },

  warehouse: {
    title: 'Central Dispatch Warehouse',
    address:
      'Door No: A2/347, MRH Road, Opp. Nayara Petrol Pump, Madhavaram, Chennai 600060',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600060',
    note: 'Pan-India dispatch hub with tier-1 storage and express logistics',
    directionsUrl:
      'https://maps.google.com/?q=Door+No+A2+347+MRH+Road+Opp+Nayara+Petrol+Pump+Madhavaram+Chennai+600060',
  },

  // Working Hours
  hours: '9:00 to 18:30, Mon to Sat',
  hoursDetail: {
    days: 'Monday – Saturday',
    time: '09:00 – 18:30 IST',
    sunday: 'Closed (24/7 emergency dispatch support for EPC partners)',
  },

  // WhatsApp
  whatsapp: {
    number: '919234551775',
    defaultMessage: "Hi CPS Renewables, I'd like a quote for clean energy products.",
  },

  // Hero background video (optional). If empty or file not found, procedural animated canvas/SVG hero renders.
  heroVideo: '/videos/hero.mp4',

  // Live Clean Energy Ticker defaults
  ticker: {
    baseKwh: 14852900, // illustrative starting baseline (kWh)
    ratePerSecond: 1.84, // rate of generation growth
    label: 'Clean energy powered across our supply network (Live illustrative counter)',
  },

  // Social Links
  // TODO: Replace placeholders with CPS Renewables verified social profile URLs
  socials: {
    linkedin: '#', // TODO: Add CPS Renewables LinkedIn page URL
    twitter: '#',  // TODO: Add CPS Renewables X / Twitter profile URL
    facebook: '#', // TODO: Add CPS Renewables Facebook page URL
    instagram: '#',// TODO: Add CPS Renewables Instagram profile URL
  },

  // Copyright and metadata
  copyrightYear: 2026,
  copyrightNotice: '© 2026 CPS Renewables LLP. All Rights Reserved. Powering a Sustainable Tomorrow.',
}
