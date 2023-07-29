import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Want To Connect & Learn About Me?</h3>

            <ul className="mt-30">
                <li>
                    <span className="mr-10">Blog</span>
                    <a href="https://medium.com/@davidbshan" target="_blank" rel="noreferrer">Medium Dashboard</a>
                </li>
                <li>
                    <span className="mr-10">Newsletter</span>
                    <a href="https://substack.com/@davidshan" target="_blank" rel="noreferrer">Substack Dashboard</a>
                </li>
                <li>
                    <span className="mr-10">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/david-shan-076a39265/" target="_blank" rel="noreferrer">LinkedIn Dashboard</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:davidbshan@gmail.com" target="_blank" rel="noreferrer">davidbshan@gmail.com</a>
                </li>
                <li>
                     <span className="mr-10">Calendly</span>
                    <a href="https://calendly.com/davidbshan/30min?month=2023-07" target="_blank" rel="noreferrer">Schedule A Meeting With Me!</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;