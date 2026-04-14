import siteConfig from '../data/siteConfig'
import HomeContent from './home-content'

export const metadata = {
  title: siteConfig.siteTitle,
}

export default function HomePage() {
  return <HomeContent />
}
