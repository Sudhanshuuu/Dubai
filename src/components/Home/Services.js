// src/components/Services.js
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services-section *:font-sans" >
      <div className="container">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Corporate Law</h3>
            <p>Providing comprehensive corporate legal services.</p>
          </div>
          <div className="service">
            <h3>Litigation</h3>
            <p>Expert representation in legal disputes.</p>
          </div>
          <div className="service">
            <h3>Real Estate</h3>
            <p>Handling all aspects of real estate transactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
