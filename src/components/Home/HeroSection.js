import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/HeroSection.css";

const HeroSection = () => {
  // State to manage input values
  const [city, setCity] = useState("");
  const [complete, setComplete] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [searchResult, setSearchResult] = useState(null);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5800
  };

  // Function to handle search button click
  const handleSearch = () => {
    // Dummy logic to simulate search
    const result = {
      city: city || "Dubai",
      price: price || "Any",
      propertyType: propertyType || "Any",
    };
    setSearchResult(result);
  };

  return (
    <section
      className="relative h-screen *:font-sans"
      style={{
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover video1"
        style={{
          zIndex: "-1",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/7578544/7578544-hd_1280_720_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover video2"
        style={{
          zIndex: "-1",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/5057522/5057522-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover video3"
        style={{
          zIndex: "-1",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/5057529/5057529-hd_1280_720_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content of the section */}

      <div className="absolute inset-0 bg-black opacity-45"></div>

      <div>
        <Slider {...settings} className="mt-[20vh] sm:mt-[30vh]">
          <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-white">
            Professional. Transparent. Authentic.
          </h1>
          <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-white">
            Professional. Transparent. Authentic.
          </h1>
          <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-white">
            Professional. Transparent. Authentic.
          </h1>

        </Slider>
      </div>
      <div className="relative container mx-auto flex flex-col items-center justify-center  text-center text-white px-4">
        <p className="text-lg md:text-2xl mb-8">
          Dubai’s fastest growing brokerage, while providing a new standard of
          service
        </p>
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
                  <input
                    type="text"
                    placeholder="City, community or area"
                    className="p-2 rounded m-1 border border-gray-300 flex-1 w-[40vw] lg:w-[30vw]"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); }}
                  />
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
    </section>
  );
};

export default HeroSection;
