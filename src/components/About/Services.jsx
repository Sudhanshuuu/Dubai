import React from "react";
import RentIcon from "../../assets/rent.png";
import BuyIcon from "../../assets/buy.png";
import CommercialIcon from "../../assets/house.png";

const Service = () => {
    return (
        <section className="pt-10 dark:bg-dark bg-gray-100 *:font-sans">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Our Services
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap px-[5%]">
                    <ServiceCard
                        title="Buy"
                        details="Buy the best property with the help and assistance of our well renowed Real Estate Co."
                        icon={<img src={BuyIcon} alt="buy"/>}
                    />
                    <ServiceCard
                        title="Rent"
                        details="Rent the best property with the help and assistance of our well renowed Real Estate Co."
                        icon={<img src={RentIcon} alt="rent"/>}
                    />
                    <ServiceCard
                        title="Commercial"
                        details="Rent the best property with the help and assistance of our well renowed Real Estate Co."
                        icon={<img src={CommercialIcon} alt="Commerical"/>}
                    />
      
                </div>
            </div>
        </section>
    );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer">
                <div className="mb-9 rounded-[20px] bg-gray-100 p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
                    <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-primary mx-auto">
                        {icon}
                    </div>
                    <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                        {title}
                    </h4>
                    <p className="text-body-color dark:text-dark-6">{details}</p>
                </div>
            </div>
        </>
    );
};
