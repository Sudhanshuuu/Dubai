import React from "react";
import HeroSection from "../../components/Review/HeroSection";
import VideoSection from "../../components/Review/VideoSection";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import Faq from "../../components/Review/Faq";
import Testimonial from "../../components/Review/Testimonals";

function Review() {
    return (<div>
        <Navbar />
        <HeroSection />
        <VideoSection />
        <Testimonial/>
        <Faq/>
        <Footer/>
    </div>)
}

export default Review;