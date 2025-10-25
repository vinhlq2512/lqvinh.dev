import type { MDXComponents } from 'mdx/types'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import Pre from 'pliny/ui/Pre'
import TOCInline from 'pliny/ui/TOCInline'
import React from 'react'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

const CVLeftSection = ({ children }: { children: React.ReactNode }) => (
  <div className="cv-left">{children}</div>
)

const CVRightSection = ({ children }: { children: React.ReactNode }) => (
  <div className="cv-right">{children}</div>
)

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  CVLeftSection,
  CVRightSection,
}
