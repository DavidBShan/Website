import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import { Helmet } from "react-helmet";

const NovaraConic = ({ data }) => {
    const nextData = getPortfolioItem(1);

    return (
        <React.Fragment>
            <Helmet>
                <title>{data.title} </title>
                <meta name="description" content={data.description} />
            </Helmet>
            {/*Start Header Half*/}
            <HeaderHalf
                heroContent={data}
                parallax={{ yPercent: 30 }}
                overlay={data.overlay}
            >
                <strong className="color-heading">
                    March 2nd 2007 - Present
                </strong>{" "}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Others</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            Other Achievements/Activities
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Here are some of the other achievements, activities and
                        projects that I did:
                        <br />
                        <br />
                        - Semifinalist in U15B Ontario Table Tennis Championship
                        <br />
                        <br />
                        - Ontario Summer Game Participant
                        <br />
                        <br />
                        - Ranked 9th in Ontario U15B
                        <br />
                        <br />
                        - AP Scholar in Grade 10
                        <br />
                        <br />
                        - Silver Award in Kiwanis Music Festival Competition
                        <br />
                        <br />
                        - CISMF Participant
                        <br />
                        <br />
                        - Symphonic Band and Senior Jazz Band at Crescent School
                        <br />
                        <br />
                        - Silver in Birchmount Park Invitational Cross Country
                        Competition
                        <br />
                        <br />
                        - Silver - Cross Country and Ultimate Frisbee Team at
                        Crescent School
                        <br />
                        <br />
                        - Running 50km Marathon in September 2023
                        <br />
                        <br />
                        - Crescent School Anniversary Tie
                        <br />
                        <br />
                        - Crescent School 40 in 9 Award
                        <br />
                        <br />
                        - Crescent School Honor Roll (Grade 9 & 10)
                        <br />
                        <br />
                        - Ultimate Frisbee MIP Award
                        <br />
                        <br />- Junior Cross Country Team Effort Award
                    </p>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical
                src="/assets/img/project/portfolio/Misc/Books.jpg"
                className="section-margin"
            >
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <TitleCover>Library</TitleCover>
                            <h2
                                className="title-section border-line-left"
                                ref={ref}
                            >
                                Guang Hua Chinese Library
                            </h2>
                            <h6 ref={ref}>
                                Back when I was living in the US back in grade
                                6, I was going to a school over the weekends and
                                something I noticed is that many of the kids
                                including me didn't have a lot of books to read,
                                so I started a chinese language library which is
                                still going on in Blue Bell, Pennsylvania. It
                                has hundreds of books and lots of visitors every
                                weekend when the school runs.
                            </h6>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            <ParallaxImage
                className="mb-section"
                src="/assets/img/project/portfolio/Misc/Clarinet.jpg"
                triggerHook="top"
                parallax={{ scale: 1 }}
                parallaxFrom={{ scale: 1.3 }}
            />

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default NovaraConic;
