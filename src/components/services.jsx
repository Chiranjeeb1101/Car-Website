import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        <div className="service-card dark-card">
          <h3><em>All Brands</em></h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <a href="#" className="learn-more">
            Learn More <span>→</span>
          </a>
        </div>

        <div className="service-img">
          <img src="./src/assets/Car_interior_01.png" alt="Car Interior" />
        </div>

        <div className="service-img">
          <img src="./src/assets/Car_interior_02.png" alt="Car Gear" />
        </div>

        <div className="service-card dark-card">
          <h3><em>Free Support</em></h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <a href="#" className="learn-more">
            Learn More <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
