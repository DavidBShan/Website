import React from "react";

import "./style.scss";
import PeopleItem from "./PeopleItem";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";

const PeopleDetails = [
    {
        src: "/assets/img/people/Goggins.jpg",
        title: "David Goggins",
        subTitle: "Discipline",
    },
    {
        src: "/assets/img/people/Musk.jpg",
        title: "Elon Musk",
        subTitle: "Entrepreneurship",
    },
    {
        src: "/assets/img/people/Peterson.jpg",
        title: "Jordan Peterson",
        subTitle: "Psychology",
    },
    {
        src: "/assets/img/people/Iman.jpg",
        title: "Iman Gadzhi",
        subTitle: "Money",
    },
    {
        src: "/assets/img/people/Rogan.jpg",
        title: "Joe Rogan",
        subTitle: "Knowledge",
    },
    {
        src: "/assets/img/people/Marcus.jpg",
        title: "Marcus Aurelius",
        subTitle: "Stoicism",
    },
    {
        src: "/assets/img/people/Kobe.jpg",
        title: "Kobe Bryant",
        subTitle: "Hard-work",
    },{
        src: "/assets/img/people/CBum.jpg",
        title: "Chris Bumstead",
        subTitle: "Fitness"
    },
];

const People = ({
    className,
    desktop,
    mobile,
    tablet,
    ...restProps
}: SwiperOptions) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile,
            }}
            className={`dsn-team ${className || ""}`}
            {...restProps}
        >
            {PeopleDetails.map((item, index) => (
                <SwiperSlide key={index}>
                    <PeopleItem
                        src={item.src}
                        title={item.title}
                        subTitle={item.subTitle}
                    />
                </SwiperSlide>
            ))}
            <div className="swiper-pagination" />
        </Swiper>
    );
};

People.defaultProps = {
    desktop: {
        slidesPerView: 2.5,
    },
    tablet: {
        slidesPerView: 2,
    },
    mobile: {
        slidesPerView: 2,
    },
};

export default People;
