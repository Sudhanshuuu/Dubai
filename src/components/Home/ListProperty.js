import React from "react";

const ListProperty = () => {
  return (
    <section className="bg-black text-white py-20 *:font-sans" id="list-property">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-8 md:text-4xl">List your property</h2>
          <p className="text-lg w-[80%] mx-auto">
            Our diverse property portfolio caters to all aspirations. Browse through our listings of
            apartments, villas, penthouses, lofts,and duplexes. For the truly ambitious, we offer plots of land
            - the perfect canvas to build your custom dream home
            
          </p>
          <br />
          <ul className="mt-4 text-sm flex flex-wrap justify-center">
            <li className="flex items-center mb-2 mr-6">
              <span className="text-green-500 mr-2">&#10003;</span>
              Dedicated broker
            </li>
            <li className="flex items-center mb-2 mr-6">
              <span className="text-green-500 mr-2">&#10003;</span>
              Professional Photography
            </li>
            <li className="flex items-center mb-2 mr-6">
              <span className="text-green-500 mr-2">&#10003;</span>
              Upgraded listings
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">&#10003;</span>
              and much more...
            </li>
          </ul>
        </div>

        <p className="text-center mb-6">
          Take your property Exclusive with Real Estate and enjoy all the
          exclusive benefits.
        </p>

        <div className="flex justify-center">
          <button className="px-6 py-3 bg-[#173D73] text-white rounded transition duration-300">
            Book a Valuation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListProperty;
