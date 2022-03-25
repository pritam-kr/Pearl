import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa"
import "./Card.css"
import {priceFormatter} from "../../utils/priceFormatter"
import {useWishListContext, useCartContext} from "../../Context/"
 

const FeaturedCardProduct = ({eachProduct}) => {

  const {addToWishlist, state: {wishlist}, removeFromWishlist} = useWishListContext()
  const {addToCart} = useCartContext()

  return (
    <div className="featured-product-card" key={eachProduct._id}>
      <img
        src={eachProduct.image}
        className="responsive-images featured-product-image"
        alt={eachProduct.title} onClick={() => addToCart(eachProduct)}
      />

      <div className="card-content">
        <div className="space-between">
          <h2 className="product-title">{eachProduct.title}</h2>{" "}
          <span className="text-sm center">
            {" "}
            <BiIcons.BiStar /> {eachProduct.rating} / 5{" "}
          </span>
        </div>

        <h3 className="product-price">₹ {priceFormatter(eachProduct.currentPrice)}</h3>
      </div>

      <div className="btn-wishlist btn-wishlist-icon2">
        {wishlist.find((eachItem) => eachItem._id === eachProduct._id) ? (<FaIcons.FaHeart className="wishlist-icon" style={{color: "#cc2e2e"}} onClick={() =>  {removeFromWishlist(eachProduct)}} />) : (<FaIcons.FaHeart className="wishlist-icon" onClick={() => addToWishlist(eachProduct)}/>)}
      </div>

    </div>
  );
};


export {FeaturedCardProduct}