import React from "react";
import HeroSection from "../../components/Team/HeroSection";
import TeamSection from "../../components/Team/TeamSection";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

function Team() {
    return (<div>
        <Navbar />
        <HeroSection />
        <TeamSection />
        <Footer />
    </div>)
}

export default Team;