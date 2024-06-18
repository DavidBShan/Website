import React from "react";

import { Container } from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import { Helmet } from "react-helmet";

const headerContent = {
    title: "Contact",
    description: `Let's Connect!`,
};

function Contact(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Me</title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Contact Form && Info Box*/}
            <Container>
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30" />
                    <ContactForm />
                </DsnGrid>
            </Container>

            <NextPage to="/slider" text="">
                Portfolio
            </NextPage>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
