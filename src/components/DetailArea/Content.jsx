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
                        <div className="text-left font-semibold lg:text-lg">{property.price} AED</div>
                        <div className="text-left py-2 text-sm text-gray-400 flex items-center">
                            <img src={locationPng} alt="location" className="w-4 m-1" />
                            <div>{property.location}</div>
                        </div>
                        <div className="text-left">
                            <button className="py-2 px-4 my-1 mr-2 text-sm border border-[#173D73] text-[#173D73] hover:bg-[#173D73] hover:text-white duration-200 sm:my-2">RENT PROPERTY</button>
                            <button className="py-2 px-4 my-1 mr-2 text-sm border border-[#173D73] text-[#173D73] hover:bg-[#173D73] hover:text-white duration-200 sm:my-2">BUY PROPERTY</button>
                        </div>
                        <div className="text-left font-semibold text-[#173d73] underline">Area Guide</div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="relative *:font-sans">
            <div className="my-5 font-semibold text-left ml-[7%] text-3xl">
                Properties
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