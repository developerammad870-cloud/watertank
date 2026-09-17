import type { Metadata } from 'next'
import type { Lang } from './localize'

// Titles and descriptions use the words people in Oman search with, in each language.
const COPY = {
  en: {
    title: 'Sewage Tanker & Septic Tank Cleaning in Muscat, Oman | 24/7',
    description:
      '24/7 sewage suction, septic tank emptying and grease trap cleaning across Muscat, Oman. 5,000–12,000 gallon tankers, licensed disposal. Call +968 7636 8205.',
    ogTitle: 'Sewerage Water Tank — 24/7 sewage suction in Muscat, Oman',
    alt: 'Yellow sewage suction tanker emptying a manhole in Muscat, Oman',
    locale: 'en_US',
    alternateLocale: 'ar_OM',
  },
  ar: {
    title: 'شفط مجاري وتفريغ بيارات في مسقط، عُمان | 24 ساعة',
    description:
      'شفط مياه المجاري وتفريغ البيارات وتسليك المجاري وتنظيف مصائد الشحوم في جميع مناطق مسقط على مدار 24 ساعة. صهاريج 5,000–12,000 جالون. اتصل ‎+968 7636 8205',
    ogTitle: 'الشفط میاں مجاری — شفط مياه المجاري في مسقط على مدار 24 ساعة',
    alt: 'صهريج شفط المجاري الأصفر أثناء شفط غرفة تفتيش في مسقط، عُمان',
    locale: 'ar_OM',
    alternateLocale: 'en_US',
  },
} as const

export function pageMetadata(lang: Lang): Metadata {
  const c = COPY[lang]
  const path = lang === 'ar' ? '/ar' : '/'
  const photo = lang === 'ar' ? '/images/tank-ar.jpg' : '/images/tank.jpg'
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: path,
      languages: { en: '/', ar: '/ar', 'x-default': '/' },
    },
    // The preview card when the link is shared on WhatsApp, Facebook, X and the like
    openGraph: {
      type: 'website',
      url: path,
      siteName: 'Sewerage Water Tank',
      title: c.ogTitle,
      description: c.description,
      locale: c.locale,
      alternateLocale: [c.alternateLocale],
      images: [{ url: photo, width: 1624, height: 969, alt: c.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.ogTitle,
      description: c.description,
      images: [photo],
    },
  }
}
