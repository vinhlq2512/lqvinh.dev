import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } group overflow-hidden rounded-xl bg-white transition-all duration-200 hover:shadow-lg dark:bg-gray-900 dark:hover:shadow-gray-800/50`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                width={544}
                height={306}
              />
            </div>
          </Link>
        ) : (
          <div className="overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              width={544}
              height={306}
            />
          </div>
        ))}
      <div className="p-6">
        <h2 className="mb-2 text-xl leading-7 font-bold tracking-tight">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="hover:text-primary-600 dark:hover:text-primary-400 text-gray-900 transition-colors dark:text-gray-100"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400 inline-flex items-center text-sm font-medium"
            aria-label={`Link to ${title}`}
          >
            Read more
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
