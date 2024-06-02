import React from "react";
import HeroSection from "../../components/About/HeroSection";
import CeoMessage from "../../components/About/CeoMesssage";
import AboutCom from "../../components/About/About";
import Team from "../../components/About/Team";
import Useful from "../../components/About/Useful";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import ChooseUs from "../../components/About/ChooseUs";
import Service from "../../components/About/Services";

function About() {
    return (<div>
        <Navbar/>
        <HeroSection />
        <CeoMessage />
        <Team />
        <AboutCom />
        <ChooseUs/>
        <Service/>
        <Useful />
        <Footer />
    </div>)
}

export default About;