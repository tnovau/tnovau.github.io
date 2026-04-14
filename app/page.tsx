import type { Metadata } from 'next'
import siteConfig from '../data/siteConfig'
import HomeContent from './home-content'

export const metadata: Metadata = {
  title: siteConfig.siteTitle,
}

export default function HomePage() {
  return <HomeContent />
}
