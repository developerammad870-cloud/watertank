import RootHtml, { rootMetadata, rootViewport } from '../ui/root-html'

// Root layout for the Arabic page at /ar
export const metadata = rootMetadata
export const viewport = rootViewport

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="ar">{children}</RootHtml>
}
