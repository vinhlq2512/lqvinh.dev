import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mt-8 flex flex-col items-center pb-8">
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
            {siteMetadata.title}
          </Link>
        </div>
      </div>
    </footer>
  )
}
