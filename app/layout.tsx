import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Amiri,
  IBM_Plex_Mono,
  Lemonada,
  Marcellus,
  Noto_Naskh_Arabic,
  Public_Sans,
} from 'next/font/google'
import './globals.css'
import { SITE_URL } from './site'

// Self-hosted by next/font; globals.css uses them through these CSS variables.
// The two Arabic body fonts aren't preloaded: they are only needed once the visitor switches to Arabic.
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })
const marcellus = Marcellus({ weight: '400', subsets: ['latin'], variable: '--font-marcellus' })
const plexMono = IBM_Plex_Mono({ weight: '500', subsets: ['latin'], variable: '--font-plex-mono' })
const lemonada = Lemonada({ subsets: ['arabic', 'latin'], variable: '--font-lemonada' })
const amiri = Amiri({ weight: ['400', '700'], subsets: ['arabic', 'latin'], variable: '--font-amiri', preload: false })
const naskh = Noto_Naskh_Arabic({ subsets: ['arabic'], variable: '--font-naskh', preload: false })

const description =
  'Sewerage Water Tank (الشفط میاں مجاری), Mahbellah Saniya and Al Khoud, Muscat, Oman — 24/7 sewage suction, septic tank emptying and grease trap cleaning.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sewerage Water Tank',
  description,
  alternates: { canonical: '/' },
  // The preview card when the link is shared on WhatsApp, Facebook, X and the like
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Sewerage Water Tank',
    title: 'Sewerage Water Tank — الشفط میاں مجاری',
    description,
    locale: 'en_US',
    alternateLocale: ['ar_OM'],
    images: [{ url: '/images/tank.jpg', width: 1624, height: 969, alt: 'Our yellow suction tanker emptying a manhole' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sewerage Water Tank — الشفط میاں مجاری',
    description,
    images: ['/images/tank.jpg'],
  },
}

// Entrance motion only when the visitor allows it; if the page script never runs, fall back to a static page.
const motionSetup = `
if (window.matchMedia && matchMedia("(prefers-reduced-motion: no-preference)").matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion");
  setTimeout(function () { if (!window.__rv) document.documentElement.classList.remove("motion"); }, 4000);
}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [publicSans, marcellus, plexMono, lemonada, amiri, naskh].map(f => f.variable).join(' ')
  return (
    // The motion script adds a class to <html> before hydration, and browser extensions
    // (Grammarly, ColorZilla, password managers) add attributes to <body> before React loads
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Script id="motion-setup" strategy="beforeInteractive">
          {motionSetup}
        </Script>
      </body>
    </html>
  )
}
