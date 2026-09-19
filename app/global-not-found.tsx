import type { Metadata } from 'next'
import { Marcellus, Noto_Naskh_Arabic, Public_Sans } from 'next/font/google'

// Shown for any address that isn't a page. English and Arabic have separate root layouts, so this page
// brings its own <html>, fonts and a few styles rather than the whole site stylesheet.
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-public-sans' })
const marcellus = Marcellus({ weight: '400', subsets: ['latin'], variable: '--font-marcellus' })
const naskh = Noto_Naskh_Arabic({ subsets: ['arabic'], variable: '--font-naskh' })

export const metadata: Metadata = {
  title: 'Page not found | Sewerage Water Tank',
}

const css = `
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0C0F14;color:#B7BCC4;
  font-family:var(--font-public-sans),system-ui,sans-serif;padding:24px;box-sizing:border-box;text-align:center}
main{max-width:520px}
.logo{width:64px;height:64px}
.code{font-family:var(--font-marcellus),Georgia,serif;font-size:72px;line-height:1;margin:18px 0 6px;color:#E9CF7A;letter-spacing:.08em}
h1{font-family:var(--font-marcellus),Georgia,serif;font-weight:400;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#F7F3EB;margin:0 0 10px}
p{margin:0 0 6px;font-size:16px;line-height:1.6}
.ar{font-family:var(--font-naskh),Tahoma,sans-serif;font-size:18px}
.ar h1{font-family:inherit;letter-spacing:0;text-transform:none;font-weight:600;margin-top:18px}
nav{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:26px}
a{display:inline-flex;align-items:center;padding:12px 20px;border-radius:3px;font-weight:600;font-size:15px;text-decoration:none;
  border:1px solid rgba(247,243,235,.24);color:#F7F3EB;transition:border-color .2s,color .2s,background .2s}
a:hover{border-color:#BE9A22;color:#BE9A22}
a.main{background:#BE9A22;border-color:#BE9A22;color:#140F00}
a.main:hover{background:#F7F3EB;border-color:#F7F3EB;color:#140F00}
a:focus-visible{outline:2px solid #BE9A22;outline-offset:3px}
`

export default function GlobalNotFound() {
  return (
    <html lang="en" className={[publicSans, marcellus, naskh].map(f => f.variable).join(' ')}>
      <body>
        <style>{css}</style>
        <main>
          <svg className="logo" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="#F7F3EB" />
            <circle cx="24" cy="24" r="18.5" fill="none" stroke="#BE9A22" strokeWidth="1.6" />
            <circle cx="24" cy="24" r="12" fill="none" stroke="#BE9A22" strokeWidth="1.2" opacity=".7" />
            <path d="M12.5 24h23M24 12.5v23M16 16l16 16M32 16L16 32" stroke="#BE9A22" strokeWidth="1" opacity=".45" />
            <path d="M24 15.5c3.2 3.8 5.3 6.8 5.3 9.3a5.3 5.3 0 0 1-10.6 0c0-2.5 2.1-5.5 5.3-9.3z" fill="#BE9A22" />
          </svg>
          <p className="code">404</p>
          <h1>Page not found</h1>
          <p>This address doesn&apos;t exist. Our sewage tankers are still on call 24/7.</p>
          <div className="ar" lang="ar" dir="rtl">
            <h1>الصفحة غير موجودة</h1>
            <p>هذا الرابط غير موجود. صهاريجنا متاحة على مدار 24 ساعة.</p>
          </div>
          <nav>
            <a className="main" href="/">Home</a>
            <a href="/ar" lang="ar">الرئيسية</a>
            <a href="tel:+96876368205">Call +968 7636 8205</a>
          </nav>
        </main>
      </body>
    </html>
  )
}
