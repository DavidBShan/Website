import React from 'react'
import { TypeAnimation } from 'react-type-animation'

// Importing the CSS
import './style.scss'

import MoveTrigger from '../../animation/MoveTrigger'
import FadeUpTrigger from '../../animation/FadeUpTrigger'

// Component
import { Col, Row } from 'react-bootstrap'
import ParallaxImage from '../parallax-image/ParallaxImage'
import { dsnCN } from '../../hooks/helper'

const HeroContent = {
  title: 'Who Am I?',
  description: 'assadf\ndafsadf',
  name: 'David Shan',
  authorJob: 'Toronto, Canada',
  age: '16',
  ageDescription: 'YEARS OLD',
  heroImage: '/assets/img/about.png'
}

function HeroSection ({ className, ...restProps }) {
  return (
    <section className={dsnCN('hero-section', className)} {...restProps}>
      <Row>
        <Col lg={4}>
          <div className="box-text ">
            <MoveTrigger
              from={{ y: 0 }}
              to={{ y: 20 }}
              tablet={false}
              mobile={false}
            >
              {(ref) => (
                <h2 className="title-section mb-30 pre-line" ref={ref}>
                  {HeroContent.title}
                </h2>
              )}
            </MoveTrigger>

            <FadeUpTrigger>
              {(ref) => (
                <>
                  <TypeAnimation
                    sequence={[
                      'Innovator\n',
                      1000,
                      'Programmer\n',
                      1000,
                      'Thinker\n',
                      1000,
                      'Risk-Taker\n',
                      1000
                    ]}
                    wrapper="span"
                    speed={20}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                  <p>{''}</p>
                  <span className="auth-position mt-10" ref={ref}>
                    {HeroContent.authorJob}
                  </span>
                  <div className="experience mt-30">
                    <span className="number" ref={ref}>
                      {HeroContent.age}
                    </span>
                    <p className="color-heading pre-line" ref={ref}>
                      {HeroContent.ageDescription}
                    </p>
                  </div>
                </>
              )}
            </FadeUpTrigger>
          </div>
        </Col>
        <Col className="mt-30" lg={8}>
          <div className="box-img background-section box-padding">
            <ParallaxImage src={HeroContent.heroImage} height="100%" />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection
