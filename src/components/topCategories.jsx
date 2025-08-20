import React from "react";
import "./topCategories.css";

export default function TopCategories() {
  const tabs = ["In stock", "Used Cars", "Any Modals", "Any Motors", "All Prices"];

  const carData = [
    { img: "./src/assets/Group 62.png" },
    { img: "./src/assets/Group 63.png" },
    { img: "./src/assets/Group 64.png" },
    { img: "./src/assets/Group 65.png" }
  ];

  return (
    <div className="top-categories">
      <h2 className="title">Top Categories</h2>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button key={index} className={index === 0 ? "active" : ""}>
            {tab}
          </button>
        ))}
      </div>

      <div className="hero-top">
        <img
          src="./src/assets/Rolls_Roys.png"
          alt="Rolls Royce"
          className="hero-img-top"
        />
        <div className="hero-text-top">
          <h3>Rolls Royce Wraith</h3>
          <button>Learn More</button>
        </div>
      </div>

      <div className="car-grid">
        {carData.map((car, i) => (
          <div className="car-card" key={i}>
            <img src={car.img} alt={`Car ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
