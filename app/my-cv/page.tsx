import { components } from '@/components/MDXComponents'
import { genPageMetadata } from 'app/seo'
import { CV, allCVs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import CVLayout from '../../layouts/CVLayout'

export const metadata = genPageMetadata({ title: 'My Resume' })

export default async function Page(props: { searchParams: Promise<{ lang?: string }> }) {
  const searchParams = await props.searchParams
  const lang = searchParams.lang || 'en' // Default to English

  const cv = allCVs.find((p) => p.slug === `lam-quang-vinh-${lang}`) as CV

  if (!cv) {
    notFound()
  }

  const mainContent = coreContent(cv)

  return (
    <>
      <CVLayout content={mainContent} currentLang={lang}>
        <MDXLayoutRenderer code={cv.body.code} components={components} />
      </CVLayout>
    </>
  )
}
