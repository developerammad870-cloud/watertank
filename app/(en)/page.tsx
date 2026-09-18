import SitePage from '../ui/site-page'
import { pageMetadata } from '../ui/seo'

// English: /
export const metadata = pageMetadata('en')

export default function Page() {
  return <SitePage lang="en" />
}
