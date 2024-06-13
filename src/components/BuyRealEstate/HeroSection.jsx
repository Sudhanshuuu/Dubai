import React, { useState } from "react";

const HeroSection = ({ searchResult, setSearchResult, handleFilter }) => {
    // State to manage input values
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [complete, setComplete] = useState("");
    const [propertyType, setPropertyType] = useState("");

    // Function to handle search button click

    const handleSearch = () => {
        const result = {
            city: city || "Dubai",
            complete: complete || "Any",
            price: price || "Any",
            propertyType: propertyType || "Any",
        };
        setSearchResult(result);
        handleFilter(result);
    }

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const handleSelect = (value) => {
        setCity(value);
        setToggle(false);
    };

    const options = [
        "", "Al Barari", "Al Barsha", "Al Furjan", "Al Habtoor City",
        "Al Hamra Village", "Al Jaddaff", "Al Jurf", "Al Kifaf",
        "Al Marjan Island", "Al Reem Island", "Al Safa", "Al Sufouh",
        "Al Wasl", "Al Zorah", "Arabian Ranches", "Arabian Ranches 2",
        "Arabian Ranches 3", "Arjan", "Bluewaters Island", "Burj Khalifa District",
        "Business Bay", "City Walk", "Culture Village", "DIFC",
        "Deira", "Downtown Dubai", "Downtown Jebel Ali", "Dubai Canal",
        "Dubai Creek Harbour", "Dubai Festival City", "Dubai Healthcare City", "Dubai Hills Estate",
        "Dubai Investment Park", "Dubai Islands", "Dubai Marina", "Dubai Production City",
        "Dubai Silicon Oasis", "Dubai South", "Dubai Sports City", "Dubailand",
        "Emaar Beachfront", "Emaar South", "Emirates Hills", "Emirates Living",
        "Expo City Dubai", "Falconcity", "Hudayriyat Island", "International City",
        "JBR", "Jebel Ali", "Jebel Ali Village", "Jumeira Bay",
        "Jumeirah", "Jumeirah Golf Estate", "Jumeirah Height", "Jumeirah Islands",
        "Jumeirah Lake Towers", "Jumeirah Park", "Jumeirah Village Circle", "Jumeirah Village Triangle",
        "MBR City", "Madinat Badr", "Madinat Jumeirah Living", "Majan", "Marine Drive",
        "Meadows", "Meydan City", "Mirdif Hills", "Motor City",
        "Mudon", "Muscat Bay", "Nad Al Hammar", "Nad Al Sheba",
        "Palm Jebel Ali", "Palm Jumeirah", "Pearl Jumeirah", "Port De La Mer",
        "Remraam", "Sheikh Zayed Road", "Sobha Hartland", "Springs",
        "Studio City", "The Lakes", "The Opera District", "The Valley",
        "The Views", "Tilal Al Ghaf", "Town Square", "Umm Suqeim",
        "Villanova", "Yas Bay", "Zaabeel"
    ];

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
                    src="https://videos.pexels.com/video-files/8396975/8396975-hd_1280_720_25fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Content of the section */}

            <div className="absolute inset-0 bg-black opacity-25"></div>

            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] w-[100vw]">
                <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-white">
                    Buying Real Estate
                </h1>
                <div className="relative container mx-auto flex flex-col items-center justify-center  text-center text-white px-4">
                    <div className="bg-[#FFFFFF69] text-black p-4 rounded-lg shadow-md  max-w-5xl">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <div>

                                <div className="flex flex-col md:flex-row">
                                    <select className="p-2 text-[#A1A8B3] m-1 rounded border border-gray-300 flex-1  lg:w-auto" name="propretyType" onChange={(e) => { setPropertyType(e.target.value); }}>
                                        <option value="">Select Property Type</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="residential">Residential</option>
                                    </select>
                                    <div className="flex flex-row">
                                        <div
                                            className="p-2 relative si rounded m-1 bg-white text-left text-[#A1A8B3] border border-gray-300 flex-1 w-[40vw] lg:w-[30vw]"
                                            onClick={handleClick}
                                        >
                                            {city === "" ? (
                                                <div>
                                                    Locations <span className="hidden md:inline-block">, City , Communities</span>
                                                </div>
                                            ) : (
                                                <div>{city}</div>
                                            )}
                                            {toggle && (
                                                <div className="absolute top-11 right-0 w-[100%] bg-white text-black rounded-md overflow-y-scroll h-[200px]">
                                                    {options.map(option => (
                                                        option === "" ? <div
                                                            key={option}
                                                            onClick={() => handleSelect(option)}
                                                            className="block px-4 py-2 text-[#A1A8B3] hover:bg-gray-200 cursor-pointer">
                                                            Locations <span className="hidden md:inline-block">, City , Communities</span>
                                                        </div> : (
                                                            <div
                                                                key={option}
                                                                onClick={() => handleSelect(option)}
                                                                className="block px-4 py-2 text-[#A1A8B3] hover:bg-gray-200 cursor-pointer"
                                                            >
                                                                {option}
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            className="bg-[#173D73] text-white p-2 rounded m-1 flex-shrink-0"
                                            onClick={() => { handleSearch() }}
                                        >
                                            Search
                                        </button>
                                    </div>

                                </div>
                                <div className="flex flex-row">
                                    <select className="p-2 text-[#A1A8B3] m-1 rounded border border-gray-300 flex-1 lg:w-auto" name="propretyComplete" onChange={(e) => { setComplete(e.target.value); }}>
                                        <option value="">Completion</option>
                                        <option value="offPlan">Off Plan</option>
                                        <option value="ready">Ready</option>
                                    </select>

                                    <select className="p-2 text-[#A1A8B3] m-1 rounded border border-gray-300 flex-1  lg:w-auto" name="price" onChange={(e) => { setPrice(e.target.value); }}>
                                        <option value="">Min Price</option>
                                        <option value="300000">300000 AED</option>
                                        <option value="500000">500000 AED</option>
                                        <option value="800000">800000 AED</option>
                                        <option value="1000000">1000000 AED</option>
                                        <option value="1500000">1500000 AED</option>
                                        <option value="2000000">2000000 AED</option>
                                    </select>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Display search result */}
                    {searchResult && (
                        <div className="mt-4 text-lg">
                            <p>
                                Search Result: City - {searchResult.city}, Property Status -{" "}
                                {searchResult.complete}, Price Range - {searchResult.price},{" "}
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