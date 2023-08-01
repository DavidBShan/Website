import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component

import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import { Helmet } from "react-helmet";

const Viper = ({ data }) => {
    const nextData = getPortfolioItem(6);

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
                href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                overlay={data.overlay}
            >
                <strong className="color-heading">
                    January 2023 - April 2023
                </strong>{" "}
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin text-center">
                <TitleCover>Robot</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            How Our Robot Was Built & Programmed
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Frankly, I have no idea how the robot was built except I
                        know there is a tron wheel and said tron wheel turns and
                        it also used motors, a RobotRIO, and limit switches. I
                        am definitely not the guy to ask for help on the
                        mechanical side. <br /> <br />
                        You know what is better than building a robot?
                        <br /> <br />
                        Programming a robot. <br />
                        <br />
                        (Might need to hide from other people on the team after
                        this...)
                        <br /> <br />
                        Anyways, our robot used a lot of technologies to be
                        programmed. This included the incorporation of gyro
                        sensors, limelight, CANivore, and much more. However,
                        that being said, I mainly worked on getting the CANivore
                        to work, working on the autobalance on the charging
                        station using the gyro sensor and PID Control, as well
                        as writing code to reset the odometry based on the
                        location of the robot. However, the robot is way more
                        complicated than that and needed the collective effort
                        of all our team members.
                    </p>
                    <ButtonProject
                        className={"mt-20"}
                        href="http://team610.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Team 610's Website (Super Outdated, New Website In
                        The Works)
                    </ButtonProject>
                    <ButtonProject
                        className={"mt-20"}
                        href="https://www.youtube.com/watch?v=D_yFA-IVL-w&ab_channel=FRCTeam610"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reveal Video
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage
                className="section-margin"
                src="/assets/img/project/portfolio/Viper/teamPhoto.jpg"
                caption="Team 610 For 2023"
                parallax={{ scale: 1 }}
                parallaxFrom={{ scale: 1.3 }}
            />

            {/*Start Box Info With Image*/}
            <BoxImageVertical
                src="/assets/img/project/portfolio/Viper/brokenRobot.jpg"
                className="section-margin"
            >
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <TitleCover>Experience</TitleCover>
                            <h2
                                className="title-section border-line-left"
                                ref={ref}
                            >
                                Overall 610 Experience
                            </h2>
                            <h6 ref={ref}>
                                To put it simply, Team 610 is by far the best
                                team at Crescent School and I strongly recommend
                                anyone that goes to Crescent School to tryout.
                                If you don't?? Find another FRC team
                                that competes, because it was such a fun time
                                working on and programming the robot.
                            </h6>
                            <p ref={ref}>
                                I think that our team did very well at
                                competitions this year, I believe that we can
                                do even better next year, and I am really looking
                                forward to working on the robot next year. I
                                have already written the code for swerve drive
                                next year.
                                All in all, I learned so much at the
                                competitions from the more experienced people on
                                the team, got close to many of the people on
                                the team as well and got to know more people
                                which was awesome.
                            </p>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            <NextProject heroContent={nextData} />
        </React.Fragment>
    );
};

export default Viper;
