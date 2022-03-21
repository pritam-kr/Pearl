import React from "react";
import "./CategoryImage.css";
import { useCategoryContext } from "../../Context/index";

const CategoryImage = () => {
  const { category } = useCategoryContext();

  return (
    <>
      {category.map((eachCategory) => (
        <div className="category-card" key={eachCategory._id}>
          <img
            src={eachCategory.image}
            className="responsive-images featured-product-image"
            alt="featured-product"
          />

          <div className="card-content">
            <h2 className="product-title category-title">
              {eachCategory.categoryName}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
};
export { CategoryImage };
