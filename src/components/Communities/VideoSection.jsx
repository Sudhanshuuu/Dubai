
import React, { useState } from "react";

const VideoSection = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <section className=" py-12 dark:bg-dark *:font-sans">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 ">
                        <div className="w-full px-4">
                            <div className="mx-auto  mb-[20px]  text-center">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    
                                </span>
                                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold  sm:text-4xl md:text-[40px]">
                                    Our Most Popular Community
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-3 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                            ? "activeClasses bg-primary text-[#969696]"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#969696]"
                                            }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("branding")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "branding"
                                            ? "activeClasses bg-primary text-[#969696]"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#969696]"
                                            }`}
                                    >
                                        Downtown Creek
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("design")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "design"
                                            ? "activeClasses bg-primary text-[#969696]"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#969696]"
                                            }`}
                                    >
                                        Dubai Creek
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("marketing")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "marketing"
                                            ? "activeClasses bg-primary text-[#969696]"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#969696]"
                                            }`}
                                    >
                                        Palm Jumeriah
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("development")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "development"
                                            ? "activeClasses bg-primary text-[#969696]"
                                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#969696]"
                                            }`}
                                    >
                                        Arabian Ranches
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-auto w-[90%] ">
                        <PortfolioCard
                            ImageHref="https://images.unsplash.com/photo-1527244801394-a5594462a962?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="Branding"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://images.unsplash.com/photo-1616879279603-03072b5b2df2?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://images.pexels.com/photos/16430192/pexels-photo-16430192/free-photo-of-dubai-skyscrapers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr="
                            category="Development"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://plus.unsplash.com/premium_photo-1680435083006-32b1a77b790f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="Design"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref="https://images.unsplash.com/photo-1590765407066-12de51f9565b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="Marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="#"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSection;

const PortfolioCard = ({
    showCard,
    category,
    ImageHref
}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <div className="px-4 py-3 h-fit ">
                    <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
                        <div className=" overflow-hidden">
                            <img
                                src={ImageHref}
                                alt="Dubai Hill Estates"
                                className="mx-auto mb-4 w-[400px] h-[400px] transform duration-300 hover:scale-[1.1]"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Dubai Hill Estates</h3>
                        <p className="text-gray-700">
                            Suburban lifestyle with lush greenery beauty.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
