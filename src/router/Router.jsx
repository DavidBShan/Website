import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";

import "./style.scss";

const LandingPage = React.lazy(() => import("../views/home/LandingPage"));

const Slider = React.lazy(() => import("../views/Slider"));
const Work = React.lazy(() => import("../views/Work"));
const ProjectDetails = React.lazy(() =>
    import("../views/portfolio/ProjectDetails")
);
const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));
const BlogDetails = React.lazy(() => import("../views/blog/BlogDetails"));

const Router = () => {
    const [transPage, setTransPage] = useState("in");
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(
        (state) => state.scrollbar
    );

    const location = useEffectLocation((l) => {
        setTransPage("out");
    });

    const onAnimateEnd = () => {
        if (transPage !== "out") return;
        scrollbar.current?.scrollTo(0, 0, 0);
        window.scrollTo({ left: 0, top: 0 });
        setTransPage("in");
    };

    return (
        <div
            id="dsn-content"
            className={`dsn-transition-page dsn-animate-${transPage}`}
            onAnimationEnd={onAnimateEnd}
        >
            <Suspense fallback={<div className="background-main h-100-v" />}>
                <Routes location={location}>
                    <Route path="/" element={<LandingPage />} />

                    <Route path="/slider" element={<Slider />} />

                    <Route exact path="/portfolio" element={<Work />} />
                    <Route
                        exact
                        path="/portfolio/:slug"
                        element={<ProjectDetails />}
                    />

                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route
                        exact
                        path="/blog-details"
                        element={<BlogDetails />}
                    />
                    <Route
                        exact
                        path="*"
                        element={
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100vh",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Page Not Found
                                </h1>
                            </div>
                        }
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default React.memo(Router);
