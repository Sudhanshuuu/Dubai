import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import locationPng from "../../assets/location.png";
import bedPng from "../../assets/bed.png";
import scalePng from "../../assets/scale.png";
import bathtubPng from "../../assets/bathtub.png";

const Content = ({ data }) => {
    const [index, setIndex] = useState(0);
    const [buyRealEstate, setBuyRealEstate] = useState([]);
    const propertiesPerPage = 9;
    const navigate = useNavigate();

    useEffect(() => {
        setBuyRealEstate(data.filter(property => property.status === "approved"));
    }, [data]);

    const totalPages = Math.ceil(buyRealEstate.length / propertiesPerPage);

    const handleClick = (id) => {
        navigate(`/property/${id}`);
    };

    const renderProperties = (startIndex) => {
        return buyRealEstate.slice(startIndex, startIndex + propertiesPerPage).map((property, key) => (
            <div key={key} className="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => handleClick(property._id)}>
                <div className="border border-[#E9E9E9]-400 bg-white py-4 rounded shadow-md">
                    <div className="relative overflow-hidden">
                        <img src={`${process.env.REACT_APP_IMG_URL}/${property.images[0]}`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                    </div>
                    <div className="flex flex-col px-[3%]">
                        <div className="text-left font-semibold text-xl pt-4 text-black">{property.name}</div>
                        <div className="flex my-1 py-2">
                            <div className="flex flex-col">
                                <div className="text-lg text-left font-semibold flex justify-center items-center">
                                    <div>{property.bedrooms}</div>
                                    <img src={bedPng} alt="bed" className="w-8 h-8 mx-2" />
                                </div>
                                <div className="text-sm text-gray-400">Beds</div>
                            </div>
                            <div className="flex flex-col mx-4">
                                <div className="text-lg text-left font-semibold flex justify-center items-center">
                                    <div>{property.bathrooms}</div>
                                    <img src={bathtubPng} alt="bed" className="w-8 h-8 mx-2" />
                                </div>
                                <div className="text-sm text-gray-400">Bathrooms</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-lg text-left font-semibold flex justify-center items-center">
                                    <div>{property.square}</div>
                                    <img src={scalePng} alt="bed" className="w-8 h-8 mx-2" />
                                </div>
                                <div className="text-sm text-gray-400">Square(ft)</div>
                            </div>
                        </div>
                        <div className="text-left font-semibold lg:text-lg">{property.price} AED</div>
                        <div className="text-left py-2 text-sm text-gray-400 flex items-center">
                            <img src={locationPng} alt="location" className="w-4 m-1" />
                            <div>{property.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="relative *:font-sans">
            <div className="my-5 font-semibold text-left ml-[7%] text-3xl">
                Commercial Real Estate
            </div>
            <div className="flex flex-col justify-center flex-wrap items-center md:flex-row">
                {renderProperties(index * propertiesPerPage)}
            </div>
            <div className="relative mb-12 mx-auto flex justify-center sm:my-[2%]">
                {Array.from({ length: totalPages }, (_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`mx-2 px-6 py-5 border border-black duration-300 cursor-pointer ${index === i ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;