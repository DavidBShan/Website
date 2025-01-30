import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "https://www.linkedin.com/in/david-shan-076a39265/", name: "LinkedIn"},
        {link: "https://medium.com/@davidbshan", name: "Medium"},
        { link: "https://substack.com/profile/149437949-david-shan", name: "Newsletter" },
        { link: "https://github.com/DavidBShan", name: "Github" }
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="https://calendly.com/davidbshan/30min" data-hover-text="Click To Schedule A Meeting With Me">
                            Click To Schedule A Meeting With Me
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:davidbshan@gmail.com"
                           data-hover-text="davidbshan@gmail.com">Email: davidbshan@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;