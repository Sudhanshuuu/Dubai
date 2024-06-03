import React, { useState, useEffect } from "react";
import axios from "axios";
import locationPng from "../../assets/location.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopProperty({ imagePath }) {
    let [BuyProperty, setBuyProperty] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate?display=feature`)
                .then(response => {
                    setBuyProperty(response.data.filter((property) => { return property.status === "approved" }));
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();

    }, [BuyProperty]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (<div className="py-8 px-[4%] sm:px-[8%] md:py-[4%] *:font-sans">
        <div className="text-2xl font-bold mb-6 sm:text-left md:text-4xl sm:pl-[2%]">Top 10 Properties In Dubai</div>
        <Slider {...settings}>
            {
                BuyProperty.map((property) => {
                    return (
                        <div className="px-8">
                            <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                <div className="relative">
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%]"/>
                                </div>
                                <div className="flex flex-col p-[4%]">
                                    <div className="text-left text-xl">{property.name}</div>
                                    <div className="flex items-center">
                                        <img src={locationPng} alt="location" className="w-4 mr-1" />
                                        <div className="text-left text-sm text-[#919191] underline decoration-[#919191]">{property.location}</div>
                                    </div>
                                    <div className="my-4 text-left">
                                        <button className="py-2 px-4 my-1 mr-2 text-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white duration-200 sm:my-2">APARTMENTS</button>
                                        <button className="py-2 px-4 my-1 mr-2 text-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white duration-200 sm:my-2">TOWNHOUSES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </Slider>


    </div>)
}

export default TopProperty;