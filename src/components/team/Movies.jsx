import React from "react";

import "./style.scss";
import MovieItem from "./PeopleItem";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";

const MovieDetails = [
    {
        src: "/assets/img/movies/Shawshank.jpg",
        title: "Shawshank Redemption",
        subTitle: "1994",
    },
    {
        src: "/assets/img/movies/WonderfulLife.jpeg",
        title: "It's a Wonderful Life",
        subTitle: "1946",
    },
    {
        src: "/assets/img/movies/Gump.jpg",
        title: "Forrest Gump",
        subTitle: "1994",
    },
    {
        src: "/assets/img/movies/Rocky.jpg",
        title: "Rocky",
        subTitle: "1976",
    },
    {
        src: "/assets/img/movies/Poets.jpg",
        title: "Dead Poet's Society",
        subTitle: "1989",
    },
    {
        src: "/assets/img/movies/Inception.jpg",
        title: "Inception",
        subTitle: "2010",
    },
    {
        src: "/assets/img/movies/Interstellar.jpg",
        title: "Interstellar",
        subTitle: "2014",
    },
    {
        src: "/assets/img/movies/Gladiator.jpg",
        title: "Gladiator",
        subTitle: "2000",
    },
    {
        src: "/assets/img/movies/Schindler.jpg",
        title: "Schindler's List",
        subTitle: "1993",
    },
    {
        src: "/assets/img/movies/Rings.jpg",
        title: "Lord of the Rings",
        subTitle: "2001 | 2002 | 2003",
    },
    {
        src: "/assets/img/movies/Hunting.jpg",
        title: "Good Will Hunting",
        subTitle: "1997",
    },
    {
        src: "/assets/img/movies/Groundhog.png",
        title: "Groundhog Day",
        subTitle: "1993",
    },
    {
        src: "/assets/img/movies/Happiness.jpg",
        title: "The Pursuit of Happiness",
        subTitle: "2006",
    }
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
