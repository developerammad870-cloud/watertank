import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import Image from 'next/image'

export type Lang = 'en' | 'ar'

// Arabic for the text that screen readers and search engines read but visitors don't see
const AR_LABELS: Record<string, string> = {
  '24-hour emergency line': 'خط الطوارئ على مدار 24 ساعة',
  'Sewerage Water Tank — home': 'Sewerage Water Tank — الصفحة الرئيسية',
  'Main': 'القائمة الرئيسية',
  'Menu': 'القائمة',
  'Yellow sewage suction tanker of Sewerage Water Tank emptying a manhole in Muscat, Oman':
    'صهريج شفط المجاري الأصفر التابع لـ الشفط میاں مجاری أثناء شفط غرفة تفتيش في مسقط، سلطنة عُمان',
  'Choose a photo of the tanker': 'اختر صورة للصهريج',
  'Video of our yellow tanker at work': 'فيديو لصهريجنا الأصفر أثناء العمل',
  'Illustration of our yellow tanker at sunset in front of the mountains': 'رسم لصهريجنا الأصفر عند الغروب أمام الجبال',
  'Jobs we do': 'أعمالنا',
  "Illustration of our yellow tanker emptying a villa's septic tank": 'رسم لصهريجنا الأصفر أثناء تفريغ بيارة فيلا',
  'Illustration of our yellow tanker pumping water from a flooded road': 'رسم لصهريجنا الأصفر أثناء شفط المياه من طريق مغمور',
  'Illustration of our yellow tanker cleaning a restaurant grease trap': 'رسم لصهريجنا الأصفر أثناء تنظيف مصيدة شحوم مطعم',
  'Illustration of our yellow tanker on a night emergency call with its beacon on': 'رسم لصهريجنا الأصفر في طوارئ ليلية والإضاءة التحذيرية تعمل',
  '3D model of the yellow suction tanker. Drag or use the arrow keys to turn it.': 'نموذج ثلاثي الأبعاد لصهريج الشفط الأصفر. اسحبه أو استخدم مفاتيح الأسهم لتدويره.',
  'Our yellow suction tanker with six numbered features': 'صهريج الشفط الأصفر مع ست ميزات مرقّمة',
  'Tanker sizes': 'أحجام الصهاريج',
  '42% of largest tanker': '42% من أكبر صهريج',
  '67% of largest tanker': '67% من أكبر صهريج',
  '100% — largest tanker': '100% — أكبر صهريج',
  'Location shown on the map': 'الموقع المعروض على الخريطة',
  'Map of Mahbellah Saniya, Muscat': 'خريطة المعبيلة الصناعية، مسقط',
  'Map of Al Khoud, Muscat': 'خريطة الخوض، مسقط',
  'Quick contact': 'تواصل سريع',
}

type Props = Record<string, any>

// Builds one language's page from the bilingual markup: drops the other language's elements,
// picks the right option text, placeholders, labels and hero photo, and turns the language button into a link.
export function localize(node: ReactNode, lang: Lang): ReactNode {
  if (Array.isArray(node)) return node.map(n => localize(n, lang))
  if (!isValidElement(node)) return node
  const el = node as ReactElement<Props>
  const p = el.props
  const other: Lang = lang === 'en' ? 'ar' : 'en'

  if (typeof p.className === 'string' && p.className.split(/\s+/).includes(other)) return null

  if (p.id === 'langBtn') {
    return (
      <a className={p.className} id="langBtn" href={lang === 'en' ? '/ar' : '/'} hrefLang={other} lang={other}>
        {p[`data-${lang}`]}
      </a>
    )
  }

  // The hero photo: served by next/image as AVIF/WebP at the size each screen needs; Arabic gets the mirrored photo
  if (p['data-src-en'] !== undefined) {
    return (
      <Image
        className={p.className}
        src={p[`data-src-${lang}`]}
        alt={lang === 'ar' ? AR_LABELS[p.alt] ?? p.alt : p.alt}
        width={1624}
        height={969}
        sizes="(max-width: 980px) 100vw, 840px"
        fetchPriority="high"
        loading="eager"
      />
    )
  }

  const props: Props = {}
  if (lang === 'ar') {
    for (const key of ['aria-label', 'alt', 'title', 'data-title']) {
      if (typeof p[key] === 'string' && AR_LABELS[p[key]]) props[key] = AR_LABELS[p[key]]
    }
  }
  // Links whose target has a page per language (the service cards)
  if (p['data-href-en'] !== undefined) {
    props.href = p[`data-href-${lang}`]
    props['data-href-en'] = undefined
    props['data-href-ar'] = undefined
  }
  if (p['data-ph-en'] !== undefined) {
    props.placeholder = p[`data-ph-${lang}`]
    props['data-ph-en'] = undefined
    props['data-ph-ar'] = undefined
  }
  if (p.id === 'site') {
    props['data-lang'] = lang
    props.dir = lang === 'ar' ? 'rtl' : 'ltr'
    props.lang = lang
  }

  let children: ReactNode[] | undefined
  if (p['data-en'] !== undefined && p['data-ar'] !== undefined) {
    children = [p[`data-${lang}`]]
    props['data-en'] = undefined
    props['data-ar'] = undefined
  } else if (p.children !== undefined) {
    children = Children.toArray(p.children).map(child => localize(child, lang))
  }

  return children ? cloneElement(el, props, ...children) : cloneElement(el, props)
}
