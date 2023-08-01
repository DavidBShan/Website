import Geotab from "../../views/portfolio/Geotab";
import Cyberbot from "../../views/portfolio/Cyberbot";
import VivAIdi from "../../views/portfolio/VivAIdi";
import SubsidizedHousing from "../../views/portfolio/SubsidizedHousing";
import Scouting from "../../views/portfolio/Scouting";
import Viper from "../../views/portfolio/Viper";
import STEM from "../../views/portfolio/STEM";
import Misc from "../../views/portfolio/Miscellaneous";

const data = [
    {
        id: 1,
        title: "Geotab Intern",
        slug: "geotab",
        category: ["Software Development"],
        description:
            "Geotab is a telematics company based in Oakville, Canada where I interned for 2 months, during that time I worked with many industry professionals, participated in code review, worked with unit tests, and created a React app for the company.",
        src: "/assets/img/portfolio/Geotab.png",
        srcSlider: "/assets/img/portfolio/Geotab.png",
        overlay: 2,
        component: (props) => <Geotab {...props} />,
    },
    {
        id: 2,
        title: "Cyberbot",
        slug: "cyberbot",
        src: "/assets/img/portfolio/Cyberbot.png",
        srcSlider: "/assets/img/portfolio/Cyberbot.png",
        category: ["Backend Development"],
        description:
            "Cyberbot is a useful discord bot that has the ability to auto moderate discord channels as well as provide translation to discord channels.",
        overlay: 2,

        component: (props) => <Cyberbot {...props} />,
    },
    {
        id: 3,
        title: "VivAIdi",
        slug: "vivaidi",
        src: "/assets/img/portfolio/VivAIdi.png",
        srcSlider: "/assets/img/portfolio/VivAIdi.png",
        category: ["Full-Stack Development"],
        description:
            "VivAIdi is a desktop app built with electron that uses AI to turn humming into layered melodies which can be conducted with gesture control.",
        overlay: 2,
        component: (props) => <VivAIdi {...props} />,
    },
    {
        id: 4,
        title: "Investigating the Negative Connotations of Subsidized Housing",
        slug: "data",
        src: "/assets/img/portfolio/SubsidizedHousing.jpg",
        srcSlider: "/assets/img/portfolio/SubsidizedHousing.jpg",
        category: ["Data Science"],
        description:
            "This data science project aims to use big data to remove negative beliefs surrounding subsidized housing and the people living in them.",
        overlay: 2,
        component: (props) => <SubsidizedHousing {...props} />,
    },
    {
        id: 5,
        title: "Viper",
        slug: "viper",
        src: "/assets/img/portfolio/Viper.jpg",
        srcSlider: "/assets/img/portfolio/Viper.jpg",
        category: ["Robotics"],
        description:
            "Viper is Team 610's Robot that competed in the First Robotics Competition in 2023, I worked on the auto-balancing code as well as resetting the botpose using limelight and finally help write the cascade limit switch code.",
        overlay: 2,
        component: (props) => <Viper {...props} />,
    },
    {
        id: 6,
        title: "FRC Team 610 Scouting App",
        slug: "610",
        src: "/assets/img/portfolio/610.jpg",
        srcSlider: "/assets/img/portfolio/610.jpg",
        category: ["Frontend Development"],
        description:
            "I worked on the 610 Scouting App, where I created an interactive map that takes in the coordinates on the tablet where the click happened, in addition I also added a timer functionality to the app where the user can track how many seconds each team played defense.",
        overlay: 2,

        component: (props) => <Scouting {...props} />,
    },
    {
        id: 7,
        title: "Science Technology Engineering Math",
        slug: "stem",
        src: "/assets/img/portfolio/Math.jpg",
        srcSlider: "/assets/img/portfolio/Math.jpg",
        category: ["STEM"],
        description:
            "I have been participated in math contests for years now and have earned many accolades throughout my time doing math contests, which includes getting invited to the AIME.",
        overlay: 2,
        component: (props) => <STEM {...props} />,
    },
    {
        id: 8,
        title: "Misc",
        slug: "misc",
        category: ["Miscellaneous"],
        src: "/assets/img/portfolio/TableTennis.jpg",
        srcSlider: "/assets/img/portfolio/TableTennis.jpg",
        description:
            "I am quite involved in both sports and music in and outside of school from being a clarinet player to a Team Ontario Table Tennis player.",
        overlay: 2,
        component: (props) => <Misc {...props} />,
    },
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find((item) => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item) return item.slug && "/portfolio/" + item.slug;

    return "";
};
