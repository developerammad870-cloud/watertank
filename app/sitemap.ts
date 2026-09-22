import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'
import { SERVICES, servicePath } from './ui/services'

// Every page in both languages, each pointing at its other-language version so search engines serve the right one
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const languages = { en: SITE_URL, ar: `${SITE_URL}/ar` }
  const home: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1, alternates: { languages }, images: [`${SITE_URL}/images/tank.jpg`] },
    { url: `${SITE_URL}/ar`, lastModified: now, changeFrequency: 'monthly', priority: 1, alternates: { languages }, images: [`${SITE_URL}/images/tank-ar.jpg`] },
  ]
  const services: MetadataRoute.Sitemap = SERVICES.flatMap(s => {
    const alt = { en: `${SITE_URL}${servicePath('en', s.slug)}`, ar: `${SITE_URL}${servicePath('ar', s.slug)}` }
    return (['en', 'ar'] as const).map(lang => ({
      url: alt[lang], lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8, alternates: { languages: alt },
    }))
  })
  return [...home, ...services]
}
