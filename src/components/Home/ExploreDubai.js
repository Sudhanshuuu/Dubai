// src/components/ExploreDubai.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreDubai = () => {
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
    <section className="  w-full py-8 md:py-[3%] *:font-sans">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold sm:text-left md:text-4xl sm:pl-[1%]">Explore Dubai</h2>
        <Slider {...settings}>
          <div className="px-4 py-3">
            <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
              <img
                src="https://images.pexels.com/photos/10513876/pexels-photo-10513876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Palm Jumeirah"
                className="mx-auto mb-4 w-[100%] h-[65vh]"
              />
              <h3 className="text-xl font-semibold mb-2">Palm Jumeirah</h3>
              <p className="text-gray-700">
                Iconic island lifestyle with beautiful beaches.
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
              <img
                src="https://images.pexels.com/photos/4471198/pexels-photo-4471198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dubai Marina"
                className="mx-auto mb-4 w-[100%] h-[65vh]"
              />
              <h3 className="text-xl font-semibold mb-2">Dubai Marina</h3>
              <p className="text-gray-700">
                The city hub with meticulously planned community.
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
              <img
                src="https://images.pexels.com/photos/16430192/pexels-photo-16430192/free-photo-of-dubai-skyscrapers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dubai Hill Estates"
                className="mx-auto mb-4 w-[100%] h-[65vh]"
              />
              <h3 className="text-xl font-semibold mb-2">Dubai Hill Estates</h3>
              <p className="text-gray-700">
                Suburban lifestyle with lush greenery.
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
              <img
                src="https://images.pexels.com/photos/16430192/pexels-photo-16430192/free-photo-of-dubai-skyscrapers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dubai Hill Estates"
                className="mx-auto mb-4 w-[100%] h-[65vh]"
              />
              <h3 className="text-xl font-semibold mb-2">Dubai Hill Estates</h3>
              <p className="text-gray-700">
                Suburban lifestyle with lush greenery.
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="area text-center bg-white rounded-lg py-7 shadow-md border">
              <img
                src="https://images.pexels.com/photos/16430192/pexels-photo-16430192/free-photo-of-dubai-skyscrapers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dubai Hill Estates"
                className="mx-auto mb-4 w-[100%] h-[65vh]"
              />
              <h3 className="text-xl font-semibold mb-2">Dubai Hill Estates</h3>
              <p className="text-gray-700">
                Suburban lifestyle with lush greenery.
              </p>
            </div>
          </div>
          {/* Add more slides here */}
        </Slider>
      </div>
    </section>
  );
};

export default ExploreDubai;
