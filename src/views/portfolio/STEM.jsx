import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";

//--> Component
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import { Helmet } from "react-helmet";

const STEM = ({ data }) => {
    const nextData = getPortfolioItem(8);

    return (
        <React.Fragment>
            <Helmet>
                <title>{data.title} </title>
                <meta name="description" content={data.description} />
            </Helmet>
            {/*Start Header Half*/}
            <HeaderFull
                heroContent={data}
                parallax={{ yPercent: 30, scale: 1.1 }}
                textButton="View Website"
                href="https://www.linkedin.com/in/david-shan-076a39265/"
                overlay={data.overlay}
            >
                <strong className="color-heading">
                    March 2nd 2007 - Present
                </strong>{" "}
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin text-center">
                <TitleCover>STEM</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            Other Accolades and Projects related to STEM
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Quite frankly, I have been working with STEM for most of
                        my life and here are just some of my achievements
                        related to STEM:
                        <br /> <br />
                        - AIME Qualifier (American Invitational Mathematic
                        Examination)
                        <br />
                        <br />
                        - The Man Family Mathematics Award (Presented to one
                        student in Grade 9 and 10 at Crescent School)
                        <br />
                        <br />
                        - Perfect Score on Beaver Computing Contest (University
                        of Waterloo Contest)
                        <br />
                        <br />
                        - Euclid Honor Roll in Grade 10 (Grade 12 Contest)
                        <br />
                        <br />
                        - Distinction for Junior CCC 2021 & Senior CCC 2023
                        (Didn't take in 2022)
                        <br />
                        <br />
                        - Honor Roll for multiple Math Contests (See Below for
                        details)
                        <br />
                        <br />
                        - Completed AP Calculus BC in Grade 10
                        <br />
                        <br />
                        - Completed AP Computer Science & AP Physics 1 in Grade
                        9
                        <br />
                        <br />
                        - Head of the Data Science Club, Math Club, and Computer
                        Science Club at Crescent School
                        <br />
                        <br />
                        - Math Team At Crescent School (4th in Canada in 2023,
                        6th in Canada in 2022)
                        <br />
                        <br />
                        - ~400 Points On DMOJ
                        <br />
                        <br />- CAYPT Participant
                    </p>
                    <ButtonProject
                        className="mt-20"
                        href="https://www.linkedin.com/in/david-shan-076a39265/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit LinkedIn For A General List of Recent Math Awards
                    </ButtonProject>
                    <ButtonProject
                        className="mt-20"
                        href="https://www.edufirstgroup.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit The EduFirst Group
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Info Box*/}
            <Container className="p-relative section-margin text-center">
                <TitleCover>EduFirst Group</TitleCover>
                <TextTrigger duration={0.5} stagger={0.1}>
                    {(ref) => (
                        <div>
                            <h5 className="m-w750 dsn-auto" ref={ref}>
                                Head Programmer on The EduFirst Group
                            </h5>
                            <p>
                                The EduFirst Group is a non-profit youth-led
                                organization that sets its focus nationally and
                                internationally on bringing education to
                                students from diverse backgrounds. In the
                                EduFirst group, I held tutoring sessions where I
                                would teach students a variety of languages
                                while keeping them engaged. (See above for more)
                            </p>
                        </div>
                    )}
                </TextTrigger>
            </Container>
            <NextProject heroContent={nextData} />
        </React.Fragment>
    );
};

export default STEM;
