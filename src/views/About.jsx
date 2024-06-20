import React from "react";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import People from "../components/team/People";
import Movie from "../components/team/Movies";
import Song from "../components/team/Songs";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import { Helmet } from "react-helmet";

const headerContent = {
    title: "About Me",
    description: `Feel free to book a meeting with me to talk about programming, math, mindset, self-improvement, and, quite frankly, anything that piques your interest.`,
};

function About() {
    return (
        <React.Fragment>
            <Helmet>
                <title>David Shan - About Me </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormal
                className="background-section"
                description={headerContent.description}
            >
                {headerContent.title}
            </HeaderNormal>

            {/*Start People*/}
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <TitleSection description="People">
                        People I Look Up To
                    </TitleSection>
                    <People loop grabCursor />
                </Container>
            </section>
            {/*End People*/}

            {/*Start People*/}
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <TitleSection description="Movies">
                        Movies That I Enjoy
                    </TitleSection>
                    <Movie loop grabCursor />
                </Container>
            </section>
            {/*End People*/}
            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Sports">
                    Sports I Like
                </TitleSection>
                <TestimonialOne grabCursor loop />
            </Container>
            {/*End Service Section*/}
            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Books">
                    My Favourite Books
                </TitleSection>
                <TestimonialTow grabCursor loop />
            </Container>
            {/*End Service Section*/}
            <Footer />
        </React.Fragment>
    );
}

export default About;
