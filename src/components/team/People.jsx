import React from "react";

import "./style.scss";
import PeopleItem from "./PeopleItem";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";

const PeopleDetails = [
    {
        src: "/assets/img/people/Naval.jpg",
        title: "Naval Ravikant",
        subTitle: "Discipline",
    },
    {
        src: "/assets/img/people/Goggins.jpg",
        title: "David Goggins",
        subTitle: "Entrepreneurship",
    },
    {
        src: "/assets/img/people/Altman.jpg",
        title: "Sam Altman",
        subTitle: "Psychology",
    },
    {
        src: "/assets/img/people/Musk.jpg",
        title: "Elon Musk",
        subTitle: "Money",
    },
    {
        src: "/assets/img/people/Marcus.jpg",
        title: "Marcus Aurelius",
        subTitle: "Knowledge",
    },
    {
        src: "/assets/img/people/Vinod.jpg",
        title: "Vinod Khosla",
        subTitle: "Stoicism",
    },{
        src: "/assets/img/people/Paul.jpg",
        title: "Paul Graham",
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
