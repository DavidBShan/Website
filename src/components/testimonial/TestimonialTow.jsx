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
        authorName: "Man’s Search for Meaning",
        label: "Viktor Frankl",
        description: `"Let me tell you something you already know. The world ain’t all sunshine and rainbows. It is a very mean and nasty place and it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t how hard you hit; it’s about how hard you can get hit, and keep moving forward. How much you can take, and keep moving forward. That’s how winning is done. Now, if you know what you’re worth, then go out and get what you’re worth. But you gotta be willing to take the hit, and not pointing fingers saying you ain’t where you are because of him, or her, or anybody. Cowards do that and that ain’t you. You’re better than that."`,
    },
    {
        authorName: "The Count of Monte Cristo",
        label: "Alexandre Dumas",
        description: `"I guess it comes down to a simple choice, really, get busy living or get busy dying."`,
    },
    {
        authorName: "12 Rules of Life",
        label: "Jordan Peterson",
        description: `"Carpe diem. Seize the day, boys. Make your lives extraordinary."`,
    },
    {
        authorName: "Beyond Good and Evil",
        label: " Friedrich Nietzsche",
        description: `"My mamma always said life was like a box of chocolates. You never know what you're gonna get."`,
    }
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
