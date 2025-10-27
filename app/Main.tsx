import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-3 py-8 md:space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
            Latest Posts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{siteMetadata.description}</p>
        </div>
        <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          {!posts.length && (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, readingTime, images } = post
            return (
              <article
                key={slug}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-gray-800/50"
              >
                <Link href={`/blog/${slug}`}>
                  <div className="aspect-[2/1] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {images && images[0] ? (
                      <img
                        src={images[0]}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-400">
                        <svg
                          className="h-12 w-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {tags?.slice(0, 2).map((tag) => <Tag key={tag} text={tag} />)}
                  </div>
                  <h2 className="mb-3 text-xl leading-7 font-bold tracking-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-900 transition-colors dark:text-gray-100"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                    {summary}
                  </p>
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
              </article>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center py-6">
          <Link
            href="/blog"
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
            aria-label="All posts"
          >
            View All Posts
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
