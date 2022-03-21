import React from "react";
import { useCartContext } from "../../Context/index";
import { CartCard } from "../../component/index";
import "./MyCart.css";

const MyCart = () => {
  const { state: {cart} } = useCartContext();

  return (
    <>
      <div className="section cart-section">

        <div className="cart-wrapper">
            
          <div className="product-list-wrapper">
            <h3 class="large-heading page-title">My Cart </h3>
            <CartCard />
          </div>

          <div className="price-details-wrapper">
            <h3 class="large-heading page-title">Price Details</h3>
          </div>

        </div>
      </div>
    </>
  );
};

export { MyCart };
