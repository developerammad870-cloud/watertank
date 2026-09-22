import ServicePage, { SERVICE_SLUGS, serviceMetadata } from '../../../../ui/service-page'

// Arabic service pages: /ar/services/<slug>, one per service, built ahead of time; any other slug is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return serviceMetadata('ar', slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ServicePage lang="ar" slug={slug} />
}
