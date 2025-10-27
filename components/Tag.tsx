import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
