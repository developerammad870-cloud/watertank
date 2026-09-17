import { SITE_URL } from '../site'
import type { Lang } from './localize'

// Structured data (schema.org JSON-LD) describing the business for Google: what it does, where, when and how to reach it.
// Every fact here is also visible on the page; Google ignores or penalises markup that isn't.

const PHONE = '+96876368205'
const WHATSAPP = '+96878061190'
const EMAIL = 'shafit.mianmajari@gmail.com'

const WILAYATS = [
  { en: 'Muscat', ar: 'مسقط' },
  { en: 'Muttrah', ar: 'مطرح' },
  { en: 'Bawshar', ar: 'بوشر' },
  { en: 'Seeb', ar: 'السيب' },
  { en: 'Al Amerat', ar: 'العامرات' },
  { en: 'Qurayyat', ar: 'قريات' },
]

const SERVICES = [
  { name: { en: 'Sewage water suction', ar: 'شفط مياه المجاري' }, description: { en: 'Fast vacuum pumping of sewage water from tanks, pits and flooded areas.', ar: 'شفط سريع لمياه المجاري من الخزانات والحفر والأماكن المغمورة.' } },
  { name: { en: 'Septic tank emptying', ar: 'تفريغ البيارات' }, description: { en: 'Complete emptying of septic tanks, with settled sludge removed from the bottom.', ar: 'تفريغ كامل للبيارات مع إزالة الرواسب المتراكمة في القاع.' } },
  { name: { en: 'Grease trap cleaning', ar: 'تنظيف مصائد الشحوم' }, description: { en: 'Scheduled cleaning for restaurants, hotels and bakeries — drains keep flowing, inspections pass.', ar: 'تنظيف دوري للمطاعم والفنادق والمخابز لضمان جريان التصريف واجتياز التفتيش.' } },
  { name: { en: 'Manhole & drain unblocking', ar: 'فتح غرف التفتيش والمجاري' }, description: { en: 'High-pressure water jetting to clear blocked manholes, drain lines and chokes.', ar: 'تسليك بضغط الماء العالي لفتح غرف التفتيش وخطوط الصرف المسدودة.' } },
  { name: { en: 'Sump pit & pump station cleaning', ar: 'تنظيف غرف الضخ ومحطات الرفع' }, description: { en: 'Desilting of sump pits, lifting stations and wet wells for buildings and compounds.', ar: 'إزالة الرواسب من غرف الضخ ومحطات الرفع للمباني والمجمعات.' } },
  { name: { en: 'Emergency overflow response', ar: 'طوارئ فيضان الخزانات' }, description: { en: 'Night, weekend and holiday call-outs when a tank overflows or sewage backs up.', ar: 'استجابة ليلية وفي العطل عند فيضان الخزان أو ارتداد مياه الصرف.' } },
]

const FAQ = [
  { q: { en: 'How often should a septic tank be emptied?', ar: 'كم مرة يجب تفريغ البيارة؟' }, a: { en: "For a family house, usually every 6–12 months. Signs it's due: slow drains, a smell near the cover, or water pooling around the tank.", ar: 'للمنزل العائلي عادةً كل 6 إلى 12 شهراً. من علامات الامتلاء: بطء التصريف، أو رائحة قرب الغطاء، أو تجمّع المياه حول الخزان.' } },
  { q: { en: 'Do you come at night or on Fridays?', ar: 'هل تأتون ليلاً أو يوم الجمعة؟' }, a: { en: 'Yes. The line is answered 24 hours a day, including weekends and public holidays.', ar: 'نعم، نرد على الاتصالات على مدار 24 ساعة بما في ذلك العطل الأسبوعية والرسمية.' } },
  { q: { en: 'Which tanker size do I need?', ar: 'ما حجم الصهريج المناسب لي؟' }, a: { en: "Most houses need 5,000 gallons; buildings and restaurants usually 8,000; hotels and compounds 12,000. Tell us the tank size if you know it and we'll match it.", ar: 'معظم المنازل تحتاج 5,000 جالون، والعمارات والمطاعم غالباً 8,000، والفنادق والمجمعات 12,000. أخبرنا بحجم خزانك إن كنت تعرفه وسنختار المناسب.' } },
  { q: { en: 'Where does the waste go?', ar: 'أين تذهب المخلفات؟' }, a: { en: 'To a licensed wastewater treatment plant. We never discharge into drains, wadis or open land.', ar: 'إلى محطة معالجة مياه صرف مرخّصة، ولا نفرغها أبداً في المجاري أو الأودية أو الأراضي المكشوفة.' } },
  { q: { en: 'Can I book regular cleaning?', ar: 'هل يمكن حجز تنظيف دوري؟' }, a: { en: "Yes — restaurants and buildings can set a monthly or quarterly schedule, and we'll remind you before each visit.", ar: 'نعم، يمكن للمطاعم والمباني تحديد جدول شهري أو ربع سنوي، وسنذكّرك قبل كل زيارة.' } },
]

const ALL_DAY_EVERY_DAY = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
}

export function structuredData(lang: Lang) {
  const ar = lang === 'ar'
  const pageUrl = ar ? `${SITE_URL}/ar` : SITE_URL
  const businessId = `${SITE_URL}/#business`
  const photo = `${SITE_URL}/images/tank.jpg`
  const muscat = { '@type': 'AdministrativeArea', name: ar ? 'محافظة مسقط' : 'Muscat Governorate' }

  const business = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': businessId,
    name: 'Sewerage Water Tank',
    alternateName: ['الشفط میاں مجاری', 'الشفط مياه مجاري', 'Shafit Mian Majari'],
    description: ar
      ? 'شفط مياه المجاري وتفريغ البيارات وتنظيف مصائد الشحوم وفتح غرف التفتيش في جميع مناطق مسقط على مدار 24 ساعة، بصهاريج شفط من 5,000 إلى 12,000 جالون والتخلص في محطات معالجة مرخّصة.'
      : 'Sewage suction, septic tank emptying, grease trap cleaning and manhole unblocking across Muscat, 24 hours a day, with 5,000–12,000 gallon suction tankers and disposal at licensed treatment plants.',
    url: pageUrl,
    image: [photo],
    logo: `${SITE_URL}/icon.svg`,
    telephone: PHONE,
    email: EMAIL,
    contactPoint: [
      { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service', areaServed: 'OM', availableLanguage: ['Arabic', 'English'], hoursAvailable: ALL_DAY_EVERY_DAY },
      { '@type': 'ContactPoint', telephone: WHATSAPP, contactType: 'reservations', areaServed: 'OM', availableLanguage: ['Arabic', 'English'] },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: ar ? 'المعبيلة الصناعية' : 'Mahbellah Saniya (Mabelah Industrial Area)',
      addressRegion: ar ? 'مسقط' : 'Muscat',
      addressCountry: 'OM',
    },
    department: {
      '@type': 'LocalBusiness',
      name: ar ? 'Sewerage Water Tank — الخوض' : 'Sewerage Water Tank — Al Khoud',
      telephone: PHONE,
      address: { '@type': 'PostalAddress', addressLocality: ar ? 'الخوض' : 'Al Khoud', addressRegion: ar ? 'مسقط' : 'Muscat', addressCountry: 'OM' },
      openingHoursSpecification: ALL_DAY_EVERY_DAY,
    },
    openingHoursSpecification: ALL_DAY_EVERY_DAY,
    areaServed: [muscat, ...WILAYATS.map(w => ({ '@type': 'City', name: w[lang] }))],
    knowsLanguage: ['ar', 'en'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: ar ? 'خدمات الشفط والصرف الصحي' : 'Sewage suction services',
      itemListElement: SERVICES.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name[lang], description: s.description[lang], areaServed: muscat, provider: { '@id': businessId } },
      })),
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Sewerage Water Tank',
    alternateName: 'الشفط میاں مجاری',
    inLanguage: ['en', 'ar'],
    publisher: { '@id': businessId },
  }

  const webpage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    inLanguage: lang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': businessId },
    primaryImageOfPage: { '@type': 'ImageObject', url: photo, width: 1624, height: 969 },
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    inLanguage: lang,
    mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q[lang], acceptedAnswer: { '@type': 'Answer', text: f.a[lang] } })),
  }

  return { '@context': 'https://schema.org', '@graph': [business, website, webpage, faq] }
}
