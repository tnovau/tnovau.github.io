'use client'

import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import Hero from '../../src/components/hero'
import Wrapper from '../../src/components/wrapper'
import Layout from '../../src/components/layout'

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Portifolio = ({ className }) => {
  const title = "Portifolio"
  const { portifolio } = siteConfig
  return (
    <Layout>
      <Hero
        heroImg={'/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpeg'}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {portifolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={job.image} />
                  <p>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portifolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
