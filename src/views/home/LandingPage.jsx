import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { faAngleRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                                Throughout my life, my search for meaning changes along with my view of the world. In turn, my answer of who I am changes.  
                                <br></br>
                                <br></br>
                                Nowadays, what I choose to devote my energy to is a combination of meeting interesting people, 
                                making an impact, and broadening my perspectives.
                                <br></br>
                                <br></br>
                                Paul Graham, in his essay How To Do Great Work, wrote," Don't let 'work' mean something other people tell you to do. If you do manage to do great work one day, it will probably be on a project of your own."
                                <br></br>
                                <br></br>
                                This path has led me to develop my own interests and build
                                for a better world. Where families with elderly can have a peace of mind. Where students can have unlimited study material.
                                Where villages can have early warning of wildfires through satellite data, and finally where 
                                students with developmental disabilities can discover their artistic talents.
                                <br></br>
                                <br></br>
                            </p>
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
            <Container
                as={TitleSection}
                description="My Work"
                className="mt-section"
            >
                Projects
            </Container>
            <div style={{ marginLeft: "12vh", marginTop: "-3vh", padding: "20px", borderRadius: "8px" }}>
                <ul style={{ listStyleType: "circle", fontSize: "18px", lineHeight: "4vh" }}>
                    <li>○ Working on a startup in the mining industry, funded for 25,000 dollars by Telora</li>
                    <li>○ Interning at the biggest telematics company in the world, working on their driver app</li>
                    <li>○ Researching and patenting device to track elderly's vitals funded for 3000 dollars</li>
                    <li>○ Heading First Robotic Competition Team 610's programming department</li>
                    <li>○ Leading Crescent School's Data Science Club, Math Club, and Computer Science Club</li>
                    <br></br>
                    <li>○ Led backend development for Aceflow, an edtech startup advised by Stanford University's Director of Digital Learning Solutions with over 2,000 signups, a revenue generating beta, and funded by Emergent Ventures, Microsoft, and Ingenious+ innovation award</li>
                    <li>○ Developed Rigid Ramp Walker and Ruler Trick Simulation using Mujoco and 4th-Degree Runge Kutta's method, helping my team win Canadian Youth Physics Tournament gold metal</li>
                    <li>○ Consulted alongside Google and Microsoft to solve their biggest problems</li>
                    <li>○ Ideated biomarine carbon capture startup to 10x carbon sequestration in the ocean, winning best overall in that hackathon</li>
                    <li>○ Published big data research paper on using semantic segmentation to detect wildfires, winning 1000 dollars</li>
                    <li>○ Wrote manuscript on using data science to investigate the negative connotations of subsidized housing</li>
                    <li>○ Built toys for students with developmental disability to enhance their artistic talent and socialization skills</li>
                    <li>○ Built 10+ hackathon projects, winning hundreds of dollars worth of awards</li>
                </ul>
            </div>
            <div className="button-box" style={{ marginLeft: "7vh", marginTop: "2vh" }}>
                <ButtonDefault
                    text="Learn More"
                    icon={faAngleRight}
                    href="/slider"
                />
            </div>
            <Container className="section-margin dsn-right-container" style={{ textAlign: "center", border: "2px solid white", padding: "20px", marginBottom: "10vh", marginLeft: "7vh"}}>
                <Button
                    href="/DavidResume.pdf"
                    download
                    variant="dark"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        padding: "15px 30px",
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
                    RESUME (VER. JUN 18 2024)
                </Button>
            </Container>
            {/* End Portfolio Swiper */}
            <Footer />
            
        </React.Fragment>
    );
}

export default Demo3;
