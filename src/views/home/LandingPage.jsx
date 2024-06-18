import React from "react";
import { Button, Container } from "react-bootstrap";
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
    src: "/assets/img/main.mp4",
    video: {
        poster: "/assets/img/main.png",
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
                                Who Am I
                            </h2>
                            <h6 ref={ref}>
                                It is challenging to characterize oneself in a mere website, yet ironically,
                                many's perceptions of me will be based on the next few lines
                                that I spent just a couple hours of my life writing.
                            </h6>
                            <p ref={ref}>
                                "He who has a why to live can bear almost any how." - Friedrich Nietzsche
                                <br></br>
                                <br></br>
                                Throughout my life, my search for meaning changes along with my view of the world, in turn, my answer of who I am changes.  
                                <br></br>
                                <br></br>
                                Nowadays, what I choose to devote my energy to is a combination of meeting interesting people, 
                                making an impact, and broadening my perspectives.
                                <br></br>
                                <br></br>
                                Paul Graham, in his essay about doing great work, wrote ,"Don't let "work" mean something other people tell you to do. If you do manage to do great work one day, it will probably be on a project of your own."
                                <br></br>
                                <br></br>
                                This path has led me to develop my own interests and build
                                for a better world. Where families with elderly can have a peace of mind. Where students can have unlimited study material.
                                Where villages can have early warning of wildfires through satellite data, and finally where 
                                students with developmental disabilities can discover their artistic talents.
                                <br></br>
                                <br></br>
                            </p>{/*meeting people (LinkedIn)
                                making an impact (Project Page)
                                broadening my perspective (Reading list)
                                Meaningful work (PG Essay)
                                Tiresias
                                Aceflow
                                Research Paper
                                Iris*/}
                            <div className="button-box" style={{ marginTop: "20px" }}>
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
