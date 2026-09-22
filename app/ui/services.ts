import type { Lang } from './localize'

// One page per service, in English (/services/<slug>) and Arabic (/ar/services/<slug>).
// Each page is written for the searches people make for that job, and states only what the business
// already says on the home page: tanker sizes, 24/7 line, price agreed on the phone, licensed disposal.

type Step = { t: string; d: string }
type QA = { q: string; a: string }
export type ServiceCopy = {
  name: string
  title: string
  description: string
  h1: string
  lede: string
  whenTitle: string
  when: string[]
  stepsTitle: string
  steps: Step[]
  faq: QA[]
}
export type Service = { slug: string; icon: string; en: ServiceCopy; ar: ServiceCopy }

const STEPS_EN = {
  confirm: { t: 'Price & time confirmed', d: 'You get a fixed price and an arrival time before the tanker leaves.' },
  disposal: { t: 'Licensed disposal', d: 'The area is washed down and the load goes to a licensed treatment plant.' },
}
const STEPS_AR = {
  confirm: { t: 'تأكيد السعر والموعد', d: 'نؤكد لك السعر وموعد الوصول قبل انطلاق الصهريج.' },
  disposal: { t: 'تخلص مرخّص', d: 'نغسل المكان وننقل الحمولة إلى محطة معالجة مرخّصة.' },
}

export const SERVICES: Service[] = [
  {
    slug: 'sewage-water-suction',
    icon: 'M12 3c3.6 4.3 6 7.7 6 10.7a6 6 0 0 1-12 0C6 10.7 8.4 7.3 12 3z|M9 14.3a3 3 0 0 0 3 3',
    en: {
      name: 'Sewage water suction',
      title: 'Sewage Water Suction in Muscat, Oman | Sewerage Water Tank',
      description: 'Sewage water suction across Muscat, 24/7. Vacuum tankers from 5,000 to 12,000 gallons pump out tanks, pits and flooded areas. Call +968 7636 8205.',
      h1: 'Sewage water suction in Muscat',
      lede: 'When sewage water has to go — from a full tank, an open pit or a flooded yard — our vacuum tankers pump it out and take it to a licensed treatment plant. We work across Muscat Governorate, day and night.',
      whenTitle: 'When to call us',
      when: [
        'A holding tank or pit is full and the drains in the house have slowed down',
        'Sewage water is standing in a yard, basement or car park after a backup',
        'A construction site or workers’ camp needs its temporary tanks pumped out',
        'Rainwater mixed with sewage has pooled on a road or around a building',
      ],
      stepsTitle: 'How the job runs',
      steps: [
        { t: 'Tell us where and how much', d: 'Call or WhatsApp with the area and a rough idea of the volume — a photo helps.' },
        { t: 'The right tanker', d: 'We send a 5,000, 8,000 or 12,000 gallon tanker to match, at a price agreed before it leaves.' },
        { t: 'Vacuum suction', d: 'The crew connects sealed hoses and pumps the water out, with nothing spilled on the way.' },
        STEPS_EN.disposal,
      ],
      faq: [
        { q: 'How much sewage water can you take in one trip?', a: 'Up to 12,000 imperial gallons (about 54,550 litres) with our largest tanker. For bigger volumes we plan several trips or send more than one tanker.' },
        { q: 'Can you pump water from a flooded area, not just a tank?', a: 'Yes. The suction hose goes to wherever the water is — pits, basements, yards and roads — as long as the tanker can park within reach of the hose.' },
        { q: 'Where does the sewage go?', a: 'To a licensed wastewater treatment plant. We never discharge into drains, wadis or open land.' },
      ],
    },
    ar: {
      name: 'شفط مياه المجاري',
      title: 'شفط مياه المجاري في مسقط | الشفط میاں مجاری',
      description: 'شفط مياه المجاري في جميع مناطق مسقط على مدار 24 ساعة. صهاريج شفط من 5,000 إلى 12,000 جالون للخزانات والحفر والأماكن المغمورة. اتصل ‎+968 7636 8205',
      h1: 'شفط مياه المجاري في مسقط',
      lede: 'عندما يجب التخلص من مياه المجاري — من خزان ممتلئ أو حفرة مكشوفة أو فناء مغمور — تشفطها صهاريجنا وتنقلها إلى محطة معالجة مرخّصة. نعمل في جميع أنحاء محافظة مسقط ليلاً ونهاراً.',
      whenTitle: 'متى تتصل بنا',
      when: [
        'امتلاء خزان التجميع أو الحفرة وبطء التصريف في المنزل',
        'تجمّع مياه المجاري في الفناء أو القبو أو موقف السيارات بعد انسداد',
        'حاجة موقع بناء أو سكن عمال إلى تفريغ الخزانات المؤقتة',
        'اختلاط مياه الأمطار بمياه الصرف وتجمّعها في الطريق أو حول المبنى',
      ],
      stepsTitle: 'كيف يتم العمل',
      steps: [
        { t: 'أخبرنا بالموقع والكمية', d: 'اتصل أو راسلنا على واتساب بالمنطقة وتقدير تقريبي للكمية، والصورة تساعد.' },
        { t: 'الصهريج المناسب', d: 'نرسل صهريجاً سعته 5,000 أو 8,000 أو 12,000 جالون حسب الحاجة، بسعر متفق عليه قبل انطلاقه.' },
        { t: 'الشفط بالتفريغ', d: 'يوصل الفريق خراطيم محكمة ويشفط المياه دون أي تسرب في الطريق.' },
        STEPS_AR.disposal,
      ],
      faq: [
        { q: 'كم من مياه المجاري يمكنكم نقلها في المرة الواحدة؟', a: 'حتى 12,000 جالون إمبراطوري (حوالي 54,550 لتراً) بأكبر صهريج لدينا. للكميات الأكبر نرتب عدة نقلات أو نرسل أكثر من صهريج.' },
        { q: 'هل يمكنكم شفط المياه من مكان مغمور وليس من خزان فقط؟', a: 'نعم، يصل خرطوم الشفط إلى مكان المياه — الحفر والأقبية والأفنية والطرق — طالما أمكن وقوف الصهريج على مسافة يصلها الخرطوم.' },
        { q: 'أين تذهب مياه المجاري؟', a: 'إلى محطة معالجة مياه صرف مرخّصة، ولا نفرغها أبداً في المجاري أو الأودية أو الأراضي المكشوفة.' },
      ],
    },
  },
  {
    slug: 'septic-tank-emptying',
    icon: 'M2.5 13.5a5.5 5.5 0 0 1 5.5-5.5h8a5.5 5.5 0 0 1 0 11H8a5.5 5.5 0 0 1-5.5-5.5z|M10 8V5h4v3|M5 14.5h14',
    en: {
      name: 'Septic tank emptying',
      title: 'Septic Tank Emptying in Muscat, Oman | Sewerage Water Tank',
      description: 'Septic tank emptying in Muscat for villas, buildings and compounds. Tank pumped dry and bottom sludge removed, 24/7. Call +968 7636 8205.',
      h1: 'Septic tank emptying in Muscat',
      lede: 'A septic tank works quietly until it’s full — then drains slow down, smells appear and water pools around the cover. We empty it completely, settled sludge included, so it works properly again.',
      whenTitle: 'Signs your septic tank is full',
      when: [
        'Toilets and sinks drain slowly, or gurgle',
        'There’s a sewage smell near the tank cover',
        'Water is pooling around the tank, or the ground above it is soggy',
        'It has been 6–12 months since the tank was last emptied',
      ],
      stepsTitle: 'How we empty a septic tank',
      steps: [
        { t: 'Call or WhatsApp', d: 'Tell us your area, the tank type, and when it was last emptied.' },
        STEPS_EN.confirm,
        { t: 'Pumped dry', d: 'The crew lays the hose, pumps the tank dry and lifts out the settled sludge from the bottom.' },
        { t: 'Rinsed & disposed', d: 'The area around the cover is washed down and the load goes to a licensed treatment plant.' },
      ],
      faq: [
        { q: 'How often should a septic tank be emptied?', a: 'For a family house, usually every 6–12 months. A larger household or a smaller tank needs it more often.' },
        { q: 'Which tanker size will I need?', a: 'Most villas and houses need 5,000 gallons; apartment buildings usually 8,000; hotels and compounds 12,000. Tell us the tank size if you know it and we’ll match it.' },
        { q: 'Do you remove the sludge at the bottom too?', a: 'Yes. Pumping out only the liquid leaves the sludge to fill the tank again quickly, so the crew lifts out the settled sludge as well.' },
      ],
    },
    ar: {
      name: 'تفريغ البيارات',
      title: 'تفريغ البيارات في مسقط | الشفط میاں مجاری',
      description: 'تفريغ البيارات في مسقط للفلل والعمارات والمجمعات. تفريغ كامل مع إزالة رواسب القاع، على مدار 24 ساعة. اتصل ‎+968 7636 8205',
      h1: 'تفريغ البيارات في مسقط',
      lede: 'تعمل البيارة بصمت حتى تمتلئ — عندها يبطؤ التصريف وتظهر الروائح وتتجمع المياه حول الغطاء. نفرّغها بالكامل مع الرواسب المتراكمة لتعود للعمل كما يجب.',
      whenTitle: 'علامات امتلاء البيارة',
      when: [
        'بطء تصريف المراحيض والمغاسل أو صدور قرقرة منها',
        'رائحة مجاري قرب غطاء البيارة',
        'تجمّع المياه حول البيارة أو رطوبة الأرض فوقها',
        'مرور 6 إلى 12 شهراً على آخر تفريغ',
      ],
      stepsTitle: 'كيف نفرّغ البيارة',
      steps: [
        { t: 'اتصل أو راسلنا', d: 'أخبرنا بالمنطقة ونوع الخزان وآخر مرة تم تفريغه.' },
        STEPS_AR.confirm,
        { t: 'تفريغ كامل', d: 'يمدّ الفريق الخرطوم ويفرّغ البيارة بالكامل مع إزالة رواسب القاع.' },
        { t: 'غسل الموقع والتخلص الآمن', d: 'نغسل المكان حول الغطاء وننقل الحمولة إلى محطة معالجة مرخّصة.' },
      ],
      faq: [
        { q: 'كم مرة يجب تفريغ البيارة؟', a: 'للمنزل العائلي عادةً كل 6 إلى 12 شهراً، وتحتاج الأسرة الكبيرة أو البيارة الصغيرة إلى تفريغ أكثر تكراراً.' },
        { q: 'ما حجم الصهريج الذي أحتاجه؟', a: 'معظم الفلل والمنازل تحتاج 5,000 جالون، والعمارات غالباً 8,000، والفنادق والمجمعات 12,000. أخبرنا بحجم البيارة إن كنت تعرفه وسنختار المناسب.' },
        { q: 'هل تزيلون الرواسب في القاع أيضاً؟', a: 'نعم. شفط السائل وحده يترك الرواسب لتملأ البيارة بسرعة من جديد، لذلك يزيل الفريق رواسب القاع أيضاً.' },
      ],
    },
  },
  {
    slug: 'grease-trap-cleaning',
    icon: 'M3 9h18l-2 10H5z|M8 9V5.5M16 9V5.5|M6.5 13h11',
    en: {
      name: 'Grease trap cleaning',
      title: 'Grease Trap Cleaning in Muscat, Oman | Sewerage Water Tank',
      description: 'Grease trap cleaning for restaurants, hotels and bakeries in Muscat — one-off or on a monthly or quarterly schedule, with licensed disposal. Call +968 7636 8205.',
      h1: 'Grease trap cleaning in Muscat',
      lede: 'Kitchen grease cools, hardens and builds up in the trap until the drains back up and the smell reaches the dining room. We pump the trap out completely and take the waste to a licensed plant — once, or on a regular schedule.',
      whenTitle: 'When a grease trap needs cleaning',
      when: [
        'Kitchen sinks and floor drains are draining slowly',
        'A sour, rotten smell is coming from the drains or the trap',
        'Grease is visible on the surface of the trap, or it is overflowing',
        'An inspection is coming up and the trap hasn’t been cleaned recently',
      ],
      stepsTitle: 'How we clean a grease trap',
      steps: [
        { t: 'Book a visit', d: 'Call or WhatsApp with the location and the trap size, or set up a monthly or quarterly schedule.' },
        { t: 'A time that suits the kitchen', d: 'We agree a time before opening or after closing — the line is answered 24 hours a day.' },
        { t: 'Pumped out completely', d: 'The trap is emptied, including the grease layer on top and the sludge at the bottom.' },
        { t: 'Licensed disposal', d: 'The waste goes to a licensed treatment plant, never into the drains.' },
      ],
      faq: [
        { q: 'How often should a grease trap be cleaned?', a: 'It depends on how busy the kitchen is. Most restaurants choose monthly or quarterly visits; a busy kitchen may need it more often.' },
        { q: 'Can you clean on a regular schedule?', a: 'Yes — restaurants and buildings can set a monthly or quarterly schedule, and we’ll remind you before each visit.' },
        { q: 'Can you come at night?', a: 'Yes. The line is answered 24 hours a day, so we can come before opening or after closing.' },
      ],
    },
    ar: {
      name: 'تنظيف مصائد الشحوم',
      title: 'تنظيف مصائد الشحوم في مسقط | الشفط میاں مجاری',
      description: 'تنظيف مصائد الشحوم للمطاعم والفنادق والمخابز في مسقط، لمرة واحدة أو بجدول شهري أو ربع سنوي، مع تخلص مرخّص. اتصل ‎+968 7636 8205',
      h1: 'تنظيف مصائد الشحوم في مسقط',
      lede: 'تبرد شحوم المطبخ وتتصلب وتتراكم في المصيدة حتى يرتد التصريف وتصل الرائحة إلى صالة الطعام. نشفط المصيدة بالكامل وننقل المخلفات إلى محطة مرخّصة — لمرة واحدة أو بجدول منتظم.',
      whenTitle: 'متى تحتاج المصيدة إلى تنظيف',
      when: [
        'بطء تصريف مغاسل المطبخ ومصارف الأرضية',
        'رائحة كريهة حامضة من المصارف أو المصيدة',
        'ظهور الشحوم على سطح المصيدة أو فيضانها',
        'اقتراب موعد تفتيش ولم تُنظّف المصيدة مؤخراً',
      ],
      stepsTitle: 'كيف ننظف مصيدة الشحوم',
      steps: [
        { t: 'احجز زيارة', d: 'اتصل أو راسلنا بالموقع وحجم المصيدة، أو احجز جدولاً شهرياً أو ربع سنوي.' },
        { t: 'موعد يناسب المطبخ', d: 'نتفق على وقت قبل الافتتاح أو بعد الإغلاق — نرد على الاتصالات على مدار 24 ساعة.' },
        { t: 'شفط كامل', d: 'تُفرّغ المصيدة بالكامل، بما فيها طبقة الشحوم في الأعلى والرواسب في القاع.' },
        { t: 'تخلص مرخّص', d: 'تُنقل المخلفات إلى محطة معالجة مرخّصة، ولا تُصرف أبداً في المجاري.' },
      ],
      faq: [
        { q: 'كم مرة يجب تنظيف مصيدة الشحوم؟', a: 'يعتمد ذلك على ضغط العمل في المطبخ. تختار معظم المطاعم زيارات شهرية أو ربع سنوية، وقد يحتاج المطبخ المزدحم إلى أكثر.' },
        { q: 'هل يمكن التنظيف بجدول منتظم؟', a: 'نعم، يمكن للمطاعم والمباني تحديد جدول شهري أو ربع سنوي، وسنذكّرك قبل كل زيارة.' },
        { q: 'هل تأتون ليلاً؟', a: 'نعم، نرد على الاتصالات على مدار 24 ساعة، لذلك يمكننا الحضور قبل الافتتاح أو بعد الإغلاق.' },
      ],
    },
  },
  {
    slug: 'drain-unblocking',
    icon: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z|M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z|M8.5 12h7M12 8.5v7',
    en: {
      name: 'Manhole & drain unblocking',
      title: 'Manhole & Drain Unblocking in Muscat | Sewerage Water Tank',
      description: 'Blocked manhole or drain in Muscat? High-pressure water jetting clears chokes in drain lines and manholes, 24/7. Call +968 7636 8205.',
      h1: 'Manhole & drain unblocking in Muscat',
      lede: 'A blocked drain line backs up into floor drains, toilets and manholes, and it gets worse the longer it’s left. We clear the choke with high-pressure water jetting and pump out the water that has backed up.',
      whenTitle: 'Signs of a blocked drain',
      when: [
        'Water is coming back up through floor drains or toilets',
        'A manhole is full or overflowing',
        'Several drains in the building are slow at the same time',
        'There’s a gurgling sound or a sewage smell from the drains',
      ],
      stepsTitle: 'How we clear a blockage',
      steps: [
        { t: 'Describe the problem', d: 'Call or WhatsApp: which drains are affected, and whether a manhole is overflowing.' },
        STEPS_EN.confirm,
        { t: 'Jetting & suction', d: 'High-pressure water jetting breaks up the choke, and the tanker pumps out the backed-up water.' },
        { t: 'Flow checked', d: 'Water is run through the line to make sure it flows, and the area is rinsed.' },
      ],
      faq: [
        { q: 'What causes drain blockages?', a: 'Mostly grease, wet wipes, sand and debris building up in the line. In kitchens grease is the usual cause — a regularly cleaned grease trap prevents most of them.' },
        { q: 'Can you clear a line without digging?', a: 'High-pressure water jetting clears most chokes from the manhole, without digging.' },
        { q: 'Do you come for emergencies at night?', a: 'Yes — 24 hours a day, including weekends and public holidays.' },
      ],
    },
    ar: {
      name: 'فتح غرف التفتيش والمجاري',
      title: 'فتح غرف التفتيش وتسليك المجاري في مسقط | الشفط میاں مجاری',
      description: 'غرفة تفتيش أو مجرى مسدود في مسقط؟ تسليك بضغط الماء العالي لفتح الانسدادات في خطوط الصرف وغرف التفتيش، على مدار 24 ساعة. اتصل ‎+968 7636 8205',
      h1: 'فتح غرف التفتيش وتسليك المجاري في مسقط',
      lede: 'يرتد انسداد خط الصرف إلى مصارف الأرضية والمراحيض وغرف التفتيش، ويزداد سوءاً كلما تأخر علاجه. نفتح الانسداد بضغط الماء العالي ونشفط المياه المرتدة.',
      whenTitle: 'علامات انسداد المجاري',
      when: [
        'عودة المياه من مصارف الأرضية أو المراحيض',
        'امتلاء غرفة التفتيش أو فيضانها',
        'بطء عدة مصارف في المبنى في الوقت نفسه',
        'صوت قرقرة أو رائحة مجاري من المصارف',
      ],
      stepsTitle: 'كيف نفتح الانسداد',
      steps: [
        { t: 'صف المشكلة', d: 'اتصل أو راسلنا: ما المصارف المتأثرة، وهل تفيض غرفة تفتيش؟' },
        STEPS_AR.confirm,
        { t: 'تسليك وشفط', d: 'يفتت ضغط الماء العالي الانسداد، ويشفط الصهريج المياه المرتدة.' },
        { t: 'التأكد من الجريان', d: 'نمرّر الماء في الخط للتأكد من جريانه ونغسل المكان.' },
      ],
      faq: [
        { q: 'ما أسباب انسداد المجاري؟', a: 'غالباً تراكم الشحوم والمناديل المبللة والرمل والمخلفات في الخط. في المطابخ تكون الشحوم السبب المعتاد، والمصيدة النظيفة بانتظام تمنع معظم الانسدادات.' },
        { q: 'هل يمكن فتح الخط دون حفر؟', a: 'يفتح التسليك بضغط الماء العالي معظم الانسدادات من غرفة التفتيش دون حفر.' },
        { q: 'هل تأتون للطوارئ ليلاً؟', a: 'نعم، على مدار 24 ساعة بما في ذلك العطل الأسبوعية والرسمية.' },
      ],
    },
  },
  {
    slug: 'sump-pit-cleaning',
    icon: 'M9 8.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z|M14 13.5h7M18 10.5v6M9 8.5V4h6|M7 13.5h4',
    en: {
      name: 'Sump pit & pump station cleaning',
      title: 'Sump Pit & Pump Station Cleaning in Muscat | Sewerage Water Tank',
      description: 'Sump pit, lifting station and wet well cleaning for buildings and compounds in Muscat. Silt and sludge removed so the pumps keep working. Call +968 7636 8205.',
      h1: 'Sump pit & pump station cleaning in Muscat',
      lede: 'Buildings and compounds that pump their wastewater rely on sump pits and lifting stations. Silt, sludge and debris settle at the bottom over time, and the pumps work harder until they block. We desilt the pit so the pumps run freely again.',
      whenTitle: 'When a sump pit needs cleaning',
      when: [
        'The pumps run longer than usual, or keep cutting out',
        'The pit fills up faster than before, or overflows',
        'There’s a strong smell around the pump room or the pit cover',
        'Scheduled maintenance for a building or compound',
      ],
      stepsTitle: 'How we clean a sump pit',
      steps: [
        { t: 'Site details', d: 'Tell us the building, the pit or station, and roughly how deep it is.' },
        { t: 'Price & time confirmed', d: 'A fixed price and a time that suits the building’s management.' },
        { t: 'Desilting', d: 'The tanker pumps out the water and the silt and sludge that have settled at the bottom.' },
        STEPS_EN.disposal,
      ],
      faq: [
        { q: 'How often does a sump pit need cleaning?', a: 'It depends on how much silt and grease reaches it. Many buildings clean on a fixed schedule, such as every three months — we can set one up and remind you before each visit.' },
        { q: 'Which tanker do you send?', a: 'For most apartment buildings 8,000 gallons; for hotels, compounds and larger stations 12,000.' },
        { q: 'Can you come outside working hours?', a: 'Yes. The line is answered 24 hours a day, so the pit can be cleaned when the building is quietest.' },
      ],
    },
    ar: {
      name: 'تنظيف غرف الضخ ومحطات الرفع',
      title: 'تنظيف غرف الضخ ومحطات الرفع في مسقط | الشفط میاں مجاری',
      description: 'تنظيف غرف الضخ ومحطات الرفع للمباني والمجمعات في مسقط، مع إزالة الطمي والرواسب لتبقى المضخات تعمل. اتصل ‎+968 7636 8205',
      h1: 'تنظيف غرف الضخ ومحطات الرفع في مسقط',
      lede: 'تعتمد المباني والمجمعات التي تضخ مياه صرفها على غرف الضخ ومحطات الرفع. مع الوقت يترسب الطمي والرواسب والمخلفات في القاع، فتعمل المضخات بجهد أكبر حتى تنسد. نزيل الرواسب لتعمل المضخات بحرية من جديد.',
      whenTitle: 'متى تحتاج غرفة الضخ إلى تنظيف',
      when: [
        'تشغيل المضخات لفترات أطول من المعتاد أو توقفها المتكرر',
        'امتلاء الحفرة أسرع من قبل أو فيضانها',
        'رائحة قوية حول غرفة المضخات أو غطاء الحفرة',
        'الصيانة الدورية للمبنى أو المجمع',
      ],
      stepsTitle: 'كيف ننظف غرفة الضخ',
      steps: [
        { t: 'تفاصيل الموقع', d: 'أخبرنا بالمبنى وغرفة الضخ أو المحطة وعمقها التقريبي.' },
        { t: 'تأكيد السعر والموعد', d: 'سعر ثابت وموعد يناسب إدارة المبنى.' },
        { t: 'إزالة الرواسب', d: 'يشفط الصهريج المياه والطمي والرواسب المترسبة في القاع.' },
        STEPS_AR.disposal,
      ],
      faq: [
        { q: 'كم مرة تحتاج غرفة الضخ إلى تنظيف؟', a: 'يعتمد ذلك على كمية الطمي والشحوم التي تصلها. تنظف مبانٍ كثيرة بجدول ثابت، مثلاً كل ثلاثة أشهر، ويمكننا إعداد جدول وتذكيرك قبل كل زيارة.' },
        { q: 'أي صهريج ترسلون؟', a: 'لمعظم العمارات السكنية 8,000 جالون، وللفنادق والمجمعات والمحطات الأكبر 12,000.' },
        { q: 'هل تأتون خارج أوقات الدوام؟', a: 'نعم، نرد على الاتصالات على مدار 24 ساعة، فيمكن التنظيف في الوقت الأهدأ للمبنى.' },
      ],
    },
  },
  {
    slug: 'emergency-overflow',
    icon: 'M12 3.5l9.5 16.5h-19z|M12 10v4.5M12 17v.3',
    en: {
      name: 'Emergency overflow response',
      title: '24/7 Emergency Sewage Overflow in Muscat | Sewerage Water Tank',
      description: 'Septic tank overflowing or sewage backing up in Muscat? Our line is answered 24/7 — nights, weekends and holidays. Call +968 7636 8205 now.',
      h1: '24/7 emergency sewage overflow response in Muscat',
      lede: 'An overflowing tank or a sewage backup can’t wait for office hours. Our line is answered 24 hours a day, including weekends and public holidays, and we send a tanker to pump it out.',
      whenTitle: 'Call straight away if',
      when: [
        'A septic tank or holding tank is overflowing',
        'Sewage is backing up into the house, a basement or a kitchen',
        'A manhole is overflowing onto the street or a car park',
        'Heavy rain has flooded a pit or a low area with water mixed with sewage',
      ],
      stepsTitle: 'While the tanker is on its way',
      steps: [
        { t: 'Stop using water', d: 'No flushing, showers or washing machines in the building.' },
        { t: 'Keep people away', d: 'Keep children and pets away from the sewage.' },
        { t: 'Leave the covers shut', d: 'Don’t open manhole covers or try to pump sewage yourself.' },
        { t: 'Send a photo', d: 'If you can, send us a photo on WhatsApp so we know what to bring.' },
      ],
      faq: [
        { q: 'Do you really answer at night?', a: 'Yes. The line is answered 24 hours a day, including weekends and public holidays.' },
        { q: 'Is the price different at night?', a: 'The price is agreed on the phone before the tanker leaves, whatever the time — the price we quote is the price you pay.' },
        { q: 'What should I tell you when I call?', a: 'Your area, what is overflowing (a tank, a manhole or a drain), and whether sewage has come into the building.' },
      ],
    },
    ar: {
      name: 'طوارئ فيضان الخزانات',
      title: 'طوارئ فيضان المجاري في مسقط 24 ساعة | الشفط میاں مجاری',
      description: 'بيارة تفيض أو مجاري ترتد في مسقط؟ نرد على مدار 24 ساعة، ليلاً وفي العطل الأسبوعية والرسمية. اتصل الآن ‎+968 7636 8205',
      h1: 'طوارئ فيضان المجاري في مسقط على مدار 24 ساعة',
      lede: 'فيضان الخزان أو ارتداد المجاري لا ينتظر أوقات الدوام. نرد على الاتصالات على مدار 24 ساعة، بما في ذلك العطل الأسبوعية والرسمية، ونرسل صهريجاً لشفطها.',
      whenTitle: 'اتصل فوراً إذا',
      when: [
        'فاضت البيارة أو خزان التجميع',
        'ارتدت المجاري إلى المنزل أو القبو أو المطبخ',
        'فاضت غرفة تفتيش على الشارع أو موقف السيارات',
        'غمرت أمطار غزيرة حفرة أو منطقة منخفضة بمياه مختلطة بالصرف',
      ],
      stepsTitle: 'ريثما يصل الصهريج',
      steps: [
        { t: 'أوقف استخدام الماء', d: 'لا تشغّل السيفون أو الدش أو الغسالة في المبنى.' },
        { t: 'أبعد الجميع', d: 'أبقِ الأطفال والحيوانات بعيداً عن مياه المجاري.' },
        { t: 'لا تفتح الأغطية', d: 'لا تفتح أغطية غرف التفتيش ولا تحاول شفط المجاري بنفسك.' },
        { t: 'أرسل صورة', d: 'إن أمكن، أرسل لنا صورة على واتساب لنعرف ما نحتاج إحضاره.' },
      ],
      faq: [
        { q: 'هل تردون فعلاً ليلاً؟', a: 'نعم، نرد على الاتصالات على مدار 24 ساعة بما في ذلك العطل الأسبوعية والرسمية.' },
        { q: 'هل يختلف السعر ليلاً؟', a: 'يُتفق على السعر بالهاتف قبل انطلاق الصهريج مهما كان الوقت — السعر الذي نتفق عليه هو ما تدفعه.' },
        { q: 'ماذا أخبركم عند الاتصال؟', a: 'منطقتك، وما الذي يفيض (بيارة أو غرفة تفتيش أو مصرف)، وهل دخلت المجاري إلى المبنى.' },
      ],
    },
  },
]

export const serviceBySlug = (slug: string) => SERVICES.find(s => s.slug === slug)
export const servicePath = (lang: Lang, slug: string) => `${lang === 'ar' ? '/ar' : ''}/services/${slug}`
