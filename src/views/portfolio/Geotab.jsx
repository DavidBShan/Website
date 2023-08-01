import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery, {
    BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import MoveBox from "../../components/move-box/MoveBox";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import { Helmet } from "react-helmet";

const TimeTagWatch = ({ data }) => {
    const nextData = getPortfolioItem(2);

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
                href="www.geotab.com"
                overlay={data.overlay}
            >
                <strong className="color-heading">
                    June 2023 - August 2023
                </strong>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Geotab</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            Internship
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger stagger={0.5}>
                    <p className="mt-20">
                        During this internship, I had the opportunity to work in
                        a team of industry professionals. As an intern, I first
                        learned about how the company works through the
                        onboarding session, as well as the department-wide
                        lessons for new hires. Through this process, I was able
                        to learn many concepts that I have never heard of before
                        like Gateway Servers, Unit and Integration Test, CI/CD
                        (Continuous Integration and Continuous Deployment), as
                        well as pipelines. Throughout my time at Geotab, I first
                        investigated the company's coding structure by migrating
                        unit tests from QUnit and Sinon to Jest which allows for
                        the tests to run directly from the terminal, during that
                        time I also participated in code review from my
                        teammates. Then, following that I was working on an
                        React app to convert files and use webscraping to
                        validate the data that Geotab is getting to the official
                        government data.
                    </p>
                    <ButtonProject
                        className={"mt-20"}
                        href="https://www.geotab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More About Geotab
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical
                src="/assets/img/project/portfolio/Geotab/office.jpg"
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
                                What I Learned
                            </h2>
                            <h6 ref={ref}>
                                Overall, the experience was amazing and Geotab
                                is genuinely a company that cares about its
                                employees which can be seen by the awesome
                                coffee machines everywhere and the delicious
                                lunches
                            </h6>
                            <p ref={ref}>
                                However, more importantly, I have learned so
                                much from the 2 month that I have been working
                                at Geotab because I was able to have a feel
                                about how a large company operates as well as
                                the feeling of working with such a big code
                                project which isn't something that I can get
                                when working with my personal projects. Lastly,
                                I have genuinely learned so many new concepts
                                that I couldn't have learned any other way and
                                was able to work with those concepts and develop
                                a far greater understanding of programming than
                                before.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault
                                    text="launch"
                                    icon={faAngleRight}
                                    href="#0"
                                />
                            </div>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}
            <TitleCover>Algorithm</TitleCover>
            <h2 style={{ textAlign: "center", paddingBottom: "50px" }}>
                Cool Curve Logging Algorithm From Geotab
            </h2>
            <iframe
                width="1500"
                height="800"
                src="https://www.youtube.com/embed/VJfu64gdGGo"
            ></iframe>

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default TimeTagWatch;
