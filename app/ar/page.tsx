import SitePage from '../ui/site-page'
import { pageMetadata } from '../ui/seo'

// Arabic: /ar
export const metadata = pageMetadata('ar')

export default function Page() {
  return <SitePage lang="ar" />
}
