import React from "react";
import "./CartCard.css";
import * as BiIcons from "react-icons/bi";
import { useCartContext } from "../../Context";
import { useWishListContext } from "../../Context/";

const CartCard = () => {
  const {
    state: { cart },
    incrementQuantity,
    decrementQuantity,
    deleteCartItem,
  } = useCartContext();

  const { addToWishlist } = useWishListContext();

  return (
    <>
      {cart !== null && cart.length === 0 ? (
        <h1 className="Center">No Item in The Cart.</h1>
      ) : (
        cart.map((eachProduct) => (
          <div className="images-card horizontal-cart-card cart-card">
            <div className="cart-card-product-image">
              <img
                className="card-img  responsive-images"
                src={eachProduct.image}
               
              />
            </div>

            <div className="card-content">
              <h2 className="card-title product-title">{eachProduct.title}</h2>

              <h2 className="card-price product-price">
                ₹ {eachProduct.price}/-{" "}
                <span className="discount-price">{eachProduct.discount}</span>
              </h2>

              <div className="quantity">
                <p className="text-md">Quantity: {eachProduct.qty}</p>

                <p>
                  <BiIcons.BiPlusCircle
                    className="icons"
                    onClick={() => incrementQuantity(eachProduct, "increment")}
                  />
                  <BiIcons.BiMinusCircle
                    className="icons"
                    onClick={() => decrementQuantity(eachProduct, "decrement")}
                  />
                </p>
              </div>

              <div className="card-footer">
                <button
                  className="btn btn-secondary btn-move-cart text-md"
                  onClick={() => {
                    addToWishlist(eachProduct), deleteCartItem(eachProduct);
                  }}
                >
                  Move to Wishlist
                </button>
              </div>
            </div>
            <BiIcons.BiTrash
              className="icons trash-icon"
              onClick={() => deleteCartItem(eachProduct)}
            />
          </div>
        ))
      )}
    </>
  );
};

export { CartCard };
