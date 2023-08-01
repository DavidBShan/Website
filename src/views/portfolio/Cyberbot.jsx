import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import TextTrigger from "../../animation/TextTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import { Helmet } from "react-helmet";

const TimeTagWatch = ({ data }) => {
    const nextData = getPortfolioItem(3);

    return (
        <React.Fragment>
            <Helmet>
                <title>{data.title} </title>
                <meta name="description" content={data.description} />
            </Helmet>

            {/*Start Header Half*/}
            <HeaderHalf
                heroContent={data}
                parallax={{ yPercent: 30, scale: 1.1 }}
                href="https://devpost.com/software/n-a-mzaegs?ref_content=user-portfolio&ref_feature=in_progress"
                textButton="View Devpost"
                overlay={data.overlay}
            >
                <strong className="color-heading">July 2023</strong>{" "}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Cybersecurity</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            What Is Cyberbot?
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => (
                        <>
                            <p className="mt-20" ref={ref}>
                                Cyberbot's inspiration comes from the fact that
                                although Discord is a widely used social
                                platform, there aren't much tools used to help
                                with voice calls. Cyberbot aims to solve two
                                problems in one bot. The first problem is the
                                fact that in today's society, there has been
                                cyberbullying all around the world and Cyberbot
                                is able to monitor the voice call, capture the
                                sound, turn it into text, and do analysis on
                                the text based on a custom "prohibited word
                                list" that can be made by the user. In addition,
                                Cyberbot also has the capability to connect
                                people all around the world with its translation
                                feature as well, by using the Google Translate
                                package.
                            </p>
                        </>
                    )}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}
            {/*Start Box Info With Image*/}
            <BoxImageVertical
                src="/assets/img/project/portfolio/Cyberbot/Discord.png"
                className="section-margin"
                overlay={4}
            >
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <TitleCover>Translate</TitleCover>
                            <h2
                                className="title-section border-line-left"
                                ref={ref}
                            >
                                Process and What I Learned
                            </h2>
                            <h6 ref={ref}>
                                The bot uses multiple packages including the
                                Google Cloud/Speech, as well as the Google
                                Translate package. The sound is first recorded
                                using the DiscordJS Voice package which gets
                                turned into a mp4 file which would get sent into a
                                bucket for the Google Cloud Speech to turn into
                                a transcription. Using that transcription, the
                                words could get processed one of two ways: it
                                could either get analyzed for "prohibited words",
                                and if it exists, then the data would get sent
                                to a TiDB Server which is ran off of MySQL.
                                Another option is the Google Translate package
                                would be used to turn the sound into another
                                language which would later get read back using a
                                combination of the DiscordJS package and the
                                Google Translate package.
                            </h6>
                            <p ref={ref}>
                                I think the most important lesson I learned from
                                this project is working with databases and being
                                able to connect the databases using nodejs,
                                express, and the MySQL package from npm. In
                                addition, I also had my first experience with
                                server or backend programming which was a really
                                useful experience for me.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault
                                    text="View Github"
                                    icon={faAngleRight}
                                    href="https://github.com/ZECHEESELORD/TiDB"
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

export default TimeTagWatch;
