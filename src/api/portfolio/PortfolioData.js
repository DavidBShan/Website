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
        title: "Internships",
        slug: "geotab",
        category: ["Software Development"],
        description:
            "For the summer of 2023 and 2024, I interned at Geotab, one of the world's largest telematics company for fleet management. My main work at the company is on the Geotab Drive App which is a mobile application used by drivers to log their hours with a backend to check the legality and safety of the hours.\n\nI worked with project management systems used by large companies, as well as worked on building unit tests to create a more robust codebase.\n\n During my 2023 internship, I created a web application accessible by over 500 employees of the company to help validate the company's data with official government data through webscraping. \n\n During my 2024 internship, I researched a solution as an alternative to the current logging system to reduce lost logs and improve the on-call experience.",
        src: "/assets/img/portfolio/Geotab.png",
        srcSlider: "/assets/img/portfolio/Geotab.png",
        overlay: 2,
        component: (props) => <Geotab {...props} />,
    },
    {
        id: 2,
        title: "Startups",
        slug: "cyberbot",
        src: "/assets/img/portfolio/Startups.png",
        srcSlider: "/assets/img/portfolio/Startups.png",
        category: ["Backend Development"],
        description:
            "The two startups that I worked on is Aceflow and Iris. Aceflow is a startup that aims to help students study faster with AI. It is bootstrapped with $10,000+ in awarded grants and advised by Stanford University's Director of Digital Learning Solutions with 2,000+ sign-ups and a revenue-generating beta. We also received a $150k+ credit grant from Microsoft, the Ingenious+ innovation award, and was funded by Emergent Ventures. I built the backend for Aceflow's quiz generation tool which involved Stripe payment, OCR, and large language models.\n\n I also cofounded Iris, a startup aimed at helping video editors organize their footage, it was funded by Telora for 25,000 dollars for us to build this in Miami. We ended with paying beta users who use the product to make an impact on their workflow.",
        overlay: 2,

        component: (props) => <Cyberbot {...props} />,
    },
    {
        id: 3,
        title: "Research",
        slug: "vivaidi",
        src: "/assets/img/portfolio/Research.png",
        srcSlider: "/assets/img/portfolio/Research.png",
        category: ["Full-Stack Development"],
        description:
            "I wrote 2 research papers on the topic of wildfire prediction techniques and the connotation of subsidized housing, both through the lens of big data and AI. I was able to win 1,000 dollars when pitching my research and as well as publishing the manuscript regarding using semantic segmentation as a new technique to predict wildfires.\n\n I am currently working on researching how accessibility to technology relate to accessibility to jobs through an agent-based modelling approach with the primary area of focus being California. \n\nI also worked on carbon capture at a ideathon where I was able to win best overall through my group's research into marine carbon capture with algae as a way to disrupt the carbon sequestration industry.\n\nFurthermore, I also built the physics simulation for my school's physics team with Mujoco and 4th-Degree Runge Kutta's method to understand the Rigid Ramp Walker and Ruler Trick problems. This simulation played a role in helping my school win gold medal in the Canadian Youth Physics Tournament.\n\n  Finally, with 3,000 dollars in funding, I am currently working on patenting and publishing a research paper for my hardware research in the detection of cardiovascular diseases through a machine learning algorithm combined with a wrist-mounted blood pressure sensor powered with a STM-32.",
        overlay: 2,
        component: (props) => <VivAIdi {...props} />,
    },
    {
        id: 4,
        title: "Robotics",
        slug: "data",
        src: "/assets/img/portfolio/Robotics.png",
        srcSlider: "/assets/img/portfolio/Robotics.png",
        category: ["Data Science"],
        description:
            "As the Head of Programming and Technician on Team 610, I am in charge of the entire programming team's workflow, writing a large portion of the code that powers the robot, as well as the doing system checks before every match to ensure the best possible performance of the robot.\n\n To ensure the efficiency of the team, I developed new procedures to writing code through leveraging Github Actions, implementing more methodical code reviews, as well as bringing industry standards to the coding process. \n\nIn addition, I also developed the code for Team 610's swerve drivetrain, marking the first time our team used swerve in competitions, allowing us to make World Championships in Houston.",
        overlay: 2,
        component: (props) => <SubsidizedHousing {...props} />,
    },
    {
        id: 5,
        title: "Software",
        slug: "viper",
        src: "/assets/img/portfolio/Software.png",
        srcSlider: "/assets/img/portfolio/Software.png",
        category: ["Robotics"],
        description:
            "Attended over 10+ hackathons, I built numerous projects that won hundreds of dollars in awards. The most interesting projects I built, in my opinion are:\n\n○ A graphical representation of journals with each journal as a connection between two people (nodes) with Neo4j's AuraDB\n○A web application that turns humming into an orchestra melody with the Magenta API\n○A webapp where the user can turn their lecture notes into presentations with voice recordings, slideshows, and quizzes\n○A game on the blockchain powered by smart contracts \n○An AR-based camera app to review furnitures in the real-world, guiding the furniture purchasing process, through Flutter",
        overlay: 2,
        component: (props) => <Viper {...props} />,
    },
    {
        id: 6,
        title: "Other",
        slug: "610",
        src: "/assets/img/portfolio/Other.png",
        srcSlider: "/assets/img/portfolio/Other.png",
        category: ["Frontend Development"],
        description:
            "I worked on consulting projects alongside Google in regards to how it can better bridge the connection between its salesforce and engineers for a better understanding of Google's vast arsenal of products. In conjuction to a slidedeck, I also built a Figma prototype as well as talked to industry professionals to validate the idea.\n\nSimilarly, I also consulted alongside Microsoft to propose a solution for its profit loss due to insufficient cooling of its data centers.\n\nI also built two toys for children with developmental disabilities to allow them to draw using their fingers and computer vision as well as allowing them to talk to SpongeBob through OpenAI's API. ",
        overlay: 2,

        component: (props) => <Scouting {...props} />,
    }
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
