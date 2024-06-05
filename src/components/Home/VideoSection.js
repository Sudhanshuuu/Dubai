import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-gray-100 py-8 sm:py-[3%] *:font-sans">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12 md:text-4xl">
          Video of the Week
        </h2>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-12 px-[1%]">
          <div className="lg:w-[80%]">
            <video
              autoPlay
              loop
              muted
              className="w-full rounded-lg shadow-lg"
              style={{
                zIndex: "-1",
              }}
            >
              <source
                src="https://videos.pexels.com/video-files/5057531/5057531-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              {/* You can add additional source elements for different video formats */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 mt-4 lg:mt-0 lg:text-left">
            <h3 className=" text-xl font-semibold mb-4 text-gray-900 text-align-left md:text-3xl">
              Meet Our Team
            </h3>
            <p className="text-md text-gray-800 px-[3%] mb-8 md:text-lg">
              The dream team that runs the show, Selling BIG Sunset Dreams with
              Real Estate. So trust us when we say with ,
              you've got our support from start to finish & beyond!
            </p>
            <button className="mx-auto py-4 bg-[#173D73] text-white rounded-lg shadow-md  transition duration-300 w-[35%]">
              More Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
