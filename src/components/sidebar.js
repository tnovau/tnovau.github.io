"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useTheme } from './theme/theme-provider'
import siteConfig from '../../data/siteConfig'
import { animateOnScroll } from "../utils/isVisible";
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    animateOnScroll()
  }, [])

  const location = { pathname }
  const { headerLinks } = siteConfig
  const { twitter, linkedin, github, email } = siteConfig.social

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 w-full h-14 bg-primary flex items-center px-4 z-[1001] md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white bg-transparent border-none cursor-pointer p-1"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <span className="text-white font-bold ml-3 text-lg">{siteConfig.authorName}</span>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[1001] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-[240px] bg-primary z-[1002] flex flex-col transition-transform duration-300 md:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Avatar + name */}
        <div className="flex flex-col items-center pt-8 pb-6 px-4">
          <img
            className="w-[100px] h-[100px] rounded-full object-cover shadow-lg mb-3"
            src={siteConfig.authorAvatar}
            alt={siteConfig.authorName}
          />
          <span className="text-white font-bold text-lg text-center">{siteConfig.authorName}</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 gap-1 flex-1">
          {headerLinks.map((headerLink, i) => (
            <Link
              className={`no-underline text-white/80 hover:text-white hover:bg-white/10 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                location.pathname === headerLink.url
                  ? 'bg-white/15 text-white pointer-events-none'
                  : ''
              }`}
              href={headerLink.url}
              key={`sidebar-link-${i}`}
              onClick={() => setOpen(false)}
            >
              {headerLink.label}
            </Link>
          ))}
        </nav>

        {/* Bottom section: theme toggle + social */}
        <div className="px-4 pb-6">
          {/* Theme toggle */}
          {siteConfig.enableDarkmode && (
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="flex items-center gap-2 w-full px-4 py-2.5 mb-4 cursor-pointer bg-transparent border-none text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors text-sm font-medium"
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}

          <hr className="border-white/20 mb-4" />

          {/* Social links */}
          <div className="flex justify-center gap-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/60 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label="Email" className="text-white/60 hover:text-white transition-colors">
                <FaEnvelope size={20} />
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar