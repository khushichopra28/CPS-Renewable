import { useEffect } from 'react'
import { SITE_CONFIG } from '../config/site'

export function useSEO({
  title,
  description,
  canonical,
  ogType = 'website',
}) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title
      ? `${title} | ${SITE_CONFIG.name}`
      : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`
    document.title = formattedTitle

    // 2. Update Meta Description
    const metaDesc = description || SITE_CONFIG.positioning
    let descTag = document.querySelector('meta[name="description"]')
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.name = 'description'
      document.head.appendChild(descTag)
    }
    descTag.setAttribute('content', metaDesc)

    // 3. Update Open Graph
    const updateOrCreateMeta = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateOrCreateMeta('og:title', formattedTitle)
    updateOrCreateMeta('og:description', metaDesc)
    updateOrCreateMeta('og:type', ogType)
    if (canonical) {
      updateOrCreateMeta('og:url', canonical)
    }

    // 4. Inject / Update LocalBusiness JSON-LD
    const jsonLdId = 'cps-localbusiness-schema'
    let scriptTag = document.getElementById(jsonLdId)
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.id = jsonLdId
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.legalName,
      description: SITE_CONFIG.positioning,
      telephone: SITE_CONFIG.primaryPhone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '19/8 Patel Road, Perambur',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600011',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.headOffice.coordinates.lat,
        longitude: SITE_CONFIG.headOffice.coordinates.lng,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:30',
        },
      ],
      url: 'https://cpsrenewables.com',
    }

    scriptTag.text = JSON.stringify(schemaData)
  }, [title, description, canonical, ogType])
}
