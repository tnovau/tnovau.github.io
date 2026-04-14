import type { Metadata } from 'next'
import PortifolioContent from './content'

export const metadata: Metadata = {
  title: 'Portifolio',
}

export default function PortifolioPage() {
  return <PortifolioContent />
}
