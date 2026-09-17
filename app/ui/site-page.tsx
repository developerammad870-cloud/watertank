import SiteBehavior from './site-behavior'
import { localize, type Lang } from './localize'
import { siteMarkup } from './site-markup'
import { structuredData } from './structured-data'

// The whole page in one language. Structured data is a plain <script> tag
// (node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
export default function SitePage({ lang }: { lang: Lang }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)).replace(/</g, '\\u003c') }}
      />
      {localize(siteMarkup, lang)}
      <SiteBehavior />
    </>
  )
}
