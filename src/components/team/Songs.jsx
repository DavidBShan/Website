import React from "react";

import "./style.scss";
import MovieItem from "./PeopleItem";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";

const MovieDetails = [
    {
        src: "/assets/img/songs/tiger.jpg",
        title: "Eye of the Tiger",
        subTitle: "Survivor",
    },
    {
        src: "/assets/img/songs/yesterday.jpg",
        title: "Yesterday",
        subTitle: "The Beatles",
    },
    {
        src: "/assets/img/songs/boxer.jpg",
        title: "The Boxer",
        subTitle: "Simon & Garfunkel",
    },
    {
        src: "/assets/img/songs/letItBe.jpg",
        title: "Let It Be",
        subTitle: "The Beatles",
    },
    {
        src: "/assets/img/songs/man.jpg",
        title: "Man Against The World",
        subTitle: "Survivor",
    },
    {
        src: "/assets/img/songs/there.jpg",
        title: "I'll Be There",
        subTitle: "The Jackson 5",
    },
    {
        src: "/assets/img/songs/stop.jpg",
        title: "Don't Stop Me Now",
        subTitle: "Queen",
    },
    {
        src: "/assets/img/songs/prayer.jpg",
        title: "Livin' On A Prayer",
        subTitle: "Bon Jovi",
    },
    {
        src: "/assets/img/songs/piano.jpg",
        title: "Piano man",
        subTitle: "Billy Joel",
    },
    {
        src: "/assets/img/songs/queen.jpg",
        title: "Dancing Queen",
        subTitle: "ABBA",
    },
    {
        src: "/assets/img/songs/life.jpg",
        title: "My Life",
        subTitle: "Billy Joel",
    },
    {
        src: "/assets/img/songs/california.png",
        title: "Hotel California",
        subTitle: "Eagles",
    },
];

const Movie = ({
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
            className={`dsn-Movie ${className || ""}`}
            {...restProps}
        >
            {MovieDetails.map((item, index) => (
                <SwiperSlide key={index}>
                    <MovieItem
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

Movie.defaultProps = {
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

export default Movie;
