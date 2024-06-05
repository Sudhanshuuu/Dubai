import React, { useState, useEffect } from "react";
import axios from "axios";
import locationPng from "../../assets/location.png";
import bedPng from "../../assets/bed.png";
import scalePng from "../../assets/scale.png";
import bathtubPng from "../../assets/bathtub.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function BuyProperty({ imagePath }) {

    let [BuyProperty, setBuyProperty] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            await axios.get(`${process.env.REACT_APP_API_URL}/realEstate?display=view`)
                .then(response => {
                    setBuyProperty(response.data.filter((property) => { return property.status === "approved" }));
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();

    }, [BuyProperty]);

    function handleClick(id) {
        navigate(`/property/${id}`)
    }

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

    return (<div className="py-8 md:py-[4%] bg-gray-100 *:font-sans">
        <div className="text-2xl font-bold  sm:text-left md:text-4xl sm:pl-[8%]">Buying Property In Dubai</div>
        <div className="px-[4%] sm:px-[6%]">
            <Slider {...settings}>
                {
                    BuyProperty.map((property) => {
                        return (
                            <div className="p-8 " onClick={() => { handleClick(property._id) }}>
                                <div className="border border-[#E9E9E9]-400 bg-white py-4  rounded shadow-md ">
                                    <div className="relative">
                                        <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[50vh] object-cover w-[100%] rounded-sm" />
                                    </div>
                                    <div className="flex flex-col px-[3%]">
                                        <div className="text-left text-xl font-semibold pt-4 text-black sm:text-[1.7rem]">{property.price} AED</div>
                                        <div className="flex my-1 py-2">
                                            <div className="flex flex-col">
                                                <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                    <div>{property.bedrooms}</div>
                                                    <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                                </div>
                                                <div className="text-sm text-gray-400">Beds</div>
                                            </div>
                                            <div className="flex flex-col mx-4">
                                                <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                    <div>{property.bathrooms}</div>
                                                    <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                                </div>
                                                <div className="text-sm text-gray-400">Bathrooms</div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className=" text-lg text-left font-semibold flex justify-center items-center">
                                                    <div>{property.square}</div>
                                                    <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                                </div>
                                                <div className="text-sm text-gray-400">Square(ft)</div>
                                            </div>
                                        </div>
                                        <div className=" text-left font-semibold lg:text-lg">{property.name}</div>
                                        <div className="text-left py-2  text-sm text-gray-400 flex items-center"><img src={locationPng} alt="loaction" className="w-4 m-1" /><div>{property.location}</div></div>
                                        <div className="flex py-4 border-t border-t-[#E9E9E9]" >
                                            <div className="flex flex-col">
                                                <div className="text-left text-sm">Listing By</div>
                                                <div className="font-semibold">{property.listedBy}</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })

                }
            </Slider>
        </div>
    </div>)
}

export default BuyProperty;