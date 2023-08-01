import React from "react";
import "./style.scss";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { SwiperOptions } from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import { dsnCN } from "../../hooks/helper";

const TestimonialDetails = [
    {
        authorName: "Rocky Balboa",
        label: "Rocky Balboa 2006",
        description: `"Let me tell you something you already know. The world ain’t all sunshine and rainbows. It is a very mean and nasty place and it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t how hard you hit; it’s about how hard you can get hit, and keep moving forward. How much you can take, and keep moving forward. That’s how winning is done. Now, if you know what you’re worth, then go out and get what you’re worth. But you gotta be willing to take the hit, and not pointing fingers saying you ain’t where you are because of him, or her, or anybody. Cowards do that and that ain’t you. You’re better than that."`,
    },
    {
        authorName: "Andy Dufresne",
        label: "Shawshank Redemption 1994",
        description: `"I guess it comes down to a simple choice, really, get busy living or get busy dying."`,
    },
    {
        authorName: "John Keating",
        label: "Dead Poets Society 1989",
        description: `"Carpe diem. Seize the day, boys. Make your lives extraordinary."`,
    },
    {
        authorName: "Forrest Gump",
        label: "Forrest Gump 1994",
        description: `"My mamma always said life was like a box of chocolates. You never know what you're gonna get."`,
    },
    {
        authorName: "Clarence Odbody",
        label: "It's a Wonderful Life 1946",
        description: `"Strange, isn't it? Each man's life touches so many other lives. And when he isn't around he leaves an awful hole, doesn't he?"`,
    },
    {
        authorName: "Tony Robbins",
        label: "Writer",
        description: `"You've got to be in it to win it."`,
    },
    {
        authorName: "David Goggins",
        label: "Former Navy SEAL",
        description: `"If you can get through doing things that you hate to do, on the other side is greatness."`,
    },
    {
        authorName: "Jordan Peterson",
        label: "Clinical Psychologist",
        description: `"It took untold generations to get you where you are. A little gratitude might be in order."`,
    },
    {
        authorName: "Matthew McConaughey",
        label: "Actor",
        description: `"Life is a series of commas, not periods."`,
    },
    {
        authorName: "Elon Musk",
        label: "Entrepreneur",
        description: `"I think people can choose to be not ordinary. You know, they can choose to not necessarily conform to the conventions that were taught to them by their parents. So, yes, I think it’s possible for ordinary people to choose to be extraordinary."`,
    },
];

function TestimonialTow({ className, ...restProps }: SwiperOptions) {
    return (
        <section
            className={dsnCN("dsn-testimonial testimonial-tow", className)}
        >
            <div className="testimonial-inner">
                <div className="content-box">
                    <Swiper slidesPerView={1} {...restProps}>
                        {TestimonialDetails.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TestimonialItem
                                        authorName={item.authorName}
                                        label={item.label}
                                        description={item.description}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        <ControlNav />
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default TestimonialTow;
