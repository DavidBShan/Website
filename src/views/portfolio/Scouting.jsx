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
    const nextData = getPortfolioItem(7);

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
                textButton="View Webapp"
                href="http://scouting.team610.com:3000/data"
                overlay={data.overlay}
            >
                <strong className="color-heading">
                    January 2023 - April 2023
                </strong>{" "}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Scouting</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            Scouting App
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Scouting in robotics is similar to scouting in sports.
                        We use data to see which team is good and which team is
                        bad. The scouting app's frontend is built off of Next.js
                        and the backend is built with Neo4j. This app allows the
                        team's scouts to record the data which would get
                        transported into a database to be processed.
                    </p>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical
                src="/assets/img/project/portfolio/Scouting/Map.png"
                className="section-margin"
            >
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <TitleCover>Frontend</TitleCover>
                            <h2
                                className="title-section border-line-left"
                                ref={ref}
                            >
                                What Did I Do?
                            </h2>
                            <h6 ref={ref}>
                                I worked on the frontend of the scouting app, 
                                where I first learned React, which proved to be a
                                really useful framework (also what I built this
                                website off of).
                            </h6>
                            <p ref={ref}>
                                I implemented a defensive timer where it can
                                time and log values. This is useful for
                                recording how long each time spent playing
                                defense. In addition, I also created an interactive app where the scouts can send a position to the database through one click.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault
                                    text="launch"
                                    icon={faAngleRight}
                                    href="http://scouting.team610.com:3000/data"
                                />
                            </div>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default NovaraConic;
