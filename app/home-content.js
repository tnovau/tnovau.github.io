import siteConfig from '../data/siteConfig'

import Hero from '../src/components/hero'
import Wrapper from '../src/components/wrapper'
import About from '../src/components/about'
import Skills from '../src/components/skills'
import Timeline from '../src/components/timeline'
import Layout from '../src/components/layout'
import dynamic from 'next/dynamic'

const Repositories = dynamic(() => import('../src/components/repositories'))

const Home = () => {
  if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
    console.error('WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.');
  }

  const title = siteConfig.siteTitle
  return (
    <Layout keyName="home">
      <Hero
        heroImg={siteConfig.siteCover}
        title={title}
      />

      <Wrapper>
        <div className="max-w-full mb-10">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-2 flex flex-col">
              <About title='About' text={siteConfig.authorDescription}/>
            </div>
            <div className="w-full md:w-1/2 px-2 flex flex-col">
              <Skills title='Skills' skills={siteConfig.skills} />
            </div>
          </div>
          <hr className="mt-6 mb-4 bg-font opacity-20" />
          <Timeline />
          <hr className="mt-6 mb-4 bg-font opacity-20" />
          {siteConfig.githubUsername && <Repositories />}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Home
