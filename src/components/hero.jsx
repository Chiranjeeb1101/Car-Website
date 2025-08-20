import React from "react";
import "./hero.css";

function Hero(){
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find Your Dream Car</h1>
                <p>Your dream car is just a click away. Explore our latest models and unbeatable offers!</p>
                <button>Read More</button> 
            </div>
            <div className="hero-image">
                <img src="./src/assets/whiteCar.png" alt="Car" />
            </div>
        </section>
    )
}
export default Hero;