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
import { Helmet } from "react-helmet";

const headerContent = {
    title: "About Me",
    description: `Feel free to book a meeting with me to talk about programming, math, mindset, self-improvement, and, quite frankly, anything that piques your interest`,
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

            {/*Start Box Right Info*/}
            <BoxRight
                className="mb-section text-center"
                src="/assets/img/pexels.jpeg"
                parallaxFrom={{ scale: 1.2 }}
                parallax={{ scale: 1 }}
                overlay={4}
            >
                <FadeUpTrigger>
                    <h3>My Values</h3>
                    <p className="mt-30 m-w750 dsn-auto">
                        There are many beliefs that I have but one overweighs
                        all and that is hard-work. I believe that if someone
                        really wants something and genuinely work hard for it,
                        they can achieve it.
                        <br />
                        <br />
                        I also believe in the idea of delayed gratification and
                        wasting as little time as possible in order to achieve
                        that I am destined to do in life.
                        <br />
                        <br />
                        Thirdly, I believe in self-improvement and constantly
                        trying to be better each day and to be a bit better than
                        the day before.
                        <br />
                        <br />
                        Lastly, I believe in being stoic and controlling my
                        emotions and thinking logically and analyzing my
                        emotions and my current situation to decide the best
                        solution.
                    </p>
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

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
                        Movies That Inspire Me
                    </TitleSection>
                    <Movie loop grabCursor />
                </Container>
            </section>
            {/*End People*/}

            {/*Start People*/}
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <TitleSection description="Songs">
                        Songs That I Enjoy
                    </TitleSection>
                    <Song loop grabCursor />
                </Container>
            </section>
            {/*End People*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Quotes">
                    My Favourite Quotes
                </TitleSection>
                <TestimonialTow grabCursor loop />
            </Container>
            {/*End Service Section*/}
            <Footer />
        </React.Fragment>
    );
}

export default About;
