import siteConfig from '../../data/siteConfig'

const Footer = () => {
  return (
    <footer className="min-h-[60px] flex items-center justify-center max-w-[calc(960px+48px)] mx-auto px-6 bg-bg text-sm">
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
    </footer>
  )
}

export default Footer