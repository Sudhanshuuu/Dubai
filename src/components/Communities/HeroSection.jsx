import React from "react";

function HeroSection() {
    return (<div className="relative w-screen h-[85vh] *:font-sans">
      <div className="bg-black absolute top-0 left-0 bottom-0 right-0 opacity-40"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-[100vw] h-[85vh] object-cover"
        style={{
          zIndex: "-1",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/5057528/5057528-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] *:text-white w-[100%]">

            <div>Dubai Community Guide</div>
            <div className="text-4xl my-[2%] font-semibold md:text-6xl "> Dubai's most coveted communities</div>
        </div>
    </div>)
}

export default HeroSection