import React from "react";
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import { getPortfolioLink } from "../../api/portfolio/PortfolioData";
import ButtonDefault from "../button/button-default/ButtonDefault";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ContentSlider({ data, activeClass }, ref) {
    return (
        <div className="dsn-slider-content hero-content">
            {data.map((item, key) => (
                <div
                    className={`slide-content ${
                        activeClass === key ? "dsn-active" : ""
                    }`}
                    key={key}
                    ref={ref}
                >
                    {item.title && (
                        <h1 className="title-heading">  
                                {item.title}
                        </h1>
                    )}
                    {item.description && (
                        <div className="dsn-description mt-30">
                            {item.description.split('\n').reduce((acc, line, index, array) => acc.concat(
                            index < array.length - 1 ? [line, <br key={index} />] : line
                            ), [])}
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
}

export default React.forwardRef(ContentSlider);
