import React from "react";
import * as BiIcons from "react-icons/bi";
import {priceFormatter} from "../../utils/priceFormatter"

const FeaturedCardProduct = ({eachProduct}) => {
  return (
    <div className="featured-product-card">
      <img
        src={eachProduct.image}
        className="responsive-images featured-product-image"
        alt="featured-product"
      />

      <div className="card-content">
        <div className="space-between">
          <h2 className="product-title">{eachProduct.title}</h2>{" "}
          <span className="text-sm center">
            {" "}
            <BiIcons.BiStar /> {eachProduct.rating} / 5{" "}
          </span>
        </div>

        <h3 className="product-price">₹ {priceFormatter(eachProduct.price)}</h3>
      </div>
    </div>
  );
};


export {FeaturedCardProduct}