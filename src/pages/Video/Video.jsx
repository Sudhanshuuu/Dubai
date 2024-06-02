import React, { useState } from "react";
import HeroSection from "../../components/Video/HeroSection";
import VideoSection from "../../components/Video/VideoSection";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

function Video() {

    let [video, setVideo] = useState(0);

    return (<div>
        <Navbar />
        <HeroSection video={video} />
        <VideoSection video={video} />
        <Footer />
    </div>)
}

export default Video;