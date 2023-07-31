import React from "react";
import { getPortfolioItem } from "../../api/portfolio/PortfolioData";

import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import NextProject from "../../components/next/NextProject";
import BoxRight from "../../components/box-right/BoxRight";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import { Helmet } from "react-helmet";

const SubsidizedHousing = ({ data }) => {
    const nextData = getPortfolioItem(5);

    return (
        <React.Fragment>
            <Helmet>
                <title>{data.title} </title>
                <meta name="description" content={data.description} />
            </Helmet>
            {/*Start Header Half*/}
            <HeaderHalf
                heroContent={data}
                textButton="View Video"
                href="https://www.youtube.com/watch?v=Ha8oWbo01jk&ab_channel=DavidShan"
                overlay={data.overlay}
            >
                <strong className="color-heading">February 2023</strong>{" "}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Abstract</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            What is this research about?
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Subsidized housing is implemented to help ensure that
                        all community members have the access to affordable
                        housing regardless of their income level. It’s often
                        funded by government programs and offers reduced rent to
                        lower-income families who are unable to afford
                        market-rate housing. A common belief for subsidized
                        housing is that it causes negative consequences that can
                        impact the surrounding community. A positive correlation
                        between the presence of subsidized housing and increased
                        crime rates is still a myth, which is yet to be proven.
                        Subsidized housing can lead to the area being classified
                        and labeled as a low-income housing area but not be
                        correlated with crime rate. Datasets from Statistics
                        Canada, Our World in Data, and various publicly
                        published data on subsidized housing from Canadian
                        provinces were gathered. A weak positive correlation
                        between areas with subsidized housing and areas proxy to
                        its offsets with high crime rates and lower property
                        values was found in the process. The widespread belief
                        that subsidized housing development in a neighborhood
                        leads to neighborhood decline is false. However,
                        subsidized housing would be expected to affect
                        neighborhoods only under certain circumstances, and the
                        conflicting findings suggest that is the case. These
                        results provide insight into the viability of subsidized
                        housing in order to achieve SDG 11.
                    </p>
                    <ButtonProject
                        className="mt-20"
                        href="https://drive.google.com/file/d/1NEVfcPX3ehcYiI_lq6_S0HTo5P4_uuGP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Read Manuscript{" "}
                    </ButtonProject>
                    <ButtonProject
                        className="mt-20"
                        href="https://www.youtube.com/watch?v=Ha8oWbo01jk&ab_channel=DavidShan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Watch Video{" "}
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Code</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => (
                        <h2 className="title-section" ref={ref}>
                            How was the code written?
                        </h2>
                    )}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        In my group, I was the one in charge of finding the
                        dataset, cleaning the data, and writing the code. So in
                        order to find new reliable data, I went on a couple of
                        places, namely, Canada Crime Index and Statistics
                        Canada. Then to decide how to code and what kind of data
                        to use, we first decided to look at the percentage of
                        subsidized housing per city and compare that with the
                        crime index for that particular city, and the scope of
                        this research is limited to the largest cities in
                        Canada. Following that, to clean the code, I wrote a
                        code to remove all the commas as well as removing all
                        columns that even have one missing data so that data
                        won't be skewed. What we looked at was the correlation
                        between the two values as well as a linear regression
                        line and finally a standard deviation of residuals.
                    </p>
                    <ButtonProject
                        className="mt-20"
                        href="https://colab.research.google.com/drive/1zq-shWSJVobFFrPEm9yR9VxPcfsfRUwS?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        View Code{" "}
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Box Right Info*/}
            <BoxRight
                className="section-margin"
                src="/assets/img/project/portfolio/SubsidizedHousing/StemFollowship.jpg"
            >
                <FadeUpTrigger>
                    {(ref) => (
                        <React.Fragment>
                            <h2 ref={ref}>Finalists & Big Data Day</h2>

                            <p className="mt-30" ref={ref}>
                                Through this project, we were able to be
                                finalists in this project and we were invited to
                                go to Big Data Day where I was able to meet Her
                                Honour, Elizabeth Dowdeswell (Lieutenant
                                Governor of Ontario) as well as present my teams
                                findings along with my team and connect with
                                people working in the data science field and
                                listen to their experiences which was really
                                enriching.
                            </p>
                        </React.Fragment>
                    )}
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default SubsidizedHousing;
