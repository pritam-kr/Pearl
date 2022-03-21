import React from "react";
import * as BiIcons from "react-icons/bi";
import { priceFormatter } from "../../utils/priceFormatter";
import { useWishListContext } from "../../Context/";
import {useCartContext} from "../../Context/index"

const WishListCard = ({ eachProduct }) => {
    
    const {addToCart} = useCartContext()

    const { _id, image, title, price, rating, discount } = eachProduct;

    const { removeFromWishlist } = useWishListContext();

    return (
        <div className="images-card badge-card product-card" key={_id}>
            <img className="card-img" src={image} alt={title} />

            <div className="card-content">
                <h2 className="card-title product-title">{title}</h2>
                <h1 className="card-price product-price">
                    ₹ {priceFormatter(price)}
                    <span className="discount-price"> {discount}</span>
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
