import Comments from '@/components/Comments'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import type { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import { ReactNode } from 'react'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, readingTime } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="mx-auto max-w-3xl">
        <div>
          <header>
            <div className="space-y-6 py-8 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex items-center justify-center gap-4">
                {authorDetails?.map((author) => (
                  <div key={author.name} className="flex items-center gap-3">
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={40}
                        height={40}
                        alt={author.name}
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {author.name}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        {readingTime && (
                          <>
                            <span>•</span>
                            <span>{readingTime}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>
          <div className="pb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none py-8">{children}</div>
            {siteMetadata.comments && (
              <div className="border-t border-gray-200 pt-8 dark:border-gray-800" id="comment">
                <Comments slug={slug} />
              </div>
            )}
          </div>
          <footer className="border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:justify-between">
              {prev && prev.path && (
                <div className="group">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400 inline-flex items-center transition-colors"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="group text-right">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400 inline-flex items-center transition-colors"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title}
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
