import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 648,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className="about-section " id="about">
            <div className="flex flex-col pb-10">
                <h6 className="font-sans">Meet the Team</h6>
                <h2 className="text-2xl mb-8 md:text-6xl font-semibold font-sans">
                    {" "}
                    Your in the safe hands
                </h2>
                <Slider {...settings} className="mx-auto w-[80%] *:font-sans">
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/6902fd7f147e6515b7ebd7770d8bf680/a1149/Calum_169bdbdac1.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Callum White</h3>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/6902fd7f147e6515b7ebd7770d8bf680/a1149/Calum_169bdbdac1.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Callum White</h3>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/6902fd7f147e6515b7ebd7770d8bf680/a1149/Calum_169bdbdac1.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Callum White</h3>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/3b5de2aac5a9495b62d53e380632840f/a1149/Rob_1ab41ca307.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Neil Mckean</h3>
                            <p>Managing Director</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/3b5de2aac5a9495b62d53e380632840f/a1149/Rob_1ab41ca307.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Neil Mckean</h3>
                            <p>Managing Director</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] items-center">
                        <div className="border py-[5%] shadow-xl rounded-md">
                            <div className=" overflow-hidden">
                                <img
                                    src="https://www.whiteandcogroup.com/static/1bfd80ec7e05ab022f6a4c6122cc24f3/a1149/Poppy_e49ebc7524.webp"
                                    alt="Team Member"
                                    className="mx-auto w-[100%] transform  duration-300 hover:scale-[1.1]"
                                />
                            </div>
                            <h3>Robert Searle</h3>
                            <p>Sales Director</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Team;
