import ServicePage, { SERVICE_SLUGS, serviceMetadata } from '../../../ui/service-page'

// English service pages: /services/<slug>, one per service, built ahead of time; any other slug is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return serviceMetadata('en', slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ServicePage lang="en" slug={slug} />
}
