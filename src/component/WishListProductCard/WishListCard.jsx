import React from "react";
import * as BiIcons from "react-icons/bi";
import { priceFormatter } from "../../utils/priceFormatter";
import { useWishListContext } from "../../Context/";
import {useCartContext} from "../../Context/index"
import "./WishlistCard.css"
 

const WishListCard = ({ eachProduct }) => {
    const {addToCart} = useCartContext()
    const { _id, image, title, currentPrice, rating, originalPrice } = eachProduct;

    const { removeFromWishlist, state: {wishlist} } = useWishListContext();

   
    return (
        <div className="images-card badge-card wishlist-card" key={_id}>
            <img className="card-img" src={image} alt={title} />

            <div className="card-content">
                <h2 className="card-title product-title">{title}</h2>
                <h1 className="card-price product-price">
                    ₹ {priceFormatter(currentPrice)}
                    <span className="discount-price"> {priceFormatter(originalPrice)}</span>
                </h1>
                <p className="text-sm">
                    <BiIcons.BiStar className="rating-start" /> {rating}/5
                </p>
            </div>

            <div className="card-footer">
                <div className="move-cart-buttons">
                    <button className="btn btn-primary btn-move-cart text-sm center" onClick={() => {addToCart(eachProduct), removeFromWishlist(eachProduct)}}>
                        <BiIcons.BiCart className="cart-icon" /> Move to Cart
                    </button>
                </div>
            </div>
            <div className="btn-wishlist">
                <BiIcons.BiTrash
                    className="wishlist-icon"
                    onClick={() => removeFromWishlist(eachProduct)}
                />
            </div>
        </div>
    );
};

export { WishListCard };
