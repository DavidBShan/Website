import React from "react";

function PeopleItem({ src, title, subTitle }) {
    return (
        <div className="team-item">
            <div className="box-img uni">
                <img src={src} alt={title} className="uniform-height" />
            </div>
            <div className="info">
                <div className="box-content">
                    <h5 className=" mb-20">{title}</h5>
                </div>
            </div>
        </div>
    );
}

export default PeopleItem;
