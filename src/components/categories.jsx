import React from "react";
import "./categories.css";

const categories = [
  { img: "./src/assets/Group 482.png" },
  { img: "./src/assets/Group 489.png" },
  { img: "./src/assets/Group 484.png" },
  { img: "./src/assets/Group 490.png" },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="category-cards">
        {categories.map((cat) => (
          <div className="category-card" key={cat.img}>
            <img src={cat.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;