import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Warehouse,
  Copy,
  Check,
  Send,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import FAQAccordion from '../components/FAQAccordion'
import { SITE_CONFIG } from '../config/site'

const PROJECT_TYPES = [
  'Residential rooftop',
  'Commercial',
  'Industrial',
  'EPC / contractor supply',
  'Solar park',
  'Street lighting',
  'Water pumping / heating',
  'EV charging',
  'Maintenance',
  'Other',
]

export default function Contact() {
  useSEO({
    title: 'Contact Us & Request a Quote',
    description:
      'Reach out to CPS Renewables LLP in Perambur, Chennai. Request B2B pricing, technical consultation, or product quotes. Response within one business day.',
  })

  const [searchParams] = useSearchParams()

  // Form inputs state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    estimatedKw: '',
    projectLocation: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam hidden field
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fallbackMailtoUsed, setFallbackMailtoUsed] = useState(false)
  const [copiedKey, setCopiedKey] = useState(null)

  // Pre-fill fields from URL query params (from Calculator, Spec Drawer, Sticky button)
  useEffect(() => {
    const subjectParam = searchParams.get('subject')
    const productParam = searchParams.get('product')
    const serviceParam = searchParams.get('serviceName')
    const projectTypeParam = searchParams.get('projectType')
    const kwParam = searchParams.get('estimatedKw')
    const billParam = searchParams.get('monthlyBill')

    let initialSubject = ''
    let initialMessage = ''
    let initialType = 'Commercial'

    if (productParam) {
      initialSubject = `Product Quote Inquiry: ${productParam}`
      initialMessage = `Hello CPS Renewables team,\n\nI would like to request a quotation and stock availability for ${productParam}.\n\nProject details:\n- Target Date:\n- Delivery Location:`
    } else if (serviceParam) {
      initialSubject = `Service Inquiry: ${serviceParam}`
      initialMessage = `Hello CPS Renewables team,\n\nI am interested in discussing your ${serviceParam} offering for an upcoming project.`
    } else if (kwParam) {
      initialSubject = `Solar Sizing Quote (${kwParam} kW)`
      initialMessage = `Hello CPS Renewables team,\n\nI used your Solar Savings Calculator with a monthly bill of ₹${billParam || 'N/A'}, which estimated a ${kwParam} kW system.\n\nPlease share equipment availability and B2B pricing.`
    } else if (subjectParam === 'quote') {
      initialSubject = 'General B2B Equipment Quotation'
    } else if (subjectParam === 'partnership') {
      initialSubject = 'EPC Contractor Partnership Inquiry'
    }

    if (projectTypeParam && PROJECT_TYPES.includes(projectTypeParam)) {
      initialType = projectTypeParam
    }

    setFormData((prev) => ({
      ...prev,
      subject: initialSubject || prev.subject,
      message: initialMessage || prev.message,
      estimatedKw: kwParam || prev.estimatedKw,
      projectType: initialType || prev.projectType,
    }))
  }, [searchParams])

  // Copy to clipboard helper
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    })
  }

  // Validate form
  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Indian Phone format validation (10 digits, optional +91 or leading 0)
    const phoneClean = formData.phone.replace(/[\s-]/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(phoneClean)) {
      newErrors.phone = 'Enter a valid 10-digit Indian phone number'
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Please provide details in the message'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Bot detection check
    if (formData.honeypot) {
      setIsSuccess(true)
      return
    }

    if (!validate()) return

    setIsSubmitting(true)
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setIsSuccess(true)
        } else {
          fallbackToMailto()
        }
      } catch (err) {
        fallbackToMailto()
      } finally {
        setIsSubmitting(false)
      }
    } else {
      // Simulate submission & fallback to mailto
      setTimeout(() => {
        fallbackToMailto()
        setIsSubmitting(false)
        setIsSuccess(true)
      }, 600)
    }
  }

  const fallbackToMailto = () => {
    setFallbackMailtoUsed(true)
    const mailtoSubject = encodeURIComponent(`[CPS Website Inquiry] ${formData.subject}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nCompany: ${formData.companyName}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nEstimated Capacity: ${formData.estimatedKw} kW\nLocation: ${formData.projectLocation}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:${SITE_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank')
  }

  return (
    <div className="pt-24 min-h-screen bg-ink">
      {/* ─────────────────────────────────────────────────────────────
          1. CONTACT PAGE HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-ink-2 border-b border-panel-border">
        <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-6 bg-sun/10 text-sun border border-sun/30 shadow-glow-sun/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sun animate-pulse" />
              <span>Get In Touch</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl">
              Let&apos;s build a sustainable{' '}
              <span className="text-gradient-sun">future together.</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg sm:text-xl font-light max-w-3xl leading-relaxed">
              Reach out for products, partnerships, or technical consultation. Our team responds within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT INFO TILES (With Micro Copy Buttons)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-ink border-b border-panel-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Tile */}
            <Reveal delay={0.05}>
              <div className="p-6 rounded-3xl bg-panel border border-panel-border h-full flex flex-col justify-between group glass-panel-hover">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-volt/10 border border-volt/20 text-volt flex items-center justify-center mb-4">
                    <Phone size={18} />
                  </div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Direct Phone Support
                  </h3>
                  <div className="space-y-1.5">
                    {SITE_CONFIG.phones.map((p, i) => (
                      <div key={p.tel} className="flex items-center justify-between group/line">
                        <a
                          href={`tel:${p.tel}`}
                          className="font-mono text-sm font-semibold text-white hover:text-sun transition-colors"
                        >
                          {p.display}
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopy(p.display, `phone-${i}`)}
                          aria-label={`Copy phone ${p.display}`}
                          className="text-slate-500 hover:text-white p-1"
                        >
                          {copiedKey === `phone-${i}` ? (
                            <Check size={14} className="text-volt" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-4 block">
                  Instant EPC Technical Lines
                </span>
              </div>
            </Reveal>

            {/* Email Tile */}
            <Reveal delay={0.1}>
              <div className="p-6 rounded-3xl bg-panel border border-panel-border h-full flex flex-col justify-between group glass-panel-hover">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky/10 border border-sky/20 text-sky flex items-center justify-center mb-4">
                    <Mail size={18} />
                  </div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Official Email
                  </h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-white hover:text-sun transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.email, 'email')}
                      aria-label="Copy email address"
                      className="text-slate-500 hover:text-white p-1"
                    >
                      {copiedKey === 'email' ? (
                        <Check size={14} className="text-volt" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-4 block">
                  {SITE_CONFIG.responsePromise}
                </span>
              </div>
            </Reveal>

            {/* Head Office Tile */}
            <Reveal delay={0.15}>
              <div className="p-6 rounded-3xl bg-panel border border-panel-border h-full flex flex-col justify-between group glass-panel-hover">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sun/10 border border-sun/20 text-sun flex items-center justify-center mb-4">
                    <MapPin size={18} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Head Office
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.headOffice.address, 'office')}
                      aria-label="Copy head office address"
                      className="text-slate-500 hover:text-white p-1"
                    >
                      {copiedKey === 'office' ? (
                        <Check size={14} className="text-volt" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {SITE_CONFIG.headOffice.address}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500 mt-4 block">
                  Perambur, Chennai
                </span>
              </div>
            </Reveal>

            {/* Central Warehouse & Hours Tile */}
            <Reveal delay={0.2}>
              <div className="p-6 rounded-3xl bg-panel border border-panel-border h-full flex flex-col justify-between group glass-panel-hover">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-volt/10 border border-volt/20 text-volt flex items-center justify-center mb-4">
                    <Warehouse size={18} />
                  </div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Central Warehouse
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Madhavaram, Chennai (MRH Road)
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1 border-t border-panel-border">
                    <Clock size={13} className="text-sun flex-shrink-0" />
                    <span>{SITE_CONFIG.hours}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-volt mt-4 block">
                  Pan-India Freight Dispatches
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SMART QUOTE FORM & GOOGLE MAPS SPLIT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 relative bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="p-8 sm:p-12 rounded-3xl bg-panel border border-panel-border backdrop-blur-2xl shadow-glass">
                  <div className="mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-sun font-semibold">
                      Fast Quotation Request
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                      Talk to our renewable energy team.
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2">
                      Fill out the form below and an engineer will reply with wholesale equipment availability, data-sheets and commercial estimates.
                    </p>
                  </div>

                  {/* Success State */}
                  <AnimatePresence>
                    {isSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 rounded-2xl bg-volt/10 border border-volt/30 text-center space-y-4 my-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-volt/20 text-volt flex items-center justify-center mx-auto shadow-glow-volt">
                          <CheckCircle size={36} />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-white">
                          Inquiry Received Successfully!
                        </h3>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                          Thank you for contacting CPS Renewables. Our engineering desk has received your project parameters and will respond within one business day.
                        </p>
                        {fallbackMailtoUsed && (
                          <p className="text-xs text-slate-400 italic">
                            Your default email client was opened with your pre-filled inquiry. You can also send it directly to{' '}
                            <span className="text-sun">{SITE_CONFIG.email}</span>.
                          </p>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setIsSuccess(false)
                            setFormData({
                              fullName: '',
                              companyName: '',
                              email: '',
                              phone: '',
                              projectType: 'Commercial',
                              estimatedKw: '',
                              projectLocation: '',
                              subject: '',
                              message: '',
                              honeypot: '',
                            })
                          }}
                          className="mt-4 px-6 py-2.5 rounded-full text-xs font-heading font-semibold text-ink bg-sun-ember shadow-glow-sun"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        {/* Honeypot field for bot spam */}
                        <input
                          type="text"
                          name="website_url"
                          value={formData.honeypot}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, honeypot: e.target.value }))
                          }
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        {/* Row 1: Full Name & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="fullName"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Full Name <span className="text-sun">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              value={formData.fullName}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, fullName: e.target.value }))
                              }
                              placeholder="e.g. Ramesh Kumar"
                              className={`w-full bg-ink border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none ${
                                errors.fullName ? 'border-red-500' : 'border-panel-border focus:border-sun'
                              }`}
                            />
                            {errors.fullName && (
                              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.fullName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="companyName"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Company / EPC Entity
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              value={formData.companyName}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, companyName: e.target.value }))
                              }
                              placeholder="e.g. SolarTech Solutions"
                              className="w-full bg-ink border border-panel-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sun"
                            />
                          </div>
                        </div>

                        {/* Row 2: Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Work Email <span className="text-sun">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, email: e.target.value }))
                              }
                              placeholder="name@company.com"
                              className={`w-full bg-ink border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none ${
                                errors.email ? 'border-red-500' : 'border-panel-border focus:border-sun'
                              }`}
                            />
                            {errors.email && (
                              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.email}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Phone Number <span className="text-sun">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, phone: e.target.value }))
                              }
                              placeholder="+91 98404 04711"
                              className={`w-full bg-ink border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none ${
                                errors.phone ? 'border-red-500' : 'border-panel-border focus:border-sun'
                              }`}
                            />
                            {errors.phone && (
                              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.phone}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Row 3: Project Type & Estimated Capacity */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="projectType"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Project Type
                            </label>
                            <select
                              id="projectType"
                              value={formData.projectType}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, projectType: e.target.value }))
                              }
                              className="w-full bg-ink border border-panel-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sun"
                            >
                              {PROJECT_TYPES.map((pt) => (
                                <option key={pt} value={pt}>
                                  {pt}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="estimatedKw"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Estimated Capacity (kW / MW)
                            </label>
                            <input
                              type="text"
                              id="estimatedKw"
                              value={formData.estimatedKw}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, estimatedKw: e.target.value }))
                              }
                              placeholder="e.g. 50 kW or 1.2 MW"
                              className="w-full bg-ink border border-panel-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sun"
                            />
                          </div>
                        </div>

                        {/* Row 4: Project Location & Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="projectLocation"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Project Location (City / State)
                            </label>
                            <input
                              type="text"
                              id="projectLocation"
                              value={formData.projectLocation}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, projectLocation: e.target.value }))
                              }
                              placeholder="e.g. Chennai, Tamil Nadu"
                              className="w-full bg-ink border border-panel-border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sun"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                            >
                              Subject <span className="text-sun">*</span>
                            </label>
                            <input
                              type="text"
                              id="subject"
                              value={formData.subject}
                              onChange={(e) =>
                                setFormData((p) => ({ ...p, subject: e.target.value }))
                              }
                              placeholder="e.g. Inverter & DCR Module Quote"
                              className={`w-full bg-ink border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none ${
                                errors.subject ? 'border-red-500' : 'border-panel-border focus:border-sun'
                              }`}
                            />
                            {errors.subject && (
                              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.subject}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Message field */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                          >
                            Project Requirements / Message <span className="text-sun">*</span>
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, message: e.target.value }))
                            }
                            placeholder="Please mention module wattage, delivery timeline, or technical questions..."
                            className={`w-full bg-ink border rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none ${
                              errors.message ? 'border-red-500' : 'border-panel-border focus:border-sun'
                            }`}
                          />
                          {errors.message && (
                            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.message}
                            </p>
                          )}
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl font-heading font-semibold text-base text-ink bg-sun-ember hover:opacity-95 shadow-glow-sun transition-all duration-300 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Quote Request...</span>
                          ) : (
                            <>
                              <span>Submit Request to Engineering Team</span>
                              <Send size={16} />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>

            {/* Map & Secondary Cards Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Google Maps Embed with Dark Filter */}
              <Reveal delay={0.1}>
                <div className="p-6 rounded-3xl bg-panel border border-panel-border backdrop-blur-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">
                        Perambur Head Office
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        Coordinates: 13.1096° N, 80.2450° E
                      </span>
                    </div>
                    <a
                      href={SITE_CONFIG.headOffice.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-sun hover:underline inline-flex items-center gap-1"
                    >
                      Directions <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-panel-border bg-ink">
                    <iframe
                      title="CPS Renewables Perambur Office Map"
                      src={SITE_CONFIG.headOffice.mapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125 dark:opacity-85"
                    />
                  </div>

                  <p className="text-xs text-slate-400">
                    Located in Perambur, Chennai. Easy access from Chennai Central and national highway corridors.
                  </p>
                </div>
              </Reveal>

              {/* Direct WhatsApp Card */}
              <Reveal delay={0.2}>
                <div className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white">
                        Prefer Instant Messaging?
                      </h3>
                      <p className="text-xs text-slate-300">
                        Chat directly with our dispatch desk on WhatsApp.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                      SITE_CONFIG.whatsapp.defaultMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-heading font-semibold text-xs text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors text-center whitespace-nowrap"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </Reveal>

              {/* Direct Email Card */}
              <Reveal delay={0.25}>
                <div className="p-6 rounded-3xl bg-panel border border-panel-border space-y-2">
                  <h3 className="font-heading text-base font-bold text-white">
                    Prefer Direct Email?
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Write to us at{' '}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sun font-mono hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>{' '}
                    with your tender specifications or Bill of Materials (BOM). We respond within one business day.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FREQUENTLY ASKED QUESTIONS ACCORDION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink-2 border-t border-panel-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Clear answers on our pan-India supply reach, technical engineering support, EPC discounts, and DCR subsidies."
            centered
          />

          <FAQAccordion />
        </div>
      </section>
    </div>
  )
}
