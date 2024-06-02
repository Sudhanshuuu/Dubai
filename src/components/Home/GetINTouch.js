import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-black py-20 *:font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-gray-300 mb-6">
            Have a question or want to learn more about our services? Feel free
            to reach out to us.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 inline-block animate-bounce">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
