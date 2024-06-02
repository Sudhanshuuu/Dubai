import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("rent");

  let [buyProperty, setBuyProperty] = useState([{}]);
  let [rentProperty, setRentProperty] = useState([{}]);
  let [holdiayProperty, setHolidayProperty] = useState([{}]);
  let [commercialProperty, setCommercialProperty] = useState([{}]);

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:3005/realEstate?display=handPick`)
        .then(response => {

          setBuyProperty(response.data.filter((d) => { return d.type === "Buy" && d.status === "approved" }))
          setRentProperty(response.data.filter((d) => { return d.type === "Rent" && d.status === "approved" }))
          setCommercialProperty(response.data.filter((d) => { return d.type === "Commercial" && d.status === "approved" }))
          setHolidayProperty(response.data.filter((d) => { return d.type === "HolidayHome" && d.status === "approved" }))
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }
    getData();

  }, [buyProperty, rentProperty, commercialProperty]);

  // Define properties for each category
  const propertiesByCategory = {
    rent: [
      ...rentProperty
    ],
    buy: [
      ...buyProperty
      // Add more properties for buy category
    ],
    holidayHome: [
      ...holdiayProperty
      // Add more properties for holiday home category
    ],
    commercial: [
      ...commercialProperty
      // Add more properties for commercial category
    ],
  };

  // Get properties based on the selected category
  const selectedProperties = propertiesByCategory[selectedCategory] || [];
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

  return (
    <section className=" py-8 bg-gray-100 text-center sm:py-[3%] *:font-sans" id="properties">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 md:text-4xl ">Handpicked Properties</h2>
        {/* Tab buttons for selecting property category */}
        <div className="flex justify-center mb-8 mx-6">
          <button
            className={`mr-1 sm:mr-4 py-2 px-3 rounded ${selectedCategory === "rent"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedCategory("rent")}
          >
            Rent
          </button>
          <button
            className={`mr-1 sm:mr-4 py-2 px-4 rounded ${selectedCategory === "buy"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedCategory("buy")}
          >
            Buy
          </button>
          <button
            className={`mr-1 sm:mr-4 py-2 px-4 rounded ${selectedCategory === "holidayHome"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedCategory("holidayHome")}
          >
            Holiday <span className=" hidden sm:inline-block">Home</span>
          </button>
          <button
            className={`py-2 px-4 rounded ${selectedCategory === "commercial"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedCategory("commercial")}
          >
            Commercial
          </button>
        </div>
        {/* Render properties based on the selected category */}
        <Slider {...settings} className="w-[90%]  mx-auto">
          {selectedProperties.map((property, index) => (
            <div
              key={index}
              className=" px-6 w-full lg:w-1/4"
            >
              <div
                className="bg-white py-4 rounded shadow-md"
              >
                <img
                  src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Property"
                  className="mb-4"
                />
                <h3 className="font-bold text-xl mb-2">{property.name}</h3>
                {property.type === "Buy" && (<p>{property.price} AED</p>)}
                {property.type === "Rent" && (<p>{property.price} AED/month</p>)}
                {property.type === "Commercial" && (<p>{property.price} AED/month</p>)}
                {property.type === "HolidayHome" && (<p>{property.price} AED/night</p>)}
                <p>{property.location}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Properties;
