import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import React from "react";
import "./ProductCard.css";
import { useCartContext } from "../../Context/CartContext/CartContext";
import { priceFormatter } from "../../utils/priceFormatter";
import { useAuthContext, useWishListContext } from "../../Context/index";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ eachProduct }) => {
  const {
    addToWishlist,
    state: { wishlist, loading },
    removeFromWishlist,
  } = useWishListContext();
  const {
    addToCart,
    state: { cart, loader },
  } = useCartContext();
  const navigate = useNavigate();
  const { token } = useAuthContext();
  const addToCartHandler = (eachProduct) => {
    addToCart(eachProduct);
  };

  const {
    _id,
    id,
    title,
    categoryName,
    image,
    currentPrice,
    rating,
    inStock,
    originalPrice,
  } = eachProduct;

  const singleProductHandler = () => {
    navigate(`/sp/${_id}`);
  };

  return (
    <>
      <div className="images-card badge-card product-card" key={id}>
        <img
          className="card-img"
          src={image}
          alt={title}
          onClick={() => singleProductHandler()}
        />

        <div className="card-content">
          <h2 className="card-title product-title">{title}</h2>
          <p>{categoryName}</p>
          <h1 className="card-price product-price">
            {" "}
            ₹ {priceFormatter(currentPrice)}{" "}
            <span className="discount-price">
              ₹ {priceFormatter(originalPrice)}/-
            </span>
          </h1>
          <p className="text-sm">
            <BiIcons.BiStar className="rating-start" /> {rating}/5
          </p>
        </div>

        <div className="card-footer">
          <div className="move-cart-buttons">
            {cart.find((eachItem) => eachItem._id === eachProduct._id) ? (
              <button
                className="btn btn-primary btn-move-cart text-sm center"
                onClick={() => navigate("/cart")}
              >
                {" "}
                <BiIcons.BiCart className="cart-icon" /> Go to cart
              </button>
            ) : (
              <button
                className="btn btn-primary btn-move-cart text-sm center"
                disabled={loader}
                onClick={() => {
                  !token ? navigate("/login") : addToCartHandler(eachProduct);
                }}
              >
                <BiIcons.BiCart className="cart-icon" /> Add to Cart
              </button>
            )}
          </div>
        </div>

        {inStock === 0 ? (
          <h4 className="overlay-text outof-text text-sm">
            <span>Out of Stock</span>
          </h4>
        ) : (
          ""
        )}

        <div className="btn-wishlist">
          {token &&
          wishlist.find((eachItem) => eachItem._id === eachProduct._id) ? (
            <FaIcons.FaHeart
              className="wishlist-icon"
              style={{ color: "red" }}
              onClick={() => {
                removeFromWishlist(eachProduct);
              }}
            />
          ) : (
            <button
              className="btn-wishlist"
              disabled={loading}
              onClick={() =>
                token ? addToWishlist(eachProduct) : navigate("/login")
              }
            >
              <FaIcons.FaHeart className="wishlist-icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export { ProductCard };
