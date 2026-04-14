import * as motion from 'motion/react-client'
import { ThemeProvider } from './theme/theme-provider'
import Footer from './footer'
import dynamic from 'next/dynamic'

const Sidebar = dynamic(() => import('./sidebar'))

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const Layout = ({ children, keyName }) => {
  return (
    <ThemeProvider>
      <div className="bg-bg overflow-x-hidden">
        <Sidebar />
        {/* Push content right on desktop to clear sidebar, down on mobile to clear top bar */}
        <div className="pt-14 md:pt-0 md:pl-[240px]">
          <motion.main
            key={keyName}
            variants={variants}
            initial="initial"
            animate="enter"
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout