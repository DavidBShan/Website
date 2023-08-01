import React from "react";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import People from "../components/team/People";
import Movie from "../components/team/Movies";
import BrandClient from "../components/brand-client/BrandClient";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import { Helmet } from "react-helmet";

const headerContent = {
    title: "Skills",
    description: `Here are some of the skills that I developed throughout my life.`,
};

function Skills() {
    return (
        <React.Fragment>
            <Helmet>
                <title>David Shan - Skills</title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormal
                className="background-section"
                description={headerContent.description}
            >
                {headerContent.title}
            </HeaderNormal>

            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <BoxRight
                        className="mb-section text-center"
                        src="/assets/img/skills/coding.jpeg"
                        parallaxFrom={{ scale: 1.2 }}
                        parallax={{ scale: 1 }}
                        overlay={4}
                    >
                        <FadeUpTrigger>
                            <h3>Coding Languages I Know</h3>
                            <p className="mt-30 m-w750 dsn-auto">
                                - C++
                                <br />
                                <br />
                                - Python
                                <br />
                                <br />
                                - C#
                                <br />
                                <br />
                                - Typescript
                                <br />
                                <br />
                                - Javascript
                                <br />
                                <br />
                                - HTML
                                <br />
                                <br />
                                - CSS
                                <br />
                                <br />
                                - LESS
                                <br />
                                <br />
                                - Java
                                <br />
                                <br />
                            </p>
                        </FadeUpTrigger>
                    </BoxRight>
                </Container>
            </section>

            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <BoxRight
                        className="mb-section text-center"
                        src="/assets/img/skills/frameworks.png"
                        parallaxFrom={{ scale: 1.2 }}
                        parallax={{ scale: 1 }}
                        overlay={4}
                    >
                        <FadeUpTrigger>
                            <h3>Library & Frameworks I Have Worked With</h3>
                            <p className="mt-30 m-w750 dsn-auto">
                                - React & React Native
                                <br />
                                <br />
                                - Backbone
                                <br />
                                <br />
                                - Numpy, Scipy, Pandas, Plotly & Seaborn
                                <br />
                                <br />
                                - Jest
                                <br />
                                <br />
                                - QUnit & Sinon
                                <br />
                                <br />
                                - Tensorflow
                                <br />
                                <br />
                                - MySQL & Postgres
                                <br />
                                <br />
                                - TiDB
                                <br />
                                <br />
                                - WPILib
                                <br />
                                <br />
                            </p>
                        </FadeUpTrigger>
                    </BoxRight>
                </Container>
            </section>

            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <BoxRight
                        className="mb-section text-center"
                        src="/assets/img/skills/stem.jpg"
                        parallaxFrom={{ scale: 1.2 }}
                        parallax={{ scale: 1 }}
                        overlay={4}
                    >
                        <FadeUpTrigger>
                            <h3>Other STEM Related</h3>
                            <p className="mt-30 m-w750 dsn-auto">
                                - CAD (Computer Aided Design)
                                <br />
                                <br />
                                - Mathematics
                                <br />
                                <br />
                                - PC Building
                                <br />
                                <br />
                                - Blockchains & Smart Contracts
                                <br />
                                <br />
                                - AI/ML (Artificial Intelligence/ Machine
                                Learning)
                                <br />
                                <br />
                                - Git
                                <br />
                                <br />
                                - Robotics
                                <br />
                                <br />
                                - Internet of Things
                                <br />
                                <br />
                            </p>
                        </FadeUpTrigger>
                    </BoxRight>
                </Container>
            </section>

            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <BoxRight
                        className="mb-section text-center"
                        src="/assets/img/skills/musicSport.png"
                        parallaxFrom={{ scale: 1.2 }}
                        parallax={{ scale: 1 }}
                        overlay={4}
                    >
                        <FadeUpTrigger>
                            <h3>Athletic & Arts</h3>
                            <p className="mt-30 m-w750 dsn-auto">
                                - Clarinet
                                <br />
                                <br />
                                - Table Tennis
                                <br />
                                <br />
                                - Running
                                <br />
                                <br />
                                - Ultimate Frisbee
                                <br />
                                <br />
                                - Skiing
                                <br />
                                <br />
                                - Waterskiing
                                <br />
                                <br />
                                - Boating
                                <br />
                                <br />
                            </p>
                        </FadeUpTrigger>
                    </BoxRight>
                </Container>
            </section>
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <BoxRight
                        className="mb-section text-center"
                        src="/assets/img/skills/softskill.jpeg"
                        parallaxFrom={{ scale: 1.2 }}
                        parallax={{ scale: 1 }}
                        overlay={4}
                    >
                        <FadeUpTrigger>
                            <h3>Soft Skills</h3>
                            <p className="mt-30 m-w750 dsn-auto">
                                - Discipline
                                <br />
                                <br />
                                - Hard-work
                                <br />
                                <br />
                                - Figuring Stuff Out
                                <br />
                                <br />
                                - Perseverance
                                <br />
                                <br />
                                - Mindset
                                <br />
                                <br />
                                - Time Management
                                <br />
                                <br />
                                - Problem Solving
                                <br />
                                <br />
                            </p>
                        </FadeUpTrigger>
                    </BoxRight>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Skills;
