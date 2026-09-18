import RootHtml, { rootMetadata, rootViewport } from '../ui/root-html'

// Root layout for the English page at /
export const metadata = rootMetadata
export const viewport = rootViewport

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>
}
