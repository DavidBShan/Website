import React from "react";
import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import HeaderFull from "../../components/header/HeaderFull";
import HeroSection from "../../components/hero-section/HeroSection";
import TitleSection from "../../components/heading/TitleSection";
import ServiceTow from "../../components/services/ServiceTow";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import DsnGrid from "../../components/DsnGrid";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogSwiper from "../../components/blog/BlogSwiper";
import BrandClient from "../../components/brand-client/BrandClient";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";

const heroContent = {
    title: "David Shan",
    src: "//theme.dsngrid.com/video/videos.mp4",
    video: {
        poster: "/assets/img/video-bg.jpg",
        loop: true,
    },
    subTitle: "Hi, I am",
};

function Demo3(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>David Shan </title>
            </Helmet>

            <HeaderFull heroContent={heroContent} overlay={6} />

            {/* Start Hero Section */}
            <Container className="section-margin dsn-right-container">
                <HeroSection />
            </Container>
            {/* End Hero Section */}
            <BoxImageVertical
                src="/assets/img/aboutMe.jpg"
                className="section-margin"
            >
                <TitleCover>David</TitleCover>
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <h2
                                className="title-section border-line-left"
                                ref={ref}
                            >
                                About Me
                            </h2>
                            <h6 ref={ref}>
                                This question is something I have been asking
                                myself constantly, I believe that in order to
                                figure out who I am, there are several aspects:
                                <br />
                                - Who I am currently am?
                                <br />
                                - Who I aspire to be?
                                <br />- Who I will be?
                            </h6>
                            <p ref={ref}>
                                To answer the first of the 3 questions, I am
                                currently an aspiring software developer as well
                                as someone who wishes to push their limits both
                                physically and mentally. I am trying to improve
                                myself in many aspect like building new habits,
                                reading, putting myself out there, and working
                                hard.
                                <br />
                                <br />
                                To answer the second of the 3 questions, I wish
                                to be someone that people would look up to for
                                discipline and perseverance. I also want to be
                                someone that is well-connected, hardworking, and
                                fun to be around. On the professional side, I
                                wish to make a difference in a world and the
                                people around me in whatever decide I do.
                                <br />
                                <br />
                                To answer the last of the 3 questions, although
                                I sounds similar to the second question, I
                                believe that there is a fundamental difference
                                between wanting something and being something
                                because just simply wanting something won't get
                                anyone anywhere. I believe that it is crucial to
                                work hard to achieve what I genuinely want. I
                                believe that, in the future, I would be making a
                                huge difference in the world and becoming who I
                                aspire to be
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault
                                    text="Learn More"
                                    icon={faAngleRight}
                                    href="/about"
                                />
                            </div>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/* End  Box Info With Image */}

            {/* Start Service Section */}
            <Container className="section-margin">
                <TitleSection description="My Skillset">Skills</TitleSection>
                <ServiceTow col={2} colMobile={1} />
                <div className="button-box" style={{ marginTop: "20px" }}>
                    <ButtonDefault
                        text="Learn More"
                        icon={faAngleRight}
                        href="/skills"
                    />
                </div>
            </Container>
            {/* End Service Section */}

            {/* Start Portfolio Swiper */}
            <Container
                as={TitleSection}
                description="My Work"
                className="mt-section"
            >
                Projects & Achievements
            </Container>
            <PortfolioSwiper className="mb-section" grabCursor autoplay />
            {/* End Portfolio Swiper */}
            <Footer />
        </React.Fragment>
    );
}

export default Demo3;
