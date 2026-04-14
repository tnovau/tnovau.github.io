'use client'

import siteConfig from '../../data/siteConfig'
import Hero from '../../src/components/hero'
import Wrapper from '../../src/components/wrapper'
import Layout from '../../src/components/layout'

const Portifolio = () => {
  const title = "Portifolio"
  const { portifolio } = siteConfig
  return (
    <Layout keyName="portifolio">
      <Hero
        heroImg={'/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg'}
        title={title}
      />

      <Wrapper>
        <div className="max-w-full mb-10">
          <div className="flex flex-wrap">
            {portifolio.map(job => (
              <div
                key={job.description}
                className="flex-1 flex flex-col items-center px-2"
              >
                {job.url ? (
                  <a
                    className="no-underline text-inherit group"
                    href={job.url}
                    target="_blank"
                  >
                    <img
                      className="max-h-[220px] max-w-[220px] object-cover object-center rounded-[10px] shadow-[24px_47px_79px_-21px_rgba(0,0,0,0.51)] transition-transform duration-500 group-hover:-translate-y-[5px]"
                      src={job.image}
                    />
                    <p>{job.description}</p>
                  </a>
                ) : (
                  <div>
                    <img
                      className="max-h-[220px] max-w-[220px] object-cover object-center rounded-[10px] shadow-[24px_47px_79px_-21px_rgba(0,0,0,0.51)]"
                      src={job.image}
                    />
                    <p>{job.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Portifolio
