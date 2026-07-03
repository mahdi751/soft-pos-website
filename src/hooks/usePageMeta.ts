import { useEffect } from 'react'
import { siteConfig } from '../constants/site'
import type { SeoConfig } from '../types/content'

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export function usePageMeta(config: SeoConfig) {
  useEffect(() => {
    const url = new URL(config.path, siteConfig.domain).toString()
    document.title = config.title

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: config.description,
    })
    ensureMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: config.keywords.join(', '),
    })
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: config.title,
    })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: config.description,
    })
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: url,
    })
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: `${siteConfig.domain}/og-cover.svg`,
    })
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: config.title,
    })
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: config.description,
    })
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: `${siteConfig.domain}/og-cover.svg`,
    })

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    let schemaScript = document.head.querySelector<HTMLScriptElement>(
      'script[data-soft-pos-schema="organization"]',
    )

    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.type = 'application/ld+json'
      schemaScript.dataset.softPosSchema = 'organization'
      document.head.appendChild(schemaScript)
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.brandName,
      url: siteConfig.domain,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressCountry: 'CA',
      },
    })
  }, [config])
}
