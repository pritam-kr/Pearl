import * as BiIcons from "react-icons/bi";
import * as FaIcons  from "react-icons/fa";
import React from "react";
import "./ProductCard.css";
import { useCartContext } from "../../Context/CartContext/CartContext";
import { priceFormatter } from "../../utils/priceFormatter";

const token = localStorage.getItem("login-Token");

const ProductCard = ({ eachProduct }) => {
    const { addToCart} = useCartContext();

    const addToCartHandler = (eachProduct) => {
        addToCart(eachProduct)

     };

    const { id, title, categoryName, Karat, image, price, rating, inStock } =
        eachProduct;

    return (
        <>
            <div className="images-card badge-card product-card" key={id}>
                <img className="card-img" src={image} alt="product_image" />

                <div className="card-content">
                    <h2 className="card-title product-title">{title}</h2>
                    <h1 className="card-price product-price">
                        {" "}
                        ₹ {priceFormatter(price)}{" "}
                        <span className="discount-price">₹ 19999/-</span>
                    </h1>
                    <p className="text-sm">
                        <BiIcons.BiStar className="rating-start" /> {rating}/5
                    </p>
                </div>

                <div className="card-footer">
                    <div className="move-cart-buttons">
                        <button
                            className="btn btn-primary btn-move-cart text-sm center"
                            onClick={() => addToCartHandler(eachProduct)}
                        >
                            {" "}
                            <BiIcons.BiCart className="cart-icon" /> Add to Cart
                        </button>
                    </div>
                </div>

                {inStock === 0 ? (
                    <h4 class="overlay-text outof-text text-sm">
                        <span>Out of Stock</span>
                    </h4>
                ) : (
                    ""
                )}

                <div class="btn-wishlist"><FaIcons.FaHeart className="wishlist-icon"/></div>
            </div>
        </>
    );
};

export { ProductCard };
