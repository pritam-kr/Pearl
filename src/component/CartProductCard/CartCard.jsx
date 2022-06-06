import React from "react";
import "./CartCard.css";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { useCartContext } from "../../Context";
import { useWishListContext } from "../../Context/";
import { useEffect } from "react";

const CartCard = ({ getTotalQuantity }) => {
  useEffect(() => (document.title = "Cart"), []);

  const {
    state: { cart },
    incrementQuantity,
    decrementQuantity,
    deleteCartItem,
  } = useCartContext();

  const {
    addToWishlist, removeFromWishlist,
    state: { loading, wishlist },
  } = useWishListContext();

  // Product remove at Zero
  const productRemove = (quantity, product) => {
    if (quantity <= 0) {
      deleteCartItem(product);
    }
  };

  return (
    <>
      {cart?.map((eachProduct) => (
        <div
          className="images-card horizontal-cart-card cart-card"
          key={eachProduct._id}
        >
          <div className="cart-card-product-image">
            <img
              className="card-img  responsive-images"
              src={eachProduct.image}
            />
          </div>

          <div className="card-content">
            <h2 className="card-title product-title">{eachProduct.title}</h2>

            <h2 className="card-price product-price">
              ₹ {eachProduct.currentPrice}/-{" "}
              <span className="discount-price">
                ₹ {eachProduct.originalPrice}
              </span>
            </h2>

            <div className="quantity product-info">
              <p className="text-md">Quantity: {eachProduct.qty}</p>
              <p className="text-md space-between">
                Rating: <BiIcons.BiStar /> {eachProduct.rating}/5
              </p>
              <p>
                <BiIcons.BiMinusCircle
                  className="icons"
                  style={
                    eachProduct.qty === 1 ||
                    productRemove(eachProduct.qty, eachProduct)
                      ? { opacity: 0.3, cursor: "none" }
                      : { opacity: 1 }
                  }
                  onClick={() => decrementQuantity(eachProduct, "decrement")}
                />

                <BiIcons.BiPlusCircle
                  className="icons"
                  onClick={() => incrementQuantity(eachProduct, "increment")}
                />
              </p>
            </div>

            <div className="card-footer">
              <div className="btn-wishlist myCart-wishlist-button">
                {wishlist.find(
                  (eachItem) => eachItem._id === eachProduct._id
                ) ? (
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
                      addToWishlist(eachProduct)  
                    }
                  >
                    <FaIcons.FaHeart className="wishlist-icon" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <BiIcons.BiTrash
            className="icons trash-icon"
            onClick={() => deleteCartItem(eachProduct)}
          />
        </div>
      ))}
    </>
  );
};

export { CartCard };
