import type { ReactNode } from 'react'
import { ThemeProvider } from './theme/theme-provider'
import Footer from './footer'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./sidebar'))

interface LayoutProps {
  children: ReactNode
  keyName: string
}

const Layout = ({ children, keyName }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="bg-bg overflow-x-hidden">
        <Sidebar />
        {/* Push content right on desktop to clear sidebar, down on mobile to clear top bar */}
        <div className="pt-14 md:pt-0 md:pl-[240px]">
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout