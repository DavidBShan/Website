import React, {useEffect} from "react";
import styled from 'styled-components';
import { Button, Container, Row, Col } from "react-bootstrap";
import { faAngleRight, faDownload, faFile } from "@fortawesome/free-solid-svg-icons";
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
import CustomCursor from "../../layout/CustomCursor";

const heroContent = {
    title: "David Shan",
    src: "/assets/img/main.mp4",
    video: {
        poster: "/assets/img/main.png",
        loop: true,
    },
    subTitle: "Hi, I am",
};
// At the top of your file, after imports
const mobileBreakpoint = '768px'; // Common breakpoint for mobile devices

// Inside your styled components, add media queries as needed
const StyledUl = styled.ul`
    list-style-type: circle;
    font-size: 18px;
    line-height: 4vh;
    margin-left: 16vw;
    margin-top: -3vh;
    margin-right: 5vw;
    padding: 20px;
    border-radius: 8px;
    color: #F6F6F6;

    li {
        position: relative;
        overflow: hidden;
        color: #YourNewColor; // Remember to replace #YourNewColor with your actual color code
    }

    li span::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #000;
        transition: width 0.5s ease-in-out;
    }

    li:hover span::before {
        width: 100%;
    }

    // Media query for mobile devices
    @media (max-width: ${mobileBreakpoint}) {
        font-size: 16px; // Slightly smaller font size for mobile
        margin-left: 5vw; // Adjust margins for smaller screens
        margin-right: 5vw;
        line-height: 3vh;
    }
`;

// Apply similar responsive adjustments to other styled components as needed

// For the Container component and others with explicit sizes or margins, consider using percentages or viewport units that adapt to screen size, and adjust with media queries if necessary.

// Example adjustment for a Container component
const ResponsiveContainer = styled(Container)`
    // Adjust padding and margins for mobile
    @media (max-width: ${mobileBreakpoint}) {
        padding: 1vw 1vh;
        margin-top: 2vh;
        margin-bottom: 5vh;
        width: 90vw; // Use a higher percentage of the viewport width
    }
`;

// Adjust the ButtonDefault and other interactive elements to be larger for easier tapping on touch devices
const ResponsiveButton = styled(ButtonDefault)`
    @media (max-width: ${mobileBreakpoint}) {
        padding: 20px 40px; // Larger padding for easier interaction
        font-size: 18px; // Larger font size for readability
    }
`;

// Container for the Resume button
const ResumeButtonContainer = styled(Container)`
    text-align: center; 
    border: 2px solid white; 
    padding: 1vw 1vh; // Reduced horizontal padding to make it less wide
    margin-top: 5vh; 
    margin-bottom: 10vh; 
    margin-left: auto; // Center align horizontally
    margin-right: auto; // Center align horizontally
    width: 60vw; // Explicitly setting the width
    height: 10vh; // Explicitly setting the height

    @media (max-width: ${mobileBreakpoint}) {
        width: 90vw; // Adjust width for mobile
        height: auto; // Let height adjust automatically for mobile
        padding: 3vh 1vh; // Adjust padding for mobile
        margin-left: 5vw; // Adjust margins for mobile
        margin-right: 5vw;
    }
`;

const ResumeButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 15px 30px;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: 18px; // Adjust font size for mobile
        padding: 15px 20px; // Adjust padding for mobile
    }
`;

function Demo3 (props) {
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
                                Nowadays, what I choose to devote my energy to is a combination of <a href="https://www.linkedin.com/in/davidbshan" target="_blank" rel="noopener noreferrer"> meeting interesting people</a>, <a href="/slider" target="_blank" rel="noopener noreferrer"> making an impact</a>, and <a href="https://quilt-utahraptor-baf.notion.site/341c21d04f074eac99b4c569ed172caa?v=69467fce06c745a594225077ce68ab14&pvs=4" target="_blank" rel="noopener noreferrer"> broadening my perspectives</a>.
                                <br></br>
                                <br></br>
                                Paul Graham, in his essay <a href="https://www.paulgraham.com/greatwork.html" target="_blank" rel="noopener noreferrer"> How To Do Great Work</a>
                                , wrote," Don't let 'work' mean something other people tell you to do. If you do manage to do great work one day, it will probably be on a project of your own or something you'll be driving."
                                <br></br>
                                <br></br>
                                This path has led me to develop my own interests and build
                                for a better world. Where fleet drivers can <a href="https://www.geotab.com/" target="_blank" rel="noopener noreferrer">drive safely and efficiently</a>. Where students can have <a href="https://www.aceflow.org/" target="_blank" rel="noopener noreferrer">unlimited study material</a>.
                                Where villages can have <a href="https://drive.google.com/file/d/17VzJ2ki5vfzq2MjZK_dueFeCMcsKuCvk/view" target="_blank" rel="noopener noreferrer">early warning of wildfires through satellite data</a>, and finally where 
                                <a href="https://docs.google.com/presentation/d/111qX_K8VkofREO-Kb88xkYnfsZINXUAuKK2Xv0zB0vs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">marine capture can be improved with algae</a>.
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
                description="My work"
                className="mt-section"
            >
                Portfolio
            </Container>
            <div>
                <StyledUl>
                    <li>○ Founding Engineer at Linkd, building <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#249590',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}> people search </span> backed by Y Combinator (X25) and Cory Levy</li>
                    <li>○ Heading First Robotic Competition Team 610's programming department</li>
                    <li>○ Leading Crescent School's Data Science Club, Math Club, and Computer Science Club</li>
                    <li>○ Guiding 10+ members to build equipment signout and monitoring tool for Crescent School's Media Department to positively impact the school community</li>
                    <li>○ Working on a real estate appraisal algorithm and platform for <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#249590',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>real estate agents (revenue generating)</span></li>
                    <br></br>
                    <li>○ Cofounded a <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#246295',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>startup in the video editing industry</span>, funded for 25,000 dollars by Telora</li>
                    <li>○ Interned at Geotab, the biggest commercial telematics platform in the world, to work on their driver app</li>
                    <li>○ Core Engineer building MANTIS, <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#249590',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>an AI-powered data-science cognitive cartography workbench</span>, with Dr. Manolis Kellis at MIT's Computer Science and Artificial Intelligence Lab. Worked on the agentic workflow sector and a part of the leadership team.</li>
                    <li>○ Researched, designed, and programmed <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#AD9ED5',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>printed circuit board to track elderly's vitals</span> funded for 3,000 dollars</li>
                    <li>○ Led backend development for Aceflow, an edtech startup advised by Stanford University's Director of Digital Learning Solutions with over 2,000 signups, a revenue generating beta, and funded by Emergent Ventures, Microsoft, and Ingenious+ innovation award</li>
                    <li>○ Developed <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#8493CA',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>Rigid Ramp Walker and Ruler Trick Simulation</span> using Mujoco and 4th-Degree Runge Kutta's method, helping Crescent School win Canadian Youth Physics Tournament gold medal</li>
                    <li>○ Ideated biomarine carbon capture startup to 10x carbon sequestration in the ocean, winning best overall in that hackathon</li>
                    <li>○ Published big data research paper on using <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#C5B9DF',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>semantic segmentation to detect wildfires</span>, winning 1,000 dollars</li>
                    <li>○ Wrote manuscript on using data science to investigate the negative connotations of subsidized housing and another on weighting country-based factors that affect youth mortality rates</li>
                    <li>○ Built toys for students with developmental disability to enhance their artistic talent and socialization skills</li>
                    <li>○ Consulted <span style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: '#98B2D3',
                        textDecorationStyle: 'solid',
                        textDecorationThickness: '3px',
                        fontStyle: 'italic'
                    }}>alongside Google and Microsoft to solve their biggest problems</span> in data centers and customer support</li>
                    <li>○ Built 10+ hackathon projects, winning hundreds of dollars worth of awards</li>
                <br></br><br></br>
                    <li>○ Two time AIME Qualifier and Honor Roll on 15+ Math and Programming Competitions</li>
                    <li>○ Played for the <span style={{
                                textDecorationLine: 'underline',
                                textDecorationColor: '#4A5F7A',
                                textDecorationStyle: 'solid',
                                textDecorationThickness: '3px',
                                fontStyle: 'italic'
            }}>Ontario Provincial Table Tennis Team</span> and was ranked 6th in Ontario.</li>
                    <li>○ Compete in the USACO Gold Division</li>
                    <li>○ Instruct Skiing with CSIA Level I Skiing License</li>
                    <li>○ Completed the Haliburton 50km Race </li>
                </StyledUl>
            </div>
            <div className="button-box" style={{ marginLeft: "14vw", marginTop: "2vh" }}>
                <ButtonDefault
                    text="Learn More"
                    icon={faAngleRight}
                    href="/slider"
                />
            </div>
            <ResumeButtonContainer>
                <ResumeButton
                    href="/DavidResume.pdf"
                    target="_blank"
                    variant="dark"
                >
                    <FontAwesomeIcon icon={faFile} style={{ marginRight: "8px" }} />
                    RESUME (VER. JAN 02 2025)
                </ResumeButton>
            </ResumeButtonContainer>
            <Footer />
            
        </React.Fragment>
    );
}

export default Demo3;
