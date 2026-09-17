import type { Metadata, Viewport } from 'next'
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

// Shared by both language pages; each page sets its own title, description, preview card and
// language alternates (app/ui/seo.ts)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Sewerage Water Tank',
}

export const viewport: Viewport = {
  themeColor: '#0C0F14',
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
