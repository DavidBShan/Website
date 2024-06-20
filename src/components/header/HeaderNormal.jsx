import React, {useEffect, useRef} from 'react';
import style from './style.module.scss'
import {Container} from "react-bootstrap";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {ContainerProps} from "react-bootstrap/Container";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import gsap from 'gsap';
import {dsnCN} from "../../hooks/helper";


interface HeaderNormalProps extends BsPrefixRefForwardingComponent<'div', ContainerProps> {
    description?: string
}

function HeaderNormal({className, description, children, ...restProps}: HeaderNormalProps) {
    const head = useRef();
    const dot = useRef();

    useEffect(() => {
        gsap.fromTo(dot.current, {yPercent: 60, autoAlpha: 0.05},
            {
                yPercent: 100, autoAlpha: 0,
                scrollTrigger: {
                    trigger: head.current,
                    start: "top top",
                    scrub: true
                }
            }
        )
    })

    return (
        <header className={dsnCN(style.hn, className)} ref={head}>
            <Container {...restProps}>
                <h1 className={`title-heading ${style.ht}`}>
                    {children}
                </h1>
                {description && <p className="mt-30 m-w570" style={{letterSpacing: "1.2px"}}>
                    Welcome to the page where I show my interests. Ultimately, what someone does and like is one of the best representation to know who they are. <br></br><br></br>Feel free to book a meeting with me to talk about <a href="https://github.com/DavidBShan">programming</a>, <a href="https://open.spotify.com/user/kloejkjhqyyn2xme0za59np07?si=7f079ac28f604d76">music</a>, <a href="https://letterboxd.com/chickenmcswag/">movies</a>, mindsets, self-improvement, and, quite frankly, anything that piques your interest.
                </p>}
                <a href="#0" className={`view-case ${style.sd} mt-30`}>
                    Scroll Down <FontAwesomeIcon icon={faArrowDown}/>
                </a>
            </Container>
            <div className={style.bcd} ref={dot}/>
        </header>
    );
}

export default HeaderNormal;