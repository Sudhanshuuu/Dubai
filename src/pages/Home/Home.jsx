import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import Properties from "../../components/Home/Properties";
import About from "../../components/Home/About";
import ListProperty from "../../components/Home/ListProperty";
import VideoSection from "../../components/Home/VideoSection";
import ExploreDubai from "../../components/Home/ExploreDubai";
import TestimonialSection from "../../components/Home/TestimonialSection";
import Footer from "../../components/Footer";
import BuyProperty from "../../components/Home/BuyProperty";
import TopProperty from "../../components/Home/TopProperty";
import Navbar from "../../components/Header";

function Home() {
 
   let imagePath = 'http://localhost:3005'

    return (<div>
        <Navbar/>
        <HeroSection />
        <BuyProperty imagePath={imagePath} />
        <TopProperty imagePath={imagePath}/>
        <Properties imagePath={imagePath}/>
        <About />
        <ListProperty />
        <VideoSection />
        <ExploreDubai />
        <TestimonialSection />
        <Footer />
    </div>)
}

export default Home;