// src/components/About.js
import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container *:font-sans">
        <h6>About Real Estate</h6>
        <h1></h1>
        <h2 className="text-2xl font-bold mb-8 md:text-4xl">
          {" "}
          Real Estate are the Brightest and Fastest growing Real Estate Brokerage
          Firm in Dubai.
        </h2>
        <div className="team">
          <div className="team-member">
            <img
              src="https://www.whiteandcogroup.com/static/6902fd7f147e6515b7ebd7770d8bf680/a1149/Calum_169bdbdac1.webp"
              alt="Team Member"
            />
            <h3>Callum White</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://www.whiteandcogroup.com/static/3b5de2aac5a9495b62d53e380632840f/a1149/Rob_1ab41ca307.webp"
              alt="Team Member"
            />
            <h3>Neil Mckean</h3>
            <p>Managing Director</p>
          </div>
          <div className="team-member">
            <img
              src="https://www.whiteandcogroup.com/static/1bfd80ec7e05ab022f6a4c6122cc24f3/a1149/Poppy_e49ebc7524.webp"
              alt="Team Member"
            />
            <h3>Robert Searle</h3>
            <p>Sales Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
