import React from "react";
import "./category.css";
import { Link } from "react-router-dom";


const CategoryOptions = ({ category }) => {
  return (
    <div className="category-options" style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px', marginBottom: '15px'}}>
      {category.map((category, index) => (
        <div key={index} className="category-option">
        <Link key={index} to={category.link} className="category-option">
          <img
            src={category.imageURL}
            alt={category.name}
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }}
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryOptions;
