import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'

// Both language versions, each pointing at the other so search engines serve the right one
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: SITE_URL, ar: `${SITE_URL}/ar` }
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1, alternates: { languages }, images: [`${SITE_URL}/images/tank.jpg`] },
    { url: `${SITE_URL}/ar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1, alternates: { languages }, images: [`${SITE_URL}/images/tank-ar.jpg`] },
  ]
}
