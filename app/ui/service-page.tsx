import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_URL } from '../site'
import type { Lang } from './localize'
import { SERVICES, serviceBySlug, servicePath } from './services'

// A page for one service, in one language. Uses the home page's styles (header, sections, steps, FAQ, footer)
// and needs no script: nothing on it is interactive beyond links and the FAQ's native <details>.

const PHONE = '+968 7636 8205'
const TEL = 'tel:+96876368205'
const WA = 'https://wa.me/96878061190'

const UI = {
  en: {
    home: 'Home', services: 'Services', call: 'Call now', callShort: 'Call', whatsapp: 'WhatsApp', lang: 'عربي',
    strip: '24-hour emergency sewage line', address: 'Mahbellah Saniya · Al Khoud, Muscat, Oman',
    eyebrow: 'Service in Muscat, Oman',
    facts: ['24 hours, 7 days', '5,000–12,000 gallon tankers', 'Price agreed on the phone', 'Licensed disposal'],
    tankersTitle: 'Which tanker size?',
    tankersIntro: 'Tell us your tank and we’ll send the one that fits — you never pay for a bigger truck than the job needs.',
    tankers: [['5,000', 'Villas, houses and small septic tanks'], ['8,000', 'Apartment buildings, restaurants, schools'], ['12,000', 'Hotels, compounds, factories, construction sites']],
    gallons: 'gallons',
    faqTitle: 'Questions',
    areasTitle: 'Areas we cover',
    areas: 'The whole of Muscat Governorate — Muscat, Muttrah, Bawshar, Seeb, Al Amerat and Qurayyat — from our yards in Mahbellah Saniya (Mabelah Industrial Area) and Al Khoud.',
    otherTitle: 'Other services',
    ctaTitle: 'Need it done today?',
    ctaText: 'Call or WhatsApp — the line is answered 24 hours a day, including weekends and public holidays.',
    rights: 'All rights reserved.', by: 'Designed & developed by',
    crumbs: 'Breadcrumb', quick: 'Quick contact', main: 'Main', homeLabel: 'Sewerage Water Tank — home',
    nav: [['Services', '/#services'], ['Tankers', '/#fleet'], ['How it works', '/#process'], ['FAQ', '/#faq'], ['Contact', '/#contact']],
  },
  ar: {
    home: 'الرئيسية', services: 'الخدمات', call: 'اتصل الآن', callShort: 'اتصال', whatsapp: 'واتساب', lang: 'English',
    strip: 'خط طوارئ الصرف الصحي على مدار 24 ساعة', address: 'المعبيلة الصناعية · الخوض، مسقط، سلطنة عُمان',
    eyebrow: 'خدمة في مسقط، سلطنة عُمان',
    facts: ['24 ساعة، 7 أيام', 'صهاريج 5,000–12,000 جالون', 'السعر يُتفق عليه بالهاتف', 'تخلص مرخّص'],
    tankersTitle: 'أي حجم صهريج؟',
    tankersIntro: 'أخبرنا عن خزانك وسنرسل الصهريج المناسب — دون أن تدفع ثمن صهريج أكبر من حاجتك.',
    tankers: [['5,000', 'الفلل والمنازل والبيارات الصغيرة'], ['8,000', 'العمارات السكنية والمطاعم والمدارس'], ['12,000', 'الفنادق والمجمعات والمصانع ومواقع البناء']],
    gallons: 'جالون',
    faqTitle: 'أسئلة شائعة',
    areasTitle: 'المناطق التي نغطيها',
    areas: 'محافظة مسقط كاملة — مسقط ومطرح وبوشر والسيب والعامرات وقريات — انطلاقاً من مواقعنا في المعبيلة الصناعية والخوض.',
    otherTitle: 'خدمات أخرى',
    ctaTitle: 'تحتاج الخدمة اليوم؟',
    ctaText: 'اتصل أو راسلنا على واتساب — نرد على مدار 24 ساعة بما في ذلك العطل الأسبوعية والرسمية.',
    rights: 'جميع الحقوق محفوظة.', by: 'تصميم وتطوير',
    crumbs: 'مسار التنقل', quick: 'تواصل سريع', main: 'القائمة الرئيسية', homeLabel: 'Sewerage Water Tank — الصفحة الرئيسية',
    nav: [['الخدمات', '/ar#services'], ['الصهاريج', '/ar#fleet'], ['طريقة العمل', '/ar#process'], ['الأسئلة', '/ar#faq'], ['تواصل معنا', '/ar#contact']],
  },
} as const

const Icon = ({ d, className = 'i' }: { d: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    {d.split('|').map((p, i) => <path key={i} d={p} />)}
  </svg>
)
const PHONE_ICON = 'M5 3.5h3.6l1.9 4.8-2.3 1.5a11.5 11.5 0 0 0 6 6l1.5-2.3 4.8 1.9V19a2 2 0 0 1-2 2A17.5 17.5 0 0 1 3 5.5a2 2 0 0 1 2-2z'
const WA_ICON = 'M20.5 11.7a8.6 8.6 0 0 1-12.7 7.5L3.5 20.5l1.4-4.1a8.6 8.6 0 1 1 15.6-4.7z|M9 8.3c-.4 2.9 3 6.9 6.6 6.8l.9-1.6-2-1-.9.8a4.8 4.8 0 0 1-2.4-2.4l.8-.9-1-2z'
const PIN_ICON = 'M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z|M12 7.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8z'
const CHECK_ICON = 'M4 12.5l5 5L20 6.5'

const Logo = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="var(--ink)" />
    <circle cx="24" cy="24" r="18.5" fill="none" stroke="var(--brass-hi)" strokeWidth="1.6" />
    <circle cx="24" cy="24" r="12" fill="none" stroke="var(--brass-hi)" strokeWidth="1.2" opacity=".7" />
    <path d="M12.5 24h23M24 12.5v23M16 16l16 16M32 16L16 32" stroke="var(--brass-hi)" strokeWidth="1" opacity=".45" />
    <path d="M24 15.5c3.2 3.8 5.3 6.8 5.3 9.3a5.3 5.3 0 0 1-10.6 0c0-2.5 2.1-5.5 5.3-9.3z" fill="var(--brass-hi)" />
  </svg>
)

const Brand = ({ href, label }: { href: string; label?: string }) => (
  <a className="brand" href={href} aria-label={label}>
    <Logo />
    <span className="brand-txt">
      <span className="brand-en">Sewerage Water Tank</span>
      <span className="brand-ar" lang="ar" dir="rtl">الشفط میاں مجاری</span>
    </span>
  </a>
)

export const SERVICE_SLUGS = SERVICES.map(s => s.slug)

export function serviceMetadata(lang: Lang, slug: string): Metadata {
  const s = serviceBySlug(slug)
  if (!s) return {}
  const c = s[lang]
  const path = servicePath(lang, slug)
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: path,
      languages: { en: servicePath('en', slug), ar: servicePath('ar', slug), 'x-default': servicePath('en', slug) },
    },
    openGraph: {
      type: 'website',
      url: path,
      siteName: 'Sewerage Water Tank',
      title: c.title,
      description: c.description,
      locale: lang === 'ar' ? 'ar_OM' : 'en_US',
      images: [{ url: lang === 'ar' ? '/images/tank-ar.jpg' : '/images/tank.jpg', width: 1624, height: 969 }],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  }
}

function serviceData(lang: Lang, slug: string) {
  const s = serviceBySlug(slug)!
  const c = s[lang]
  const url = `${SITE_URL}${servicePath(lang, slug)}`
  const home = lang === 'ar' ? `${SITE_URL}/ar` : SITE_URL
  const ui = UI[lang]
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: c.name,
        serviceType: c.name,
        description: c.description,
        url,
        inLanguage: lang,
        provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business`, name: 'Sewerage Water Tank', telephone: '+96876368205', url: SITE_URL },
        areaServed: { '@type': 'AdministrativeArea', name: lang === 'ar' ? 'محافظة مسقط' : 'Muscat Governorate' },
        hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: ui.home, item: home },
          { '@type': 'ListItem', position: 2, name: ui.services, item: `${home}#services` },
          { '@type': 'ListItem', position: 3, name: c.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: c.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }
}

export default function ServicePage({ lang, slug }: { lang: Lang; slug: string }) {
  const s = serviceBySlug(slug)
  if (!s) notFound()
  const c = s[lang]
  const ui = UI[lang]
  const ar = lang === 'ar'
  const homeHref = ar ? '/ar' : '/'
  const others = SERVICES.filter(o => o.slug !== slug)

  return (
    <div className="site svc-page" id="site" data-lang={lang} dir={ar ? 'rtl' : 'ltr'} lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData(lang, slug)).replace(/</g, '\\u003c') }} />

      <div className="strip">
        <div className="wrap">
          <div className="strip-line">
            <span className="pulse" aria-hidden="true" />
            <span>{ui.strip}</span>
            <a href={TEL}><span className="ltr">{PHONE}</span></a>
          </div>
          <div className="strip-right">
            <span className="strip-loc"><Icon d={PIN_ICON} />{ui.address}</span>
            <a className="lang-btn" href={servicePath(ar ? 'en' : 'ar', slug)} hrefLang={ar ? 'en' : 'ar'} lang={ar ? 'en' : 'ar'}>{ui.lang}</a>
          </div>
        </div>
      </div>

      <header className="head">
        <div className="wrap">
          <Brand href={homeHref} label={ui.homeLabel} />
          <nav className="nav" aria-label={ui.main}>
            {ui.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="btn call" href={TEL}><Icon d={PHONE_ICON} />{ui.call}</a>
        </div>
      </header>

      <main>
        <section className="svc-hero">
          <div className="wrap">
            <nav className="crumbs" aria-label={ui.crumbs}>
              <ol>
                <li><a href={homeHref}>{ui.home}</a></li>
                <li><a href={ar ? '/ar#services' : '/#services'}>{ui.services}</a></li>
                <li aria-current="page">{c.name}</li>
              </ol>
            </nav>
            <div className="svc-hero-grid">
              <div>
                <p className="eyebrow">{ui.eyebrow}</p>
                <h1>{c.h1}</h1>
                <p className="lede">{c.lede}</p>
                <div className="hero-cta">
                  <a className="btn btn-brass" href={TEL}><Icon d={PHONE_ICON} />{ui.call}<span className="ltr">{PHONE}</span></a>
                  <a className="btn btn-ghost" href={WA} target="_blank" rel="noopener"><Icon d={WA_ICON} />{ui.whatsapp}</a>
                </div>
              </div>
              <span className="svc-hero-ico" aria-hidden="true"><Icon d={s.icon} /></span>
            </div>
            <ul className="svc-facts">
              {ui.facts.map(f => <li key={f}><Icon d={CHECK_ICON} />{f}</li>)}
            </ul>
          </div>
        </section>

        <section className="sec">
          <div className="wrap two">
            <div>
              <h2 className="sub-h">{c.whenTitle}</h2>
              <ul className="why">
                {c.when.map(w => <li key={w}><Icon d={CHECK_ICON} /><p>{w}</p></li>)}
              </ul>
            </div>
            <div>
              <h2 className="sub-h">{ui.tankersTitle}</h2>
              <p className="svc-note">{ui.tankersIntro}</p>
              <ul className="svc-tankers">
                {ui.tankers.map(([gal, best]) => (
                  <li key={gal}><b className="ltr">{gal}</b> <small>{ui.gallons}</small><span>{best}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="sec fleet-bg">
          <div className="wrap">
            <div className="sec-head"><h2>{c.stepsTitle}</h2></div>
            <ol className="steps in">
              {c.steps.map((st, i) => (
                <li key={st.t} className="in"><span className="num">{i + 1}</span><h3>{st.t}</h3><p>{st.d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="sec-head"><h2>{ui.faqTitle}</h2></div>
            <div className="faq">
              {c.faq.map((f, i) => (
                <details key={f.q} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="sec fleet-bg">
          <div className="wrap two">
            <div>
              <h2 className="sub-h">{ui.areasTitle}</h2>
              <p className="svc-note">{ui.areas}</p>
            </div>
            <div>
              <h2 className="sub-h">{ui.otherTitle}</h2>
              <ul className="svc-other">
                {others.map(o => (
                  <li key={o.slug}><a href={servicePath(lang, o.slug)}><Icon d={o.icon} />{o[lang].name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="svc-cta">
          <div className="wrap">
            <h2>{ui.ctaTitle}</h2>
            <p>{ui.ctaText}</p>
            <div className="hero-cta">
              <a className="btn btn-brass" href={TEL}><Icon d={PHONE_ICON} />{ui.call}<span className="ltr">{PHONE}</span></a>
              <a className="btn btn-ghost" href={WA} target="_blank" rel="noopener"><Icon d={WA_ICON} />{ui.whatsapp}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <Brand href={homeHref} />
          <p className="foot-addr"><Icon d={PIN_ICON} />{ui.address}</p>
          <p>© {new Date().getFullYear()} Sewerage Water Tank. {ui.rights}</p>
          <p className="foot-by"><span className={lang}>{ui.by}</span> <span className="by-name ltr">Developer.Ammad</span></p>
        </div>
      </footer>

      <nav className="mbar" aria-label={ui.quick}>
        <a href={TEL}><Icon d={PHONE_ICON} />{ui.callShort}</a>
        <a href={WA} target="_blank" rel="noopener"><Icon d={WA_ICON} />{ui.whatsapp}</a>
      </nav>
    </div>
  )
}
