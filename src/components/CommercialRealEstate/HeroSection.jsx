import React, { useState } from "react";

const HeroSection = ({ searchResult, setSearchResult , handleFilter}) => {
    // State to manage input values
    const [city, setCity] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [price, setPrice] = useState("");
    const [propertyType, setPropertyType] = useState("");

    // Function to handle search button click

    const handleSearch = () => {
        const result = {
            city: city || "Dubai",
            bedrooms: bedrooms || "Any",
            price: price || "Any",
            propertyType: propertyType || "Any",
        };
        setSearchResult(result);
        handleFilter(result);
    }

    return (
        <section
            className="relative  h-[85vh] *:font-sans"
            style={{
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-[85vh] object-cover video1"
                style={{
                    zIndex: "-1",
                }}
            >
                <source
                    src="https://videos.pexels.com/video-files/9432185/9432185-hd_1280_720_24fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Content of the section */}


            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100vw]">
                <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-white">
                    Commercial Real Estate
                </h1>
                <div className="relative container mx-auto flex flex-col items-center justify-center  text-center text-white px-4">
                    <p className="text-lg md:text-2xl mb-8">
                        Dubai’s fastest growing brokerage, while providing a new standard of
                        service
                    </p>
                    <div className="bg-white text-black p-4 rounded-lg shadow-md  md:max-w-5xl">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <input
                                type="text"
                                placeholder="City, community or area"
                                className="p-2 rounded border border-gray-300 flex-1 w-[60vw] lg:w-auto"
                                value={city}
                                onChange={(e) => { setCity(e.target.value); }}
                            />
                            <input
                                type="text"
                                placeholder="Bedrooms"
                                className="p-2 rounded border border-gray-300 flex-1 w-[60vw] lg:w-auto"
                                value={bedrooms}
                                onChange={(e) => { setBedrooms(e.target.value); }}
                            />
                            <input
                                type="text"
                                placeholder="Price Range"
                                className="p-2 rounded border border-gray-300 flex-1 w-[60vw] lg:w-auto"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value); }}
                            />
                            <input
                                type="text"
                                placeholder="All Types"
                                className="p-2 rounded border border-gray-300 flex-1 w-[60vw] lg:w-auto"
                                value={propertyType}
                                onChange={(e) => { setPropertyType(e.target.value); }}
                            />
                            <button
                                className="bg-[#173D73] text-white p-2 rounded flex-shrink-0"
                                onClick={() => { handleSearch() }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    {/* Display search result */}
                    {searchResult && (
                        <div className="mt-4 text-lg">
                            <p>
                                Search Result: City - {searchResult.city}, Bedrooms -{" "}
                                {searchResult.bedrooms}, Price Range - {searchResult.price},{" "}
                                Property Type - {searchResult.propertyType}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;