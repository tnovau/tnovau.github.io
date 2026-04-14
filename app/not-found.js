'use client'

import Hero from '../src/components/hero'
import Wrapper from '../src/components/wrapper'
import Layout from '../src/components/layout'

export default function NotFoundPage() {
  return (
    <Layout keyName="not-found">
      <Hero
        heroImg={'/images/404.jpeg'}
        title='404'
      />
      <Wrapper>
        <h1 className="leading-relaxed text-center text-5xl">404 Page Not Found</h1>
        <div className="w-[150px] mx-auto">
          <img src={'/images/ufo-and-cow.svg'} alt='ufo and cow' />
        </div>
        <p className="text-center">
          Looks like you&apos;ve followed a broken link or entered a URL that
          doesn&apos;t exist on this site.
        </p>
      </Wrapper>
    </Layout>
  )
}
