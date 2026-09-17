// The page markup, in English and Arabic together: elements with className "en" or "ar" belong to one language.
// SitePage (./site-page.tsx) keeps only the visitor's language when it renders "/" (English) or "/ar" (Arabic).
export const siteMarkup = (
      <div className="site" id="site" data-lang="en" dir="ltr">
        {" "}
        {/* Symbols reused across the page */}
        {" "}
        <svg width="0" height="0" aria-hidden="true" style={{"position":"absolute"}}>
          <defs>
            <linearGradient id="gTank" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFE680" />
              <stop offset=".18" stopColor="#FFD23F" />
              <stop offset=".55" stopColor="#F2B705" />
              <stop offset=".85" stopColor="#CF9500" />
              <stop offset="1" stopColor="#A87700" />
            </linearGradient>
            <linearGradient id="gCab" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFE27A" />
              <stop offset=".5" stopColor="#F5BE1A" />
              <stop offset="1" stopColor="#C98F00" />
            </linearGradient>
            <linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#46627A" />
              <stop offset="1" stopColor="#0E1A24" />
            </linearGradient>
            {/* black/yellow chevron guard strip, as on the fleet's bumpers */}
            <pattern id="pChev" width="14" height="10" patternUnits="userSpaceOnUse">
              <rect width="14" height="10" fill="#F2B705" />
              <path d="M1 0h4l5 5-5 5H1l5-5z" fill="#14202B" />
            </pattern>
            <linearGradient id="gSteel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#6F7E80" />
              <stop offset=".45" stopColor="#C9D3D3" />
              <stop offset="1" stopColor="#5F6D6F" />
            </linearGradient>
            <radialGradient id="gTire" cx=".45" cy=".4" r=".6">
              <stop offset="0" stopColor="#3B4245" />
              <stop offset="1" stopColor="#0F1315" />
            </radialGradient>
            <radialGradient id="gRim" cx=".4" cy=".35" r=".7">
              <stop offset="0" stopColor="#F4F7F7" />
              <stop offset="1" stopColor="#7F8D8E" />
            </radialGradient>
            <filter id="fBlur" x="-20%" y="-200%" width="140%" height="500%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <clipPath id="cArch">
              <rect x="0" y="0" width="660" height="268" />
            </clipPath>
            <g id="wheel">
              <circle r="32" fill="url(#gTire)" />
              <circle r="20" fill="url(#gRim)" />
              <circle r="13" fill="none" stroke="#5C6A6B" strokeWidth="2.5" strokeDasharray="2 4.8" />
              <circle r="6.5" fill="#4A575A" />
            </g>
          </defs>
          <symbol id="i-phone" viewBox="0 0 24 24">
            <path d="M5 3.5h3.6l1.9 4.8-2.3 1.5a11.5 11.5 0 0 0 6 6l1.5-2.3 4.8 1.9V19a2 2 0 0 1-2 2A17.5 17.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />
          </symbol>
          <symbol id="i-wa" viewBox="0 0 24 24">
            <path d="M20.5 11.7a8.6 8.6 0 0 1-12.7 7.5L3.5 20.5l1.4-4.1a8.6 8.6 0 1 1 15.6-4.7z" />
            <path d="M9 8.3c-.4 2.9 3 6.9 6.6 6.8l.9-1.6-2-1-.9.8a4.8 4.8 0 0 1-2.4-2.4l.8-.9-1-2z" />
          </symbol>
          <symbol id="i-mail" viewBox="0 0 24 24">
            <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
            <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
          </symbol>
          <symbol id="i-pin" viewBox="0 0 24 24">
            <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
            <circle cx="12" cy="10" r="2.4" />
          </symbol>
          <symbol id="i-check" viewBox="0 0 24 24">
            <path d="M4 12.5l5 5L20 6.5" />
          </symbol>
          <symbol id="i-drop" viewBox="0 0 24 24">
            <path d="M12 3c3.6 4.3 6 7.7 6 10.7a6 6 0 0 1-12 0C6 10.7 8.4 7.3 12 3z" />
            <path d="M9 14.3a3 3 0 0 0 3 3" />
          </symbol>
          <symbol id="i-tank" viewBox="0 0 24 24">
            <rect x="2.5" y="8" width="19" height="11" rx="5.5" />
            <path d="M10 8V5h4v3" />
            <path d="M5 14.5h14" opacity=".55" />
          </symbol>
          <symbol id="i-grease" viewBox="0 0 24 24">
            <path d="M3 9h18l-2 10H5z" />
            <path d="M8 9V5.5M16 9V5.5" />
            <path d="M6.5 13h11" />
          </symbol>
          <symbol id="i-manhole" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5.5" />
            <path d="M8.5 12h7M12 8.5v7" />
          </symbol>
          <symbol id="i-pump" viewBox="0 0 24 24">
            <circle cx="9" cy="13.5" r="5" />
            <path d="M14 13.5h7M18 10.5v6M9 8.5V4h6" />
            <path d="M7 13.5h4" />
          </symbol>
          <symbol id="i-alert" viewBox="0 0 24 24">
            <path d="M12 3.5l9.5 16.5h-19z" />
            <path d="M12 10v4.5M12 17v.3" />
          </symbol>
          {/* Static copy of the hero tanker for the feature diagram and gallery scenes (gradients, #pChev and #wheel live in the hero SVG's defs) */}
          <symbol id="tanker-side" viewBox="0 0 660 340">
            <ellipse cx="350" cy="302" rx="300" ry="9" fill="#000" opacity=".35" filter="url(#fBlur)" />
            <rect x="96" y="232" width="506" height="14" rx="3" fill="#1F2A2E" />
            <path d="M150 226h14v8h-14zM270 226h14v8h-14zM390 226h14v8h-14z" fill="#2A3438" />
            <rect x="292" y="244" width="214" height="10" fill="url(#pChev)" />
            <ellipse cx="112" cy="162" rx="22" ry="70" fill="url(#gTank)" />
            <rect x="110" y="92" width="322" height="140" rx="12" fill="url(#gTank)" />
            <rect x="120" y="99" width="300" height="7" rx="3.5" fill="#FFFFFF" opacity=".45" />
            <rect x="104" y="92" width="9" height="140" rx="3" fill="#D29C00" />
            <rect x="424" y="92" width="9" height="140" rx="3" fill="#D29C00" />
            <text x="276" y="124" textAnchor="middle" fill="#14202B" fontSize="14" letterSpacing="2" style={{"fontFamily":"var(--font-marcellus), Georgia, serif"}}>
              {"SEWERAGE WATER TANK"}
            </text>
            <path d="M190 136h172" stroke="#14202B" strokeWidth="1.2" opacity=".35" />
            <text x="276" y="178" textAnchor="middle" direction="rtl" fill="#14202B" fontWeight="700" fontSize="24" style={{"fontFamily":"var(--font-lemonada), var(--font-amiri), serif"}}>
              {"الشفط میاں مجاری"}
            </text>
            <text x="276" y="216" textAnchor="middle" fill="#14202B" fontWeight="700" fontSize="19" letterSpacing=".8" data-wa-text="" style={{"fontFamily":"var(--font-public-sans), sans-serif"}}>
              {"+968 7806 1190"}
            </text>
            <rect x="122" y="146" width="10" height="64" rx="5" fill="#14202B" stroke="#A87700" strokeWidth="1.5" />
            <rect x="124" y="172" width="6" height="34" rx="3" fill="#7FA35A" />
            <path d="M150 78h260" stroke="#D29C00" strokeWidth="3" strokeLinecap="round" />
            <path d="M160 78v14M280 78v14M400 78v14" stroke="#D29C00" strokeWidth="2.5" />
            <path d="M196 92q0-10 22-10t22 10zM316 92q0-10 22-10t22 10z" fill="#E5AD00" />
            <rect x="80" y="196" width="22" height="12" rx="3" fill="url(#gSteel)" />
            <rect x="100" y="222" width="10" height="7" rx="1.5" fill="#D9534F" />
            <rect x="82" y="238" width="32" height="10" fill="url(#pChev)" />
            <rect x="433" y="126" width="30" height="110" rx="3" fill="#1E2A33" />
            <rect x="437" y="176" width="22" height="48" rx="6" fill="#34424D" />
            <path d="M448 126V104h-28" fill="none" stroke="url(#gSteel)" strokeWidth="6" strokeLinejoin="round" />
            <path d="M440 86V236M456 86V236" stroke="#D29C00" strokeWidth="3" />
            <path d="M440 104h16M440 124h16M440 144h16M440 164h16M440 184h16M440 204h16M440 224h16" stroke="#D29C00" strokeWidth="2.5" />
            <path d="M462 246V104q0-16 16-16h100q14 0 19 12l11 50q4 10 4 22v74z" fill="url(#gCab)" stroke="#B98500" />
            <rect x="478" y="92" width="118" height="5" rx="2.5" fill="#14202B" opacity=".8" />
            <path d="M486 102h62v48h-62q-6 0-6-6v-36q0-6 6-6z" fill="url(#gGlass)" />
            <path d="M560 100h26q6 0 8 6l10 44h-44z" fill="url(#gGlass)" />
            <path d="M492 104l20 0-26 40v-30z" fill="#FFFFFF" opacity=".22" />
            <path d="M478 158h78v76h-78z" fill="none" stroke="#C28A00" />
            <rect x="542" y="168" width="10" height="3" rx="1.5" fill="#7A5A00" />
            <text x="517" y="210" textAnchor="middle" fill="#14202B" fontWeight="700" fontSize="15" style={{"fontFamily":"var(--font-public-sans), sans-serif"}}>
              {"24/7"}
            </text>
            <rect x="606" y="168" width="6" height="44" rx="2" fill="#14202B" />
            <rect x="518" y="80" width="24" height="8" rx="3" fill="#FF8A1F" />
            <path d="M606 112v22" stroke="#14202B" strokeWidth="3" />
            <rect x="608" y="108" width="7" height="26" rx="2" fill="#14202B" />
            <rect x="604" y="220" width="10" height="11" rx="2" fill="#FFF4C8" />
            <rect x="596" y="236" width="22" height="14" rx="3" fill="#14202B" />
            <rect x="486" y="240" width="40" height="5" rx="2" fill="#14202B" />
            <g clipPath="url(#cArch)" fill="#141B1E">
              <circle cx="180" cy="268" r="38" />
              <circle cx="252" cy="268" r="38" />
              <circle cx="546" cy="268" r="38" />
            </g>
            <use href="#wheel" x="180" y="268" />
            <use href="#wheel" x="252" y="268" />
            <use href="#wheel" x="546" y="268" />
          </symbol>
          <symbol id="logo" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="22" fill="var(--ink)" />
            <circle cx="24" cy="24" r="18.5" fill="none" stroke="var(--brass-hi)" strokeWidth="1.6" />
            <circle cx="24" cy="24" r="12" fill="none" stroke="var(--brass-hi)" strokeWidth="1.2" opacity=".7" />
            <path d="M12.5 24h23M24 12.5v23M16 16l16 16M32 16L16 32" stroke="var(--brass-hi)" strokeWidth="1" opacity=".45" />
            <path d="M24 15.5c3.2 3.8 5.3 6.8 5.3 9.3a5.3 5.3 0 0 1-10.6 0c0-2.5 2.1-5.5 5.3-9.3z" fill="var(--brass-hi)" />
          </symbol>
        </svg>
        {" "}
        <div className="strip" role="region" aria-label="24-hour emergency line">
          {" "}
          <div className="wrap">
            {" "}
            <div className="strip-line">
              {" "}
              <span className="pulse" aria-hidden="true" />
              {" "}
              <span className="en">
                {"24-hour emergency sewage line"}
              </span>
              {" "}
              <span className="ar">
                {"خط طوارئ الصرف الصحي على مدار 24 ساعة"}
              </span>
              {" "}
              <a data-tel="" href="tel:+96876368205">
                <span className="ltr" data-phone="">
                  {"+968 7636 8205"}
                </span>
              </a>
              {" "}
            </div>
            {" "}
            <div className="strip-right">
              {" "}
              <span className="strip-loc">
                {" "}
                <svg className="i" aria-hidden="true">
                  <use href="#i-pin" />
                </svg>
                {" "}
                <span className="en">
                  {"Mahbellah Saniya · Al Khoud, Muscat, Oman"}
                </span>
                <span className="ar">
                  {"المعبيلة الصناعية · الخوض، مسقط، سلطنة عُمان"}
                </span>
                {" "}
              </span>
              {" "}
              <button className="lang-btn" id="langBtn" type="button" data-en="عربي" data-ar="English" aria-label="Switch language">
                {"عربي"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <header className="head">
          {" "}
          <div className="wrap">
            {" "}
            <a className="brand" href="#top" aria-label="Sewerage Water Tank — home">
              {" "}
              <svg aria-hidden="true">
                <use href="#logo" />
              </svg>
              {" "}
              <span className="brand-txt">
                {" "}
                <span className="brand-en">
                  {"Sewerage Water Tank"}
                </span>
                {" "}
                <span className="brand-ar" lang="ar" dir="rtl">
                  {"الشفط میاں مجاری"}
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <nav className="nav" id="mainNav" aria-label="Main">
              {" "}
              <a href="#services">
                <span className="en">
                  {"Services"}
                </span>
                <span className="ar">
                  {"الخدمات"}
                </span>
              </a>
              {" "}
              <a href="#work">
                <span className="en">
                  {"Gallery"}
                </span>
                <span className="ar">
                  {"المعرض"}
                </span>
              </a>
              {" "}
              <a href="#fleet">
                <span className="en">
                  {"Tankers"}
                </span>
                <span className="ar">
                  {"الصهاريج"}
                </span>
              </a>
              {" "}
              <a href="#process">
                <span className="en">
                  {"How it works"}
                </span>
                <span className="ar">
                  {"طريقة العمل"}
                </span>
              </a>
              {" "}
              <a href="#clients">
                <span className="en">
                  {"Clients"}
                </span>
                <span className="ar">
                  {"عملاؤنا"}
                </span>
              </a>
              {" "}
              <a href="#faq">
                <span className="en">
                  {"FAQ"}
                </span>
                <span className="ar">
                  {"الأسئلة"}
                </span>
              </a>
              {" "}
              <a href="#contact">
                <span className="en">
                  {"Contact"}
                </span>
                <span className="ar">
                  {"تواصل معنا"}
                </span>
              </a>
              {" "}
            </nav>
            {" "}
            <a className="btn call" data-tel="" href="tel:+96876368205">
              {" "}
              <svg className="i" aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              {" "}
              <span className="en">
                {"Call now"}
              </span>
              <span className="ar">
                {"اتصل الآن"}
              </span>
              {" "}
            </a>
            {" "}
            <button className="menu-btn" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="Menu">
              {" "}
              <span />
              <span />
              <span />
              {" "}
            </button>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <main id="top">
          {" "}
          <section className="hero">
            {" "}
            <div className="wrap">
              {" "}
              <div className="hero-grid">
                {" "}
                <div className="hero-copy">
                  {" "}
                  <div className="hero-top">
                    {" "}
                    <h1 className="eyebrow">
                      {" "}
                      <span className="en">
                        {"Sewage suction · Septic tank emptying · Muscat"}
                      </span>
                      {" "}
                      <span className="ar">
                        {"شفط مياه المجاري · تفريغ البيارات · مسقط"}
                      </span>
                      {" "}
                    </h1>
                    {" "}
                    <a className="loc-badge" href={"https://www.google.com/maps/search/?api=1&query=Mabelah%20Industrial%20Area%2C%20Muscat%2C%20Oman"} target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-pin" />
                      </svg>
                      {" "}
                      <span className="en">
                        {"Mahbellah Saniya, Muscat"}
                      </span>
                      <span className="ar">
                        {"المعبيلة الصناعية، مسقط"}
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a className="loc-badge" href={"https://www.google.com/maps/search/?api=1&query=Al%20Khoud%2C%20Muscat%2C%20Oman"} target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-pin" />
                      </svg>
                      {" "}
                      <span className="en">
                        {"Al Khoud, Muscat"}
                      </span>
                      <span className="ar">
                        {"الخوض، مسقط"}
                      </span>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                  <p className="hero-title">
                    {" "}
                    <span className="calli" lang="ar" dir="rtl">
                      {"الشفط میاں مجاری"}
                    </span>
                    {" "}
                    <span className="name-en">
                      {"Sewerage Water Tank"}
                    </span>
                    {" "}
                  </p>
                  {" "}
                  <p className="lede">
                    {" "}
                    <span className="en">
                      {"Vacuum-tanker suction for septic tanks, sewage pits, grease traps and blocked manholes. We pump it dry, rinse the site, and take every load to a licensed treatment plant — day or night."}
                    </span>
                    {" "}
                    <span className="ar">
                      {"شفط مياه المجاري بصهاريج الشفط للبيارات وخزانات الصرف ومصائد الشحوم وغرف التفتيش المسدودة. نفرّغ الخزان بالكامل، وننظّف الموقع، وننقل كل حمولة إلى محطة معالجة مرخّصة — ليلاً ونهاراً."}
                    </span>
                    {" "}
                  </p>
                  {" "}
                  <div className="hero-cta">
                    {" "}
                    <a className="btn btn-brass" data-tel="" href="tel:+96876368205">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-phone" />
                      </svg>
                      {" "}
                      <span className="en">
                        {"Call now"}
                      </span>
                      <span className="ar">
                        {"اتصل الآن"}
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a className="btn btn-ghost" data-wa="" href="https://wa.me/96878061190" target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-wa" />
                      </svg>
                      {" "}
                      <span className="en">
                        {"WhatsApp us"}
                      </span>
                      <span className="ar">
                        {"راسلنا واتساب"}
                      </span>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tk-photos" id="tkPhotos">
                  {" "}
                  <div className="tk-stage">
                    {" "}
                    <img className="on" src="/images/tank.jpg" data-src-en="/images/tank.jpg" data-src-ar="/images/tank-ar.jpg" alt="Yellow sewage suction tanker of Sewerage Water Tank emptying a manhole in Muscat, Oman" fetchPriority="high" />
                    {" "}
                  </div>
                  {" "}
                  <div className="tk-dots" role="group" aria-label="Choose a photo of the tanker" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="plate">
                {" "}
                <div>
                  <b>
                    {"24/7"}
                  </b>
                  <span className="en">
                    {"Dispatch, Fridays & holidays included"}
                  </span>
                  <span className="ar">
                    {"خدمة متواصلة حتى الجمعة والعطل"}
                  </span>
                </div>
                {" "}
                <div>
                  <b className="ltr">
                    {"5,000–12,000"}
                  </b>
                  <span className="en">
                    {"Gallon suction tankers"}
                  </span>
                  <span className="ar">
                    {"جالون سعة صهاريج الشفط"}
                  </span>
                </div>
                {" "}
                <div>
                  <b className="en">
                    {"Muscat"}
                  </b>
                  <b className="ar">
                    {"مسقط"}
                  </b>
                  <span className="en">
                    {"Mahbellah Saniya · Al Khoud · all areas served"}
                  </span>
                  <span className="ar">
                    {"المعبيلة الصناعية · الخوض · نخدم كل المناطق"}
                  </span>
                </div>
                {" "}
                <div>
                  <b className="en">
                    {"Licensed"}
                  </b>
                  <b className="ar">
                    {"مرخّص"}
                  </b>
                  <span className="en">
                    {"Disposal at treatment plants"}
                  </span>
                  <span className="ar">
                    {"التخلص في محطات المعالجة"}
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec" id="services">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Our services"}
                  </span>
                  <span className="ar">
                    {"خدماتنا"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"What we pump, clean and clear"}
                  </span>
                  <span className="ar">
                    {"نشفط وننظّف ونفتح المسدود"}
                  </span>
                </h2>
                {" "}
                <p>
                  <span className="en">
                    {"One call covers everything below ground — from a family villa's septic tank to a hotel's pump station."}
                  </span>
                  <span className="ar">
                    {"اتصال واحد يغطي كل ما تحت الأرض — من بيارة الفيلا إلى غرفة الضخ في الفندق."}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              <div className="svc-grid">
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-drop" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Sewage water suction"}
                    </span>
                    <span className="ar">
                      {"شفط مياه المجاري"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Fast vacuum pumping of sewage water from tanks, pits and flooded areas."}
                    </span>
                    <span className="ar">
                      {"شفط سريع لمياه المجاري من الخزانات والحفر والأماكن المغمورة."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-tank" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Septic tank emptying"}
                    </span>
                    <span className="ar">
                      {"تفريغ البيارات"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Complete emptying of septic tanks, with settled sludge removed from the bottom."}
                    </span>
                    <span className="ar">
                      {"تفريغ كامل للبيارات مع إزالة الرواسب المتراكمة في القاع."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-grease" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Grease trap cleaning"}
                    </span>
                    <span className="ar">
                      {"تنظيف مصائد الشحوم"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Scheduled cleaning for restaurants, hotels and bakeries — drains keep flowing, inspections pass."}
                    </span>
                    <span className="ar">
                      {"تنظيف دوري للمطاعم والفنادق والمخابز لضمان جريان التصريف واجتياز التفتيش."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-manhole" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Manhole & drain unblocking"}
                    </span>
                    <span className="ar">
                      {"فتح غرف التفتيش والمجاري"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"High-pressure water jetting to clear blocked manholes, drain lines and chokes."}
                    </span>
                    <span className="ar">
                      {"تسليك بضغط الماء العالي لفتح غرف التفتيش وخطوط الصرف المسدودة."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-pump" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Sump pit & pump station cleaning"}
                    </span>
                    <span className="ar">
                      {"تنظيف غرف الضخ ومحطات الرفع"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Desilting of sump pits, lifting stations and wet wells for buildings and compounds."}
                    </span>
                    <span className="ar">
                      {"إزالة الرواسب من غرف الضخ ومحطات الرفع للمباني والمجمعات."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
                <article className="svc">
                  {" "}
                  <span className="ico">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-alert" />
                    </svg>
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Emergency overflow response"}
                    </span>
                    <span className="ar">
                      {"طوارئ فيضان الخزانات"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Night, weekend and holiday call-outs when a tank overflows or sewage backs up."}
                    </span>
                    <span className="ar">
                      {"استجابة ليلية وفي العطل عند فيضان الخزان أو ارتداد مياه الصرف."}
                    </span>
                  </p>
                  {" "}
                </article>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec showcase" id="work">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"At work"}
                  </span>
                  <span className="ar">
                    {"في الميدان"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"Our tanker on the job"}
                  </span>
                  <span className="ar">
                    {"صهريجنا أثناء العمل"}
                  </span>
                </h2>
                {" "}
                <p>
                  <span className="en">
                    {"Watch our tanker at work, and see the jobs we do every week across Muscat."}
                  </span>
                  <span className="ar">
                    {"شاهد صهريجنا أثناء العمل، وتعرّف على الأعمال التي ننجزها كل أسبوع في مسقط."}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              {/* Put your video at videos/tanker.mp4 (H.264 MP4 plays everywhere). Portrait or landscape both fit. It starts loading with the page, then loops with sound. */}
              {" "}
              <div className="work">
                {" "}
                <div className="reel" id="reel">
                  {" "}
                  <video id="reelVideo" muted loop playsInline preload="none" poster="/videos/tanker-poster.jpg" aria-label="Video of our yellow tanker at work">
                    <source src="/videos/tanker.mp4" type="video/mp4" />
                  </video>
                  {" "}
                  <svg className="reel-fallback" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration of our yellow tanker at sunset in front of the mountains">
                    <defs>
                      <linearGradient id="skyR" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#1D3448" />
                        <stop offset=".6" stopColor="#C98F55" />
                        <stop offset="1" stopColor="#F2C98A" />
                      </linearGradient>
                    </defs>
                    <rect width="640" height="360" fill="url(#skyR)" />
                    <circle cx="470" cy="236" r="46" fill="#FFD27A" opacity=".85" />
                    <path d="M0 250l70-50 50 22 90-70 70 46 90-52 80 50 90-40 100 44V360H0z" fill="#5B4A3E" />
                    <path d="M0 276l90-34 80 20 100-40 90 36 90-26 90 24 100-16V360H0z" fill="#3E342D" />
                    <rect y="300" width="640" height="60" fill="#2A2521" />
                    <use href="#tanker-side" x="150" y="150" width="330" height="170" />
                    <ellipse cx="116" cy="313" rx="26" ry="5" fill="#15110E" stroke="#6D7B7C" />
                    <path d="M192 251c-26 4-40 26-38 44 1 10-18 16-34 18" fill="none" stroke="#F4F7F6" strokeWidth="5.5" strokeLinecap="round" />
                    <path d="M192 251c-26 4-40 26-38 44 1 10-18 16-34 18" fill="none" stroke="#B7C3C3" strokeWidth="5.5" strokeDasharray="1 2" />
                  </svg>
                  {" "}
                  <div className="reel-ctrl">
                    {" "}
                    <button type="button" id="reelPlay">
                      {" "}
                      <span className="when-playing">
                        <span className="en">
                          {"Pause"}
                        </span>
                        <span className="ar">
                          {"إيقاف"}
                        </span>
                      </span>
                      {" "}
                      <span className="when-paused">
                        <span className="en">
                          {"Play"}
                        </span>
                        <span className="ar">
                          {"تشغيل"}
                        </span>
                      </span>
                      {" "}
                    </button>
                    {" "}
                    <button type="button" id="reelSound">
                      {" "}
                      <span className="when-muted">
                        <span className="en">
                          {"Sound on"}
                        </span>
                        <span className="ar">
                          {"تشغيل الصوت"}
                        </span>
                      </span>
                      {" "}
                      <span className="when-sound">
                        <span className="en">
                          {"Mute"}
                        </span>
                        <span className="ar">
                          {"كتم الصوت"}
                        </span>
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="shots" role="region" aria-label="Jobs we do" tabIndex={0}>
                  {" "}
                  <figure className="shot">
                    {" "}
                    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of our yellow tanker emptying a villa's septic tank">
                      <defs>
                        <linearGradient id="skyA" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#BFD9E6" />
                          <stop offset="1" stopColor="#F3EAD8" />
                        </linearGradient>
                        <pattern id="crenA" width="22" height="8" patternUnits="userSpaceOnUse">
                          <rect width="12" height="8" fill="#E2D5BE" />
                        </pattern>
                      </defs>
                      <rect width="400" height="300" fill="url(#skyA)" />
                      <path d="M0 196l40-40 30 18 50-50 40 32 40-22 50 42 50-38 50 28 50-20V300H0z" fill="#B7A48B" opacity=".5" />
                      <path d="M0 214l60-32 50 18 60-30 60 30 60-20 50 18 60-14V300H0z" fill="#A58F74" opacity=".55" />
                      <rect x="200" y="142" width="200" height="8" fill="url(#crenA)" />
                      <rect x="200" y="150" width="200" height="106" fill="#EFE5D3" />
                      <rect x="236" y="172" width="16" height="24" rx="8" fill="#6E8796" />
                      <rect x="270" y="172" width="16" height="24" rx="8" fill="#6E8796" />
                      <path d="M336 256v-46a18 18 0 0 1 36 0v46z" fill="#8A6B3F" />
                      <path d="M34 256c3-34-4-58 4-86" fill="none" stroke="#7A5B3A" strokeWidth="5" strokeLinecap="round" />
                      <g fill="#4F7A3A">
                        <path d="M38 170q-26-6-40 10q22-14 40-10z" />
                        <path d="M38 170q24-10 42 4q-22-8-42-4z" />
                        <path d="M38 170q-8-22-30-26q20 8 30 26z" />
                        <path d="M38 170q12-24 34-24q-22 6-34 24z" />
                      </g>
                      <rect y="256" width="400" height="44" fill="#D8C8AC" />
                      <path d="M0 256.5h400" stroke="#C4B08E" />
                      <use href="#tanker-side" x="70" y="120" width="300" height="155" />
                      <ellipse cx="50" cy="272" rx="22" ry="5" fill="#2A3438" stroke="#6D7B7C" />
                      <path d="M108 212c-24 4-38 24-36 40 1 10-14 16-22 20" fill="none" stroke="#F4F7F6" strokeWidth="5" strokeLinecap="round" />
                      <path d="M108 212c-24 4-38 24-36 40 1 10-14 16-22 20" fill="none" stroke="#B7C3C3" strokeWidth="5" strokeDasharray="1 2" />
                    </svg>
                    {" "}
                    <figcaption>
                      {" "}
                      <strong>
                        <span className="en">
                          {"Septic tanks at villas"}
                        </span>
                        <span className="ar">
                          {"تفريغ بيارات الفلل"}
                        </span>
                      </strong>
                      {" "}
                      <span className="d">
                        <span className="en">
                          {"The hose goes straight into the tank opening, and the area is rinsed before we leave."}
                        </span>
                        <span className="ar">
                          {"يدخل الخرطوم مباشرة في فتحة الخزان، ونغسل المكان قبل المغادرة."}
                        </span>
                      </span>
                      {" "}
                    </figcaption>
                    {" "}
                  </figure>
                  {" "}
                  <figure className="shot">
                    {" "}
                    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of our yellow tanker pumping water from a flooded road">
                      <defs>
                        <linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#D3DFE6" />
                          <stop offset="1" stopColor="#EFF1EC" />
                        </linearGradient>
                        <clipPath id="waterB">
                          <rect y="253" width="400" height="47" />
                        </clipPath>
                      </defs>
                      <rect width="400" height="300" fill="url(#skyB)" />
                      <path d="M0 200l50-26 40 14 60-34 50 26 60-22 60 24 80-18V300H0z" fill="#B9B3A6" opacity=".45" />
                      <rect y="206" width="400" height="50" fill="#E4DFD3" />
                      <rect x="300" y="186" width="44" height="20" fill="#D5CDBE" />
                      <path d="M294 188l28-16 28 16z" fill="#9C7A55" />
                      <g fill="#CFCAC0">
                        <rect x="6" y="232" width="46" height="24" />
                        <rect x="344" y="232" width="50" height="24" />
                      </g>
                      <use href="#tanker-side" x="60" y="118" width="300" height="155" />
                      <rect y="253" width="400" height="47" fill="#7D6D56" opacity=".92" />
                      <g clipPath="url(#waterB)" opacity=".22">
                        <use href="#tanker-side" x="60" y="118" width="300" height="155" transform="translate(0 508) scale(1 -1)" />
                      </g>
                      <path d="M18 268h52M150 280h70M250 264h44M300 288h70M90 292h40" stroke="#FFFFFF" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" />
                      <path d="M98 210c-22 4-34 24-32 40 1 8-10 14-22 18" fill="none" stroke="#F4F7F6" strokeWidth="5" strokeLinecap="round" />
                      <path d="M98 210c-22 4-34 24-32 40 1 8-10 14-22 18" fill="none" stroke="#B7C3C3" strokeWidth="5" strokeDasharray="1 2" />
                    </svg>
                    {" "}
                    <figcaption>
                      {" "}
                      <strong>
                        <span className="en">
                          {"Flooded roads after rain"}
                        </span>
                        <span className="ar">
                          {"الطرق المغمورة بعد الأمطار"}
                        </span>
                      </strong>
                      {" "}
                      <span className="d">
                        <span className="en">
                          {"Standing water and overflowing drains pumped out fast."}
                        </span>
                        <span className="ar">
                          {"شفط سريع للمياه الراكدة والمجاري الفائضة."}
                        </span>
                      </span>
                      {" "}
                    </figcaption>
                    {" "}
                  </figure>
                  {" "}
                  <figure className="shot">
                    {" "}
                    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of our yellow tanker cleaning a restaurant grease trap">
                      <defs>
                        <linearGradient id="skyC" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#E6D9C2" />
                          <stop offset="1" stopColor="#F6EFE3" />
                        </linearGradient>
                        <pattern id="awnC" width="20" height="16" patternUnits="userSpaceOnUse">
                          <rect width="10" height="16" fill="#14202B" />
                          <rect x="10" width="10" height="16" fill="#F2B705" />
                        </pattern>
                      </defs>
                      <rect width="400" height="300" fill="url(#skyC)" />
                      <path d="M0 190l60-30 50 20 70-40 60 34 60-24 100 30V300H0z" fill="#BFAE93" opacity=".45" />
                      <rect y="96" width="176" height="160" fill="#F1ECE2" />
                      <rect y="96" width="176" height="6" fill="#E0D6C4" />
                      <rect x="24" y="112" width="128" height="22" fill="#14202B" />
                      <text x="88" y="128" textAnchor="middle" direction="rtl" fill="#F2B705" fontWeight="600" fontSize="14" style={{"fontFamily":"var(--font-naskh), serif"}}>
                        {"مطعم"}
                      </text>
                      <rect x="8" y="146" width="160" height="16" fill="url(#awnC)" />
                      <path d="M8 162h160l-6 8H14z" fill="#0E1822" opacity=".25" />
                      <rect x="18" y="176" width="90" height="52" fill="#6E8796" opacity=".85" />
                      <rect x="120" y="176" width="40" height="80" fill="#8A6B3F" />
                      <rect y="256" width="400" height="44" fill="#DCD4C4" />
                      <path d="M0 256.5h400M0 278h400" stroke="#C9BFAC" />
                      <use href="#tanker-side" x="100" y="120" width="300" height="155" />
                      <rect x="80" y="266" width="32" height="8" rx="1" fill="#2A3438" />
                      <path d="M84 268.5h24M84 271.5h24" stroke="#6D7B7C" />
                      <path d="M138 212c-18 6-30 20-32 34-1 10-3 16-8 22" fill="none" stroke="#F4F7F6" strokeWidth="5" strokeLinecap="round" />
                      <path d="M138 212c-18 6-30 20-32 34-1 10-3 16-8 22" fill="none" stroke="#B7C3C3" strokeWidth="5" strokeDasharray="1 2" />
                    </svg>
                    {" "}
                    <figcaption>
                      {" "}
                      <strong>
                        <span className="en">
                          {"Grease traps for restaurants"}
                        </span>
                        <span className="ar">
                          {"مصائد الشحوم للمطاعم"}
                        </span>
                      </strong>
                      {" "}
                      <span className="d">
                        <span className="en">
                          {"Scheduled cleaning that keeps kitchen drains flowing."}
                        </span>
                        <span className="ar">
                          {"تنظيف دوري يحافظ على جريان تصريف المطبخ."}
                        </span>
                      </span>
                      {" "}
                    </figcaption>
                    {" "}
                  </figure>
                  {" "}
                  <figure className="shot">
                    {" "}
                    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of our yellow tanker on a night emergency call with its beacon on">
                      <defs>
                        <linearGradient id="skyD" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#0A1420" />
                          <stop offset="1" stopColor="#1F3650" />
                        </linearGradient>
                        <radialGradient id="glowD">
                          <stop offset="0" stopColor="#FF8A1F" stopOpacity=".9" />
                          <stop offset="1" stopColor="#FF8A1F" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="lampD">
                          <stop offset="0" stopColor="#FFE9A8" stopOpacity=".75" />
                          <stop offset="1" stopColor="#FFE9A8" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="beamD" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0" stopColor="#FFF4C8" stopOpacity=".55" />
                          <stop offset="1" stopColor="#FFF4C8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <rect width="400" height="300" fill="url(#skyD)" />
                      <g fill="#F4EFD8">
                        <circle cx="40" cy="30" r="1.2" />
                        <circle cx="96" cy="54" r="1" />
                        <circle cx="150" cy="22" r="1.4" />
                        <circle cx="210" cy="46" r="1" />
                        <circle cx="260" cy="18" r="1.2" />
                        <circle cx="378" cy="96" r="1" />
                        <circle cx="120" cy="90" r="1" />
                      </g>
                      <circle cx="330" cy="50" r="16" fill="#F4EFD8" />
                      <circle cx="337" cy="45" r="14" fill="#0D1826" />
                      <path d="M0 200l50-36 40 16 60-46 50 30 60-28 60 30 80-22V300H0z" fill="#101C28" />
                      <g fill="#0C1620">
                        <rect y="190" width="70" height="66" />
                        <rect x="250" y="180" width="80" height="76" />
                      </g>
                      <g fill="#F2C94C" opacity=".8">
                        <rect x="14" y="204" width="8" height="10" />
                        <rect x="40" y="220" width="8" height="10" />
                        <rect x="266" y="196" width="8" height="10" />
                        <rect x="300" y="214" width="8" height="10" />
                      </g>
                      <rect y="256" width="400" height="44" fill="#16202A" />
                      <path d="M374 256V170h-16" fill="none" stroke="#3A4652" strokeWidth="3" />
                      <circle cx="358" cy="176" r="40" fill="url(#lampD)" />
                      <rect x="350" y="170" width="14" height="5" rx="2" fill="#FFE9A8" />
                      <use href="#tanker-side" x="50" y="120" width="300" height="155" />
                      <ellipse cx="34" cy="272" rx="22" ry="5" fill="#0A1420" stroke="#3A4652" />
                      <path d="M88 212c-24 4-36 24-34 40 1 10-12 16-20 20" fill="none" stroke="#F4F7F6" strokeWidth="5" strokeLinecap="round" />
                      <path d="M88 212c-24 4-36 24-34 40 1 10-12 16-20 20" fill="none" stroke="#B7C3C3" strokeWidth="5" strokeDasharray="1 2" />
                      <rect width="400" height="300" fill="#0A1420" opacity=".36" />
                      <path d="M328 219L400 196V252L328 226z" fill="url(#beamD)" />
                      <circle className="glow" cx="291" cy="158" r="24" fill="url(#glowD)" />
                    </svg>
                    {" "}
                    <figcaption>
                      {" "}
                      <strong>
                        <span className="en">
                          {"Night emergency call-outs"}
                        </span>
                        <span className="ar">
                          {"طوارئ ليلية"}
                        </span>
                      </strong>
                      {" "}
                      <span className="d">
                        <span className="en">
                          {"An overflow at 2 a.m.? The tanker is on its way."}
                        </span>
                        <span className="ar">
                          {"فيضان في الثانية فجراً؟ الصهريج في طريقه إليك."}
                        </span>
                      </span>
                      {" "}
                    </figcaption>
                    {" "}
                  </figure>
                  {" "}
                </div>
                {" "}
              </div>
              {/* /work */}
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec showcase" id="truck-3d">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Our tanker in 3D"}
                  </span>
                  <span className="ar">
                    {"صهريجنا بالأبعاد الثلاثية"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"Turn the truck and look around"}
                  </span>
                  <span className="ar">
                    {"حرّك الصهريج وشاهده من كل الجهات"}
                  </span>
                </h2>
                {" "}
                <p>
                  <span className="en">
                    {"The same yellow tanker that comes to your door. Drag it, or pick a view below."}
                  </span>
                  <span className="ar">
                    {"نفس الصهريج الأصفر الذي يصل إلى بابك. اسحبه أو اختر زاوية من الأسفل."}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              <div className="stage3d" id="stage3d" tabIndex={0} aria-label="3D model of the yellow suction tanker. Drag or use the arrow keys to turn it.">
                {" "}
                <p className="hint">
                  <span className="en">
                    {"Drag to turn"}
                  </span>
                  <span className="ar">
                    {"اسحب للتدوير"}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              <div className="views" id="views3d">
                {" "}
                <button type="button" id="view-side" data-view="side" aria-pressed="false">
                  <span className="en">
                    {"Side"}
                  </span>
                  <span className="ar">
                    {"الجانب"}
                  </span>
                </button>
                {" "}
                <button type="button" id="view-three" data-view="three" aria-pressed="false">
                  <span className="en">
                    {"3/4 view"}
                  </span>
                  <span className="ar">
                    {"زاوية أمامية"}
                  </span>
                </button>
                {" "}
                <button type="button" id="view-front" data-view="front" aria-pressed="false">
                  <span className="en">
                    {"Front"}
                  </span>
                  <span className="ar">
                    {"الأمام"}
                  </span>
                </button>
                {" "}
                <button type="button" id="view-rear" data-view="rear" aria-pressed="false">
                  <span className="en">
                    {"Rear"}
                  </span>
                  <span className="ar">
                    {"الخلف"}
                  </span>
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec" id="features">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Tanker features"}
                  </span>
                  <span className="ar">
                    {"مواصفات الصهريج"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"What's on our tanker"}
                  </span>
                  <span className="ar">
                    {"ماذا يوجد في صهريجنا"}
                  </span>
                </h2>
                {" "}
                <p>
                  <span className="en">
                    {"Every part has a job. Tap a feature to find it on the truck."}
                  </span>
                  <span className="ar">
                    {"لكل جزء مهمة. اضغط على الميزة لتجدها على الصهريج."}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              <div className="feat">
                {" "}
                <div className="feat-art">
                  {" "}
                  <svg viewBox="0 0 660 360" role="img" aria-label="Our yellow suction tanker with six numbered features">
                    <use href="#tanker-side" x="0" y="10" width="660" height="340" />
                    <ellipse cx="40" cy="311" rx="30" ry="6" fill="#0A1A1F" stroke="#5C6A6B" strokeWidth="2" />
                    <path d="M84 212C56 218 40 244 48 270c5 18-6 32-8 40" fill="none" stroke="#F4F7F6" strokeWidth="10" strokeLinecap="round" />
                    <path d="M84 212C56 218 40 244 48 270c5 18-6 32-8 40" fill="none" stroke="#B7C3C3" strokeWidth="10" strokeDasharray="1.5 3.5" />
                    <g className="mk" data-f="1" transform="translate(408 206)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"1"}
                      </text>
                    </g>
                    <g className="mk" data-f="2" transform="translate(448 212)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"2"}
                      </text>
                    </g>
                    <g className="mk" data-f="3" transform="translate(50 262)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"3"}
                      </text>
                    </g>
                    <g className="mk" data-f="4" transform="translate(127 150)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"4"}
                      </text>
                    </g>
                    <g className="mk" data-f="5" transform="translate(218 76)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"5"}
                      </text>
                    </g>
                    <g className="mk" data-f="6" transform="translate(530 74)">
                      <circle className="ring" r="13" />
                      <circle r="13" />
                      <text>
                        {"6"}
                      </text>
                    </g>
                  </svg>
                  {" "}
                </div>
                {" "}
                <ol className="feat-list">
                  <li data-f="1">
                    <span className="n">
                      {"1"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"Up to 12,000-gallon tank"}
                        </span>
                        <span className="ar">
                          {"خزان حتى 12,000 جالون"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"About 54,550 litres, so big buildings and compounds are emptied in one trip."}
                        </span>
                        <span className="ar">
                          {"حوالي 54,550 لتر، لتفريغ المباني الكبيرة والمجمعات في رحلة واحدة."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                  <li data-f="2">
                    <span className="n">
                      {"2"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"Powerful vacuum pump"}
                        </span>
                        <span className="ar">
                          {"مضخة شفط قوية"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Pulls sewage, sludge and standing water out fast, even from deep pits."}
                        </span>
                        <span className="ar">
                          {"تسحب مياه المجاري والرواسب والمياه الراكدة بسرعة حتى من الحفر العميقة."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                  <li data-f="3">
                    <span className="n">
                      {"3"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"4″ sealed suction hose"}
                        </span>
                        <span className="ar">
                          {"خرطوم شفط محكم 4 إنش"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Tight couplings keep smell and spills off your property."}
                        </span>
                        <span className="ar">
                          {"وصلات محكمة تمنع الروائح والتسرب في موقعك."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                  <li data-f="4">
                    <span className="n">
                      {"4"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"Level gauge"}
                        </span>
                        <span className="ar">
                          {"مؤشر المستوى"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"The crew can see how full the tank is, so it never overfills."}
                        </span>
                        <span className="ar">
                          {"يرى الفريق مستوى امتلاء الخزان فلا يحدث فيضان."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                  <li data-f="5">
                    <span className="n">
                      {"5"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"Sealed top hatches"}
                        </span>
                        <span className="ar">
                          {"فتحات علوية محكمة"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Closed lids for inspection and cleaning, and no open tank on the road."}
                        </span>
                        <span className="ar">
                          {"أغطية مغلقة للفحص والتنظيف، دون خزان مكشوف على الطريق."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                  <li data-f="6">
                    <span className="n">
                      {"6"}
                    </span>
                    <div>
                      {" "}
                      <h3>
                        <span className="en">
                          {"Beacon and safety chevrons"}
                        </span>
                        <span className="ar">
                          {"إضاءة تحذيرية وشارات أمان"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Easy to see at night and on busy roads while we work."}
                        </span>
                        <span className="ar">
                          {"واضحة ليلاً وعلى الطرق المزدحمة أثناء العمل."}
                        </span>
                      </p>
                      {" "}
                    </div>
                  </li>
                </ol>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec fleet-bg" id="fleet">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Our tankers"}
                  </span>
                  <span className="ar">
                    {"صهاريجنا"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"Choose the right tanker size"}
                  </span>
                  <span className="ar">
                    {"اختر حجم الصهريج المناسب"}
                  </span>
                </h2>
                {" "}
                <p>
                  <span className="en">
                    {"Three sizes. Tell us your tank and we'll send the one that fits — you never pay for a bigger truck than the job needs."}
                  </span>
                  <span className="ar">
                    {"ثلاثة أحجام. أخبرنا عن خزانك وسنرسل الصهريج المناسب — دون أن تدفع ثمن صهريج أكبر من حاجتك."}
                  </span>
                </p>
                {" "}
              </div>
              {" "}
              <div className="fleet" role="table" aria-label="Tanker sizes">
                {" "}
                <div className="fleet-row th" role="row">
                  {" "}
                  <span role="columnheader">
                    <span className="en">
                      {"Tanker"}
                    </span>
                    <span className="ar">
                      {"الصهريج"}
                    </span>
                  </span>
                  {" "}
                  <span role="columnheader">
                    <span className="en">
                      {"Capacity, to scale"}
                    </span>
                    <span className="ar">
                      {"السعة بالمقياس"}
                    </span>
                  </span>
                  {" "}
                  <span role="columnheader">
                    <span className="en">
                      {"Litres"}
                    </span>
                    <span className="ar">
                      {"باللتر"}
                    </span>
                  </span>
                  {" "}
                  <span role="columnheader" className="best">
                    <span className="en">
                      {"Best for"}
                    </span>
                    <span className="ar">
                      {"مناسب لـ"}
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="fleet-row" role="row">
                  {" "}
                  <div className="gal ltr" role="cell">
                    {"5,000"}
                    <small>
                      <span className="en">{"gallons"}</span>
                      <span className="ar">{"جالون"}</span>
                    </small>
                  </div>
                  {" "}
                  <div className="bar" role="cell" aria-label="42% of largest tanker">
                    <i style={{"width":"41.7%"}} />
                  </div>
                  {" "}
                  <div className="litre ltr" role="cell">
                    {"≈ 22,730 "}<span className="en">{"L"}</span><span className="ar">{"لتر"}</span>
                  </div>
                  {" "}
                  <div className="best" role="cell">
                    <span className="en">
                      {"Villas, houses and small septic tanks"}
                    </span>
                    <span className="ar">
                      {"الفلل والمنازل والبيارات الصغيرة"}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fleet-row" role="row">
                  {" "}
                  <div className="gal ltr" role="cell">
                    {"8,000"}
                    <small>
                      <span className="en">{"gallons"}</span>
                      <span className="ar">{"جالون"}</span>
                    </small>
                  </div>
                  {" "}
                  <div className="bar" role="cell" aria-label="67% of largest tanker">
                    <i style={{"width":"66.7%"}} />
                  </div>
                  {" "}
                  <div className="litre ltr" role="cell">
                    {"≈ 36,370 "}<span className="en">{"L"}</span><span className="ar">{"لتر"}</span>
                  </div>
                  {" "}
                  <div className="best" role="cell">
                    <span className="en">
                      {"Apartment buildings, restaurants, schools"}
                    </span>
                    <span className="ar">
                      {"العمارات السكنية والمطاعم والمدارس"}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="fleet-row" role="row">
                  {" "}
                  <div className="gal ltr" role="cell">
                    {"12,000"}
                    <small>
                      <span className="en">{"gallons"}</span>
                      <span className="ar">{"جالون"}</span>
                    </small>
                  </div>
                  {" "}
                  <div className="bar" role="cell" aria-label="100% — largest tanker">
                    <i style={{"width":"100%"}} />
                  </div>
                  {" "}
                  <div className="litre ltr" role="cell">
                    {"≈ 54,550 "}<span className="en">{"L"}</span><span className="ar">{"لتر"}</span>
                  </div>
                  {" "}
                  <div className="best" role="cell">
                    <span className="en">
                      {"Hotels, compounds, factories, construction sites"}
                    </span>
                    <span className="ar">
                      {"الفنادق والمجمعات والمصانع ومواقع البناء"}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <p className="fleet-note">
                <span className="en">
                  {"Capacities in imperial gallons (1 gal = 4.546 L)."}
                </span>
                <span className="ar">
                  {"السعات بالجالون الإمبراطوري (1 جالون = 4.546 لتر)."}
                </span>
              </p>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec" id="process">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"How it works"}
                  </span>
                  <span className="ar">
                    {"طريقة العمل"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"From your call to a clean site"}
                  </span>
                  <span className="ar">
                    {"من اتصالك حتى موقع نظيف"}
                  </span>
                </h2>
                {" "}
              </div>
              {" "}
              <ol className="steps">
                <li>
                  {" "}
                  <span className="num">
                    {"1"}
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Call or WhatsApp"}
                    </span>
                    <span className="ar">
                      {"اتصل أو راسلنا"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"Tell us your area, the tank type, and when it was last emptied."}
                    </span>
                    <span className="ar">
                      {"أخبرنا بالمنطقة ونوع الخزان وآخر مرة تم تفريغه."}
                    </span>
                  </p>
                  {" "}
                </li>
                <li>
                  {" "}
                  <span className="num">
                    {"2"}
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Price & time confirmed"}
                    </span>
                    <span className="ar">
                      {"تأكيد السعر والموعد"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"You get a fixed price and an arrival time before the tanker leaves."}
                    </span>
                    <span className="ar">
                      {"نؤكد لك السعر والموعد قبل انطلاق الصهريج."}
                    </span>
                  </p>
                  {" "}
                </li>
                <li>
                  {" "}
                  <span className="num">
                    {"3"}
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Suction on site"}
                    </span>
                    <span className="ar">
                      {"الشفط في الموقع"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"The crew lays the hose, pumps the tank dry and lifts out bottom sludge."}
                    </span>
                    <span className="ar">
                      {"يمدّ الفريق الخرطوم ويفرّغ الخزان بالكامل مع إزالة رواسب القاع."}
                    </span>
                  </p>
                  {" "}
                </li>
                <li>
                  {" "}
                  <span className="num">
                    {"4"}
                  </span>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Rinsed & disposed"}
                    </span>
                    <span className="ar">
                      {"غسل الموقع والتخلص الآمن"}
                    </span>
                  </h3>
                  {" "}
                  <p>
                    <span className="en">
                      {"The area is washed down and the load goes to a licensed treatment plant."}
                    </span>
                    <span className="ar">
                      {"نغسل المكان وننقل الحمولة إلى محطة معالجة مرخّصة."}
                    </span>
                  </p>
                  {" "}
                </li>
              </ol>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec fleet-bg" id="clients">
            {" "}
            <div className="wrap two">
              {" "}
              <div>
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Who calls us"}
                  </span>
                  <span className="ar">
                    {"من نخدم"}
                  </span>
                </p>
                {" "}
                <h2 className="sub-h">
                  <span className="en">
                    {"Homes, kitchens and whole compounds"}
                  </span>
                  <span className="ar">
                    {"منازل ومطابخ ومجمعات كاملة"}
                  </span>
                </h2>
                {" "}
                <ul className="chips">
                  <li>
                    <span className="en">
                      {"Villas & houses"}
                    </span>
                    <span className="ar">
                      {"الفلل والمنازل"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Residential buildings"}
                    </span>
                    <span className="ar">
                      {"العمارات السكنية"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Restaurants & bakeries"}
                    </span>
                    <span className="ar">
                      {"المطاعم والمخابز"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Hotels & compounds"}
                    </span>
                    <span className="ar">
                      {"الفنادق والمجمعات"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Hospitals & clinics"}
                    </span>
                    <span className="ar">
                      {"المستشفيات والعيادات"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Malls & offices"}
                    </span>
                    <span className="ar">
                      {"المولات والمكاتب"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Factories & workshops"}
                    </span>
                    <span className="ar">
                      {"المصانع والورش"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Construction sites"}
                    </span>
                    <span className="ar">
                      {"مواقع البناء"}
                    </span>
                  </li>
                  <li>
                    <span className="en">
                      {"Mosques & schools"}
                    </span>
                    <span className="ar">
                      {"المساجد والمدارس"}
                    </span>
                  </li>
                </ul>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Why choose us"}
                  </span>
                  <span className="ar">
                    {"لماذا نحن"}
                  </span>
                </p>
                {" "}
                <h2 className="sub-h">
                  <span className="en">
                    {"A dirty job, done properly"}
                  </span>
                  <span className="ar">
                    {"عمل صعب، ننجزه كما يجب"}
                  </span>
                </h2>
                {" "}
                <ul className="why">
                  <li>
                    {" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    {" "}
                    <div>
                      <h3>
                        <span className="en">
                          {"Sealed hoses, no smell left behind"}
                        </span>
                        <span className="ar">
                          {"خراطيم محكمة بلا روائح"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Tight couplings and a closed tank keep odour and spillage off your property."}
                        </span>
                        <span className="ar">
                          {"وصلات محكمة وخزان مغلق يمنعان الروائح والتسرب في موقعك."}
                        </span>
                      </p>
                    </div>
                    {" "}
                  </li>
                  <li>
                    {" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    {" "}
                    <div>
                      <h3>
                        <span className="en">
                          {"Price agreed up front"}
                        </span>
                        <span className="ar">
                          {"سعر واضح مسبقاً"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"The price we quote on the phone is the price you pay."}
                        </span>
                        <span className="ar">
                          {"السعر الذي نتفق عليه بالهاتف هو ما تدفعه."}
                        </span>
                      </p>
                    </div>
                    {" "}
                  </li>
                  <li>
                    {" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    {" "}
                    <div>
                      <h3>
                        <span className="en">
                          {"Legal disposal, every load"}
                        </span>
                        <span className="ar">
                          {"تخلص نظامي لكل حمولة"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"Waste goes to an approved treatment plant — never dumped in wadis or open land."}
                        </span>
                        <span className="ar">
                          {"المخلفات تذهب إلى محطة معالجة معتمدة — لا رمي في الأودية أو الأراضي المكشوفة."}
                        </span>
                      </p>
                    </div>
                    {" "}
                  </li>
                  <li>
                    {" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    {" "}
                    <div>
                      <h3>
                        <span className="en">
                          {"Nights and holidays"}
                        </span>
                        <span className="ar">
                          {"ليلاً وفي العطل"}
                        </span>
                      </h3>
                      {" "}
                      <p>
                        <span className="en">
                          {"An overflow doesn't wait for office hours, and neither do we."}
                        </span>
                        <span className="ar">
                          {"فيضان الخزان لا ينتظر أوقات الدوام، ونحن كذلك."}
                        </span>
                      </p>
                    </div>
                    {" "}
                  </li>
                </ul>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec" id="faq">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"FAQ"}
                  </span>
                  <span className="ar">
                    {"الأسئلة الشائعة"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"Questions people ask before booking"}
                  </span>
                  <span className="ar">
                    {"أسئلة قبل الحجز"}
                  </span>
                </h2>
                {" "}
              </div>
              {" "}
              <div className="faq">
                {" "}
                <details open>
                  {" "}
                  <summary>
                    <span className="en">
                      {"How often should a septic tank be emptied?"}
                    </span>
                    <span className="ar">
                      {"كم مرة يجب تفريغ البيارة؟"}
                    </span>
                  </summary>
                  {" "}
                  <p>
                    <span className="en">
                      {"For a family house, usually every 6–12 months. Signs it's due: slow drains, a smell near the cover, or water pooling around the tank."}
                    </span>
                    <span className="ar">
                      {"للمنزل العائلي عادةً كل 6 إلى 12 شهراً. من علامات الامتلاء: بطء التصريف، أو رائحة قرب الغطاء، أو تجمّع المياه حول الخزان."}
                    </span>
                  </p>
                  {" "}
                </details>
                {" "}
                <details>
                  {" "}
                  <summary>
                    <span className="en">
                      {"Do you come at night or on Fridays?"}
                    </span>
                    <span className="ar">
                      {"هل تأتون ليلاً أو يوم الجمعة؟"}
                    </span>
                  </summary>
                  {" "}
                  <p>
                    <span className="en">
                      {"Yes. The line is answered 24 hours a day, including weekends and public holidays."}
                    </span>
                    <span className="ar">
                      {"نعم، نرد على الاتصالات على مدار 24 ساعة بما في ذلك العطل الأسبوعية والرسمية."}
                    </span>
                  </p>
                  {" "}
                </details>
                {" "}
                <details>
                  {" "}
                  <summary>
                    <span className="en">
                      {"Which tanker size do I need?"}
                    </span>
                    <span className="ar">
                      {"ما حجم الصهريج المناسب لي؟"}
                    </span>
                  </summary>
                  {" "}
                  <p>
                    <span className="en">
                      {"Most houses need 5,000 gallons; buildings and restaurants usually 8,000; hotels and compounds 12,000. Tell us the tank size if you know it and we'll match it."}
                    </span>
                    <span className="ar">
                      {"معظم المنازل تحتاج 5,000 جالون، والعمارات والمطاعم غالباً 8,000، والفنادق والمجمعات 12,000. أخبرنا بحجم خزانك إن كنت تعرفه وسنختار المناسب."}
                    </span>
                  </p>
                  {" "}
                </details>
                {" "}
                <details>
                  {" "}
                  <summary>
                    <span className="en">
                      {"Where does the waste go?"}
                    </span>
                    <span className="ar">
                      {"أين تذهب المخلفات؟"}
                    </span>
                  </summary>
                  {" "}
                  <p>
                    <span className="en">
                      {"To a licensed wastewater treatment plant. We never discharge into drains, wadis or open land."}
                    </span>
                    <span className="ar">
                      {"إلى محطة معالجة مياه صرف مرخّصة، ولا نفرغها أبداً في المجاري أو الأودية أو الأراضي المكشوفة."}
                    </span>
                  </p>
                  {" "}
                </details>
                {" "}
                <details>
                  {" "}
                  <summary>
                    <span className="en">
                      {"Can I book regular cleaning?"}
                    </span>
                    <span className="ar">
                      {"هل يمكن حجز تنظيف دوري؟"}
                    </span>
                  </summary>
                  {" "}
                  <p>
                    <span className="en">
                      {"Yes — restaurants and buildings can set a monthly or quarterly schedule, and we'll remind you before each visit."}
                    </span>
                    <span className="ar">
                      {"نعم، يمكن للمطاعم والمباني تحديد جدول شهري أو ربع سنوي، وسنذكّرك قبل كل زيارة."}
                    </span>
                  </p>
                  {" "}
                </details>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section className="sec contact" id="contact">
            {" "}
            <div className="wrap">
              {" "}
              <div className="sec-head">
                {" "}
                <p className="eyebrow">
                  <span className="en">
                    {"Book a tanker"}
                  </span>
                  <span className="ar">
                    {"احجز صهريجاً"}
                  </span>
                </p>
                {" "}
                <h2>
                  <span className="en">
                    {"Tank full? Call now — we answer 24 hours."}
                  </span>
                  <span className="ar">
                    {"الخزان ممتلئ؟ اتصل الآن — نرد على مدار الساعة."}
                  </span>
                </h2>
                {" "}
              </div>
              {" "}
              <div className="contact-grid">
                {" "}
                <div className="contact-left">
                  {" "}
                  <div className="lines">
                    {" "}
                    <a data-tel="" href="tel:+96876368205">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-phone" />
                      </svg>
                      {" "}
                      <span>
                        <small>
                          <span className="en">
                            {"24-hour phone line"}
                          </span>
                          <span className="ar">
                            {"هاتف على مدار الساعة"}
                          </span>
                        </small>
                        <strong className="big ltr" data-phone="">
                          {"+968 7636 8205"}
                        </strong>
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a data-wa="" href="https://wa.me/96878061190" target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-wa" />
                      </svg>
                      {" "}
                      <span>
                        <small>
                          <span className="en">{"WhatsApp · "}</span><span className="ar">{"واتساب · "}</span>
                          <span className="ltr" data-wa-text="">
                            {"+968 7806 1190"}
                          </span>
                        </small>
                        <strong>
                          <span className="en">
                            {"Send a message or location"}
                          </span>
                          <span className="ar">
                            {"أرسل رسالة أو موقعك"}
                          </span>
                        </strong>
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a data-email="" href="mailto:shafit.mianmajari@gmail.com">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-mail" />
                      </svg>
                      {" "}
                      <span>
                        <small>
                          <span className="en">
                            {"Email"}
                          </span>
                          <span className="ar">
                            {"البريد الإلكتروني"}
                          </span>
                        </small>
                        <strong className="ltr" data-email-text="">
                          {"shafit.mianmajari@gmail.com"}
                        </strong>
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a href={"https://www.google.com/maps/search/?api=1&query=Mabelah%20Industrial%20Area%2C%20Muscat%2C%20Oman"} target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-pin" />
                      </svg>
                      {" "}
                      <span>
                        <small>
                          <span className="en">
                            {"Location 1 · open in Google Maps"}
                          </span>
                          <span className="ar">
                            {"الموقع 1 · افتح في خرائط Google"}
                          </span>
                        </small>
                        <strong>
                          <span className="en">
                            {"Mahbellah Saniya, Muscat, Oman"}
                          </span>
                          <span className="ar">
                            {"المعبيلة الصناعية، مسقط، سلطنة عُمان"}
                          </span>
                        </strong>
                      </span>
                      {" "}
                    </a>
                    {" "}
                    <a href={"https://www.google.com/maps/search/?api=1&query=Al%20Khoud%2C%20Muscat%2C%20Oman"} target="_blank" rel="noopener">
                      {" "}
                      <svg className="i" aria-hidden="true">
                        <use href="#i-pin" />
                      </svg>
                      {" "}
                      <span>
                        <small>
                          <span className="en">
                            {"Location 2 · open in Google Maps"}
                          </span>
                          <span className="ar">
                            {"الموقع 2 · افتح في خرائط Google"}
                          </span>
                        </small>
                        <strong>
                          <span className="en">
                            {"Al Khoud, Muscat, Oman"}
                          </span>
                          <span className="ar">
                            {"الخوض، مسقط، سلطنة عُمان"}
                          </span>
                        </strong>
                      </span>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                  <div className="map-wrap">
                    {" "}
                    <div className="map-tabs" role="group" aria-label="Location shown on the map">
                      {" "}
                      <button type="button" aria-pressed="true" data-map="Mabelah Industrial Area, Muscat, Oman" data-title="Map of Mahbellah Saniya, Muscat">
                        <span className="en">
                          {"Mahbellah Saniya"}
                        </span>
                        <span className="ar">
                          {"المعبيلة الصناعية"}
                        </span>
                      </button>
                      {" "}
                      <button type="button" aria-pressed="false" data-map="Al Khoud, Muscat, Oman" data-title="Map of Al Khoud, Muscat">
                        <span className="en">
                          {"Al Khoud"}
                        </span>
                        <span className="ar">
                          {"الخوض"}
                        </span>
                      </button>
                      {" "}
                    </div>
                    {" "}
                    <div className="map">
                      {" "}
                      <iframe id="mapFrame" title="Map of Mahbellah Saniya, Muscat" src={"https://www.google.com/maps?q=Mabelah+Industrial+Area,+Muscat,+Oman&output=embed"} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <form className="form" id="quote" noValidate>
                  {" "}
                  <h3>
                    <span className="en">
                      {"Request a quote"}
                    </span>
                    <span className="ar">
                      {"اطلب عرض سعر"}
                    </span>
                  </h3>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="q-name">
                      <span className="en">
                        {"Your name"}
                      </span>
                      <span className="ar">
                        {"الاسم"}
                      </span>
                    </label>
                    {" "}
                    <input id="q-name" name="name" required autoComplete="name" data-ph-en="e.g. Ahmed Al-Balushi" data-ph-ar="مثال: أحمد البلوشي" placeholder="e.g. Ahmed Al-Balushi" />
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="q-phone">
                      <span className="en">
                        {"Phone"}
                      </span>
                      <span className="ar">
                        {"رقم الهاتف"}
                      </span>
                    </label>
                    {" "}
                    <input id="q-phone" name="phone" type="tel" required autoComplete="tel" dir="ltr" placeholder="+968 …" data-ph-en="+968 …" data-ph-ar="+968 …" />
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="q-service">
                      <span className="en">
                        {"Service"}
                      </span>
                      <span className="ar">
                        {"الخدمة"}
                      </span>
                    </label>
                    {" "}
                    <select id="q-service" name="service">
                      <option data-en="Septic tank emptying" data-ar="تفريغ البيارة">
                        {"Septic tank emptying"}
                      </option>
                      <option data-en="Sewage water suction" data-ar="شفط مياه المجاري">
                        {"Sewage water suction"}
                      </option>
                      <option data-en="Grease trap cleaning" data-ar="تنظيف مصيدة الشحوم">
                        {"Grease trap cleaning"}
                      </option>
                      <option data-en="Manhole / drain blockage" data-ar="انسداد غرفة تفتيش / مجرى">
                        {"Manhole / drain blockage"}
                      </option>
                      <option data-en="Sump pit / pump station" data-ar="غرفة ضخ / محطة رفع">
                        {"Sump pit / pump station"}
                      </option>
                      <option data-en="Emergency overflow" data-ar="طوارئ فيضان">
                        {"Emergency overflow"}
                      </option>
                    </select>
                    {" "}
                  </div>
                  {" "}
                  <div className="field">
                    {" "}
                    <label htmlFor="q-size">
                      <span className="en">
                        {"Tanker size"}
                      </span>
                      <span className="ar">
                        {"حجم الصهريج"}
                      </span>
                    </label>
                    {" "}
                    <select id="q-size" name="size">
                      <option data-en="Not sure — advise me" data-ar="غير متأكد — انصحوني">
                        {"Not sure — advise me"}
                      </option>
                      <option data-en="5,000 gallons" data-ar="5,000 جالون">
                        {"5,000 gallons"}
                      </option>
                      <option data-en="8,000 gallons" data-ar="8,000 جالون">
                        {"8,000 gallons"}
                      </option>
                      <option data-en="12,000 gallons" data-ar="12,000 جالون">
                        {"12,000 gallons"}
                      </option>
                    </select>
                    {" "}
                  </div>
                  {" "}
                  <div className="field full">
                    {" "}
                    <label htmlFor="q-area">
                      <span className="en">
                        {"Area / location"}
                      </span>
                      <span className="ar">
                        {"المنطقة / الموقع"}
                      </span>
                    </label>
                    {" "}
                    <input id="q-area" name="area" data-ph-en="Area, street or landmark" data-ph-ar="المنطقة أو الشارع أو أقرب معلم" placeholder="Area, street or landmark" />
                    {" "}
                  </div>
                  {" "}
                  <div className="field full">
                    {" "}
                    <label htmlFor="q-notes">
                      <span className="en">
                        {"Details (optional)"}
                      </span>
                      <span className="ar">
                        {"تفاصيل إضافية (اختياري)"}
                      </span>
                    </label>
                    {" "}
                    <textarea id="q-notes" name="notes" data-ph-en="e.g. tank overflowing since this morning, villa, last emptied a year ago" data-ph-ar="مثال: الخزان يفيض منذ الصباح، فيلا، آخر تفريغ قبل سنة" placeholder="e.g. tank overflowing since this morning, villa, last emptied a year ago" />
                    {" "}
                  </div>
                  {" "}
                  <button className="btn" type="submit">
                    {" "}
                    <svg className="i" aria-hidden="true">
                      <use href="#i-wa" />
                    </svg>
                    {" "}
                    <span className="en">
                      {"Send on WhatsApp"}
                    </span>
                    <span className="ar">
                      {"أرسل عبر واتساب"}
                    </span>
                    {" "}
                  </button>
                  {" "}
                  <p className="form-note">
                    <span className="en">
                      {"Opens WhatsApp with your details already written."}
                    </span>
                    <span className="ar">
                      {"يفتح واتساب ببياناتك مكتوبة وجاهزة للإرسال."}
                    </span>
                  </p>
                  {" "}
                  <p className="form-status" id="formStatus" role="status" aria-live="polite" />
                  {" "}
                </form>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </main>
        {" "}
        <footer className="foot">
          {" "}
          <div className="wrap">
            {" "}
            <a className="brand" href="#top">
              {" "}
              <svg aria-hidden="true">
                <use href="#logo" />
              </svg>
              {" "}
              <span className="brand-txt">
                {" "}
                <span className="brand-en">
                  {"Sewerage Water Tank"}
                </span>
                {" "}
                <span className="brand-ar" lang="ar" dir="rtl">
                  {"الشفط میاں مجاری"}
                </span>
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <p className="foot-addr">
              <svg className="i" aria-hidden="true">
                <use href="#i-pin" />
              </svg>
              <span className="en">
                {"Mahbellah Saniya · Al Khoud, Muscat, Oman"}
              </span>
              <span className="ar">
                {"المعبيلة الصناعية · الخوض، مسقط، سلطنة عُمان"}
              </span>
            </p>
            {" "}
            <p>
              {"© "}
              <span id="yr">
                {"2026"}
              </span>
              {" Sewerage Water Tank. "}
              <span className="en">
                {"All rights reserved."}
              </span>
              <span className="ar">
                {"جميع الحقوق محفوظة."}
              </span>
            </p>
            {" "}
          </div>
          {" "}
        </footer>
        {" "}
        <nav className="mbar" aria-label="Quick contact">
          {" "}
          <a data-tel="" href="tel:+96876368205">
            <svg className="i" aria-hidden="true">
              <use href="#i-phone" />
            </svg>
            <span className="en">
              {"Call"}
            </span>
            <span className="ar">
              {"اتصال"}
            </span>
          </a>
          {" "}
          <a data-wa="" href="https://wa.me/96878061190" target="_blank" rel="noopener">
            <svg className="i" aria-hidden="true">
              <use href="#i-wa" />
            </svg>
            <span className="en">{"WhatsApp"}</span>
            <span className="ar">{"واتساب"}</span>
          </a>
          {" "}
        </nav>
        {" "}
      </div>
)
