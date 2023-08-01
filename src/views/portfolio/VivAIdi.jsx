import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component

import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import { Helmet } from "react-helmet";

const VivAIdi = ({ data }) => {
    const nextData = getPortfolioItem(4);

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
                textButton="View Website"
                href="https://github.com/Adam-Omarali/vivAIdi"
                overlay={data.overlay}
            >
                <strong className="color-heading">May 2023</strong>{" "}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Music</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            What is VivAIdi?
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        VivAIdi first gets sounds from the user's microphone.
                        Then, the user can choose a form of music they wish to
                        make and the user is able to start and end the
                        recording. Following which the system will then generate
                        new layered melodies based on the input with MagentaAI.
                        Both temperature and length of the melodies are
                        customizable by the user. In the meantime, the webcam
                        takes in users' gestures with CV. The user can gesture
                        the number 1-4 to layer each melody layer on top (1-4:
                        highest to lowest frequency sound parts).
                    </p>
                    <ButtonProject
                        className="mt-20"
                        href="https://github.com/Adam-Omarali/vivAIdi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        View Github
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Parallax Image*/}
            <ParallaxImage
                className="section-margin"
                src="/assets/img/project/portfolio/VivAIdi/Electron.png"
                caption="VivAIdi is built with Electron"
            />
            {/*End Parallax Image*/}

            {/*Start Info Box*/}
            <Container className="p-relative section-margin text-center">
                <TitleCover>Lessons</TitleCover>
                <TextTrigger duration={0.3} stagger={0.1}>
                    {(ref) => (
                        <h5 className="m-w750 dsn-auto" ref={ref}>
                            This project was actually my first hackathon, so I
                            learned a lot about how it is ran and how it works.
                            In addition, this was my first time working with
                            desktop apps rather than webapps so that was really
                            enriching. However, I think what is most important
                            are the obstacles that I overcame, because I was in
                            charge of turning the audio file into a MIDI file,
                            but that turned out to be a roadblock for our team
                            since there aren't a lot of resources for doing that.
                            So, we improvised and took code from a tuner where it
                            was giving the sound pitch and we were able to
                            process that data to make it work.
                        </h5>
                    )}
                </TextTrigger>
            </Container>
            {/*End Info Box*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default VivAIdi;
