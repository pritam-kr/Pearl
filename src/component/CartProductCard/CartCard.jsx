import React from "react";
import "./CartCard.css";
import * as BiIcons from "react-icons/bi";
import { useCartContext } from "../../Context";

const CartCard = () => {
  const {
    state: { cart },
  } = useCartContext();


  return (
    <>
      {cart.length === 0 ? (
        <h1 className="Center">No Item in The Cart.</h1>
      ) : (
        cart.map((eachProduct) => (
          <div class="images-card horizontal-cart-card cart-card">
            <div className="cart-card-product-image">
              <img
                class="card-img"
                src={eachProduct.image}
                className="responsive-images"
              />
            </div>

            <div class="card-content">
              <h2 class="card-title product-title">{eachProduct.title}</h2>

              <h2 class="card-price product-price">
              ₹ {eachProduct.price}/-  <span class="discount-price">{eachProduct.discount}</span>
              </h2>

              <div class="quantity">
                <p class="text-md">Quantity: {eachProduct.qty}</p>

                <p>
                  <BiIcons.BiPlusCircle className="icons" />
                  <BiIcons.BiMinusCircle className="icons" />
                </p>
              </div>

              <div class="card-footer">
                <button class="btn btn-secondary btn-move-cart text-md">
                  Move to Wishlist
                </button>
              </div>
            </div>
            <BiIcons.BiTrash className="icons trash-icon" />
          </div>
        ))
      )}
    </>
  );
};

export { CartCard };