import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <p style = "font-size: 26px" href="https://calendly.com/davidbshan/30min" data-hover-text="Click To Schedule A Meeting" {...restProps}>
            <center>
                Click To Schedule A Meeting With Me!!
            </center>
        </p>
    );
}

export default NextPageContent;