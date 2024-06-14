import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = ({ data, uniqueLocations }) => {
    const [index, setIndex] = useState(0);
    const [buyRealEstate, setBuyRealEstate] = useState([]);
    const propertiesPerPage = 9;
    const navigate = useNavigate();

    useEffect(() => {
        setBuyRealEstate(uniqueLocations);
    }, [data]);

    const totalPages = Math.ceil(buyRealEstate.length / propertiesPerPage);

    const handleClick = (location) => {
        navigate(`/area/${location}`);
    };

    const renderProperties = (startIndex) => {
        return buyRealEstate.slice(startIndex, startIndex + propertiesPerPage).map((property, key) => (
            <div key={key} className="px-8 pb-8 w-[90vw] md:w-[45vw] lg:w-[30vw]" onClick={() => handleClick(property)}>
                <div className="border border-[#E9E9E9]-400 bg-white py-4 rounded shadow-md">
                    <div className="relative overflow-hidden">
                        <img src={`https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/dubailand.jpg.webp`} alt="dubaiPhoto" className="h-[40vh] object-cover w-[100%] rounded-sm duration-300 hover:scale-[1.2]" />
                    </div>
                    <div className="flex flex-col px-[3%]">
                        <div className="text-left font-semibold text-xl pt-4 text-black">{property}</div>

                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="relative *:font-sans">
            <div className="my-5 font-semibold text-left ml-[7%] text-3xl">
                Areas
            </div>
            <div className="flex flex-col  justify-center flex-wrap items-center md:flex-row">
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